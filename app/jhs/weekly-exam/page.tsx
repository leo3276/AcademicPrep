'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { EducationLevel, QuizQuestion } from '@/lib/types';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Trophy, 
  ArrowLeft, 
  Flag, 
  RotateCcw,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WeeklyExamPage() {
  const { student, topicProgress, recordWeeklyExamAttempt, weeklyExamAttempts } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(student?.currentLevel || 'JHS 1');

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_jhs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['JHS 1', 'JHS 2', 'JHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setCurrentLevel(urlLevel);
        localStorage.setItem('academicprep_jhs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setCurrentLevel(savedLevel);
      }
    }
  }, []);

  // Find all topics that the student has completed (guarded by mounted)
  const completedTopicIds = mounted
    ? Object.keys(topicProgress).filter((id) => topicProgress[id]?.completed)
    : [];

  const completedTopics = JHS_CURRICULUM_TOPICS.filter((t) =>
    completedTopicIds.includes(t.id)
  );

  // If no completed topics, offer demo mode with the 3 free trial topics
  const fallbackTopics = JHS_CURRICULUM_TOPICS.filter((t) => t.isFreeTrial);
  const activePoolTopics = completedTopics.length > 0 ? completedTopics : fallbackTopics;

  // Compile exam questions from active pool
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [examStarted, setExamStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  const initializeExam = () => {
    const pooled: QuizQuestion[] = [];
    activePoolTopics.forEach((t) => {
      if (t.quiz?.questions) {
        pooled.push(...t.quiz.questions);
      }
    });

    // Shuffle
    const shuffled = [...pooled].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, 10)); // Take 10 questions for the weekly exam
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setTimeLeft(15 * 60);
    setExamStarted(true);
  };

  // Timer countdown
  useEffect(() => {
    if (!examStarted || isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, isSubmitted, timeLeft]);

  const handleSelectOption = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    const q = examQuestions[currentIdx];
    setSelectedAnswers((prev) => ({
      ...prev,
      [q.id]: opt,
    }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOption) {
        correct++;
      }
    });
    const percentage = examQuestions.length > 0 
      ? Math.round((correct / examQuestions.length) * 100) 
      : 0;
    return { correct, total: examQuestions.length, percentage };
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    const { correct, total, percentage } = calculateScore();

    recordWeeklyExamAttempt({
      studentId: student?.id || 'guest-student',
      level: currentLevel,
      coveredTopicIds: activePoolTopics.map((t) => t.id),
      totalQuestions: total,
      correctAnswers: correct,
      scorePercentage: percentage,
      timeSpentSeconds: 15 * 60 - timeLeft,
    });

    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const { correct, total, percentage } = calculateScore();
  const currentQ = examQuestions[currentIdx];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <Link
          href={`/jhs?level=${encodeURIComponent(currentLevel)}`}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to JHS Portal
        </Link>
        <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
          Progress-Adaptive Exam
        </span>
      </div>

      {!examStarted ? (
        /* Pre-Exam Setup & Covered Topics Overview */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Dynamic Progress Simulator
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Personalized Weekly Examination
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
              This CBT exam pulls questions exclusively from the topics you have completed on the platform. It tests your retention, identifies weak spots, and builds BECE exam endurance.
            </p>
          </div>

          {/* Topics Included in This Exam */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Topics Covered in Your Exam Pool ({activePoolTopics.length})
              </h3>
              {completedTopics.length === 0 && (
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                  Demo Mode (Trial Topics)
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activePoolTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800 truncate mr-2">{topic.title}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5 py-0.5 bg-slate-100 rounded">
                    {topic.level}
                  </span>
                </div>
              ))}
            </div>

            {completedTopics.length === 0 && (
              <p className="text-[11px] text-slate-500 italic pt-1">
                💡 Tip: You haven't completed any topic quizzes yet. This practice run will draw from the starter topics. Pass more topic quizzes in the JHS portal to expand your pool!
              </p>
            )}
          </div>

          {/* Exam Rules Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-900">
              <span className="font-bold block mb-0.5">⏱️ 15 Minutes</span>
              <span className="text-[11px] text-blue-700">Timed countdown with auto-submission.</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 text-purple-900">
              <span className="font-bold block mb-0.5">🎲 Randomized</span>
              <span className="text-[11px] text-purple-700">10 questions chosen from your studied topics.</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
              <span className="font-bold block mb-0.5">🎯 60% Pass Mark</span>
              <span className="text-[11px] text-emerald-700">Detailed question review after submission.</span>
            </div>
          </div>

          {/* Exam History if any */}
          {mounted && weeklyExamAttempts.length > 0 && (
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-800">Your Recent Weekly Exam Scores:</h4>
              <div className="space-y-1.5">
                {weeklyExamAttempts.slice(0, 3).map((attempt) => (
                  <div
                    key={attempt.id}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between"
                  >
                    <span>
                      {new Date(attempt.createdAt).toLocaleDateString()} — {attempt.totalQuestions} Questions
                    </span>
                    <span
                      className={`font-bold font-mono px-2 py-0.5 rounded ${
                        attempt.scorePercentage >= 60
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {attempt.scorePercentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={initializeExam}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Begin Timed Weekly Exam</span>
            </button>
          </div>
        </div>
      ) : isSubmitted ? (
        /* Result Screen */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div
            className={`p-6 rounded-2xl text-center space-y-3 ${
              percentage >= 60
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border border-amber-200 text-amber-950'
            }`}
          >
            <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center">
              {percentage >= 60 ? (
                <Trophy className="w-8 h-8 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              )}
            </div>

            <h2 className="text-2xl font-black">
              {percentage >= 60 ? 'Weekly Exam Passed!' : 'Exam Completed'}
            </h2>

            <p className="text-xs">
              Score: <b>{correct}</b> / <b>{total}</b> Correct (<b>{percentage}%</b>)
            </p>

            <p className="text-[11px] text-slate-600 max-w-md mx-auto">
              {percentage >= 60
                ? 'Excellent retention of your covered topics! Your score has been logged to your student transcript.'
                : 'Keep practicing! Review the detailed explanations below to master the questions you missed.'}
            </p>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Exam Question Review</h3>

            {examQuestions.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
              const isCorrect = userChoice === q.correctOption;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border text-xs space-y-2 ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-red-200 bg-red-50/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-800">
                      {idx + 1}. {q.questionText}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isCorrect ? 'Correct' : `Chose ${userChoice || 'None'}`}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-600">
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

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-700">
                    <b className="text-blue-700">Explanation: </b>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={initializeExam}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Another Exam
            </button>
            <Link
              href={`/jhs?level=${encodeURIComponent(currentLevel)}`}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              Study More Topics
            </Link>
          </div>
        </div>
      ) : (
        /* Active CBT Test View */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                Question {currentIdx + 1} of {examQuestions.length}
              </span>
              <span className="text-xs text-slate-700">Weekly CBT Assessment</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggleFlag(currentQ.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                  flagged[currentQ.id]
                    ? 'bg-amber-50 text-amber-700 border-amber-300'
                    : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flag className="w-3 h-3" />
                <span>{flagged[currentQ.id] ? 'Flagged' : 'Flag'}</span>
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{timeFormatted}</span>
              </div>
            </div>
          </div>

          {/* Question Grid Navigator */}
          <div className="flex flex-wrap gap-1.5">
            {examQuestions.map((q, idx) => {
              const isAnswered = Boolean(selectedAnswers[q.id]);
              const isCurrent = idx === currentIdx;
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all relative ${
                    isCurrent
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                      : isAnswered
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Question Text */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
              {currentQ.questionText}
            </p>
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

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="py-2 px-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 disabled:opacity-40 hover:bg-slate-50"
            >
              Previous
            </button>

            {currentIdx < examQuestions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => Math.min(examQuestions.length - 1, i + 1))}
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
                Submit Weekly Exam
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
