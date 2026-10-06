import { NextRequest, NextResponse } from 'next/server';
import { normalizePhone } from '@/lib/serverAuth';
import { grantPaidAccess, findStudentByPhone, toSafeStudent } from '@/lib/dbService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const THETELLER_MERCHANT_ID = process.env.THETELLER_MERCHANT_ID || '';
const THETELLER_BASE_URL =
  process.env.THETELLER_MODE === 'test'
    ? 'https://test.theteller.net'
    : 'https://prod.theteller.net';

const REQUIRED_AMOUNT_PESEWAS = 2500; // GH₵ 25.00
const VALIDITY_DAYS = 30;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const transactionId = (searchParams.get('transaction_id') || '').trim();
    const rawPhone = (searchParams.get('phone') || '').trim();

    if (!transactionId) {
      return NextResponse.json(
        { success: false, status: 'failed', message: 'Missing transaction_id' },
        { status: 400 }
      );
    }

    if (!THETELLER_MERCHANT_ID) {
      return NextResponse.json(
        { success: false, status: 'failed', message: 'Merchant ID not configured' },
        { status: 500 }
      );
    }

    const phone = normalizePhone(rawPhone);

    const res = await fetch(
      `${THETELLER_BASE_URL}/v1.1/users/transactions/${encodeURIComponent(transactionId)}/status`,
      {
        method: 'GET',
        headers: {
          'Merchant-Id': THETELLER_MERCHANT_ID,
          'Cache-Control': 'no-cache',
        },
      }
    );

    const data = await res.json().catch(() => null);
    console.log(`[theteller/status] Check for tx ${transactionId}:`, data);

    // Code "000" in theteller indicates transaction completed successfully
    if (data && data.code === '000') {
      let expiresAt: string | null = null;
      let studentData = undefined;

      if (phone) {
        const result = await grantPaidAccess({
          reference: transactionId,
          phone,
          amountPesewas: REQUIRED_AMOUNT_PESEWAS,
          channel: 'THETELLER_MOMO',
          source: 'verify',
          validityDays: VALIDITY_DAYS,
        });

        expiresAt = result.expiresAt;
        const studentRow = await findStudentByPhone(phone);
        if (studentRow) {
          studentData = toSafeStudent(studentRow);
        }
      }

      return NextResponse.json({
        success: true,
        status: 'approved',
        message: 'Payment confirmed! Monthly VIP Full Access Pass activated.',
        transactionId,
        expiresAt,
        student: studentData,
      });
    }

    // Pending / In-progress codes (waiting for student to enter PIN)
    // Common theteller pending codes: "100", "101", "102"
    if (
      !data ||
      data.code === '100' ||
      data.code === '101' ||
      data.code === '102' ||
      data.status === 'pending' ||
      data.status === 'processing'
    ) {
      return NextResponse.json({
        success: false,
        status: 'pending',
        message: 'Waiting for PIN authorization on phone...',
      });
    }

    // Any other code indicates failure, cancellation, or timeout
    return NextResponse.json({
      success: false,
      status: 'failed',
      message: data.reason || data.message || 'Payment was not approved or timed out.',
    });
  } catch (err: any) {
    console.error('[/api/theteller/status] Exception:', err);
    return NextResponse.json(
      { success: false, status: 'pending', message: 'Checking status...' },
      { status: 200 }
    );
  }
}
