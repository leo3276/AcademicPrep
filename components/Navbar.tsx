'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { 
  GraduationCap, 
  KeyRound, 
  User, 
  LogOut, 
  ShieldCheck, 
  Menu, 
  X,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { student, isAdmin, logoutStudent, logoutAdmin, redeemPin } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRedeemPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;

    setPinLoading(true);
    setPinFeedback(null);

    const res = await redeemPin(pinInput);
    setPinLoading(false);
    setPinFeedback({
      success: res.success,
      text: res.message,
    });

    if (res.success) {
      setTimeout(() => {
        setPinModalOpen(false);
        setPinInput('');
        setPinFeedback(null);
      }, 2000);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-5 shrink-0">
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight leading-tight flex items-center gap-1.5 whitespace-nowrap">
                    AcademicPrep
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Beta</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap">academicprep.com</span>
                </div>
              </Link>

              {/* Education Level Switcher */}
              <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold shrink-0">
                <Link 
                  href="/jhs"
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    pathname.startsWith('/jhs') || pathname === '/'
                      ? 'bg-white text-blue-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  JHS Section
                </Link>
                <div className="px-3 py-1.5 rounded-lg text-slate-400 flex items-center gap-1.5 cursor-not-allowed whitespace-nowrap">
                  <span>SHS Section</span>
                  <span className="text-[9px] bg-slate-200 text-slate-500 px-1 rounded uppercase">Soon</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg text-slate-400 flex items-center gap-1.5 cursor-not-allowed whitespace-nowrap">
                  <span>University</span>
                  <span className="text-[9px] bg-slate-200 text-slate-500 px-1 rounded uppercase">Soon</span>
                </div>
              </div>
            </div>

            {/* Navigation links & Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/jhs"
                className={`text-xs font-bold transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-lg ${
                  pathname === '/jhs' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Curriculum
              </Link>
              <Link
                href="/jhs/weekly-exam"
                className={`text-xs font-bold transition-colors flex items-center gap-1 px-3 py-1.5 rounded-xl whitespace-nowrap ${
                  pathname === '/jhs/weekly-exam' 
                    ? 'bg-amber-100 text-amber-900' 
                    : 'text-amber-800 bg-amber-50 hover:bg-amber-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Weekly Exam</span>
              </Link>

              <div className="h-5 w-px bg-slate-200 shrink-0 mx-1" />

              {/* Student Profile Pill */}
              {!mounted ? (
                <div className="w-28 h-8 rounded-xl bg-slate-100 animate-pulse shrink-0" />
              ) : student ? (
                <div className="flex items-center gap-2.5 pl-2 pr-1.5 py-1 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <div className="flex flex-col text-left leading-tight shrink-0">
                    <span className="text-xs font-bold text-slate-900 truncate max-w-[110px] whitespace-nowrap">
                      {student.fullName}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                      <span className="text-[10px] text-slate-600 font-bold whitespace-nowrap">
                        {student.currentLevel}
                      </span>
                      <span className="text-[10px] text-slate-300">•</span>
                      {student.hasFullAccess ? (
                        <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-full inline-flex items-center gap-0.5 whitespace-nowrap">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Pass
                        </span>
                      ) : (
                        <button
                          onClick={() => setPinModalOpen(true)}
                          title="Click to Redeem PIN & Upgrade"
                          className="text-[9px] font-bold text-amber-800 bg-amber-100/90 hover:bg-amber-200 px-1.5 py-0.2 rounded-full whitespace-nowrap cursor-pointer transition-colors"
                        >
                          Free Mode
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={logoutStudent}
                    title="Sign Out"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0 ml-0.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
                >
                  <User className="w-3.5 h-3.5" />
                  Student Login
                </Link>
              )}
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setPinModalOpen(true)}
                className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
              >
                PIN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Select Section</span>
              <div className="grid grid-cols-3 gap-2">
                <Link 
                  href="/jhs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200"
                >
                  JHS 1-3
                </Link>
                <div className="text-center py-2 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium">
                  SHS (Soon)
                </div>
                <div className="text-center py-2 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium">
                  Uni (Soon)
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/jhs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-slate-800"
              >
                JHS Curriculum Topics
              </Link>
              <Link
                href="/jhs/weekly-exam"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-bold text-amber-800 flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                Adaptive Weekly Exam
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100">
              {!mounted ? (
                <div className="w-full h-10 rounded-xl bg-slate-100 animate-pulse" />
              ) : student ? (
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{student.fullName}</p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {student.phoneNumber} • {student.currentLevel}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logoutStudent();
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs font-bold text-red-600 py-1.5 px-3 bg-red-50 rounded-lg hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
                >
                  Student Login (Phone + PIN)
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Redeem PIN Modal */}
      {pinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => {
                setPinModalOpen(false);
                setPinFeedback(null);
              }}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Redeem Access PIN</h3>
                <p className="text-xs text-slate-500">Unlock all subjects, quizzes & exams for 30 days</p>
              </div>
            </div>

            <form onSubmit={handleRedeemPin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Access PIN Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. PREP-8842-9901"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-center tracking-widest text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase text-sm"
                  autoFocus
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  💡 Active Demo PIN: <span className="font-mono font-bold text-emerald-700">PREP-8842-9901</span>
                </p>
              </div>

              {pinFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    pinFeedback.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {pinFeedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={pinLoading || !pinInput.trim()}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
              >
                {pinLoading ? (
                  <span>Verifying PIN...</span>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    Activate Full Access Pass
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
