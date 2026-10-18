'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  AlertTriangle, 
  ArrowRight, 
  Share2, 
  ShieldAlert, 
  FlaskConical, 
  CheckCircle2, 
  Sparkles,
  Play,
  Lock,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { 
  OFFICIAL_SCHEDULED_EXAM, 
  getScheduledExamStatus, 
  getScheduledExamAttempt 
} from '@/lib/scheduledWeeklyExam';

interface ScheduledExamBannerProps {
  variant?: 'full' | 'compact' | 'card';
  className?: string;
}

export default function ScheduledExamBanner({ variant = 'full', className = '' }: ScheduledExamBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeStatus, setTimeStatus] = useState(() => getScheduledExamStatus());
  const [pastAttempt, setPastAttempt] = useState<any>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setTimeStatus(getScheduledExamStatus());
      setPastAttempt(getScheduledExamAttempt());
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShareWhatsApp = () => {
    if (typeof window === 'undefined') return;
    const origin = window.location.origin;
    const text = `📢 *ACADEMICPREP JHS 3 SCIENCE WEEKLY EXAM* 🔬\n\n` +
      `*Subject:* Integrated Science (JHS 3)\n` +
      `*Topic:* Atomic Structure, Periodic Table & Chemical Bonding\n` +
      `*Time:* Today at 6:00 PM GMT Sharp!\n` +
      `*Structure:*\n` +
      `  • Paper 1: 30 Mins (Objectives - 40 Marks)\n` +
      `  • Paper 2: 1 Hour (WAEC Theory Section B - 60 Marks)\n\n` +
      `⚠️ *Proctoring Criteria:* Strict Anti-Cheat with 5-minute penalty lockout on tab switch. Exam timer never stops!\n\n` +
      `👉 *Examination Link:*\n${origin}/jhs/weekly-exam?mode=scheduled`;

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  if (!mounted) return null;

  const isCompleted = pastAttempt?.status === 'completed';
  const is5MinWarning = timeStatus.is5MinWarning;
  const isLive = timeStatus.isLive;

  // Compact variant for header bars
  if (variant === 'compact') {
    return (
      <div className={`p-3 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between gap-3 text-xs shadow-md border border-slate-800 ${className}`}>
        <div className="flex items-center gap-2.5 truncate">
          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
            isLive ? 'bg-emerald-400 animate-ping' : is5MinWarning ? 'bg-amber-400 animate-pulse' : 'bg-blue-400'
          }`} />
          <span className="font-bold text-white truncate">
            {is5MinWarning ? '⏰ STARTS IN 5 MINS:' : isLive ? '🟢 LIVE NOW:' : '🔒 6:00 PM EXAM:'} JHS 3 Science (Atomic Structure)
          </span>
          <span className="hidden md:inline text-slate-400">
            • 30m Objs + 1hr Theory
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[11px] text-amber-300 font-bold">
            {isLive ? 'OPEN NOW' : `${String(timeStatus.hoursUntilStart).padStart(2, '0')}:${String(timeStatus.minutesUntilStart).padStart(2, '0')}:${String(timeStatus.secondsUntilStart).padStart(2, '0')}`}
          </span>
          <Link
            href="/jhs/weekly-exam?mode=scheduled"
            className={`px-3 py-1 rounded-lg text-white font-semibold transition text-xs flex items-center gap-1 ${
              isLive ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-blue-600 hover:bg-blue-500'
            }`}
          >
            <span>{isLive ? 'Enter' : 'View'}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  // Full Rich WAEC Examination Banner
  return (
    <div className={`rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-7 shadow-xl border border-slate-800/80 ring-1 ring-white/10 relative overflow-hidden transition-all ${className}`}>
      
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Urgent 5-Minute Warning Bar (Only active between 5:55 PM and 6:00 PM) */}
      {is5MinWarning && (
        <div className="mb-4 -mt-1 p-3 rounded-2xl bg-amber-500/20 border-2 border-amber-400/60 text-amber-200 text-xs font-bold flex items-center justify-between gap-3 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span>FINAL COUNTDOWN: Examination hall opens in less than 5 minutes! Candidates, prepare your scrap sheet and pen.</span>
          </div>
          <span className="font-mono text-white bg-amber-600/40 px-2 py-0.5 rounded-md shrink-0">
            {timeStatus.minutesUntilStart}m {timeStatus.secondsUntilStart}s
          </span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        
        {/* Left: Metadata & Examination Curriculum Details */}
        <div className="space-y-3.5 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Status Badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase ${
              isLive
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : is5MinWarning
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                : 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full shrink-0 ${
                isLive ? 'bg-emerald-400 animate-ping' : is5MinWarning ? 'bg-amber-400 animate-ping' : 'bg-indigo-400'
              }`} />
              {isLive ? 'Live Exam Open (24-Hour Window)' : is5MinWarning ? 'Starts in 5 Minutes Sharp' : 'Official Scheduled Examination'}
            </span>

            {/* Subject Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
              <FlaskConical className="w-3.5 h-3.5 text-blue-400" />
              <span>JHS 3 Integrated Science</span>
            </span>

            {/* WAEC Rubric Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Standard WAEC Stanine Rubrics</span>
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Atomic Structure, Periodic Table & Chemical Bonding
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              Official timed weekly revision test. Structured sequential papers: <strong>30 minutes Paper 1 (Objectives)</strong> auto-transitioning into <strong>1 hour Paper 2 (WAEC Theory Section B)</strong>.
            </p>
          </div>

          {/* Anti-cheat Proctoring Note */}
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 max-w-xl">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong className="text-amber-300">Anti-Cheat Proctoring:</strong> Leaving or minimizing the exam window activates a <strong>5-minute penalty lockout</strong> before re-entry. The background exam clock continues running in real time.
            </span>
          </div>
        </div>

        {/* Right: Countdown Clock & Primary Actions */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-4 shrink-0">
          
          {/* Real-time Countdown Box */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center sm:text-right min-w-[230px] space-y-1.5 shadow-inner">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center justify-center sm:justify-end gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {isLive ? 'Exam Hall Window' : 'Scheduled Start: 6:00 PM GMT'}
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight">
              {isLive ? (
                <span className="text-emerald-400 flex items-center justify-center sm:justify-end gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  OPEN NOW
                </span>
              ) : (
                <span className={is5MinWarning ? 'text-amber-300 animate-pulse' : 'text-amber-400'}>
                  {String(timeStatus.hoursUntilStart).padStart(2, '0')}:
                  {String(timeStatus.minutesUntilStart).padStart(2, '0')}:
                  {String(timeStatus.secondsUntilStart).padStart(2, '0')}
                </span>
              )}
            </div>
            <div className="text-[10px] text-slate-400">
              {isLive ? 'Available for 24 Hours' : 'Locked for students until 6:00 PM Sharp'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition flex items-center justify-center gap-2 text-xs font-bold"
              title="Share exam criteria on WhatsApp"
            >
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>{copiedShare ? 'Shared!' : 'Share'}</span>
            </button>

            {isCompleted ? (
              <Link
                href="/jhs/weekly-exam?mode=scheduled"
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition shadow-md shadow-indigo-600/30"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>View Results ({pastAttempt.compositePercentage}%)</span>
              </Link>
            ) : isLive ? (
              <Link
                href="/jhs/weekly-exam?mode=scheduled"
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/30 animate-pulse"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Enter Examination Hall</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href="/jhs/weekly-exam?mode=scheduled"
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Hall Opens 6:00 PM (View Rules)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
