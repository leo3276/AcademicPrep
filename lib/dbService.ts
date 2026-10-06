import { supabaseAdmin, isSupabaseConfigured } from './supabaseClient';
import { buildTopicProgressWrite } from './topicProgressWrite';

/**
 * SERVER-ONLY DATA ACCESS LAYER.
 *
 * Every function here uses the service_role client and therefore bypasses Row
 * Level Security. Only API route handlers may import this module. Browser code
 * must go through `lib/apiClient.ts`, which calls these routes over HTTP.
 */

export interface StudentRow {
  id: string;
  phone_number: string;
  full_name: string;
  current_level: string;
  has_full_access: boolean;
  access_type: string;
  access_expires_at: string | null;
  completed_topic_ids: string[];
  topics_completed_count: number;
  avg_score_percentage: number;
  last_active_at: string;
  created_at: string;
}

/** Shape returned to clients. Never includes pin_hash. */
export interface SafeStudent {
  id: string;
  phoneNumber: string;
  fullName: string;
  currentLevel: string;
  hasFullAccess: boolean;
  accessType: string;
  accessExpiresAt: string | null;
  completedTopicIds: string[];
  topicsCompletedCount: number;
  avgScorePercentage: number;
  lastActiveAt: string;
  createdAt: string;
}

/**
 * Convert a database row to the client-facing shape, deriving live access
 * state from access_expires_at so a lapsed subscription never reports as VIP.
 */
export function toSafeStudent(row: Record<string, any>): SafeStudent {
  const expiresAt = row.access_expires_at || null;
  const isExpired = expiresAt ? new Date(expiresAt).getTime() <= Date.now() : false;
  const hasFullAccess = Boolean(row.has_full_access) && !isExpired;

  return {
    id: row.id,
    phoneNumber: row.phone_number,
    fullName: row.full_name,
    currentLevel: row.current_level || 'JHS 1',
    hasFullAccess,
    accessType: isExpired ? 'Expired' : row.access_type || (hasFullAccess ? 'Full Pass' : 'Free Trial'),
    accessExpiresAt: expiresAt,
    completedTopicIds: row.completed_topic_ids || [],
    topicsCompletedCount: row.topics_completed_count || 0,
    avgScorePercentage: row.avg_score_percentage || 0,
    lastActiveAt: row.last_active_at || row.created_at,
    createdAt: row.created_at,
  };
}

/** Mask a phone number for public display: 0241234567 -> 024***4567. */
export function maskPhone(phone: string): string {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length < 6) return '***';
  return `${digits.slice(0, 3)}***${digits.slice(-3)}`;
}

export interface PublicLeaderboardEntry {
  name: string;
  level: string;
  phoneMasked: string;
  topicsCompleted: number;
  avgScorePercentage: number;
  rank: number;
  isCurrentUser: boolean;
}

/**
 * Public leaderboard. Deliberately excludes ids, phone numbers, access state
 * and per-topic history: this endpoint is reachable without authentication.
 *
 * `currentPhone` only controls the isCurrentUser flag. It is matched inside this
 * function and never returned, so the caller can highlight their own row
 * without the response leaking anyone's number.
 */
export async function fetchPublicLeaderboard(
  limit = 50,
  currentPhone?: string
): Promise<PublicLeaderboardEntry[]> {
  if (!isSupabaseConfigured) return [];

  const { data, error } = await supabaseAdmin
    .from('students')
    .select('full_name, current_level, phone_number, topics_completed_count, avg_score_percentage')
    .order('topics_completed_count', { ascending: false })
    .order('avg_score_percentage', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('[dbService] leaderboard fetch failed:', error.message);
    return [];
  }

  return (data || []).map((row: any, index: number) => ({
    name: row.full_name || 'Student',
    level: row.current_level || 'JHS 1',
    phoneMasked: maskPhone(row.phone_number),
    topicsCompleted: row.topics_completed_count || 0,
    avgScorePercentage: row.avg_score_percentage || 0,
    rank: index + 1,
    isCurrentUser: Boolean(currentPhone) && row.phone_number === currentPhone,
  }));
}

