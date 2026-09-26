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
  GraduationCap,
  FileCheck,
  FileText
} from 'lucide-react';
import SubjectIcon from '@/components/SubjectIcon';
import { fetchUploadedDocuments } from '@/lib/pdfStore';

export default function JhsPortalPage() {
  const { student, topicProgress } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('JHS 1');
  const [mounted, setMounted] = useState(false);
  const [uploadedMocksCount, setUploadedMocksCount] = useState(0);
  const [uploadedBeceCount, setUploadedBeceCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_jhs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['JHS 1', 'JHS 2', 'JHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setSelectedLevel(urlLevel);
        localStorage.setItem('academicprep_jhs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setSelectedLevel(savedLevel);
      } else if (student?.currentLevel && validLevels.includes(student.currentLevel)) {
        setSelectedLevel(student.currentLevel);
      }

      fetchUploadedDocuments().then((docs) => {
        setUploadedMocksCount(docs.filter((d) => d.category === 'trial_mock').length);
        setUploadedBeceCount(docs.filter((d) => d.category === 'bece_past_question').length);
      }).catch(console.error);
    }
  }, [student]);

  const handleLevelSelect = (lvl: EducationLevel) => {
    setSelectedLevel(lvl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_jhs_level', lvl);
      const url = new URL(window.location.href);
      url.searchParams.set('level', lvl);
      window.history.replaceState({}, '', url.toString());
    }
  };

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
              onClick={() => handleLevelSelect(lvl)}
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

        {/* BECE Past Questions Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                WAEC Official
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {uploadedBeceCount > 0 ? `${uploadedBeceCount} PDFs Available` : 'Admin Upload Archive'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              BECE Past Questions (2008 – 2026)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Authentic WAEC BECE past question papers, objective tests, theory booklets, and marking guides uploaded by school administration.
            </p>
          </div>
          <Link
            href="/jhs/bece-past-questions"
            className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open BECE Past Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Trial Questions Card (Uploaded by Admin) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm transition space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Live Admin Uploads
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {uploadedMocksCount > 0 ? `${uploadedMocksCount} PDFs Available` : 'Admin Upload Portal'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              Trial Questions & Mocks
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official diagnostic trial mock exams and end-of-term assessment booklets uploaded directly by your administrator for viewing & download.
            </p>
          </div>
          <Link
            href="/jhs/trial-questions"
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Open Trial Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Adaptive Weekly Exam Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Curriculum Adaptive Engine
          </div>
          <h3 className="text-base sm:text-lg font-bold">Personalized Weekly Revision Exam</h3>
          <p className="text-xs text-amber-50 max-w-xl leading-relaxed">
            Generates a timed CBT examination based solely on the topics you have completed in {selectedLevel}.
          </p>
        </div>

        <Link
          href="/jhs/weekly-exam"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 font-bold text-xs shrink-0 transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Start Weekly Exam</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
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
