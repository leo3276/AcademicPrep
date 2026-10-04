import { NextRequest, NextResponse } from 'next/server';
import { rejectMomoClaim } from '@/lib/momoClaimsStore';
import { requireAdmin } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ success: false, error: 'Administrator access required.' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const claimId = typeof body?.claimId === 'string' ? body.claimId : '';
    const reason = typeof body?.reason === 'string' ? body.reason : 'Payment could not be verified on MTN MoMo.';

    if (!claimId) {
      return NextResponse.json({ success: false, error: 'Claim ID is required.' }, { status: 400 });
    }

    const result = await rejectMomoClaim(claimId, reason);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `VIP Pass revoked for ${result.claim?.studentName || 'student'}.`,
      claim: result.claim,
    });
  } catch (err: any) {
    console.error('[/api/momo/claim/reject] error:', err?.message || err);
    return NextResponse.json({ success: false, error: 'Internal error rejecting claim.' }, { status: 500 });
  }
}