/** Full student list for the admin dashboard. Requires admin authentication. */
export async function fetchStudentsForAdmin(): Promise<any[]> {
  if (!isSupabaseConfigured) return [];

  const { data, error } = await supabaseAdmin
    .from('students')
    .select(
      'id, phone_number, full_name, current_level, access_type, access_expires_at, ' +
        'last_active_at, topics_completed_count, completed_topic_ids, avg_score_percentage, created_at'
    )
    .order('topics_completed_count', { ascending: false })
    .order('avg_score_percentage', { ascending: false });

  if (error) {
    console.error('[dbService] admin student fetch failed:', error.message);
    return [];
  }

  return (data || []).map((s: any) => ({
    id: s.id,
    phone: s.phone_number,
    name: s.full_name,
    level: s.current_level,
    accessType: s.access_type,
    accessExpiresAt: s.access_expires_at,
    lastActive: s.last_active_at,
    topicsCompleted: s.topics_completed_count || 0,
    completedTopicIds: s.completed_topic_ids || [],
    avgScorePercentage: s.avg_score_percentage || 0,
    registeredAt: s.created_at,
  }));
}

export async function findStudentByPhone(phone: string): Promise<Record<string, any> | null> {
  if (!isSupabaseConfigured || !phone) return null;

  const { data, error } = await supabaseAdmin
    .from('students')
    .select('*')
    .eq('phone_number', phone)
    .maybeSingle();

  if (error) {
    console.error('[dbService] findStudentByPhone failed:', error.message);
    return null;
  }

  return (data as Record<string, any>) || null;
}

export async function findStudentById(id: string): Promise<Record<string, any> | null> {
  if (!isSupabaseConfigured || !id) return null;

  const { data, error } = await supabaseAdmin
    .from('students')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('[dbService] findStudentById failed:', error.message);
    return null;
  }

  return (data as Record<string, any>) || null;
}

export interface CreateStudentInput {
  phone: string;
  fullName: string;
  currentLevel: string;
}

/**
 * Create a student with a bcrypt-hashed PIN. The hash is produced inside the
 * database by `hash_student_pin`, so the plaintext is never stored and the
 * service key is never exposed to the caller.
 */
export async function createStudent(
  input: CreateStudentInput,
  plainPin: string
): Promise<{ success: boolean; student?: SafeStudent; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Server database is not configured.' };
  }

  const { data: hashData, error: hashErr } = await supabaseAdmin.rpc('hash_student_pin', {
    p_pin: plainPin,
  });

  if (hashErr || !hashData) {
    console.error('[dbService] hash_student_pin failed:', hashErr?.message);
    return { success: false, error: 'Could not secure the account password. Please try again.' };
  }

  const now = new Date().toISOString();

  const { data, error } = await supabaseAdmin
    .from('students')
    .insert({
      phone_number: input.phone,
      full_name: input.fullName,
      pin_hash: hashData as string,
      current_level: input.currentLevel,
      has_full_access: true,
      access_type: 'Full Pass',
      access_expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      completed_topic_ids: [],
      topics_completed_count: 0,
      avg_score_percentage: 0,
      last_active_at: now,
      created_at: now,
      updated_at: now,
    })
    .select()
    .single();

  if (error) {
    // 23505 = unique_violation: the phone number is already registered.
    if (error.code === '23505') {
      return {
        success: false,
        error: 'An account with this phone number already exists. Please switch to Sign In.',
      };
    }
    console.error('[dbService] createStudent failed:', error.message);
    return { success: false, error: 'Failed to create the student account.' };
  }

  return { success: true, student: toSafeStudent(data as Record<string, any>) };
}

/**
 * Verify a password inside the database. Returns false on any mismatch and
 * never reveals whether the phone number exists.
 */
export async function verifyPin(phone: string, plainPin: string): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  const { data, error } = await supabaseAdmin.rpc('verify_student_pin', {
    p_phone: phone,
    p_pin: plainPin,
  });

  if (error) {
    console.error('[dbService] verify_student_pin failed:', error.message);
    return false;
  }

  return data === true;
}

export async function setStudentPin(phone: string, plainPin: string): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  const { data, error } = await supabaseAdmin.rpc('set_student_pin', {
    p_phone: phone,
    p_pin: plainPin,
  });

  if (error) {
    console.error('[dbService] set_student_pin failed:', error.message);
    return false;
  }

  return data === true;
}

