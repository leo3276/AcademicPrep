import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { safeEqual } from './serverAuth';
import { supabaseAdmin, isSupabaseConfigured } from './supabaseClient';

/**
 * SERVER-ONLY admin authentication.
 *
 * The admin dashboard previously compared PINs against constants compiled into
 * the browser bundle, so anyone reading the page source became an admin. PINs
 * now live hashed in the database (or in server environment variables as a
 * bootstrap) and the browser only ever holds a short-lived signed session cookie.
 */

export const ADMIN_COOKIE_NAME = 'ap_admin_session';
export const ADMIN_SESSION_TTL_MS = 8 * 60 * 60 * 1000;

export type AdminSlot = 'primary' | 'secondary';

function base64url(input: Buffer | string): string {
  return Buffer.from(input as any)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function sign(payload: string, secret: string): string {
  return base64url(crypto.createHmac('sha256', secret).update(payload, 'utf8').digest());
}

export function isSessionSigningConfigured(): boolean {
  return Boolean(process.env.ADMIN_SESSION_SECRET);
}

/** Issue a signed admin session token. */
export function createAdminToken(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || '';
  const payload = base64url(JSON.stringify({ exp: Date.now() + ADMIN_SESSION_TTL_MS }));
  return `${payload}.${sign(payload, secret)}`;
}

/** Verify the signature and expiry of an admin session token. */
export function verifyAdminToken(token?: string | null): boolean {
  if (!token || !process.env.ADMIN_SESSION_SECRET) return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payload, signature] = parts;
  if (!safeEqual(signature, sign(payload, process.env.ADMIN_SESSION_SECRET))) return false;

  try {
    const decoded = JSON.parse(
      Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
    );
    return typeof decoded.exp === 'number' && decoded.exp > Date.now();
  } catch {
    return false;
  }
}

/**
 * Authorise an admin request. Accepts the signed session token from either the
 * cookie set by /api/admin/login or an `Authorization: Bearer` header, plus an
 * `x-admin-key` header for server-to-server scripts.
 *
 * The bearer path exists for the React Native app: it has no cookie jar, so it
 * replays the same short-lived signed token as a header. It is never a PIN and
 * never leaves the device that authenticated with both PINs.
 */
export function requireAdmin(req: NextRequest): boolean {
  const cookieToken = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (verifyAdminToken(cookieToken)) return true;

  const authorization = req.headers.get('authorization') || '';
  const bearerToken = authorization.replace(/^Bearer\s+/i, '').trim();
  if (verifyAdminToken(bearerToken)) return true;

  const configuredKey = process.env.ADMIN_API_KEY || '';
  const providedKey = req.headers.get('x-admin-key') || '';
  return Boolean(configuredKey) && safeEqual(providedKey, configuredKey);
}

export function adminUnauthorized() {
  return NextResponse.json({ success: false, error: 'Administrator access required.' }, { status: 401 });
}

/** Cookie options: never readable by JavaScript, never sent cross-site. */
export function adminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: Math.floor(ADMIN_SESSION_TTL_MS / 1000),
  };
}

function envPinForSlot(slot: AdminSlot): string {
  return (slot === 'primary' ? process.env.ADMIN_PIN : process.env.ADMIN_SECONDARY_PIN) || '';
}

/**
 * Verify one PIN slot.
 *
 * The hash is compared inside the database so it never reaches this process.
 * When a slot has never been set the function falls back to the environment
 * bootstrap PIN, which keeps a freshly migrated database usable.
 */
export async function verifyAdminSlot(slot: AdminSlot, pin: string): Promise<boolean> {
  if (!pin) return false;

  if (isSupabaseConfigured) {
    const { data, error } = await supabaseAdmin.rpc('verify_admin_pin', { p_slot: slot, p_pin: pin });

    if (error) {
      console.error(`[adminAuth] verify_admin_pin failed for ${slot}:`, error.message);
      return false;
    }

    // NULL means "slot not configured in the database" - use the env bootstrap.
    if (data !== null && data !== undefined) return data === true;
  }

  const envPin = envPinForSlot(slot);
  return Boolean(envPin) && safeEqual(pin, envPin);
}

/**
 * Authenticate the two-PIN ceremony used by the dashboard. Both slots must
 * match, preserving the existing owner + assistant model.
 */
export async function verifyAdminCredentials(primaryPin: string, secondaryPin: string): Promise<boolean> {
  if (!primaryPin || !secondaryPin) return false;

  const [primaryOk, secondaryOk] = await Promise.all([
    verifyAdminSlot('primary', primaryPin),
    verifyAdminSlot('secondary', secondaryPin),
  ]);

  return primaryOk && secondaryOk;
}

/**
 * Rotate admin PINs. The caller must prove knowledge of both current PINs, so a
 * stolen admin session alone cannot hand an attacker permanent credentials.
 */
export async function updateAdminCredentials(params: {
  currentPrimary: string;
  currentSecondary: string;
  newPrimary?: string;
  newSecondary?: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: 'Administrator PINs can only be changed when the database is configured.',
    };
  }

  if (!(await verifyAdminCredentials(params.currentPrimary, params.currentSecondary))) {
    return { success: false, error: 'Your current administrator PINs are incorrect.' };
  }

  const updates: { slot: AdminSlot; pin: string }[] = [];
  if (params.newPrimary && params.newPrimary.trim()) {
    updates.push({ slot: 'primary', pin: params.newPrimary.trim() });
  }
  if (params.newSecondary && params.newSecondary.trim()) {
    updates.push({ slot: 'secondary', pin: params.newSecondary.trim() });
  }

  if (updates.length === 0) {
    return { success: false, error: 'Please provide at least one new PIN.' };
  }

  for (const update of updates) {
    if (update.pin.length < 8) {
      return { success: false, error: 'Each administrator PIN must be at least 8 characters long.' };
    }

    const { data, error } = await supabaseAdmin.rpc('set_admin_pin', {
      p_slot: update.slot,
      p_pin: update.pin,
    });

    if (error || data !== true) {
      console.error(`[adminAuth] set_admin_pin failed for ${update.slot}:`, error?.message);
      return { success: false, error: 'Could not save the new administrator PIN. Please try again.' };
    }
  }

  return { success: true };
}

/** Reports which slots hold a runtime PIN, without revealing anything about them. */
export async function getAdminPinStatus(): Promise<{ primarySet: boolean; secondarySet: boolean }> {
  if (!isSupabaseConfigured) {
    return { primarySet: false, secondarySet: false };
  }

  const [primary, secondary] = await Promise.all([
    supabaseAdmin.rpc('admin_pin_is_set', { p_slot: 'primary' }),
    supabaseAdmin.rpc('admin_pin_is_set', { p_slot: 'secondary' }),
  ]);

  return {
    primarySet: primary.data === true,
    secondarySet: secondary.data === true,
  };
}
