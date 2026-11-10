import { NextRequest, NextResponse } from 'next/server';
import { getPaystackSecretKey } from '@/lib/paystackKeys';
import { resolvePlanById } from '@/lib/momoConfig';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phoneNumber, studentName, email, planId } = body;

    const secretKey = getPaystackSecretKey();
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Paystack secret key is not configured on server' },
        { status: 500 }
      );
    }

    const plan = resolvePlanById(planId);
    const amountPesewas = plan.amountGhs * 100;

    const cleanPhone = (phoneNumber || '').replace(/\s+/g, '');
    const customerEmail = email || `student.${cleanPhone || Date.now()}@acadmicprep.com`;
    const ref = `PREP-${plan.id.toUpperCase()}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: customerEmail,
        amount: amountPesewas,
        currency: 'GHS',
        reference: ref,
        channels: ['mobile_money', 'card'],
        metadata: {
          plan_id: plan.id,
          plan_label: plan.label,
          validity_days: plan.validityDays,
          custom_fields: [
            {
              display_name: 'Student Name',
              variable_name: 'student_name',
              value: studentName || 'AcademicPrep Student',
            },
            {
              display_name: 'Phone Number',
              variable_name: 'phone_number',
              value: cleanPhone,
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

    const initData = await paystackRes.json();

    if (!paystackRes.ok || !initData.status || !initData.data?.access_code) {
      return NextResponse.json(
        {
          success: false,
          message: initData.message || 'Failed to initialize payment with Paystack',
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      access_code: initData.data.access_code,
      authorization_url: initData.data.authorization_url,
      reference: initData.data.reference || ref,
      email: customerEmail,
      planId: plan.id,
      amountGhs: plan.amountGhs,
      validityDays: plan.validityDays,
    });
  } catch (err: any) {
    console.warn('Paystack initialize error:', err?.message || err);
    return NextResponse.json(
      { success: false, message: 'Server error initializing payment' },
      { status: 500 }
    );
  }
}