export async function touchLastActive(phone: string): Promise<void> {
  if (!isSupabaseConfigured) return;

  await supabaseAdmin
    .from('students')
    .update({ last_active_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('phone_number', phone);
}

export async function updateStudentLevel(phone: string, level: string): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  const { error } = await supabaseAdmin
    .from('students')
    .update({ current_level: level, last_active_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('phone_number', phone);

  if (error) {
    console.error('[dbService] updateStudentLevel failed:', error.message);
    return false;
  }

  return true;
}

export interface RedeemResult {
  success: boolean;
  message: string;
  validityDays: number;
  student?: SafeStudent;
}

/**
 * Redeem a scratch-card voucher atomically. The database function claims the
 * PIN with a conditional UPDATE, so concurrent redemptions cannot both succeed.
 */
export async function redeemAccessPin(pinCode: string, phone: string): Promise<RedeemResult> {
  if (!isSupabaseConfigured) {
    return {
      success: false,
      message: 'Database connection offline. Please check your internet connection.',
      validityDays: 0,
    };
  }

  const { data, error } = await supabaseAdmin.rpc('redeem_access_pin', {
    p_pin_code: pinCode,
    p_phone: phone,
  });

  if (error) {
    console.error('[dbService] redeem_access_pin failed:', error.message);
    return { success: false, message: 'Could not verify this PIN right now. Please try again.', validityDays: 0 };
  }

  const row = Array.isArray(data) ? data[0] : data;
  if (!row) {
    return { success: false, message: 'Invalid PIN code. Please verify the code and try again.', validityDays: 0 };
  }

  let student: SafeStudent | undefined;
  if (row.success && phone) {
    const refreshed = await findStudentByPhone(phone);
    if (refreshed) student = toSafeStudent(refreshed);
  }

  return {
    success: Boolean(row.success),
    message: String(row.message || ''),
    validityDays: Number(row.validity_days || 0),
    student,
  };
}

export interface GrantAccessResult {
  granted: boolean;
  alreadyProcessed: boolean;
  expiresAt: string | null;
}

/**
 * Record a verified Paystack payment and grant access exactly once per
 * reference. Replayed webhook deliveries return alreadyProcessed=true.
 */
export async function grantPaidAccess(params: {
  reference: string;
  phone: string;
  amountPesewas: number;
  channel?: string;
  source: 'verify' | 'webhook';
  validityDays?: number;
}): Promise<GrantAccessResult> {
  if (!isSupabaseConfigured) {
    return { granted: false, alreadyProcessed: false, expiresAt: null };
  }

  const { data, error } = await supabaseAdmin.rpc('grant_paid_access', {
    p_reference: params.reference,
    p_phone: params.phone,
    p_amount_pesewas: params.amountPesewas,
    p_channel: params.channel || null,
    p_source: params.source,
    p_validity_days: params.validityDays ?? 30,
  });

  if (error) {
    console.error('[dbService] grant_paid_access failed:', error.message);
    return { granted: false, alreadyProcessed: false, expiresAt: null };
  }

  const row = Array.isArray(data) ? data[0] : data;
  return {
    granted: Boolean(row?.granted),
    alreadyProcessed: Boolean(row?.already_processed),
    expiresAt: (row?.expires_at as string) || null,
  };
}

export interface AdminAccessResult {
  success: boolean;
  student?: SafeStudent;
  error?: string;
}

/**
 * Extend a student's paid access from the admin console. Remaining time is
 * preserved rather than overwritten so an early renewal never shortens a pass.
 */
export async function adminGrantAccess(
  phone: string,
  days: number
): Promise<AdminAccessResult> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Server database is not configured.' };
  }

  const existing = await findStudentByPhone(phone);
  if (!existing) {
    return {
      success: false,
      error: 'No registered account uses this phone number. Ask the student to register first.',
    };
  }

  const currentExpiry = existing.access_expires_at ? new Date(existing.access_expires_at).getTime() : 0;
  const baseTime = Math.max(currentExpiry, Date.now());
  const expiresAt = new Date(baseTime + days * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabaseAdmin
    .from('students')
    .update({
      has_full_access: true,
      access_type: 'Full Pass',
      access_expires_at: expiresAt,
      updated_at: new Date().toISOString(),
    })
    .eq('phone_number', phone)
    .select()
    .single();

  if (error) {
    console.error('[dbService] adminGrantAccess failed:', error.message);
    return { success: false, error: 'Could not update the student access.' };
  }

  const reference = `ADMIN-${phone}-${Date.now()}`;
  await supabaseAdmin.from('cash_flow_transactions').upsert(
    {
      reference,
      student_id: existing.id,
      student_phone: phone,
      amount_ghs: 0,
      transaction_type: 'PIN_PURCHASE',
      payment_method: 'ADMIN_GRANT',
      description: `Administrator granted ${days}-day access (no charge)`,
      created_at: new Date().toISOString(),
    },
    { onConflict: 'reference' }
  );

  return { success: true, student: toSafeStudent(data as Record<string, any>) };
}

/** Remove paid access immediately, without deleting any study progress. */
export async function adminRevokeAccess(phone: string): Promise<AdminAccessResult> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Server database is not configured.' };
  }

  const existing = await findStudentByPhone(phone);
  if (!existing) {
    return { success: false, error: 'No registered account uses this phone number.' };
  }

  const { data, error } = await supabaseAdmin
    .from('students')
    .update({
      has_full_access: false,
      access_type: 'Expired',
      access_expires_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('phone_number', phone)
    .select()
    .single();

  if (error) {
    console.error('[dbService] adminRevokeAccess failed:', error.message);
    return { success: false, error: 'Could not revoke the student access.' };
  }

  return { success: true, student: toSafeStudent(data as Record<string, any>) };
}

export interface AccessPinRow {
  id: string;
  pinCode: string;
  batchId: string;
  priceGhs: number;
  validityDays: number;
  status: string;
  redeemedByStudentPhone: string | null;
  redeemedAt: string | null;
  createdAt: string;
}

export async function fetchAccessPins(): Promise<AccessPinRow[]> {
  if (!isSupabaseConfigured) return [];

  const { data, error } = await supabaseAdmin
    .from('access_pins')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[dbService] fetchAccessPins failed:', error.message);
    return [];
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    pinCode: row.pin_code,
    batchId: row.batch_id,
    priceGhs: Number(row.price_ghs),
    validityDays: row.validity_days,
    status: row.status,
    redeemedByStudentPhone: row.redeemed_by_student_phone || null,
    redeemedAt: row.redeemed_at || null,
    createdAt: row.created_at,
  }));
}

