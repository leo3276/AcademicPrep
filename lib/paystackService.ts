'use client';

export const PAYSTACK_VIP_PRICE_GHS = 25;
export const PAYSTACK_VIP_AMOUNT_PESEWAS = 2500; // GHS 25.00 / month in pesewas
export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_live_f09af5e82872d14a47d3029faab6257483e8d2c7';

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
  phoneNumber: string;
  email?: string;
  fullName?: string;
  onSuccess: (reference: string) => void;
  onError?: (message: string) => void;
  onClose?: () => void;
}

/**
 * Launch Paystack Modal Popup with server-generated access code
 */
export async function launchPaystackCheckout(params: PaystackCheckoutParams): Promise<boolean> {
  const cleanPhone = (params.phoneNumber || '').trim().replace(/\s+/g, '');
  if (!cleanPhone) {
    if (params.onError) params.onError('Please enter a valid phone number.');
    else alert('Please enter a valid phone number.');
    return false;
  }

  const cleanEmail = params.email && params.email.includes('@')
    ? params.email.trim()
    : `${cleanPhone}@academicprep.com`;

  // 1. Initialize on server to generate a secure pre-authenticated access_code
  let initData: {
    success: boolean;
    access_code?: string;
    reference?: string;
    authorization_url?: string;
    message?: string;
  };

  try {
    const initRes = await fetch('/api/paystack/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: cleanPhone,
        email: cleanEmail,
        fullName: params.fullName || 'AcademicPrep Student',
      }),
    });
    initData = await initRes.json();

    if (!initData.success || !initData.access_code) {
      const msg = initData.message || 'Could not start payment session. Please try again.';
      if (params.onError) params.onError(msg);
      else alert(msg);
      return false;
    }
  } catch (err: any) {
    console.warn('Paystack initialize fetch error:', err);
    const msg = 'Could not connect to payment gateway. Please check your internet connection.';
    if (params.onError) params.onError(msg);
    else alert(msg);
    return false;
  }

  // 2. Load Paystack inline popup script
  const loaded = await loadPaystackScript();
  if (!loaded || !(window as any).PaystackPop) {
    if (initData.authorization_url) {
      window.location.href = initData.authorization_url;
      return true;
    }
    const msg = 'Could not load checkout modal. Please check your internet connection.';
    if (params.onError) params.onError(msg);
    else alert(msg);
    return false;
  }

  // 3. Open Paystack popup with the validated access_code and student email
  try {
    const handler = (window as any).PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      access_code: initData.access_code,
      email: cleanEmail,
      amount: PAYSTACK_VIP_AMOUNT_PESEWAS,
      currency: 'GHS',
      channels: ['mobile_money', 'card'],
      callback: (response: { reference?: string }) => {
        const ref = response?.reference || initData.reference || '';
        if (ref) {
          params.onSuccess(ref);
        }
      },
      onClose: () => {
        if (params.onClose) params.onClose();
      },
    });

    handler.openIframe();
    return true;
  } catch (err: any) {
    console.warn('Error launching Paystack modal with access_code:', err?.message || err);
    if (initData.authorization_url) {
      window.location.href = initData.authorization_url;
      return true;
    }
    const msg = 'Failed to launch checkout: ' + (err?.message || 'Unknown error');
    if (params.onError) params.onError(msg);
    else alert(msg);
    return false;
  }
}
