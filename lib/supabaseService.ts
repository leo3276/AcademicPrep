import { supabase, isSupabaseConfigured } from './supabaseClient';
import { Student, EducationLevel, StudentTopicProgress, AccessPin } from './types';
import type { FullWeeklyExamAttempt } from './weeklyProgressTracker';

export interface SupabaseStudentRow {
  id: string;
  phone_number: string;
  full_name: string;
  pin_hash?: string;
  current_level: string;
  has_full_access: boolean;
  access_type: 'Full Pass' | 'Free Trial' | 'Expired';
  access_expires_at?: string;
  completed_topic_ids?: string[];
  topics_completed_count: number;
  avg_score_percentage: number;
  last_active_at: string;
  created_at: string;
}

export function studentRowToStudent(row: SupabaseStudentRow): Student {
  const isExpired = row.access_expires_at ? new Date(row.access_expires_at).getTime() <= Date.now() : false;
  const hasFullAccess = Boolean(row.has_full_access) && !isExpired;

  return {
    id: row.id,
    phoneNumber: row.phone_number,
    fullName: row.full_name,
    currentLevel: (row.current_level || 'JHS 1') as EducationLevel,
    hasFullAccess,
    accessType: isExpired ? 'Expired' : (row.access_type || (hasFullAccess ? 'Full Pass' : 'Free Trial')),
    accessExpiresAt: row.access_expires_at,
    completedTopicIds: row.completed_topic_ids || [],
    topicsCompletedCount: row.topics_completed_count || 0,
    createdAt: row.created_at,
    lastActiveAt: row.last_active_at || row.created_at,
  };
}

/**
 * Register a new student account in Supabase
 */
export async function registerStudentInSupabase(params: {
  phoneNumber: string;
  fullName: string;
  password?: string;
  currentLevel: EducationLevel;
  hasFullAccess?: boolean;
  accessType?: 'Full Pass' | 'Free Trial';
  accessExpiresAt?: string;
}): Promise<{ success: boolean; student?: Student; error?: string }> {
  const cleanPhone = params.phoneNumber.trim().replace(/\s+/g, '');

  if (!params.password || !params.password.trim()) {
    return { success: false, error: 'Please create a password or PIN for your account.' };
  }

  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Database connection error. Please verify your internet or Supabase configuration.' };
  }

  try {
    // 1. Check if phone number already registered
    const { data: existing, error: checkErr } = await supabase
      .from('students')
      .select('id, phone_number')
      .eq('phone_number', cleanPhone)
      .maybeSingle();

    if (checkErr) {
      console.warn('Supabase check warning:', checkErr?.message || checkErr);
    }

    if (existing) {
      return { 
        success: false, 
        error: 'An account with this phone number already exists. Please switch to the Sign In tab.' 
      };
    }

    // 2. Insert new student row
    const now = new Date().toISOString();
    const insertPayload = {
      phone_number: cleanPhone,
      full_name: params.fullName.trim(),
      pin_hash: params.password.trim(),
      current_level: params.currentLevel,
      has_full_access: Boolean(params.hasFullAccess),
      access_type: params.accessType || (params.hasFullAccess ? 'Full Pass' : 'Free Trial'),
      access_expires_at: params.accessExpiresAt || null,
      completed_topic_ids: [],
      topics_completed_count: 0,
      avg_score_percentage: 0,
      last_active_at: now,
      created_at: now,
      updated_at: now,
    };

    const { data: newRow, error: insertErr } = await supabase
      .from('students')
      .insert(insertPayload)
      .select()
      .single();

    if (insertErr) {
      console.warn('Supabase registration error:', insertErr?.message || insertErr);
      return { success: false, error: insertErr.message || 'Failed to create student account in Supabase' };
    }

    return { success: true, student: studentRowToStudent(newRow as SupabaseStudentRow) };
  } catch (err: any) {
    console.warn('Supabase register error:', err?.message || err);
    return { success: false, error: err?.message || 'Database connection error during registration' };
  }
}

/**
 * Sign in an existing student account using Phone Number + Password/PIN
 */
