import { NextRequest, NextResponse } from 'next/server';
import { getStoredMomoClaims, createMomoClaim, OFFICIAL_MOMO_DETAILS } from '@/lib/momoClaimsStore';
import { requireAdmin } from '@/lib/adminAuth';
import { normalizePhone } from '@/lib/serverAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const phone = searchParams.get('phone');
  const isAdmin = requireAdmin(req);

  const claims = await getStoredMomoClaims();

  // If student checks their own phone claims
  if (phone) {
    const cleanPhone = normalizePhone(phone);
    const studentClaims = claims.filter((c) => c.studentPhone === cleanPhone);
    return NextResponse.json({
      success: true,
      officialDetails: OFFICIAL_MOMO_DETAILS,
      claims: studentClaims,
    });
  }

  // Admin access required to see all claims
  if (!isAdmin) {
    return NextResponse.json({
      success: true,
      officialDetails: OFFICIAL_MOMO_DETAILS,
      claims: [],
    });
  }

  return NextResponse.json({
    success: true,
    officialDetails: OFFICIAL_MOMO_DETAILS,
    claims,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const studentPhone = typeof body?.studentPhone === 'string' ? body.studentPhone : '';
    const studentName = typeof body?.studentName === 'string' ? body.studentName : undefined;
    const senderPhone = typeof body?.senderPhone === 'string' ? body.senderPhone : undefined;
    const transactionId = typeof body?.transactionId === 'string' ? body.transactionId : undefined;
    const amountGhs = Number(body?.amountGhs) || OFFICIAL_MOMO_DETAILS.amountGhs;

    if (!studentPhone) {
      return NextResponse.json({ success: false, error: 'Phone number is required.' }, { status: 400 });
    }

    const result = await createMomoClaim({
      studentPhone,
      studentName,
      senderPhone,
      transactionId,
      amountGhs,
    });

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: '30-Day VIP Pass granted immediately! Admin will audit your payment on MTN MoMo.',
      claim: result.claim,
    });
  } catch (err: any) {
    console.error('[/api/momo/claim] error:', err?.message || err);
    return NextResponse.json({ success: false, error: 'Failed to process payment confirmation.' }, { status: 500 });
  }
}
