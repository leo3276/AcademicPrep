import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest, createSession, revokeAllSessions } from '@/lib/serverAuth';
import { verifyPin, setStudentPin } from '@/lib/dbService';

/**
 * POST /api/auth/change-pin
 * Authorization: Bearer <session token>
 * Body: { currentPin, newPin }
 *
 * Rotates the password and revokes every existing session, so a credential that
 * was compromised before the change cannot keep working. A fresh token for the
 * current device is returned.
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);

  if (!row) {
    return NextResponse.json({ success: false, error: 'Please sign in again.' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const currentPin = typeof body?.currentPin === 'string' ? body.currentPin.trim() : '';
  const newPin = typeof body?.newPin === 'string' ? body.newPin.trim() : '';

  if (!currentPin || !newPin) {
    return NextResponse.json(
      { success: false, error: 'Please provide your current password and a new password.' },
      { status: 400 }
    );
  }

  if (newPin.length < 4 || newPin.length > 72) {
    return NextResponse.json(
      { success: false, error: 'Your new password or PIN must be between 4 and 72 characters.' },
      { status: 400 }
    );
  }

  const phone = String(row.phone_number);

  if (!(await verifyPin(phone, currentPin))) {
    return NextResponse.json({ success: false, error: 'Your current password is incorrect.' }, { status: 401 });
  }

  if (!(await setStudentPin(phone, newPin))) {
    return NextResponse.json({ success: false, error: 'Could not update your password. Please try again.' }, { status: 500 });
  }

  await revokeAllSessions(String(row.id));

  const session = await createSession(String(row.id));
  if (!session) {
    return NextResponse.json(
      { success: true, token: null, message: 'Password updated. Please sign in again on this device.' },
      { status: 200 }
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Password updated successfully.',
    token: session.token,
    tokenExpiresAt: session.expiresAt,
  });
}
