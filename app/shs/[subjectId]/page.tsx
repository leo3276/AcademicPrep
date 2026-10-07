'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CurriculumService } from '@/lib/curriculumService';
import { EducationLevel } from '@/lib/types';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Lock, 
  KeyRound,
  FileText,
  Lightbulb,
  Video,
  Crown,
  Sparkles,
  Trophy
} from 'lucide-react';
import SubjectIcon from '@/components/SubjectIcon';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';
import TopicShareButtons from '@/components/TopicShareButtons';

export default function ShsSubjectDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { student, topicProgress, redeemPin, isTrialActive, trialDaysRemaining, hasFullAccess } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');

  const subjectId = params.subjectId as string;
  const initialLevel = (searchParams.get('level') as EducationLevel) || 'SHS 1';
  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(
    initialLevel.startsWith('SHS') ? initialLevel : 'SHS 1'
  );

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlLevel = searchParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_shs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['SHS 1', 'SHS 2', 'SHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setCurrentLevel(urlLevel);
        localStorage.setItem('academicprep_shs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setCurrentLevel(savedLevel);
      }
    }
  }, [searchParams]);

  const handleLevelChange = (lvl: EducationLevel) => {
    setCurrentLevel(lvl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_shs_level', lvl);
      const url = new URL(window.location.href);
      url.searchParams.set('level', lvl);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Find subject details
  const subject = CurriculumService.getSubjectById(subjectId, currentLevel);
  // Get topics for this subject
  const topics = CurriculumService.getTopics(currentLevel, subjectId);

  // Is this an elective subject?
  const isElective = !['math', 'science', 'english', 'social'].includes(subjectId);

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">Subject Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The requested SHS curriculum subject does not exist.</p>
        <Link href={`/shs?level=${encodeURIComponent(currentLevel)}`} className="mt-4 inline-block text-xs font-bold text-blue-600">
          ← Back to SHS Portal
        </Link>
      </div>
    );
  }

  const completedCount = mounted
    ? topics.filter((t) => topicProgress[t.id]?.completed).length
    : 0;
  const progressPercent = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href={`/shs?level=${encodeURIComponent(currentLevel)}`} className="hover:text-slate-800 flex items-center gap-1 font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          SHS Portal
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-bold">{subject.name}</span>
      </div>

      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${subject.color || 'from-blue-600 to-indigo-700'} text-white flex items-center justify-center shadow-md shrink-0`}
          >
            <SubjectIcon subjectId={subject.id} className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase font-mono">
                {subject.code}
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                {isElective ? 'Elective Strand' : 'Compulsory Core'}
              </span>
              <span className="text-xs text-slate-500">WAEC / WASSCE Syllabus</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {subject.name}
            </h1>
            <p className="text-xs text-slate-500">
              {topics.length} Complete Curriculum Topics • Step-by-Step Lesson Notes & Quizzes
            </p>
          </div>
        </div>

        {/* Level Selector for Core subjects (SHS 1, 2, 3) */}
        {!isElective ? (
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Select Grade Level
            </span>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {(['SHS 1', 'SHS 2', 'SHS 3'] as EducationLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => handleLevelChange(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentLevel === lvl
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-100 text-xs text-purple-900 space-y-1 shrink-0">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Full 3-Year Strand Covered</span>
            </div>
            <div className="text-[11px] text-purple-700">
              All topics required for the WASSCE paper
            </div>
          </div>
        )}
      </div>

      {/* Progress Card */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span className="font-semibold text-slate-700">Topic Completion:</span>
          <span className="font-bold text-slate-900">
            {completedCount} of {topics.length} completed
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-blue-600">{progressPercent}%</span>
          <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 30-Day Free Trial / VIP Banner */}
      {mounted && isTrialActive && !student?.hasFullAccess ? (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <span className="text-base">🎁</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                30-Day Free Trial Active • All SHS Topics & Quizzes Unlocked!
              </p>
              <p className="text-[11px] text-slate-600">
                You have {trialDaysRemaining} days remaining of full, unrestricted access to all syllabus notes, worked examples, and practice quizzes.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setModalTab('pin');
              setShowPaymentModal(true);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-purple-700 font-bold text-xs whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Have a VIP PIN?</span>
          </button>
        </div>
      ) : mounted && !student?.hasFullAccess && !isTrialActive ? (
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Your 30-day free trial has expired. Upgrade to VIP to unlock all SHS lessons and quizzes.</span>
          </div>
          <button
            type="button"
            onClick={() => setShowPaymentModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-medium text-xs transition cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            Unlock VIP (GH₵ 25)
          </button>
        </div>
      ) : null}

      {/* Topics List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span>Syllabus Topics & Practice Quizzes</span>
            <span className="text-xs font-normal text-slate-500">({topics.length} topics)</span>
          </h2>
          <span className="text-xs text-slate-500">Every topic contains detailed notes & quizzes</span>
        </div>

        {topics.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No Topics Uploaded Yet for {currentLevel}</h3>
            <p className="text-xs text-slate-500">Additional topics are being structured for this level.</p>
          </div>
        ) : (
          <div className="space-y-3.5">
            {topics.map((topic, index) => {
              const progress = topicProgress[topic.id];
              const isCompleted = progress?.completed;
              const isLocked = mounted && !hasFullAccess;

              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border bg-white p-5 transition-all shadow-sm ${
                    isCompleted
                      ? 'border-emerald-200 ring-1 ring-emerald-100'
                      : isLocked
                      ? 'border-amber-200/60 bg-amber-50/20'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          Topic {index + 1}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Term {topic.term}
                        </span>
                        {topic.isFreeTrial || isTrialActive ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {isTrialActive ? 'Free Trial' : 'Free Topic'}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
                            <Crown className="w-3 h-3 text-amber-600" />
                            VIP Access
                          </span>
                        )}
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Passed ({progress.bestScorePercentage}%)
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/shs/${subjectId}/${topic.id}?level=${encodeURIComponent(topic.level || currentLevel)}`}
                        className="group inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                      >
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {topic.title}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                      <p className="text-xs text-slate-600 leading-relaxed">{topic.description}</p>

                      {/* Content Feature Badges */}
                      <div className="flex items-center gap-2 pt-1 flex-wrap">
                        <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-blue-600" />
                          Detailed Study Notes
                        </span>
                        {topic.examples && topic.examples.length > 0 && (
                          <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                            <Lightbulb className="w-3 h-3 text-amber-500" />
                            {topic.examples.length} Worked Examples
                          </span>
                        )}
                        {topic.quiz?.questions && topic.quiz.questions.length > 0 && (
                          <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-purple-100">
                            <HelpCircle className="w-3 h-3 text-purple-600" />
                            {topic.quiz.questions.length} Quiz Questions
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                      <TopicShareButtons
                        topicTitle={topic.title}
                        subjectName={subject?.name || 'Subject'}
                        level={topic.level || currentLevel}
                        urlPath={`/shs/${subjectId}/${topic.id}?level=${encodeURIComponent(topic.level || currentLevel)}`}
                        quizCount={topic.quiz?.questions?.length}
                        variant="compact"
                      />

                      <Link
                        href={`/shs/${subjectId}/${topic.id}?level=${encodeURIComponent(topic.level || currentLevel)}`}
                        className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 flex items-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Study Lesson</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Quiz Button */}
                      {isLocked ? (
                        <button
                          type="button"
                          onClick={() => {
                            setModalTab('momo');
                            setShowPaymentModal(true);
                          }}
                          className="px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-all flex items-center gap-1.5"
                        >
                          <Lock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Unlock Quiz</span>
                        </button>
                      ) : (
                        <Link
                          href={`/shs/quiz/${topic.id}`}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-800 hover:text-purple-900 text-xs font-bold transition-all flex items-center gap-1.5"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
                          <span>Take Quiz</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Paystack Payment Modal */}
      <PaystackPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        defaultTab={modalTab}
        featureName={`SHS Subject: ${subject.name}`}
      />
    </div>
  );
}
