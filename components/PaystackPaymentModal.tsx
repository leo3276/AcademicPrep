'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  Loader2,
  ArrowRight,
  Smartphone,
  AlertCircle,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import { PRICING_PLANS, PricingPlan } from '@/lib/momoConfig';
import { getSessionToken } from '@/lib/apiClient';
import { EducationLevel } from '@/lib/types';

interface PaystackPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (reference: string) => void;
  initialView?: 'momo_transfer' | 'redeem_pin';
  defaultTab?: 'momo' | 'pin' | string;
  featureName?: string;
}

type MomoNetworkOption = {
  id: 'mtn' | 'vod' | 'atl';
  label: string;
  sub: string;
};

const NETWORKS: MomoNetworkOption[] = [
  { id: 'mtn', label: 'MTN MoMo', sub: '024 / 054 / 055 / 059' },
  { id: 'vod', label: 'Telecel', sub: '020 / 050' },
  { id: 'atl', label: 'AirtelTigo', sub: '027 / 057 / 026' },
];

function detectNetworkFromPhone(phone: string): 'mtn' | 'vod' | 'atl' {
  const digits = phone.replace(/\D/g, '');
  if (/^0(20|50)/.test(digits)) return 'vod';
  if (/^0(26|56|27|57)/.test(digits)) return 'atl';
  return 'mtn';
}

const POLL_INTERVAL_MS = 3000;
const TIMEOUT_SECONDS = 150; // 2.5 minutes

