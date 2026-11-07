'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Bell, 
  BookOpen, 
  Layers, 
  Check,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import TimetableSurveyModal from '@/components/TimetableSurveyModal';
import { generatePersonalTimetable, saveTimetableToStorage } from '@/lib/timetableGenerator';
import { exportTimetablePdf } from '@/lib/timetablePdfExport';
import { TimetablePreferences } from '@/lib/timetableTypes';

export default function HomeTimetableFeature() {
  const { student } = useAuth();
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const timetableTargetHref = student
    ? student.currentLevel === 'UNIVERSITY'
      ? '/account'
      : student.currentLevel?.startsWith('SHS')
      ? '/shs/profile?tab=timetable'
      : '/jhs/profile?tab=timetable'
    : '/login?redirect=/jhs/profile?tab=timetable';

  const handleQuickDownloadSample = () => {
    setDownloading(true);
    try {
      const samplePrefs: TimetablePreferences = {
        targetGoal: 'BECE_PREP',
        intensity: 'BALANCED',
        dailyRhythm: 'DAWN_AND_EVENING',
        daysPerWeek: 6,
        sessionDurationMinutes: 45,
        weakSubjectIds: ['math', 'science'],
        weakTopicIds: [],
        strongSubjectIds: ['english'],
        includeWeekendMock: true,
      };

      const sample = generatePersonalTimetable(
        'sample-student',
        student?.fullName || 'AcademicPrep Candidate',
        (student?.currentLevel as any) || 'JHS 3',
        samplePrefs
      );

      exportTimetablePdf(sample);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to export sample PDF', err);
    } finally {
      setDownloading(false);
    }
  };

  const handleSurveyComplete = (prefs: TimetablePreferences, chosenLevel?: any) => {
    if (!student) return;
    const tt = generatePersonalTimetable(
      student.id,
      student.fullName || 'Candidate',
      chosenLevel || student.currentLevel,
      prefs
    );
    saveTimetableToStorage(tt);
    setSurveyOpen(false);
    if (typeof window !== 'undefined') {
      window.location.href = timetableTargetHref;
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs transition-all hover:border-slate-300">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>Smart Timetable &amp; Study Pacer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Personalized Daily Study Timetable &amp; Exam Revision Pacer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero exam panic. AcademicPrep dynamically builds a daily revision schedule matched to your school calendar, NaCCA / WAEC syllabus pacing, and targets weak topics automatically based on your diagnostic quizzes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {student ? (
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-500/20 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Configure My Timetable</span>
                </button>
              ) : (
                <Link
                  href="/login?redirect=/jhs/profile?tab=timetable"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-500/20 active:scale-95 text-center"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Free Timetable</span>
                </Link>
              )}

              <button
                type="button"
                onClick={handleQuickDownloadSample}
                disabled={downloading}
                className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition shadow-2xs cursor-pointer active:scale-95"
                title="Download verified sample PDF study timetable"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">Downloaded Sample</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-600" />
                    <span>Sample Timetable PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left: 3 Core Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Adaptive Weak-Topic Pacing</h4>
                </div>
                <p className="text-xs text-slate-600 pl-10 leading-relaxed">
                  The engine scans your quiz history. Topics with scores under 70% automatically get priority morning and evening study blocks.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Built-in Rest &amp; Focus Rhythm</h4>
                </div>
                <p className="text-xs text-slate-600 pl-10 leading-relaxed">
                  Sessions are calibrated to 45–60 minute deep focus intervals with healthy rest breaks so students never burn out before exam day.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Phone Calendar (.ics) &amp; Print Ready</h4>
                </div>
                <p className="text-xs text-slate-600 pl-10 leading-relaxed">
                  Export reminder alerts directly to Google Calendar, Apple Calendar, or print a clean study poster to hang above your desk.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={timetableTargetHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  <span>Open Full Study Planner Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Live Interactive Timetable Card Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                
                {/* Preview Topbar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900">Today&apos;s Active Study Schedule</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    Syllabus Standard
                  </span>
                </div>

                {/* Schedule Blocks */}
                <div className="space-y-2.5">
                  {/* Slot 1 */}
                  <div className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/40 flex items-start justify-between gap-3 transition hover:bg-blue-50/70">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-2xs">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-900">Mathematics</span>
                          <span className="text-[10px] font-semibold text-blue-700 bg-white px-2 py-0.2 rounded border border-blue-200">
                            High Priority
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium">
                          Linear Equations &amp; Word Problems • Active Recall &amp; Worked Examples
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 shrink-0">
                      06:00 – 07:00 AM
                    </span>
                  </div>

                  {/* Slot 2 */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-3 transition hover:bg-slate-50">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 font-bold text-xs">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-900">Integrated Science</span>
                          <span className="text-[10px] font-medium text-slate-600 bg-white px-2 py-0.2 rounded border border-slate-200">
                            Diagnostic Quiz
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium">
                          Digestive &amp; Circulatory Systems in Humans • CBT Practice Quiz
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 shrink-0">
                      04:30 – 05:30 PM
                    </span>
                  </div>

                  {/* Slot 3 */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-3 transition hover:bg-slate-50">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 font-bold text-xs">
                        <Layers className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-900">English Language</span>
                          <span className="text-[10px] font-medium text-slate-600 bg-white px-2 py-0.2 rounded border border-slate-200">
                            Past Paper Review
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium">
                          Formal Letter Writing &amp; Comprehension Marking Scheme Analysis
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 shrink-0">
                      07:00 – 08:00 PM
                    </span>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Includes 30-Day Free Trial unlimited revisions</span>
                  </div>
                  <Link
                    href={timetableTargetHref}
                    className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
                  >
                    <span>View full weekly schedule</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Survey Modal for Direct Home Creation */}
      {surveyOpen && (
        <TimetableSurveyModal
          isOpen={surveyOpen}
          onClose={() => setSurveyOpen(false)}
          onGenerate={handleSurveyComplete}
          studentLevel={(student?.currentLevel as any) || 'JHS 3'}
        />
      )}
    </>
  );
}
