'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  Crown,
  Clock,
  Award,
  BookOpen,
  FileCheck,
  FileText,
  Compass
} from 'lucide-react';
import PaystackPaymentModal from './PaystackPaymentModal';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { student, isAdmin, logoutStudent, logoutAdmin } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenGuide = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    if (pathname === '/' || pathname === '/jhs') {
      window.dispatchEvent(new CustomEvent('academicprep:open-tour'));
    } else {
      router.push('/jhs?tour=1');
    }
  };


  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 w-full gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/" id="tour-nav-logo" className="flex items-center gap-2.5 group shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-tight flex items-center gap-1.5 whitespace-nowrap">
                    AcademicPrep
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Beta</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium whitespace-nowrap hidden sm:inline">academicprep.com</span>
                </div>
              </Link>

              {/* Education Level Switcher - Shown on extra wide screens */}
              <div className="hidden 2xl:flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold shrink-0">
                <Link 
                  href={student ? "/jhs" : "/login?redirect=/jhs"}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    pathname.startsWith('/jhs') || pathname === '/'
                      ? 'bg-white text-blue-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  JHS Section
                </Link>
                <Link 
                  href="/shs"
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    pathname.startsWith('/shs')
                      ? 'bg-white text-blue-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>SHS Section</span>
                </Link>
                <div className="px-3 py-1.5 rounded-lg text-slate-400 flex items-center gap-1.5 cursor-not-allowed whitespace-nowrap">
                  <span>University</span>
                  <span className="text-[9px] bg-slate-200 text-slate-500 px-1 rounded uppercase">Soon</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation links & Actions (Visible on xl: 1280px+) */}
            <div id="tour-nav-links" className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
              <Link
                href="/jhs"
                className={`text-xs font-bold transition-colors whitespace-nowrap px-2 py-1.5 2xl:px-2.5 rounded-lg ${
                  pathname.startsWith('/jhs') && pathname !== '/jhs/bece-past-questions' && pathname !== '/jhs/trial-questions' && pathname !== '/jhs/weekly-exam'
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                JHS Portal
              </Link>
              <Link
                href="/shs"
                className={`text-xs font-bold transition-colors whitespace-nowrap px-2 py-1.5 2xl:px-2.5 rounded-lg ${
                  pathname.startsWith('/shs') 
                    ? 'text-purple-600 bg-purple-50 font-bold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                SHS Portal
              </Link>
              <Link
                href="/jhs/bece-past-questions"
                className={`text-xs font-bold transition-colors flex items-center gap-1 px-2 py-1.5 2xl:px-2.5 rounded-lg whitespace-nowrap ${
                  pathname === '/jhs/bece-past-questions' 
                    ? 'text-blue-600 bg-blue-50 font-bold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>BECE Past Questions</span>
              </Link>
              <Link
                href="/jhs/trial-questions"
                className={`text-xs font-bold transition-colors flex items-center gap-1 px-2 py-1.5 2xl:px-2.5 rounded-lg whitespace-nowrap ${
                  pathname === '/jhs/trial-questions' 
                    ? 'text-emerald-700 bg-emerald-50 font-bold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trial Mocks</span>
              </Link>

              <Link
                href="/blog"
                className={`text-xs font-bold transition-colors flex items-center gap-1 px-2 py-1.5 2xl:px-2.5 rounded-lg whitespace-nowrap ${
                  pathname.startsWith('/blog')
                    ? 'text-blue-600 bg-blue-50 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Journal & Guides</span>
              </Link>

              {/* Platform Feature Tour Guide Link */}
              <button
                type="button"
                id="tour-nav-guide"
                onClick={handleOpenGuide}
                className="text-xs font-bold transition-all flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 border border-blue-200/80 shadow-2xs whitespace-nowrap cursor-pointer relative"
                title="Interactive Guide to Platform Features"
              >
                <Compass className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
                <span>Guide</span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                </span>
              </button>

              <button
                type="button"
                id="tour-nav-vip"
                onClick={() => {
                  setModalTab('momo');
                  setPinModalOpen(true);
                }}
                className="text-xs font-bold px-2.5 py-1.5 2xl:px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm shadow-amber-500/20 transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"
              >
                <Crown className="w-3.5 h-3.5 text-amber-200" />
                <span>VIP Pass</span>
              </button>

              <div className="h-5 w-px bg-slate-200 shrink-0 mx-0.5" />

              {/* Student Profile Pill */}
              {!mounted ? (
                <div className="w-24 sm:w-28 h-8 rounded-xl bg-slate-100 animate-pulse shrink-0" />
              ) : student ? (
                <div id="tour-nav-profile" className="flex items-center gap-2 pl-2 pr-1.5 py-1 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 shrink-0 transition">
                  <Link href="/jhs/profile" className="flex items-center gap-2 text-left leading-tight shrink-0 group">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                    </div>
                    <div className="flex flex-col text-left leading-tight shrink-0">
                      <span className="text-xs font-bold text-slate-900 truncate max-w-[80px] 2xl:max-w-[100px] whitespace-nowrap group-hover:text-blue-600">
                        {student.fullName}
                      </span>
                      <div className="flex items-center gap-1 mt-0.5 whitespace-nowrap">
                        <span className="text-[10px] text-slate-600 font-bold whitespace-nowrap">
                          {student.currentLevel}
                        </span>
                        <span className="text-[10px] text-slate-300">•</span>
                        {student.hasFullAccess ? (
                          <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-full inline-flex items-center gap-0.5 whitespace-nowrap">
                            <CheckCircle2 className="w-2.5 h-2.5" /> VIP
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold text-amber-800 bg-amber-100/90 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                            {student.accessType === 'Expired' ? 'VIP Expired' : `${student.topicsCompletedCount || 0}/3 Free`}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
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
                  href="/login?redirect=/jhs"
                  id="tour-nav-profile"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Create Account / Login</span>
                </Link>
              )}
            </div>

            {/* Mobile / Tablet Menu Trigger & Quick Actions (< xl) */}
            <div className="xl:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                id="tour-nav-guide-mobile"
                onClick={handleOpenGuide}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer relative"
                title="Platform Feature Guide"
              >
                <Compass className="w-4 h-4 text-blue-600 animate-spin-slow" />
                <span className="hidden sm:inline">Guide</span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                </span>
              </button>

              <button
                onClick={() => {
                  setModalTab('momo');
                  setPinModalOpen(true);
                }}
                className="text-xs font-bold px-2 py-1.5 sm:px-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xs flex items-center gap-1 whitespace-nowrap cursor-pointer"
              >
                <Crown className="w-3.5 h-3.5 text-amber-200" />
                <span className="hidden sm:inline">VIP Pass</span>
                <span className="sm:hidden">VIP</span>
              </button>

              {mounted && !student && (
                <Link
                  href="/login?redirect=/jhs"
                  className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 whitespace-nowrap shadow-xs"
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Login</span>
                </Link>
              )}

              {mounted && student && (
                <Link
                  href="/jhs/profile"
                  className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs"
                  title={student.fullName}
                >
                  {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                </Link>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 w-full max-w-full">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Select Section</span>
              <div className="grid grid-cols-3 gap-2">
                <Link 
                  href="/jhs"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-center py-2 rounded-lg font-bold text-xs border ${
                    pathname.startsWith('/jhs')
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  JHS 1-3
                </Link>
                <Link 
                  href="/shs"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-center py-2 rounded-lg font-bold text-xs border ${
                    pathname.startsWith('/shs')
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  SHS 1-3
                </Link>
                <div className="text-center py-2 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium">
                  Uni (Soon)
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleOpenGuide}
                className="py-2 px-2.5 text-sm font-bold text-blue-700 bg-blue-50/80 hover:bg-blue-100 rounded-xl flex items-center gap-2.5 text-left w-full transition-colors cursor-pointer border border-blue-200"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Platform Feature Tour Guide</span>
              </button>

              <Link
                href="/jhs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-slate-800"
              >
                JHS Curriculum Topics
              </Link>
              <Link
                href="/shs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-purple-700 flex items-center justify-between"
              >
                <span>SHS Lessons & Elective Quizzes</span>
                <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">WASSCE</span>
              </Link>
              <Link
                href="/jhs/bece-past-questions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-blue-700 flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                BECE Past Questions (2020-2024)
              </Link>
              <Link
                href="/jhs/trial-questions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-emerald-700 flex items-center gap-1.5"
              >
                <FileCheck className="w-4 h-4 text-emerald-600" />
                Trial Questions & Mocks
              </Link>
              <Link
                href="/jhs/weekly-exam"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-bold text-amber-800 flex items-center gap-1.5"
              >
                <Clock className="w-4 h-4 text-amber-600" />
                Adaptive Weekly Exam
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-slate-800 flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                Study Journal & Guides
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalTab('momo');
                  setPinModalOpen(true);
                }}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center justify-between shadow-xs mt-1 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-200" />
                  <span>VIP Pass (GHS 25/mo MoMo)</span>
                </div>
                <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-black tracking-wider uppercase">30 DAYS</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100">
              {!mounted ? (
                <div className="w-full h-10 rounded-xl bg-slate-100 animate-pulse" />
              ) : student ? (
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/jhs/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{student.fullName}</p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {student.phoneNumber} • {student.currentLevel}
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={async () => {
                        setMobileMenuOpen(false);
                        await logoutStudent();
                      }}
                      className="text-xs font-bold text-red-600 py-1.5 px-3 bg-red-50 rounded-lg hover:bg-red-100"
                    >
                      Logout
                    </button>
                  </div>
                  <Link
                    href="/jhs/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Student Profile & Leaderboard</span>
                  </Link>
                </div>
              ) : (
                <Link
                  href="/login?redirect=/jhs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
                >
                  Create Student Account / Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Paystack Payment & PIN Redemption Modal */}
      <PaystackPaymentModal
        isOpen={pinModalOpen}
        onClose={() => setPinModalOpen(false)}
        defaultTab={modalTab}
      />
    </>
  );
}
