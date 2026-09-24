'use client';

import React, { useState, useEffect } from 'react';
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
  Lock
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const topicId = params.topicId as string;
  const topic = JHS_CURRICULUM_TOPICS.find((t) => t.id === topicId);
  const quiz = topic?.quiz;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState((quiz?.timeLimitMinutes || 10) * 60);

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
        <Link href="/jhs" className="text-xs font-bold text-blue-600 inline-block">
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
              <li>All JHS 1, 2, and 3 curriculum topics & worked solutions</li>
              <li>Unlimited diagnostic quiz attempts with instant step-by-step rationales</li>
              <li>Adaptive Weekly Exams tailored to your personal study progress</li>
              <li>30 days of full, uninterrupted access</li>
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
              <span>Need a PIN? Contact your teacher or agent.</span>
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
              href={`/jhs/${topic.subjectId}`}
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Subject Topics
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/jhs"
              className="text-blue-600 hover:text-blue-700"
            >
              Browse Free Trial Topics
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
    setTimeLeftSeconds((quiz.timeLimitMinutes || 10) * 60);
  };

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const { correct, percentage } = calculateScore();
  const hasPassed = percentage >= quiz.passScorePercentage;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href={`/jhs/${topic.subjectId}?level=${encodeURIComponent(topic.level)}`}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1"
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
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase">
              {topic.level} Practice Quiz
            </span>
            <span className="text-xs text-slate-500">Pass Mark: {quiz.passScorePercentage}%</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900">{quiz.title}</h1>
          <p className="text-xs text-slate-500 mt-0.5">{topic.title}</p>
        </div>

        {/* Result Screen if Submitted */}
        {isSubmitted ? (
          <div className="space-y-6">
            <div
              className={`p-6 rounded-2xl text-center space-y-3 ${
                hasPassed
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border border-amber-200 text-amber-950'
              }`}
            >
              <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center font-bold">
                {hasPassed ? (
                  <Trophy className="w-8 h-8 text-emerald-600" />
                ) : (
                  <RotateCcw className="w-8 h-8 text-amber-600" />
                )}
              </div>

              <h2 className="text-2xl font-black">
                {hasPassed ? 'Congratulations! You Passed!' : 'Nice Effort! Needs More Practice'}
              </h2>

              <p className="text-xs">
                You scored <b>{correct}</b> out of <b>{totalQuestions}</b> questions (<b>{percentage}%</b>).
              </p>

              {hasPassed ? (
                <div className="text-[11px] text-emerald-800 bg-white/70 py-1.5 px-3 rounded-lg inline-block font-medium">
                  ✓ This topic is now marked COMPLETED and will appear in your Dynamic Weekly Exam!
                </div>
              ) : (
                <div className="text-[11px] text-amber-800 bg-white/70 py-1.5 px-3 rounded-lg inline-block font-medium">
                  Review the explanations below and retake the quiz to unlock this topic in your Weekly Exam.
                </div>
              )}
            </div>

            {/* Explanations Review */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Detailed Answer Explanations</h3>

              {quiz.questions.map((q, idx) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correctOption;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs space-y-2 ${
                      isCorrect ? 'border-emerald-200 bg-emerald-50/30' : 'border-red-200 bg-red-50/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-slate-800">
                        {idx + 1}. {q.questionText}
                      </span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-red-600 shrink-0">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600 pt-1">
                      <div className={q.correctOption === 'A' ? 'font-bold text-emerald-700' : ''}>
                        A: {q.optionA}
                      </div>
                      <div className={q.correctOption === 'B' ? 'font-bold text-emerald-700' : ''}>
                        B: {q.optionB}
                      </div>
                      <div className={q.correctOption === 'C' ? 'font-bold text-emerald-700' : ''}>
                        C: {q.optionC}
                      </div>
                      <div className={q.correctOption === 'D' ? 'font-bold text-emerald-700' : ''}>
                        D: {q.optionD}
                      </div>
                    </div>

                    <div className="pt-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/60 text-[11px] leading-relaxed">
                      <span className="font-bold text-blue-700 block">Explanation:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handleRetake}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Quiz
              </button>

              <Link
                href={`/jhs/${topic.subjectId}?level=${encodeURIComponent(topic.level)}`}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center"
              >
                Back to Topics
              </Link>

              <Link
                href="/jhs/weekly-exam"
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 ml-auto"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Go to Weekly Exam</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
                  {Object.keys(selectedAnswers).length} answered
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all"
                  style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
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
                    <span className="flex-1">{optText}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                className="py-2 px-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 disabled:opacity-40 hover:bg-slate-50"
              >
                Previous
              </button>

              {currentIdx < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIdx((i) => Math.min(totalQuestions - 1, i + 1))}
                  className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20"
                >
                  Next Question
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
