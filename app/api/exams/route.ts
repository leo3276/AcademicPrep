import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { fetchWeeklyExams, saveWeeklyExam } from '@/lib/dbService';

const ALLOWED_LEVELS = ['JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY'];

const UNAUTHORIZED = () =>
  NextResponse.json({ success: false, error: 'Please sign in to sync your exam results.' }, { status: 401 });

function clampInt(value: unknown, fallback = 0): number {
  const num = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(num) ? Math.round(num) : fallback;
}

/** GET /api/exams - the signed-in student's weekly exam history. */
export async function GET(req: NextRequest) {
  const row = await getStudentFromRequest(req);
  if (!row) return UNAUTHORIZED();

  const exams = await fetchWeeklyExams(String(row.phone_number));

  return NextResponse.json({ success: true, exams });
}

/**
 * POST /api/exams
 * Body: the attempt summary produced by the weekly exam tracker.
 *
 * Persisting these attempts is what makes improvement tracking and a real
 * leaderboard possible; previously the write went straight to the database with
 * the public anon key and could be forged by anyone.
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);
  if (!row) return UNAUTHORIZED();

  const body = await req.json().catch(() => null);
  const level = typeof body?.level === 'string' ? body.level.trim() : '';

  if (!ALLOWED_LEVELS.includes(level)) {
    return NextResponse.json({ success: false, error: 'Please select a valid class level.' }, { status: 400 });
  }

  const attempt = {
    level,
    paper1ScoreMarks: clampInt(body?.paper1ScoreMarks),
    paper1TotalQuestions: clampInt(body?.paper1TotalQuestions),
    paper2ScoreMarks: clampInt(body?.paper2ScoreMarks),
    paper2TotalMarks: clampInt(body?.paper2TotalMarks),
    compositeTotalPercentage: Math.max(0, Math.min(100, clampInt(body?.compositeTotalPercentage))),
    stanineGrade: Math.max(1, Math.min(9, clampInt(body?.stanineGrade, 9))),
    gradeRemark: typeof body?.gradeRemark === 'string' ? body.gradeRemark.slice(0, 500) : '',
    completedAt:
      typeof body?.completedAt === 'string' && !Number.isNaN(Date.parse(body.completedAt))
        ? body.completedAt
        : new Date().toISOString(),
  };

  await saveWeeklyExam(String(row.phone_number), attempt);

  return NextResponse.json({ success: true });
}
