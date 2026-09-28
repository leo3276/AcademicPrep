import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { normalizePhone, safeEqual } from '@/lib/serverAuth';
import { grantPaidAccess } from '@/lib/dbService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || '';
const REQUIRED_AMOUNT_PESEWAS = 2500; // GH₵ 25.00
const VALIDITY_DAYS = 30;

/**
 * POST /api/paystack/webhook
 *
 * This is the authoritative entitlement path: it fires even when the student
 * closes the in-app browser before /api/paystack/verify runs.
 *
 * Hardened in three ways:
 *   - the HMAC signature is compared in constant time (a plain !== leaks the
 *     correct digest byte by byte through response timing)
 *   - the grant is idempotent on the Paystack reference, so retry deliveries
 *     cannot stack months of access
 *   - the student phone comes only from the transaction metadata
 */
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature') || '';

    if (!signature) {
      return NextResponse.json({ message: 'Missing signature' }, { status: 400 });
    }

    if (!PAYSTACK_SECRET_KEY) {
      console.error('[paystack/webhook] PAYSTACK_SECRET_KEY is not configured');
      return NextResponse.json({ message: 'Server webhook secret not configured' }, { status: 500 });
    }

    const expected = crypto
      .createHmac('sha512', PAYSTACK_SECRET_KEY)
      .update(rawBody, 'utf8')
      .digest('hex');

    if (!safeEqual(signature, expected)) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    if (event?.event !== 'charge.success') {
      // Acknowledge non-payment events so Paystack stops retrying them.
      return NextResponse.json({ status: 'ok' });
    }

    const data = event.data || {};

    if (data.status !== 'success' || data.currency !== 'GHS' || Number(data.amount) < REQUIRED_AMOUNT_PESEWAS) {
      return NextResponse.json({ status: 'ok' });
    }

    const reference = typeof data.reference === 'string' ? data.reference.trim() : '';
    const customPhone = data.metadata?.custom_fields?.find(
      (field: any) => field?.variable_name === 'phone_number'
    )?.value;
    const phone = normalizePhone(customPhone || data.customer?.phone || '');

    if (!reference || !phone) {
      console.error(
        `[paystack/webhook] Cannot attribute payment reference=${reference || 'missing'} phone=${phone || 'missing'}`
      );
      return NextResponse.json({ status: 'ok' });
    }

    const result = await grantPaidAccess({
      reference,
      phone,
      amountPesewas: Number(data.amount),
      channel: typeof data.channel === 'string' ? data.channel : 'MOBILE_MONEY',
      source: 'webhook',
      validityDays: VALIDITY_DAYS,
    });

    if (result.alreadyProcessed) {
      console.info(`[paystack/webhook] Duplicate delivery ignored reference=${reference}`);
    } else if (!result.granted) {
      console.error(`[paystack/webhook] Access not granted reference=${reference} phone=${phone}`);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (err: any) {
    console.error('[paystack/webhook] error:', err?.message || err);
    return NextResponse.json({ message: 'Webhook processing error' }, { status: 500 });
  }
}
