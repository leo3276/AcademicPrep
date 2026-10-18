import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';
import { OFFICIAL_SCHEDULED_EXAM } from '@/lib/scheduledWeeklyExam';
import { fetchStudentsForAdmin } from '@/lib/dbService';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'scheduled_exam_attempts.json');

// Read real attempts saved locally
function readAttemptsFromFile(): any[] {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Filter out old legacy demo seeds
    return parsed.filter(
      (a: any) =>
        a &&
        a.id &&
        !['attempt-sched-001', 'attempt-sched-002', 'attempt-sched-003', 'attempt-sched-004'].includes(a.id)
    );
  } catch (err) {
    console.error('[API /api/admin/weekly-exams] Error reading attempts:', err);
    return [];
  }
}

function writeAttemptsToFile(attempts: any[]): void {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(attempts, null, 2), 'utf-8');
  } catch (err) {
    console.error('[API /api/admin/weekly-exams] Error writing attempts:', err);
  }
}

/**
 * GET /api/admin/weekly-exams
 * Returns LIVE statistics and individual candidate results synced with registered students
 */
export async function GET(req: NextRequest) {
  try {
    // 1. Fetch real registered students
    const allStudents = await fetchStudentsForAdmin();
    const jhsStudents = allStudents.filter((s: any) =>
      (s.level || '').toUpperCase().startsWith('JHS')
    );

    // 2. Fetch real exam attempts from file
    const fileAttempts = readAttemptsFromFile();

    // 3. Optional: Sync from Supabase weekly_exam_attempts if configured
    let dbAttempts: any[] = [];
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabaseAdmin
          .from('weekly_exam_attempts')
          .select('*')
          .order('completed_at', { ascending: false });
        if (!error && Array.isArray(data)) {
          dbAttempts = data;
        }
      } catch (err) {
        console.warn('[API /api/admin/weekly-exams] Supabase attempt fetch warning:', err);
      }
    }

    // Merge database and file attempts (indexed by studentPhone or studentId)
    const attemptsMap = new Map<string, any>();

    // Add db attempts first
    for (const d of dbAttempts) {
      const key = (d.student_phone || d.student_id || '').trim();
      if (key) {
        attemptsMap.set(key, {
          id: d.id,
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: d.student_id || key,
          studentName: d.student_name || 'Candidate',
          studentPhone: d.student_phone || key,
          level: d.level || 'JHS 3',
          startedAt: d.started_at || d.completed_at,
          completedAt: d.completed_at,
          status: 'completed',
          timeSpentSeconds: d.time_spent_seconds || 2400,
          paper1ScoreMarks: d.paper1_score ?? 0,
          paper1TotalQuestions: d.paper1_total ?? 25,
          paper1Percentage: Math.round(((d.paper1_score ?? 0) / (d.paper1_total || 25)) * 100),
          paper2ScoreMarks: d.paper2_score ?? 0,
          paper2TotalMarks: d.paper2_total ?? 60,
          paper2Percentage: Math.round(((d.paper2_score ?? 0) / (d.paper2_total || 60)) * 100),
          compositePercentage: d.composite_total_percentage ?? 0,
          stanineGrade: d.stanine_grade ?? 9,
          gradeRemark: d.grade_remark || 'Completed',
        });
      }
    }

    // Overlay or add local file attempts
    for (const f of fileAttempts) {
      const key = (f.studentPhone || f.studentId || '').trim();
      if (key) {
        attemptsMap.set(key, f);
      }
    }

    // 4. Construct live candidate roster by matching registered students
    const candidates: any[] = [];
    const matchedKeys = new Set<string>();

    // First, process registered JHS candidates
    for (const s of jhsStudents) {
      const phoneKey = (s.phone || '').trim();
      const idKey = (s.id || '').trim();
      const attempt = attemptsMap.get(phoneKey) || attemptsMap.get(idKey);

      if (attempt) {
        if (phoneKey) matchedKeys.add(phoneKey);
        if (idKey) matchedKeys.add(idKey);
        candidates.push({
          id: attempt.id || `attempt-${s.id}`,
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: s.id,
          studentName: s.name || attempt.studentName || 'Candidate',
          studentPhone: s.phone || attempt.studentPhone || 'N/A',
          level: s.level || attempt.level || 'JHS 3',
          startedAt: attempt.startedAt || null,
          completedAt: attempt.completedAt || null,
          status: attempt.status || 'completed',
          timeSpentSeconds: attempt.timeSpentSeconds || 0,
          paper1ScoreMarks: attempt.paper1ScoreMarks ?? 0,
          paper1TotalQuestions: attempt.paper1TotalQuestions ?? 25,
          paper1Percentage: attempt.paper1Percentage ?? 0,
          paper2ScoreMarks: attempt.paper2ScoreMarks ?? 0,
          paper2TotalMarks: attempt.paper2TotalMarks ?? 60,
          paper2Percentage: attempt.paper2Percentage ?? 0,
          compositePercentage: attempt.compositePercentage ?? 0,
          stanineGrade: attempt.stanineGrade ?? 9,
          gradeRemark: attempt.gradeRemark || (attempt.status === 'in_progress' ? 'Writing Paper' : 'Completed'),
        });
      } else {
        // Registered candidate awaiting exam
        candidates.push({
          id: `reg-${s.id}`,
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: s.id,
          studentName: s.name || 'Candidate',
          studentPhone: s.phone || 'N/A',
          level: s.level || 'JHS 3',
          startedAt: null,
          completedAt: null,
          status: 'not_started',
          timeSpentSeconds: 0,
          paper1ScoreMarks: null,
          paper1TotalQuestions: 25,
          paper1Percentage: null,
          paper2ScoreMarks: null,
          paper2TotalMarks: 60,
          paper2Percentage: null,
          compositePercentage: null,
          stanineGrade: null,
          gradeRemark: 'Awaiting Candidate Entry',
        });
      }
    }

    // Also include any guest or preview attempt that isn't already matched
    for (const [key, att] of attemptsMap.entries()) {
      if (!matchedKeys.has(key)) {
        candidates.unshift({
          ...att,
          studentName: att.studentName || 'Guest Candidate',
        });
      }
    }

    // 5. Calculate real-time live metrics
    const completedList = candidates.filter((c) => c.status === 'completed');
    const inProgressList = candidates.filter((c) => c.status === 'in_progress');
    const awaitingList = candidates.filter((c) => c.status === 'not_started');

    const completedCount = completedList.length;
    const inProgressCount = inProgressList.length;
    const awaitingCount = awaitingList.length;
    const totalCandidates = candidates.length;

    const averageCompositeScore =
      completedCount > 0
        ? Math.round(
            completedList.reduce((acc, cur) => acc + (cur.compositePercentage || 0), 0) /
              completedCount
          )
        : 0;

    const highestScore =
      completedCount > 0
        ? Math.max(...completedList.map((c) => c.compositePercentage || 0))
        : 0;

    // 6. Sort: completed and in-progress at top, then awaiting candidates
    candidates.sort((a, b) => {
      const statusWeight: Record<string, number> = { completed: 3, in_progress: 2, not_started: 1 };
      const diff = (statusWeight[b.status] || 0) - (statusWeight[a.status] || 0);
      if (diff !== 0) return diff;

      if (a.status === 'completed' && b.status === 'completed') {
        return (b.compositePercentage || 0) - (a.compositePercentage || 0);
      }
      return (a.studentName || '').localeCompare(b.studentName || '');
    });

    return NextResponse.json({
      success: true,
      exam: OFFICIAL_SCHEDULED_EXAM,
      metrics: {
        totalCandidates,
        completedCount,
        inProgressCount,
        awaitingCount,
        averageCompositeScore,
        highestScore,
      },
      candidates,
    });
  } catch (err: any) {
    console.error('[API /api/admin/weekly-exams] GET Error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/weekly-exams
 * Saves or updates a student candidate attempt in real time
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || (!body.studentId && !body.studentPhone)) {
      return NextResponse.json(
        { success: false, error: 'Student ID or Phone Number is required' },
        { status: 400 }
      );
    }

    const attempts = readAttemptsFromFile();
    const phoneKey = (body.studentPhone || '').trim();
    const idKey = (body.studentId || '').trim();

    const existingIndex = attempts.findIndex(
      (a: any) =>
        (phoneKey && a.studentPhone === phoneKey) ||
        (idKey && a.studentId === idKey)
    );

    const record = {
      id: body.id || `attempt-sched-${Date.now()}`,
      examId: body.examId || OFFICIAL_SCHEDULED_EXAM.id,
      studentId: body.studentId || phoneKey || 'guest-candidate',
      studentName: body.studentName || 'Candidate',
      studentPhone: body.studentPhone || 'N/A',
      level: body.level || 'JHS 3',
      startedAt: body.startedAt || new Date().toISOString(),
      completedAt: body.completedAt || (body.status === 'completed' ? new Date().toISOString() : null),
      status: body.status || 'in_progress',
      timeSpentSeconds: body.timeSpentSeconds || 0,
      paper1ScoreMarks: body.paper1ScoreMarks ?? 0,
      paper1TotalQuestions: body.paper1TotalQuestions ?? 25,
      paper1Percentage: body.paper1Percentage ?? 0,
      paper2ScoreMarks: body.paper2ScoreMarks ?? 0,
      paper2TotalMarks: body.paper2TotalMarks ?? 60,
      paper2Percentage: body.paper2Percentage ?? 0,
      compositePercentage: body.compositePercentage ?? 0,
      stanineGrade: body.stanineGrade ?? 9,
      gradeRemark: body.gradeRemark || (body.status === 'completed' ? 'Completed' : 'Writing Paper'),
    };

    if (existingIndex >= 0) {
      attempts[existingIndex] = { ...attempts[existingIndex], ...record };
    } else {
      attempts.unshift(record);
    }

    writeAttemptsToFile(attempts);

    // Sync to Supabase weekly_exam_attempts if configured
    if (isSupabaseConfigured && body.status === 'completed' && body.studentPhone && body.studentPhone !== 'N/A') {
      try {
        await supabaseAdmin.from('weekly_exam_attempts').insert({
          student_phone: body.studentPhone,
          level: record.level,
          paper1_score: record.paper1ScoreMarks,
          paper1_total: record.paper1TotalQuestions,
          paper2_score: record.paper2ScoreMarks,
          paper2_total: record.paper2TotalMarks,
          composite_total_percentage: record.compositePercentage,
          stanine_grade: record.stanineGrade,
          grade_remark: record.gradeRemark,
          completed_at: record.completedAt || new Date().toISOString(),
        });
      } catch (dbErr) {
        console.warn('[Supabase Sync] Could not insert weekly_exam_attempt:', dbErr);
      }
    }

    return NextResponse.json({ success: true, record });
  } catch (err: any) {
    console.error('[API /api/admin/weekly-exams] POST Error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Server error' },
      { status: 500 }
    );
  }
}