export default function PaystackPaymentModal({
  isOpen,
  onClose,
  onSuccess,
  featureName,
}: PaystackPaymentModalProps) {
  const { student, signInStudent, registerStudent, refreshStudent } = useAuth();

  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(PRICING_PLANS[0]);
  const [network, setNetwork] = useState<'mtn' | 'vod' | 'atl'>('mtn');
  const [momoPhone, setMomoPhone] = useState(student?.phoneNumber || '');

  // Inline quick auth state when student is not signed in yet
  const [authMode, setAuthMode] = useState<'signin' | 'register'>('signin');
  const [authPhone, setAuthPhone] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authLevel, setAuthLevel] = useState<EducationLevel>('JHS 3');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Payment flow state
  const [stage, setStage] = useState<'form' | 'send_otp' | 'waiting_pin' | 'success' | 'failed'>('form');
  const [reference, setReference] = useState('');
  const [promptMessage, setPromptMessage] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TIMEOUT_SECONDS);
  const [error, setError] = useState('');

  useEffect(() => {
    if (student?.phoneNumber && !momoPhone) {
      setMomoPhone(student.phoneNumber);
      setNetwork(detectNetworkFromPhone(student.phoneNumber));
    }
  }, [student, momoPhone]);

  useEffect(() => {
    if (isOpen) {
      setStage('form');
      setReference('');
      setPromptMessage('');
      setOtpInput('');
      setError('');
      setSecondsLeft(TIMEOUT_SECONDS);
    }
  }, [isOpen]);

  // Poll payment status every 3 seconds while waiting for MoMo PIN approval
  useEffect(() => {
    if (!isOpen || stage !== 'waiting_pin' || !reference) return;

    let cancelled = false;
    const startedAt = Date.now();

    const countdownInterval = setInterval(() => {
      const elapsedSec = Math.floor((Date.now() - startedAt) / 1000);
      const remaining = Math.max(0, TIMEOUT_SECONDS - elapsedSec);
      setSecondsLeft(remaining);
    }, 1000);

    const pollStatus = async (isTimeoutCheck = false) => {
      try {
        const token = getSessionToken();
        const url = `/api/paystack/status?reference=${encodeURIComponent(reference)}${
          isTimeoutCheck ? '&timeout=1' : ''
        }`;
        const res = await fetch(url, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          cache: 'no-store',
        });
        const data = await res.json().catch(() => null);
        if (cancelled || !data) return;

        if (data.status === 'success') {
          await refreshStudent();
          if (!cancelled) {
            setStage('success');
            if (onSuccess) onSuccess(reference);
          }
          return;
        }

        if (data.status === 'failed' || data.status === 'expired') {
          if (!cancelled) {
            setError(
              data.failureReason ||
                (data.status === 'expired'
                  ? 'Payment timed out before MoMo PIN approval. Please try again.'
                  : 'Payment was declined or cancelled.')
            );
            setStage('failed');
          }
        }
      } catch {
        // Keep polling until timeout
      }
    };

    const pollInterval = setInterval(() => {
      const elapsedMs = Date.now() - startedAt;
      if (elapsedMs >= TIMEOUT_SECONDS * 1000) {
        clearInterval(pollInterval);
        void pollStatus(true);
      } else {
        void pollStatus(false);
      }
    }, POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      clearInterval(pollInterval);
      clearInterval(countdownInterval);
    };
  }, [isOpen, stage, reference, refreshStudent, onSuccess]);

  if (!isOpen) return null;

  const handleQuickAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const cleanPhone = authPhone.trim().replace(/\s+/g, '');
    if (!/^0[235]\d{8}$/.test(cleanPhone)) {
      setError('Enter a valid 10-digit Ghana phone number (e.g. 0241234567).');
      return;
    }
    if (!authPassword.trim() || authPassword.trim().length < 4) {
      setError('Enter your password or 4-digit PIN.');
      return;
    }

    setIsAuthenticating(true);
    try {
      if (authMode === 'signin') {
        const res = await signInStudent(cleanPhone, authPassword.trim());
        if (!res.success) {
          setError(res.error || 'Incorrect phone number or password.');
          return;
        }
      } else {
        if (!authName.trim()) {
          setError('Please enter your full name.');
          return;
        }
        const res = await registerStudent({
          phoneNumber: cleanPhone,
          fullName: authName.trim(),
          currentLevel: authLevel,
          password: authPassword.trim(),
        });
        if (!res.success) {
          setError(res.error || 'Could not create account.');
          return;
        }
      }
      setMomoPhone(cleanPhone);
      setNetwork(detectNetworkFromPhone(cleanPhone));
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleStartCharge = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanMomo = momoPhone.trim().replace(/\s+/g, '');
    if (!/^0[235]\d{8}$/.test(cleanMomo)) {
      setError('Enter a valid 10-digit Ghana Mobile Money number (e.g. 0241234567).');
      return;
    }

    const token = getSessionToken();
    if (!student || !token) {
      setError('Please sign in to your account first.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/paystack/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone: cleanMomo,
          network,
          planId: selectedPlan.id,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        setError(data?.message || 'Could not initiate Mobile Money prompt. Please try again.');
        return;
      }

      setReference(data.reference);
      setPromptMessage(
        data.message || 'Check your phone and enter your MoMo PIN to approve the payment.'
      );
      setSecondsLeft(TIMEOUT_SECONDS);

      if (data.status === 'send_otp') {
        setStage('send_otp');
      } else {
        setStage('waiting_pin');
      }
    } catch {
      setError('Network error starting Mobile Money charge. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const cleanOtp = otpInput.trim().replace(/\s+/g, '');
    if (!cleanOtp) {
      setError('Please enter the OTP code sent to your phone.');
      return;
    }

    const token = getSessionToken();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/paystack/submit-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          reference,
          otp: cleanOtp,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        setError(data?.message || 'Invalid OTP. Please check and try again.');
        return;
      }

      setPromptMessage(
        data.message || 'Check your phone and enter your MoMo PIN to complete payment.'
      );
      setSecondsLeft(TIMEOUT_SECONDS);
      setStage('waiting_pin');
    } catch {
      setError('Network error submitting OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 overflow-y-auto">
      <div
        className="relative w-full max-w-md rounded-2xl bg-white border border-neutral-200/90 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-neutral-100 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              {featureName || 'AcademicPrep Pass'}
            </p>
            <h2 className="text-lg font-semibold text-neutral-950 tracking-tight mt-0.5">
              Unlock Full Access
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {stage === 'success' ? (
            <div className="py-4 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-neutral-950">
                  Pass Unlocked ({selectedPlan.label})
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
                  Your Mobile Money payment is confirmed. Full access is now active across all curriculum topics, past questions, trial mocks, weekly exams, and study tools.
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs transition cursor-pointer"
              >
                Continue Studying
              </button>
            </div>
          ) : stage === 'waiting_pin' ? (
            <div className="py-4 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mx-auto">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-neutral-950">
                  Check your phone and enter your MoMo PIN
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
                  {promptMessage ||
                    `A payment prompt for GH₵ ${selectedPlan.amountGhs} has been sent to ${momoPhone}. Enter your Mobile Money PIN on your phone to unlock immediately.`}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-[11px] text-neutral-600 space-y-1">
                <p className="font-medium text-neutral-900">
                  Waiting for confirmation • {formatTimer(secondsLeft)}
                </p>
                <p className="text-neutral-500">
                  {network === 'mtn'
                    ? 'Didn’t see the popup? Dial *170# → Option 6 (My Wallet) → Option 3 (My Approvals).'
                    : 'Approve the Mobile Money prompt on your handset to complete payment.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStage('form');
                  setError('');
                }}
                className="w-full py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition cursor-pointer"
              >
                Cancel or change number
              </button>
            </div>
          ) : stage === 'send_otp' ? (
            <form onSubmit={handleSubmitOtp} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-neutral-950">
                  Enter Verification Code
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {promptMessage || `Enter the verification code sent to ${momoPhone} to trigger your MoMo PIN prompt.`}
                </p>
              </div>

              <input
                type="text"
                inputMode="numeric"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                placeholder="Enter code sent via SMS"
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-mono tracking-widest text-center text-neutral-950 focus:outline-none focus:border-neutral-900 focus:bg-white transition"
                required
              />

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-300 text-white font-medium text-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <span>Continue to MoMo PIN Prompt</span>
                )}
              </button>
            </form>
          ) : stage === 'failed' ? (
            <div className="py-4 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-neutral-950">
                  Payment Not Completed
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
                  {error || 'The Mobile Money prompt was not approved in time.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setError('');
                  setStage('form');
                }}
                className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          ) : !student ? (
            /* Step 0: Require Authentication First */
            <form onSubmit={handleQuickAuth} className="space-y-4">
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-2.5 text-xs text-neutral-700">
                <Lock className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Sign in or create your student account first so your pass is linked to you.</span>
              </div>

              <div className="grid grid-cols-2 p-1 rounded-xl bg-neutral-100 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signin');
                    setError('');
                  }}
                  className={`py-2 rounded-lg transition cursor-pointer ${
                    authMode === 'signin'
                      ? 'bg-white text-neutral-950 shadow-2xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('register');
                    setError('');
                  }}
                  className={`py-2 rounded-lg transition cursor-pointer ${
                    authMode === 'register'
                      ? 'bg-white text-neutral-950 shadow-2xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {authMode === 'register' && (
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-neutral-600">Full Name</label>
                  <input
                    type="text"
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-950 focus:outline-none focus:border-neutral-900 focus:bg-white transition"
                    required
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-neutral-600">
                  Student Phone Number
                </label>
                <input
                  type="tel"
                  value={authPhone}
                  onChange={(e) => setAuthPhone(e.target.value)}
                  placeholder="e.g. 0241234567"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-950 focus:outline-none focus:border-neutral-900 focus:bg-white transition"
                  required
                />
              </div>

              {authMode === 'register' && (
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-neutral-600">Class Level</label>
                  <select
                    value={authLevel}
                    onChange={(e) => setAuthLevel(e.target.value as EducationLevel)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-950 focus:outline-none focus:border-neutral-900 focus:bg-white transition"
                  >
                    <option value="JHS 1">JHS 1</option>
                    <option value="JHS 2">JHS 2</option>
                    <option value="JHS 3">JHS 3 (BECE)</option>
                    <option value="SHS 1">SHS 1</option>
                    <option value="SHS 2">SHS 2</option>
                    <option value="SHS 3">SHS 3 (WASSCE)</option>
                    <option value="UNIVERSITY">University</option>
                  </select>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-neutral-600">
                  Password or 4-Digit PIN
                </label>
                <input
                  type="password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="Enter password / PIN"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-950 focus:outline-none focus:border-neutral-900 focus:bg-white transition"
                  required
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isAuthenticating}
                className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-300 text-white font-medium text-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {isAuthenticating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Mobile Money Payment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Authenticated Direct MoMo Charge Form */
            <form onSubmit={handleStartCharge} className="space-y-4">
              {/* 1. Plan Picker */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-500">
                  1. Choose Pass
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PLANS.map((plan) => {
                    const isSelected = selectedPlan.id === plan.id;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan)}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-neutral-950 bg-neutral-950 text-white'
                            : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-medium ${
                              isSelected ? 'text-neutral-300' : 'text-neutral-500'
                            }`}
                          >
                            {plan.id === 'monthly'
                              ? 'Monthly'
                              : plan.id === 'term'
                              ? 'Term'
                              : 'Annual'}
                          </span>
                          {plan.recommended && (
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                                isSelected
                                  ? 'bg-white/15 text-white'
                                  : 'bg-neutral-100 text-neutral-700'
                              }`}
                            >
                              Best
                            </span>
                          )}
                        </div>
                        <div className="mt-1.5">
                          <span className="text-sm font-semibold tracking-tight block">
                            GH₵ {plan.amountGhs}
                          </span>
                          <span
                            className={`text-[10px] block mt-0.5 ${
                              isSelected ? 'text-neutral-300' : 'text-neutral-400'
                            }`}
                          >
                            {plan.validityDays} days
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Network Picker */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-500">
                  2. Select Mobile Money Network
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {NETWORKS.map((net) => {
                    const isSelected = network === net.id;
                    return (
                      <button
                        key={net.id}
                        type="button"
                        onClick={() => setNetwork(net.id)}
                        className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                          isSelected
                            ? 'border-neutral-950 bg-neutral-100 text-neutral-950 font-semibold'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                        }`}
                      >
                        <span className="text-xs block">{net.label}</span>
                        <span className="text-[10px] text-neutral-400 font-normal block mt-0.5">
                          {net.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. MoMo Phone Number */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-500">
                  3. Mobile Money Phone Number
                </label>
                <input
                  type="tel"
                  value={momoPhone}
                  onChange={(e) => {
                    const val = e.target.value;
                    setMomoPhone(val);
                    if (val.replace(/\D/g, '').length >= 3) {
                      setNetwork(detectNetworkFromPhone(val));
                    }
                  }}
                  placeholder="e.g. 0241234567"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-950 focus:outline-none focus:border-neutral-900 focus:bg-white transition"
                  required
                />
              </div>

              {/* Summary Row */}
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-medium text-neutral-900 block">
                    {selectedPlan.label} ({selectedPlan.validityDays} days)
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Account: {student.fullName} ({student.phoneNumber})
                  </span>
                </div>
                <span className="text-sm font-semibold text-neutral-950 font-mono">
                  GH₵ {selectedPlan.amountGhs}
                </span>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-300 text-white font-medium text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending MoMo Prompt...</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="w-4 h-4" />
                    <span>Pay GH₵ {selectedPlan.amountGhs}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-neutral-400 text-center">
                You will receive a prompt on your phone to enter your MoMo PIN.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
