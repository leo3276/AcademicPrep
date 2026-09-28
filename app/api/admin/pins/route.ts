import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, adminUnauthorized, getAdminPinStatus, updateAdminCredentials } from '@/lib/adminAuth';

/**
 * GET /api/admin/pins - administrator only.
 * Reports whether runtime PINs have been set. The PINs themselves are never
 * returned in any form.
 */
export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return adminUnauthorized();

  const status = await getAdminPinStatus();

  return NextResponse.json({ success: true, ...status });
}

/**
 * POST /api/admin/pins - administrator only.
 * Body: { currentPrimary, currentSecondary, newPrimary?, newSecondary? }
 *
 * Rotation requires proving knowledge of both current PINs, so a stolen admin
 * session alone cannot give an attacker permanent credentials.
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return adminUnauthorized();

  const body = await req.json().catch(() => null);

  const result = await updateAdminCredentials({
    currentPrimary: typeof body?.currentPrimary === 'string' ? body.currentPrimary.trim() : '',
    currentSecondary: typeof body?.currentSecondary === 'string' ? body.currentSecondary.trim() : '',
    newPrimary: typeof body?.newPrimary === 'string' ? body.newPrimary : undefined,
    newSecondary: typeof body?.newSecondary === 'string' ? body.newSecondary : undefined,
  });

  if (!result.success) {
    return NextResponse.json({ success: false, error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Administrator PINs updated.' });
}
