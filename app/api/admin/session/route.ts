import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';

/**
 * GET /api/admin/session
 *
 * Tells the dashboard whether the browser holds a valid administrator session.
 * The dashboard must use this instead of trusting a localStorage flag, which
 * any visitor can set from devtools.
 */
export async function GET(req: NextRequest) {
  return NextResponse.json({ isAdmin: requireAdmin(req) });
}
