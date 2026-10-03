import React from 'react';
import Link from 'next/link';
import { GraduationCap, MessageCircle, ExternalLink, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white">AcademicPrep</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed font-normal">
              Ghana and West Africa’s premier online learning companion. Built for over 8,000+ students transitioning from WhatsApp classes to structured academic mastery.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Sections</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jhs" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  JHS 1, 2 & 3 (Active)
                </Link>
              </li>
              <li>
                <Link href="/shs" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  SHS 1, 2 & 3 (WASSCE Live)
                </Link>
              </li>
              <li>
                <Link href="/#mobile-app" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Android App (APK)</span>
                </Link>
              </li>
              <li className="text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                University & Tertiary (Coming)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Study Engine</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jhs/bece-past-questions" className="text-slate-300 hover:text-white transition-colors font-medium">
                  BECE Past Questions (1990 - 2025)
                </Link>
              </li>
              <li>
                <Link href="/jhs/trial-questions" className="text-slate-300 hover:text-white transition-colors font-medium">
                  BECE Trial & Mock Exams
                </Link>
              </li>
              <li>
                <Link href="/jhs" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Curriculum Topic Notes
                </Link>
              </li>
              <li>
                <Link href="/jhs" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Instant Topic Quizzes
                </Link>
              </li>
              <li>
                <Link href="/jhs/weekly-exam" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Adaptive Weekly Exams
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors font-medium flex items-center gap-1.5">
                  <span className="text-blue-400">★</span>
                  <span>Study Journal & Guides</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Student Community</h4>
            <div className="space-y-3">
              <a
                href="https://whatsapp.com/channel/0029VagMXcm4yltRps7S2b2x"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-between gap-2.5 transition-all group shadow-xs cursor-pointer block"
                title="Join AcademicPrep Official WhatsApp Channel"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px] group-hover:text-emerald-300 transition-colors">
                      WhatsApp Study Channel
                    </p>
                    <p className="text-[10px] text-slate-300 font-medium">8,000+ Active Students</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Daily study reminders, homework help, and weekly exam announcements delivered on our official WhatsApp Channel.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} AcademicPrep (academicprep.com). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Powered by Next.js & Supabase</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">99.9% Uptime High-Concurrency Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
