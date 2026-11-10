import fs from 'fs';
import path from 'path';
import { supabaseAdmin, isSupabaseConfigured } from './supabaseClient';
import { grantPaidAccess } from './dbService';
import { recordVerifiedPaystackPayment, resolvePlanById } from './momoClaimsStore';
import { uploadToR2, isR2Configured, R2_PUBLIC_URL } from './r2Client';

export type ClientMomoNetwork = 'mtn' | 'vod' | 'atl';
export type PaystackMomoProvider = 'mtn' | 'vod' | 'tgo';
export type PaymentStatus = 'pending' | 'success' | 'failed' | 'expired';

export interface PaymentRecord {
  id: string;
  reference: string;
  userId: string;
  studentPhone: string;
  studentName: string;
  planId: 'monthly' | 'term' | 'annual';
  amountPesewas: number;
  currency: 'GHS';
  network: ClientMomoNetwork;
  momoPhone: string;
  status: PaymentStatus;
  failureReason?: string | null;
  createdAt: string;
  updatedAt: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'payments.json');
const MANIFEST_FILE = 'payments_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

/**
 * Map client network code ('mtn' | 'vod' | 'atl') to Paystack's Ghana MoMo provider code.
 * Paystack uses 'mtn' (MTN), 'vod' (Telecel / formerly Vodafone), and 'tgo' (AirtelTigo).
 */
export function toPaystackProvider(network: string): PaystackMomoProvider | null {
  const clean = String(network || '').trim().toLowerCase();
  if (clean === 'mtn') return 'mtn';
  if (clean === 'vod' || clean === 'telecel') return 'vod';
  if (clean === 'atl' || clean === 'tgo' || clean === 'airteltigo') return 'tgo';
  return null;
}

export function normalizeClientNetwork(network: string): ClientMomoNetwork | null {
  const clean = String(network || '').trim().toLowerCase();
  if (clean === 'mtn') return 'mtn';
  if (clean === 'vod' || clean === 'telecel') return 'vod';
  if (clean === 'atl' || clean === 'tgo' || clean === 'airteltigo') return 'atl';
  return null;
}

async function readManifestPayments(): Promise<PaymentRecord[]> {
  if (isR2Configured || R2_PUBLIC_URL) {
    try {
      const res = await fetch(`${R2_PUBLIC_URL}/${MANIFEST_FILE}?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Fallback below
    }
  }

  try {
    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .download(MANIFEST_FILE);
    if (!error && data) {
      const parsed = JSON.parse(await data.text());
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Fallback below
  }

  try {
    if (fs.existsSync(DATA_FILE)) {
      const parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Ignore
  }

  return [];
}

async function writeManifestPayments(records: PaymentRecord[]): Promise<void> {
  const payload = JSON.stringify(records.slice(0, 500), null, 2);

  if (isR2Configured) {
    try {
      await uploadToR2(MANIFEST_FILE, Buffer.from(payload), 'application/json', '0');
    } catch {
      // Ignore
    }
  }

  try {
    await supabaseAdmin.storage.from(DOCUMENTS_BUCKET).upload(MANIFEST_FILE, payload, {
      upsert: true,
      contentType: 'application/json',
      cacheControl: '0',
    });
  } catch {
    // Ignore
  }

  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, payload, 'utf-8');
  } catch {
    // Read-only serverless fs
  }
}

function rowToRecord(row: Record<string, any>): PaymentRecord {
  return {
    id: String(row.id),
    reference: String(row.reference),
    userId: String(row.user_id),
    studentPhone: String(row.student_phone),
    studentName: String(row.student_name || 'Student'),
    planId: (row.plan_id as 'monthly' | 'term' | 'annual') || 'monthly',
    amountPesewas: Number(row.amount_pesewas),
    currency: 'GHS',
    network: (normalizeClientNetwork(row.network) || 'mtn'),
    momoPhone: String(row.momo_phone),
    status: (row.status as PaymentStatus) || 'pending',
    failureReason: row.failure_reason || null,
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

export async function createPendingPayment(params: {
  reference: string;
  userId: string;
  studentPhone: string;
  studentName: string;
  planId: 'monthly' | 'term' | 'annual';
  amountPesewas: number;
  network: ClientMomoNetwork;
  momoPhone: string;
}): Promise<PaymentRecord> {
  const now = new Date().toISOString();
  const record: PaymentRecord = {
    id: `pay-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    reference: params.reference,
    userId: params.userId,
    studentPhone: params.studentPhone,
    studentName: params.studentName,
    planId: params.planId,
    amountPesewas: params.amountPesewas,
    currency: 'GHS',
    network: params.network,
    momoPhone: params.momoPhone,
    status: 'pending',
    failureReason: null,
    createdAt: now,
    updatedAt: now,
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabaseAdmin
        .from('payments')
        .insert({
          reference: params.reference,
          user_id: params.userId,
          student_phone: params.studentPhone,
          plan_id: params.planId,
          amount_pesewas: params.amountPesewas,
          currency: 'GHS',
          network: params.network,
          momo_phone: params.momoPhone,
          status: 'pending',
          created_at: now,
          updated_at: now,
        })
        .select('*')
        .maybeSingle();

      if (!error && data) {
        record.id = String(data.id);
      }
    } catch {
      // Fallback manifest handles persistence if migration hasn't been applied yet
    }
  }

  const all = await readManifestPayments();
  const filtered = all.filter((p) => p.reference !== params.reference);
  filtered.unshift(record);
  await writeManifestPayments(filtered);

  return record;
}

export async function getPaymentByReference(reference: string): Promise<PaymentRecord | null> {
  if (!reference) return null;

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabaseAdmin
        .from('payments')
        .select('*')
        .eq('reference', reference)
        .maybeSingle();

      if (!error && data) {
        return rowToRecord(data);
      }
    } catch {
      // Fallback to manifest
    }
  }

  const all = await readManifestPayments();
  return all.find((p) => p.reference === reference) || null;
}

