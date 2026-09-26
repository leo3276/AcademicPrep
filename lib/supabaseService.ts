import { supabase, isSupabaseConfigured } from './supabaseClient';
import { Student, EducationLevel, StudentTopicProgress } from './types';
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
  return {
    id: row.id,
    phoneNumber: row.phone_number,
    fullName: row.full_name,
    currentLevel: (row.current_level || 'JHS 1') as EducationLevel,
    hasFullAccess: Boolean(row.has_full_access),
    accessType: row.access_type || (row.has_full_access ? 'Full Pass' : 'Free Trial'),
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

  if (!isSupabaseConfigured || !supabase) {
    const student: Student = {
      id: `student-${cleanPhone.slice(-6)}`,
      phoneNumber: cleanPhone,
      fullName: params.fullName,
      currentLevel: params.currentLevel,
      hasFullAccess: Boolean(params.hasFullAccess),
      accessType: params.accessType || (params.hasFullAccess ? 'Full Pass' : 'Free Trial'),
      accessExpiresAt: params.accessExpiresAt,
      completedTopicIds: [],
      topicsCompletedCount: 0,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
    };
    return { success: true, student };
  }

  try {
    // 1. Check if phone number already registered
    const { data: existing } = await supabase
      .from('students')
      .select('id, phone_number')
      .eq('phone_number', cleanPhone)
      .maybeSingle();

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
      pin_hash: params.password ? params.password.trim() : '',
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
      console.error('Supabase registration error:', insertErr);
      return { success: false, error: insertErr.message || 'Failed to create student account in Supabase' };
    }

    return { success: true, student: studentRowToStudent(newRow as SupabaseStudentRow) };
  } catch (err: any) {
    console.error('Supabase register error:', err);
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

    // Verify password if account has one configured
    if (row.pin_hash && row.pin_hash.trim() !== '') {
      if (!password || password.trim() !== row.pin_hash.trim()) {
        return { success: false, error: 'Incorrect password or PIN. Please try again.' };
      }
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
    console.error('Supabase login error:', err);
    return { success: false, error: err?.message || 'Failed to authenticate student' };
  }
}

/**
 * Fetch all topic progress for a specific student phone from Supabase
 */
export async function fetchStudentProgressFromSupabase(
  phoneNumber: string
): Promise<Record<string, StudentTopicProgress>> {
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  const result: Record<string, StudentTopicProgress> = {};

  if (!isSupabaseConfigured || !supabase) return result;

  try {
    const { data, error } = await supabase
      .from('student_topic_progress')
      .select('*')
      .eq('student_phone', cleanPhone);

    if (error) {
      console.error('Error fetching student progress:', error);
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
  } catch (err) {
    console.error('Error in fetchStudentProgressFromSupabase:', err);
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
  } catch (err) {
    console.error('Error saving topic progress to Supabase:', err);
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
      console.error('Error fetching Supabase leaderboard:', error);
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
  } catch (err) {
    console.error('Error in fetchLeaderboardFromSupabase:', err);
    return [];
  }
}

/**
 * Redeem an Access PIN for a student in Supabase
 */
export async function redeemPinInSupabase(
  phoneNumber: string,
  validityDays: number = 30
): Promise<boolean> {
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!isSupabaseConfigured || !supabase) return false;

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
  } catch (err) {
    console.error('Error redeeming pin in Supabase:', err);
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
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!isSupabaseConfigured || !supabase) return;

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
  } catch (err) {
    console.error('Error saving weekly exam to Supabase:', err);
  }
}

/**
 * Fetch Weekly Exam Attempts for a student from Supabase
 */
export async function fetchWeeklyExamsFromSupabase(
  phoneNumber: string
): Promise<any[]> {
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!isSupabaseConfigured || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('weekly_exam_attempts')
      .select('*')
      .eq('student_phone', cleanPhone)
      .order('completed_at', { ascending: false });

    if (error) return [];
    return data || [];
  } catch (err) {
    console.error('Error fetching weekly exams from Supabase:', err);
    return [];
  }
}

/**
 * Save Student Mistake to Supabase
 */
export async function saveStudentMistakeToSupabase(params: {
  phoneNumber: string;
  topicId: string;
  subjectName: string;
  subConcept: string;
  questionText: string;
  studentWrongAnswer: string;
  correctAnswer: string;
}): Promise<void> {
  const cleanPhone = params.phoneNumber.trim().replace(/\s+/g, '');
  if (!isSupabaseConfigured || !supabase) return;

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
  } catch (err) {
    console.error('Error saving mistake to Supabase:', err);
  }
}

/**
 * Fetch Student Mistakes from Supabase
 */
export async function fetchStudentMistakesFromSupabase(
  phoneNumber: string
): Promise<any[]> {
  const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
  if (!isSupabaseConfigured || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('student_mistakes')
      .select('*')
      .eq('student_phone', cleanPhone)
      .order('timestamp', { ascending: false })
      .limit(50);

    if (error) return [];
    return data || [];
  } catch (err) {
    console.error('Error fetching mistakes from Supabase:', err);
    return [];
  }
}

