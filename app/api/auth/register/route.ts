import { NextRequest, NextResponse } from 'next/server';
import { normalizePhone, isValidGhanaPhone, createSession } from '@/lib/serverAuth';
import { createStudent, findStudentByPhone, redeemAccessPin } from '@/lib/dbService';

const ALLOWED_LEVELS = ['JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY'];

/**
 * POST /api/auth/register
 * Body: { phoneNumber, fullName, currentLevel, password, accessPinCode? }
 *
 * The password is hashed inside the database (bcrypt via pgcrypto) and is never
 * stored or logged in plaintext. Returns a session token on success.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const phone = normalizePhone(body?.phoneNumber);
    const fullName = typeof body?.fullName === 'string' ? body.fullName.trim().replace(/\s+/g, ' ').slice(0, 120) : '';
    const currentLevel = typeof body?.currentLevel === 'string' ? body.currentLevel.trim() : 'JHS 1';
    const password = typeof body?.password === 'string' ? body.password.trim() : '';
    const accessPinCode =
      typeof body?.accessPinCode === 'string' ? body.accessPinCode.trim().toUpperCase().slice(0, 32) : '';

    if (!phone || !isValidGhanaPhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid Ghanaian phone number (e.g. 0241234567).' },
        { status: 400 }
      );
    }

    if (!fullName) {
      return NextResponse.json({ success: false, error: 'Please enter your full name.' }, { status: 400 });
    }

    if (!ALLOWED_LEVELS.includes(currentLevel)) {
      return NextResponse.json({ success: false, error: 'Please select a valid class level.' }, { status: 400 });
    }

    // 4-digit PINs are the product minimum; 72 bytes is the bcrypt input limit.
    if (password.length < 4 || password.length > 72) {
      return NextResponse.json(
        { success: false, error: 'Your password or PIN must be between 4 and 72 characters.' },
        { status: 400 }
      );
    }

    const existing = await findStudentByPhone(phone);
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'An account with this phone number already exists. Please switch to Sign In.' },
        { status: 409 }
      );
    }

    const created = await createStudent({ phone, fullName, currentLevel }, password);
    if (!created.success || !created.student) {
      return NextResponse.json({ success: false, error: created.error || 'Registration failed.' }, { status: 500 });
    }

    let student = created.student;
    let pinMessage: string | undefined;

    // A voucher supplied at registration is redeemed only after the account
    // exists, and the database function guarantees single use.
    if (accessPinCode) {
      const redeemed = await redeemAccessPin(accessPinCode, phone);
      pinMessage = redeemed.message;
      if (redeemed.success && redeemed.student) {
        student = redeemed.student;
      }
    }

    const session = await createSession(student.id);
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Your account was created but the session could not be started. Please sign in.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      student,
      token: session.token,
      tokenExpiresAt: session.expiresAt,
      pinMessage,
    });
  } catch (err: any) {
    console.error('[/api/auth/register] error:', err?.message || err);
    return NextResponse.json({ success: false, error: 'Registration failed. Please try again.' }, { status: 500 });
  }
}
