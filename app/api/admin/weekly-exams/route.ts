import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';
import { OFFICIAL_SCHEDULED_EXAM } from '@/lib/scheduledWeeklyExam';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'scheduled_exam_attempts.json');

// Ensure data file exists with empty array or existing data
function readAttemptsFromFile(): any[] {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      // Seed with initial realistic candidate attempts for demonstration
      const initialSeed = [
        {
          id: 'attempt-sched-001',
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: 'std-kof-01',
          studentName: 'Kofi Mensah',
          studentPhone: '0244123890',
          level: 'JHS 3',
          startedAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
          completedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
          status: 'completed',
          timeSpentSeconds: 2400,
          paper1ScoreMarks: 36,
          paper1TotalQuestions: 25,
          paper1Percentage: 90,
          paper2ScoreMarks: 52,
          paper2TotalMarks: 60,
          paper2Percentage: 87,
          compositePercentage: 88,
          stanineGrade: 1,
          gradeRemark: 'Grade 1 - Highest Distinction',
        },
        {
          id: 'attempt-sched-002',
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: 'std-ama-02',
          studentName: 'Ama Serwaa Boateng',
          studentPhone: '0558912344',
          level: 'JHS 3',
          startedAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
          completedAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
          status: 'completed',
          timeSpentSeconds: 2880,
          paper1ScoreMarks: 32,
          paper1TotalQuestions: 25,
          paper1Percentage: 80,
          paper2ScoreMarks: 44,
          paper2TotalMarks: 60,
          paper2Percentage: 73,
          compositePercentage: 76,
          stanineGrade: 2,
          gradeRemark: 'Grade 2 - Higher Credit',
        },
        {
          id: 'attempt-sched-003',
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: 'std-yaw-03',
          studentName: 'Yaw Osei Acheampong',
          studentPhone: '0207894561',
          level: 'JHS 3',
          startedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
          completedAt: null,
          status: 'in_progress',
          timeSpentSeconds: 1200,
          paper1ScoreMarks: 28,
          paper1TotalQuestions: 25,
          paper1Percentage: 70,
          paper2ScoreMarks: 0,
          paper2TotalMarks: 60,
          paper2Percentage: 0,
          compositePercentage: 28,
          stanineGrade: 8,
          gradeRemark: 'Paper 2 Writing In-Progress',
        },
        {
          id: 'attempt-sched-004',
          examId: OFFICIAL_SCHEDULED_EXAM.id,
          studentId: 'std-abena-04',
          studentName: 'Abena Danso',
          studentPhone: '0501239874',
          level: 'JHS 3',
          startedAt: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
          completedAt: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
          status: 'completed',
          timeSpentSeconds: 2520,
          paper1ScoreMarks: 38,
          paper1TotalQuestions: 25,
          paper1Percentage: 95,
          paper2ScoreMarks: 55,
          paper2TotalMarks: 60,
          paper2Percentage: 92,
          compositePercentage: 93,
          stanineGrade: 1,
          gradeRemark: 'Grade 1 - Highest Distinction',
        }
      ];
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(initialSeed, null, 2), 'utf-8');
      return initialSeed;
    }
    const raw = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(raw);
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
 * Returns aggregated statistics and individual student candidate results
 */
export async function GET(req: NextRequest) {
  try {
    const attempts = readAttemptsFromFile();

    const totalCandidates = attempts.length;
    const completedList = attempts.filter(a => a.status === 'completed');
    const completedCount = completedList.length;
    const inProgressCount = attempts.filter(a => a.status === 'in_progress').length;

    const averageCompositeScore = completedCount > 0
      ? Math.round(completedList.reduce((acc, cur) => acc + (cur.compositePercentage || 0), 0) / completedCount)
      : 0;

    const highestScore = completedCount > 0
      ? Math.max(...completedList.map(a => a.compositePercentage || 0))
      : 0;

    return NextResponse.json({
      success: true,
      exam: OFFICIAL_SCHEDULED_EXAM,
      metrics: {
        totalCandidates,
        completedCount,
        inProgressCount,
        averageCompositeScore,
        highestScore,
      },
      candidates: attempts.sort((a, b) => {
        const tA = new Date(a.completedAt || a.startedAt || 0).getTime();
        const tB = new Date(b.completedAt || b.startedAt || 0).getTime();
        return tB - tA;
      })
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}

/**
 * POST /api/admin/weekly-exams
 * Saves or updates a student candidate attempt
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || !body.studentId) {
      return NextResponse.json({ success: false, error: 'Student ID is required' }, { status: 400 });
    }

    const attempts = readAttemptsFromFile();
    const existingIndex = attempts.findIndex(
      a => a.studentId === body.studentId && a.examId === (body.examId || OFFICIAL_SCHEDULED_EXAM.id)
    );

    const record = {
      id: body.id || `attempt-sched-${Date.now()}`,
      examId: body.examId || OFFICIAL_SCHEDULED_EXAM.id,
      studentId: body.studentId,
      studentName: body.studentName || 'Candidate',
      studentPhone: body.studentPhone || 'N/A',
      level: body.level || 'JHS 3',
      startedAt: body.startedAt || new Date().toISOString(),
      completedAt: body.completedAt || (body.status === 'completed' ? new Date().toISOString() : null),
      status: body.status || 'completed',
      timeSpentSeconds: body.timeSpentSeconds || 0,
      paper1ScoreMarks: body.paper1ScoreMarks ?? 0,
      paper1TotalQuestions: body.paper1TotalQuestions ?? 25,
      paper1Percentage: body.paper1Percentage ?? 0,
      paper2ScoreMarks: body.paper2ScoreMarks ?? 0,
      paper2TotalMarks: body.paper2TotalMarks ?? 60,
      paper2Percentage: body.paper2Percentage ?? 0,
      compositePercentage: body.compositePercentage ?? 0,
      stanineGrade: body.stanineGrade ?? 9,
      gradeRemark: body.gradeRemark || 'Ungraded',
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
    return NextResponse.json({ success: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}
