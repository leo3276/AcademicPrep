// Client-safe configuration and types for direct Mobile Money transfers

export const OFFICIAL_MOMO_DETAILS = {
  number: '0553906598',
  name: 'EMMANUEL KWEKU OSEI',
  network: 'MTN Mobile Money',
  amountGhs: 25,
  validityDays: 30,
};

export interface MomoClaim {
  id: string;
  studentPhone: string;
  studentName: string;
  senderPhone?: string;
  transactionId?: string;
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
