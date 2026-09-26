'use client';

export const PAYSTACK_VIP_PRICE_GHS = 20;
export const PAYSTACK_VIP_AMOUNT_PESEWAS = 2000; // GHS 20.00 in pesewas (1 month / 30-day access)
export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';

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
  onClose?: () => void;
}

/**
 * Launch Paystack Modal Popup for Ghana Mobile Money (MTN MoMo, Telecel Cash, AT Money) and Cards
 */
export async function launchPaystackCheckout(params: PaystackCheckoutParams): Promise<boolean> {
  const loaded = await loadPaystackScript();
  if (!loaded || !(window as any).PaystackPop) {
    alert('Could not connect to payment gateway. Please check your internet connection and try again.');
    return false;
  }

  const cleanPhone = (params.phoneNumber || '').trim().replace(/\s+/g, '');
  const cleanEmail = params.email && params.email.includes('@')
    ? params.email.trim()
    : `${cleanPhone || 'student'}@academicprep.com`;

  try {
    const handler = (window as any).PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: cleanEmail,
      amount: PAYSTACK_VIP_AMOUNT_PESEWAS, // 2000 pesewas = GHS 20.00 / month
      currency: 'GHS',
      channels: ['mobile_money', 'card'],
      metadata: {
        custom_fields: [
          {
            display_name: 'Mobile Number',
            variable_name: 'phone_number',
            value: cleanPhone,
          },
          {
            display_name: 'Student Name',
            variable_name: 'full_name',
            value: params.fullName || 'AcademicPrep Student',
          },
          {
            display_name: 'Product',
            variable_name: 'product',
            value: 'Monthly VIP Full Access Pass (30 Days)',
          },
        ],
      },
      callback: (response: { reference: string }) => {
        if (response && response.reference) {
          params.onSuccess(response.reference);
        }
      },
      onClose: () => {
        if (params.onClose) params.onClose();
      },
    });

    handler.openIframe();
    return true;
  } catch (err: any) {
    console.warn('Error launching Paystack modal:', err?.message || err);
    alert('Failed to launch payment checkout: ' + (err?.message || 'Unknown error'));
    return false;
  }
}
