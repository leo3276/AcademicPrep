import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { redeemAccessPin } from '@/lib/dbService';

/**
 * POST /api/auth/redeem-pin
 * Authorization: Bearer <session token>
 * Body: { pinCode }
 *
 * The voucher is always redeemed onto the account that owns the session. The
 * phone number is never accepted from the request body, so a stolen PIN cannot
 * be spent onto somebody else's account and one student cannot burn another's
 * voucher.
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);

  if (!row) {
    return NextResponse.json(
      { success: false, message: 'Please sign in before redeeming a PIN.' },
      { status: 401 }
    );
  }

  const body = await req.json().catch(() => null);
  const pinCode =
    typeof body?.pinCode === 'string' ? body.pinCode.trim().toUpperCase().slice(0, 32) : '';

  if (!pinCode) {
    return NextResponse.json({ success: false, message: 'Please enter a valid Access PIN.' }, { status: 400 });
  }

  const result = await redeemAccessPin(pinCode, String(row.phone_number));

  return NextResponse.json(
    {
      success: result.success,
      message: result.message,
      validityDays: result.validityDays,
      student: result.student,
    },
    { status: result.success ? 200 : 400 }
  );
}
