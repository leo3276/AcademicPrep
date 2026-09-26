'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { 
  X, 
  Smartphone, 
  KeyRound, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  CreditCard,
  Lock,
  ArrowRight
} from 'lucide-react';
import { launchPaystackCheckout, PAYSTACK_VIP_PRICE_GHS } from '@/lib/paystackService';

interface PaystackPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'momo' | 'pin';
  featureName?: string;
  onSuccess?: () => void;
}

export default function PaystackPaymentModal({
  isOpen,
  onClose,
  defaultTab = 'momo',
  featureName,
  onSuccess
}: PaystackPaymentModalProps) {
  const { student, redeemPin } = useAuth();
  const [activeTab, setActiveTab] = useState<'momo' | 'pin'>(defaultTab);

  // MoMo State
  const [phoneInput, setPhoneInput] = useState(student?.phoneNumber || '');
  const [isPaying, setIsPaying] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  // Offline PIN State
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  if (!isOpen) return null;

  // Handle Paystack Checkout
  const handlePaystackPay = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneInput.trim().replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setPayError('Please enter a valid Ghana phone number (e.g. 0241234567).');
      return;
    }

    setPayError(null);
    setIsPaying(true);

    const launched = await launchPaystackCheckout({
      phoneNumber: cleanPhone,
      fullName: student?.fullName || 'AcademicPrep Student',
      onSuccess: async (reference: string) => {
        try {
          // Verify with server endpoint
          const res = await fetch('/api/paystack/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference, phoneNumber: cleanPhone }),
          });

          const data = await res.json();
          if (data.success) {
            setPaySuccess(true);
            try {
              const stored = localStorage.getItem('academicprep_student');
              if (stored) {
                const s = JSON.parse(stored);
                const expiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
                s.hasFullAccess = true;
                s.accessType = 'Full Pass';
                s.accessExpiresAt = expiry;
                localStorage.setItem('academicprep_student', JSON.stringify(s));
              }
            } catch {}
            if (onSuccess) {
              try { onSuccess(); } catch (e) {}
            }
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            setPayError(data.message || 'Payment received but verification pending. Please refresh.');
          }
        } catch (err: any) {
          console.warn('Verify error:', err);
          setPayError('Payment processed! If access is not active in 1 minute, please contact support.');
        } finally {
          setIsPaying(false);
        }
      },
      onClose: () => {
        setIsPaying(false);
      }
    });

    if (!launched) {
      setIsPaying(false);
    }
  };

  // Handle Voucher PIN Redemption
  const handleRedeemPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;

    setPinLoading(true);
    setPinFeedback(null);

    const res = await redeemPin(pinInput);
    setPinLoading(false);
    setPinFeedback({
      success: res.success,
      text: res.message,
    });

    if (res.success) {
      if (onSuccess) {
        try { onSuccess(); } catch (e) {}
      }
      setTimeout(() => {
        onClose();
        setPinInput('');
        setPinFeedback(null);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Banner */}
        <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white p-6 relative">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-amber-400 text-slate-950 flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 text-slate-950" />
              30-Day Monthly Pass
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {featureName ? `Unlock ${featureName}` : 'Unlock Full AcademicPrep Access'}
          </h2>
          <p className="text-xs text-blue-100 mt-1">
            Unlimited access across all 9 JHS subjects, past questions & weekly exams.
          </p>

          {/* Pricing Highlight */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-300">GHS {PAYSTACK_VIP_PRICE_GHS}.00</span>
            <span className="text-xs text-blue-200 font-medium">/ 30 Days (Monthly Pass)</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab('momo')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'momo'
                ? 'bg-white text-blue-700 shadow-xs border border-slate-200/80 font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Pay via MoMo / Card</span>
          </button>
          <button
            onClick={() => setActiveTab('pin')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'pin'
                ? 'bg-white text-amber-700 shadow-xs border border-slate-200/80 font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>Redeem Voucher PIN</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6">
          {activeTab === 'momo' ? (
            <div className="space-y-4">
              {paySuccess ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Payment Successful!</h3>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Your 30-Day VIP Full Pass is now active. Refreshing your dashboard...
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePaystackPay} className="space-y-4">
                  {/* Features list */}
                  <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3.5 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>All JHS 1, 2 & 3 Topics & Step-by-Step Quizzes</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>All BECE Past Questions & Verified Solutions (2008–2026)</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Adaptive Weekly Exams & Performance Tracker</span>
                    </div>
                  </div>

                  {/* MoMo Network Logos / Badges */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Supported Mobile Money Networks
                    </label>
                    <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-black">
                      <div className="py-2 px-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                        MTN MoMo
                      </div>
                      <div className="py-2 px-1 rounded-xl bg-red-50 border border-red-200 text-red-900">
                        Telecel
                      </div>
                      <div className="py-2 px-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-900">
                        AT Money
                      </div>
                      <div className="py-2 px-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center gap-0.5">
                        <CreditCard className="w-3 h-3" /> Card
                      </div>
                    </div>
                  </div>

                  {/* Phone input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ghana Phone Number (For Payment & Account)
                    </label>
                    <input
                      type="tel"
                      value={phoneInput}
                      onChange={(e) => {
                        setPhoneInput(e.target.value);
                        setPayError(null);
                      }}
                      placeholder="e.g. 0598680053 or 0241234567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>

                  {payError && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                      {payError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPaying}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isPaying ? (
                      <span>Opening Paystack Checkout...</span>
                    ) : (
                      <>
                        <span>Pay GHS {PAYSTACK_VIP_PRICE_GHS}.00 / Month via MoMo</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Secured 256-bit encrypted checkout by Paystack</span>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <form onSubmit={handleRedeemPin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Voucher / Scratch-Card PIN Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. PREP-8842-9901"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-center tracking-widest text-slate-900 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500 uppercase text-sm"
                  autoFocus
                />
              </div>

              {pinFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    pinFeedback.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {pinFeedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={pinLoading || !pinInput.trim()}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {pinLoading ? (
                  <span>Verifying PIN...</span>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    Activate 30-Day Full Access Pass
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
