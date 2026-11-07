'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { 
  Home, 
  GraduationCap, 
  BookOpenCheck, 
  Brain, 
  User, 
  MessageSquare,
  FileText
} from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { student } = useAuth();

  // Hide on admin portal or exam full-screen modals to avoid interface collision
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const isHome = pathname === '/';
  const isJhs = pathname.startsWith('/jhs');
  const isShs = pathname.startsWith('/shs');
  const isUniversity = pathname.startsWith('/university');
  const isChat = pathname.startsWith('/chat');
  const isProfile = pathname.includes('/profile') || pathname.startsWith('/account');

  const profileHref = student?.currentLevel === 'UNIVERSITY' ? '/account'
    : student?.currentLevel?.startsWith('SHS')
    ? '/shs/profile'
    : student
    ? '/jhs/profile'
    : '/login';

  return (
    <nav 
      aria-label="Mobile Navigation Bar"
      className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(15,23,42,0.06)] px-2 py-1.5 pb-safe"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1">
        
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
            isHome
              ? 'text-blue-600 font-bold'
              : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <div className={`p-1 rounded-lg transition-colors ${isHome ? 'bg-blue-50 text-blue-600' : ''}`}>
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none">Home</span>
        </Link>

        {/* JHS */}
        <Link
          href="/jhs"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
            isJhs
              ? 'text-blue-600 font-bold'
              : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <div className={`p-1 rounded-lg transition-colors ${isJhs ? 'bg-blue-50 text-blue-600' : ''}`}>
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none">JHS</span>
        </Link>

        {/* SHS */}
        <Link
          href="/shs"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
            isShs
              ? 'text-purple-600 font-bold'
              : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <div className={`p-1 rounded-lg transition-colors ${isShs ? 'bg-purple-50 text-purple-600' : ''}`}>
            <BookOpenCheck className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none">SHS</span>
        </Link>

        {/* University */}
        <Link
          href="/university"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
            isUniversity
              ? 'text-slate-900 font-bold'
              : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <div className={`p-1 rounded-lg transition-colors ${isUniversity ? 'bg-slate-100 text-slate-900' : ''}`}>
            <Brain className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none">Tertiary</span>
        </Link>

        {/* Profile or Account */}
        <Link
          href={profileHref}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
            isProfile
              ? 'text-blue-600 font-bold'
              : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <div className={`p-1 rounded-lg transition-colors ${isProfile ? 'bg-blue-50 text-blue-600' : ''}`}>
            <User className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none truncate max-w-[56px]">
            {student ? 'Profile' : 'Sign In'}
          </span>
        </Link>

      </div>
    </nav>
  );
}
