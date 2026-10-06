import { NextRequest, NextResponse } from 'next/server';
import { normalizePhone } from '@/lib/serverAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const THETELLER_MERCHANT_ID = process.env.THETELLER_MERCHANT_ID || '';
const THETELLER_API_USER = process.env.THETELLER_API_USER || '';
const THETELLER_API_KEY = process.env.THETELLER_API_KEY || '';
const THETELLER_BASE_URL =
  process.env.THETELLER_MODE === 'test'
    ? 'https://test.theteller.net'
    : 'https://prod.theteller.net';

// Detect network code for theteller ("MTN" | "VDF" | "ATL")
function getRSwitch(phone: string): 'MTN' | 'VDF' | 'ATL' {
  const clean = phone.replace(/\D/g, '');
  let prefix = '';
  if (clean.startsWith('233') && clean.length >= 5) {
    prefix = '0' + clean.substring(3, 5);
  } else if (clean.startsWith('0') && clean.length >= 3) {
    prefix = clean.substring(0, 3);
  }

  if (['020', '050'].includes(prefix)) return 'VDF';
  if (['027', '057', '026', '056'].includes(prefix)) return 'ATL';
  return 'MTN'; // Default to MTN
}

// Generate unique 12-digit transaction ID
function generateTransactionId(): string {
  const ts = Date.now().toString().slice(-10);
  const rand = Math.floor(10 + Math.random() * 90).toString();
  return `${ts}${rand}`.padStart(12, '0').slice(0, 12);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const rawPhone = typeof body?.phoneNumber === 'string' ? body.phoneNumber.trim() : '';

    if (!rawPhone) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid phone number.' },
        { status: 400 }
      );
    }

    const cleanPhone = normalizePhone(rawPhone);
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Invalid Ghanaian mobile phone number.' },
        { status: 400 }
      );
    }

    // Check if theteller credentials are configured
    if (!THETELLER_MERCHANT_ID || !THETELLER_API_USER || !THETELLER_API_KEY) {
      console.warn('theteller credentials missing in environment variables.');
      return NextResponse.json(
        {
          success: false,
          isConfigError: true,
          message:
            'Theteller payment gateway is not yet configured. Please add THETELLER_MERCHANT_ID, THETELLER_API_USER, and THETELLER_API_KEY to .env.local.',
        },
        { status: 503 }
      );
    }

    const network = getRSwitch(cleanPhone);
    const transactionId = generateTransactionId();
    // 25.00 GHS in pesewas zero-padded to 12 digits: "000000002500"
    const amountPadded = '000000002500';

    const authHeader = `Basic ${Buffer.from(
      `${THETELLER_API_USER}:${THETELLER_API_KEY}`
    ).toString('base64')}`;

    const payload = {
      amount: amountPadded,
      processing_code: '000200', // Standard mobile money debit/charge
      transaction_id: transactionId,
      desc: 'AcademicPrep VIP Pass (30 Days)',
      merchant_id: THETELLER_MERCHANT_ID,
      subscriber_number: cleanPhone,
      'r-switch': network,
    };

    console.log(`[theteller/charge] Initiating USSD prompt for ${cleanPhone} on ${network}, tx: ${transactionId}`);

    const res = await fetch(`${THETELLER_BASE_URL}/v1.1/transaction/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);
    console.log('[theteller/charge] Response:', data);

    // theteller returns codes such as "000" (approved/processed) or "100" / "101" (prompt dispatched)
    if (data && (data.code === '000' || data.code === '100' || data.code === '101' || data.status === 'pending' || data.status === 'processing')) {
      return NextResponse.json({
        success: true,
        promptSent: true,
        transactionId,
        message: data.reason || 'Prompt sent to your phone. Enter your MoMo PIN to authorize.',
      });
    }

    // In case of an immediate telco or wallet error
    return NextResponse.json({
      success: false,
      message: data?.reason || data?.message || 'Failed to trigger Mobile Money prompt. Please verify your phone number.',
    }, { status: 400 });

  } catch (err: any) {
    console.error('[/api/theteller/charge] Exception:', err);
    return NextResponse.json({
      success: false,
      message: 'Network error communicating with payment gateway.',
    }, { status: 500 });
  }
}
