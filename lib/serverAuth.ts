import crypto from 'crypto';
import { NextRequest } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from './supabaseClient';

/**
 * Server-side authentication primitives.
 *
 * Nothing in this module may be imported from a client component: it uses the
 * service_role key, which bypasses Row Level Security entirely.
 */

export const SESSION_TTL_DAYS = 30;

/** Failed logins allowed inside LOGIN_WINDOW_MS before the phone is locked. */
export const MAX_LOGIN_ATTEMPTS = 5;
export const LOGIN_WINDOW_MS = 15 * 60 * 1000;
export const LOGIN_LOCK_MS = 15 * 60 * 1000;

/**
 * Normalise a Ghanaian phone number to a bare digit string so that
 * "024 123 4567", "+233241234567" and "0241234567" all resolve to one account.
 */
export function normalizePhone(input: unknown): string {
  if (typeof input !== 'string') return '';
  let phone = input.trim().replace(/\s+/g, '').replace(/[^\d+]/g, '');
  if (!phone) return '';

  if (phone.startsWith('+233')) phone = '0' + phone.slice(4);
  else if (phone.startsWith('233') && phone.length === 12) phone = '0' + phone.slice(3);

  return phone;
}

export function isValidGhanaPhone(phone: string): boolean {
  return /^0[2356]\d{8}$/.test(phone);
}

/** Constant-time string comparison. Prevents timing attacks on secrets. */
export function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(String(a ?? ''), 'utf8');
  const bufB = Buffer.from(String(b ?? ''), 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/** SHA-256 of a session token. Only this hash is ever stored. */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token, 'utf8').digest('hex');
}

export interface SessionResult {
  token: string;
  expiresAt: string;
}

/**
 * Create a session for a student. Returns the raw token (sent to the client
 * once) and its expiry. The database stores only the SHA-256 hash, so a
 * database leak does not produce usable sessions.
 */
export async function createSession(studentId: string): Promise<SessionResult | null> {
  if (!isSupabaseConfigured) {
    console.error('createSession rejected: Supabase is not configured on this server.');
    return null;
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();

  const { error } = await supabaseAdmin
    .from('student_sessions')
    .insert({
      student_id: studentId,
      token_hash: hashToken(token),
      expires_at: expiresAt,
      created_at: new Date().toISOString(),
    });

  if (error) {
    console.error('createSession failed:', error.message);
    return null;
  }

  return { token, expiresAt };
}

/**
 * Resolve a bearer token to a student id. Returns null when the token is
 * missing, malformed, revoked or expired.
 */
export async function resolveSession(token?: string | null): Promise<string | null> {
  if (!token || typeof token !== 'string' || token.length < 32) return null;
  if (!isSupabaseConfigured) return null;

  const { data, error } = await supabaseAdmin
    .from('student_sessions')
    .select('student_id, expires_at, revoked_at')
    .eq('token_hash', hashToken(token))
    .maybeSingle();

  if (error || !data) return null;
  if (data.revoked_at) return null;
  if (new Date(data.expires_at).getTime() <= Date.now()) return null;

  return data.student_id as string;
}

/** Extract the bearer token from an Authorization header. */
export function getBearerToken(req: NextRequest): string | null {
  const header = req.headers.get('authorization') || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : null;
}

export async function revokeSession(token?: string | null): Promise<void> {
  if (!token || !isSupabaseConfigured) return;
  await supabaseAdmin
    .from('student_sessions')
    .update({ revoked_at: new Date().toISOString() })
    .eq('token_hash', hashToken(token))
    .is('revoked_at', null);
}

/** Revoke every session for a student (password change, account compromise). */
export async function revokeAllSessions(studentId: string): Promise<void> {
  if (!isSupabaseConfigured || !studentId) return;

  await supabaseAdmin
    .from('student_sessions')
    .update({ revoked_at: new Date().toISOString() })
    .eq('student_id', studentId)
    .is('revoked_at', null);
}

export interface ThrottleState {
  allowed: boolean;
  retryAfterSeconds: number;
}

/**
 * Check whether a login attempt is permitted for this phone number.
 * A 4-digit PIN has 10,000 combinations; without throttling an attacker can
 * own any account in minutes.
 */
export async function checkLoginThrottle(phone: string): Promise<ThrottleState> {
  // Without a database there is nothing to throttle against. Return early so
  // the request fails fast at PIN verification instead of blocking on a network
  // call to the unconfigured placeholder host.
  if (!isSupabaseConfigured) return { allowed: true, retryAfterSeconds: 0 };

  const { data, error } = await supabaseAdmin
    .from('login_attempts')
    .select('attempt_count, first_attempt_at, locked_until')
    .eq('phone_number', phone)
    .maybeSingle();

  if (error || !data) return { allowed: true, retryAfterSeconds: 0 };

  const now = Date.now();

  if (data.locked_until) {
    const lockedUntil = new Date(data.locked_until).getTime();
    if (lockedUntil > now) {
      return { allowed: false, retryAfterSeconds: Math.ceil((lockedUntil - now) / 1000) };
    }
  }

  const windowStart = data.first_attempt_at ? new Date(data.first_attempt_at).getTime() : now;
  if (now - windowStart > LOGIN_WINDOW_MS) {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if ((data.attempt_count || 0) >= MAX_LOGIN_ATTEMPTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil(LOGIN_LOCK_MS / 1000) };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/** Record a failed login. Locks the phone once MAX_LOGIN_ATTEMPTS is reached. */
export async function recordFailedLogin(phone: string): Promise<void> {
  if (!isSupabaseConfigured) return;

  const now = new Date();

  const { data } = await supabaseAdmin
    .from('login_attempts')
    .select('attempt_count, first_attempt_at')
    .eq('phone_number', phone)
    .maybeSingle();

  const windowStart = data?.first_attempt_at ? new Date(data.first_attempt_at).getTime() : now.getTime();
  const withinWindow = now.getTime() - windowStart <= LOGIN_WINDOW_MS;
  const nextCount = withinWindow ? (data?.attempt_count || 0) + 1 : 1;

  const payload: Record<string, unknown> = {
    phone_number: phone,
    attempt_count: nextCount,
    first_attempt_at: withinWindow && data?.first_attempt_at ? data.first_attempt_at : now.toISOString(),
    locked_until: null,
  };

  if (nextCount >= MAX_LOGIN_ATTEMPTS) {
    payload.locked_until = new Date(now.getTime() + LOGIN_LOCK_MS).toISOString();
  }

  const { error } = await supabaseAdmin
    .from('login_attempts')
    .upsert(payload, { onConflict: 'phone_number' });

  if (error) console.error('recordFailedLogin failed:', error.message);
}

/** Clear the throttle after a successful login. */
export async function resetLoginThrottle(phone: string): Promise<void> {
  if (!isSupabaseConfigured || !phone) return;

  await supabaseAdmin.from('login_attempts').delete().eq('phone_number', phone);
}

/**
 * Resolve a bearer token to a full student row, or null.
 */
export async function getStudentFromRequest(req: NextRequest): Promise<Record<string, unknown> | null> {
  const token = getBearerToken(req);
  const studentId = await resolveSession(token);
  if (!studentId) return null;

  const { data, error } = await supabaseAdmin
    .from('students')
    .select('*')
    .eq('id', studentId)
    .maybeSingle();

  if (error || !data) return null;
  return data as Record<string, unknown>;
}
