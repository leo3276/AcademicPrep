import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { fetchStudentsForAdmin, fetchPublicLeaderboard, saveTopicProgress, updateStudentLevel, findStudentByPhone, toSafeStudent } from '@/lib/dbService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_LEVELS = ['JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY'];

/**
 * GET /api/students
 *
 * Two modes, because this endpoint serves both the admin dashboard and the
 * student-facing leaderboard:
 *   - with a valid admin session: the full roster including phone numbers
 *   - otherwise: a masked leaderboard with no phone numbers, ids, access state
 *     or per-topic history
 *
 * It previously returned every student's phone number and progress to any
 * anonymous caller, which is a personal-data breach for a product used by
 * children.
 */
export async function GET(req: NextRequest) {
  if (requireAdmin(req)) {
    const students = await fetchStudentsForAdmin();
    return NextResponse.json({ success: true, view: 'admin', students });
  }

  // A signed-in student gets their own row flagged so the UI can highlight it
  // without the response ever carrying a phone number.
  const sessionRow = await getStudentFromRequest(req);
  const currentPhone = sessionRow?.phone_number ? String(sessionRow.phone_number) : undefined;
  const leaderboard = await fetchPublicLeaderboard(50, currentPhone);

  return NextResponse.json({ success: true, view: 'public', students: leaderboard });
}

/**
 * POST /api/students
 * Authorization: Bearer <session token>
 * Body: { fullName?, level?, topicIdCompleted?, newQuizScore? }
 *
 * A signed-in student may update their own name, class level and progress.
 * `accessType` and `accessExpiresAt` are ignored entirely: entitlement is only
 * ever granted by a verified Paystack payment or an atomic voucher redemption.
 * The previous version accepted `accessType: 'Full Pass'` from the request body,
 * which let anyone grant themselves VIP for free.
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);

  if (!row) {
    return NextResponse.json({ success: false, error: 'Please sign in to sync your progress.' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const phone = String(row.phone_number);

  const level = typeof body?.level === 'string' ? body.level.trim() : '';
  if (level && !ALLOWED_LEVELS.includes(level)) {
    return NextResponse.json({ success: false, error: 'Please select a valid class level.' }, { status: 400 });
  }

  if (level && level !== row.current_level) {
    await updateStudentLevel(phone, level);
  }

  const topicIdCompleted = typeof body?.topicIdCompleted === 'string' ? body.topicIdCompleted.trim().slice(0, 80) : '';
  const rawScore = body?.newQuizScore;
  const scorePercentage = typeof rawScore === 'number' ? rawScore : Number(rawScore);

  if (topicIdCompleted && Number.isFinite(scorePercentage)) {
    await saveTopicProgress({
      phone,
      topicId: topicIdCompleted,
      scorePercentage: Math.max(0, Math.min(100, Math.round(scorePercentage))),
    });
  }

  const freshRow = await findStudentByPhone(phone);

  return NextResponse.json({
    success: true,
    student: toSafeStudent(freshRow || row),
  });
}
