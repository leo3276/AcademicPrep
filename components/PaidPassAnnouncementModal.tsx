'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import PaystackPaymentModal from './PaystackPaymentModal';

const DISMISSED_ANNOUNCEMENT_KEY = 'academicprep_paid_pass_announcement_v2_until';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function PaidPassAnnouncementModal() {
  const pathname = usePathname();
  const { hasFullAccess, isLoading } = useAuth();
  const [visible, setVisible] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (hasFullAccess) {
      setVisible(false);
      return;
    }
    if (pathname?.startsWith('/admin')) return;

    // Check if user explicitly launched tour via query parameter
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('tour') === '1' || urlParams.get('tour') === 'true') {
        return; // Suppress during guided tour
      }
    }

    // Check if dismissed within the last 24 hours
    try {
      const dismissedUntil = localStorage.getItem(DISMISSED_ANNOUNCEMENT_KEY);
      if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
        return;
      }
    } catch {}

    const scheduleAppearance = (delayMs: number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setVisible(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('academicprep_announcement_active', '1');
        }
      }, delayMs);
    };

    // Check if first-time visitor has an active tour prompt waiting
    const tourDismissed = typeof window !== 'undefined' ? localStorage.getItem('academicprep_tour_prompt_dismissed') : null;
    const tourCompleted = typeof window !== 'undefined' ? localStorage.getItem('academicprep_account_tour_completed') : null;

    if (!tourDismissed && !tourCompleted) {
      // First-time visitor: Wait for tour prompt to be handled before showing pricing announcement
      const handleTourFinished = () => {
        scheduleAppearance(2500); // polite 2.5s breathing room after tour dismiss
      };

      window.addEventListener('academicprep_tour_dismissed', handleTourFinished);
      return () => {
        window.removeEventListener('academicprep_tour_dismissed', handleTourFinished);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else {
      // Returning visitor: Show after page finishes settling (2.5 seconds)
      scheduleAppearance(2500);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [hasFullAccess, isLoading, pathname]);

  const handleDismiss = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(DISMISSED_ANNOUNCEMENT_KEY, String(Date.now() + ONE_DAY_MS));
        sessionStorage.removeItem('academicprep_announcement_active');
      } catch {}
      window.dispatchEvent(new Event('academicprep_announcement_dismissed'));
    }
  };

  const handleUnlockNow = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(DISMISSED_ANNOUNCEMENT_KEY, String(Date.now() + ONE_DAY_MS));
        sessionStorage.removeItem('academicprep_announcement_active');
      } catch {}
      window.dispatchEvent(new Event('academicprep_announcement_dismissed'));
    }
    setPaymentModalOpen(true);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-neutral-200 rounded-2xl max-w-sm w-full p-5 shadow-2xl space-y-4">
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
              <div className="border border-neutral-900 bg-neutral-900 text-white rounded-xl p-2.5 shadow-sm">
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
                className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs transition cursor-pointer shadow-sm"
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
