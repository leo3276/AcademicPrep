'use client';

import { Student, EducationLevel, StudentTopicProgress, AccessPin } from './types';

/**
 * Browser-side API client.
 *
 * The web app no longer talks to Supabase directly. Every read and write goes
 * through the Next.js API routes, which authenticate the caller with a session
 * token (students) or an httpOnly cookie (administrators) before touching the
 * database with the service_role key.
 */

const TOKEN_STORAGE_KEY = 'academicprep_session_token';
const REQUEST_TIMEOUT_MS = 15000;

export const ALLOWED_LEVELS: EducationLevel[] = [
  'JHS 1',
  'JHS 2',
  'JHS 3',
  'SHS 1',
  'SHS 2',
  'SHS 3',
  'UNIVERSITY',
];

export interface ApiError {
  message: string;
  status: number;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: ApiError;
}

// ---------------------------------------------------------------------------
// Session token storage
// ---------------------------------------------------------------------------

export function getSessionToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setSessionToken(token: string | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (token) window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
    else window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {
    // Storage unavailable (private mode); the session simply will not persist.
  }
}

export function clearSessionToken(): void {
  setSessionToken(null);
}

export function hasSessionToken(): boolean {
  return Boolean(getSessionToken());
}

// ---------------------------------------------------------------------------
// Core request helper
// ---------------------------------------------------------------------------

async function request<T>(
  path: string,
  options: { method?: 'GET' | 'POST' | 'DELETE'; body?: unknown; auth?: boolean } = {}
): Promise<ApiResponse<T>> {
  const { method = 'GET', body, auth = false } = options;

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  if (auth) {
    const token = getSessionToken();
    if (!token) {
      return { ok: false, error: { message: 'Please sign in to continue.', status: 401 } };
    }
    headers.Authorization = `Bearer ${token}`;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(path, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    });

    const text = await response.text();
    let parsed: any = null;
    if (text) {
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = null;
      }
    }

    if (!response.ok) {
      const message =
        (parsed && (parsed.error || parsed.message)) ||
        (response.status === 401 ? 'Your session has expired. Please sign in again.' : 'Request failed.');

      // A rejected token means the stored session is dead; drop it so the UI
      // stops retrying with stale credentials.
      if (auth && response.status === 401) clearSessionToken();

      return { ok: false, error: { message, status: response.status } };
    }

    return { ok: true, data: parsed as T };
  } catch (err: any) {
    const timedOut = err?.name === 'AbortError';
    return {
      ok: false,
      error: {
        message: timedOut
          ? 'The request timed out. Please check your connection and try again.'
          : 'Could not reach the AcademicPrep servers. Please check your internet connection.',
        status: 0,
      },
    };
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Student mapping
// ---------------------------------------------------------------------------

const LEVEL_FALLBACK: EducationLevel = 'JHS 1';

/**
 * Map the API student payload onto the app's Student type, re-deriving access
 * state from the expiry timestamp so a cached response can never keep reporting
 * VIP after the paid period ends.
 */
export function mapStudent(raw: any): Student | null {
  if (!raw || typeof raw !== 'object' || !raw.phoneNumber) return null;

  const expiresAt = raw.accessExpiresAt || undefined;
  const isExpired = expiresAt ? new Date(expiresAt).getTime() <= Date.now() : false;
  const hasFullAccess = Boolean(raw.hasFullAccess) && !isExpired;

  return {
    id: String(raw.id || ''),
    phoneNumber: String(raw.phoneNumber),
    fullName: String(raw.fullName || 'Student'),
    currentLevel: (ALLOWED_LEVELS as string[]).includes(raw.currentLevel)
      ? (raw.currentLevel as EducationLevel)
      : LEVEL_FALLBACK,
    hasFullAccess,
    accessType: isExpired ? 'Expired' : raw.accessType || (hasFullAccess ? 'Full Pass' : 'Free Trial'),
    accessExpiresAt: expiresAt,
    completedTopicIds: Array.isArray(raw.completedTopicIds) ? raw.completedTopicIds : [],
    topicsCompletedCount: Number(raw.topicsCompletedCount) || 0,
    createdAt: raw.createdAt || new Date().toISOString(),
    lastActiveAt: raw.lastActiveAt || raw.createdAt || new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Student authentication
// ---------------------------------------------------------------------------

export interface AuthResult {
  success: boolean;
  student?: Student;
  error?: string;
  pinMessage?: string;
}

export async function registerStudent(params: {
  phoneNumber: string;
  fullName: string;
  currentLevel: EducationLevel;
  password: string;
  accessPinCode?: string;
}): Promise<AuthResult> {
  const res = await request<any>('/api/auth/register', { method: 'POST', body: params });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || res.data?.error || 'Registration failed.' };
  }

  if (res.data.token) setSessionToken(res.data.token);

  const student = mapStudent(res.data.student);
  return { success: true, student: student || undefined, pinMessage: res.data.pinMessage };
}

export async function loginStudent(phoneNumber: string, password: string): Promise<AuthResult> {
  const res = await request<any>('/api/auth/login', { method: 'POST', body: { phoneNumber, password } });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || res.data?.error || 'Sign-in failed.' };
  }

  if (res.data.token) setSessionToken(res.data.token);

  const student = mapStudent(res.data.student);
  return { success: true, student: student || undefined };
}

