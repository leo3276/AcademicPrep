'use client';

import React, { useState, useEffect, Suspense } from 'react';
import OnboardingGuide from '@/components/OnboardingGuide';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { EducationLevel } from '@/lib/types';
import { 
  Phone, 
  Lock, 
  User, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  KeyRound, 
  LogOut,
  Eye,
  EyeOff
} from 'lucide-react';
import Link from 'next/link';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/jhs/profile';
  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'signin';

  const { student, signInStudent, registerStudent, logoutStudent } = useAuth();

  const [activeTab, setActiveTab] = useState<'signin' | 'register'>(initialMode);

  // Sign In Form States
  const [signInPhone, setSignInPhone] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPass, setShowSignInPass] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);

  // Register Form States
  const [regFullName, setRegFullName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regLevel, setRegLevel] = useState<EducationLevel>('JHS 1');
  const [regPassword, setRegPassword] = useState('');
  const [showRegPass, setShowRegPass] = useState(false);
  const [regAccessPin, setRegAccessPin] = useState('');
  const [regLoading, setRegLoading] = useState(false);
  const [regError, setRegError] = useState<string | null>(null);
  const [hasClosedGuide, setHasClosedGuide] = useState(false);
  const showGuide = activeTab === 'register' && !hasClosedGuide;

  // If already logged in, show status & option to switch account or sign out
  if (student) {
    return (
      <div className="max-w-md mx-auto my-14 px-4">
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white mx-auto flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
            <GraduationCap className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Account</span>
            <h2 className="text-xl font-extrabold text-slate-900">{student.fullName}</h2>
            <p className="text-xs text-slate-500 font-mono">{student.phoneNumber}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span className="font-medium">Class & Tier:</span>
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[11px]">
                {student.currentLevel}
              </span>
              <span>
                {student.hasFullAccess ? '🟢 VIP Pass' : `🟡 Free (${student.topicsCompletedCount || 0}/3)`}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/jhs/profile"
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/20"
            >
              <User className="w-4 h-4" />
              <span>Go to Student Profile Dashboard</span>
            </Link>
            
            <Link
              href="/jhs"
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center justify-center gap-1.5"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => {
                logoutStudent();
                setSignInPhone('');
                setSignInPassword('');
                setRegFullName('');
                setRegPhone('');
                setRegPassword('');
                setRegAccessPin('');
              }}
              className="w-full py-2.5 rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-50 text-red-600 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer mt-1"
            >
              <LogOut className="w-4 h-4 text-red-500" />
              <span>Sign Out / Switch Account</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle Sign In submission
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignInError(null);
    setSignInLoading(true);

    const res = await signInStudent(signInPhone, signInPassword);
    setSignInLoading(false);

    if (!res.success) {
      setSignInError(res.error || 'Failed to sign in. Please verify your credentials.');
      return;
    }

    router.push(redirectUrl);
  };

  // Handle Registration submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError(null);
    setRegLoading(true);

    const res = await registerStudent({
      phoneNumber: regPhone,
      fullName: regFullName,
      currentLevel: regLevel,
      password: regPassword,
      accessPinCode: regAccessPin.trim() || undefined,
    });
    setRegLoading(false);

    if (!res.success) {
      setRegError(res.error || 'Failed to create account. Please check your information.');
      return;
    }

    router.push(redirectUrl);
  };

  return (
    <div className="max-w-md mx-auto my-8 sm:my-12 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center shadow-xs">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {activeTab === 'signin' ? 'Sign In to AcademicPrep' : 'Create Student Account'}
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            {activeTab === 'signin' 
              ? 'Access your individual dashboard, weakness reports, and exam records.' 
              : 'Sign up to start with 3 free topics, or enter a PIN for immediate VIP access.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div id="guide-step-tab" className="flex p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => {
              setActiveTab('signin');
              setSignInError(null);
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'signin'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('register');
              setRegError(null);
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'register'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: SIGN IN                                               */}
        {/* ============================================================ */}
        {activeTab === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  placeholder="e.g. 0241234567"
                  value={signInPhone}
                  onChange={(e) => setSignInPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Password / PIN */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Password or Security PIN <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showSignInPass ? 'text' : 'password'}
                  placeholder="Enter your password or PIN"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignInPass(!showSignInPass)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showSignInPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {signInError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium space-y-1">
                <p>{signInError}</p>
                {signInError.toLowerCase().includes('create account') && (
                  <button
                    type="button"
                    onClick={() => {
                      setRegPhone(signInPhone);
                      setActiveTab('register');
                      setSignInError(null);
                    }}
                    className="text-blue-600 underline font-bold cursor-pointer"
                  >
                    Click here to register with {signInPhone}
                  </button>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={signInLoading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 disabled:bg-slate-300 cursor-pointer"
            >
              {signInLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center pt-1">
              <span className="text-xs text-slate-500">
                Don&apos;t have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('register');
                    setSignInError(null);
                  }}
                  className="text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Create one now
                </button>
              </span>
            </div>
          </form>
        )}

        {/* ============================================================ */}
        {/* TAB 2: CREATE ACCOUNT                                        */}
        {/* ============================================================ */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Full Name */}
            <div id="guide-step-name">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Kwame Mensah"
                  value={regFullName}
                  onChange={(e) => setRegFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div id="guide-step-phone">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  placeholder="e.g. 0241234567"
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Used to isolate your topics, scores, and exam history in Supabase.</p>
            </div>

            {/* Class Level */}
            <div id="guide-step-level">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Class Level <span className="text-rose-500">*</span>
              </label>
              <select
                value={regLevel}
                onChange={(e) => setRegLevel(e.target.value as EducationLevel)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="JHS 1">Junior High School 1 (JHS 1)</option>
                <option value="JHS 2">Junior High School 2 (JHS 2)</option>
                <option value="JHS 3">Junior High School 3 (JHS 3 / BECE Candidate)</option>
              </select>
            </div>

            {/* Password */}
            <div id="guide-step-pass">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Create Account Password or PIN <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showRegPass ? 'text' : 'password'}
                  placeholder="Choose a password or 4-digit PIN"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRegPass(!showRegPass)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showRegPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Access PIN (Optional) */}
            <div id="guide-step-access" className="pt-2 border-t border-slate-100 space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                  <span>Access PIN Code (Optional)</span>
                </label>
                <span className="text-[10px] text-slate-500 font-medium">Leave blank for Free Trial</span>
              </div>
              <input
                type="text"
                placeholder="e.g. PREP-8842-9901"
                value={regAccessPin}
                onChange={(e) => setRegAccessPin(e.target.value.toUpperCase())}
                className="w-full px-3 py-2.5 rounded-xl border border-amber-300 bg-amber-50/40 text-xs font-mono tracking-wider text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase placeholder:normal-case placeholder:font-sans"
              />
              <p className="text-[11px] text-slate-500 leading-normal">
                If you have an Access Pass, enter it for instant VIP access. Otherwise, leave it blank to start right away with 3 free trial topics!
              </p>
            </div>

            {regError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium space-y-1">
                <p>{regError}</p>
                {regError.toLowerCase().includes('already exists') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSignInPhone(regPhone);
                      setActiveTab('signin');
                      setRegError(null);
                    }}
                    className="text-blue-600 underline font-bold cursor-pointer"
                  >
                    Click here to Sign In instead
                  </button>
                )}
              </div>
            )}

            <button
              id="guide-step-submit"
              type="submit"
              disabled={regLoading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 disabled:bg-slate-300 cursor-pointer"
            >
              {regLoading ? (
                <span>Creating account...</span>
              ) : (
                <>
                  <span>Create Account & Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center pt-1">
              <span className="text-xs text-slate-500">
                Already registered?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('signin');
                    setRegError(null);
                  }}
                  className="text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Sign In here
                </button>
              </span>
            </div>
          </form>
        )}

        {/* Free vs Paid Tier Information Box */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2">
          <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>How AcademicPrep Accounts Work</span>
          </p>
          <div className="text-[11px] text-slate-600 space-y-1">
            <p>• <b>Isolated Data:</b> Every student has their own unique Supabase profile, progress score, and weakness ledger.</p>
            <p>• <b>Free Trial:</b> Complete up to 3 topics across any subjects before requiring an Access PIN.</p>
            <p>• <b>VIP Pass:</b> Unlocks all topics, 2008–2026 BECE Past Question PDFs, and Adaptive Weekly Examinations.</p>
          </div>
        </div>

      </div>

      {/* Minimalist Guided Onboarding Walkthrough */}
      <OnboardingGuide
        isOpen={showGuide}
        onClose={() => setHasClosedGuide(true)}
        activeTab={activeTab}
      />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-blue-600"></div>
      </div>
    }>
      <LoginFormContent />
    </Suspense>
  );
}