export async function markPaymentSuccess(params: {
  reference: string;
  studentPhone?: string;
  studentName?: string;
  planId?: 'monthly' | 'term' | 'annual';
  amountPesewas?: number;
  source: 'webhook' | 'verify';
}): Promise<{ granted: boolean; alreadyProcessed: boolean; payment: PaymentRecord | null }> {
  const existing = await getPaymentByReference(params.reference);
  if (existing && existing.status === 'success') {
    return { granted: false, alreadyProcessed: true, payment: existing };
  }

  const now = new Date().toISOString();
  const resolvedPlanId =
    existing?.planId ||
    params.planId ||
    (params.amountPesewas && params.amountPesewas >= 18000
      ? 'annual'
      : params.amountPesewas && params.amountPesewas >= 6000
      ? 'term'
      : 'monthly');
  const plan = resolvePlanById(resolvedPlanId);
  const resolvedPhone = existing?.studentPhone || params.studentPhone || '';
  const resolvedName = existing?.studentName || params.studentName || 'Student';
  const resolvedAmountPesewas = existing?.amountPesewas || params.amountPesewas || plan.amountGhs * 100;

  if (isSupabaseConfigured) {
    try {
      await supabaseAdmin
        .from('payments')
        .update({ status: 'success', failure_reason: null, updated_at: now })
        .eq('reference', params.reference)
        .neq('status', 'success');
    } catch {
      // Ignore if table not created yet
    }
  }

  const all = await readManifestPayments();
  const idx = all.findIndex((p) => p.reference === params.reference);
  let updatedRecord: PaymentRecord | null = existing;

  if (idx !== -1) {
    if (all[idx].status === 'success') {
      return { granted: false, alreadyProcessed: true, payment: all[idx] };
    }
    all[idx] = {
      ...all[idx],
      status: 'success',
      failureReason: null,
      updatedAt: now,
    };
    updatedRecord = all[idx];
    await writeManifestPayments(all);
  }

  if (resolvedPhone) {
    await grantPaidAccess({
      reference: params.reference,
      phone: resolvedPhone,
      amountPesewas: resolvedAmountPesewas,
      channel: 'MOBILE_MONEY',
      source: params.source,
      validityDays: plan.validityDays,
    }).catch(() => null);

    const claimRes = await recordVerifiedPaystackPayment({
      reference: params.reference,
      studentPhone: resolvedPhone,
      studentName: resolvedName,
      amountGhs: plan.amountGhs,
      planId: plan.id,
      validityDays: plan.validityDays,
    });

    if (claimRes.alreadyProcessed) {
      return { granted: false, alreadyProcessed: true, payment: updatedRecord };
    }
  }

  return { granted: true, alreadyProcessed: false, payment: updatedRecord };
}

export async function markPaymentFailed(
  reference: string,
  reason = 'Payment was declined or cancelled.'
): Promise<PaymentRecord | null> {
  const existing = await getPaymentByReference(reference);
  if (existing && existing.status === 'success') {
    return existing;
  }

  const now = new Date().toISOString();
  if (isSupabaseConfigured) {
    try {
      await supabaseAdmin
        .from('payments')
        .update({ status: 'failed', failure_reason: reason, updated_at: now })
        .eq('reference', reference)
        .neq('status', 'success');
    } catch {
      // Ignore
    }
  }

  const all = await readManifestPayments();
  const idx = all.findIndex((p) => p.reference === reference);
  if (idx !== -1 && all[idx].status !== 'success') {
    all[idx] = { ...all[idx], status: 'failed', failureReason: reason, updatedAt: now };
    await writeManifestPayments(all);
    return all[idx];
  }

  return existing ? { ...existing, status: 'failed', failureReason: reason, updatedAt: now } : null;
}

export async function markPaymentExpired(
  reference: string,
  reason = 'Payment prompt timed out before PIN approval.'
): Promise<PaymentRecord | null> {
  const existing = await getPaymentByReference(reference);
  if (existing && existing.status === 'success') {
    return existing;
  }

  const now = new Date().toISOString();
  if (isSupabaseConfigured) {
    try {
      await supabaseAdmin
        .from('payments')
        .update({ status: 'expired', failure_reason: reason, updated_at: now })
        .eq('reference', reference)
        .eq('status', 'pending');
    } catch {
      // Ignore
    }
  }

  const all = await readManifestPayments();
  const idx = all.findIndex((p) => p.reference === reference);
  if (idx !== -1 && all[idx].status === 'pending') {
    all[idx] = { ...all[idx], status: 'expired', failureReason: reason, updatedAt: now };
    await writeManifestPayments(all);
    return all[idx];
  }

  return existing ? { ...existing, status: 'expired', failureReason: reason, updatedAt: now } : null;
}
