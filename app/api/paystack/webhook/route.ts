import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { normalizePhone } from '@/lib/serverAuth';
import { getPaystackSecretKey } from '@/lib/paystackKeys';
import { markPaymentSuccess, markPaymentFailed } from '@/lib/paymentsStore';

export const runtime = 'nodejs';

const MIN_AMOUNT_PESEWAS = 3000;

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature') || '';
    const secretKey = getPaystackSecretKey();

    if (!secretKey) {
      return NextResponse.json({ error: 'Not configured' }, { status: 500 });
    }

    const expected = crypto
      .createHmac('sha512', secretKey)
      .update(rawBody)
      .digest('hex');

    if (
      !signature ||
      signature.length !== expected.length ||
      !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
    ) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventType = String(event?.event || '');
    const data = event?.data;
    const reference = typeof data?.reference === 'string' ? data.reference.trim() : '';

    if (!reference) {
      return NextResponse.json({ received: true });
    }

    if (eventType === 'charge.failed') {
      const reason = data?.gateway_response || 'Mobile Money payment failed or was declined.';
      await markPaymentFailed(reference, reason);
      return NextResponse.json({ received: true });
    }

    if (eventType !== 'charge.success') {
      return NextResponse.json({ received: true });
    }

    if (!data || data.status !== 'success' || data.currency !== 'GHS') {
      return NextResponse.json({ received: true });
    }

    const amountPesewas = Number(data.amount || 0);
    if (amountPesewas < MIN_AMOUNT_PESEWAS) {
      return NextResponse.json({ received: true });
    }

    const customPhone = data?.metadata?.custom_fields?.find(
      (f: any) => f?.variable_name === 'phone_number'
    )?.value;
    const customName = data?.metadata?.custom_fields?.find(
      (f: any) => f?.variable_name === 'student_name'
    )?.value;
    const phone = normalizePhone(customPhone || data?.customer?.phone || '');
    const metaPlan = data?.metadata?.plan_id;
    const planId: 'monthly' | 'term' | 'annual' =
      metaPlan === 'annual' || amountPesewas >= 18000
        ? 'annual'
        : metaPlan === 'term' || amountPesewas >= 6000
        ? 'term'
        : 'monthly';

    await markPaymentSuccess({
      reference,
      studentPhone: phone,
      studentName: String(customName || '').trim(),
      planId,
      amountPesewas,
      source: 'webhook',
    });

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('[paystack/webhook] error:', err?.message || err);
    return NextResponse.json({ error: 'Webhook handler failure' }, { status: 500 });
  }
}
