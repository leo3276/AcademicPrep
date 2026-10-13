'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Download, 
  Printer, 
  RotateCcw, 
  Check, 
  ChevronRight,
  BookOpen,
  ArrowRight,
  Bell,
  BellRing,
  Smartphone
} from 'lucide-react';
import { EducationLevel } from '@/lib/types';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';
import { 
  PersonalTimetable, 
  TimetablePreferences, 
  TimetableSession 
} from '@/lib/timetableTypes';
import { 
  generatePersonalTimetable, 
  loadTimetableFromStorage, 
  saveTimetableToStorage 
} from '@/lib/timetableGenerator';
import { exportTimetablePdf } from '@/lib/timetablePdfExport';
import { 
  getNextScheduledSession, 
  requestNotificationPermission, 
  sendStudyNotification, 
  downloadTimetableIcs,
  NextSessionInfo 
} from '@/lib/timetableReminders';
import TimetableSurveyModal from './TimetableSurveyModal';

interface StudentTimetablePlannerProps {
  studentId: string;
  studentName: string;
  studentLevel: EducationLevel;
  initialWeakSubjects?: string[];
  initialWeakTopics?: string[];
}

export default function StudentTimetablePlanner({
  studentId,
  studentName,
  studentLevel,
  initialWeakSubjects = [],
  initialWeakTopics = [],
}: StudentTimetablePlannerProps) {
  const [timetable, setTimetable] = useState<PersonalTimetable | null>(null);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [selectedDayTab, setSelectedDayTab] = useState<string>('ALL');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSuccessMessage, setPdfSuccessMessage] = useState(false);
  const [icsSuccessMessage, setIcsSuccessMessage] = useState(false);
  const [notificationSuccessMessage, setNotificationSuccessMessage] = useState(false);
  const [hasNotificationPermission, setHasNotificationPermission] = useState(false);
  const [nextSession, setNextSession] = useState<NextSessionInfo | null>(null);

  // Load saved timetable from localStorage on mount
  useEffect(() => {
    const saved = loadTimetableFromStorage();
    if (saved) {
      setTimetable(saved);
    }
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setHasNotificationPermission(Notification.permission === 'granted');
    }
  }, []);

  // Compute upcoming session & periodic check for live reminders
  useEffect(() => {
    if (!timetable) return;

    const updateUpcoming = () => {
      const next = getNextScheduledSession(timetable);
      setNextSession(next);

      // If user enabled notifications, alert when session is about to start
      if (next && next.isToday && next.minutesUntilStart <= 10 && next.minutesUntilStart >= 0) {
        const notifKey = `study_notif_${next.session.id}_${new Date().toDateString()}`;
        if (typeof window !== 'undefined' && !sessionStorage.getItem(notifKey)) {
          if (Notification.permission === 'granted') {
            sendStudyNotification(
              `Study Session Starting: ${next.session.subjectName}`,
              `Time for "${next.session.topicTitle}" (${next.timeSlot}). Open your revision materials!`,
              timetable.level.startsWith('SHS') ? `/shs/${next.session.subjectId}` : `/jhs/${next.session.subjectId}`
            );
            sessionStorage.setItem(notifKey, 'sent');
          }
        }
      }
    };

    updateUpcoming();
    const interval = setInterval(updateUpcoming, 30000);
    return () => clearInterval(interval);
  }, [timetable]);

  const handleRequestNotifications = async () => {
    const granted = await requestNotificationPermission();
    setHasNotificationPermission(granted);
    if (granted) {
      setNotificationSuccessMessage(true);
      sendStudyNotification(
        'Study Reminders Active',
        'AcademicPrep will now alert you when your scheduled revision sessions are starting!'
      );
      setTimeout(() => setNotificationSuccessMessage(false), 3500);
    }
  };

  const handleDownloadIcs = () => {
    if (!timetable) return;
    downloadTimetableIcs(timetable);
    setIcsSuccessMessage(true);
    setTimeout(() => setIcsSuccessMessage(false), 4000);
  };

  const handleGenerateFromSurvey = (preferences: TimetablePreferences, chosenLevel?: EducationLevel) => {
    const levelToUse = chosenLevel || studentLevel;
    const newTimetable = generatePersonalTimetable(
      studentId,
      studentName,
      levelToUse,
      preferences
    );
    setTimetable(newTimetable);
    saveTimetableToStorage(newTimetable);
  };

  const handleToggleSessionComplete = (sessionId: string) => {
    if (!timetable) return;
    const completedSet = new Set(timetable.completedSessionIds || []);
    if (completedSet.has(sessionId)) {
      completedSet.delete(sessionId);
    } else {
      completedSet.add(sessionId);
    }

    const updated: PersonalTimetable = {
      ...timetable,
      completedSessionIds: Array.from(completedSet),
    };
    setTimetable(updated);
    saveTimetableToStorage(updated);
  };

  const handleDownloadPdf = async () => {
    if (!timetable) return;
    setIsGeneratingPdf(true);
    setPdfSuccessMessage(false);
    try {
      await exportTimetablePdf(timetable);
      setPdfSuccessMessage(true);
      setTimeout(() => setPdfSuccessMessage(false), 3000);
    } catch (e) {
      console.error('Failed to export PDF', e);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Completion stats
  const totalSessionsCount = useMemo(() => {
    if (!timetable) return 0;
    return Object.values(timetable.weeklySchedule).reduce((acc, sess) => acc + sess.length, 0);
  }, [timetable]);

  const completedSessionsCount = useMemo(() => {
    if (!timetable) return 0;
    return timetable.completedSessionIds?.length || 0;
  }, [timetable]);

  const completionPercentage = totalSessionsCount > 0 
    ? Math.round((completedSessionsCount / totalSessionsCount) * 100) 
    : 0;

  // Days list for tabs
  const daysList = useMemo(() => {
    if (!timetable) return [];
    return Object.keys(timetable.weeklySchedule);
  }, [timetable]);

  // Filtered sessions based on active tab
  const displayedScheduleEntries = useMemo(() => {
    if (!timetable) return [];
    if (selectedDayTab === 'ALL') {
      return Object.entries(timetable.weeklySchedule);
    }
    return [[selectedDayTab, timetable.weeklySchedule[selectedDayTab] || []]] as [string, TimetableSession[]][];
  }, [timetable, selectedDayTab]);

  return (
    <div className="space-y-5">
      {/* ============================================================ */}
      {/* 1. NO TIMETABLE: MINIMAL ONBOARDING CTA                      */}
      {/* ============================================================ */}
      {!timetable ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-5 border-b border-slate-100">
            <div className="space-y-1 max-w-lg">
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                Personal Study Timetable
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Generate a structured revision schedule that assigns specific curriculum topics for each day, prioritizes your weakest subjects, and exports to a clean printable PDF.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSurveyOpen(true)}
              className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0 shadow-2xs"
            >
              <span>Prepare Timetable</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1">
              <p className="text-xs font-semibold text-slate-800">Specific Syllabus Topics</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Every study session specifies an exact topic from your JHS syllabus.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1">
              <p className="text-xs font-semibold text-slate-800">Weak Subject Focus</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Prioritizes topics you struggle with using active recall intervals.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1">
              <p className="text-xs font-semibold text-slate-800">Printable PDF Export</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Download a clean vector A4 timetable to pin to your study desk.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================ */
        /* 2. ACTIVE PERSONAL TIMETABLE (MINIMALIST)                    */
        /* ============================================================ */
        <div className="space-y-4">
          {/* Live Next Session Reminder Banner */}
          {nextSession && (
            <div className="p-4 rounded-2xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                  nextSession.isHappeningNow 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700 animate-pulse' 
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <BellRing className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">
                      {nextSession.isHappeningNow ? 'Session In Progress' : 'Next Scheduled Session'}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {nextSession.isToday ? 'Today' : nextSession.day} &bull; {nextSession.timeSlot}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    <strong className="text-slate-800">{nextSession.session.subjectName}</strong> &bull; {nextSession.session.topicTitle}
                    {nextSession.isHappeningNow 
                      ? ' (Study session underway)' 
                      : nextSession.minutesUntilStart < 60 
                        ? ` (Starts in ${nextSession.minutesUntilStart} mins)` 
                        : ` (Starts in ${Math.round(nextSession.minutesUntilStart / 60)} hrs)`
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <Link
                  href={timetable.level.startsWith('SHS') ? `/shs/${nextSession.session.subjectId}` : `/jhs/${nextSession.session.subjectId}`}
                  className="py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition flex items-center gap-1 shadow-2xs"
                >
                  <span>Start Practice</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}

          {/* Header Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold text-slate-900 tracking-tight">
                    Weekly Study Timetable
                  </h2>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {timetable.preferences.intensity} &bull; {timetable.totalWeeklyHours}h/wk
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {timetable.preferences.daysPerWeek} days/week &bull; {timetable.preferences.dailyRhythm.replace(/_/g, ' ')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition flex items-center gap-1.5 cursor-pointer disabled:bg-slate-300 shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isGeneratingPdf ? 'Generating...' : 'Download PDF'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  title="Add recurring reminders with 10-minute alarms to your iPhone, Android, or Google Calendar"
                  className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Phone Reminders (.ics)</span>
                </button>

                {!hasNotificationPermission ? (
                  <button
                    type="button"
                    onClick={handleRequestNotifications}
                    title="Enable browser alerts before each study session"
                    className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs transition flex items-center gap-1 cursor-pointer"
                  >
                    <Bell className="w-3.5 h-3.5 text-slate-400" />
                    <span>Web Alerts</span>
                  </button>
                ) : (
                  <span className="py-1.5 px-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-1">
                    <BellRing className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Alerts Active</span>
                  </span>
                )}

                <button
                  type="button"
                  onClick={handlePrint}
                  className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-400" />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSurveyOpen(true)}
                  className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reconfigure</span>
                </button>
              </div>
            </div>

            {pdfSuccessMessage && (
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>PDF downloaded cleanly without collisions. Ready to print.</span>
              </div>
            )}

            {icsSuccessMessage && (
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>Weekly schedule (.ics) downloaded! Open on iPhone, Android, or PC to add 10-min study alarms.</span>
              </div>
            )}

            {notificationSuccessMessage && (
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                <BellRing className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Browser notifications active! You will receive an alert before each study session.</span>
              </div>
            )}

            {/* Weekly Completion Progress */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span>Progress:</span>
                <span className="font-mono font-medium text-slate-900">
                  {completedSessionsCount}/{totalSessionsCount} sessions completed ({completionPercentage}%)
                </span>
              </div>

              <div className="w-full sm:w-48 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-slate-900 h-1.5 rounded-full transition-all duration-200"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            {/* Priority Weak Subjects Tag Strip */}
            {timetable.preferences.weakSubjectIds.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 text-xs pt-1">
                <span className="text-[11px] text-slate-400 font-medium">Prioritizing:</span>
                {timetable.preferences.weakSubjectIds.map((sid) => {
                  const subj = CURRICULUM_SUBJECTS.find((s) => s.id === sid);
                  return (
                    <span
                      key={sid}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-medium"
                    >
                      {subj?.name || sid}
                    </span>
                  );
                })}
                {timetable.targetedWeakTopicsCount > 0 && (
                  <span className="text-[11px] text-slate-400">
                    ({timetable.targetedWeakTopicsCount} specific topics)
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Day Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedDayTab('ALL')}
              className={`py-1.5 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                selectedDayTab === 'ALL'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Days
            </button>

            {daysList.map((day) => {
              const isSelected = selectedDayTab === day;
              const daySessions = timetable.weeklySchedule[day] || [];
              const dayCompletedCount = daySessions.filter((s) =>
                timetable.completedSessionIds?.includes(s.id)
              ).length;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDayTab(day)}
                  className={`py-1.5 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer border ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{day}</span>
                  <span
                    className={`text-[10px] font-mono px-1 rounded ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {dayCompletedCount}/{daySessions.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Schedule Entries */}
          <div className="space-y-4">
            {displayedScheduleEntries.map(([day, sessions]) => (
              <div
                key={day}
                className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{day}</h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {sessions.filter((s) => timetable.completedSessionIds?.includes(s.id)).length}/{sessions.length} done
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sessions.map((sess) => {
                    const isCompleted = timetable.completedSessionIds?.includes(sess.id);

                    return (
                      <div
                        key={sess.id}
                        className={`p-3.5 rounded-xl border transition flex flex-col justify-between space-y-2.5 ${
                          isCompleted
                            ? 'bg-slate-50/60 border-slate-200 opacity-70'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {/* Time & Complete Toggle */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 font-mono text-[11px]">{sess.timeSlot}</span>
                          <button
                            type="button"
                            onClick={() => handleToggleSessionComplete(sess.id)}
                            className={`py-0.5 px-2 rounded text-[10px] font-semibold transition cursor-pointer flex items-center gap-1 ${
                              isCompleted
                                ? 'bg-slate-900 text-white'
                                : 'border border-slate-200 text-slate-500 hover:text-slate-800'
                            }`}
                          >
                            {isCompleted && <Check className="w-2.5 h-2.5" />}
                            <span>{isCompleted ? 'Done' : 'Mark Done'}</span>
                          </button>
                        </div>

                        {/* Subject & Topic */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-500">
                              {sess.subjectName}
                            </span>
                            {sess.isWeakSubject && (
                              <span className="text-[9px] px-1 py-0.2 rounded bg-rose-50 text-rose-700 font-medium">
                                Priority
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 leading-snug">
                            {sess.topicTitle}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            {sess.learningObjective}
                          </p>
                        </div>

                        {/* Lesson Link */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <Link
                            href={timetable?.level.startsWith('SHS') ? `/shs/${sess.subjectId}` : `/jhs/${sess.subjectId}`}
                            className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 font-semibold text-[11px] transition"
                          >
                            <span>Open Lessons</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {sess.studyMode.replace(/_/g, ' ')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Minimalist Study Tip Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">{timetable?.level.startsWith('SHS') ? 'WASSCE Study Rule:' : 'WAEC Study Rule:'}</p>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Spend the first 15 minutes reviewing key concept definitions, then spend 25 minutes solving diagnostic questions on AcademicPrep. Record every missed answer in your revision notebook.
            </p>
          </div>
        </div>
      )}

      {/* Survey Modal */}
      <TimetableSurveyModal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        studentLevel={studentLevel}
        initialWeakSubjects={timetable?.preferences.weakSubjectIds || initialWeakSubjects}
        initialWeakTopics={timetable?.preferences.weakTopicIds || initialWeakTopics}
        onGenerate={handleGenerateFromSurvey}
      />
    </div>
  );
}
