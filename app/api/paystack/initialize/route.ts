import { NextRequest, NextResponse } from 'next/server';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const phoneNumber = (body.phoneNumber || '').trim().replace(/\s+/g, '');
    const fullName = (body.fullName || 'AcademicPrep Student').trim();

    if (!phoneNumber) {
      return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 400 });
    }

    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json({ success: false, message: 'Server payment configuration missing' }, { status: 500 });
    }

    const email = `${phoneNumber}@academicprep.com`;
    const amountPesewas = 2000; // GHS 20.00 / month

    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amountPesewas,
        currency: 'GHS',
        channels: ['mobile_money', 'card'],
        metadata: {
          custom_fields: [
            {
              display_name: 'Mobile Number',
              variable_name: 'phone_number',
              value: phoneNumber,
            },
            {
              display_name: 'Student Name',
              variable_name: 'full_name',
              value: fullName,
            },
            {
              display_name: 'Product',
              variable_name: 'product',
              value: 'Monthly VIP Full Access Pass (30 Days)',
            },
          ],
        },
      }),
    });

    const initData = await paystackRes.json();

    if (!initData.status || !initData.data) {
      return NextResponse.json({
        success: false,
        message: initData.message || 'Failed to initialize payment with Paystack',
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      access_code: initData.data.access_code,
      reference: initData.data.reference,
      authorization_url: initData.data.authorization_url,
    });
  } catch (err: any) {
    console.warn('Paystack initialize error:', err?.message || err);
    return NextResponse.json({ success: false, message: 'Payment gateway communication error' }, { status: 500 });
  }
}
