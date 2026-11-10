'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Megaphone, CheckCircle2, X, ArrowRight } from 'lucide-react';
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full overflow-hidden shadow-xl">
            {/* Header */}
            <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Megaphone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    Official Announcement
                  </span>
                  <h2 className="text-base font-bold text-slate-900 mt-0.5 tracking-tight">
                    AcademicPrep Full Access Passes Are Now Active
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDismiss}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                aria-label="Close announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 text-xs text-slate-600 leading-relaxed">
              <p>
                Please note that <b className="text-slate-900">AcademicPrep is now operating on Paid Full Access Passes</b>. Free student accounts continue to include the <b className="text-slate-900">first 3 topics of every subject</b> (and first 2 slides per University course).
              </p>

              {/* Pass Tiers */}
              <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Official Pass Pricing (Instant Mobile Money)
                </div>
                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  <div className="bg-white border border-slate-200 rounded-lg p-2.5 text-center">
                    <div className="text-[11px] font-medium text-slate-500">Monthly</div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">GH₵ 30</div>
                    <div className="text-[10px] text-slate-400">30 Days</div>
                  </div>
                  <div className="bg-slate-900 text-white border border-slate-900 rounded-lg p-2.5 text-center">
                    <div className="text-[11px] font-medium text-slate-300">Term Pass</div>
                    <div className="text-sm font-extrabold text-white mt-0.5">GH₵ 60</div>
                    <div className="text-[10px] text-emerald-300 font-semibold">90 Days</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-2.5 text-center">
                    <div className="text-[11px] font-medium text-slate-500">Annual</div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">GH₵ 180</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">365 Days</div>
                  </div>
                </div>
              </div>

              {/* What is unlocked */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>All JHS (BECE) &amp; SHS (WASSCE) curriculum topics &amp; quizzes</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>All 30+ years of WAEC Past Questions, Trial Mocks &amp; Weekly Exams</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Personal Study Timetable, SHS Placement Predictor &amp; University Slides</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 pb-5 pt-1 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={handleUnlockNow}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Unlock Full Pass Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition cursor-pointer"
              >
                Continue Free Preview
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
