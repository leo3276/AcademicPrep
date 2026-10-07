'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { ALL_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { CurriculumService } from '@/lib/curriculumService';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Video, 
  Lightbulb, 
  HelpCircle, 
  CheckCircle2, 
  Crown, 
  KeyRound, 
  Award, 
  AlertTriangle, 
  GraduationCap, 
  ExternalLink, 
  Check, 
  ChevronRight, 
  X,
  PlayCircle,
  FileText,
  Lock
} from 'lucide-react';
import TopicShareButtons from '@/components/TopicShareButtons';

export default function DetailedTopicLessonPage() {
  const params = useParams();
  const { student, topicProgress, redeemPin, canAccessTopic, isTrialActive, trialDaysRemaining, hasFullAccess } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [activeSectionTab, setActiveSectionTab] = useState<'notes' | 'video' | 'examples'>('notes');

  // VIP PIN Modal state
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  const subjectId = params.subjectId as string;
  const topicId = params.topicId as string;

  const topic = ALL_CURRICULUM_TOPICS.find((t) => t.id === topicId);
  const subject = CurriculumService.getSubjectById(subjectId, topic?.level);
  const subjectTopics = ALL_CURRICULUM_TOPICS.filter((t) => t.subjectId === subjectId);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && topic?.level) {
      localStorage.setItem('academicprep_jhs_level', topic.level);
    }
  }, [topic?.level]);

  // Find index and previous / next topics scoped to the same level in the curriculum
  const levelTopics = topic 
    ? subjectTopics.filter((t) => t.level === topic.level) 
    : subjectTopics;
  const currentTopicIndex = levelTopics.findIndex((t) => t.id === topicId);
  const prevTopic = currentTopicIndex > 0 ? levelTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < levelTopics.length - 1 ? levelTopics[currentTopicIndex + 1] : null;

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
      }, 1800);
    }
  };

  if (!subject || !topic) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Topic Lesson Not Found</h2>
        <p className="text-xs text-slate-500">
          The requested topic lesson could not be loaded. Please return to the curriculum portal.
        </p>
        <Link
          href={`/jhs/${subjectId || ''}?level=${encodeURIComponent(topic?.level || 'JHS 1')}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Subject Topics
        </Link>
      </div>
    );
  }

  const isCompleted = mounted && topicProgress[topic.id]?.completed;
  const bestScore = mounted ? topicProgress[topic.id]?.bestScorePercentage : undefined;

  // 3-Topic Free Limit Access Check
  const accessCheck = mounted ? canAccessTopic(topic.id) : { allowed: true, topicsUsed: 0, maxFreeTopics: 3 };
  if (!accessCheck.allowed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="p-8 rounded-3xl bg-white border border-amber-200 shadow-xl space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-500/30">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              30-Day Free Trial Ended
            </span>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {topic.title}
            </h1>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              {accessCheck.reason || 'Your 30-day free trial has expired. To unlock this topic and the full curriculum, please enter or buy an Access PIN.'}
            </p>
          </div>

          {/* Quick PIN Redemption Form */}
          <form onSubmit={handleRedeemPin} className="space-y-3 pt-2">
            <div className="text-left">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Enter Your Access PIN Code
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="e.g. PREP-XXXX-XXXX"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-center tracking-widest text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={pinLoading || !pinInput.trim()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:bg-slate-300 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  {pinLoading ? 'Verifying...' : 'Unlock Lesson Now'}
                </button>
              </div>
            </div>

            {pinFeedback && (
              <div className={`p-3 rounded-xl text-xs font-medium ${pinFeedback.success ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {pinFeedback.text}
              </div>
            )}
          </form>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold">
            <Link
              href={`/jhs/${subject.id}?level=${encodeURIComponent(topic.level)}`}
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Subject Topics
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/jhs/profile"
              className="text-blue-600 hover:text-blue-700"
            >
              Go to Profile Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const notes = topic.detailedNotes;
  const isVipLocked = false;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href={`/jhs?level=${encodeURIComponent(topic.level)}`} className="hover:text-slate-800 font-medium">
            JHS Portal
          </Link>
          <span>/</span>
          <Link href={`/jhs/${subject.id}?level=${encodeURIComponent(topic.level)}`} className="hover:text-slate-800 font-medium">
            {subject.name}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-none">
            {topic.title}
          </span>
        </div>

        <Link
          href={`/jhs/${subject.id}?level=${encodeURIComponent(topic.level)}`}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Topics</span>
        </Link>
      </div>

      {/* 2. Topic Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-mono uppercase">
            {subject.code}
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
            {topic.level} • Term {topic.term}
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
            Topic {topic.orderIndex}
          </span>
          {topic.isFreeTrial || isTrialActive ? (
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
              {isTrialActive ? `Free Trial (${trialDaysRemaining}d left)` : 'Free Trial Lesson'}
            </span>
          ) : (
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 text-amber-600" />
              VIP Access Pass
            </span>
          )}
          {isCompleted && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              Passed Quiz ({bestScore}%)
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {topic.title}
            </h1>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-3xl">
              {topic.description}
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <TopicShareButtons
              topicTitle={topic.title}
              subjectName={subject?.name || 'Subject'}
              level={topic.level}
              urlPath={`/jhs/${subjectId}/${topic.id}?level=${encodeURIComponent(topic.level)}`}
              quizCount={topic.quiz?.questions?.length}
              variant="full"
            />
          </div>
        </div>

        {/* Quick Navigation Jump Tabs */}
        <div className="pt-2 flex items-center gap-2 border-t border-slate-100 flex-wrap">
          <a
            href="#detailed-notes"
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Full Detailed Notes</span>
          </a>

          {topic.youtubeUrl && (
            <a
              href="#video-lesson"
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Video className="w-4 h-4 text-red-600" />
              <span>Video Lesson</span>
            </a>
          )}

          {topic.examples && topic.examples.length > 0 && (
            <a
              href="#worked-examples"
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Worked Examples ({topic.examples.length})</span>
            </a>
          )}

          <Link
            href={`/jhs/quiz/${topic.id}`}
            className="ml-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm shadow-blue-500/20 transition-all"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Take Diagnostic Quiz</span>
          </Link>
        </div>
      </div>

      {/* 3. Curated YouTube Video Lesson Section */}
      {topic.youtubeUrl && (
        <section id="video-lesson" className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <PlayCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Curated Video Lesson
                </h2>
                <p className="text-xs text-slate-500">Visual explanation and practical step-by-step walk-through</p>
              </div>
            </div>

            <a
              href={topic.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 py-1.5 px-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {topic.youtubeId ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${topic.youtubeId}`}
                title={topic.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <p className="text-xs text-slate-700 font-medium">
                Video tutorial is ready for this topic lesson.
              </p>
              <a
                href={topic.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow-sm hover:bg-red-700"
              >
                <span>Launch YouTube Video</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </section>
      )}

      {/* 4. Full Detailed Study Notes Section */}
      <section id="detailed-notes" className="space-y-6">
        {notes ? (
          <div className="space-y-6">
            {/* Topic Introduction & Objectives */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Comprehensive Study Notes
                  </h2>
                  <p className="text-xs text-slate-500">Aligned with Ghana NaCCA & WAEC BECE syllabus standards</p>
                </div>
              </div>

              {/* Introduction Paragraph */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                <p className="font-semibold text-blue-950 mb-1">Topic Introduction & Real-World Context:</p>
                <p>{notes.introduction || notes.realWorldContext}</p>
              </div>

              {/* Learning Objectives */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  What You Will Master in This Lesson (NaCCA Objectives):
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {notes.objectives.map((obj, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* In-depth Sections */}
            <div className="space-y-4">
              {notes.sections.map((sec, idx) => {
                // If topic is VIP locked, show first section as free preview, then lock remaining
                const isSectionLocked = isVipLocked && idx > 0;

                if (isSectionLocked) {
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-amber-50/40 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold shrink-0">
                          <Crown className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-amber-950">
                            {sec.title}
                          </h4>
                          <p className="text-xs text-amber-800">
                            This in-depth lesson section and formula derivations require an active VIP Pass.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setPinModalOpen(true)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                      >
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>Unlock with PIN</span>
                      </button>
                    </div>
                  );
                }

                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {sec.title}
                      </h3>
                      {isVipLocked && idx === 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                          Free Preview Section
                        </span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-sans">
                      {sec.content}
                    </div>

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 space-y-2">
                        {sec.bulletPoints.map((bp, bpIdx) => (
                          <div
                            key={bpIdx}
                            className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                            <span className="font-mono text-[11px] sm:text-xs leading-relaxed">{bp}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.keyTakeaway && (
                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/70 text-xs text-blue-950 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Key Takeaway: </span>
                          {sec.keyTakeaway}
                        </div>
                      </div>
                    )}

                    {sec.realWorldExample && (
                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs text-emerald-950 flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Real-World Application: </span>
                          {sec.realWorldExample}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* VIP Pass Paywall Banner if student is locked */}
            {isVipLocked && (
              <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-amber-500/20 border-2 border-amber-300 shadow-lg space-y-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-500/30">
                  <Crown className="w-7 h-7" />
                </div>

                <div className="space-y-1.5 max-w-lg mx-auto">
                  <h3 className="text-xl font-black text-slate-900">
                    Unlock Full Detailed Notes & Diagnostic Quizzes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Topic 1 is 100% free. To access all 8 in-depth topics, step-by-step BECE worked solutions, and CBT diagnostic quizzes, redeem your 30-day VIP Access PIN.
                  </p>
                </div>

                {/* In-page PIN Form */}
                <form onSubmit={handleRedeemPin} className="max-w-md mx-auto space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="e.g. PREP-XXXX-XXXX"
                      value={pinInput}
                      onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-center tracking-widest text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase text-sm shadow-xs"
                    />
                    <button
                      type="submit"
                      disabled={pinLoading || !pinInput.trim()}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:bg-slate-300 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      {pinLoading ? (
                        <span>Verifying...</span>
                      ) : (
                        <>
                          <KeyRound className="w-4 h-4" />
                          <span>Unlock Now</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>Have a voucher? Enter your PIN or contact your teacher.</span>
                  </div>

                  {pinFeedback && (
                    <div
                      className={`p-3 rounded-xl text-xs font-medium ${
                        pinFeedback.success
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {pinFeedback.text}
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Common BECE Mistakes Callout Box */}
            {notes.commonMistakes && notes.commonMistakes.length > 0 && !isVipLocked && (
              <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/70 border border-rose-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Common Mistakes Students Make in BECE Examinations:</span>
                </div>
                <div className="space-y-2 pt-1">
                  {notes.commonMistakes.map((mistake, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-start gap-2.5 text-xs text-rose-950 bg-white/80 p-3 rounded-xl border border-rose-200/80"
                    >
                      <span className="font-bold text-rose-600 shrink-0 mt-0.5">⚠️</span>
                      <span className="leading-relaxed">{mistake}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Teacher's BECE Exam Tips */}
            {((notes.beceExamTips && notes.beceExamTips.length > 0) || (notes.examTips && notes.examTips.length > 0)) && !isVipLocked && (
              <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                  <GraduationCap className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Teacher&apos;s BECE Exam Pro-Tips:</span>
                </div>
                <div className="space-y-2 pt-1">
                  {(notes.beceExamTips || notes.examTips)?.map((tip, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-start gap-2.5 text-xs text-amber-900 bg-white/80 p-3 rounded-xl border border-amber-200/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Revision Summary Checklist */}
            {notes.summaryChecklist && notes.summaryChecklist.length > 0 && !isVipLocked && (
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Quick Revision Summary Checklist:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                  {notes.summaryChecklist.map((item, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2 text-xs text-emerald-950 bg-white/80 p-2.5 rounded-xl border border-emerald-200/80"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Fallback Key Notes */
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Lesson Study Notes
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed">
              {topic.keyNotes}
            </div>
          </div>
        )}
      </section>

      {/* 5. Step-by-Step Worked Examples Section */}
      {topic.examples && topic.examples.length > 0 && (
        <section id="worked-examples" className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
              <Lightbulb className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Step-by-Step Worked Examples ({topic.examples.length})
              </h2>
              <p className="text-xs text-slate-500">Real BECE exam-standard problems with complete solution steps</p>
            </div>
          </div>

          <div className="space-y-4">
            {topic.examples.map((ex, exIdx) => {
              const isExampleLocked = isVipLocked && exIdx > 0;

              if (isExampleLocked) {
                return (
                  <div
                    key={ex.id}
                    className="p-5 rounded-2xl border border-amber-200/80 bg-amber-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Crown className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-amber-950">
                          Example {exIdx + 1}: {ex.title}
                        </h4>
                        <p className="text-[11px] text-amber-800">
                          Advanced worked solution and examiner breakdown reserved for VIP Pass members.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPinModalOpen(true)}
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-xs self-start sm:self-auto flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <KeyRound className="w-3.5 h-3.5" />
                      <span>Unlock VIP</span>
                    </button>
                  </div>
                );
              }

              return (
                <div
                  key={ex.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-indigo-700">
                      Example {exIdx + 1}: {ex.title}
                    </span>
                    {isVipLocked && exIdx === 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                        Free Trial Preview
                      </span>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900">
                    <span className="text-slate-500 uppercase text-[10px] font-bold tracking-wider block mb-1">
                      Problem Statement
                    </span>
                    {ex.problem}
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-800 pl-3 border-l-2 border-indigo-500">
                    <span className="text-indigo-900 uppercase text-[10px] font-bold tracking-wider block mb-1">
                      Step-by-Step Solution:
                    </span>
                    {ex.stepByStepSolution.map((step, sIdx) => (
                      <p key={sIdx} className="leading-relaxed">
                        {step}
                      </p>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-medium flex items-start gap-2">
                    <span className="shrink-0 mt-0.5">💡</span>
                    <div>
                      <span className="font-bold">Key Takeaway / Exam Rule: </span>
                      {ex.keyTakeaway}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. Diagnostic Quiz CTA Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Mastery Diagnostic Quiz</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            Ready to test your knowledge on {topic.title}?
          </h2>
          <p className="text-xs text-blue-100 leading-relaxed">
            Timed computerized test with instant feedback, scoring, and comprehensive question rationales.
          </p>
        </div>

        <div className="shrink-0">
          {isVipLocked ? (
            <button
              onClick={() => setPinModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Crown className="w-4 h-4 text-amber-950" />
              <span>Unlock VIP Pass & Start Quiz</span>
            </button>
          ) : (
            <Link
              href={`/jhs/quiz/${topic.id}`}
              className="px-6 py-3.5 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-xs shadow-lg shadow-black/10 transition-all flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>{isCompleted ? 'Retake Diagnostic Quiz' : 'Start Diagnostic Quiz'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* 7. Bottom Topic-to-Topic Navigation */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
        {prevTopic ? (
          <Link
            href={`/jhs/${subject.id}/${prevTopic.id}?level=${encodeURIComponent(prevTopic.level)}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors p-3 rounded-xl hover:bg-slate-100 max-w-[45%]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <div className="text-left truncate">
              <span className="text-[10px] text-slate-500 block uppercase font-medium">Previous Topic</span>
              <span className="truncate block">{prevTopic.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <Link
            href={`/jhs/${subject.id}/${nextTopic.id}?level=${encodeURIComponent(nextTopic.level)}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors p-3 rounded-xl hover:bg-slate-100 max-w-[45%] text-right ml-auto"
          >
            <div className="text-right truncate">
              <span className="text-[10px] text-slate-500 block uppercase font-medium">Next Topic</span>
              <span className="truncate block">{nextTopic.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* 8. PIN Modal */}
      {pinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => {
                setPinModalOpen(false);
                setPinFeedback(null);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Unlock VIP Access Pass</h3>
                <p className="text-xs text-slate-500">Full detailed notes, worked examples & CBT quizzes</p>
              </div>
            </div>

            <form onSubmit={handleRedeemPin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Enter Your 30-Day VIP Access PIN
                </label>
                <input
                  type="text"
                  placeholder="e.g. PREP-XXXX-XXXX"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-center tracking-widest text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase text-sm"
                  autoFocus
                />
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                  <span>💡 Vouchers are sold by your teacher or via Mobile Money above.</span>
                </div>
              </div>

              {pinFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    pinFeedback.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {pinFeedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={pinLoading || !pinInput.trim()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:bg-slate-300 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {pinLoading ? (
                  <span>Verifying PIN...</span>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    <span>Activate Full VIP Pass (30 Days)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
