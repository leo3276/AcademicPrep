'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { EducationLevel } from '@/lib/types';
import { Phone, Lock, User, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { loginStudent, student } = useAuth();

  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [fullName, setFullName] = useState('');
  const [level, setLevel] = useState<EducationLevel>('JHS 1');
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
        <div className="pt-2 flex flex-col gap-2">
          <Link
            href="/jhs"
            className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
          >
            Go to JHS Study Portal
          </Link>
          <Link
            href="/jhs/weekly-exam"
            className="w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition-colors"
          >
            Take Dynamic Weekly Exam
          </Link>
        </div>
      </div>
    );
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await loginStudent(phone, pin, fullName, level);
    setLoading(false);

    if (!res.success) {
      setError(res.error || 'Authentication failed. Please check your credentials.');
      return;
    }

    router.push('/jhs');
  };

  const handleFillDemo = () => {
    setPhone('0241234567');
    setPin('1234');
    setFullName('Kofi Mensah');
    setLevel('JHS 1');
    setError(null);
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Student Portal Login</h1>
          <p className="text-xs text-slate-600">
            Enter your Phone Number and 4-digit PIN to access your study topics and quizzes.
          </p>
        </div>

        {/* Quick Demo Autofill Button */}
        <button
          type="button"
          onClick={handleFillDemo}
          className="w-full py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-between border border-blue-200/60 transition-colors"
        >
          <span>Quick Fill Demo Student</span>
          <span className="text-[10px] bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded font-mono">0241234567 / 1234</span>
        </button>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="e.g. Kofi Mensah"
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
              Phone Number
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                placeholder="e.g. 0241234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* 4-digit PIN */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              4-Digit PIN Code
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                maxLength={4}
                placeholder="••••"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-base tracking-widest text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">4 digits only (e.g. 1234)</p>
          </div>

          {/* Class Level Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Select Current Class
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['JHS 1', 'JHS 2', 'JHS 3'] as EducationLevel[]).map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                    level === lvl
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Authenticating...' : 'Enter Student Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-center space-y-2">
          <p className="text-xs text-slate-500">
            Have an access card? You can redeem your 30-day pass anytime using the top navigation.
          </p>
          <div>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 hover:underline"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Switch to Client Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
