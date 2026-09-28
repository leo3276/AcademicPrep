import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { toSafeStudent } from '@/lib/dbService';

/**
 * GET /api/auth/me
 * Authorization: Bearer <session token>
 *
 * Returns the authoritative account state. Clients must use this rather than
 * their cached copy to decide whether premium content is unlocked, because
 * access_expires_at is evaluated here on every call.
 */
export async function GET(req: NextRequest) {
  const row = await getStudentFromRequest(req);

  if (!row) {
    return NextResponse.json({ success: false, error: 'Session expired. Please sign in again.' }, { status: 401 });
  }

  return NextResponse.json({ success: true, student: toSafeStudent(row) });
}