export async function loginStudentInSupabase(
  phoneNumber: string,
  password?: string
): Promise<{ success: boolean; student?: Student; error?: string }> {
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');

  if (!password || !password.trim()) {
    return { success: false, error: 'Please enter your password or PIN.' };
  }

  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Database not connected. Please check configuration.' };
  }

  try {
    const { data: row, error: fetchErr } = await supabase
      .from('students')
      .select('*')
      .eq('phone_number', cleanPhone)
      .maybeSingle();

    if (fetchErr) {
      return { success: false, error: fetchErr.message };
    }

    if (!row) {
      return { 
        success: false, 
        error: 'No student account found with this phone number. Please click \'Create Account\' first.' 
      };
    }

    // Verify password strictly
    if (row.pin_hash && row.pin_hash.trim() !== '') {
      if (password.trim() !== row.pin_hash.trim()) {
        return { success: false, error: 'Incorrect password or PIN. Please try again.' };
      }
    } else {
      // If account was created without a password, lock it to this password now
      await supabase
        .from('students')
        .update({ pin_hash: password.trim() })
        .eq('phone_number', cleanPhone);
    }

    // Update last_active_at
    const now = new Date().toISOString();
    await supabase
      .from('students')
      .update({ last_active_at: now })
      .eq('phone_number', cleanPhone);

    return { 
      success: true, 
      student: studentRowToStudent({ ...row, last_active_at: now } as SupabaseStudentRow) 
    };
  } catch (err: any) {
    console.warn('Supabase login warning:', err?.message || err);
    return { success: false, error: err?.message || 'Failed to authenticate student' };
  }
}

/**
 * Fetch a single student record by phone number directly from Supabase
 */
export async function fetchStudentByPhoneFromSupabase(
  phoneNumber?: string
): Promise<Student | null> {
  if (!phoneNumber) return null;
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return null;

  try {
    const { data: row, error } = await supabase
      .from('students')
      .select('*')
      .eq('phone_number', cleanPhone)
      .maybeSingle();

    if (error || !row) return null;
    return studentRowToStudent(row as SupabaseStudentRow);
  } catch (err: any) {
    console.warn('Error fetching student from Supabase:', err?.message || err);
    return null;
  }
}

/**
 * Fetch all topic progress for a specific student phone from Supabase
 */
export async function fetchStudentProgressFromSupabase(
  phoneNumber?: string
): Promise<Record<string, StudentTopicProgress>> {
  const result: Record<string, StudentTopicProgress> = {};
  if (!phoneNumber) return result;
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return result;

  try {
    const { data, error } = await supabase
      .from('student_topic_progress')
      .select('*')
      .eq('student_phone', cleanPhone);

    if (error) {
      console.warn('[Supabase Progress Sync]', error?.message || error);
      return result;
    }

    if (Array.isArray(data)) {
      data.forEach((item) => {
        result[item.topic_id] = {
          topicId: item.topic_id,
          completed: Boolean(item.completed),
          bestScorePercentage: item.best_score_percentage || 0,
          attemptsCount: item.attempts_count || 1,
          lastStudiedAt: item.last_studied_at || new Date().toISOString(),
        };
      });
    }
  } catch (err: any) {
    console.warn('[Supabase Progress Sync] Exception:', err?.message || err);
  }

  return result;
}

/**
 * Save / Update a completed topic or quiz score in Supabase
 */
export async function saveTopicProgressToSupabase(params: {
  phoneNumber: string;
  topicId: string;
  scorePercentage: number;
}): Promise<void> {
  const cleanPhone = params.phoneNumber.trim().replace(/\s+/g, '');
  if (!isSupabaseConfigured || !supabase) return;

  try {
    const isCompleted = params.scorePercentage >= 60;
    const now = new Date().toISOString();

    const { data: existing } = await supabase
      .from('student_topic_progress')
      .select('*')
      .eq('student_phone', cleanPhone)
      .eq('topic_id', params.topicId)
      .maybeSingle();

    if (existing) {
      const newBestScore = Math.max(existing.best_score_percentage || 0, params.scorePercentage);
      const newCompleted = existing.completed || isCompleted;

      await supabase
        .from('student_topic_progress')
        .update({
          completed: newCompleted,
          best_score_percentage: newBestScore,
          attempts_count: (existing.attempts_count || 1) + 1,
          last_studied_at: now,
        })
        .eq('student_phone', cleanPhone)
        .eq('topic_id', params.topicId);
    } else {
      await supabase
        .from('student_topic_progress')
        .insert({
          student_phone: cleanPhone,
          topic_id: params.topicId,
          completed: isCompleted,
          best_score_percentage: params.scorePercentage,
          attempts_count: 1,
          last_studied_at: now,
        });
    }

    // Recalculate student overall stats in students table
    const { data: allTopics } = await supabase
      .from('student_topic_progress')
      .select('topic_id, completed, best_score_percentage')
      .eq('student_phone', cleanPhone);

    if (Array.isArray(allTopics)) {
      const completedIds = allTopics.filter((t) => t.completed).map((t) => t.topic_id);
      const scores = allTopics.map((t) => t.best_score_percentage || 0);
      const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

      await supabase
        .from('students')
        .update({
          completed_topic_ids: completedIds,
          topics_completed_count: completedIds.length,
          avg_score_percentage: avg,
          last_active_at: now,
          updated_at: now,
        })
        .eq('phone_number', cleanPhone);
    }
  } catch (err: any) {
    console.warn('Error saving topic progress to Supabase:', err?.message || err);
  }
}

