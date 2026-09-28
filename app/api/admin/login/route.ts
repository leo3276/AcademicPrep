import { NextRequest, NextResponse } from 'next/server';
import {
  verifyAdminCredentials,
  createAdminToken,
  adminCookieOptions,
  ADMIN_COOKIE_NAME,
  isSessionSigningConfigured,
} from '@/lib/adminAuth';
import { checkLoginThrottle, recordFailedLogin, resetLoginThrottle } from '@/lib/serverAuth';

// Throttle key for the console itself; reuses the login_attempts table.
const ADMIN_THROTTLE_KEY = '__admin_console__';

/**
 * POST /api/admin/login
 * Body: { primaryPin, secondaryPin }
 *
 * Replaces the PIN comparison that used to run in the browser against constants
 * compiled into the public bundle. On success an httpOnly signed cookie is set;
 * the PINs themselves live hashed in the database (or in server env vars).
 */
export async function POST(req: NextRequest) {
  if (!isSessionSigningConfigured()) {
    console.error('[/api/admin/login] ADMIN_SESSION_SECRET is not configured');
    return NextResponse.json(
      { success: false, error: 'Administrator login is not configured on this server.' },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const primaryPin = typeof body?.primaryPin === 'string' ? body.primaryPin.trim() : '';
  const secondaryPin = typeof body?.secondaryPin === 'string' ? body.secondaryPin.trim() : '';

  if (!primaryPin || !secondaryPin) {
    return NextResponse.json(
      { success: false, error: 'Please enter both administrator PINs.' },
      { status: 400 }
    );
  }

  const throttle = await checkLoginThrottle(ADMIN_THROTTLE_KEY);
  if (!throttle.allowed) {
    const minutes = Math.max(1, Math.ceil(throttle.retryAfterSeconds / 60));
    return NextResponse.json(
      {
        success: false,
        error: `Too many attempts. Please try again in ${minutes} minute${minutes === 1 ? '' : 's'}.`,
      },
      { status: 429 }
    );
  }

  if (!(await verifyAdminCredentials(primaryPin, secondaryPin))) {
    await recordFailedLogin(ADMIN_THROTTLE_KEY);
    return NextResponse.json({ success: false, error: 'Incorrect administrator PINs.' }, { status: 401 });
  }

  await resetLoginThrottle(ADMIN_THROTTLE_KEY);

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE_NAME, createAdminToken(), adminCookieOptions());

  return response;
}
