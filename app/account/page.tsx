'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  GraduationCap, 
  Calendar, 
  Clock, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  LogOut, 
  KeyRound, 
  ExternalLink, 
  Brain, 
  FileText,
  AlertCircle,
  RefreshCw,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import { EducationLevel } from '@/lib/types';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';
import StudentTimetablePlanner from '@/components/StudentTimetablePlanner';

const ALL_LEVELS: EducationLevel[] = [
  'JHS 1', 
  'JHS 2', 
  'JHS 3', 
  'SHS 1', 
  'SHS 2', 
  'SHS 3', 
  'UNIVERSITY'
];

export default function AccountPage() {
  const router = useRouter();
  const { 
    student, 
    isLoading, 
    logoutStudent, 
    refreshStudent,
    hasFullAccess, 
    isTrialActive, 
    trialDaysRemaining 
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('pin');
  const [activeTab, setActiveTab] = useState<'overview' | 'timetable'>('overview');
  const [updatingLevel, setUpdatingLevel] = useState(false);
  const [levelSuccess, setLevelSuccess] = useState<string | null>(null);
  const [levelError, setLevelError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLevelChange = async (newLevel: EducationLevel) => {
    if (!student || updatingLevel || student.currentLevel === newLevel) return;
    setUpdatingLevel(true);
    setLevelSuccess(null);
    setLevelError(null);

    try {
      const res = await fetch('/api/auth/level', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('academicprep_session_token') || ''}`,
        },
        body: JSON.stringify({ level: newLevel }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to update level');
      }

      await refreshStudent();
      setLevelSuccess(`Class level successfully updated to ${newLevel}`);
      setTimeout(() => setLevelSuccess(null), 3000);
    } catch (err: any) {
      setLevelError(err.message || 'Could not update class level. Please try again.');
      setTimeout(() => setLevelError(null), 4000);
    } finally {
      setUpdatingLevel(false);
    }
  };

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-neutral-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-medium text-slate-500">Loading student profile...</p>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xs text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-neutral-200 text-blue-600 flex items-center justify-center mx-auto">
            <User className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">Sign In to View Your Account</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Access your personalized study timetable, registered courses, exam notes, and 30-Day Free Trial pass.
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/login?redirect=/account"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition shadow-sm text-center"
            >
              Sign In to AcademicPrep
            </Link>
            <Link
              href="/login?mode=register&redirect=/account"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition text-center"
            >
              Create Free Account (30-Day Free Trial)
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isUniversity = student.currentLevel === 'UNIVERSITY';
  const isShs = student.currentLevel?.startsWith('SHS');
  const portalHref = isUniversity ? '/university' : isShs ? '/shs' : '/jhs';
  const portalLabel = isUniversity ? 'University Slide Studio' : isShs ? 'SHS Portal' : 'JHS Portal';

  return (
    <>
      <div className="min-h-screen bg-slate-50/70 pb-20 font-sans">
        
        {/* Top Breadcrumb & Actions Bar */}
        <div className="bg-white border-b border-slate-200 sticky top-15 z-30 shadow-2xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-13 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition">AcademicPrep</Link>
              <span>/</span>
              <span className="font-semibold text-slate-900">Student Account Hub</span>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={portalHref}
                className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-neutral-100 font-semibold text-xs transition flex items-center gap-1.5"
              >
                <span>Go to {portalLabel}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={async () => {
                  if (confirm('Are you sure you want to sign out?')) {
                    await logoutStudent();
                    router.push('/');
                  }
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                title="Sign out of account"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
          
          {/* Profile Header Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-sm">
                {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {student.fullName}
                  </h1>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    {student.currentLevel === 'UNIVERSITY' ? 'Tertiary Student' : student.currentLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">
                  Phone: {student.phoneNumber}
                </p>
              </div>
            </div>

            {/* Pass Status Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
              {hasFullAccess ? (
                <div className="px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>VIP All-Access Active</span>
                </div>
              ) : isTrialActive ? (
                <div className="px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>30-Day Free Trial ({trialDaysRemaining}d remaining)</span>
                </div>
              ) : (
                <div className="px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Free Trial Concluded</span>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setModalTab('pin');
                  setPinModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer active:scale-95"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>{hasFullAccess ? 'Extend Pass' : 'Enter Pass PIN'}</span>
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Account &amp; Level Switcher
            </button>
            <button
              onClick={() => setActiveTab('timetable')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'timetable'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Personal Study Timetable</span>
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-6">
              
              {/* Class Level Switcher Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-slate-900">Active Academic Level</h3>
                    <p className="text-xs text-slate-500">
                      Switching your level immediately filters your lessons, diagnostic quizzes, past papers, and timetables.
                    </p>
                  </div>
                  {updatingLevel && (
                    <div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving…</span>
                    </div>
                  )}
                </div>

                {levelSuccess && (
                  <div className="p-3 rounded-xl bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>{levelSuccess}</span>
                  </div>
                )}

                {levelError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>{levelError}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-1">
                  {ALL_LEVELS.map((lvl) => {
                    const isCurrent = student.currentLevel === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => handleLevelChange(lvl)}
                        disabled={updatingLevel}
                        className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          isCurrent
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm font-bold'
                            : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 font-semibold'
                        }`}
                      >
                        <span className="text-xs">{lvl}</span>
                        {isCurrent && (
                          <span className="text-[10px] text-blue-100 uppercase tracking-wider font-mono">
                            Current
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Launch Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* JHS Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">JHS Curriculum &amp; BECE</h4>
                    <p className="text-xs text-slate-500">
                      NaCCA standard lesson notes, topic quizzes, and 30+ years of BECE past papers.
                    </p>
                  </div>
                  <Link
                    href="/jhs"
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition text-center"
                  >
                    <span>Enter JHS Section</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* SHS Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">SHS Curriculum &amp; WASSCE</h4>
                    <p className="text-xs text-slate-500">
                      Core subjects &amp; 5 elective streams with verified marking schemes and trial papers.
                    </p>
                  </div>
                  <Link
                    href="/shs"
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition text-center"
                  >
                    <span>Enter SHS Section</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* University Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">University Lecture Studio</h4>
                    <p className="text-xs text-slate-500">
                      Slide summaries, conversational Audio Cram, spaced repetition flashcards, and deadline pacer.
                    </p>
                  </div>
                  <Link
                    href="/university"
                    className="w-full py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition shadow-xs text-center"
                  >
                    <span>Enter University Studio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          ) : (
            <div className="space-y-6">
              <StudentTimetablePlanner
                studentId={student.id}
                studentName={student.fullName}
                studentLevel={student.currentLevel}
              />
            </div>
          )}

        </main>
      </div>

      <PaystackPaymentModal
        isOpen={pinModalOpen}
        onClose={() => setPinModalOpen(false)}
        defaultTab={modalTab}
      />
    </>
  );
}
