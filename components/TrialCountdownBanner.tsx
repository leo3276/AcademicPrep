'use client';

import React from 'react';

interface TrialCountdownBannerProps {
  variant?: 'full' | 'compact' | 'card';
  title?: string;
  subtitle?: string;
}

/**
 * Legacy TrialCountdownBanner is retired under the strict Free Account vs Paid Pass model.
 * Free accounts can access the first 3 topics per subject (JHS/SHS) or first 2 slides (University).
 */
export default function TrialCountdownBanner(_props: TrialCountdownBannerProps) {
  return null;
}
