'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { Clock } from 'lucide-react';

export default function TrialCountdownBadge() {
  const { isTrialActive, trialDaysRemaining, trialExpiresAt, student } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: trialDaysRemaining,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    setMounted(true);

    const update = () => {
      if (!trialExpiresAt) {
        setTimeLeft({
          days: trialDaysRemaining,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: trialDaysRemaining <= 0,
        });
        return;
      }

      const diff = new Date(trialExpiresAt).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [trialExpiresAt, trialDaysRemaining]);

  if (!mounted || !isTrialActive || timeLeft.isExpired) {
    return null;
  }

  const isShs = Boolean(student?.currentLevel?.startsWith('SHS'));
  const profileUrl = isShs ? '/shs/profile' : '/jhs/profile';

  return (
    <Link
      href={profileUrl}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 text-xs font-medium transition shrink-0"
      title="30-Day Free Trial Active. All curriculum topics, quizzes and timetables are free."
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
      <span className="text-[11px] text-slate-500 hidden sm:inline">Trial:</span>
      <span className="font-mono text-xs font-semibold text-slate-900 flex items-center gap-1">
        <span>{timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m left</span>
      </span>
    </Link>
  );
}
