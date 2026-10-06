'use client';

export const THETELLER_VIP_PRICE_GHS = 25;
export const THETELLER_VIP_AMOUNT_PESEWAS = 2500; // GH₵ 25.00 in pesewas

export type GhanaNetwork = 'MTN' | 'VDF' | 'ATL' | 'UNKNOWN';

export interface NetworkInfo {
  network: GhanaNetwork;
  name: string;
  color: string;
  bgLight: string;
}

/**
 * Detect Ghana telco provider based on standard phone prefixes
 */
export function detectGhanaNetwork(phone: string): NetworkInfo {
  const clean = phone.replace(/\D/g, '');
  // normalize to local format e.g. 024... or 23324...
  let localPrefix = '';
  if (clean.startsWith('233') && clean.length >= 5) {
    localPrefix = '0' + clean.substring(3, 5);
  } else if (clean.startsWith('0') && clean.length >= 3) {
    localPrefix = clean.substring(0, 3);
  }

  // MTN prefixes: 024, 054, 055, 059, 053, 025
  if (['024', '054', '055', '059', '053', '025'].includes(localPrefix)) {
    return {
      network: 'MTN',
      name: 'MTN MoMo',
      color: '#EAB308',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
    };
  }

  // Telecel (formerly Vodafone) prefixes: 020, 050
  if (['020', '050'].includes(localPrefix)) {
    return {
      network: 'VDF',
      name: 'Telecel Cash',
      color: '#EF4444',
      bgLight: 'bg-red-50 text-red-900 border-red-200',
    };
  }

  // AT (AirtelTigo) prefixes: 027, 057, 026, 056
  if (['027', '057', '026', '056'].includes(localPrefix)) {
    return {
      network: 'ATL',
      name: 'AT Money',
      color: '#2563EB',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
    };
  }

  return {
    network: 'UNKNOWN',
    name: 'Mobile Money',
    color: '#64748B',
    bgLight: 'bg-slate-50 text-slate-800 border-slate-200',
  };
}

export interface InitiatePaymentParams {
  phoneNumber: string;
  fullName?: string;
  email?: string;
}

export interface InitiatePaymentResult {
  success: boolean;
  transactionId?: string;
  message?: string;
  promptSent?: boolean;
}

/**
 * Initiate instant USSD PIN Push via theteller backend
 */
export async function initiateThetellerPayment(
  params: InitiatePaymentParams
): Promise<InitiatePaymentResult> {
  const cleanPhone = (params.phoneNumber || '').trim().replace(/\s+/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    return { success: false, message: 'Please enter a valid 10-digit Ghanaian mobile number.' };
  }

  try {
    const res = await fetch('/api/theteller/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: cleanPhone,
        fullName: params.fullName || 'AcademicPrep Student',
        email: params.email,
      }),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    console.error('theteller charge initiation error:', err);
    return {
      success: false,
      message: 'Failed to contact payment gateway. Please check your internet connection.',
    };
  }
}

/**
 * Poll transaction status on backend until approved, failed, or timed out
 */
export async function checkThetellerStatus(
  transactionId: string,
  phoneNumber: string
): Promise<{ success: boolean; status: 'approved' | 'pending' | 'failed'; message?: string }> {
  try {
    const res = await fetch(
      `/api/theteller/status?transaction_id=${encodeURIComponent(
        transactionId
      )}&phone=${encodeURIComponent(phoneNumber)}`,
      {
        method: 'GET',
        headers: { 'Cache-Control': 'no-cache' },
      }
    );

    const data = await res.json();
    return data;
  } catch (err: any) {
    console.warn('theteller check status error:', err);
    return { success: false, status: 'pending', message: 'Checking status...' };
  }
}