/**
 * Fetch all students from Supabase for the real leaderboard
 */
export async function fetchLeaderboardFromSupabase(): Promise<any[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('students')
      .select('id, phone_number, full_name, current_level, access_type, access_expires_at, last_active_at, topics_completed_count, completed_topic_ids, avg_score_percentage, created_at')
      .order('topics_completed_count', { ascending: false })
      .order('avg_score_percentage', { ascending: false });

    if (error) {
      console.warn('Notice fetching Supabase leaderboard:', error?.message || error);
      return [];
    }

    return (data || []).map((s) => ({
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
  } catch (err: any) {
    console.warn('Error in fetchLeaderboardFromSupabase:', err?.message || err);
    return [];
  }
}

/**
 * Redeem an Access PIN for a student in Supabase
 */
export async function redeemPinInSupabase(
  phoneNumber?: string,
  validityDays: number = 30
): Promise<boolean> {
  if (!phoneNumber) return false;
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return false;

  try {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + validityDays);

    const { error } = await supabase
      .from('students')
      .update({
        has_full_access: true,
        access_type: 'Full Pass',
        access_expires_at: expiry.toISOString(),
        last_active_at: new Date().toISOString(),
      })
      .eq('phone_number', cleanPhone);

    return !error;
  } catch (err: any) {
    console.warn('Error redeeming pin in Supabase:', err?.message || err);
    return false;
  }
}

/**
 * Save Weekly Exam Attempt in Supabase
 */
export async function saveWeeklyExamToSupabase(
  phoneNumber: string,
  attempt: FullWeeklyExamAttempt
): Promise<void> {
  if (!phoneNumber) return;
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return;

  try {
    await supabase
      .from('weekly_exam_attempts')
      .insert({
        student_phone: cleanPhone,
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
  } catch (err: any) {
    console.warn('Error saving weekly exam to Supabase:', err?.message || err);
  }
}

/**
 * Fetch Weekly Exam Attempts for a student from Supabase
 */
export async function fetchWeeklyExamsFromSupabase(
  phoneNumber?: string
): Promise<any[]> {
  if (!phoneNumber) return [];
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('weekly_exam_attempts')
      .select('*')
      .eq('student_phone', cleanPhone)
      .order('completed_at', { ascending: false });

    if (error) return [];
    return data || [];
  } catch (err: any) {
    console.warn('Error fetching weekly exams from Supabase:', err?.message || err);
    return [];
  }
}

/**
 * Save Student Mistake to Supabase
 */
export async function saveStudentMistakeToSupabase(params: {
  phoneNumber?: string;
  topicId: string;
  subjectName: string;
  subConcept: string;
  questionText: string;
  studentWrongAnswer: string;
  correctAnswer: string;
}): Promise<void> {
  if (!params.phoneNumber) return;
  const cleanPhone = params.phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return;

  try {
    await supabase
      .from('student_mistakes')
      .insert({
        student_phone: cleanPhone,
        topic_id: params.topicId,
        subject_name: params.subjectName,
        sub_concept: params.subConcept,
        question_text: params.questionText,
        student_wrong_answer: params.studentWrongAnswer,
        correct_answer: params.correctAnswer,
        timestamp: new Date().toISOString(),
      });
  } catch (err: any) {
    console.warn('Error saving mistake to Supabase:', err?.message || err);
  }
}

/**
 * Fetch Student Mistakes from Supabase
 */
export async function fetchStudentMistakesFromSupabase(
  phoneNumber?: string
): Promise<any[]> {
  if (!phoneNumber) return [];
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!cleanPhone || !isSupabaseConfigured || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('student_mistakes')
      .select('*')
      .eq('student_phone', cleanPhone)
      .order('timestamp', { ascending: false })
      .limit(50);

    if (error) return [];
    return data || [];
  } catch (err: any) {
    console.warn('Error fetching mistakes from Supabase:', err?.message || err);
    return [];
  }
}

/**
 * Save / Upsert newly generated Access PIN batch to Supabase
 */
export async function savePinBatchToSupabase(pins: AccessPin[]): Promise<boolean> {
  if (!Array.isArray(pins) || pins.length === 0) return true;
  if (!isSupabaseConfigured || !supabase) return false;

  try {
    const rows = pins.map((p) => ({
      id: p.id,
      pin_code: p.pinCode.trim().toUpperCase(),
      batch_id: p.batchId,
      price_ghs: p.priceGhs,
      validity_days: p.validityDays,
      status: p.status || 'ACTIVE',
      redeemed_by_student_phone: p.redeemedByStudentId || null,
      redeemed_at: p.redeemedAt || null,
      created_at: p.createdAt || new Date().toISOString(),
    }));

    const { error } = await supabase
      .from('access_pins')
      .upsert(rows, { onConflict: 'pin_code' });

    if (error) {
      console.warn('Supabase save pin batch notice:', error.message);
      return false;
    }
    return true;
  } catch (err: any) {
    console.warn('Error saving pin batch to Supabase:', err?.message || err);
    return false;
  }
}

/**
 * Fetch all Access PINs from Supabase
 */
export async function fetchPinsFromSupabase(): Promise<AccessPin[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('access_pins')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase fetch pins notice:', error.message);
      return [];
    }

    return (data || []).map((row: any) => ({
      id: row.id,
      pinCode: row.pin_code,
      batchId: row.batch_id,
      priceGhs: Number(row.price_ghs),
      validityDays: row.validity_days,
      status: row.status,
      redeemedByStudentId: row.redeemed_by_student_phone,
      redeemedAt: row.redeemed_at,
      createdAt: row.created_at,
    }));
  } catch (err: any) {
    console.warn('Error fetching pins from Supabase:', err?.message || err);
    return [];
  }
}

