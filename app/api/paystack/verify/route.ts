import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reference = (body.reference || '').trim();
    let phoneNumber = (body.phoneNumber || '').trim().replace(/\s+/g, '');

    if (!reference) {
      return NextResponse.json({ success: false, message: 'Missing transaction reference' }, { status: 400 });
    }

    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json({ success: false, message: 'Paystack secret key is not configured in server environment' }, { status: 500 });
    }

    // 1. Verify with Paystack API
    const paystackRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const verifyData = await paystackRes.json();

    if (!verifyData.status || verifyData.data?.status !== 'success') {
      return NextResponse.json({
        success: false,
        message: verifyData.message || 'Payment verification failed with Paystack',
      }, { status: 400 });
    }

    const paystackData = verifyData.data;

    // Validate currency and amount (2000 pesewas = GHS 20.00 / month)
    if (paystackData.currency !== 'GHS') {
      return NextResponse.json({ success: false, message: 'Invalid payment currency' }, { status: 400 });
    }

    if (paystackData.amount < 2000) {
      return NextResponse.json({ success: false, message: 'Payment amount is less than GHS 20.00 required for Monthly VIP Pass' }, { status: 400 });
    }

    // If phone number was not provided in request, check Paystack customer / metadata
    if (!phoneNumber) {
      const customPhone = paystackData.metadata?.custom_fields?.find((f: any) => f.variable_name === 'phone_number')?.value;
      if (customPhone) phoneNumber = String(customPhone).trim().replace(/\s+/g, '');
    }

    const now = new Date();
    const validityDays = 30; // 1 month access
    const expiresAt = new Date(now.getTime() + validityDays * 24 * 60 * 60 * 1000).toISOString();

    // 2. Upgrade student to 30-Day Monthly VIP Pass in Supabase
    if (phoneNumber && isSupabaseConfigured && supabase) {
      const { error: studentErr } = await supabase
        .from('students')
        .update({
          has_full_access: true,
          access_type: 'Full Pass',
          access_expires_at: expiresAt, // 30-day monthly pass
          last_active_at: now.toISOString(),
        })
        .eq('phone_number', phoneNumber);

      if (studentErr) {
        console.warn('Supabase student VIP upgrade notice:', studentErr.message);
      }

      // Record transaction in access_pins
      const generatedPin = `PREP-MOMO-${reference.slice(-6).toUpperCase()}`;
      await supabase
        .from('access_pins')
        .insert({
          id: `pin-paystack-${Date.now()}`,
          pin_code: generatedPin,
          batch_id: 'BATCH-PAYSTACK-MOMO',
          price_ghs: 20.00,
          validity_days: validityDays,
          status: 'REDEEMED',
          redeemed_by_student_phone: phoneNumber,
          redeemed_at: now.toISOString(),
          created_at: now.toISOString(),
        })
        .select()
        .maybeSingle();
    }

    return NextResponse.json({
      success: true,
      message: 'Payment confirmed! Monthly VIP Full Access Pass (30 Days) successfully activated.',
      reference,
      amountGhs: 20.00,
      validityDays,
      expiresAt,
      phoneNumber,
      isMonthly: true,
    });
  } catch (err: any) {
    console.warn('Paystack verify route error:', err?.message || err);
    return NextResponse.json({ success: false, message: 'Internal error verifying payment' }, { status: 500 });
  }
}
