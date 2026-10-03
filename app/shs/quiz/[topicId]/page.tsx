'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { ALL_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { CurriculumService } from '@/lib/curriculumService';
import { logQuizMistakes } from '@/lib/weeklyProgressTracker';
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
  Target,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';

export default function ShsTopicQuizPage() {
  const params = useParams();
  const { recordQuizScore, student, redeemPin, canAccessTopic } = useAuth();
  
  const [mounted, setMounted] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');

  const topicId = params.topicId as string;
  const topic = ALL_CURRICULUM_TOPICS.find((t) => t.id === topicId);
  const quiz = topic?.quiz;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState((quiz?.timeLimitMinutes || 10) * 60);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'mistakes' | 'correct'>('all');

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && topic?.level) {
      localStorage.setItem('academicprep_shs_level', topic.level);
    }
  }, [topic?.level]);

  // Find next topic if available
  const levelTopics = topic
    ? ALL_CURRICULUM_TOPICS.filter((t) => t.subjectId === topic.subjectId)
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

  const calculateScore = () => {
    if (!quiz?.questions) return { correct: 0, total: 0, percentage: 0 };
    const total = quiz.questions.length;
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOption) {
        correct++;
      }
    });
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percentage };
  };

  const handleSubmit = () => {
    if (isSubmitted || !topic || !quiz) return;
    setIsSubmitted(true);

    const { percentage } = calculateScore();
    recordQuizScore(topic.id, percentage);

    // Track mistakes
    const mistakes: {
      topicId: string;
      topicTitle: string;
      subjectId: string;
      subjectName: string;
      questionId: string;
      questionText: string;
      subConcept: string;
      selectedOption: 'A' | 'B' | 'C' | 'D';
      correctOption: 'A' | 'B' | 'C' | 'D';
      explanation: string;
      remediationTip?: string;
    }[] = [];

    quiz.questions.forEach((q) => {
      const userAns = selectedAnswers[q.id];
      if (userAns && userAns !== q.correctOption) {
        const subName = CurriculumService.getSubjectById(topic.subjectId)?.name || topic.subjectId;
        mistakes.push({
          topicId: topic.id,
          topicTitle: topic.title,
          subjectId: topic.subjectId,
          subjectName: subName,
          questionId: q.id,
          questionText: q.questionText,
          subConcept: q.subConcept || topic.title,
          selectedOption: userAns,
          correctOption: q.correctOption,
          explanation: q.explanation,
          remediationTip: q.remediationTip,
        });
      }
    });

    if (mistakes.length > 0) {
      logQuizMistakes(mistakes);
    }

    if (percentage >= quiz.passScorePercentage) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }
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
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Quiz Not Found</h2>
        <p className="text-xs text-slate-500">
          The requested SHS quiz is currently unavailable or being updated.
        </p>
        <Link
          href="/shs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to SHS Portal
        </Link>
      </div>
    );
  }

  // VIP / Lock Verification
  const isLocked = mounted && !student?.hasFullAccess && (topic.isVip || !topic.isFreeTrial);

  if (isLocked) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              VIP Topic Quiz • {topic.level}
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {topic.title}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              This interactive quiz is part of our full WASSCE curriculum. Free access includes preview topics — unlock all core and elective practice quizzes today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setModalTab('momo');
                setShowPaymentModal(true);
              }}
              className="w-full p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md shadow-blue-500/20 flex flex-col items-center justify-center gap-1"
            >
              <span>Pay Online via MoMo</span>
              <span className="text-[10px] text-blue-200 font-normal">GH₵ 25 / Month</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setModalTab('pin');
                setShowPaymentModal(true);
              }}
              className="w-full p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex flex-col items-center justify-center gap-1"
            >
              <span>Redeem Voucher PIN</span>
              <span className="text-[10px] text-slate-400 font-normal">Instant Access</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold">
            <Link
              href={`/shs/${topic.subjectId}?level=${encodeURIComponent(topic.level)}`}
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Subject Topics
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href={`/shs?level=${encodeURIComponent(topic.level)}`}
              className="text-blue-600 hover:text-blue-700"
            >
              Browse SHS Curriculum
            </Link>
          </div>
        </div>

        <PaystackPaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          defaultTab={modalTab}
          featureName={`Topic: ${topic.title}`}
        />
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

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setTimeLeftSeconds((quiz.timeLimitMinutes || 10) * 60);
    setReviewFilter('all');
  };

  const { correct, percentage } = calculateScore();
  const hasPassed = percentage >= quiz.passScorePercentage;

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const getWassceGradeInfo = (pct: number) => {
    if (pct >= 80) {
      return {
        label: 'A1 - Excellent',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        summary: 'Outstanding! You demonstrated complete mastery of this WASSCE topic.',
      };
    } else if (pct >= 70) {
      return {
        label: 'B2 - Very Good',
        badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
        summary: 'Very good! A minor review of the explanations will bring this to an A1.',
      };
    } else if (pct >= 60) {
      return {
        label: 'B3 / C4 - Good / Credit',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        summary: 'Credit level pass. Review the detailed explanations below to tighten key concepts.',
      };
    } else if (pct >= 50) {
      return {
        label: 'C5 / C6 - Pass',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        summary: 'Passing grade, but several fundamental concepts need reinforcement before WASSCE.',
      };
    } else {
      return {
        label: 'D7 / F9 - Needs Revision',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        summary: 'Below passing threshold. Study the detailed notes carefully and retry the quiz.',
      };
    }
  };

  const gradeInfo = getWassceGradeInfo(percentage);

  const incorrectQuestions = quiz.questions.filter((q) => selectedAnswers[q.id] !== q.correctOption);
  const correctQuestions = quiz.questions.filter((q) => selectedAnswers[q.id] === q.correctOption);
  const displayedQuestions = reviewFilter === 'mistakes' 
    ? incorrectQuestions 
    : reviewFilter === 'correct' 
      ? correctQuestions 
      : quiz.questions;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href={`/shs/${topic.subjectId}?level=${encodeURIComponent(topic.level)}`}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Topics
        </Link>

        {!isSubmitted && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{timeFormatted}</span>
          </div>
        )}
      </div>

      {/* Quiz Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase">
              {topic.level} • {totalQuestions} Questions
            </span>
            <span className="text-xs text-slate-500">Pass Mark: {quiz.passScorePercentage}%</span>
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
              WAEC / WASSCE Standard
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900">{quiz.title}</h1>
          <p className="text-xs text-slate-500 mt-0.5">{topic.title}</p>
        </div>

        {/* Results Screen if Submitted */}
        {isSubmitted ? (
          <div className="space-y-6">
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
                  <Target className="w-8 h-8 text-amber-600" />
                )}
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2 border ${gradeInfo.badgeColor}`}
                >
                  {gradeInfo.label}
                </span>
                <h2 className="text-3xl font-black tracking-tight">{percentage}%</h2>
                <p className="text-xs font-semibold mt-1">
                  You scored {correct} out of {totalQuestions} questions correct.
                </p>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  {gradeInfo.summary}
                </p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-slate-900">Review Questions</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setReviewFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All ({totalQuestions})
                </button>
                <button
                  type="button"
                  onClick={() => setReviewFilter('mistakes')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    reviewFilter === 'mistakes' ? 'bg-white text-rose-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Missed ({incorrectQuestions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setReviewFilter('correct')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    reviewFilter === 'correct' ? 'bg-white text-emerald-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Correct ({correctQuestions.length})
                </button>
              </div>
            </div>

            {/* Questions Review */}
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

                    {/* Explanation */}
                    {q.explanation && (
                      <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-950 space-y-1">
                        <span className="font-bold block text-blue-900">WAEC Detailed Solution:</span>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={handleRetake}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Quiz
              </button>

              <Link
                href={`/shs/${topic.subjectId}/${topic.id}?level=${encodeURIComponent(topic.level)}`}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Review Full Notes
              </Link>

              {nextTopic && hasPassed ? (
                <Link
                  href={`/shs/${nextTopic.subjectId}/${nextTopic.id}?level=${encodeURIComponent(nextTopic.level)}`}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 ml-auto shadow-sm"
                >
                  <span>Next: {nextTopic.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  href="/shs"
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 ml-auto shadow-sm"
                >
                  <span>Return to SHS Portal</span>
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
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isAnswered
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Active Question Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md">
                  Question {currentIdx + 1}
                </span>
                {currentQ.subConcept && (
                  <span className="text-[11px] text-slate-500 font-medium truncate">
                    • {currentQ.subConcept}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                {currentQ.questionText}
              </p>
            </div>

            {/* Options List */}
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
                    Submit {totalQuestions} Questions
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <PaystackPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        defaultTab={modalTab}
        featureName={`Quiz: ${topic.title}`}
      />
    </div>
  );
}
