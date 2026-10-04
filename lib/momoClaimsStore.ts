import fs from 'fs';
import path from 'path';
import { supabaseAdmin } from './supabaseClient';
import { adminGrantAccess, adminRevokeAccess, findStudentByPhone } from './dbService';
import { normalizePhone } from './serverAuth';

import { OFFICIAL_MOMO_DETAILS, MomoClaim } from './momoConfig';
export { OFFICIAL_MOMO_DETAILS };
export type { MomoClaim };

const DATA_FILE = path.join(process.cwd(), 'data', 'momo_claims.json');
const MANIFEST_FILE_NAME = 'momo_claims_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

export async function getStoredMomoClaims(): Promise<MomoClaim[]> {
  // 1. Primary: Download from Supabase Storage
  try {
    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .download(MANIFEST_FILE_NAME);

    if (!error && data) {
      const text = await data.text();
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Supabase storage momo claims download note:', err);
  }

  // 2. Secondary: Read from local data/momo_claims.json
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Local momo_claims.json read note:', err);
  }

  return [];
}

export async function saveStoredMomoClaims(claims: MomoClaim[]): Promise<void> {
  // 1. Primary: Save to Supabase Storage
  try {
    const { error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(MANIFEST_FILE_NAME, JSON.stringify(claims, null, 2), {
        upsert: true,
        contentType: 'application/json',
        cacheControl: '0',
      });
    if (error) {
      console.warn('Failed to upload momo claims to Supabase storage:', error.message);
    }
  } catch (err: any) {
    console.warn('Failed to upload momo claims to Supabase storage:', err?.message || err);
  }

  // 2. Secondary: Save to local disk
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(claims, null, 2), 'utf8');
  } catch {
    // Expected on serverless
  }
}

export async function createMomoClaim(input: {
  studentPhone: string;
  studentName?: string;
  senderPhone?: string;
  transactionId?: string;
  amountGhs?: number;
}): Promise<{ success: boolean; claim?: MomoClaim; error?: string }> {
  const cleanPhone = normalizePhone(input.studentPhone);
  const cleanSenderPhone = input.senderPhone ? normalizePhone(input.senderPhone) : cleanPhone;

  if (!cleanPhone || cleanPhone.length < 10) {
    return { success: false, error: 'Please enter a valid phone number (e.g. 0241234567).' };
  }

  // Check if student account exists in DB
  const student = await findStudentByPhone(cleanPhone);
  if (!student) {
    return {
      success: false,
      error: 'No registered student account was found with this phone number. Please register or sign in on the app first so your VIP pass can be attached.',
    };
  }

  // 1. Immediately grant 30-day VIP pass in database!
  const grantResult = await adminGrantAccess(cleanPhone, OFFICIAL_MOMO_DETAILS.validityDays);
  if (!grantResult.success) {
    return {
      success: false,
      error: grantResult.error || 'Failed to activate VIP pass in database.',
    };
  }

  const existingClaims = await getStoredMomoClaims();
  const txRef = (input.transactionId || '').trim() || `MOMO-${cleanPhone.slice(-4)}-${Date.now().toString().slice(-4)}`;

  let resolvedName = (input.studentName || '').trim();
  if (!resolvedName) {
    if (student?.full_name) {
      resolvedName = student.full_name;
    } else {
      resolvedName = `Student ${cleanPhone.slice(-4)}`;
    }
  }

  const newClaim: MomoClaim = {
    id: `momo-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    studentPhone: cleanPhone,
    senderPhone: cleanSenderPhone,
    studentName: resolvedName,
    transactionId: txRef,
    amountGhs: input.amountGhs || OFFICIAL_MOMO_DETAILS.amountGhs,
    status: 'PENDING', // PENDING = Instant VIP Active, awaiting MoMo audit
    instantGranted: true,
    recipientNumber: OFFICIAL_MOMO_DETAILS.number,
    recipientName: OFFICIAL_MOMO_DETAILS.name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const updatedClaims = [newClaim, ...existingClaims];
  await saveStoredMomoClaims(updatedClaims);

  return { success: true, claim: newClaim };
}

export async function approveMomoClaim(claimId: string): Promise<{ success: boolean; claim?: MomoClaim; error?: string }> {
  const claims = await getStoredMomoClaims();
  const index = claims.findIndex((c) => c.id === claimId);

  if (index === -1) {
    return { success: false, error: 'Payment claim not found.' };
  }

  const claim = claims[index];

  // Ensure 30-day VIP access is active for student
  await adminGrantAccess(claim.studentPhone, OFFICIAL_MOMO_DETAILS.validityDays);

  const approvedClaim: MomoClaim = {
    ...claim,
    status: 'APPROVED',
    approvedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  claims[index] = approvedClaim;
  await saveStoredMomoClaims(claims);

  return { success: true, claim: approvedClaim };
}

export async function rejectMomoClaim(
  claimId: string,
  reason = 'Payment could not be verified on MTN MoMo'
): Promise<{ success: boolean; claim?: MomoClaim; error?: string }> {
  const claims = await getStoredMomoClaims();
  const index = claims.findIndex((c) => c.id === claimId);

  if (index === -1) {
    return { success: false, error: 'Payment claim not found.' };
  }

  const claim = claims[index];

  // REVOKE student VIP pass in database immediately
  const revokeResult = await adminRevokeAccess(claim.studentPhone);
  if (!revokeResult.success) {
    console.warn(`[momoClaimsStore] adminRevokeAccess note for ${claim.studentPhone}:`, revokeResult.error);
  }

  const rejectedClaim: MomoClaim = {
    ...claim,
    status: 'REJECTED',
    rejectionReason: reason,
    revokedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  claims[index] = rejectedClaim;
  await saveStoredMomoClaims(claims);

  return { success: true, claim: rejectedClaim };
}
