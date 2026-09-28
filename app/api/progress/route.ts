import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { fetchStudentProgress, saveTopicProgress } from '@/lib/dbService';

const UNAUTHORIZED = () =>
  NextResponse.json({ success: false, error: 'Please sign in to sync your progress.' }, { status: 401 });

/**
 * GET /api/progress
 * Authorization: Bearer <session token>
 *
 * Returns only the signed-in student's progress.
 */
export async function GET(req: NextRequest) {
  const row = await getStudentFromRequest(req);
  if (!row) return UNAUTHORIZED();

  const progress = await fetchStudentProgress(String(row.phone_number));

  return NextResponse.json({ success: true, progress });
}

/**
 * POST /api/progress
 * Authorization: Bearer <session token>
 * Body: { topicId, scorePercentage }
 *
 * Writes are scoped to the session owner, so a student cannot inflate or erase
 * another student's record.
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);
  if (!row) return UNAUTHORIZED();

  const body = await req.json().catch(() => null);
  const topicId = typeof body?.topicId === 'string' ? body.topicId.trim().slice(0, 80) : '';
  const rawScore = typeof body?.scorePercentage === 'number' ? body.scorePercentage : Number(body?.scorePercentage);

  if (!topicId) {
    return NextResponse.json({ success: false, error: 'A topic id is required.' }, { status: 400 });
  }

  if (!Number.isFinite(rawScore)) {
    return NextResponse.json({ success: false, error: 'A numeric score is required.' }, { status: 400 });
  }

  const scorePercentage = Math.max(0, Math.min(100, Math.round(rawScore)));

  await saveTopicProgress({ phone: String(row.phone_number), topicId, scorePercentage });

  return NextResponse.json({ success: true, topicId, scorePercentage });
}
