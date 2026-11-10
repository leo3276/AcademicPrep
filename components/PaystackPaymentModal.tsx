'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  ShieldCheck,
  Loader2,
  ArrowRight,
  Clock,
  MessageCircle,
  RefreshCw,
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import {
  OFFICIAL_MOMO_DETAILS,
  PRICING_PLANS,
  PricingPlan,
} from '@/lib/momoConfig';
import { EducationLevel } from '@/lib/types';

interface PaystackPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (pinCode: string) => void;
  initialView?: 'momo_transfer' | 'redeem_pin';
  defaultTab?: 'momo' | 'pin' | string;
  featureName?: string;
}

export default function PaystackPaymentModal({
  isOpen,
  onClose,
  onSuccess,
  initialView = 'momo_transfer',
  defaultTab,
}: PaystackPaymentModalProps) {
  const { student, hasFullAccess, loginStudent, redeemPin, refreshStudent } = useAuth();

  const [mode, setMode] = useState<'momo' | 'pin'>(
    initialView === 'redeem_pin' || defaultTab === 'pin' ? 'pin' : 'momo'
  );
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(PRICING_PLANS[0]); // Default to Monthly Pass (GH₵ 30) for kids
  const [phone, setPhone] = useState(student?.phoneNumber || '');
  const [senderPhone, setSenderPhone] = useState(student?.phoneNumber || '');
  const [fullName, setFullName] = useState(student?.fullName || '');
  const [level, setLevel] = useState<EducationLevel>(student?.currentLevel || 'JHS 3');
  const [pinInput, setPinInput] = useState('');

  const [copiedNumber, setCopiedNumber] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [error, setError] = useState('');
  const [awaitingApproval, setAwaitingApproval] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (student?.phoneNumber) {
      if (!phone) setPhone(student.phoneNumber);
      if (!senderPhone) setSenderPhone(student.phoneNumber);
    }
    if (student?.fullName && !fullName) setFullName(student.fullName);
    if (student?.currentLevel) setLevel(student.currentLevel);
  }, [student, phone, senderPhone, fullName]);

  useEffect(() => {
    if (isOpen) {
      setMode(initialView === 'redeem_pin' || defaultTab === 'pin' ? 'pin' : 'momo');
      setError('');
      setCompleted(false);
    }
  }, [isOpen, initialView, defaultTab]);

  // Auto-check every 8 seconds while waiting for Admin confirmation
  useEffect(() => {
    if (!isOpen || !awaitingApproval || completed) return;
    const interval = setInterval(async () => {
      const updated = await refreshStudent();
      if (updated?.hasFullAccess && updated.accessType === 'Full Pass') {
        setAwaitingApproval(false);
        setCompleted(true);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isOpen, awaitingApproval, completed, refreshStudent]);

  useEffect(() => {
    if (awaitingApproval && hasFullAccess) {
      setAwaitingApproval(false);
      setCompleted(true);
    }
  }, [awaitingApproval, hasFullAccess]);

  if (!isOpen) return null;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(OFFICIAL_MOMO_DETAILS.number);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleCheckConfirmation = async () => {
    setIsCheckingStatus(true);
    setError('');
    try {
      const updated = await refreshStudent();
      if (updated?.hasFullAccess && updated.accessType === 'Full Pass') {
        setAwaitingApproval(false);
        setCompleted(true);
      } else {
        setError('Still awaiting Admin confirmation on MTN MoMo. Tap WhatsApp below for instant verification.');
      }
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const handleMomoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanStudentPhone = (student?.phoneNumber || phone).replace(/\D/g, '');
    const cleanSenderPhone = senderPhone.replace(/\D/g, '');

    if (!cleanStudentPhone || cleanStudentPhone.length < 10) {
      setError('Please enter your 10-digit student phone number (e.g. 0241234567).');
      return;
    }

    if (!cleanSenderPhone || !/^0[235]\d{8}$/.test(cleanSenderPhone)) {
      setError('Please enter the 10-digit MoMo number used to send the money (e.g. 0241234567).');
      return;
    }

    setIsSubmitting(true);
    try {
      if (!student) {
        const resolvedName = fullName.trim() || `Student ${cleanStudentPhone.slice(-4)}`;
        const authRes = await loginStudent(cleanStudentPhone, resolvedName, level);
        if (!authRes.success) {
          setError(
            authRes.error ||
              'Could not verify your student account. Please sign in first, then submit your payment.'
          );
          setIsSubmitting(false);
          return;
        }
      }

      const res = await fetch('/api/momo/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentPhone: cleanStudentPhone,
          studentName: student?.fullName || fullName.trim() || `Student ${cleanStudentPhone.slice(-4)}`,
          senderPhone: cleanSenderPhone,
          transactionId: `MOMO-${cleanSenderPhone}`,
          amountGhs: selectedPlan.amountGhs,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Could not submit your payment right now. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setAwaitingApproval(true);
      if (onSuccess) onSuccess(`MOMO-${cleanSenderPhone}`);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanedPin = pinInput.trim().toUpperCase();
    if (cleanedPin.length < 6) {
      setError('Enter a valid access PIN code.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (!student) {
        const cleanPhone = phone.replace(/\D/g, '');
        if (!cleanPhone || cleanPhone.length < 10) {
          setError('Enter your 10-digit phone number.');
          setIsSubmitting(false);
          return;
        }
        const loginRes = await loginStudent(
          cleanPhone,
          fullName.trim() || `Student ${cleanPhone.slice(-4)}`,
          level,
          cleanedPin
        );
        if (!loginRes.success) {
          setError(loginRes.error || 'Invalid access PIN.');
          setIsSubmitting(false);
          return;
        }
      } else {
        const result = await redeemPin(cleanedPin);
        if (!result.success) {
          setError(result.message || 'Invalid or already used PIN.');
          setIsSubmitting(false);
          return;
        }
      }

      await refreshStudent();
      setCompleted(true);
      if (onSuccess) onSuccess(cleanedPin);
    } catch {
      setError('Could not verify access PIN right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cleanStudentPhoneForWa = (student?.phoneNumber || phone).replace(/\D/g, '');
  const cleanSenderPhoneForWa = senderPhone.replace(/\D/g, '');
  const adminWhatsAppUrl = `https://wa.me/233${OFFICIAL_MOMO_DETAILS.number.replace(/^0/, '')}?text=${encodeURIComponent(
    `Hello Admin, I just sent GH₵ ${selectedPlan.amountGhs} (${selectedPlan.label}) on MTN MoMo for AcademicPrep.\n\n• Student Name: ${student?.fullName || fullName || 'Student'}\n• Student Account Phone: ${cleanStudentPhoneForWa}\n• MoMo Number Used to Pay: ${cleanSenderPhoneForWa}\n\nPlease confirm and unlock my pass!`
  )}`;

  const parentShareWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Hi Mum/Dad, please help me pay GH₵ ${selectedPlan.amountGhs} (${selectedPlan.label}) for my AcademicPrep study account.\n\nMTN MoMo Number: ${OFFICIAL_MOMO_DETAILS.number}\nName: ${OFFICIAL_MOMO_DETAILS.name}\nAmount: GH₵ ${selectedPlan.amountGhs}\n\nAfter sending, let me know the MoMo number you used so I can enter it!`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-md p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-[450px] bg-white rounded-t-[28px] sm:rounded-[24px] border border-black/[0.08] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.22)] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimalist Apple Header */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-black/[0.06]">
          <div>
            <h2 className="text-[18px] font-semibold tracking-tight text-[#1D1D1F]">
              {completed
                ? 'Full Pass Unlocked'
                : awaitingApproval
                ? 'Confirming Your Payment'
                : mode === 'momo'
                ? 'Unlock Full Pass'
                : 'Redeem Access PIN'}
            </h2>
            <p className="text-[12.5px] text-[#86868B] mt-0.5">
              {completed
                ? 'All subjects, past papers, mocks & study tools are open.'
                : awaitingApproval
                ? 'Your pass unlocks as soon as Admin confirms your MoMo.'
                : 'Simple 2-step Mobile Money activation.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] flex items-center justify-center text-[#515154] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {completed ? (
            <div className="py-4 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[17px] font-semibold text-[#1D1D1F]">
                  {selectedPlan.label} Active
                </h3>
                <p className="text-[13px] text-[#86868B] max-w-xs mx-auto leading-relaxed">
                  Your payment has been confirmed and your account now has full access.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-11 rounded-[14px] bg-[#1D1D1F] hover:bg-black text-white text-[14px] font-medium transition-all active:scale-[0.99]"
              >
                Start Studying
              </button>
            </div>
          ) : awaitingApproval ? (
            <div className="py-2 space-y-4">
              <div className="p-4 rounded-[16px] bg-[#F5F5F7] border border-black/[0.06] text-center space-y-2.5">
                <div className="w-11 h-11 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center mx-auto text-[#1D1D1F]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[15px] font-semibold text-[#1D1D1F]">
                    Waiting for Admin Confirmation
                  </p>
                  <p className="text-[12.5px] text-[#86868B] leading-relaxed">
                    We received your request for <strong className="text-[#1D1D1F]">GH₵ {selectedPlan.amountGhs} ({selectedPlan.label})</strong> from MoMo number <strong className="font-mono text-[#1D1D1F]">{cleanSenderPhoneForWa}</strong>.
                  </p>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-[12px] bg-amber-50 border border-amber-200/80 text-[12px] text-amber-900 text-center">
                  {error}
                </div>
              )}

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleCheckConfirmation}
                  disabled={isCheckingStatus}
                  className="w-full h-11 rounded-[14px] bg-[#1D1D1F] hover:bg-black disabled:opacity-50 text-white text-[14px] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 ${isCheckingStatus ? 'animate-spin' : ''}`} />
                  <span>{isCheckingStatus ? 'Checking Status...' : 'Check If Confirmed'}</span>
                </button>

                <a
                  href={adminWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-[14px] bg-[#FAFAFC] hover:bg-[#F5F5F7] border border-black/[0.1] text-[#1D1D1F] text-[13.5px] font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Notify Admin on WhatsApp for Fast Unlock</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setAwaitingApproval(false);
                  setError('');
                }}
                className="w-full text-center text-[12px] text-[#86868B] hover:text-[#1D1D1F] pt-1"
              >
                ← Change MoMo number or plan
              </button>
            </div>
          ) : mode === 'momo' ? (
            <form onSubmit={handleMomoSubmit} className="space-y-4">
              {/* 1. Plan Selector */}
              <div className="space-y-1.5">
                <label className="block text-[11.5px] font-medium text-[#86868B] uppercase tracking-wider">
                  Step 1 • Choose Pass
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PLANS.map((plan) => {
                    const active = selectedPlan.id === plan.id;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan)}
                        className={`relative text-left p-3 rounded-[14px] border transition-all cursor-pointer ${
                          active
                            ? 'border-[#1D1D1F] bg-[#1D1D1F] text-white shadow-xs'
                            : 'border-black/[0.1] bg-[#FAFAFC] hover:border-black/25 text-[#1D1D1F]'
                        }`}
                      >
                        <div className="text-[11px] font-medium opacity-75">
                          {plan.id === 'monthly'
                            ? '30 Days'
                            : plan.id === 'term'
                            ? '90 Days'
                            : '1 Year'}
                        </div>
                        <div className="text-[17px] font-semibold tracking-tight mt-0.5">
                          GH₵ {plan.amountGhs}
                        </div>
                        <div
                          className={`text-[11px] mt-0.5 truncate ${
                            active ? 'text-white/80' : 'text-[#86868B]'
                          }`}
                        >
                          {plan.label.replace(' Pass', '')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Official MoMo Recipient Card */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11.5px] font-medium text-[#86868B] uppercase tracking-wider">
                    Step 2 • Send GH₵ {selectedPlan.amountGhs} on MTN MoMo
                  </label>
                  <a
                    href={parentShareWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11.5px] font-medium text-[#1D1D1F] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Ask Parent on WhatsApp</span>
                  </a>
                </div>
                <div className="rounded-[16px] bg-[#F5F5F7] border border-black/[0.06] p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#86868B] font-medium">
                        {OFFICIAL_MOMO_DETAILS.network} Number
                      </div>
                      <div className="text-[20px] font-semibold tracking-tight text-[#1D1D1F] font-mono mt-0.5">
                        {OFFICIAL_MOMO_DETAILS.number}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className="h-9 px-3.5 rounded-[10px] bg-white border border-black/[0.08] hover:border-black/20 text-[13px] font-medium text-[#1D1D1F] flex items-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      {copiedNumber ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#86868B]" />
                          <span>Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-[12px]">
                    <span className="text-[#86868B]">Name on MoMo</span>
                    <span className="font-semibold text-[#1D1D1F]">{OFFICIAL_MOMO_DETAILS.name}</span>
                  </div>
                </div>
              </div>

              {/* 3. Simple Kid-Friendly Phone Input (No 11-digit TxID required) */}
              <div className="space-y-2.5">
                <label className="block text-[11.5px] font-medium text-[#86868B] uppercase tracking-wider">
                  Step 3 • Enter MoMo Number Used to Pay
                </label>

                {!student && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[13.5px] text-[#1D1D1F] placeholder:text-[#86868B]"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Student Phone (024...)"
                      required
                      className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[13.5px] text-[#1D1D1F] placeholder:text-[#86868B]"
                    />
                  </div>
                )}

                <div>
                  <input
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="MoMo number that sent the money (e.g. 0241234567)"
                    required
                    className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] font-mono text-[#1D1D1F] placeholder:font-sans placeholder:text-[#86868B] transition-colors"
                  />
                  <p className="text-[11px] text-[#86868B] mt-1 leading-snug">
                    If your parent or guardian paid for you, enter their MoMo phone number here.
                  </p>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-[12px] bg-red-50 border border-red-200/80 text-[12.5px] text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-[14px] bg-[#1D1D1F] hover:bg-black disabled:opacity-50 text-white text-[14px] font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>I Have Sent GH₵ {selectedPlan.amountGhs}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-0.5 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setMode('pin');
                  }}
                  className="text-[12.5px] text-[#86868B] hover:text-[#1D1D1F] transition-colors cursor-pointer"
                >
                  Have a scratch-card Access PIN instead?
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handlePinSubmit} className="space-y-4">
              {!student && (
                <div className="space-y-2.5">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Full Name"
                    required
                    className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] text-[#1D1D1F]"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your 10-Digit Phone Number"
                    required
                    className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] text-[#1D1D1F]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[11.5px] font-medium text-[#86868B] uppercase tracking-wider mb-1.5">
                  Access PIN
                </label>
                <input
                  type="text"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  placeholder="Enter PIN Code"
                  required
                  className="w-full h-11 px-4 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[15px] font-mono tracking-wider uppercase text-[#1D1D1F]"
                />
              </div>

              {error && (
                <div className="p-3 rounded-[12px] bg-red-50 border border-red-200/80 text-[12.5px] text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-[14px] bg-[#1D1D1F] hover:bg-black disabled:opacity-50 text-white text-[14px] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Redeeming...</span>
                  </>
                ) : (
                  <span>Redeem Access PIN</span>
                )}
              </button>

              <div className="pt-0.5 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setMode('momo');
                  }}
                  className="text-[12.5px] text-[#86868B] hover:text-[#1D1D1F] transition-colors cursor-pointer"
                >
                  ← Back to Mobile Money transfer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