/** Authoritative account state for the current session, or null when signed out. */
export async function fetchCurrentStudent(): Promise<Student | null> {
  if (!hasSessionToken()) return null;

  const res = await request<any>('/api/auth/me', { auth: true });
  if (!res.ok || !res.data?.success) return null;

  return mapStudent(res.data.student);
}

export async function logoutStudent(): Promise<void> {
  if (hasSessionToken()) {
    await request('/api/auth/logout', { method: 'POST', auth: true });
  }
  clearSessionToken();
}

export async function updateStudentLevel(level: EducationLevel): Promise<{ success: boolean; student?: Student }> {
  const res = await request<any>('/api/auth/level', { method: 'POST', body: { level }, auth: true });

  if (!res.ok || !res.data?.success) return { success: false };

  const student = mapStudent(res.data.student);
  return { success: true, student: student || undefined };
}

export async function changeStudentPin(
  currentPin: string,
  newPin: string
): Promise<{ success: boolean; error?: string }> {
  const res = await request<any>('/api/auth/change-pin', {
    method: 'POST',
    body: { currentPin, newPin },
    auth: true,
  });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || res.data?.error || 'Could not update your password.' };
  }

  // The server revokes all previous sessions, so adopt the replacement token.
  if (res.data.token) setSessionToken(res.data.token);

  return { success: true };
}

export interface RedeemPinResult {
  success: boolean;
  message: string;
  validityDays?: number;
  student?: Student;
}

/** Redeem a scratch-card voucher onto the signed-in account. */
export async function redeemAccessPin(pinCode: string): Promise<RedeemPinResult> {
  const res = await request<any>('/api/auth/redeem-pin', { method: 'POST', body: { pinCode }, auth: true });

  const message = res.data?.message || res.error?.message || 'Could not redeem this PIN.';

  if (!res.ok || !res.data?.success) {
    return { success: false, message };
  }

  const student = mapStudent(res.data.student);
  return { success: true, message, validityDays: res.data.validityDays, student: student || undefined };
}

// ---------------------------------------------------------------------------
// Student data sync
// ---------------------------------------------------------------------------

export async function fetchStudentProgress(): Promise<Record<string, StudentTopicProgress>> {
  if (!hasSessionToken()) return {};

  const res = await request<any>('/api/progress', { auth: true });
  if (!res.ok || !res.data?.success) return {};

  return (res.data.progress || {}) as Record<string, StudentTopicProgress>;
}

export async function saveTopicProgress(params: {
  topicId: string;
  scorePercentage: number;
}): Promise<void> {
  if (!hasSessionToken()) return;
  await request('/api/progress', { method: 'POST', body: params, auth: true });
}

/**
 * Sync a completed topic and optional profile changes to the account.
 * Entitlement fields are not accepted by the server: access is only ever granted
 * by a verified payment or voucher redemption.
 */
export async function syncStudentAccount(payload: {
  fullName?: string;
  level?: EducationLevel;
  topicIdCompleted?: string;
  newQuizScore?: number;
}): Promise<Student | null> {
  if (!hasSessionToken()) return null;

  const res = await request<any>('/api/students', { method: 'POST', body: payload, auth: true });
  if (!res.ok || !res.data?.success) return null;

  return mapStudent(res.data.student);
}

export async function fetchWeeklyExams(): Promise<any[]> {
  if (!hasSessionToken()) return [];

  const res = await request<any>('/api/exams', { auth: true });
  if (!res.ok || !res.data?.success) return [];

  return Array.isArray(res.data.exams) ? res.data.exams : [];
}

export async function saveWeeklyExam(attempt: object): Promise<void> {
  if (!hasSessionToken()) return;
  await request('/api/exams', { method: 'POST', body: attempt, auth: true });
}

export async function fetchStudentMistakes(): Promise<any[]> {
  if (!hasSessionToken()) return [];

  const res = await request<any>('/api/mistakes', { auth: true });
  if (!res.ok || !res.data?.success) return [];

  return Array.isArray(res.data.mistakes) ? res.data.mistakes : [];
}

export async function saveStudentMistake(mistake: {
  topicId: string;
  subjectName: string;
  subConcept: string;
  questionText: string;
  studentWrongAnswer: string;
  correctAnswer: string;
}): Promise<void> {
  if (!hasSessionToken()) return;
  await request('/api/mistakes', { method: 'POST', body: mistake, auth: true });
}

// ---------------------------------------------------------------------------
// Administrator
// ---------------------------------------------------------------------------

export async function adminLogin(primaryPin: string, secondaryPin: string): Promise<{ success: boolean; error?: string }> {
  const res = await request<any>('/api/admin/login', { method: 'POST', body: { primaryPin, secondaryPin } });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || 'Incorrect administrator PINs.' };
  }

  return { success: true };
}

export async function adminLogout(): Promise<void> {
  await request('/api/admin/logout', { method: 'POST' });
}

