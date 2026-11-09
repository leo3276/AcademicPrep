'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Lock, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import {
  OFFICIAL_MOMO_DETAILS,
  PRICING_PLANS,
  PricingPlan,
  validateMomoTransactionId,
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
  const { student, loginStudent, redeemPin, refreshStudent } = useAuth();

  const [mode, setMode] = useState<'momo' | 'pin'>(
    initialView === 'redeem_pin' || defaultTab === 'pin' ? 'pin' : 'momo'
  );
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(PRICING_PLANS[1]); // Default to Term Pass (GH₵ 75)
  const [phone, setPhone] = useState(student?.phoneNumber || '');
  const [fullName, setFullName] = useState(student?.fullName || '');
  const [level, setLevel] = useState<EducationLevel>(student?.currentLevel || 'JHS 3');
  const [transactionId, setTransactionId] = useState('');
  const [pinInput, setPinInput] = useState('');

  const [copiedNumber, setCopiedNumber] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (student?.phoneNumber && !phone) setPhone(student.phoneNumber);
    if (student?.fullName && !fullName) setFullName(student.fullName);
    if (student?.currentLevel) setLevel(student.currentLevel);
  }, [student, phone, fullName]);

  useEffect(() => {
    if (isOpen) {
      setMode(initialView === 'redeem_pin' ? 'pin' : 'momo');
      setError('');
      setCompleted(false);
    }
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(OFFICIAL_MOMO_DETAILS.number);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleMomoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanPhone = phone.replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Enter the 10-digit phone number for your student account.');
      return;
    }

    const txCheck = validateMomoTransactionId(transactionId);
    if (!txCheck.valid) {
      setError(txCheck.error || 'Enter a valid Mobile Money Transaction ID.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Ensure student is signed in or registered first if not currently authenticated
      if (!student) {
        const resolvedName = fullName.trim() || `Student ${cleanPhone.slice(-4)}`;
        const authRes = await loginStudent(cleanPhone, resolvedName, level);
        if (!authRes.success) {
          setError(
            authRes.error ||
              'Could not verify your student account. Please sign in first, then submit your Transaction ID.'
          );
          setIsSubmitting(false);
          return;
        }
      }

      const res = await fetch('/api/momo/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentPhone: cleanPhone,
          studentName: student?.fullName || fullName.trim() || `Student ${cleanPhone.slice(-4)}`,
          senderPhone: cleanPhone,
          transactionId: txCheck.cleanedId,
          amountGhs: selectedPlan.amountGhs,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Could not verify this Transaction ID. Please check and try again.');
        setIsSubmitting(false);
        return;
      }

      await refreshStudent();
      setCompleted(true);
      if (onSuccess) onSuccess(txCheck.cleanedId);
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
      setError('Enter a valid 10-character access PIN.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (!student) {
        const cleanPhone = phone.replace(/\s+/g, '');
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-md p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-[460px] bg-white rounded-t-[28px] sm:rounded-[24px] border border-black/[0.08] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.22)] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimalist Apple Header */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-black/[0.06]">
          <div>
            <h2 className="text-[19px] font-semibold tracking-tight text-[#1D1D1F]">
              {completed
                ? 'Access Activated'
                : mode === 'momo'
                ? 'Unlock Full Pass'
                : 'Redeem Access PIN'}
            </h2>
            <p className="text-[13px] text-[#86868B] mt-0.5">
              {completed
                ? 'Your account now has full curriculum and exam access.'
                : 'All topics, past questions, mocks, timetable & AI study tools.'}
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
              <div className="w-14 h-14 rounded-full bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center mx-auto text-[#1D1D1F]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[17px] font-semibold text-[#1D1D1F]">
                  {selectedPlan.label} Active
                </h3>
                <p className="text-[13px] text-[#86868B] max-w-xs mx-auto leading-relaxed">
                  Your pass has been enabled immediately. Our team will verify your Mobile Money
                  Transaction ID in the background.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-12 rounded-[14px] bg-[#1D1D1F] hover:bg-black text-white text-[15px] font-medium transition-all active:scale-[0.99]"
              >
                Continue Studying
              </button>
            </div>
          ) : mode === 'momo' ? (
            <form onSubmit={handleMomoSubmit} className="space-y-5">
              {/* 1. Plan Selector */}
              <div className="space-y-2">
                <label className="block text-[12px] font-medium text-[#86868B] uppercase tracking-wider">
                  1. Choose Pass
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PLANS.map((plan) => {
                    const active = selectedPlan.id === plan.id;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan)}
                        className={`relative text-left p-3 rounded-[14px] border transition-all ${
                          active
                            ? 'border-[#1D1D1F] bg-[#1D1D1F] text-white shadow-sm'
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
              <div className="space-y-2">
                <label className="block text-[12px] font-medium text-[#86868B] uppercase tracking-wider">
                  2. Send GH₵ {selectedPlan.amountGhs}.00 via MTN MoMo
                </label>
                <div className="rounded-[16px] bg-[#F5F5F7] border border-black/[0.06] p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#86868B] font-medium">
                        {OFFICIAL_MOMO_DETAILS.network}
                      </div>
                      <div className="text-[20px] font-semibold tracking-tight text-[#1D1D1F] font-mono mt-0.5">
                        {OFFICIAL_MOMO_DETAILS.number}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className="h-9 px-3.5 rounded-[10px] bg-white border border-black/[0.08] hover:border-black/20 text-[13px] font-medium text-[#1D1D1F] flex items-center gap-1.5 transition-all active:scale-[0.98]"
                    >
                      {copiedNumber ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#86868B]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between text-[12px]">
                    <span className="text-[#86868B]">Recipient Name</span>
                    <span className="font-medium text-[#1D1D1F]">{OFFICIAL_MOMO_DETAILS.name}</span>
                  </div>
                </div>
              </div>

              {/* 3. Paste Transaction ID */}
              <div className="space-y-3">
                <label className="block text-[12px] font-medium text-[#86868B] uppercase tracking-wider">
                  3. Verify Payment
                </label>

                {!student && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      required
                      className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] text-[#1D1D1F] placeholder:text-[#86868B]"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Account Phone (024...)"
                      required
                      className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] text-[#1D1D1F] placeholder:text-[#86868B]"
                    />
                  </div>
                )}

                {student && (
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.06] text-[13px]">
                    <span className="text-[#86868B]">Account</span>
                    <span className="font-medium text-[#1D1D1F]">
                      {student.fullName} ({student.phoneNumber})
                    </span>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Paste MoMo Transaction ID (e.g. 42918402918)"
                    required
                    className="w-full h-12 px-4 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] font-mono text-[#1D1D1F] placeholder:font-sans placeholder:text-[#86868B] transition-colors"
                  />
                  <p className="text-[11.5px] text-[#86868B] mt-1.5 leading-snug">
                    Access is granted immediately upon valid Transaction ID submission. Unreceived
                    transfers are automatically revoked during admin reconciliation.
                  </p>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-[12px] bg-red-50 border border-red-200/80 text-[13px] text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-[14px] bg-[#1D1D1F] hover:bg-black disabled:opacity-50 text-white text-[15px] font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying Transaction ID...</span>
                  </>
                ) : (
                  <>
                    <span>Activate {selectedPlan.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setMode('pin');
                  }}
                  className="text-[12.5px] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                >
                  Already have a 10-digit Access PIN? Redeem here
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
                    placeholder="Phone Number (024...)"
                    required
                    className="w-full h-11 px-3.5 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[14px] text-[#1D1D1F]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[12px] font-medium text-[#86868B] uppercase tracking-wider mb-1.5">
                  Access PIN
                </label>
                <input
                  type="text"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  placeholder="XXXX-XXXX-XX"
                  maxLength={14}
                  required
                  className="w-full h-12 px-4 rounded-[12px] bg-[#FAFAFC] border border-black/[0.12] focus:border-[#1D1D1F] focus:bg-white focus:outline-none text-[16px] font-mono tracking-widest text-center text-[#1D1D1F] uppercase"
                />
              </div>

              {error && (
                <div className="p-3 rounded-[12px] bg-red-50 border border-red-200/80 text-[13px] text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-[14px] bg-[#1D1D1F] hover:bg-black disabled:opacity-50 text-white text-[15px] font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Redeeming...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Unlock Full Access</span>
                  </>
                )}
              </button>

              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setMode('momo');
                  }}
                  className="text-[12.5px] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                >
                  Back to Mobile Money payment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
