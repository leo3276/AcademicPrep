'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { EducationLevel, QuizQuestion, TrialExamMock } from '@/lib/types';
import { getStoredTrialMocks } from '@/lib/adminStore';
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
  ArrowRight,
  FileCheck,
  Award,
  Layers,
  Check,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WeeklyExamPage() {
  const { student, topicProgress, recordWeeklyExamAttempt, weeklyExamAttempts } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(student?.currentLevel || 'JHS 1');

  // Exam selection and modes
  const [examTab, setExamTab] = useState<'adaptive' | 'trial'>('adaptive');
  const [trialMocks, setTrialMocks] = useState<TrialExamMock[]>([]);
  const [selectedMock, setSelectedMock] = useState<TrialExamMock | null>(null);
  const [mockLevelFilter, setMockLevelFilter] = useState<string>('ALL');

  // Active exam state
  const [activeExamTitle, setActiveExamTitle] = useState('Personalized Weekly Examination');
  const [activeExamSubject, setActiveExamSubject] = useState('Progress-Adaptive Review');
  const [totalDurationSeconds, setTotalDurationSeconds] = useState(15 * 60);
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [examStarted, setExamStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const urlMode = urlParams.get('mode');
      const urlMockId = urlParams.get('mockId');
      const savedLevel = localStorage.getItem('academicprep_jhs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['JHS 1', 'JHS 2', 'JHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setCurrentLevel(urlLevel);
        localStorage.setItem('academicprep_jhs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setCurrentLevel(savedLevel);
      }

      // Load published trial mocks
      const allMocks = getStoredTrialMocks();
      const published = allMocks.filter((m) => m.isPublished);
      setTrialMocks(published);

      if (urlMode === 'trial' || urlMockId) {
        setExamTab('trial');
      }

      if (urlMockId) {
        const found = published.find((m) => m.id === urlMockId);
        if (found) {
          setSelectedMock(found);
        }
      }
    }
  }, []);

  // Helper to get subject display name
  const getSubjectName = (subjectId: string) => {
    const s = CURRICULUM_SUBJECTS.find((sub) => sub.id === subjectId);
    return s ? s.name : subjectId.toUpperCase();
  };

  // Adaptive exam completed topics
  const completedTopicIds = mounted
    ? Object.keys(topicProgress).filter((id) => topicProgress[id]?.completed)
    : [];

  const completedTopics = JHS_CURRICULUM_TOPICS.filter((t) =>
    completedTopicIds.includes(t.id)
  );

  const fallbackTopics = JHS_CURRICULUM_TOPICS.filter((t) => t.isFreeTrial);
  const activePoolTopics = completedTopics.length > 0 ? completedTopics : fallbackTopics;

  // Initialize Adaptive Weekly Exam
  const initializeAdaptiveExam = () => {
    const pooled: QuizQuestion[] = [];
    activePoolTopics.forEach((t) => {
      if (t.quiz?.questions) {
        pooled.push(...t.quiz.questions);
      }
    });

    const shuffled = [...pooled].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    setActiveExamTitle(`Weekly Progress Exam (${currentLevel})`);
    setActiveExamSubject('Curriculum Adaptive CBT');
    setTotalDurationSeconds(15 * 60);
    setExamQuestions(selected);
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setTimeLeft(15 * 60);
    setSelectedMock(null);
    setExamStarted(true);
  };

  // Initialize Trial Diagnostic Mock Exam
  const initializeTrialMock = (mock: TrialExamMock) => {
    if (!mock.questions || mock.questions.length === 0) return;

    setActiveExamTitle(mock.title);
    setActiveExamSubject(getSubjectName(mock.subjectId));
    const durationSec = (mock.durationMinutes || 20) * 60;
    setTotalDurationSeconds(durationSec);
    setExamQuestions([...mock.questions]);
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setTimeLeft(durationSec);
    setSelectedMock(mock);
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
    if (!q) return;
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
      coveredTopicIds: selectedMock ? [selectedMock.id] : activePoolTopics.map((t) => t.id),
      totalQuestions: total,
      correctAnswers: correct,
      scorePercentage: percentage,
      timeSpentSeconds: totalDurationSeconds - timeLeft,
    });

    const passThreshold = selectedMock?.passScorePercentage || 60;
    if (percentage >= passThreshold) {
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
  const requiredPass = selectedMock?.passScorePercentage || 60;
  const isPassed = percentage >= requiredPass;

  // Filtered trial mocks for Tab 2
  const displayedMocks = trialMocks.filter((m) => {
    if (mockLevelFilter === 'ALL') return true;
    return m.level === mockLevelFilter;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Banner Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={`/jhs?level=${encodeURIComponent(currentLevel)}`}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to JHS Portal</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            {examStarted ? activeExamSubject : 'Examination Center'}
          </span>
        </div>
      </div>

      {!examStarted ? (
        /* Pre-Exam Dashboard: Switch between Adaptive Exam and Trial Mocks */
        <div className="space-y-6">
          {/* Main Card Header */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Examinations & Trial CBT Center
                </div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                  AcademicPrep Examination Hub
                </h1>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Choose between your personalized adaptive revision examination or take official standardized trial diagnostic mocks prepared by GES examiners.
                </p>
              </div>

              {/* Mode Tabs */}
              <div className="flex bg-slate-100 p-1 rounded-xl self-start sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setExamTab('adaptive')}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    examTab === 'adaptive'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Adaptive Exam</span>
                </button>
                <button
                  type="button"
                  onClick={() => setExamTab('trial')}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    examTab === 'trial'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Trial Mocks</span>
                  {trialMocks.length > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                      examTab === 'trial' ? 'bg-white/30 text-white' : 'bg-amber-200 text-amber-900'
                    }`}>
                      {trialMocks.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* TAB 1: ADAPTIVE WEEKLY EXAM */}
          {examTab === 'adaptive' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Personalized Adaptive Revision Exam
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  This examination dynamically compiles 10 randomized CBT questions based solely on the topics you have completed in {currentLevel}. As you complete more topics, your exam pool automatically expands.
                </p>
              </div>

              {/* Topics Included */}
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
                  <span className="font-bold block mb-0.5">🎲 10 Randomized</span>
                  <span className="text-[11px] text-purple-700">Pulled from your completed topics.</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
                  <span className="font-bold block mb-0.5">🎯 60% Pass Mark</span>
                  <span className="text-[11px] text-emerald-700">Includes detailed explanation review.</span>
                </div>
              </div>

              {/* Exam History if any */}
              {mounted && weeklyExamAttempts.length > 0 && (
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800">Your Recent Exam Scores:</h4>
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
                  type="button"
                  onClick={initializeAdaptiveExam}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Begin Timed Adaptive Exam</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TRIAL DIAGNOSTIC MOCKS */}
          {examTab === 'trial' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-600" />
                    Trial Diagnostic Mock Examinations
                  </h2>
                  <p className="text-xs text-slate-600">
                    Official practice mock papers created by curriculum specialists to test subject readiness.
                  </p>
                </div>

                {/* Level Filter for Mocks */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600 self-start sm:self-auto">
                  {['ALL', 'JHS 1', 'JHS 2', 'JHS 3'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setMockLevelFilter(lvl)}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        mockLevelFilter === lvl
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'hover:text-slate-900'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {displayedMocks.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-xs font-bold text-slate-700">
                    No trial mock examinations found for this filter.
                  </p>
                  <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                    New diagnostic mock tests are uploaded regularly by administrator coordinators. Check back soon or select another level.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {displayedMocks.map((mock) => (
                    <div
                      key={mock.id}
                      className="p-5 rounded-2xl border border-slate-200 hover:border-amber-400 transition-all bg-white hover:shadow-sm space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 uppercase">
                              {getSubjectName(mock.subjectId)}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase">
                              {mock.level}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 uppercase">
                              Term {mock.term}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              Added {new Date(mock.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-slate-900">
                            {mock.title}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() => initializeTrialMock(mock)}
                          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 self-start sm:self-auto shrink-0 shadow-sm"
                        >
                          <span>Start Mock Exam</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                        <span className="flex items-center gap-1.5 font-medium">
                          <BookOpen className="w-4 h-4 text-slate-400" />
                          {mock.questions.length} Standard Questions
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-4 h-4 text-slate-400" />
                          {mock.durationMinutes} Minutes Allotted
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <Award className="w-4 h-4 text-slate-400" />
                          Pass Mark: {mock.passScorePercentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : isSubmitted ? (
        /* Result Screen */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div
            className={`p-6 rounded-2xl text-center space-y-3 ${
              isPassed
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border border-amber-200 text-amber-950'
            }`}
          >
            <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center">
              {isPassed ? (
                <Trophy className="w-8 h-8 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              )}
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                {activeExamSubject}
              </span>
              <h2 className="text-2xl font-black mt-1">
                {isPassed ? 'Examination Passed!' : 'Examination Completed'}
              </h2>
            </div>

            <p className="text-xs">
              Score: <b>{correct}</b> / <b>{total}</b> Correct (<b>{percentage}%</b>) — Required: <b>{requiredPass}%</b>
            </p>

            <p className="text-[11px] text-slate-600 max-w-md mx-auto">
              {isPassed
                ? 'Outstanding performance! You have met or exceeded the passing standard. Your score has been recorded.'
                : 'Good effort! Review the detailed question explanations below to master the areas where you lost marks.'}
            </p>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Exam Question Review & Solutions</h3>

            {examQuestions.map((q, idx) => {
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
                    <span className="font-bold text-slate-800">
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
                    <div className={`p-1.5 rounded ${q.correctOption === 'A' ? 'font-bold text-emerald-700 bg-emerald-50' : ''}`}>
                      A: {q.optionA}
                    </div>
                    <div className={`p-1.5 rounded ${q.correctOption === 'B' ? 'font-bold text-emerald-700 bg-emerald-50' : ''}`}>
                      B: {q.optionB}
                    </div>
                    <div className={`p-1.5 rounded ${q.correctOption === 'C' ? 'font-bold text-emerald-700 bg-emerald-50' : ''}`}>
                      C: {q.optionC}
                    </div>
                    <div className={`p-1.5 rounded ${q.correctOption === 'D' ? 'font-bold text-emerald-700 bg-emerald-50' : ''}`}>
                      D: {q.optionD}
                    </div>
                  </div>

                  {q.explanation && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-700">
                      <b className="text-blue-700">Explanation: </b>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                if (selectedMock) {
                  initializeTrialMock(selectedMock);
                } else {
                  initializeAdaptiveExam();
                }
              }}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake This Exam</span>
            </button>
            <button
              type="button"
              onClick={() => setExamStarted(false)}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Choose Another Exam</span>
            </button>
            <Link
              href={`/jhs?level=${encodeURIComponent(currentLevel)}`}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <span>Back to Curriculum</span>
            </Link>
          </div>
        </div>
      ) : (
        /* Active CBT Test View */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Question {currentIdx + 1} of {examQuestions.length}
              </span>
              <span className="text-xs font-bold text-slate-800">{activeExamTitle}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => currentQ && toggleFlag(currentQ.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                  currentQ && flagged[currentQ.id]
                    ? 'bg-amber-50 text-amber-700 border-amber-300'
                    : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flag className="w-3 h-3" />
                <span>{currentQ && flagged[currentQ.id] ? 'Flagged' : 'Flag'}</span>
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
                  type="button"
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
          {currentQ && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
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
          )}

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
                <span>Submit Examination</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
