'use client';

// Direct MTN Mobile Money & Access PIN Vouchers are used exclusively.
// Paystack integration is intentionally disabled.
export const PAYSTACK_VIP_PRICE_GHS = 30;
export const PAYSTACK_VIP_AMOUNT_PESEWAS = 3000;
export const PAYSTACK_PUBLIC_KEY = '';
export const isPaystackClientConfigured = false;

export function loadPaystackScript(): Promise<boolean> {
  return Promise.resolve(false);
}

export interface PaystackCheckoutParams {
  email?: string;
  phoneNumber: string;
  studentName?: string;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
}

export async function launchPaystackCheckout(_params: PaystackCheckoutParams): Promise<boolean> {
  return false;
}
