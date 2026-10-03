'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { X, Lock, CheckCircle2 } from 'lucide-react';
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
      setPayError('Please enter a valid phone number (e.g. 0241234567).');
      return;
    }

    setPayError(null);
    setIsPaying(true);

    const launched = await launchPaystackCheckout({
      phoneNumber: cleanPhone,
      fullName: student?.fullName || 'AcademicPrep Student',
      onError: (err) => {
        setPayError(err);
        setIsPaying(false);
      },
      onSuccess: async (reference: string) => {
        try {
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
            }, 1800);
          } else {
            setPayError(data.message || 'Verification pending. Please refresh.');
          }
        } catch (err: any) {
          console.warn('Verify error:', err);
          setPayError('Payment processed. Please refresh in a moment.');
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
      }, 1400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Minimal Header */}
        <div className="pr-6">
          <h2 className="text-base font-semibold text-slate-900 tracking-tight">
            {featureName ? `Unlock ${featureName}` : 'VIP Access Pass'}
          </h2>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Full 100% offline access to all JHS &amp; SHS subjects, quizzes, BECE &amp; WASSCE past papers.
          </p>

          {/* Simple Price Line */}
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              GH₵ {PAYSTACK_VIP_PRICE_GHS}
            </span>
            <span className="text-xs text-slate-500 font-medium">/ month</span>
          </div>
        </div>

        {/* Segmented Control */}
        <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-medium mt-5">
          <button
            type="button"
            onClick={() => setActiveTab('momo')}
            className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
              activeTab === 'momo'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mobile Money
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pin')}
            className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
              activeTab === 'pin'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Redeem PIN
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-5">
          {activeTab === 'momo' ? (
            paySuccess ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">Pass Activated</h3>
                <p className="text-xs text-slate-500">
                  Your 30-day VIP pass is active. Refreshing...
                </p>
              </div>
            ) : (
              <form onSubmit={handlePaystackPay} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-slate-700">
                      Mobile Number
                    </label>
                    <span className="text-[11px] text-slate-400">
                      MTN • Telecel • AT • Card
                    </span>
                  </div>
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={(e) => {
                      setPhoneInput(e.target.value);
                      setPayError(null);
                    }}
                    placeholder="024 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                    autoFocus
                    required
                  />
                </div>

                {payError && (
                  <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
                    {payError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPaying}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white font-medium text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {isPaying ? 'Connecting...' : `Pay GH₵ ${PAYSTACK_VIP_PRICE_GHS} with MoMo`}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-0.5">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Secured by Paystack</span>
                </div>
              </form>
            )
          ) : (
            <form onSubmit={handleRedeemPin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Voucher PIN Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. PREP-XXXX-XXXX"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono text-center tracking-wider text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 uppercase transition"
                  autoFocus
                />
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                  <span>Scratch-card vouchers are sold by your teacher.</span>
                </div>
              </div>

              {pinFeedback && (
                <p
                  className={`text-xs p-2.5 rounded-lg border ${
                    pinFeedback.success
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
                      : 'bg-red-50 text-red-700 border-red-100'
                  }`}
                >
                  {pinFeedback.text}
                </p>
              )}

              <button
                type="submit"
                disabled={pinLoading || !pinInput.trim()}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white font-medium text-xs transition cursor-pointer shadow-xs"
              >
                {pinLoading ? 'Verifying...' : 'Activate Pass'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
