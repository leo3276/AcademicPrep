'use client';

import React from 'react';
import PaystackPaymentModal from './PaystackPaymentModal';

interface AccessPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
  onSuccess?: () => void;
}

export default function AccessPinModal({
  isOpen,
  onClose,
  featureName = 'This Premium Resource',
  onSuccess
}: AccessPinModalProps) {
  return (
    <PaystackPaymentModal
      isOpen={isOpen}
      onClose={onClose}
      featureName={featureName}
      onSuccess={onSuccess}
      defaultTab="momo"
    />
  );
}
