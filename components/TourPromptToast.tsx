'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, X, ArrowRight } from 'lucide-react';

interface TourPromptToastProps {
  onStartTour: () => void;
}

export default function TourPromptToast({ onStartTour }: TourPromptToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user has already dismissed or completed the tour prompt
    const dismissed = localStorage.getItem('academicprep_tour_prompt_dismissed');
    const completed = localStorage.getItem('academicprep_account_tour_completed');

    if (!dismissed && !completed) {
      // Delay prompt slightly so user first sees the loaded page
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_tour_prompt_dismissed', 'true');
    }
  };

  const handleStart = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_tour_prompt_dismissed', 'true');
    }
    onStartTour();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 max-w-sm w-[calc(100vw-32px)] sm:w-96 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-blue-200/90 shadow-2xl shadow-slate-900/15 ring-1 ring-black/5">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Dismiss"
          aria-label="Dismiss tour prompt"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 sm:gap-3.5 pr-6">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25">
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                Quick Guide
              </span>
              <span className="text-[10px] font-medium text-slate-400">• 60 seconds</span>
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
              New to AcademicPrep?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Take a spotlight tour to see where BECE past papers, curriculum quizzes, and adaptive exams live.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleDismiss}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Maybe later
          </button>

          <button
            type="button"
            onClick={handleStart}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>Take Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