/**
 * Strict single-use redemption of an Access PIN in Supabase
 */
export async function redeemPinInSupabaseStrict(
  pinCode: string,
  studentPhone?: string
): Promise<{ success: boolean; message: string; validityDays?: number }> {
  const cleanCode = pinCode.trim().toUpperCase();
  if (!cleanCode) {
    return { success: false, message: 'Please enter a valid Access PIN.' };
  }

  if (!isSupabaseConfigured || !supabase) {
    return { success: false, message: 'Database connection offline. Please check your internet connection.' };
  }

  try {
    // 1. Look up the PIN in Supabase
    const { data: row, error: fetchErr } = await supabase
      .from('access_pins')
      .select('*')
      .eq('pin_code', cleanCode)
      .maybeSingle();

    if (fetchErr) {
      console.warn('Supabase pin query error:', fetchErr.message);
      return { success: false, message: 'Error verifying PIN: ' + fetchErr.message };
    }

    if (!row) {
      return { success: false, message: 'Invalid PIN code. Please verify the code and try again.' };
    }

    // 2. Check if already redeemed
    if (row.status === 'REDEEMED') {
      const redeemedDate = row.redeemed_at ? new Date(row.redeemed_at).toLocaleDateString() : 'earlier';
      return { 
        success: false, 
        message: `This PIN code has already been redeemed on ${redeemedDate} and cannot be reused.` 
      };
    }

    if (row.status !== 'ACTIVE') {
      return { success: false, message: 'This PIN code is expired or no longer active.' };
    }

    const validityDays = Number(row.validity_days) || 30;
    const now = new Date().toISOString();
    const cleanPhone = studentPhone ? studentPhone.trim().replace(/\s+/g, '') : null;

    // 3. Mark the PIN as REDEEMED
    const { error: updatePinErr } = await supabase
      .from('access_pins')
      .update({
        status: 'REDEEMED',
        redeemed_by_student_phone: cleanPhone || 'DIRECT_REDEEM',
        redeemed_at: now,
      })
      .eq('pin_code', cleanCode);

    if (updatePinErr) {
      console.warn('Supabase pin status update error:', updatePinErr.message);
      return { success: false, message: 'Failed to update PIN status: ' + updatePinErr.message };
    }

    // 4. If studentPhone is provided, grant Full Pass in students table
    if (cleanPhone) {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + validityDays);

      await supabase
        .from('students')
        .update({
          has_full_access: true,
          access_type: 'Full Pass',
          access_expires_at: expiry.toISOString(),
          last_active_at: now,
        })
        .eq('phone_number', cleanPhone);
    }

    return {
      success: true,
      message: `Access PIN successfully verified! Full access unlocked for ${validityDays} days.`,
      validityDays,
    };
  } catch (err: any) {
    console.warn('Error during pin redemption:', err?.message || err);
    return { success: false, message: 'Network error verifying PIN. Please try again.' };
  }
}


