import fs from 'fs';
import path from 'path';
import { supabaseAdmin } from './supabaseClient';
import { adminGrantAccess, adminRevokeAccess, findStudentByPhone } from './dbService';
import { normalizePhone } from './serverAuth';
import { uploadToR2, isR2Configured, R2_PUBLIC_URL } from './r2Client';
import {
  OFFICIAL_MOMO_DETAILS,
  PRICING_PLANS,
  resolvePlanByAmount,
  validateMomoTransactionId,
  MomoClaim,
} from './momoConfig';

export { OFFICIAL_MOMO_DETAILS, PRICING_PLANS, resolvePlanByAmount, validateMomoTransactionId };
export type { MomoClaim };

const DATA_FILE = path.join(process.cwd(), 'data', 'momo_claims.json');
const MANIFEST_FILE_NAME = 'momo_claims_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

function filterValidClaims(raw: unknown): MomoClaim[] {
  if (!Array.isArray(raw)) return [];
  // Filter out legacy GH₵ 25 claims from before the 3-tier pricing scheme
  return (raw as MomoClaim[]).filter(
    (c) => Boolean(c && c.planId && Number(c.amountGhs) !== 25)
  );
}

export async function getStoredMomoClaims(): Promise<MomoClaim[]> {
  // 1. Primary: Fetch from Cloudflare R2
  if (isR2Configured || R2_PUBLIC_URL) {
    try {
      const res = await fetch(`${R2_PUBLIC_URL}/${MANIFEST_FILE_NAME}?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) {
          const valid = filterValidClaims(parsed);
          if (valid.length !== parsed.length) {
            await saveStoredMomoClaims(valid);
          }
          return valid;
        }
      }
    } catch (err) {
      console.warn('Cloudflare R2 momo claims fetch note:', err);
    }
  }

  // 2. Secondary: Download from Supabase Storage
  try {
    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .download(MANIFEST_FILE_NAME);

    if (!error && data) {
      const text = await data.text();
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        const valid = filterValidClaims(parsed);
        if (valid.length !== parsed.length) {
          await saveStoredMomoClaims(valid);
        }
        return valid;
      }
    }
  } catch (err) {
    console.warn('Supabase storage momo claims download note:', err);
  }

  // 3. Fallback: Read from local data/momo_claims.json
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return filterValidClaims(parsed);
      }
    }
  } catch (err) {
    console.warn('Local momo_claims.json read note:', err);
  }

  return [];
}

export async function clearAllMomoClaims(): Promise<void> {
  await saveStoredMomoClaims([]);
}

export async function saveStoredMomoClaims(claims: MomoClaim[]): Promise<void> {
  const payload = JSON.stringify(claims, null, 2);

  // 1. Primary: Save to Cloudflare R2
  if (isR2Configured) {
    try {
      await uploadToR2(MANIFEST_FILE_NAME, Buffer.from(payload), 'application/json', '0');
    } catch (err: any) {
      console.warn('Failed to upload momo claims to Cloudflare R2:', err?.message || err);
    }
  }

  // 2. Secondary: Save to Supabase Storage
  try {
    const { error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(MANIFEST_FILE_NAME, payload, {
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

  // 3. Tertiary: Save to local disk
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, payload, 'utf8');
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
    return { success: false, error: 'Please enter your valid 10-digit account phone number (e.g. 0241234567).' };
  }

  if (!cleanSenderPhone || !/^0[235]\d{8}$/.test(cleanSenderPhone)) {
    return {
      success: false,
      error: 'Please enter the 10-digit Mobile Money number used to send the payment (e.g. 0241234567).',
    };
  }

  // Check if student account exists in DB
  const student = await findStudentByPhone(cleanPhone);
  if (!student) {
    return {
      success: false,
      error:
        'No registered student account was found with this phone number. Please register or sign in first so your pass can be attached.',
    };
  }

  const existingClaims = await getStoredMomoClaims();
  const plan = resolvePlanByAmount(input.amountGhs);

  // If student already has a pending claim for the same sender phone and plan, update & return it instead of duplicating
  const existingPendingIndex = existingClaims.findIndex(
    (c) =>
      c.studentPhone === cleanPhone &&
      c.status === 'PENDING' &&
      c.planId === plan.id
  );

  let resolvedName = (input.studentName || '').trim();
  if (!resolvedName) {
    resolvedName = student?.full_name || `Student ${cleanPhone.slice(-4)}`;
  }

  const txRef = (input.transactionId || '').trim() || `MOMO-${cleanSenderPhone}`;

  if (existingPendingIndex !== -1) {
    const updatedPending: MomoClaim = {
      ...existingClaims[existingPendingIndex],
      senderPhone: cleanSenderPhone,
      studentName: resolvedName,
      transactionId: txRef,
      amountGhs: plan.amountGhs,
      planId: plan.id,
      planLabel: plan.label,
      validityDays: plan.validityDays,
      updatedAt: new Date().toISOString(),
    };
    existingClaims[existingPendingIndex] = updatedPending;
    await saveStoredMomoClaims(existingClaims);
    return { success: true, claim: updatedPending };
  }

  const newClaim: MomoClaim = {
    id: `momo-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    studentPhone: cleanPhone,
    senderPhone: cleanSenderPhone,
    studentName: resolvedName,
    transactionId: txRef,
    planId: plan.id,
    planLabel: plan.label,
    validityDays: plan.validityDays,
    amountGhs: plan.amountGhs,
    status: 'PENDING', // Held until Admin confirms payment in Admin Panel (0% fake unlocks)
    instantGranted: false,
    recipientNumber: OFFICIAL_MOMO_DETAILS.number,
    recipientName: OFFICIAL_MOMO_DETAILS.name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const updatedClaims = [newClaim, ...existingClaims];
  await saveStoredMomoClaims(updatedClaims);

  return { success: true, claim: newClaim };
}

export async function approveMomoClaim(
  claimId: string
): Promise<{ success: boolean; claim?: MomoClaim; error?: string }> {
  const claims = await getStoredMomoClaims();
  const index = claims.findIndex((c) => c.id === claimId);

  if (index === -1) {
    return { success: false, error: 'Payment claim not found.' };
  }

  const claim = claims[index];
  const plan = resolvePlanByAmount(claim.amountGhs);

  // Grant student pass in database upon Admin confirmation
  const grantResult = await adminGrantAccess(claim.studentPhone, claim.validityDays || plan.validityDays);
  if (!grantResult.success) {
    return {
      success: false,
      error: grantResult.error || 'Failed to activate student pass in database.',
    };
  }

  const approvedClaim: MomoClaim = {
    ...claim,
    status: 'APPROVED',
    instantGranted: true,
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