export async function fetchAdminSession(): Promise<boolean> {
  const res = await request<{ isAdmin?: boolean }>('/api/admin/session');
  return Boolean(res.ok && res.data?.isAdmin);
}

export async function fetchAdminPinStatus(): Promise<{ primarySet: boolean; secondarySet: boolean }> {
  const res = await request<any>('/api/admin/pins', { auth: false });
  if (!res.ok || !res.data?.success) return { primarySet: false, secondarySet: false };
  return { primarySet: Boolean(res.data.primarySet), secondarySet: Boolean(res.data.secondarySet) };
}

export async function updateAdminPins(params: {
  currentPrimary: string;
  currentSecondary: string;
  newPrimary?: string;
  newSecondary?: string;
}): Promise<{ success: boolean; error?: string }> {
  const res = await request<any>('/api/admin/pins', { method: 'POST', body: params });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || 'Could not update the administrator PINs.' };
  }

  return { success: true };
}

/** Voucher list. Administrator only - the server rejects anonymous callers. */
export async function fetchAccessPins(): Promise<AccessPin[]> {
  const res = await request<any>('/api/pins');
  if (!res.ok || !res.data?.success) return [];

  return (res.data.pins || []).map((row: any) => ({
    id: String(row.id ?? row.pinCode),
    pinCode: row.pinCode,
    batchId: row.batchId,
    priceGhs: Number(row.priceGhs) || 0,
    validityDays: Number(row.validityDays) || 30,
    status: row.status,
    redeemedByStudentId: row.redeemedByStudentPhone || undefined,
    redeemedAt: row.redeemedAt || undefined,
    createdAt: row.createdAt,
  })) as AccessPin[];
}

/**
 * Generate a voucher batch. Codes are produced by the server's CSPRNG and
 * returned once; the browser never invents codes any more.
 */
export async function generatePinBatch(params: {
  count: number;
  priceGhs: number;
  validityDays: number;
}): Promise<{ success: boolean; pins: AccessPin[]; batchId?: string; error?: string }> {
  const res = await request<any>('/api/pins', { method: 'POST', body: { action: 'generate', ...params } });

  if (!res.ok || !res.data?.success) {
    return { success: false, pins: [], error: res.error?.message || 'Could not generate the PIN batch.' };
  }

  const pins = (res.data.pins || []).map((row: any) => ({
    id: `${res.data.batchId}-${row.pinCode}`,
    pinCode: row.pinCode,
    batchId: row.batchId || res.data.batchId,
    priceGhs: Number(row.priceGhs) || params.priceGhs,
    validityDays: Number(row.validityDays) || params.validityDays,
    status: 'ACTIVE' as const,
    createdAt: new Date().toISOString(),
  })) as AccessPin[];

  return { success: true, pins, batchId: res.data.batchId };
}

/** A single row of the public leaderboard. Contains no phone number or id. */
export interface LeaderboardEntry {
  name: string;
  level: string;
  phoneMasked: string;
  topicsCompleted: number;
  avgScorePercentage: number;
  rank: number;
  isCurrentUser: boolean;
}

/**
 * Student roster. Returns the masked public leaderboard for anonymous callers
 * and the full roster when the admin cookie is present.
 */
export async function fetchStudents(): Promise<{ view: 'admin' | 'public'; students: any[] }> {
  // The session token is optional here: it only marks the caller's own row on
  // the public leaderboard. The admin cookie travels automatically.
  const res = await request<any>('/api/students', { auth: hasSessionToken() });
  if (!res.ok || !res.data?.success) return { view: 'public', students: [] };

  return {
    view: res.data.view === 'admin' ? 'admin' : 'public',
    students: Array.isArray(res.data.students) ? res.data.students : [],
  };
}

/** Masked leaderboard rows for the signed-out / student-facing views. */
export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const { view, students } = await fetchStudents();
  if (view !== 'public') return [];

  return students.map((row: any, index: number) => ({
    name: String(row.name || 'Student'),
    level: String(row.level || 'JHS 1'),
    phoneMasked: String(row.phoneMasked || '***'),
    topicsCompleted: Number(row.topicsCompleted) || 0,
    avgScorePercentage: Number(row.avgScorePercentage) || 0,
    rank: Number(row.rank) || index + 1,
    isCurrentUser: Boolean(row.isCurrentUser),
  }));
}

/** Grant a paid pass from the admin console. Administrator only. */
export async function adminGrantAccess(
  phone: string,
  days: number
): Promise<{ success: boolean; error?: string }> {
  const res = await request<any>('/api/admin/access', { method: 'POST', body: { phone, days } });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || 'Could not grant access.' };
  }

  return { success: true };
}

/** Revoke a paid pass from the admin console. Administrator only. */
export async function adminRevokeAccess(phone: string): Promise<{ success: boolean; error?: string }> {
  const res = await request<any>('/api/admin/access', { method: 'POST', body: { phone, revoke: true } });

  if (!res.ok || !res.data?.success) {
    return { success: false, error: res.error?.message || 'Could not revoke access.' };
  }

  return { success: true };
}
