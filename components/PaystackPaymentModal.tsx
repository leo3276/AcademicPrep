'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/lib/authContext';
import { 
  X, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  Smartphone, 
  MessageCircle, 
  AlertCircle,
  Loader2,
  RefreshCw,
  Zap
} from 'lucide-react';
import { 
  detectGhanaNetwork, 
  initiateThetellerPayment, 
  checkThetellerStatus,
  THETELLER_VIP_PRICE_GHS 
} from '@/lib/thetellerService';
import { OFFICIAL_MOMO_DETAILS } from '@/lib/momoConfig';

export type PaymentModalTab = 'instant_momo' | 'direct_momo' | 'paystack' | 'momo' | 'pin';

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
  defaultTab = 'instant_momo',
  featureName,
  onSuccess
}: PaystackPaymentModalProps) {
  const { student, redeemPin, refreshStudent } = useAuth();

  // Normalize initial tab
  const getInitialTab = (): 'instant_momo' | 'direct_momo' | 'pin' => {
    if (defaultTab === 'instant_momo' || defaultTab === 'paystack' || defaultTab === 'momo') {
      return 'instant_momo';
    }
    if (defaultTab === 'direct_momo') return 'direct_momo';
    if (defaultTab === 'pin') return 'pin';
    return 'instant_momo';
  };

  const [activeTab, setActiveTab] = useState<'instant_momo' | 'direct_momo' | 'pin'>(getInitialTab());

  // Instant MoMo (theteller) State
  const [momoPhone, setMomoPhone] = useState(student?.phoneNumber || '');
  const [isSendingPrompt, setIsSendingPrompt] = useState(false);
  const [isWaitingForPin, setIsWaitingForPin] = useState(false);
  const [currentTxId, setCurrentTxId] = useState<string | null>(null);
  const [momoError, setMomoError] = useState<string | null>(null);
  const [momoSuccess, setMomoSuccess] = useState(false);
  const [pollCountdown, setPollCountdown] = useState(90); // 90 seconds timeout

  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Direct MoMo Manual Transfer State
  const [directPhone, setDirectPhone] = useState(student?.phoneNumber || '');
  const [isSubmittingClaim, setIsSubmittingClaim] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState<boolean>(false);
  const [claimError, setClaimError] = useState<string | null>(null);
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Offline Voucher PIN State
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  // Clean up polling interval on unmount or tab change
  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, []);

  if (!isOpen) return null;

  const networkInfo = detectGhanaNetwork(momoPhone);

  const handleCopyMomoNumber = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(OFFICIAL_MOMO_DETAILS.number);
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2500);
    }
  };

  // Start Instant MoMo PIN Push via theteller
  const handleInitiateMomo = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = momoPhone.trim().replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setMomoError('Please enter a valid 10-digit Ghanaian mobile number.');
      return;
    }

    setMomoError(null);
    setIsSendingPrompt(true);

    const res = await initiateThetellerPayment({
      phoneNumber: cleanPhone,
      fullName: student?.fullName || 'AcademicPrep Student',
    });

    setIsSendingPrompt(false);

    if (!res.success || !res.transactionId) {
      setMomoError(res.message || 'Failed to trigger prompt. Please verify your phone number.');
      return;
    }

    // Successfully dispatched prompt! Now poll for student's PIN entry
    setCurrentTxId(res.transactionId);
    setIsWaitingForPin(true);
    setPollCountdown(90);

    // Start Polling every 3 seconds
    if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);

    pollIntervalRef.current = setInterval(async () => {
      setPollCountdown((prev) => {
        if (prev <= 1) {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setIsWaitingForPin(false);
          setMomoError('Prompt timed out. If money was deducted, dial *170# or contact support.');
          return 0;
        }
        return prev - 3;
      });

      const checkRes = await checkThetellerStatus(res.transactionId!, cleanPhone);

      if (checkRes.status === 'approved') {
        if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
        setIsWaitingForPin(false);
        setMomoSuccess(true);

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

        if (refreshStudent) {
          try { await refreshStudent(); } catch {}
        }
        if (onSuccess) {
          try { onSuccess(); } catch {}
        }

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (checkRes.status === 'failed') {
        if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
        setIsWaitingForPin(false);
        setMomoError(checkRes.message || 'Payment declined or cancelled on phone.');
      }
    }, 3000);
  };

  const handleCancelWaiting = () => {
    if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    setIsWaitingForPin(false);
  };

  // Submit Direct MoMo Claim
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
          try { await refreshStudent(); } catch {}
        }
        if (onSuccess) {
          try { onSuccess(); } catch {}
        }
        setClaimSuccess(true);
      }
    } catch (err: any) {
      setClaimError('Network communication error. Please check your internet connection.');
    } finally {
      setIsSubmittingClaim(false);
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
    `Hello Emmanuel, I want to activate AcademicPrep VIP for my number: ${momoPhone || directPhone || student?.phoneNumber || ''}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-slate-100 relative my-auto text-left">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              {featureName ? `Unlock ${featureName}` : 'AcademicPrep VIP'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              GH₵ {THETELLER_VIP_PRICE_GHS} &middot; 30 days full unlimited access
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
            onClick={() => {
              handleCancelWaiting();
              setActiveTab('instant_momo');
            }}
            className={`flex-1 py-1.5 px-2 rounded-lg transition text-center text-xs cursor-pointer flex items-center justify-center gap-1 ${
              activeTab === 'instant_momo'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3 h-3 text-amber-500" />
            Instant MoMo
          </button>

          <button
            type="button"
            onClick={() => {
              handleCancelWaiting();
              setActiveTab('direct_momo');
            }}
            className={`flex-1 py-1.5 px-2 rounded-lg transition text-center text-xs cursor-pointer ${
              activeTab === 'direct_momo'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Manual MoMo
          </button>

          <button
            type="button"
            onClick={() => {
              handleCancelWaiting();
              setActiveTab('pin');
            }}
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
          {/* TAB 1: INSTANT MOMO (theteller PIN PUSH - ZERO OTP) */}
          {activeTab === 'instant_momo' && (
            momoSuccess ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900">VIP Pass Activated!</h3>
                <p className="text-xs text-slate-600">
                  Your 30-day VIP pass is active. Loading your content...
                </p>
              </div>
            ) : isWaitingForPin ? (
              <div className="space-y-4 text-center py-4">
                <div className="relative mx-auto w-14 h-14 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-center justify-center text-amber-600 animate-pulse shadow-sm">
                  <Smartphone className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">Check Your Phone Now!</h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                    A payment prompt of <b className="text-slate-900">GH₵ {THETELLER_VIP_PRICE_GHS}</b> was sent to{' '}
                    <span className="font-mono font-semibold text-slate-900">{momoPhone}</span>.
                  </p>
                  <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200/80 rounded-lg p-2 mt-2 font-medium">
                    Enter your Mobile Money PIN on your phone to complete authorization.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                  <span>Waiting for PIN authorization ({pollCountdown}s)...</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 text-left">
                  <b>No prompt appeared?</b>
                  <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-[10px]">
                    <li><b>MTN:</b> Dial <code className="bg-slate-200 px-1 rounded">*170#</code> &gt; 6 (My Wallet) &gt; 3 (My Approvals)</li>
                    <li><b>Telecel:</b> Dial <code className="bg-slate-200 px-1 rounded">*110#</code> &gt; Check pending transactions</li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleCancelWaiting}
                  className="w-full py-2 px-3 text-xs text-slate-500 hover:text-slate-800 transition font-medium cursor-pointer"
                >
                  Cancel or try another number
                </button>
              </div>
            ) : (
              <form onSubmit={handleInitiateMomo} className="space-y-3.5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-slate-700">
                      Mobile Money Number
                    </label>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${networkInfo.bgLight}`}>
                      {networkInfo.name}
                    </span>
                  </div>

                  <input
                    type="tel"
                    value={momoPhone}
                    onChange={(e) => {
                      setMomoPhone(e.target.value);
                      setMomoError(null);
                    }}
                    placeholder="024 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                    autoFocus
                    required
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Supports <b>MTN MoMo</b>, <b>Telecel Cash</b> & <b>AT Money</b>.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/70 text-emerald-950 text-[11px] flex items-start gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    <b>Instant PIN Push (No OTP):</b> When you tap below, your phone screen will light up asking for your Mobile Money PIN.
                  </p>
                </div>

                {momoError && (
                  <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100 flex flex-col gap-1.5">
                    <p>{momoError}</p>
                    {momoError.includes('not yet configured') && (
                      <button
                        type="button"
                        onClick={() => setActiveTab('direct_momo')}
                        className="text-slate-900 font-semibold underline text-[11px] text-left cursor-pointer"
                      >
                        Click here to use the Manual MoMo tab instead &rarr;
                      </button>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSendingPrompt}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white font-medium text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {isSendingPrompt ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending PIN Prompt to Phone...
                    </>
                  ) : (
                    `Send PIN Prompt (GH₵ ${THETELLER_VIP_PRICE_GHS})`
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-0.5">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Secured by Theteller (PaySwitch Ghana)</span>
                </div>
              </form>
            )
          )}

          {/* TAB 2: MANUAL MOMO TRANSFER (DIRECT TO EMMANUEL) */}
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

                <p className="text-[11px] text-slate-600 leading-relaxed bg-amber-50/70 border border-amber-200/70 rounded-xl px-3 py-2">
                  <b className="text-amber-900 font-semibold">Pay before entering your number:</b> Transfer GH₵ 25 to the number above via *170# first. VIP activates immediately upon submitting.
                </p>

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
