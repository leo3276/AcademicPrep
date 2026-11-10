import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest, normalizePhone } from '@/lib/serverAuth';
import { resolvePlanById } from '@/lib/momoConfig';
import { getPaystackSecretKey } from '@/lib/paystackKeys';
import {
  createPendingPayment,
  normalizeClientNetwork,
  toPaystackProvider,
  markPaymentFailed,
} from '@/lib/paymentsStore';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // 1. Identify user strictly from server session (never from request body)
    const studentRow = await getStudentFromRequest(req);
    if (!studentRow) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please sign in to your student account before starting a payment.',
        },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => null);
    const cleanMomoPhone = normalizePhone(body?.phone || '');
    const clientNetwork = normalizeClientNetwork(body?.network || '');
    const paystackProvider = toPaystackProvider(body?.network || '');
    const rawPlanId = typeof body?.planId === 'string' ? body.planId.trim().toLowerCase() : 'monthly';

    if (!/^0[235]\d{8}$/.test(cleanMomoPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid 10-digit Ghana Mobile Money number (e.g. 0241234567).',
        },
        { status: 400 }
      );
    }

    if (!clientNetwork || !paystackProvider) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please select a valid Mobile Money network (MTN, Telecel, or AirtelTigo).',
        },
        { status: 400 }
      );
    }

    if (!['monthly', 'term', 'annual'].includes(rawPlanId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid pass plan selected.' },
        { status: 400 }
      );
    }

    // 2. Look up the price strictly on the server (never accept amount from client)
    const plan = resolvePlanById(rawPlanId);
    const amountPesewas = plan.amountGhs * 100;

    const secretKey = getPaystackSecretKey();
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Payment gateway is not configured on the server.' },
        { status: 500 }
      );
    }

    const studentPhone = String(studentRow.phone_number);
    const studentName = String(studentRow.full_name || 'Student');
    const userId = String(studentRow.id);
    const reference = `MOMO-${plan.id.toUpperCase()}-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase()}`;

    // 3. Insert pending payment row before calling Paystack
    await createPendingPayment({
      reference,
      userId,
      studentPhone,
      studentName,
      planId: plan.id,
      amountPesewas,
      network: clientNetwork,
      momoPhone: cleanMomoPhone,
    });

    // 4. Call Paystack Direct Mobile Money Charge API
    const chargeRes = await fetch('https://api.paystack.co/charge', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `student.${studentPhone}@acadmicprep.com`,
        amount: amountPesewas,
        currency: 'GHS',
        reference,
        mobile_money: {
          phone: cleanMomoPhone,
          provider: paystackProvider,
        },
        metadata: {
          user_id: userId,
          plan_id: plan.id,
          plan_label: plan.label,
          validity_days: plan.validityDays,
          custom_fields: [
            {
              display_name: 'Student Name',
              variable_name: 'student_name',
              value: studentName,
            },
            {
              display_name: 'Phone Number',
              variable_name: 'phone_number',
              value: studentPhone,
            },
            {
              display_name: 'Pass Tier',
              variable_name: 'plan_id',
              value: plan.id,
            },
          ],
        },
      }),
    });

    const chargeJson = await chargeRes.json().catch(() => null);

    if (!chargeRes.ok || !chargeJson?.status || !chargeJson?.data) {
      const failMsg =
        chargeJson?.data?.message ||
        chargeJson?.message ||
        'Could not initiate Mobile Money prompt. Please check the number and try again.';
      await markPaymentFailed(reference, failMsg);
      return NextResponse.json({ success: false, reference, message: failMsg }, { status: 400 });
    }

    const data = chargeJson.data;
    const chargeStatus = String(data.status || 'pay_offline');

    if (chargeStatus === 'failed') {
      const failMsg = data.gateway_response || data.message || 'Mobile Money charge was declined.';
      await markPaymentFailed(reference, failMsg);
      return NextResponse.json(
        { success: false, reference, status: 'failed', message: failMsg },
        { status: 400 }
      );
    }

    // Never grant access from the charge response alone; webhook / server verify is the source of truth.
    return NextResponse.json({
      success: true,
      reference,
      status: chargeStatus === 'send_otp' ? 'send_otp' : 'pay_offline',
      message:
        data.display_text ||
        chargeJson.message ||
        'Check your phone and enter your MoMo PIN to approve the payment.',
      amountGhs: plan.amountGhs,
      planId: plan.id,
      planLabel: plan.label,
    });
  } catch (err: any) {
    console.error('[/api/paystack/charge] error:', err?.message || err);
    return NextResponse.json(
      { success: false, message: 'Server error initiating Mobile Money charge.' },
      { status: 500 }
    );
  }
}
