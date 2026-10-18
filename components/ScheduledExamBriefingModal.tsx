'use client';

import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Clock, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';
import { OFFICIAL_SCHEDULED_EXAM } from '@/lib/scheduledWeeklyExam';

interface ScheduledExamBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmStart: () => void;
  isAdmin?: boolean;
  isLocked?: boolean;
  countdownText?: string;
}

export default function ScheduledExamBriefingModal({
  isOpen,
  onClose,
  onConfirmStart,
  isAdmin = false,
  isLocked = false,
  countdownText = '',
}: ScheduledExamBriefingModalProps) {
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Examination Hall Briefing & Rules
              </h2>
              <p className="text-xs text-slate-500">
                Mandatory candidate instructions before launch
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-5 overflow-y-auto text-xs leading-relaxed text-slate-700">
          
          {/* Exam Summary */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 space-y-1">
            <p className="font-bold text-sm text-blue-900">
              {OFFICIAL_SCHEDULED_EXAM.title}
            </p>
            <p className="text-[11px] text-blue-700">
              Level: {OFFICIAL_SCHEDULED_EXAM.level} • Subject: {OFFICIAL_SCHEDULED_EXAM.subjectName} • Total Marks: {OFFICIAL_SCHEDULED_EXAM.totalMarks}
            </p>
            <p className="text-[11px] text-slate-600 font-medium pt-1 border-t border-blue-100/80">
              Available Window: <strong>6:00 PM – 12:00 AM GMT (Midnight)</strong>.
            </p>
          </div>

          {/* Sequential Timers Breakdown */}
          <div className="space-y-2.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Examination Structure & Sequential Timers
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Paper 1: Objectives</span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  <strong>30 Minutes</strong> • 25 Questions • 40 Marks
                </p>
                <p className="text-[10px] text-slate-500">
                  Auto-locks and automatically submits when 30 mins elapse, immediately advancing to Paper 2.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <FileText className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Paper 2: WAEC Theory</span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  <strong>1 Hour (60 Mins)</strong> • 3 Section B Questions • 60 Marks
                </p>
                <p className="text-[10px] text-slate-500">
                  Detailed structured questions. Type your comprehensive working and answers before time runs out.
                </p>
              </div>
            </div>
          </div>

          {/* ANTI-CHEATING WARNING & 5-MIN PENALTY LOCKOUT */}
          <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Strict Proctoring: 5-Minute Tab-Switch Penalty</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              To ensure examination fairness and discourage external cheating:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-amber-900 font-medium">
              <li>If you <strong>switch browser tabs</strong>, minimize this window, or leave the page, you will be <strong>locked out for 5 minutes</strong> before you can re-enter.</li>
              <li>⚠️ <strong>The examination timer DOES NOT STOP</strong>: The exam clock continues ticking down in real time while you wait to re-enter.</li>
              <li>You will only be allowed back in once the 5-minute penalty lockout countdown reaches 00:00.</li>
            </ul>
          </div>

          {/* Candidate Checkbox Acknowledgment */}
          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 shrink-0 cursor-pointer"
            />
            <span className="text-[11px] text-slate-800 leading-normal font-medium">
              I understand that leaving this page will lock me out for 5 minutes as a penalty, while my exam timer continues running in the background.
            </span>
          </label>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold transition"
          >
            Cancel
          </button>

          {isLocked && !isAdmin ? (
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                Opens in {countdownText || '2h'}
              </span>
              <button
                type="button"
                disabled
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-200 text-slate-500 cursor-not-allowed flex items-center gap-1.5"
              >
                <span>🔒 Hall Opens at 6:00 PM GMT</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={!agreed}
              onClick={() => {
                if (agreed) {
                  onConfirmStart();
                }
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition ${
                agreed
                  ? isAdmin
                    ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-sm shadow-amber-600/20 cursor-pointer'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/20 cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{isAdmin ? '⚡ Launch Exam (Admin Preview)' : 'Begin Examination Now'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
