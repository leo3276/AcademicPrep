import { NextRequest, NextResponse } from 'next/server';
import { approveMomoClaim } from '@/lib/momoClaimsStore';
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

    if (!claimId) {
      return NextResponse.json({ success: false, error: 'Claim ID is required.' }, { status: 400 });
    }

    const result = await approveMomoClaim(claimId);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Verified and activated 30-day VIP pass for ${result.claim?.studentName} (${result.claim?.studentPhone}).`,
      claim: result.claim,
    });
  } catch (err: any) {
    console.error('[/api/momo/claim/approve] error:', err?.message || err);
    return NextResponse.json({ success: false, error: 'Internal error approving claim.' }, { status: 500 });
  }
}
