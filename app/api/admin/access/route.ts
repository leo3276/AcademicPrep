import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, adminUnauthorized } from '@/lib/adminAuth';
import { adminGrantAccess, adminRevokeAccess } from '@/lib/dbService';
import { normalizePhone, isValidGhanaPhone } from '@/lib/serverAuth';

const MIN_DAYS = 1;
const MAX_DAYS = 365;

/**
 * Administrator-only access management.
 *
 * Students can never reach this route: entitlement changes used to be accepted
 * by POST /api/students, which meant any browser could promote itself to a paid
 * account by sending accessType: 'Full Pass'.
 */
export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return adminUnauthorized();
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const phone = normalizePhone(String(body?.phone || ''));
  if (!isValidGhanaPhone(phone)) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid Ghanaian phone number.' },
      { status: 400 }
    );
  }

  if (body?.revoke === true) {
    const result = await adminRevokeAccess(phone);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || 'Could not revoke access.' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, student: result.student });
  }

  const days = Number(body?.days);
  if (!Number.isInteger(days) || days < MIN_DAYS || days > MAX_DAYS) {
    return NextResponse.json(
      { success: false, error: `Access term must be a whole number between ${MIN_DAYS} and ${MAX_DAYS} days.` },
      { status: 400 }
    );
  }

  const result = await adminGrantAccess(phone, days);
  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error || 'Could not grant access.' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, student: result.student });
}
