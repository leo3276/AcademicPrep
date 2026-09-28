import { NextRequest, NextResponse } from 'next/server';
import { getBearerToken, revokeSession } from '@/lib/serverAuth';

/**
 * POST /api/auth/logout
 * Authorization: Bearer <session token>
 *
 * Revokes the presented session server-side. Clients must also discard their
 * local copy of the token.
 */
export async function POST(req: NextRequest) {
  const token = getBearerToken(req);

  if (!token) {
    return NextResponse.json({ success: false, error: 'No active session.' }, { status: 400 });
  }

  await revokeSession(token);

  return NextResponse.json({ success: true });
}
