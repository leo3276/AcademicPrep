'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { 
  BookOpenCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Clock, 
  Lock, 
  FileText,
  KeyRound,
  GraduationCap
} from 'lucide-react';

export default function HomePage() {
  const { student } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-950 to-slate-900 text-white pt-16 pb-20 sm:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/25 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Built for 8,000+ Online Students • AcademicPrep Portal
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Master Your Curriculum, <br />
              <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-teal-300 bg-clip-text text-transparent">
                Topic by Topic, Week by Week.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
              Full JHS 1, 2, and 3 curriculum topics, instant quizzes with step-by-step explanations, and personalized weekly exams.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/jhs"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
              >
                <span>Launch JHS Study Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {mounted && !student && (
                <Link
                  href="/login"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4 text-emerald-400" />
                  <span>Student Login (Phone + PIN)</span>
                </Link>
              )}
            </div>

            {/* Quick Demo Info Box */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-3.5 border border-slate-700 text-left text-xs text-slate-200 flex items-center justify-between shadow-md">
                <div>
                  <span className="font-bold text-white block mb-0.5">Try Demo Student Account:</span>
                  <span className="text-slate-300">
                    Phone: <b className="text-emerald-300 font-mono">0241234567</b> • PIN: <b className="text-emerald-300 font-mono">1234</b>
                  </span>
                </div>
                <Link 
                  href="/login"
                  className="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] hover:bg-slate-100 shadow-sm shrink-0 ml-2"
                >
                  Quick Fill
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Live Counters */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
            <div className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">8,000+</div>
              <div className="text-xs text-slate-200 font-medium mt-1">Community Students</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">JHS 1, 2, 3</div>
              <div className="text-xs text-slate-200 font-medium mt-1">Full Curriculum Live</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-300">100%</div>
              <div className="text-xs text-slate-200 font-medium mt-1">Instant Auto-Grading</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-300">Dynamic</div>
              <div className="text-xs text-slate-200 font-medium mt-1">Weekly Exams by Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Architecture (JHS, SHS, University) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Platform Structure</h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Academic Portals Designed for Every Stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: JHS (ACTIVE) */}
          <div className="relative rounded-2xl bg-white border-2 border-blue-600 p-6 shadow-xl shadow-blue-500/5 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              Active & Live Now
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Junior High School (JHS)</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">JHS 1, JHS 2 & JHS 3 • BECE Candidates</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Complete NaCCA / GES aligned curriculum across 6 core subjects. Topic quizzes after each chapter and custom weekly exams based on your actual study history.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>JHS 1, 2 & 3 Topics & Notes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Topic Quizzes with Explanations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Adaptive Dynamic Weekly Exams</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/jhs"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-500/20"
              >
                <span>Enter JHS Section</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: SHS (Coming Soon) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between opacity-85">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <BookOpenCheck className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">Senior High School (SHS)</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Phase 2
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">SHS 1, 2 & 3 • WASSCE Prep</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Core subjects (Core Math, English, Integrated Science, Social Studies) plus elective clusters (General Science, Business, General Arts, Home Economics).
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-slate-500">
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>WASSCE Topic Banks</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Paper 1 & 2 Exam Simulations</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                disabled
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs cursor-not-allowed text-center"
              >
                Available in Phase 2
              </button>
            </div>
          </div>

          {/* Card 3: University (Coming Soon) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between opacity-85">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">University & Tertiary</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Phase 3
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Undergraduate & Foundations</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Foundational tertiary courses, professional certifications, and aptitude tests for university entrance and career readiness.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-slate-500">
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Aptitude & Entry Quizzes</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Tertiary Modules</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                disabled
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs cursor-not-allowed text-center"
              >
                Available in Phase 3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovation: Dynamic Weekly Exam */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Progress-Adaptive Testing Engine
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              A Weekly Exam That Only Tests What You Have Actually Studied
            </h2>

            <p className="text-sm sm:text-base text-amber-50 leading-relaxed">
              No generic test papers. The AcademicPrep engine queries your completed chapter quizzes and dynamically generates a personalized 15-minute weekly test. Finish more topics during the week, unlock richer tests on the weekend.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/jhs/weekly-exam"
                className="px-6 py-3 rounded-xl bg-white text-amber-900 font-bold text-xs hover:bg-amber-50 transition-colors shadow-lg"
              >
                Try Dynamic Weekly Exam
              </Link>
              <Link
                href="/jhs"
                className="px-6 py-3 rounded-xl bg-amber-700/60 hover:bg-amber-700 text-white font-semibold text-xs transition-colors border border-white/30"
              >
                Study Topics First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
    </div>
  );
}
