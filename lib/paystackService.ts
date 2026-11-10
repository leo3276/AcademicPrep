'use client';

import { getPaystackPublicKey } from './paystackKeys';
import { resolvePlanById } from './momoConfig';

export const PAYSTACK_VIP_PRICE_GHS = 30;
export const PAYSTACK_VIP_AMOUNT_PESEWAS = 3000;
export const PAYSTACK_PUBLIC_KEY = getPaystackPublicKey();
export const isPaystackClientConfigured = Boolean(PAYSTACK_PUBLIC_KEY);

/**
 * Dynamically load Paystack Inline JS
 */
export function loadPaystackScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ((window as any).PaystackPop) return resolve(true);

    const existingScript = document.getElementById('paystack-inline-js');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => resolve(false));
      return;
    }

    const script = document.createElement('script');
    script.id = 'paystack-inline-js';
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.warn('Failed to load Paystack script');
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export interface PaystackCheckoutParams {
  email?: string;
  phoneNumber: string;
  studentName?: string;
  planId?: 'monthly' | 'term' | 'annual';
  onSuccess: (reference: string) => void;
  onClose?: () => void;
}

/**
 * Launch Paystack Modal Popup with server-generated access code
 */
export async function launchPaystackCheckout(params: PaystackCheckoutParams): Promise<boolean> {
  const plan = resolvePlanById(params.planId);
  const amountPesewas = plan.amountGhs * 100;

  let accessCode = '';
  let authorizationUrl = '';
  let customerEmail = '';

  try {
    const initRes = await fetch('/api/paystack/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: params.phoneNumber,
        studentName: params.studentName,
        email: params.email,
        planId: plan.id,
      }),
    });

    const initData = await initRes.json();
    if (initData.success && initData.access_code) {
      accessCode = initData.access_code;
      authorizationUrl = initData.authorization_url;
      customerEmail = initData.email;
    } else {
      console.warn('Paystack server initialization failed:', initData.message);
    }
  } catch (err) {
    console.warn('Paystack initialize fetch error:', err);
  }

  if (!accessCode) {
    return false;
  }

  const loaded = await loadPaystackScript();
  if (!loaded || !(window as any).PaystackPop) {
    if (authorizationUrl) {
      window.location.href = authorizationUrl;
      return true;
    }
    return false;
  }

  const cleanPhone = params.phoneNumber.replace(/\s+/g, '');
  const fallbackEmail =
    customerEmail || params.email || `student.${cleanPhone || Date.now()}@acadmicprep.com`;

  try {
    const handler = (window as any).PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: fallbackEmail,
      amount: amountPesewas,
      currency: 'GHS',
      access_code: accessCode,
      channels: ['mobile_money', 'card'],
      callback: (response: { reference: string }) => {
        params.onSuccess(response.reference);
      },
      onClose: () => {
        if (params.onClose) params.onClose();
      },
    });

    handler.openIframe();
    return true;
  } catch (err: any) {
    console.warn('Error launching Paystack modal with access_code:', err?.message || err);
    if (authorizationUrl) {
      window.location.href = authorizationUrl;
      return true;
    }
    return false;
  }
}
