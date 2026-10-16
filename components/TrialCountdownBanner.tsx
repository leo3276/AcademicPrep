'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/authContext';
import { Clock, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

function calculateTimeLeft(expiresAt: string | null, daysFallback: number): TimeLeft {
  if (!expiresAt) {
    return {
      days: daysFallback,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: daysFallback <= 0,
    };
  }

  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
}

interface TrialCountdownBannerProps {
  variant?: 'full' | 'compact' | 'card';
  title?: string;
  subtitle?: string;
}

export default function TrialCountdownBanner({
  variant = 'full',
  title,
  subtitle,
}: TrialCountdownBannerProps) {
  const { isTrialActive, trialDaysRemaining, trialExpiresAt } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: trialDaysRemaining,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(trialExpiresAt, trialDaysRemaining));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(trialExpiresAt, trialDaysRemaining));
    }, 1000);

    return () => clearInterval(interval);
  }, [trialExpiresAt, trialDaysRemaining]);

  if (!mounted || !isTrialActive || timeLeft.isExpired) {
    return null;
  }

  const progressPercent = Math.max(0, Math.min(100, Math.round(((30 - timeLeft.days) / 30) * 100)));

  // Compact Variant (e.g. For JHS / SHS sidebars or compact headers)
  if (variant === 'compact') {
    return (
      <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs space-y-1.5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-900">Free Trial Active</span>
          </div>
          <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
            {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s left
          </span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Zero payment required. All curriculum topics and quizzes are 100% unlocked.
        </p>
      </div>
    );
  }

  // Card Variant (e.g. Inside Profile Access tab)
  if (variant === 'card') {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h3 className="text-sm font-bold text-slate-900">
                {title || '30-Day Free Trial'}
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              {subtitle || 'Full unrestricted access unlocked with zero payment required.'}
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0">
            {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s left
          </div>
        </div>

        {/* Progress Bar of Trial */}
        <div className="space-y-1 pt-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Day {Math.max(1, 30 - timeLeft.days)} of 30</span>
            <span>{timeLeft.days} days remaining</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-slate-900 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${100 - progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Full Banner Variant (Clean, Minimal, Light Card)
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold text-slate-900">
              {title || '30-Day Free Trial Active'}
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
            {subtitle || 'All curriculum topics, worked examples, past papers, and timetables are 100% unlocked with zero payment.'}
          </p>
        </div>

        {/* Minimal live countdown */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 font-mono text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-xl">
          <span>{timeLeft.days}d</span>
          <span className="text-slate-400">:</span>
          <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
          <span className="text-slate-400">:</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
          <span className="text-slate-400">:</span>
          <span className="text-slate-900">{String(timeLeft.seconds).padStart(2, '0')}s</span>
        </div>
      </div>
    </div>
  );
}
