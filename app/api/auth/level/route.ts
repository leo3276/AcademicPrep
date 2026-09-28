import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { updateStudentLevel, findStudentByPhone, toSafeStudent } from '@/lib/dbService';

const ALLOWED_LEVELS = ['JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY'];

/**
 * POST /api/auth/level
 * Authorization: Bearer <session token>
 * Body: { level }
 *
 * A student may only change their own class level; the target account comes
 * from the session, never from the request body.
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);

  if (!row) {
    return NextResponse.json({ success: false, error: 'Please sign in again.' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const level = typeof body?.level === 'string' ? body.level.trim() : '';

  if (!ALLOWED_LEVELS.includes(level)) {
    return NextResponse.json({ success: false, error: 'Please select a valid class level.' }, { status: 400 });
  }

  const phone = String(row.phone_number);
  const updated = await updateStudentLevel(phone, level);

  if (!updated) {
    return NextResponse.json({ success: false, error: 'Could not update your class level.' }, { status: 500 });
  }

  const freshRow = await findStudentByPhone(phone);

  return NextResponse.json({
    success: true,
    student: freshRow ? toSafeStudent(freshRow) : toSafeStudent({ ...row, current_level: level }),
  });
}
