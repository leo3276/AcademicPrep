import React from 'react';
import Link from 'next/link';
import { GraduationCap, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white">AcademicPrep</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Ghana and West Africa’s premier online learning companion. Built for over 41,000+ students transitioning from WhatsApp classes to structured academic mastery.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Sections</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jhs" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  JHS 1, 2 & 3 (Active)
                </Link>
              </li>
              <li className="text-slate-500">SHS 1, 2 & 3 (WASSCE - Coming)</li>
              <li className="text-slate-500">University & Tertiary (Coming)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Study Engine</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jhs" className="hover:text-white transition-colors">
                  Curriculum Topic Notes
                </Link>
              </li>
              <li>
                <Link href="/jhs" className="hover:text-white transition-colors">
                  Instant Topic Quizzes
                </Link>
              </li>
              <li>
                <Link href="/jhs/weekly-exam" className="hover:text-white transition-colors">
                  Adaptive Weekly Exams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Community & Admin</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-[11px]">WhatsApp Study Group</p>
                  <p className="text-[10px] text-slate-400">41,000+ Active Students</p>
                </div>
              </div>
              <Link 
                href="/admin" 
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-purple-400 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Admin Dashboard & Cash Flows
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} AcademicPrep (academicprep.com). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Powered by Next.js & Supabase</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">99.9% Uptime High-Concurrency Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
