import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest, normalizePhone } from '@/lib/serverAuth';
import { findStudentByPhone, grantPaidAccess } from '@/lib/dbService';
import { getPaystackSecretKey } from '@/lib/paystackKeys';
import { recordVerifiedPaystackPayment } from '@/lib/momoClaimsStore';

export const runtime = 'nodejs';

const MIN_AMOUNT_PESEWAS = 3000; // GHS 30.00 minimum pass

function extractPhone(paystackData: any): string {
  const customPhone = paystackData?.metadata?.custom_fields?.find(
    (f: any) => f?.variable_name === 'phone_number'
  )?.value;
  return normalizePhone(customPhone || paystackData?.customer?.phone || '');
}

function extractStudentName(paystackData: any): string {
  const customName = paystackData?.metadata?.custom_fields?.find(
    (f: any) => f?.variable_name === 'student_name'
  )?.value;
  return String(customName || '').trim();
}

function resolveTierFromPaystack(paystackData: any): {
  planId: 'monthly' | 'term' | 'annual';
  amountGhs: number;
  validityDays: number;
} {
  const amountPesewas = Number(paystackData?.amount || 0);
  const metaPlan = paystackData?.metadata?.plan_id;

  if (metaPlan === 'annual' || amountPesewas >= 29900) {
    return { planId: 'annual', amountGhs: 299, validityDays: 365 };
  }
  if (metaPlan === 'term' || amountPesewas >= 7500) {
    return { planId: 'term', amountGhs: 75, validityDays: 90 };
  }
  return { planId: 'monthly', amountGhs: 30, validityDays: 30 };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const reference = typeof body?.reference === 'string' ? body.reference.trim() : '';

    if (!reference || reference.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Missing transaction reference.' },
        { status: 400 }
      );
    }

    const secretKey = getPaystackSecretKey();
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Payment verification is not configured on the server.' },
        { status: 500 }
      );
    }

    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    const verifyData = await paystackRes.json().catch(() => null);

    if (!paystackRes.ok || !verifyData?.status || !verifyData?.data) {
      return NextResponse.json(
        { success: false, message: verifyData?.message || 'Payment verification failed with Paystack.' },
        { status: 400 }
      );
    }

    const paystackData = verifyData.data;

    if (paystackData.status !== 'success') {
      return NextResponse.json(
        {
          success: false,
          status: paystackData.status,
          message: `Transaction status is ${paystackData.status}.`,
        },
        { status: 400 }
      );
    }

    if (paystackData.currency !== 'GHS') {
      return NextResponse.json({ success: false, message: 'Unexpected payment currency.' }, { status: 400 });
    }

    if (Number(paystackData.amount) < MIN_AMOUNT_PESEWAS) {
      return NextResponse.json(
        { success: false, message: 'Payment amount does not cover the pass price.' },
        { status: 400 }
      );
    }

    const metadataPhone = extractPhone(paystackData);
    const sessionStudent = await getStudentFromRequest(req);
    const sessionPhone = sessionStudent?.phone_number ? String(sessionStudent.phone_number) : '';
    const phone = metadataPhone || sessionPhone;

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: 'Payment succeeded, but no student account could be identified.',
        },
        { status: 400 }
      );
    }

    if (metadataPhone && sessionPhone && metadataPhone !== sessionPhone) {
      return NextResponse.json(
        { success: false, message: 'This payment belongs to a different phone number.' },
        { status: 403 }
      );
    }

    const tier = resolveTierFromPaystack(paystackData);

    // 1. Try RPC grant first
    await grantPaidAccess({
      reference: paystackData.reference || reference,
      phone,
      amountPesewas: Number(paystackData.amount),
      channel: typeof paystackData.channel === 'string' ? paystackData.channel : 'MOBILE_MONEY',
      source: 'verify',
      validityDays: tier.validityDays,
    }).catch(() => null);

    // 2. Always guarantee pass activation + Admin revenue sync via momoClaimsStore
    const recorded = await recordVerifiedPaystackPayment({
      reference: paystackData.reference || reference,
      studentPhone: phone,
      studentName: extractStudentName(paystackData),
      amountGhs: tier.amountGhs,
      planId: tier.planId,
      validityDays: tier.validityDays,
    });

    const student = await findStudentByPhone(phone);

    return NextResponse.json({
      success: true,
      verified: true,
      alreadyProcessed: recorded.alreadyProcessed,
      reference: paystackData.reference,
      amountGhs: tier.amountGhs,
      planId: tier.planId,
      validityDays: tier.validityDays,
      channel: paystackData.channel,
      paidAt: paystackData.paid_at,
      expiresAt: student?.access_expires_at || null,
    });
  } catch (err: any) {
    console.error('[/api/paystack/verify] error:', err?.message || err);
    return NextResponse.json(
      { success: false, message: 'Server error verifying transaction.' },
      { status: 500 }
    );
  }
}
