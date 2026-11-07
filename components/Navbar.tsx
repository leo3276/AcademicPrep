'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { 
  GraduationCap, 
  User, 
  LogOut, 
  Menu, 
  X,
  BookOpen, 
  FileText, 
  MessageSquare, 
  Brain
} from 'lucide-react';
import PaystackPaymentModal from './PaystackPaymentModal';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { student, logoutStudent } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');
  const [mounted, setMounted] = useState(false);

  const isUniversityStudent = student?.currentLevel === 'UNIVERSITY';
  const isShsStudent = Boolean(student?.currentLevel?.startsWith('SHS'));
  const isUniversityPage = pathname.startsWith('/university');
  const isShsPage = pathname.startsWith('/shs');

  const profileHref = isUniversityStudent 
    ? '/account' 
    : isShsStudent 
    ? '/shs/profile' 
    : '/jhs/profile';

  const isProfilePage = pathname.includes('/profile');
  const loginHref = isUniversityPage
    ? '/login?mode=register&level=UNIVERSITY&redirect=/university'
    : `/login?redirect=${encodeURIComponent(isShsPage ? '/shs' : '/jhs')}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-15 w-full gap-2 sm:gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white shadow-xs shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-tight whitespace-nowrap">
                    AcademicPrep
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium whitespace-nowrap hidden sm:inline">
                    academicprep.com
                  </span>
                </div>
              </Link>

              {/* Level Switcher (Wide Desktops) */}
              {!isProfilePage && (
                <div className="hidden 2xl:flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold shrink-0">
                  <Link 
                    href="/jhs"
                    className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap ${
                      pathname.startsWith('/jhs') || pathname === '/'
                        ? 'bg-white text-slate-900 shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>JHS</span>
                  </Link>
                  <Link 
                    href="/shs"
                    className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap ${
                      pathname.startsWith('/shs')
                        ? 'bg-white text-slate-900 shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>SHS</span>
                  </Link>
                  <Link 
                    href="/university"
                    className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap ${
                      pathname.startsWith('/university')
                        ? 'bg-white text-slate-900 shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>University</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop Navigation Links (xl+) */}
            <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
              {isProfilePage ? (
                <>
                  <Link
                    href={isShsStudent ? "/shs" : isUniversityStudent ? "/university" : "/jhs"}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition"
                  >
                    &larr; Return to {isShsStudent ? "SHS" : isUniversityStudent ? "University" : "JHS"}
                  </Link>
                  <Link
                    href="/chat"
                    className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition"
                  >
                    Study Lounge
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/jhs"
                    className={`text-xs font-semibold transition px-2.5 py-1.5 rounded-lg ${
                      pathname.startsWith('/jhs') && pathname !== '/jhs/weekly-exam'
                        ? 'text-slate-900 bg-slate-100 font-bold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    JHS
                  </Link>
                  <Link
                    href="/shs"
                    className={`text-xs font-semibold transition px-2.5 py-1.5 rounded-lg ${
                      pathname.startsWith('/shs') 
                        ? 'text-slate-900 bg-slate-100 font-bold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    SHS
                  </Link>
                  <Link
                    href="/university"
                    className={`text-xs font-semibold transition flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                      pathname.startsWith('/university') 
                        ? 'text-slate-900 bg-slate-100 font-bold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Brain className="w-3.5 h-3.5 text-slate-700" />
                    <span>University</span>
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-xs font-semibold transition flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                      pathname.startsWith('/blog')
                        ? 'text-slate-900 bg-slate-100 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Journal</span>
                  </Link>
                  <Link
                    href="/chat"
                    className={`text-xs font-semibold transition flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                      pathname.startsWith('/chat')
                        ? 'text-slate-900 bg-slate-100 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>Study Lounge</span>
                  </Link>
                </>
              )}

              <div className="h-4 w-px bg-slate-200 shrink-0 mx-1" />

              {/* Desktop Profile / Login */}
              {!mounted ? (
                <div className="w-24 h-8 rounded-xl bg-slate-100 animate-pulse shrink-0" />
              ) : student ? (
                <div className="flex items-center gap-2 pl-2 pr-1.5 py-1 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                  <Link href={profileHref} className="flex items-center gap-2 text-left leading-tight shrink-0 group">
                    <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                    </div>
                    <div className="flex flex-col text-left leading-tight shrink-0">
                      <span className="text-xs font-bold text-slate-900 truncate max-w-[100px] whitespace-nowrap">
                        {student.fullName}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {student.currentLevel === 'UNIVERSITY' ? 'Tertiary' : student.currentLevel}
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={logoutStudent}
                    title="Sign Out"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition shrink-0 ml-0.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <Link
                  href={loginHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-500 transition shadow-xs whitespace-nowrap"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

            {/* Mobile Top Bar Controls (< xl) */}
            <div className="xl:hidden flex items-center gap-2 shrink-0">
              {mounted && !student && (
                <Link
                  href={loginHref}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-500 transition shadow-xs"
                >
                  Sign In
                </Link>
              )}

              {mounted && student && (
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center shrink-0 cursor-pointer shadow-xs active:scale-95 transition"
                  title={student.fullName}
                  aria-label="Student Account Menu"
                >
                  {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-4 w-full">
            {/* Portal Switcher Grid */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <Link 
                href="/jhs"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-2 rounded-lg font-semibold border transition ${
                  pathname.startsWith('/jhs')
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                JHS
              </Link>
              <Link 
                href="/shs"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-2 rounded-lg font-semibold border transition ${
                  pathname.startsWith('/shs')
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                SHS
              </Link>
              <Link 
                href="/university"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-2 rounded-lg font-semibold border transition ${
                  pathname.startsWith('/university')
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                University
              </Link>
            </div>

            {/* Clean Functional Navigation Links */}
            <div className="pt-2 border-t border-slate-100 flex flex-col text-xs font-medium space-y-1">
              <Link
                href="/jhs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                JHS Curriculum &amp; Notes
              </Link>
              <Link
                href="/jhs/bece-past-questions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                BECE Past Questions
              </Link>
              <Link
                href="/shs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                SHS Curriculum &amp; Quizzes
              </Link>
              <Link
                href="/shs/wassce-past-questions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                WASSCE Past Questions
              </Link>
              <Link
                href="/university"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                University Slide Studio &amp; 10-to-1 Digest
              </Link>
              <Link
                href="/chat"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                Study Lounge
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2.5 rounded-lg text-slate-800 hover:bg-slate-50 transition"
              >
                Journal &amp; Guides
              </Link>
            </div>

            {/* User Account Bar in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-100 text-xs">
              {!mounted ? (
                <div className="w-full h-9 rounded-lg bg-slate-100 animate-pulse" />
              ) : student ? (
                <div className="space-y-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                        {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-xs truncate max-w-[150px]">{student.fullName}</p>
                        <p className="text-[11px] text-slate-500 font-mono">
                          {student.currentLevel === 'UNIVERSITY' ? 'Tertiary' : student.currentLevel} · {student.phoneNumber}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        setMobileMenuOpen(false);
                        await logoutStudent();
                      }}
                      className="text-xs font-semibold text-red-600 hover:text-red-700 px-2.5 py-1 rounded-md hover:bg-red-50 transition"
                    >
                      Sign Out
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href="/account"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs flex items-center justify-center transition shadow-xs text-center"
                    >
                      My Profile &amp; Pass
                    </Link>
                    <Link
                      href={
                        student.currentLevel === 'UNIVERSITY'
                          ? '/university'
                          : student.currentLevel?.startsWith('SHS')
                          ? '/shs/profile?tab=timetable'
                          : '/jhs/profile?tab=timetable'
                      }
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs flex items-center justify-center transition shadow-2xs text-center"
                    >
                      Study Timetable
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  href={loginHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-500 transition shadow-xs"
                >
                  Create Account / Sign In
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
