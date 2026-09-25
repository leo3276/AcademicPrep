'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { getStoredTrialMocks } from '@/lib/adminStore';
import { TrialExamMock, QuizQuestion, EducationLevel } from '@/lib/types';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';
import { 
  ArrowLeft, 
  FileCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  Flag, 
  RotateCcw, 
  ArrowRight,
  BookOpen,
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TrialQuestionsPage() {
  const { student, recordWeeklyExamAttempt } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [trialMocks, setTrialMocks] = useState<TrialExamMock[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');

  // Active mock exam session state
  const [activeMock, setActiveMock] = useState<TrialExamMock | null>(null);
  const [examStarted, setExamStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  useEffect(() => {
    setMounted(true);
    // Load live trial mocks uploaded by the admin
    const stored = getStoredTrialMocks();
    setTrialMocks(stored.filter((m) => m.isPublished));
  }, []);

  const startMockExam = (mock: TrialExamMock) => {
    setActiveMock(mock);
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setTimeLeft((mock.durationMinutes || 25) * 60);
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

  const handleSelectOption = (qId: string, opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const calculateScore = () => {
    if (!activeMock) return { correct: 0, total: 0, percentage: 0 };
    let correct = 0;
    activeMock.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOption) {
        correct++;
      }
    });
    const total = activeMock.questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percentage };
  };

  const handleSubmit = () => {
    if (isSubmitted || !activeMock) return;
    setIsSubmitted(true);

    const { correct, total, percentage } = calculateScore();
    const passScore = activeMock.passScorePercentage || 60;

    recordWeeklyExamAttempt({
      studentId: student?.id || 'trial-student',
      level: activeMock.level,
      coveredTopicIds: [activeMock.id],
      totalQuestions: total,
      correctAnswers: correct,
      scorePercentage: percentage,
      timeSpentSeconds: (activeMock.durationMinutes * 60) - timeLeft,
    });

    if (percentage >= passScore) {
      try {
        confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
      } catch {
        // safe fallback
      }
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const { correct, total, percentage } = calculateScore();
  const currentQ = activeMock?.questions[currentIdx];
  const requiredPass = activeMock?.passScorePercentage || 60;
  const isPassed = percentage >= requiredPass;

  // Filtered trial mocks
  const filteredMocks = trialMocks.filter((m) => {
    const matchesSubject = selectedSubject === 'ALL' || m.subjectId === selectedSubject;
    const matchesLevel = selectedLevel === 'ALL' || m.level === selectedLevel;
    return matchesSubject && matchesLevel;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/jhs"
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to JHS Portal</span>
        </Link>
        <span className="text-xs font-mono font-semibold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
          Trial Questions Hub
        </span>
      </div>

      {!examStarted ? (
        /* Pre-Exam Hub: View All Admin Uploaded Trial Mocks */
        <div className="space-y-6">
          {/* Header Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Coordinator Uploaded Diagnostic Tests
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Trial Questions & Diagnostic Mock Examinations
            </h1>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              These trial diagnostic questions and mocks are uploaded directly by your administrator and GES coordinators. Take timed mock exams, test your readiness, and view detailed answer rationales.
            </p>

            {/* Filter Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                <button
                  onClick={() => setSelectedSubject('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    selectedSubject === 'ALL'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Subjects
                </button>
                {CURRICULUM_SUBJECTS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSubject(s.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                      selectedSubject === s.id
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

              <div className="flex items-center gap-1">
                {['ALL', 'JHS 1', 'JHS 2', 'JHS 3'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                      selectedLevel === lvl
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mocks Grid */}
          {filteredMocks.length === 0 ? (
            <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-sm font-semibold text-slate-800">
                No trial mocks uploaded for this subject or level yet.
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Any trial mock test uploaded by the administrator in the Admin Portal will automatically appear right here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMocks.map((mock) => {
                const subj = CURRICULUM_SUBJECTS.find((s) => s.id === mock.subjectId);
                return (
                  <div
                    key={mock.id}
                    className="bg-white border border-slate-200/80 hover:border-slate-300 rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between transition-all"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {subj?.name || mock.subjectId.toUpperCase()}
                        </span>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                          {mock.level}
                        </span>
                        <span className="text-[10px] text-slate-400 ml-auto">
                          Term {mock.term}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                        {mock.title}
                      </h3>

                      <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                        <span className="flex items-center gap-1 font-mono">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          {mock.questions.length} Questions
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {mock.durationMinutes} mins
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Award className="w-3.5 h-3.5 text-slate-400" />
                          Pass: {mock.passScorePercentage}%
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <button
                        onClick={() => startMockExam(mock)}
                        className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Trial Mock Exam</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : isSubmitted ? (
        /* Result Screen */
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div
            className={`p-6 rounded-2xl text-center space-y-2 ${
              isPassed
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border border-amber-200 text-amber-950'
            }`}
          >
            <h3 className="text-xl font-bold">
              {isPassed ? 'Trial Mock Exam Passed!' : 'Trial Mock Completed'}
            </h3>
            <p className="text-xs">
              Score: <b>{correct}</b> / <b>{total}</b> Correct (<b>{percentage}%</b>) — Pass standard: <b>{requiredPass}%</b>
            </p>
            <p className="text-[11px] text-slate-600 max-w-md mx-auto">
              Review your question solutions and detailed explanations below.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Question Review & Solutions
            </h4>

            {activeMock?.questions.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
              const isCorrect = userChoice === q.correctOption;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border text-xs space-y-2.5 ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-red-200 bg-red-50/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-800">
                      {idx + 1}. {q.questionText}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isCorrect ? 'Correct' : `Chose ${userChoice || 'None'}`}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600">
                    <div className={q.correctOption === 'A' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                      A: {q.optionA}
                    </div>
                    <div className={q.correctOption === 'B' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                      B: {q.optionB}
                    </div>
                    <div className={q.correctOption === 'C' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                      C: {q.optionC}
                    </div>
                    <div className={q.correctOption === 'D' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                      D: {q.optionD}
                    </div>
                  </div>

                  {q.explanation && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-700">
                      <b className="text-slate-900">Explanation: </b>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
            <button
              onClick={() => activeMock && startMockExam(activeMock)}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold transition"
            >
              Retake This Mock
            </button>
            <button
              onClick={() => setExamStarted(false)}
              className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 transition"
            >
              Back to Trial Mocks List
            </button>
          </div>
        </div>
      ) : (
        /* Active Timed CBT Simulator */
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">
                Question {currentIdx + 1} of {activeMock?.questions.length}
              </span>
              <span className="text-xs font-semibold text-slate-800">
                {activeMock?.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {currentQ && (
                <button
                  type="button"
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition ${
                    flagged[currentQ.id]
                      ? 'bg-amber-50 text-amber-800 border-amber-300'
                      : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Flag className="w-3 h-3" />
                  <span>{flagged[currentQ.id] ? 'Flagged' : 'Flag'}</span>
                </button>
              )}

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{timeFormatted}</span>
              </div>
            </div>
          </div>

          {/* Number Palette */}
          <div className="flex flex-wrap gap-1.5">
            {activeMock?.questions.map((q, idx) => {
              const isAnswered = Boolean(selectedAnswers[q.id]);
              const isCurrent = idx === currentIdx;
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all relative ${
                    isCurrent
                      ? 'bg-slate-900 text-white'
                      : isAnswered
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Question Text */}
          {currentQ && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <p className="text-sm sm:text-base font-medium text-slate-900 leading-snug">
                {currentQ.questionText}
              </p>
            </div>
          )}

          {/* Options */}
          {currentQ && (
            <div className="space-y-2.5">
              {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                const optText = currentQ[`option${optKey}` as keyof typeof currentQ];
                const isSelected = selectedAnswers[currentQ.id] === optKey;

                return (
                  <button
                    key={optKey}
                    type="button"
                    onClick={() => handleSelectOption(currentQ.id, optKey)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 text-slate-900 ring-1 ring-slate-900 shadow-2xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {optKey}
                    </span>
                    <span className="flex-1">{optText}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="py-2 px-3.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 disabled:opacity-40 hover:bg-slate-50"
            >
              Previous
            </button>

            {activeMock && currentIdx < activeMock.questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => Math.min(activeMock.questions.length - 1, i + 1))}
                className="py-2 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs"
              >
                Next Question
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="py-2 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-2xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Mock Exam</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