export interface PinBatchInput {
  pinCode: string;
  batchId: string;
  priceGhs: number;
  validityDays: number;
}

/**
 * Insert a generated voucher batch. The id column is left to the database
 * default because it may be a UUID, which a caller-generated string would violate.
 */
export async function savePinBatch(pins: PinBatchInput[]): Promise<{ saved: number; error?: string }> {
  if (!isSupabaseConfigured) return { saved: 0, error: 'Database not configured' };
  if (!Array.isArray(pins) || pins.length === 0) return { saved: 0, error: 'No pins provided' };

  const now = new Date().toISOString();
  const rows = pins.map((p) => ({
    pin_code: String(p.pinCode).trim().toUpperCase(),
    batch_id: p.batchId,
    price_ghs: p.priceGhs,
    validity_days: p.validityDays,
    status: 'ACTIVE',
    created_at: now,
  }));

  const { data, error } = await supabaseAdmin
    .from('access_pins')
    .upsert(rows, { onConflict: 'pin_code' })
    .select('id');

  if (error) {
    console.error('[dbService] savePinBatch failed:', error.message);
    return { saved: 0, error: error.message };
  }

  return { saved: (data || []).length };
}

export interface StudentTopicProgressRow {
  topicId: string;
  completed: boolean;
  bestScorePercentage: number;
  attemptsCount: number;
  lastStudiedAt: string;
}

export async function fetchStudentProgress(phone: string): Promise<Record<string, StudentTopicProgressRow>> {
  const result: Record<string, StudentTopicProgressRow> = {};
  if (!isSupabaseConfigured || !phone) return result;

  const { data, error } = await supabaseAdmin
    .from('student_topic_progress')
    .select('*')
    .eq('student_phone', phone);

  if (error) {
    console.error('[dbService] fetchStudentProgress failed:', error.message);
    return result;
  }

  (data || []).forEach((item: any) => {
    result[item.topic_id] = {
      topicId: item.topic_id,
      completed: Boolean(item.completed),
      bestScorePercentage: item.best_score_percentage || 0,
      attemptsCount: item.attempts_count || 1,
      lastStudiedAt: item.last_studied_at || new Date().toISOString(),
    };
  });

  return result;
}

/**
 * Save topic progress and refresh the denormalised counters on students.
 *
 * Insert or update explicitly. A PostgREST upsert on (student_phone, topic_id)
 * does not work against the live unique index, which is partial
 * (`WHERE student_phone IS NOT NULL`), so ON CONFLICT cannot match it.
 */
