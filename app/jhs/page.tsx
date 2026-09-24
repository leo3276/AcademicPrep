'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { EducationLevel } from '@/lib/types';
import { 
  Calculator, 
  FlaskConical, 
  BookOpen, 
  Globe2, 
  Cpu, 
  HeartHandshake, 
  Languages,
  BookA,
  Wrench,
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  KeyRound,
  Trophy,
  GraduationCap
} from 'lucide-react';
import SubjectIcon from '@/components/SubjectIcon';

export default function JhsPortalPage() {
  const { student, topicProgress } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('JHS 1');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (student?.currentLevel) {
      setSelectedLevel(student.currentLevel);
    }
  }, [student]);

  // Filter topics for the selected JHS level
  const levelTopics = JHS_CURRICULUM_TOPICS.filter((t) => t.level === selectedLevel);
  const completedTopicsCount = mounted 
    ? levelTopics.filter((t) => topicProgress[t.id]?.completed).length 
    : 0;
  const progressPercent = levelTopics.length > 0 
    ? Math.round((completedTopicsCount / levelTopics.length) * 100) 
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              GES / NaCCA Standard Curriculum
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Junior High School Curriculum Portal
          </h1>
          <p className="text-xs text-slate-600">
            {mounted && student 
              ? `Logged in as ${student.fullName} (${student.phoneNumber})` 
              : 'Sign in with your phone & PIN to save your quiz progress and weekly exam scores.'}
          </p>
        </div>

        {/* Level Switcher (JHS 1 / 2 / 3) */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          {(['JHS 1', 'JHS 2', 'JHS 3'] as EducationLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedLevel === lvl
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Progress & Dynamic Exam Trigger Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {selectedLevel} Topic Mastery
            </span>
            <span className="text-xs font-bold text-blue-600 font-mono">
              {completedTopicsCount} / {levelTopics.length} Done
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>{progressPercent}% Completed</span>
              <span>Pass score: 60%+ per quiz</span>
            </div>
          </div>

          {!student?.hasFullAccess && (
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-800 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                Free Trial: Topic 1 of each subject is unlocked.
              </span>
            </div>
          )}
        </div>

        {/* Dynamic Weekly Exam Card */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Dynamic Test Engine
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Smart Weekly Examination</h3>
            <p className="text-xs text-amber-50 max-w-lg leading-relaxed">
              Generates a timed CBT examination based solely on the topics you have completed in {selectedLevel}. As you study more topics, your weekly exam adapts automatically.
            </p>
          </div>

          <Link
            href="/jhs/weekly-exam"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-amber-50 text-amber-900 font-bold text-xs shrink-0 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Start Weekly Exam</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Core Subjects Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Core {selectedLevel} Subjects
          </h2>
          <span className="text-xs text-slate-500">{CURRICULUM_SUBJECTS.length} GES Accredited Subjects</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM_SUBJECTS.map((subject) => {
            const subjectTopics = levelTopics.filter((t) => t.subjectId === subject.id);
            const passedInSubject = subjectTopics.filter((t) => topicProgress[t.id]?.completed).length;

            return (
              <div
                key={subject.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${subject.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <SubjectIcon subjectId={subject.id} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase font-mono">
                      {subject.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {subjectTopics.length} Curriculum Topics • Quizzes included
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                      <span>Completed Topics</span>
                      <span>
                        {passedInSubject} / {subjectTopics.length}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${subjectTopics.length > 0 ? (passedInSubject / subjectTopics.length) * 100 : 0}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/jhs/${subject.id}?level=${encodeURIComponent(selectedLevel)}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition-colors"
                  >
                    <span>View {selectedLevel} Topics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
