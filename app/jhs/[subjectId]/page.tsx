'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { ALL_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { CurriculumService } from '@/lib/curriculumService';
import { EducationLevel } from '@/lib/types';
import TrialCountdownBanner from '@/components/TrialCountdownBanner';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  KeyRound,
  FileText,
  Lightbulb,
  Video,
  PlayCircle,
  Crown,
  ExternalLink,
  Award,
  X
} from 'lucide-react';
import SubjectIcon from '@/components/SubjectIcon';
import TopicShareButtons from '@/components/TopicShareButtons';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';

export default function SubjectDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { student, topicProgress, redeemPin, isTrialActive, trialDaysRemaining, hasFullAccess } = useAuth();

  const [mounted, setMounted] = useState(false);

  const subjectId = params.subjectId as string;
  const initialLevel = (searchParams.get('level') as EducationLevel) || student?.currentLevel || 'JHS 1';

  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(initialLevel);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlLevel = searchParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_jhs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['JHS 1', 'JHS 2', 'JHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setCurrentLevel(urlLevel);
        localStorage.setItem('academicprep_jhs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setCurrentLevel(savedLevel);
      }
    }
  }, [searchParams]);

  const handleLevelChange = (lvl: EducationLevel) => {
    setCurrentLevel(lvl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_jhs_level', lvl);
      const url = new URL(window.location.href);
      url.searchParams.set('level', lvl);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // VIP PIN Modal state
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  const subject = CurriculumService.getSubjectById(subjectId, currentLevel);
  const topics = CurriculumService.getTopics(currentLevel, subjectId);

  const handleRedeemPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;

    setPinLoading(true);
    setPinFeedback(null);

    const res = await redeemPin(pinInput);
    setPinLoading(false);
    setPinFeedback({
      success: res.success,
      text: res.message,
    });

    if (res.success) {
      setTimeout(() => {
        setPinModalOpen(false);
        setPinInput('');
        setPinFeedback(null);
      }, 2000);
    }
  };

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">Subject Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The requested curriculum subject does not exist.</p>
        <Link href={`/jhs?level=${encodeURIComponent(currentLevel)}`} className="mt-4 inline-block text-xs font-bold text-blue-600">
          ← Back to JHS Portal
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href={`/jhs?level=${encodeURIComponent(currentLevel)}`} className="hover:text-slate-800 flex items-center gap-1 font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          JHS Portal
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-bold">{subject.name}</span>
      </div>

      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
            <SubjectIcon subjectId={subject.id} className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 uppercase font-mono">
                {subject.code}
              </span>
              <span className="text-xs text-slate-500 font-medium">NaCCA Curriculum</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{subject.name}</h1>
            <p className="text-xs text-slate-600 mt-0.5">
              Structured topics, video tutorials, worked examples, and mastery quizzes for {currentLevel}.
            </p>
          </div>
        </div>

        {/* Level Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          {(['JHS 1', 'JHS 2', 'JHS 3'] as EducationLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => handleLevelChange(lvl)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
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

      {/* Minimalist Apple Access Status Banner */}
      {mounted && !hasFullAccess && (
        <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center shrink-0 text-[#1D1D1F]">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1D1D1F]">
                Free Account • First 3 Topics Included
              </div>
              <div className="text-[11.5px] text-[#86868B]">
                Topics 1–3 are open. Unlock a Full Pass to access all {topics.length} {currentLevel} topics, past papers, and exams.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPinModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#1D1D1F] hover:bg-black text-white font-medium text-xs transition cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            Unlock Full Pass
          </button>
        </div>
      )}

      {/* Topics List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            {currentLevel} Curriculum Topics ({topics.length})
          </h2>
          <span className="text-xs text-slate-500">Every topic contains video lessons & quizzes</span>
        </div>

        {topics.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No Topics Uploaded Yet for {currentLevel}</h3>
            <p className="text-xs text-slate-500">
              Additional topics are being structured for this subject level.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {topics.map((topic, index) => {
              const progress = topicProgress[topic.id];
              const isCompleted = progress?.completed;
              const isFreeTopic = index < 3;
              const isLocked = mounted && !hasFullAccess && !isFreeTopic;

              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border bg-white p-5 transition-all shadow-sm ${
                    isCompleted
                      ? 'border-emerald-200 ring-1 ring-emerald-100'
                      : isLocked
                      ? 'border-black/[0.08] bg-[#FAFAFC]/80'
                      : 'border-slate-200 hover:border-neutral-300'
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
                        {isFreeTopic || hasFullAccess ? (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-slate-700" />
                            {hasFullAccess ? 'Full Pass' : 'Free Topic'}
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#F5F5F7] text-[#515154] border border-black/[0.06] flex items-center gap-1">
                            <Lock className="w-3 h-3 text-[#86868B]" />
                            Locked
                          </span>
                        )}
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Passed ({progress.bestScorePercentage}%)
                          </span>
                        )}
                      </div>

                      {isLocked ? (
                        <button
                          type="button"
                          onClick={() => setPinModalOpen(true)}
                          className="group inline-flex items-center gap-1.5 text-left cursor-pointer"
                        >
                          <h3 className="text-base sm:text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                            {topic.title}
                          </h3>
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      ) : (
                        <Link
                          href={`/jhs/${subjectId}/${topic.id}?level=${encodeURIComponent(currentLevel)}`}
                          className="group inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                        >
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {topic.title}
                          </h3>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      )}
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
                        {topic.youtubeUrl && (
                          <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                            <Video className="w-3 h-3 text-red-500" />
                            Video Lesson
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons: Open Full Lesson & Quiz / Unlock */}
                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                      {!isLocked && (
                        <TopicShareButtons
                          topicTitle={topic.title}
                          subjectName={subject?.name || 'Subject'}
                          level={currentLevel}
                          urlPath={`/jhs/${subjectId}/${topic.id}?level=${encodeURIComponent(currentLevel)}`}
                          quizCount={topic.quiz?.questions?.length}
                          variant="compact"
                        />
                      )}

                      {isLocked ? (
                        <button
                          type="button"
                          onClick={() => setPinModalOpen(true)}
                          className="px-4 py-2.5 rounded-xl bg-[#1D1D1F] hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Unlock Topic</span>
                        </button>
                      ) : (
                        <>
                          <Link
                            href={`/jhs/${subjectId}/${topic.id}?level=${encodeURIComponent(currentLevel)}`}
                            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Study Lesson</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href={`/jhs/quiz/${topic.id}`}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                              isCompleted
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                            }`}
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>{isCompleted ? 'Retake Quiz' : 'Take Quiz'}</span>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <PaystackPaymentModal
        isOpen={pinModalOpen}
        onClose={() => setPinModalOpen(false)}
      />
    </div>
  );
}
