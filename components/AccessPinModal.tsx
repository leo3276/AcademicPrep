'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { 
  KeyRound, 
  Lock, 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

interface AccessPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
  onSuccess?: () => void;
}

export default function AccessPinModal({
  isOpen,
  onClose,
  featureName = 'This Premium Resource',
  onSuccess
}: AccessPinModalProps) {
  const { student, redeemPin } = useAuth();
  const [pinCode, setPinCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinCode.trim()) return;

    setLoading(true);
    setFeedback(null);
    try {
      const res = await redeemPin(pinCode.trim());
      setFeedback(res);
      if (res.success) {
        setPinCode('');
        setTimeout(() => {
          onSuccess?.();
          onClose();
        }, 800);
      }
    } catch (err: any) {
      setFeedback({ success: false, message: err?.message || 'Failed to redeem PIN' });
    } finally {
      setLoading(false);
    }
  };

  const handleInstantDemoUnlock = async () => {
    setLoading(true);
    setFeedback(null);
    try {
      const res = await redeemPin('PREP-8842-9901');
      setFeedback(res);
      if (res.success) {
        setTimeout(() => {
          onSuccess?.();
          onClose();
        }, 800);
      }
    } catch (err: any) {
      setFeedback({ success: false, message: err?.message || 'Failed to activate demo pass' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <Lock className="w-3 h-3 text-amber-600" />
            <span>VIP Access Pass Required</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Unlock {featureName}
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            This section is reserved for students with an active VIP Access Pass. Your free account allows completing up to 3 curriculum topics.
          </p>
        </div>

        {/* PIN Redemption Form */}
        <form onSubmit={handleRedeem} className="space-y-3">
          <label className="block text-xs font-semibold text-slate-800">
            Enter 12-Digit Access PIN
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="PREP-XXXX-XXXX"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value.toUpperCase())}
              disabled={loading}
              className="flex-1 px-3.5 py-2.5 text-xs font-mono uppercase border border-slate-300 rounded-xl bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
            />
            <button
              type="submit"
              disabled={loading || !pinCode.trim()}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs transition flex items-center gap-1.5 whitespace-nowrap"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <KeyRound className="w-3.5 h-3.5" />
              )}
              <span>Activate</span>
            </button>
          </div>

          {feedback && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                feedback.success
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  : 'bg-rose-50 text-rose-900 border border-rose-200'
              }`}
            >
              {feedback.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}
        </form>

        {/* How to Buy Box */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-800">Need a VIP Access PIN?</span>
            <span className="text-[11px] font-bold text-amber-700 font-mono bg-amber-100/70 px-2 py-0.5 rounded">
              GHS 25 / 30 Days
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Pay via Mobile Money to get immediate unrestricted access to all 9 subjects, BECE past papers (2008–2026), trial mocks, and weekly exams.
          </p>
          <div className="font-mono text-[11px] text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 space-y-0.5">
            <p><b>MTN MoMo / Telecel:</b> 024 123 4567</p>
            <p><b>Account:</b> AcademicPrep Ghana</p>
            <p><b>Reference:</b> {student?.phoneNumber || 'Your Phone Number'}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1 border-t border-slate-100">
          <button
            type="button"
            onClick={handleInstantDemoUnlock}
            disabled={loading}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>Simulate Instant Purchase (Demo PIN)</span>
          </button>

          <div className="flex items-center justify-between text-xs pt-1">
            <Link
              href="/jhs/profile"
              onClick={onClose}
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              <span>View Profile & Status</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-500 hover:text-slate-800 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
