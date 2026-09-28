import { NextRequest, NextResponse } from 'next/server';
import { normalizePhone } from '@/lib/serverAuth';
import { grantPaidAccess, findStudentByPhone, toSafeStudent } from '@/lib/dbService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || '';
const REQUIRED_AMOUNT_PESEWAS = 2500; // GH₵ 25.00 monthly VIP pass
const VALIDITY_DAYS = 30;

/** Pull the student phone out of the Paystack metadata set at initialize time. */
function extractPhone(paystackData: any): string {
  const customPhone = paystackData?.metadata?.custom_fields?.find(
    (field: any) => field?.variable_name === 'phone_number'
  )?.value;

  return normalizePhone(customPhone || paystackData?.customer?.phone || '');
}

/**
 * POST /api/paystack/verify
 * Body: { reference }
 *
 * Entitlement is granted strictly from what Paystack reports for this
 * reference. Two changes matter:
 *   - the phone number is read from Paystack metadata, never from the request
 *     body, so one real payment cannot be used to unlock somebody else's account
 *   - the grant is idempotent on the reference, so calling this endpoint
 *     repeatedly with a paid reference cannot stack months of free access
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const reference = typeof body?.reference === 'string' ? body.reference.trim() : '';

    if (!reference) {
      return NextResponse.json({ success: false, message: 'Missing transaction reference' }, { status: 400 });
    }

    if (!PAYSTACK_SECRET_KEY) {
      console.error('[/api/paystack/verify] PAYSTACK_SECRET_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Payment verification is not configured on this server.' },
        { status: 500 }
      );
    }

    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const verifyData = await paystackRes.json().catch(() => null);

    if (!verifyData?.status || verifyData?.data?.status !== 'success') {
      return NextResponse.json(
        { success: false, message: verifyData?.message || 'Payment verification failed with Paystack' },
        { status: 400 }
      );
    }

    const paystackData = verifyData.data;

    if (paystackData.currency !== 'GHS') {
      return NextResponse.json({ success: false, message: 'Invalid payment currency' }, { status: 400 });
    }

    if (Number(paystackData.amount) < REQUIRED_AMOUNT_PESEWAS) {
      return NextResponse.json(
        { success: false, message: 'Payment amount is less than GH₵ 25.00 required for the Monthly VIP Pass' },
        { status: 400 }
      );
    }

    const phone = extractPhone(paystackData);

    if (!phone) {
      // Money was taken but cannot be attributed. Log loudly for manual credit;
      // retrying will not help because the metadata is fixed at initialize time.
      console.error(`[paystack/verify] Unattributable payment reference=${reference} amount=${paystackData.amount}`);
      return NextResponse.json(
        {
          success: false,
          message:
            'Payment received but no phone number was attached. Contact support with this reference: ' + reference,
          reference,
        },
        { status: 422 }
      );
    }

    const result = await grantPaidAccess({
      reference,
      phone,
      amountPesewas: Number(paystackData.amount),
      channel: typeof paystackData.channel === 'string' ? paystackData.channel : 'MOBILE_MONEY',
      source: 'verify',
      validityDays: VALIDITY_DAYS,
    });

    if (result.alreadyProcessed) {
      return NextResponse.json({
        success: true,
        alreadyProcessed: true,
        message: 'This payment has already been applied to your account.',
        reference,
        expiresAt: result.expiresAt,
      });
    }

    if (!result.granted) {
      const existing = await findStudentByPhone(phone);
      if (!existing) {
        return NextResponse.json(
          {
            success: false,
            message:
              'Payment received, but no account exists for this phone number yet. Create your account with the same number and contact support to activate access.',
            reference,
          },
          { status: 422 }
        );
      }
      return NextResponse.json(
        { success: false, message: 'Payment verified but access could not be activated. Please contact support.' },
        { status: 500 }
      );
    }

    const studentRow = await findStudentByPhone(phone);

    return NextResponse.json({
      success: true,
      message: 'Payment confirmed! Monthly VIP Full Access Pass (30 days) successfully activated.',
      reference,
      amountGhs: Number(paystackData.amount) / 100,
      validityDays: VALIDITY_DAYS,
      expiresAt: result.expiresAt,
      phoneNumber: phone,
      isMonthly: true,
      student: studentRow ? toSafeStudent(studentRow) : undefined,
    });
  } catch (err: any) {
    console.error('[/api/paystack/verify] error:', err?.message || err);
    return NextResponse.json({ success: false, message: 'Internal error verifying payment' }, { status: 500 });
  }
}
