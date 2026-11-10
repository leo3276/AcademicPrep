'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import PaystackPaymentModal from './PaystackPaymentModal';

const DISMISSED_ANNOUNCEMENT_KEY = 'academicprep_paid_pass_announcement_v1_seen';

export default function PaidPassAnnouncementModal() {
  const pathname = usePathname();
  const { hasFullAccess, isLoading } = useAuth();
  const [visible, setVisible] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    if (hasFullAccess) {
      setVisible(false);
      return;
    }
    if (pathname?.startsWith('/admin')) return;

    try {
      const seen = sessionStorage.getItem(DISMISSED_ANNOUNCEMENT_KEY);
      if (!seen) {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }
  }, [hasFullAccess, isLoading, pathname]);

  const handleDismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISSED_ANNOUNCEMENT_KEY, '1');
    } catch {}
  };

  const handleUnlockNow = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISSED_ANNOUNCEMENT_KEY, '1');
    } catch {}
    setPaymentModalOpen(true);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white border border-neutral-200 rounded-2xl max-w-sm w-full p-5 shadow-lg space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-neutral-900 tracking-tight">
                  Full Access Passes Are Now Active
                </h2>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Free accounts include the first 3 topics of every subject. Unlock a pass via Mobile Money for full access to all notes, WAEC past questions, mock exams, and study tools.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDismiss}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 transition cursor-pointer shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="border border-neutral-200 rounded-xl p-2.5">
                <div className="text-[11px] text-neutral-500">Monthly</div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">GH₵ 30</div>
                <div className="text-[10px] text-neutral-400">30 days</div>
              </div>
              <div className="border border-neutral-900 bg-neutral-900 text-white rounded-xl p-2.5">
                <div className="text-[11px] text-neutral-300">Term</div>
                <div className="text-sm font-semibold mt-0.5">GH₵ 60</div>
                <div className="text-[10px] text-neutral-300">90 days</div>
              </div>
              <div className="border border-neutral-200 rounded-xl p-2.5">
                <div className="text-[11px] text-neutral-500">Annual</div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">GH₵ 180</div>
                <div className="text-[10px] text-neutral-400">365 days</div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleUnlockNow}
                className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs transition cursor-pointer"
              >
                Unlock Pass
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="py-2.5 px-4 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-neutral-600 font-medium text-xs transition cursor-pointer"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      )}

      <PaystackPaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
    </>
  );
}
