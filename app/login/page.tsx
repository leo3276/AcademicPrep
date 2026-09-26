'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { EducationLevel } from '@/lib/types';
import { Phone, Lock, User, GraduationCap, ArrowRight, ShieldCheck, KeyRound, Sparkles, CheckCircle2, HelpCircle, LogOut } from 'lucide-react';
import Link from 'next/link';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/jhs/profile';
  const { loginStudent, logoutStudent, student } = useAuth();

  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [level, setLevel] = useState<EducationLevel>('JHS 1');
  const [accessPin, setAccessPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // If already logged in, show redirect or switch
  if (student) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center font-bold">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Welcome Back, {student.fullName}!</h2>
        <p className="text-xs text-slate-600">
          You are currently signed in with {student.phoneNumber} as a <b>{student.currentLevel}</b> student.
        </p>
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span>Access Tier:</span>
          <span className="font-bold text-slate-900">
            {student.hasFullAccess ? '🟢 VIP Full Pass' : `🟡 Limited Free (${student.topicsCompletedCount || 0}/3 Topics)`}
          </span>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <Link
            href="/jhs/profile"
            className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <User className="w-4 h-4" />
            <span>Go to Student Profile Dashboard</span>
          </Link>
          <Link
            href="/jhs"
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Continue to JHS Curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => {
              logoutStudent();
              setPhone('');
              setFullName('');
              setAccessPin('');
            }}
            className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
          >
            <LogOut className="w-4 h-4 text-slate-500" />
            <span>Sign Out & Create New Account</span>
          </button>
        </div>
      </div>
    );
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await loginStudent(phone, fullName, level, accessPin.trim() || undefined);
    setLoading(false);

    if (!res.success) {
      setError(res.error || 'Registration failed. Please check your details.');
      return;
    }

    router.push(redirectUrl);
  };

  return (
    <div className="max-w-md mx-auto my-10 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center shadow-xs">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Create Student Account</h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            Enter your Phone Number & Full Name to begin with <b>3 free trial topics</b>, or enter a purchased Access PIN for immediate <b>VIP Full Pass</b>.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="e.g. Kwame Mensah"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                placeholder="e.g. 0241234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <p className="text-[10px] text-slate-500 mt-1">Used to identify your account and sync your progress.</p>
          </div>

          {/* Academic Level */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Select Your Class Level <span className="text-rose-500">*</span>
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as EducationLevel)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="JHS 1">Junior High School 1 (JHS 1)</option>
              <option value="JHS 2">Junior High School 2 (JHS 2)</option>
              <option value="JHS 3">Junior High School 3 (JHS 3 / BECE Candidate)</option>
            </select>
          </div>

          {/* Access PIN (Optional) */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
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
              value={accessPin}
              onChange={(e) => setAccessPin(e.target.value.toUpperCase())}
              className="w-full px-3 py-2.5 rounded-xl border border-amber-300 bg-amber-50/40 text-xs font-mono tracking-wider text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase placeholder:normal-case placeholder:font-sans"
            />
            <p className="text-[11px] text-slate-500 leading-normal">
              If you have already purchased an Access Pass from your school or online, enter it here for instant VIP access. Otherwise, leave it blank to start right away with 3 free topics!
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 disabled:bg-slate-300"
          >
            {loading ? (
              <span>Setting up your profile...</span>
            ) : (
              <>
                <span>Enter Profile Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Free vs Paid Clarity Card */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2">
          <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>How AcademicPrep Access Works</span>
          </p>
          <div className="text-[11px] text-slate-600 space-y-1">
            <p>• <b>Free Trial:</b> Complete up to 3 topics across any subjects with diagnostic quizzes.</p>
            <p>• <b>VIP Pass:</b> Unlocks all topics, 4th topic onwards, official 2008–2026 BECE Past Question PDFs, Trial Mocks, and Weekly Examinations.</p>
            <p>• You can buy or redeem a PIN anytime from your profile dashboard.</p>
          </div>
        </div>
      </div>
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
