'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { CurriculumService } from '@/lib/curriculumService';
import { SHS_CORE_SUBJECTS } from '@/lib/curriculumShsData';
import { SHS_ELECTIVE_GROUPS, ElectiveGroup } from '@/lib/curriculumShsElectives';
import { EducationLevel, CurriculumTopic } from '@/lib/types';
import { 
  GraduationCap, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle, 
  Trophy,
  ChevronRight,
  BookMarked,
  Briefcase,
  Sprout,
  Palette,
  FlaskConical,
  X,
  Crown,
  FileCheck
} from 'lucide-react';
import SubjectIcon from '@/components/SubjectIcon';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';
import { fetchUploadedDocuments } from '@/lib/pdfStore';

export default function ShsPortalPage() {
  const router = useRouter();
  const { student, isLoading, topicProgress, isTrialActive, trialDaysRemaining, hasFullAccess } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('SHS 1');
  const [selectedElectiveGroup, setSelectedElectiveGroup] = useState<string>('general-arts');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [uploadedWassceCount, setUploadedWassceCount] = useState(0);
  const [uploadedShsMockCount, setUploadedShsMockCount] = useState(0);

  useEffect(() => {
    fetchUploadedDocuments().then((docs) => {
      setUploadedWassceCount(docs.filter(d => d.category === 'wassce_past_question').length);
      setUploadedShsMockCount(docs.filter(d => d.category === 'shs_trial_mock').length);
    }).catch(() => {});
  }, []);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_shs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['SHS 1', 'SHS 2', 'SHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setSelectedLevel(urlLevel);
        localStorage.setItem('academicprep_shs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setSelectedLevel(savedLevel);
      } else if (student?.currentLevel && validLevels.includes(student.currentLevel)) {
        setSelectedLevel(student.currentLevel);
      }
    }
  }, [student]);

  const handleLevelSelect = (lvl: EducationLevel) => {
    setSelectedLevel(lvl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_shs_level', lvl);
      const url = new URL(window.location.href);
      url.searchParams.set('level', lvl);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Core topics for selected level
  const coreTopics = CurriculumService.getTopics(selectedLevel).filter((t) =>
    SHS_CORE_SUBJECTS.some((s) => s.id === t.subjectId)
  );

  // Active elective group
  const activeGroup = SHS_ELECTIVE_GROUPS.find((g) => g.id === selectedElectiveGroup) || SHS_ELECTIVE_GROUPS[0];
  const activeGroupTopics = CurriculumService.getTopicsForElectiveGroup(activeGroup.id);

  // Total topics & progress
  const allShsTopics = [
    ...CurriculumService.getTopics(selectedLevel),
    ...activeGroupTopics,
  ];
  const uniqueTopics = Array.from(new Map(allShsTopics.map((t) => [t.id, t])).values());
  const completedTopicsCount = mounted
    ? uniqueTopics.filter((t) => topicProgress[t.id]?.completed).length
    : 0;
  const progressPercent = uniqueTopics.length > 0
    ? Math.round((completedTopicsCount / uniqueTopics.length) * 100)
    : 0;

  // Search results
  const searchResults: CurriculumTopic[] = searchQuery.trim().length > 0
    ? CurriculumService.searchTopics(searchQuery, selectedLevel).filter(
        (t) => t.level?.startsWith('SHS') || activeGroupTopics.some((agt) => agt.id === t.id)
      )
    : [];

  const getElectiveIcon = (id: string) => {
    switch (id) {
      case 'general-science':
        return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'business':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'general-arts':
        return <BookMarked className="w-5 h-5 text-purple-600" />;
      case 'visual-arts':
        return <Palette className="w-5 h-5 text-amber-600" />;
      case 'agriculture':
        return <Sprout className="w-5 h-5 text-green-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white shadow-lg">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              WAEC / WASSCE Standard Syllabus
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Senior High School (SHS) Learning Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Master the 4 Compulsory Core Subjects and 5 Elective Programme Strands with detailed lesson notes, worked examples, and interactive WASSCE-standard quizzes.
          </p>
        </div>

        {/* Level Switcher (SHS 1, 2, 3) */}
        <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md self-start md:self-auto">
          {(['SHS 1', 'SHS 2', 'SHS 3'] as EducationLevel[]).map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => handleLevelSelect(lvl)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedLevel === lvl
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Free Trial Banner */}
      {mounted && isTrialActive && (
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200/80 text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-base">🎁</span>
            <span className="font-semibold">30-Day Free Trial Active: {trialDaysRemaining} days remaining of full access across all SHS Core &amp; Electives!</span>
          </div>
          <button
            type="button"
            onClick={() => setShowPaymentModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-blue-200 text-blue-700 font-bold text-xs transition cursor-pointer whitespace-nowrap self-start sm:self-auto shadow-2xs"
          >
            VIP Pass
          </button>
        </div>
      )}
      {mounted && !hasFullAccess && !isTrialActive && (
        <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Your 30-day free trial has expired. Upgrade to VIP to unlock all SHS Core &amp; Elective lesson notes and quizzes.</span>
          </div>
          <button
            type="button"
            onClick={() => setShowPaymentModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-medium text-xs transition cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            Unlock VIP (GH₵ 25)
          </button>
        </div>
      )}

      {/* Progress & Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Progress Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Study Progress ({selectedLevel})</span>
            </div>
            <div className="text-xl font-bold text-slate-900">
              {completedTopicsCount} <span className="text-xs text-slate-400 font-normal">topics completed</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-black text-blue-600">{progressPercent}%</span>
            <div className="w-24 bg-slate-100 rounded-full h-2 mt-1.5 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="md:col-span-2 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics by title, keyword, or concept across SHS Core & Electives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Live Search Results Popup */}
          {searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl max-h-96 overflow-y-auto z-30 p-2 space-y-1">
              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500">
                  No matching topics found for &quot;{searchQuery}&quot;.
                </div>
              ) : (
                searchResults.map((t) => {
                  const subj = CurriculumService.getSubjectById(t.subjectId);
                  return (
                    <Link
                      key={t.id}
                      href={`/shs/${t.subjectId}/${t.id}?level=${encodeURIComponent(t.level)}`}
                      className="p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between gap-3 text-xs transition-colors group"
                    >
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                            {subj?.name || t.subjectId}
                          </span>
                          <span className="text-[10px] text-slate-400">{t.level}</span>
                        </div>
                        <h4 className="font-bold text-slate-800 truncate group-hover:text-blue-600">
                          {t.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate">{t.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* WASSCE PAST QUESTIONS & TRIAL MOCKS QUICK CARDS          */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WASSCE Past Questions Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-purple-400 shadow-sm transition space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                WAEC Official
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {uploadedWassceCount > 0 ? `${uploadedWassceCount} PDFs Available` : 'Admin Upload Archive'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              WASSCE Past Questions (2008 – 2026)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Authentic WAEC WASSCE question papers, objective tests, theory booklets, and marking schemes across Core and Elective subjects.
            </p>
          </div>
          <Link
            href="/shs/wassce-past-questions"
            className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open WASSCE Past Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* SHS Trial Questions Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm transition space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Mock Examinations
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {uploadedShsMockCount > 0 ? `${uploadedShsMockCount} PDFs Available` : 'Diagnostic Papers'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-600" />
              SHS Trial Questions &amp; Mock Exams
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diagnostic terminal tests, inter-school trial mocks, and preparation papers uploaded by faculty for SHS 1, SHS 2, and SHS 3.
            </p>
          </div>
          <Link
            href="/shs/trial-questions"
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Open SHS Trial Mocks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. COMPULSORY CORE SUBJECTS SECTION                      */}
      {/* ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Compulsory Core Subjects
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Every SHS candidate sits for these four subjects under the WAEC syllabus.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            4 Core Subjects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SHS_CORE_SUBJECTS.map((subject) => {
            const subjectTopics = CurriculumService.getTopics(selectedLevel, subject.id);
            const completedCount = mounted
              ? subjectTopics.filter((t) => topicProgress[t.id]?.completed).length
              : 0;
            const quizzesCount = subjectTopics.filter((t) => t.quiz?.questions?.length).length;

            return (
              <Link
                key={subject.id}
                href={`/shs/${subject.id}?level=${encodeURIComponent(selectedLevel)}`}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${subject.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <SubjectIcon subjectId={subject.id} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {subject.code}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1.5">
                    <span>{subjectTopics.length} Topics ({selectedLevel})</span>
                    <span>•</span>
                    <span>{quizzesCount} Quizzes</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Explore Lessons</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. ELECTIVE PROGRAMME STRANDS SECTION                    */}
      {/* ======================================================== */}
      <section className="space-y-5 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                WASSCE Elective Programmes & Strands
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive syllabuses for General Arts, Business, Agriculture, Visual Arts, and General Science.
            </p>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start sm:self-auto">
            5 Elective Programmes Live
          </span>
        </div>

        {/* Elective Strand Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SHS_ELECTIVE_GROUPS.map((group) => {
            const isSelected = selectedElectiveGroup === group.id;
            const topicsCount = CurriculumService.getTopicsForElectiveGroup(group.id).length;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedElectiveGroup(group.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'border-purple-600 bg-purple-50/80 text-purple-900 ring-2 ring-purple-500/20 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="p-1 rounded-lg bg-white shadow-xs">
                  {getElectiveIcon(group.id)}
                </div>
                <div className="text-left">
                  <div className="font-extrabold">{group.name}</div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {group.subjects.length} Subjects • {topicsCount} Topics
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Strand Banner & Subjects Grid */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  {activeGroup.name} Programme
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                {activeGroup.tagline}
              </h3>
            </div>
            <div className="text-xs font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
              Total Topics in Strand: <b className="text-purple-700 font-mono">{activeGroupTopics.length}</b>
            </div>
          </div>

          {/* Subjects inside Selected Strand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeGroup.subjects.map((subj) => {
              const subjTopics = CurriculumService.getTopics(selectedLevel, subj.id);
              const quizzesCount = subjTopics.filter((t) => t.quiz?.questions?.length).length;

              return (
                <Link
                  key={subj.id}
                  href={`/shs/${subj.id}?level=${encodeURIComponent(selectedLevel)}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <SubjectIcon subjectId={subj.id} className="w-5 h-5 text-purple-700" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {subj.code}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-purple-700 transition-colors">
                        {subj.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {subjTopics.length} Topics • {quizzesCount} Practice Quizzes
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-700 group-hover:text-purple-800">
                    <span>Study Notes & Quizzes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIP Payment Modal */}
      <PaystackPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        featureName="AcademicPrep VIP (SHS)"
      />
    </div>
  );
}
