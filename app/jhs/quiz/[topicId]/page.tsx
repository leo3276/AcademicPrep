'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Trophy, 
  RotateCcw, 
  Sparkles, 
  ArrowRight,
  Crown,
  KeyRound,
  Award,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TopicQuizPage() {
  const params = useParams();
  const router = useRouter();
  const { recordQuizScore, student, redeemPin } = useAuth();
  
  const [mounted, setMounted] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  const topicId = params.topicId as string;
  const topic = JHS_CURRICULUM_TOPICS.find((t) => t.id === topicId);
  const quiz = topic?.quiz;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState((quiz?.timeLimitMinutes || 12) * 60);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'mistakes' | 'correct'>('all');

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && topic?.level) {
      localStorage.setItem('academicprep_jhs_level', topic.level);
    }
  }, [topic?.level]);

  // Find next topic if available (scoped to same subject and level)
  const levelTopics = topic
    ? JHS_CURRICULUM_TOPICS.filter((t) => t.subjectId === topic.subjectId && t.level === topic.level)
    : [];
  const currentTopicIdx = topic ? levelTopics.findIndex((t) => t.id === topic.id) : -1;
  const nextTopic = currentTopicIdx >= 0 && currentTopicIdx < levelTopics.length - 1
    ? levelTopics[currentTopicIdx + 1]
    : null;

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
  };

  // Timer countdown
  useEffect(() => {
    if (!mounted || isSubmitted || timeLeftSeconds <= 0) return;
    const isLocked = !student?.hasFullAccess && (topic?.isVip || !topic?.isFreeTrial);
    if (isLocked) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSeconds, mounted, student, topic]);

  if (!topic || !quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-3">
        <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
        <h2 className="text-lg font-bold text-slate-800">Quiz Not Available</h2>
        <p className="text-xs text-slate-500">
          This topic does not currently have practice questions configured.
        </p>
        <Link href={`/jhs?level=${encodeURIComponent(topic?.level || 'JHS 1')}`} className="text-xs font-bold text-blue-600 inline-block">
          ← Return to JHS Portal
        </Link>
      </div>
    );
  }

  // VIP Paywall check
  const isVipLocked = mounted && !student?.hasFullAccess && (topic.isVip || !topic.isFreeTrial);

  if (isVipLocked) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="p-8 rounded-3xl bg-white border border-amber-200 shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
            <Crown className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              VIP Pass Required
            </span>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {quiz.title}
            </h1>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Topic diagnostic quizzes, timer-based exam simulation, and automated answer grading for <b>{topic.title}</b> are reserved for students with an active VIP Access Pass.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-left space-y-2">
            <p className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              What VIP Pass Includes:
            </p>
            <ul className="text-xs text-amber-900 space-y-1 pl-5 list-disc">
              <li>All 15 JHS 1 Mathematics topics, worked solutions & diagnostic quizzes</li>
              <li>10 BECE-standard questions per topic with personalized weakness analysis</li>
              <li>Adaptive Weekly Exams tailored to your personal study progress</li>
              <li>Full uninterrupted access across all devices</li>
            </ul>
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
                  placeholder="e.g. PREP-8842-9901"
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
                  {pinLoading ? (
                    <span>Verifying...</span>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      Unlock Quiz Now
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Need a PIN? Contact your teacher or school administrator.</span>
              <button
                type="button"
                onClick={() => setPinInput('PREP-8842-9901')}
                className="text-amber-700 font-bold hover:underline"
              >
                Autofill Active Demo PIN
              </button>
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

          <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold">
            <Link
              href={`/jhs/${topic.subjectId}?level=${encodeURIComponent(topic.level)}`}
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Subject Topics
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href={`/jhs?level=${encodeURIComponent(topic.level)}`}
              className="text-blue-600 hover:text-blue-700"
            >
              Browse Free Curriculum
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentIdx];
  const totalQuestions = quiz.questions.length;

  const handleSelectOption = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: opt,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOption) {
        correct++;
      }
    });
    const percentage = Math.round((correct / totalQuestions) * 100);
    return { correct, percentage };
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    const { percentage } = calculateScore();
    recordQuizScore(topic.id, percentage);

    if (percentage >= quiz.passScorePercentage) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback if canvas not available
      }
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setReviewFilter('all');
    setTimeLeftSeconds((quiz.timeLimitMinutes || 12) * 60);
  };

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const { correct, percentage } = calculateScore();
  const hasPassed = percentage >= quiz.passScorePercentage;

  // Grade categorization based on WAEC / BECE Stanine standards
  const getGradeInfo = (pct: number) => {
    if (pct >= 80) {
      return {
        label: 'Grade 1 (Distinction)',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        summary: 'Outstanding mastery! You demonstrated comprehensive command over all tested syllabus concepts.',
      };
    } else if (pct >= 70) {
      return {
        label: 'Grade 2 (Credit)',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        summary: 'Solid performance! Review the few missed sub-concepts below to turn this into a Grade 1 Distinction.',
      };
    } else if (pct >= 60) {
      return {
        label: 'Grade 3 (Pass)',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        summary: 'You passed, but several fundamental concepts need strengthening before the BECE exam.',
      };
    } else {
      return {
        label: 'Needs Practice (Below Pass)',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        summary: 'Do not be discouraged! Carefully read the personalized improvement recommendations below, review the lesson notes, and retake the quiz.',
      };
    }
  };

  const gradeInfo = getGradeInfo(percentage);

  // Group missed questions by sub-concept to give diagnostic improvement recommendations
  const incorrectQuestions = useMemo(() => {
    return quiz.questions.filter((q) => selectedAnswers[q.id] !== q.correctOption);
  }, [quiz.questions, selectedAnswers]);

  const correctQuestions = useMemo(() => {
    return quiz.questions.filter((q) => selectedAnswers[q.id] === q.correctOption);
  }, [quiz.questions, selectedAnswers]);

  const weakSubConcepts = useMemo(() => {
    const map = new Map<string, { count: number; tip?: string; questions: string[] }>();
    incorrectQuestions.forEach((q) => {
      const concept = q.subConcept || 'Core Concepts';
      const existing = map.get(concept) || { count: 0, tip: q.remediationTip, questions: [] };
      existing.count += 1;
      if (!existing.tip && q.remediationTip) existing.tip = q.remediationTip;
      existing.questions.push(q.questionText);
      map.set(concept, existing);
    });
    return Array.from(map.entries()).map(([concept, data]) => ({
      concept,
      count: data.count,
      tip: data.tip,
      questions: data.questions,
    }));
  }, [incorrectQuestions]);

  // Filtered questions for review
  const displayedQuestions = useMemo(() => {
    if (reviewFilter === 'mistakes') {
      return quiz.questions.filter((q) => selectedAnswers[q.id] !== q.correctOption);
    }
    if (reviewFilter === 'correct') {
      return quiz.questions.filter((q) => selectedAnswers[q.id] === q.correctOption);
    }
    return quiz.questions;
  }, [quiz.questions, reviewFilter, selectedAnswers]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href={`/jhs/${topic.subjectId}?level=${encodeURIComponent(topic.level)}`}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Topics
        </Link>

        {/* Timer */}
        {!isSubmitted && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{timeFormatted}</span>
          </div>
        )}
      </div>

      {/* Quiz Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase">
              {topic.level} • 10 Questions
            </span>
            <span className="text-xs text-slate-500">Pass Mark: {quiz.passScorePercentage}%</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              GES / NaCCA Standard
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900">{quiz.title}</h1>
          <p className="text-xs text-slate-500 mt-0.5">{topic.title}</p>
        </div>

        {/* Result Screen if Submitted */}
        {isSubmitted ? (
          <div className="space-y-6">
            {/* Primary Score Banner */}
            <div
              className={`p-6 sm:p-8 rounded-3xl text-center space-y-4 border ${
                hasPassed
                  ? 'bg-gradient-to-b from-emerald-50/80 to-teal-50/40 border-emerald-200 text-emerald-950'
                  : 'bg-gradient-to-b from-amber-50/80 to-orange-50/40 border-amber-200 text-amber-950'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-bold shadow-md bg-white">
                {hasPassed ? (
                  <Trophy className="w-8 h-8 text-emerald-600" />
                ) : (
                  <RotateCcw className="w-8 h-8 text-amber-600" />
                )}
              </div>

              <div className="space-y-1">
                <span className={`inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${gradeInfo.badgeColor}`}>
                  {gradeInfo.label}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  {hasPassed ? 'Congratulations! Quiz Passed' : 'Keep Going! Practice Makes Perfect'}
                </h2>
                <p className="text-xs max-w-md mx-auto leading-relaxed pt-1">
                  {gradeInfo.summary}
                </p>
              </div>

              {/* Numerical Score Display */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80 text-center min-w-[100px]">
                  <span className="block text-2xl font-black text-slate-900">{correct} / {totalQuestions}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Correct Answers</span>
                </div>
                <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80 text-center min-w-[100px]">
                  <span className={`block text-2xl font-black ${hasPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {percentage}%
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Percentage</span>
                </div>
              </div>

              {hasPassed ? (
                <div className="text-[11px] text-emerald-800 bg-white/80 py-2 px-4 rounded-xl inline-block font-semibold border border-emerald-200/80">
                  ✓ This topic is marked completed and incorporated into your Weekly Exam diagnostic pool!
                </div>
              ) : (
                <div className="text-[11px] text-amber-800 bg-white/80 py-2 px-4 rounded-xl inline-block font-semibold border border-amber-200/80">
                  ⚠️ Review your personalized improvement plan below and retake the quiz to reach the 60% pass mark.
                </div>
              )}
            </div>

            {/* DIAGNOSTIC ENGINE: WHAT TO IMPROVE ON */}
            {weakSubConcepts.length > 0 ? (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/50 to-slate-50 border border-indigo-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Personalized Improvement Plan</h3>
                      <p className="text-[11px] text-slate-500">Targeted sub-concepts to revise based on your test answers</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100/80 border border-indigo-200 px-2.5 py-1 rounded-full shrink-0">
                    {weakSubConcepts.length} {weakSubConcepts.length === 1 ? 'Area' : 'Areas'} to Polish
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  {weakSubConcepts.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-black flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          {item.concept}
                        </span>
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md shrink-0">
                          {item.count} {item.count === 1 ? 'question missed' : 'questions missed'}
                        </span>
                      </div>

                      {item.tip && (
                        <div className="flex items-start gap-2 pl-7 pt-1 text-[11px] text-slate-700 leading-relaxed bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-950">Actionable Rule to Remember: </span>
                            {item.tip}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-indigo-100/80">
                  <span className="text-[11px] text-slate-600 text-center sm:text-left">
                    Detailed step-by-step notes and worked examples for all these concepts are in the lesson page.
                  </span>
                  <Link
                    href={`/jhs/${topic.subjectId}/${topic.id}`}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-500/20 whitespace-nowrap transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Study {topic.title} Notes
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-emerald-950">Complete 100% Concept Mastery!</h3>
                <p className="text-xs text-emerald-800 max-w-lg mx-auto leading-relaxed">
                  You answered all 10 questions correctly with zero mistakes. You have demonstrated comprehensive command over every sub-concept in <b>{topic.title}</b> according to the Ghanaian NaCCA standard!
                </p>
              </div>
            )}

            {/* Answer Explanations Review Filter */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-slate-900">Detailed Question-by-Question Review</h3>
                
                {/* Filter Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      reviewFilter === 'all'
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All ({totalQuestions})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('mistakes')}
                    className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                      reviewFilter === 'mistakes'
                        ? 'bg-white text-red-700 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Mistakes ({incorrectQuestions.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('correct')}
                    className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                      reviewFilter === 'correct'
                        ? 'bg-white text-emerald-700 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Correct ({correctQuestions.length})
                  </button>
                </div>
              </div>

              {/* Question list */}
              <div className="space-y-4">
                {displayedQuestions.map((q) => {
                  const originalIndex = quiz.questions.findIndex((item) => item.id === q.id);
                  const userChoice = selectedAnswers[q.id];
                  const isCorrect = userChoice === q.correctOption;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 sm:p-5 rounded-2xl border text-xs space-y-3 transition-all ${
                        isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-red-200 bg-red-50/20'
                      }`}
                    >
                      {/* Question Header & Sub-concept Badge */}
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-bold text-slate-900 text-sm leading-snug">
                            Question {originalIndex + 1}: {q.questionText}
                          </span>
                          {isCorrect ? (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full shrink-0 border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-red-700 bg-red-100/80 px-2 py-0.5 rounded-full shrink-0 border border-red-200">
                              <XCircle className="w-3.5 h-3.5" /> Incorrect
                            </span>
                          )}
                        </div>

                        {q.subConcept && (
                          <span className="inline-block text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                            Sub-Concept: {q.subConcept}
                          </span>
                        )}
                      </div>

                      {/* Options Review */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 pt-1">
                        {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                          const optText = q[`option${optKey}` as keyof typeof q];
                          const isUserPicked = userChoice === optKey;
                          const isRightAnswer = q.correctOption === optKey;

                          let optionStyles = 'border-slate-200 bg-white text-slate-700';
                          if (isRightAnswer) {
                            optionStyles = 'border-emerald-300 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                          } else if (isUserPicked && !isRightAnswer) {
                            optionStyles = 'border-red-300 bg-red-50 text-red-950 font-semibold line-through';
                          }

                          return (
                            <div
                              key={optKey}
                              className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${optionStyles}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] ${
                                  isRightAnswer ? 'bg-emerald-600 text-white' : isUserPicked ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {optKey}
                                </span>
                                <span>{optText}</span>
                              </div>

                              {isRightAnswer && (
                                <span className="text-[10px] font-bold text-emerald-700">✓ Correct</span>
                              )}
                              {isUserPicked && !isRightAnswer && (
                                <span className="text-[10px] font-bold text-red-600">Your choice</span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Step-by-Step Explanation */}
                      <div className="pt-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200/70 text-[11px] leading-relaxed space-y-1">
                        <span className="font-bold text-blue-700 block">Teacher's Step-by-Step Solution:</span>
                        <p>{q.explanation}</p>
                      </div>

                      {/* Remediation Tip Callout */}
                      {q.remediationTip && (
                        <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Exam Pro-Tip: </span>
                            {q.remediationTip}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions & Navigation */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
              <button
                onClick={handleRetake}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Quiz
              </button>

              <Link
                href={`/jhs/${topic.subjectId}/${topic.id}?level=${encodeURIComponent(topic.level)}`}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Review Full Notes
              </Link>

              {nextTopic && hasPassed ? (
                <Link
                  href={`/jhs/${nextTopic.subjectId}/${nextTopic.id}?level=${encodeURIComponent(nextTopic.level)}`}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 ml-auto shadow-sm"
                >
                  <span>Next: {nextTopic.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  href={`/jhs/weekly-exam?level=${encodeURIComponent(topic.level)}`}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 ml-auto shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Go to Weekly Exam</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        ) : (
          /* Active Question Flow */
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>
                  Question {currentIdx + 1} of {totalQuestions}
                </span>
                <span>
                  {Object.keys(selectedAnswers).length} of {totalQuestions} answered
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Quick Jump Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {quiz.questions.map((q, idx) => {
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const isCurrent = idx === currentIdx;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                      isCurrent
                        ? 'bg-blue-600 text-white ring-2 ring-blue-500/30'
                        : isAnswered
                        ? 'bg-blue-50 text-blue-800 border border-blue-200'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Question Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              {currentQ.subConcept && (
                <span className="inline-block text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                  {currentQ.subConcept}
                </span>
              )}
              <h3 className="text-base font-semibold text-slate-900 leading-snug">
                {currentQ.questionText}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                const optText = currentQ[`option${optKey}` as keyof typeof currentQ];
                const isSelected = selectedAnswers[currentQ.id] === optKey;

                return (
                  <button
                    key={optKey}
                    type="button"
                    onClick={() => handleSelectOption(optKey)}
                    className={`w-full p-4 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-500/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {optKey}
                    </span>
                    <span className="flex-1 leading-relaxed">{optText}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation & Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                className="py-2 px-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-colors"
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                {currentIdx < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIdx((i) => Math.min(totalQuestions - 1, i + 1))}
                    className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition-all flex items-center gap-1.5"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Submit 10 Questions
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