export async function saveTopicProgress(params: {
  phone: string;
  topicId: string;
  scorePercentage: number;
}): Promise<void> {
  if (!isSupabaseConfigured || !params.phone) return;

  const now = new Date().toISOString();

  const { data: existing, error: selectErr } = await supabaseAdmin
    .from('student_topic_progress')
    .select('best_score_percentage, completed, attempts_count')
    .eq('student_phone', params.phone)
    .eq('topic_id', params.topicId)
    .maybeSingle();

  if (selectErr) {
    console.error('[dbService] progress lookup failed:', selectErr.message);
    return;
  }

  const write = buildTopicProgressWrite({
    phone: params.phone,
    topicId: params.topicId,
    scorePercentage: params.scorePercentage,
    existing: existing || null,
    nowIso: now,
  });

  const { error } =
    write.action === 'update'
      ? await supabaseAdmin
          .from('student_topic_progress')
          .update(write.payload)
          .eq('student_phone', params.phone)
          .eq('topic_id', params.topicId)
      : await supabaseAdmin.from('student_topic_progress').insert(write.payload);

  if (error) {
    console.error('[dbService] saveTopicProgress failed:', error.message);
    return;
  }

  const { data: allTopics } = await supabaseAdmin
    .from('student_topic_progress')
    .select('topic_id, completed, best_score_percentage')
    .eq('student_phone', params.phone);

  if (Array.isArray(allTopics)) {
    const completedIds = allTopics.filter((t: any) => t.completed).map((t: any) => t.topic_id);
    const scores = allTopics.map((t: any) => t.best_score_percentage || 0);
    const avg = scores.length > 0 ? Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length) : 0;

    await supabaseAdmin
      .from('students')
      .update({
        completed_topic_ids: completedIds,
        topics_completed_count: completedIds.length,
        avg_score_percentage: avg,
        last_active_at: now,
        updated_at: now,
      })
      .eq('phone_number', params.phone);
  }
}

export async function saveWeeklyExam(phone: string, attempt: Record<string, any>): Promise<void> {
  if (!isSupabaseConfigured || !phone) return;

  const { error } = await supabaseAdmin.from('weekly_exam_attempts').insert({
    student_phone: phone,
    level: attempt.level,
    paper1_score: attempt.paper1ScoreMarks,
    paper1_total: attempt.paper1TotalQuestions,
    paper2_score: attempt.paper2ScoreMarks,
    paper2_total: attempt.paper2TotalMarks,
    composite_total_percentage: attempt.compositeTotalPercentage,
    stanine_grade: attempt.stanineGrade,
    grade_remark: attempt.gradeRemark,
    completed_at: attempt.completedAt,
  });

  if (error) console.error('[dbService] saveWeeklyExam failed:', error.message);
}

export async function fetchWeeklyExams(phone: string): Promise<any[]> {
  if (!isSupabaseConfigured || !phone) return [];

  const { data, error } = await supabaseAdmin
    .from('weekly_exam_attempts')
    .select('*')
    .eq('student_phone', phone)
    .order('completed_at', { ascending: false });

  if (error) {
    console.error('[dbService] fetchWeeklyExams failed:', error.message);
    return [];
  }

  return data || [];
}

export async function saveStudentMistake(params: {
  phone: string;
  topicId: string;
  subjectName: string;
  subConcept: string;
  questionText: string;
  studentWrongAnswer: string;
  correctAnswer: string;
}): Promise<void> {
  if (!isSupabaseConfigured || !params.phone) return;

  const { error } = await supabaseAdmin.from('student_mistakes').insert({
    student_phone: params.phone,
    topic_id: params.topicId,
    subject_name: params.subjectName,
    sub_concept: params.subConcept,
    question_text: params.questionText,
    student_wrong_answer: params.studentWrongAnswer,
    correct_answer: params.correctAnswer,
    timestamp: new Date().toISOString(),
  });

  if (error) console.error('[dbService] saveStudentMistake failed:', error.message);
}

export async function fetchStudentMistakes(phone: string, limit = 50): Promise<any[]> {
  if (!isSupabaseConfigured || !phone) return [];

  const { data, error } = await supabaseAdmin
    .from('student_mistakes')
    .select('*')
    .eq('student_phone', phone)
    .order('timestamp', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('[dbService] fetchStudentMistakes failed:', error.message);
    return [];
  }

  return data || [];
}
