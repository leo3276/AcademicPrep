import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { getPaystackSecretKey } from '@/lib/paystackKeys';
import {
  getPaymentByReference,
  markPaymentSuccess,
  markPaymentFailed,
  markPaymentExpired,
} from '@/lib/paymentsStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TIMEOUT_MS = 150 * 1000; // 2.5 minutes

export async function GET(req: NextRequest) {
  try {
    const studentRow = await getStudentFromRequest(req);
    if (!studentRow) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const reference = (searchParams.get('reference') || '').trim();
    const forceTimeout = searchParams.get('timeout') === '1';

    if (!reference) {
      return NextResponse.json(
        { success: false, message: 'Missing payment reference.' },
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
        { success: false, message: 'Payment record not found.' },
        { status: 404 }
      );
    }

    if (payment.status === 'success' || payment.status === 'failed' || payment.status === 'expired') {
      return NextResponse.json({
        success: true,
        reference: payment.reference,
        status: payment.status,
        failureReason: payment.failureReason || null,
      });
    }

    // While pending, verify directly with Paystack so the UI updates even if webhook is still in flight
    const secretKey = getPaystackSecretKey();
    const ageMs = Date.now() - new Date(payment.createdAt).getTime();
    const isTimedOut = forceTimeout || ageMs >= TIMEOUT_MS;

    if (secretKey) {
      const verifyRes = await fetch(
        `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${secretKey}`,
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }
      ).catch(() => null);

      if (verifyRes && verifyRes.ok) {
        const verifyJson = await verifyRes.json().catch(() => null);
        const pData = verifyJson?.data;
        const pStatus = String(pData?.status || '').toLowerCase();

        if (
          pStatus === 'success' &&
          pData?.currency === 'GHS' &&
          Number(pData?.amount) >= payment.amountPesewas
        ) {
          await markPaymentSuccess({
            reference,
            studentPhone: payment.studentPhone,
            studentName: payment.studentName,
            planId: payment.planId,
            amountPesewas: Number(pData.amount),
            source: 'verify',
          });

          return NextResponse.json({
            success: true,
            reference,
            status: 'success',
            failureReason: null,
          });
        }

        if (pStatus === 'failed' || pStatus === 'reversed') {
          const reason = pData?.gateway_response || 'Payment was declined or cancelled on your phone.';
          await markPaymentFailed(reference, reason);
          return NextResponse.json({
            success: true,
            reference,
            status: 'failed',
            failureReason: reason,
          });
        }

        if (pStatus === 'abandoned' && isTimedOut) {
          const reason = 'Payment timed out before MoMo PIN approval.';
          await markPaymentExpired(reference, reason);
          return NextResponse.json({
            success: true,
            reference,
            status: 'expired',
            failureReason: reason,
          });
        }
      }
    }

    if (isTimedOut) {
      const reason = 'Payment prompt timed out after 2.5 minutes. Please try again.';
      await markPaymentExpired(reference, reason);
      return NextResponse.json({
        success: true,
        reference,
        status: 'expired',
        failureReason: reason,
      });
    }

    return NextResponse.json({
      success: true,
      reference,
      status: 'pending',
      failureReason: null,
    });
  } catch (err: any) {
    console.error('[/api/paystack/status] error:', err?.message || err);
    return NextResponse.json(
      { success: false, message: 'Error checking payment status.' },
      { status: 500 }
    );
  }
}
