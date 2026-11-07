'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  GraduationCap, 
  Brain, 
  KeyRound, 
  LogOut, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';

export default function AccountPage() {
  const router = useRouter();
  const { 
    student, 
    isLoading, 
    logoutStudent, 
    hasFullAccess, 
    isTrialActive, 
    trialDaysRemaining 
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If JHS or SHS student, redirect to their dedicated profile
  useEffect(() => {
    if (mounted && student) {
      if (student.currentLevel?.startsWith('SHS')) {
        router.replace('/shs/profile');
      } else if (student.currentLevel?.startsWith('JHS')) {
        router.replace('/jhs/profile');
      }
    }
  }, [mounted, student, router]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="w-7 h-7 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!student) {
    return (
      <div className="max-w-md mx-auto my-12 px-4 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
          <User className="w-6 h-6" />
        </div>
        <h1 className="text-lg font-bold text-slate-900">Sign In to Your Account</h1>
        <p className="text-xs text-slate-500">
          Access your courses, study history, timetable, and access pass.
        </p>
        <div className="pt-2 flex flex-col gap-2">
          <Link
            href="/login?redirect=/account"
            className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition shadow-xs text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="max-w-lg mx-auto px-4 py-8 space-y-5 font-sans">
        
        {/* Simple Minimal Student Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
                {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
              </div>
              <div>
                <h1 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {student.fullName}
                </h1>
                <p className="text-xs text-slate-500 font-mono">
                  {student.phoneNumber}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
              {student.currentLevel === 'UNIVERSITY' ? 'Tertiary' : student.currentLevel}
            </span>
          </div>

          {/* Pass Status Bar */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              {hasFullAccess ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">VIP Pass Active</span>
                </>
              ) : isTrialActive ? (
                <>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">
                    Free Trial ({trialDaysRemaining}d remaining)
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-amber-900">Pass Expired</span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setPinModalOpen(true)}
              className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer flex items-center gap-1"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>{hasFullAccess ? 'Extend' : 'Redeem PIN'}</span>
            </button>
          </div>

          {/* Action Links */}
          <div className="space-y-2 pt-1">
            <Link
              href="/university"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-xs text-center"
            >
              <Brain className="w-4 h-4" />
              <span>Open University Slide Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={async () => {
                if (confirm('Sign out of your account?')) {
                  await logoutStudent();
                  router.push('/');
                }
              }}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

      </main>

      <PaystackPaymentModal
        isOpen={pinModalOpen}
        onClose={() => setPinModalOpen(false)}
        defaultTab="pin"
      />
    </>
  );
}
