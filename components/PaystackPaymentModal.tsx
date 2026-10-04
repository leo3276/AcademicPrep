'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { 
  X, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  Smartphone, 
  MessageCircle, 
  AlertCircle 
} from 'lucide-react';
import { launchPaystackCheckout, PAYSTACK_VIP_PRICE_GHS } from '@/lib/paystackService';
import { OFFICIAL_MOMO_DETAILS } from '@/lib/momoConfig';

export type PaymentModalTab = 'direct_momo' | 'momo' | 'paystack' | 'pin';

interface PaystackPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: PaymentModalTab;
  featureName?: string;
  onSuccess?: () => void;
}

export default function PaystackPaymentModal({
  isOpen,
  onClose,
  defaultTab = 'direct_momo',
  featureName,
  onSuccess
}: PaystackPaymentModalProps) {
  const { student, redeemPin, refreshStudent } = useAuth();
  const initialTab = defaultTab === 'momo' || defaultTab === 'direct_momo' ? 'direct_momo' : defaultTab;
  const [activeTab, setActiveTab] = useState<'direct_momo' | 'paystack' | 'pin'>(initialTab);

  // Direct MoMo State
  const [directPhone, setDirectPhone] = useState(student?.phoneNumber || '');
  const [isSubmittingClaim, setIsSubmittingClaim] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState<boolean>(false);
  const [claimError, setClaimError] = useState<string | null>(null);
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Paystack Auto State
  const [paystackPhone, setPaystackPhone] = useState(student?.phoneNumber || '');
  const [isPaying, setIsPaying] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  // Offline PIN State
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  if (!isOpen) return null;

  const handleCopyMomoNumber = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(OFFICIAL_MOMO_DETAILS.number);
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2500);
    }
  };

  // Submit Direct MoMo Payment (Instant VIP Grant)
  const handleSubmitMomoClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = directPhone.trim().replace(/\s+/g, '');

    if (!cleanPhone || cleanPhone.length < 10) {
      setClaimError('Please enter a valid 10-digit Ghanaian mobile number.');
      return;
    }

    setClaimError(null);
    setIsSubmittingClaim(true);

    try {
      const res = await fetch('/api/momo/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentPhone: cleanPhone,
          studentName: student?.fullName || undefined,
          amountGhs: OFFICIAL_MOMO_DETAILS.amountGhs,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setClaimError(data.error || 'Failed to activate VIP pass. Please ensure your account is registered.');
      } else {
        if (refreshStudent) {
          try {
            await refreshStudent();
          } catch {}
        }
        if (onSuccess) {
          try {
            onSuccess();
          } catch {}
        }
        setClaimSuccess(true);
      }
    } catch (err: any) {
      setClaimError('Network communication error. Please check your internet connection.');
    } finally {
      setIsSubmittingClaim(false);
    }
  };

  // Handle Paystack Checkout
  const handlePaystackPay = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = paystackPhone.trim().replace(/\s+/g, '');
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

  const whatsappMessage = encodeURIComponent(
    `Hello Emmanuel, I sent GH₵ 25 via MoMo for AcademicPrep VIP.\nMy Account Phone: ${directPhone || student?.phoneNumber || ''}\nPlease confirm my account.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-slate-100 relative my-auto text-left">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              {featureName ? `Unlock ${featureName}` : 'AcademicPrep VIP'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              GH₵ {PAYSTACK_VIP_PRICE_GHS} &middot; 30 days full access
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-medium mt-4 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('direct_momo')}
            className={`flex-1 py-1.5 px-2 rounded-lg transition text-center text-xs cursor-pointer ${
              activeTab === 'direct_momo'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Direct MoMo
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('paystack')}
            className={`flex-1 py-1.5 px-2 rounded-lg transition text-center text-xs cursor-pointer ${
              activeTab === 'paystack'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Paystack
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pin')}
            className={`flex-1 py-1.5 px-2 rounded-lg transition text-center text-xs cursor-pointer ${
              activeTab === 'pin'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Voucher PIN
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {/* TAB 1: DIRECT MOMO TRANSFER (EMMANUEL KWEKU OSEI) */}
          {activeTab === 'direct_momo' && (
            claimSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">VIP Pass Active</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Your 30-day VIP pass is active on <span className="font-mono text-slate-800">{directPhone}</span>.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      if (onSuccess) {
                        try { onSuccess(); } catch (e) {}
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold transition cursor-pointer"
                  >
                    Start Studying
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                {/* Recipient Card */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Send GH₵ {OFFICIAL_MOMO_DETAILS.amountGhs} via MoMo (*170#)</span>
                    <button
                      type="button"
                      onClick={handleCopyMomoNumber}
                      className="font-medium text-slate-700 hover:text-black flex items-center gap-1 cursor-pointer"
                    >
                      {copiedNumber ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-bold font-mono tracking-wide text-slate-900">
                      {OFFICIAL_MOMO_DETAILS.number}
                    </span>
                    <span className="text-xs font-medium text-slate-600">
                      {OFFICIAL_MOMO_DETAILS.name}
                    </span>
                  </div>
                </div>

                {/* Notice in writing */}
                <p className="text-[11px] text-slate-600 leading-relaxed bg-amber-50/70 border border-amber-200/70 rounded-xl px-3 py-2">
                  <b className="text-amber-900 font-semibold">Pay before you input your number:</b> Transfer GH₵ 25 to the number above via *170# first. VIP activates immediately upon submitting, but will be revoked if payment is not received.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmitMomoClaim} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your MoMo Phone Number
                    </label>
                    <input
                      type="tel"
                      value={directPhone}
                      onChange={(e) => {
                        setDirectPhone(e.target.value);
                        setClaimError(null);
                      }}
                      placeholder="024 123 4567"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition"
                      required
                    />
                  </div>

                  {claimError && (
                    <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-100">
                      {claimError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmittingClaim}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white font-medium text-xs transition cursor-pointer shadow-xs"
                  >
                    {isSubmittingClaim ? 'Activating...' : 'Confirm & Activate VIP Pass'}
                  </button>
                </form>

                <div className="text-center pt-0.5">
                  <a
                    href={`https://wa.me/233553906598?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-slate-400 hover:text-slate-700 transition"
                  >
                    Need help? WhatsApp Emmanuel
                  </a>
                </div>
              </div>
            )
          )}

          {/* TAB 2: AUTOMATED PAYSTACK */}
          {activeTab === 'paystack' && (
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
              <form onSubmit={handlePaystackPay} className="space-y-3.5">
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
                    value={paystackPhone}
                    onChange={(e) => {
                      setPaystackPhone(e.target.value);
                      setPayError(null);
                    }}
                    placeholder="024 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                    autoFocus
                    required
                  />
                </div>

                {/* MTN Approval Reminder */}
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] flex items-start gap-2">
                  <Smartphone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    <b>MTN Users:</b> If no popup appears on your phone, dial <b>*170#</b> &gt; <b>6) My Wallet</b> &gt; <b>3) My Approvals</b> to authorize the payment.
                  </p>
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
                  {isPaying ? 'Connecting to Paystack...' : `Pay GH₵ ${PAYSTACK_VIP_PRICE_GHS} with Paystack`}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-0.5">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Secured by Paystack Gateway</span>
                </div>
              </form>
            )
          )}

          {/* TAB 3: VOUCHER PIN REDEMPTION */}
          {activeTab === 'pin' && (
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
                  <span>Scratch-card vouchers are issued directly by admin.</span>
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
