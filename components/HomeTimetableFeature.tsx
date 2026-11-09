'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Lock } from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import PaystackPaymentModal from './PaystackPaymentModal';

export default function HomeTimetableFeature() {
  const { student, hasFullAccess } = useAuth();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const timetableHref = student
    ? student.currentLevel === 'UNIVERSITY'
      ? '/account'
      : student.currentLevel?.startsWith('SHS')
      ? '/shs/profile?tab=timetable'
      : '/jhs/profile?tab=timetable'
    : '/login?redirect=/jhs/profile?tab=timetable';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="apple-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-slate-700" />
            <span>Study Timetable Planner</span>
            {!hasFullAccess && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#515154] pl-1 border-l border-slate-300">
                <Lock className="w-2.5 h-2.5" />
                Full Pass
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Personalized Daily Study Timetable &amp; Exam Pacer
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Auto-generate a daily revision schedule tailored to your syllabus, exam targets, and weak topics. Stay paced every week with zero exam panic.
          </p>
        </div>

        <div className="shrink-0">
          {hasFullAccess ? (
            <Link
              href={timetableHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D1D1F] hover:bg-black text-white font-medium text-xs transition shadow-xs cursor-pointer active:scale-95"
            >
              <span>Open Timetable Planner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setShowPaymentModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D1D1F] hover:bg-black text-white font-medium text-xs transition shadow-xs cursor-pointer active:scale-95"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Unlock Study Timetable</span>
            </button>
          )}
        </div>
      </div>

      <PaystackPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        featureName="Personal Study Timetable Planner"
      />
    </section>
  );
}
