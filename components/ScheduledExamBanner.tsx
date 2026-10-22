'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  ArrowRight, 
  Share2, 
  ShieldAlert, 
  FlaskConical, 
  CheckCircle2, 
  Play,
  Lock,
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
      `*Time:* Today 6:00 PM – 12:00 AM GMT (Available until Midnight)\n` +
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
  const isEnded = timeStatus.isEnded;

  // Once the scheduled exam has concluded (isEnded), it leaves the home screen automatically
  if (isEnded) {
    return null;
  }

  // Minimalist Compact Variant
  if (variant === 'compact') {
    return (
      <div className={`p-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 flex items-center justify-between gap-3 text-xs shadow-xs ${className}`}>
        <div className="flex items-center gap-2.5 truncate">
          <span className={`w-2 h-2 rounded-full shrink-0 ${
            isLive ? 'bg-emerald-500' : is5MinWarning ? 'bg-amber-500 animate-pulse' : isEnded ? 'bg-slate-300' : 'bg-blue-500'
          }`} />
          <span className="font-semibold text-slate-900 truncate">
            {is5MinWarning ? 'Starts in 5m:' : isLive ? 'Live Exam (Until 12 AM):' : isEnded ? 'Exam Closed:' : '6:00 PM Exam:'} JHS 3 Science (Atomic Structure)
          </span>
          <span className="hidden md:inline text-slate-500">
            • 30m Objs + 1hr Theory
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[11px] text-slate-600 font-semibold">
            {isLive ? 'OPEN NOW' : isEnded ? 'CLOSED' : `${String(timeStatus.hoursUntilStart).padStart(2, '0')}:${String(timeStatus.minutesUntilStart).padStart(2, '0')}:${String(timeStatus.secondsUntilStart).padStart(2, '0')}`}
          </span>
          <Link
            href="/jhs/weekly-exam?mode=scheduled"
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 ${
              isLive ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <span>{isLive ? 'Enter' : isEnded ? 'Results' : 'View'}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  // Minimalist Full Banner
  return (
    <div className={`rounded-2xl bg-white border border-slate-200/90 text-slate-900 p-5 sm:p-6 shadow-xs relative transition-all ${className}`}>
      
      {/* 5-Minute Countdown Warning (Active only 5:55 PM - 6:00 PM) */}
      {is5MinWarning && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>Final Countdown: Examination hall opens in less than 5 minutes! Candidates, prepare your scrap sheet and pen.</span>
          </div>
          <span className="font-mono text-amber-900 bg-amber-100/90 border border-amber-200 px-2 py-0.5 rounded font-bold shrink-0">
            {timeStatus.minutesUntilStart}m {timeStatus.secondsUntilStart}s
          </span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left: Metadata & Examination Curriculum Details */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Status Badge */}
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-tight ${
              isLive
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : is5MinWarning
                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                : isEnded
                ? 'bg-slate-100 text-slate-500 border border-slate-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                isLive ? 'bg-emerald-500' : is5MinWarning ? 'bg-amber-500 animate-pulse' : isEnded ? 'bg-slate-400' : 'bg-blue-500'
              }`} />
              {isLive ? 'Live Exam Open (Available till 12:00 AM)' : is5MinWarning ? 'Starts in 5 Minutes Sharp' : isEnded ? 'Exam Closed at 12:00 AM' : 'Official Scheduled Examination'}
            </span>

            {/* Subject Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
              <FlaskConical className="w-3 h-3 text-slate-500" />
              <span>JHS 3 Integrated Science</span>
            </span>

            {/* WAEC Rubric Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
              <Award className="w-3 h-3 text-slate-500" />
              <span>Standard WAEC Stanine Rubrics</span>
            </span>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Atomic Structure, Periodic Table & Chemical Bonding
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Official timed weekly revision test. Structured sequential papers: <strong className="text-slate-800 font-semibold">30 minutes Paper 1 (Objectives)</strong> auto-transitioning into <strong className="text-slate-800 font-semibold">1 hour Paper 2 (WAEC Theory Section B)</strong>.
            </p>
          </div>

          {/* Minimal Anti-Cheat Proctoring Note */}
          <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 max-w-xl">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong className="text-slate-900 font-semibold">Anti-Cheat Proctoring:</strong> Leaving or minimizing the exam window activates a <strong>5-minute penalty lockout</strong> before re-entry. Background exam timer continues running in real time. Available until <strong>12:00 AM GMT (Midnight)</strong>.
            </span>
          </div>
        </div>

        {/* Right: Countdown Clock & Primary Actions */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-3.5 shrink-0">
          
          {/* Real-time Countdown Box */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left sm:text-right min-w-[210px] space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center sm:justify-end gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {isLive ? 'Exam Hall Window' : isEnded ? 'Exam Closed' : 'Scheduled Start: 6:00 PM GMT'}
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight">
              {isLive ? (
                <span className="text-emerald-700 flex items-center sm:justify-end gap-2 text-xl sm:text-2xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  OPEN NOW
                </span>
              ) : isEnded ? (
                <span className="text-slate-400 text-xl font-sans font-semibold">CLOSED</span>
              ) : (
                <span className={is5MinWarning ? 'text-amber-700 font-bold' : 'text-slate-900'}>
                  {String(timeStatus.hoursUntilStart).padStart(2, '0')}:
                  {String(timeStatus.minutesUntilStart).padStart(2, '0')}:
                  {String(timeStatus.secondsUntilStart).padStart(2, '0')}
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-500">
              {isLive ? 'Available until 12:00 AM (Midnight)' : isEnded ? 'Window closed at 12:00 AM' : 'Available until 12:00 AM GMT'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="p-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-2xs"
              title="Share exam criteria on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copiedShare ? 'Shared' : 'Share'}</span>
            </button>

            {isCompleted ? (
              <Link
                href="/jhs/weekly-exam?mode=scheduled"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Results ({pastAttempt.compositePercentage}%)</span>
              </Link>
            ) : isLive ? (
              <Link
                href="/jhs/weekly-exam?mode=scheduled"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Enter Examination Hall</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : isEnded ? (
              <div className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-500 border border-slate-200 font-semibold text-xs flex items-center justify-center gap-2 cursor-not-allowed">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Exam Closed (Ended 12:00 AM)</span>
              </div>
            ) : (
              <Link
                href="/jhs/weekly-exam?mode=scheduled"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-xs"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Opens 6:00 PM (View Rules)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
