import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { getPaystackSecretKey } from '@/lib/paystackKeys';
import { getPaymentByReference, markPaymentFailed } from '@/lib/paymentsStore';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const studentRow = await getStudentFromRequest(req);
    if (!studentRow) {
      return NextResponse.json(
        { success: false, message: 'Please sign in to continue.' },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => null);
    const reference = typeof body?.reference === 'string' ? body.reference.trim() : '';
    const otp = typeof body?.otp === 'string' ? body.otp.trim().replace(/\s+/g, '') : '';

    if (!reference || !otp) {
      return NextResponse.json(
        { success: false, message: 'Please enter the OTP sent to your phone.' },
        { status: 400 }
      );
    }

    const payment = await getPaymentByReference(reference);
    if (
      !payment ||
      (payment.userId !== String(studentRow.id) &&
        payment.studentPhone !== String(studentRow.phone_number))
    ) {
      return NextResponse.json(
        { success: false, message: 'Payment session not found for your account.' },
        { status: 404 }
      );
    }

    const secretKey = getPaystackSecretKey();
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Payment gateway is not configured.' },
        { status: 500 }
      );
    }

    const res = await fetch('https://api.paystack.co/charge/submit_otp', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp, reference }),
    });

    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.status) {
      const msg = json?.data?.message || json?.message || 'Invalid OTP. Please check and try again.';
      return NextResponse.json({ success: false, message: msg }, { status: 400 });
    }

    const chargeStatus = String(json.data?.status || 'pay_offline');
    if (chargeStatus === 'failed') {
      const failMsg = json.data?.gateway_response || json.data?.message || 'Transaction failed.';
      await markPaymentFailed(reference, failMsg);
      return NextResponse.json(
        { success: false, status: 'failed', message: failMsg },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      reference,
      status: 'pay_offline',
      message:
        json.data?.display_text ||
        'OTP accepted. Now check your phone and enter your MoMo PIN.',
    });
  } catch (err: any) {
    console.error('[/api/paystack/submit-otp] error:', err?.message || err);
    return NextResponse.json(
      { success: false, message: 'Server error submitting OTP.' },
      { status: 500 }
    );
  }
}
