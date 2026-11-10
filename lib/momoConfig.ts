// Client-safe configuration, pricing tiers, and Transaction ID validation for Mobile Money transfers

export interface PricingPlan {
  id: 'monthly' | 'term' | 'annual';
  label: string;
  sublabel: string;
  amountGhs: number;
  validityDays: number;
  recommended?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly Pass',
    sublabel: '30 days full access',
    amountGhs: 30,
    validityDays: 30,
  },
  {
    id: 'term',
    label: 'Term Pass',
    sublabel: '90 days • Save GH₵ 15',
    amountGhs: 75,
    validityDays: 90,
    recommended: true,
  },
  {
    id: 'annual',
    label: 'Annual Pass',
    sublabel: '365 days • Full year',
    amountGhs: 299,
    validityDays: 365,
  },
];

export const OFFICIAL_MOMO_DETAILS = {
  number: '0593119669',
  name: 'NATHANIEL CALEB MAWUNYO DEKU',
  network: 'MTN Mobile Money',
  amountGhs: 30,
  validityDays: 30,
};

export function resolvePlanById(planId?: string): PricingPlan {
  if (planId === 'annual') return PRICING_PLANS[2];
  if (planId === 'term') return PRICING_PLANS[1];
  return PRICING_PLANS[0];
}

export function resolvePlanByAmount(amountGhs?: number): PricingPlan {
  if (amountGhs === 299) return PRICING_PLANS[2];
  if (amountGhs === 75) return PRICING_PLANS[1];
  return PRICING_PLANS[0];
}

export function validateMomoTransactionId(raw?: string): {
  valid: boolean;
  cleanedId: string;
  error?: string;
} {
  const cleaned = String(raw || '')
    .trim()
    .replace(/\s+/g, '');

  if (!cleaned) {
    return {
      valid: false,
      cleanedId: '',
      error: 'Please paste the Mobile Money Transaction ID from your SMS receipt.',
    };
  }

  if (!/^[A-Za-z0-9-]{8,30}$/.test(cleaned)) {
    return {
      valid: false,
      cleanedId: cleaned,
      error: 'Enter a valid Transaction ID (8–30 digits/letters from your MoMo confirmation SMS).',
    };
  }

  const digitCount = (cleaned.match(/\d/g) || []).length;
  if (digitCount < 6) {
    return {
      valid: false,
      cleanedId: cleaned,
      error: 'Transaction ID must include the numeric reference from your MoMo SMS receipt.',
    };
  }

  if (/^(.)\1+$/.test(cleaned)) {
    return {
      valid: false,
      cleanedId: cleaned,
      error: 'This Transaction ID appears invalid. Please copy the exact ID from your MoMo SMS.',
    };
  }

  const lower = cleaned.toLowerCase();
  const blockedPatterns = [
    '12345678',
    '87654321',
    '01234567',
    '00000000',
    '11111111',
    'password',
    'academic',
    'freetrial',
  ];
  if (blockedPatterns.some((pat) => lower.includes(pat))) {
    return {
      valid: false,
      cleanedId: cleaned,
      error: 'This Transaction ID is not valid. Please enter your genuine MoMo Transaction ID.',
    };
  }

  return { valid: true, cleanedId: cleaned };
}

export interface MomoClaim {
  id: string;
  studentPhone: string;
  studentName: string;
  senderPhone?: string;
  transactionId?: string;
  planId?: 'monthly' | 'term' | 'annual';
  planLabel?: string;
  validityDays?: number;
  amountGhs: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  instantGranted?: boolean;
  recipientNumber: string;
  recipientName: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  revokedAt?: string;
}
