import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { getStudentFromRequest, checkLoginThrottle, recordFailedLogin, resetLoginThrottle } from '@/lib/serverAuth';
import { fetchAccessPins, savePinBatch, redeemAccessPin } from '@/lib/dbService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Excludes I, O, 0 and 1 so codes transcribed from a scratch card stay legible.
// 32 divides 256 evenly, so the modulo introduces no bias.
const PIN_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const MAX_BATCH_SIZE = 500;

const ADMIN_REQUIRED = () =>
  NextResponse.json({ success: false, error: 'Administrator access required.' }, { status: 401 });

/**
 * Generate a voucher code from the CSPRNG. Codes are never supplied by the
 * client: the previous implementation accepted whatever the browser sent, so a
 * caller who could reach this endpoint could mint working vouchers, and the
 * browser-generated codes came from Math.random().
 */
function generatePinCode(): string {
  const bytes = crypto.randomBytes(8);
  let chars = '';
  for (let i = 0; i < bytes.length; i += 1) {
    chars += PIN_ALPHABET[bytes[i] % PIN_ALPHABET.length];
  }
  return `PREP-${chars.slice(0, 4)}-${chars.slice(4)}`;
}

/**
 * GET /api/pins - administrator only.
 * Voucher codes are worth GH₵ 25 each, so listing them is a privileged read.
 */
export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return ADMIN_REQUIRED();

  const pins = await fetchAccessPins();

  return NextResponse.json({ success: true, pins });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const action = typeof body?.action === 'string' ? body.action : '';

  if (action === 'generate') {
    return handleGenerate(req, body);
  }

  if (action === 'redeem') {
    return handleRedeem(req, body);
  }

  return NextResponse.json({ success: false, error: 'Unknown action' }, { status: 400 });
}

/** POST /api/pins { action: 'generate', count, priceGhs, validityDays } - admin only. */
async function handleGenerate(req: NextRequest, body: any) {
  if (!requireAdmin(req)) return ADMIN_REQUIRED();

  const count = Number(body?.count);
  if (!Number.isInteger(count) || count < 1 || count > MAX_BATCH_SIZE) {
    return NextResponse.json(
      { success: false, error: `Please request between 1 and ${MAX_BATCH_SIZE} PINs.` },
      { status: 400 }
    );
  }

  const priceGhs = Number(body?.priceGhs);
  if (!Number.isFinite(priceGhs) || priceGhs <= 0 || priceGhs > 1000) {
    return NextResponse.json({ success: false, error: 'Please provide a valid price.' }, { status: 400 });
  }

  const validityDays = Number(body?.validityDays);
  if (!Number.isInteger(validityDays) || validityDays < 1 || validityDays > 365) {
    return NextResponse.json({ success: false, error: 'Please provide validity between 1 and 365 days.' }, { status: 400 });
  }

  const batchId = `BATCH-${Date.now().toString(36).toUpperCase()}`;

  const pins: { pinCode: string; batchId: string; priceGhs: number; validityDays: number }[] = [];
  const seen = new Set<string>();
  while (pins.length < count) {
    const pinCode = generatePinCode();
    if (seen.has(pinCode)) continue;
    seen.add(pinCode);
    pins.push({ pinCode, batchId, priceGhs, validityDays });
  }

  const saved = await savePinBatch(pins);
  if (saved.error) {
    return NextResponse.json({ success: false, error: 'Could not save the PIN batch. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, batchId, count: saved.saved, pins }, { status: 201 });
}

/**
 * POST /api/pins { action: 'redeem', pinCode } - requires a student session.
 *
 * The voucher is credited to the account that owns the session. Attempts are
 * throttled so a signed-in student cannot brute-force the code space.
 */
async function handleRedeem(req: NextRequest, body: any) {
  const row = await getStudentFromRequest(req);

  if (!row) {
    return NextResponse.json(
      { success: false, message: 'Please sign in before redeeming a PIN.' },
      { status: 401 }
    );
  }

  const phone = String(row.phone_number);
  const pinCode = typeof body?.pinCode === 'string' ? body.pinCode.trim().toUpperCase().slice(0, 32) : '';

  if (!pinCode) {
    return NextResponse.json({ success: false, message: 'Please enter a PIN code.' }, { status: 400 });
  }

  const throttleKey = `pin:${phone}`;
  const throttle = await checkLoginThrottle(throttleKey);
  if (!throttle.allowed) {
    const minutes = Math.max(1, Math.ceil(throttle.retryAfterSeconds / 60));
    return NextResponse.json(
      { success: false, message: `Too many PIN attempts. Please try again in ${minutes} minute${minutes === 1 ? '' : 's'}.` },
      { status: 429 }
    );
  }

  const result = await redeemAccessPin(pinCode, phone);

  if (!result.success) {
    await recordFailedLogin(throttleKey);
    return NextResponse.json({ success: false, message: result.message, student: result.student }, { status: 400 });
  }

  await resetLoginThrottle(throttleKey);

  return NextResponse.json({
    success: true,
    message: result.message,
    validityDays: result.validityDays,
    student: result.student,
  });
}
