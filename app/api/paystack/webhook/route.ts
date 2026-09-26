import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature');

    if (!signature) {
      return NextResponse.json({ message: 'Missing signature' }, { status: 400 });
    }

    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json({ message: 'Server webhook secret not configured' }, { status: 500 });
    }

    // Verify HMAC SHA512 signature
    const hash = crypto
      .createHmac('sha512', PAYSTACK_SECRET_KEY)
      .update(rawBody)
      .digest('hex');

    if (hash !== signature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === 'charge.success') {
      const data = event.data;
      if (data.status === 'success' && data.currency === 'GHS' && data.amount >= 2000) {
        // Extract student phone
        const customPhone = data.metadata?.custom_fields?.find(
          (f: any) => f.variable_name === 'phone_number'
        )?.value;
        const phone = customPhone || data.customer?.phone;

        if (phone && isSupabaseConfigured && supabase) {
          const cleanPhone = String(phone).trim().replace(/\s+/g, '');
          const now = new Date();
          const validityDays = 30; // 1 month access
          const expiresAt = new Date(now.getTime() + validityDays * 24 * 60 * 60 * 1000).toISOString();

          await supabase
            .from('students')
            .update({
              has_full_access: true,
              access_type: 'Full Pass',
              access_expires_at: expiresAt, // 30-day monthly pass
              last_active_at: now.toISOString(),
            })
            .eq('phone_number', cleanPhone);
        }
      }
    }

    return NextResponse.json({ status: 'ok' });
  } catch (err: any) {
    console.warn('Paystack webhook error:', err?.message || err);
    return NextResponse.json({ message: 'Webhook processing error' }, { status: 500 });
  }
}
