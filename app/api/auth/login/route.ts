import { NextRequest, NextResponse } from 'next/server';
import {
  normalizePhone,
  createSession,
  checkLoginThrottle,
  recordFailedLogin,
  resetLoginThrottle,
} from '@/lib/serverAuth';
import { verifyPin, findStudentByPhone, touchLastActive, toSafeStudent } from '@/lib/dbService';

// Deliberately identical for "no such account" and "wrong password" so the
// endpoint cannot be used to enumerate which phone numbers are registered.
const GENERIC_FAILURE = 'Incorrect phone number or password. Please try again.';

/**
 * POST /api/auth/login
 * Body: { phoneNumber, password }
 *
 * Password verification happens inside the database via `verify_student_pin`,
 * so the hash never reaches this process. Failed attempts are throttled per
 * phone number: a 4-digit PIN has 10,000 combinations and is otherwise
 * brute-forceable in minutes.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    const phone = normalizePhone(body?.phoneNumber);
    const password = typeof body?.password === 'string' ? body.password.trim() : '';

    if (!phone || !password) {
      return NextResponse.json(
        { success: false, error: 'Please enter your phone number and password.' },
        { status: 400 }
      );
    }

    if (password.length > 72) {
      return NextResponse.json({ success: false, error: GENERIC_FAILURE }, { status: 400 });
    }

    const throttle = await checkLoginThrottle(phone);
    if (!throttle.allowed) {
      const minutes = Math.max(1, Math.ceil(throttle.retryAfterSeconds / 60));
      return NextResponse.json(
        {
          success: false,
          error: `Too many failed attempts. Please try again in ${minutes} minute${minutes === 1 ? '' : 's'}.`,
          retryAfterSeconds: throttle.retryAfterSeconds,
        },
        { status: 429 }
      );
    }

    const isValid = await verifyPin(phone, password);
    if (!isValid) {
      await recordFailedLogin(phone);
      return NextResponse.json({ success: false, error: GENERIC_FAILURE }, { status: 401 });
    }

    const row = await findStudentByPhone(phone);
    if (!row) {
      return NextResponse.json({ success: false, error: GENERIC_FAILURE }, { status: 401 });
    }

    await resetLoginThrottle(phone);
    await touchLastActive(phone);

    const session = await createSession(row.id as string);
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Sign-in succeeded but the session could not be started. Please try again.' },
        { status: 500 }
      );
    }

    // Re-read so last_active_at in the response matches what was written.
    const freshRow = (await findStudentByPhone(phone)) || row;

    return NextResponse.json({
      success: true,
      student: toSafeStudent(freshRow),
      token: session.token,
      tokenExpiresAt: session.expiresAt,
    });
  } catch (err: any) {
    console.error('[/api/auth/login] error:', err?.message || err);
    return NextResponse.json({ success: false, error: 'Sign-in failed. Please try again.' }, { status: 500 });
  }
}
