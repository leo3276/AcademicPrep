'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/authContext';
import { WifiOff, Wifi, Crown, RefreshCw, CheckCircle2 } from 'lucide-react';
import PaystackPaymentModal from './PaystackPaymentModal';

export default function OfflineAccessGuard() {
  const { student } = useAuth();
  const [isOffline, setIsOffline] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [justCameOnline, setJustCameOnline] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);

      const handleOnline = () => {
        setIsOffline(false);
        setJustCameOnline(true);
        const timer = setTimeout(() => setJustCameOnline(false), 3500);
        return () => clearTimeout(timer);
      };

      const handleOffline = () => {
        setIsOffline(true);
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  if (!mounted) return null;

  const isVip = Boolean(student?.hasFullAccess);

  // If user just reconnected
  if (justCameOnline) {
    return (
      <aside aria-label="Internet Status" className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
        <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold">
          <Wifi className="w-4 h-4 text-emerald-200" />
          <span>Internet Connection Restored</span>
        </div>
      </aside>
    );
  }

  // Not offline -> render nothing
  if (!isOffline) return null;

  // 1. VIP Student: 100% Offline Active Notice
  if (isVip) {
    return (
      <aside aria-label="Offline Mode Status" className="fixed top-16 left-0 right-0 z-40 bg-amber-500 text-slate-950 px-4 py-2 text-xs font-bold shadow-md flex items-center justify-center gap-2">
        <Crown className="w-4 h-4 text-amber-950" />
        <span>VIP Offline Mode Active</span>
        <span className="text-[11px] font-normal opacity-90 hidden sm:inline">
          • You have full offline access to all curriculum notes and quizzes without data.
        </span>
      </aside>
    );
  }

  // 2. Free / Unpaid Student: Offline Blocker
  return (
    <>
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="offline-guard-title"
        className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      >
        <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center space-y-6 shadow-2xl border border-slate-200">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
            <WifiOff className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Internet Required for Free Access
            </span>
            <h2 id="offline-guard-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              You Are Currently Offline
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              AcademicPrep requires an active internet connection for free-tier students. 
              Only verified <b>VIP Pass</b> holders can access curriculum notes and quizzes <b>100% offline</b> without internet.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Crown className="w-4 h-4 text-amber-500" />
              <span>AcademicPrep VIP Advantage:</span>
            </div>
            <div className="space-y-1.5 text-slate-600 text-[11px]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Offline Access across all JHS & SHS subjects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Study and practice anywhere with 0 mobile data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>All 30+ years BECE & WASSCE questions included</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  if (navigator.onLine) {
                    setIsOffline(false);
                  } else {
                    alert('Still offline. Please connect to mobile data or Wi-Fi to continue on the free tier.');
                  }
                }
              }}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Internet Connection</span>
            </button>

            <button
              type="button"
              onClick={() => setShowPaymentModal(true)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Crown className="w-4 h-4 text-amber-200" />
              <span>Unlock VIP Offline Pass (GH₵ 25)</span>
            </button>
          </div>
        </div>
      </div>

      <PaystackPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        featureName="100% VIP Offline Access"
      />
    </>
  );
}
