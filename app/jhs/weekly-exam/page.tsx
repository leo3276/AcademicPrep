'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { EducationLevel } from '@/lib/types';
import { 
  getWeeklyProgressSummary, 
  generateAdaptiveWeeklyExam,
  recordFullWeeklyExamAttempt,
  getFullWeeklyExamAttempts,
  calculateStanineGrade,
  WeeklyProgressSummary,
  WeeklyObjectiveQuestion,
  AdaptiveExamPackage,
  FullWeeklyExamAttempt
} from '@/lib/weeklyProgressTracker';
import { WeeklyTheoryQuestion } from '@/lib/weeklyTheoryQuestionBank';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Trophy, 
  Sparkles, 
  Target, 
  Award, 
  RotateCcw, 
  AlertCircle, 
  HelpCircle, 
  Layers, 
  BookOpen, 
  Check, 
  Flag, 
  FileText,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Lock,
  KeyRound
} from 'lucide-react';
import confetti from 'canvas-confetti';
import AccessPinModal from '@/components/AccessPinModal';

export default function WeeklyExamPage() {
  const { student, topicProgress } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(student?.currentLevel || 'JHS 1');
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);

  // Examination Lifecycle States
  // 'dashboard' -> 'exam_paper1' -> 'exam_paper2' -> 'grading_review' -> 'results'
  const [examState, setExamState] = useState<'dashboard' | 'exam_paper1' | 'exam_paper2' | 'grading_review' | 'results'>('dashboard');

  // Progress summary & generated exam package
  const [summary, setSummary] = useState<WeeklyProgressSummary | null>(null);
  const [examPackage, setExamPackage] = useState<AdaptiveExamPackage | null>(null);
  const [pastAttempts, setPastAttempts] = useState<FullWeeklyExamAttempt[]>([]);

  // Paper 1 (Objectives) State
  const [paper1CurrentIdx, setPaper1CurrentIdx] = useState(0);
  const [paper1Answers, setPaper1Answers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [paper1Flagged, setPaper1Flagged] = useState<Record<string, boolean>>({});

  // Paper 2 (Theory) State
  const [theoryAnswers, setTheoryAnswers] = useState<Record<string, string>>({}); // subQuestionId -> student text
  const [theorySelfMarks, setTheorySelfMarks] = useState<Record<string, number>>({}); // subQuestionId -> mark awarded

  // Timer State
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(45 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);

  // Final Completed Attempt
  const [completedAttempt, setCompletedAttempt] = useState<FullWeeklyExamAttempt | null>(null);
  const handleProceedToGradingRef = useRef<() => void>(() => {});

  // Load progress summary and past attempts on mount or level change
  const reloadData = (lvl: EducationLevel) => {
    const sum = getWeeklyProgressSummary(lvl);
    setSummary(sum);
    const attempts = getFullWeeklyExamAttempts().filter(a => a.level === lvl);
    setPastAttempts(attempts);
  };

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_jhs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['JHS 1', 'JHS 2', 'JHS 3'];

      let effectiveLevel: EducationLevel = 'JHS 1';
      if (urlLevel && validLevels.includes(urlLevel)) {
        effectiveLevel = urlLevel;
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        effectiveLevel = savedLevel;
      } else if (student?.currentLevel && validLevels.includes(student.currentLevel)) {
        effectiveLevel = student.currentLevel;
      }

      setCurrentLevel(effectiveLevel);
      reloadData(effectiveLevel);
    }
  }, [student]);

  const handleLevelChange = (lvl: EducationLevel) => {
    setCurrentLevel(lvl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_jhs_level', lvl);
      const url = new URL(window.location.href);
      url.searchParams.set('level', lvl);
      window.history.replaceState({}, '', url.toString());
    }
    reloadData(lvl);
  };

  // Timer countdown during active exam
  useEffect(() => {
    if (!mounted) return;
    if (examState !== 'exam_paper1' && examState !== 'exam_paper2') return;

    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          // Auto advance to grading
          handleProceedToGradingRef.current();
          return 0;
        }
        return prev - 1;
      });
      setTimeSpentSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [examState, mounted]);

  // Start Exam
  const handleStartExam = () => {
    if (!student?.hasFullAccess) {
      setIsPinModalOpen(true);
      return;
    }
    const pkg = generateAdaptiveWeeklyExam(currentLevel);
    setExamPackage(pkg);
    setPaper1CurrentIdx(0);
    setPaper1Answers({});
    setPaper1Flagged({});
    setTheoryAnswers({});
    setTheorySelfMarks({});
    setTimeLeftSeconds((pkg.suggestedDurationMinutes || 45) * 60);
    setTimeSpentSeconds(0);
    setExamState('exam_paper1');
  };

  // Paper 1 Navigation & Selection
  const handleSelectPaper1Option = (questionId: string, opt: 'A' | 'B' | 'C' | 'D') => {
    setPaper1Answers(prev => ({ ...prev, [questionId]: opt }));
  };

  const toggleFlagPaper1 = (questionId: string) => {
    setPaper1Flagged(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // Transition from Paper 1 to Paper 2
  const handleProceedToPaper2 = () => {
    setExamState('exam_paper2');
  };

  // Transition from Paper 2 to Rubric Self-Grading
  const handleProceedToGrading = () => {
    if (!examPackage) return;

    // Pre-populate theory self-marks with 0 or estimate
    const initialMarks: Record<string, number> = {};
    examPackage.paper2Questions.forEach(q => {
      q.subQuestions.forEach(sub => {
        const subId = `${q.id}-${sub.part}`;
        const typed = theoryAnswers[subId] || '';
        // If student typed a substantial answer, default to partial mark
        initialMarks[subId] = typed.trim().length > 10 ? Math.ceil(sub.maxMarks * 0.75) : 0;
      });
    });

    setTheorySelfMarks(initialMarks);
    setExamState('grading_review');
  };

  useEffect(() => {
    handleProceedToGradingRef.current = handleProceedToGrading;
  });

  // Finalize Submission & Compute Composite Score
  const handleFinalizeSubmission = () => {
    if (!examPackage) return;

    // 1. Calculate Paper 1 (Objectives) Score
    let p1Correct = 0;
    examPackage.paper1Questions.forEach(q => {
      if (paper1Answers[q.id] === q.correctOption) {
        p1Correct++;
      }
    });

    const p1TotalQ = examPackage.paper1Questions.length;
    const p1Percent = p1TotalQ > 0 ? Math.round((p1Correct / p1TotalQ) * 100) : 0;
    const p1MarksAwarded = Math.round((p1Percent / 100) * examPackage.paper1MaxMarks);

    // 2. Calculate Paper 2 (Theory) Score
    let p2TotalMarks = 0;
    let p2EarnedMarks = 0;
    examPackage.paper2Questions.forEach(q => {
      q.subQuestions.forEach(sub => {
        p2TotalMarks += sub.maxMarks;
        const subId = `${q.id}-${sub.part}`;
        p2EarnedMarks += Math.min(sub.maxMarks, theorySelfMarks[subId] || 0);
      });
    });

    const p2Percent = p2TotalMarks > 0 ? Math.round((p2EarnedMarks / p2TotalMarks) * 100) : 0;

    // 3. Composite Score (40% Objectives + 60% Theory)
    const compositePercent = Math.round((p1Percent * 0.4) + (p2Percent * 0.6));
    const { grade, remark } = calculateStanineGrade(compositePercent);

    // Identify weak areas
    const weakTopics: string[] = [];
    examPackage.paper1Questions.forEach(q => {
      if (paper1Answers[q.id] !== q.correctOption && !weakTopics.includes(q.topicTitle)) {
        weakTopics.push(q.topicTitle);
      }
    });

    // Save Attempt
    const record = recordFullWeeklyExamAttempt({
      studentId: student?.id || 'guest-student',
      level: currentLevel,
      timeSpentSeconds,
      coveredTopicIds: examPackage.paper1Questions.map(q => q.topicId),
      coveredTopicTitles: Array.from(new Set(examPackage.paper1Questions.map(q => q.topicTitle))),
      remediatedMistakesCount: examPackage.remediationCount,
      paper1TotalQuestions: p1TotalQ,
      paper1CorrectCount: p1Correct,
      paper1ScoreMarks: p1MarksAwarded,
      paper1Percentage: p1Percent,
      paper1Answers,
      paper2TotalMarks: p2TotalMarks,
      paper2ScoreMarks: p2EarnedMarks,
      paper2Percentage: p2Percent,
      paper2StudentAnswers: theoryAnswers,
      paper2GradingMarks: theorySelfMarks,
      compositeTotalPercentage: compositePercent,
      stanineGrade: grade,
      gradeRemark: remark,
      weakAreasIdentified: weakTopics.slice(0, 4)
    });

    setCompletedAttempt(record);
    setExamState('results');
    reloadData(currentLevel);

    if (compositePercent >= 60) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-slate-800"></div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: DASHBOARD (Weekly Progress Monitor & Exam Launcher)
  // =========================================================================
  if (examState === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-50/50 pb-20">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/jhs"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition p-1.5 rounded-lg hover:bg-slate-100"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to JHS Portal</span>
              </Link>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                <span>Junior High School</span>
                <span>/</span>
                <span className="font-semibold text-slate-900">Adaptive Weekly Examination</span>
              </div>
            </div>

            {/* Level Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl">
              {(['JHS 1', 'JHS 2', 'JHS 3'] as EducationLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => handleLevelChange(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentLevel === lvl
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Hero Banner */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Curriculum Adaptive Assessment</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentLevel} Adaptive Weekly Examination
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                This engine continuously monitors the topics you complete and the specific questions you got wrong in quizzes. At the end of every week, it synthesizes a full examination featuring <b>Paper 1 (Objectives)</b> and <b>Paper 2 (Theory)</b> with authentic WAEC marking rubrics.
              </p>
            </div>

            {/* VIP Lock Notice */}
            {mounted && !student?.hasFullAccess && (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-amber-950">
                      Weekly Adaptive Examination Requires VIP Access Pass
                    </p>
                    <p className="text-[11px] text-amber-800">
                      Free accounts allow studying up to 3 curriculum topics. An Access PIN unlocks full CBT weekly examinations featuring timed objectives and theory marking rubrics.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPinModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 transition shadow-xs flex items-center justify-center gap-1.5"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Enter PIN to Unlock</span>
                </button>
              </div>
            )}

            {/* Exam Launch CTA */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-slate-500">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>Full Exam: Paper 1 (Objectives) + Paper 2 (Theory)</span>
                </div>
                <p>Duration: 45 minutes · Automated WAEC Stanine Grading (Grade 1 - 9)</p>
              </div>

              <button
                onClick={handleStartExam}
                className={`py-3 px-6 rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 shrink-0 cursor-pointer ${
                  !student?.hasFullAccess
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {!student?.hasFullAccess ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Unlock Weekly Exam (Enter PIN)</span>
                  </>
                ) : (
                  <>
                    <span>Launch Weekly Examination</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Diagnostic Stats Grid */}
          {summary && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stat 1: Topics Completed */}
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>Topics Mastered</span>
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 font-mono">
                  {summary.completedTopicsCount}
                </div>
                <p className="text-[11px] text-slate-500">
                  {summary.completedTopicsCount > 0
                    ? 'Covered in this week\'s exam pool'
                    : 'Complete topic quizzes to expand pool'}
                </p>
              </div>

              {/* Stat 2: Quiz Accuracy */}
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>Quiz Accuracy</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 font-mono">
                  {summary.quizAccuracyPercentage}%
                </div>
                <p className="text-[11px] text-slate-500">
                  Based on daily topic quiz attempts
                </p>
              </div>

              {/* Stat 3: Flagged Mistake Concepts */}
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>Flagged Mistakes</span>
                  <Target className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 font-mono">
                  {summary.mistakesCount}
                </div>
                <p className="text-[11px] text-amber-700 font-medium">
                  Prioritized for remediation in exam
                </p>
              </div>

              {/* Stat 4: Exam Readiness */}
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>Weekly Readiness</span>
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Exam Ready</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {summary.completedTopicsCount >= 3 ? 'High Mastery' : 'Foundational Mode'}
                </p>
              </div>
            </div>
          )}

          {/* Remediation Concepts & Mistake Insights */}
          {summary && summary.weakSubConcepts.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Flagged Quiz Concepts Targeted for Remediation
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500">
                  These concepts were answered incorrectly in daily practice
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {summary.weakSubConcepts.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-amber-200/80 bg-amber-50/40 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-semibold text-amber-900">
                      <span>{item.concept}</span>
                      <span className="font-mono text-[10px] bg-amber-200/60 px-1.5 py-0.5 rounded text-amber-900">
                        {item.count} {item.count === 1 ? 'mistake' : 'mistakes'}
                      </span>
                    </div>
                    <div className="text-[11px] text-amber-700">
                      Subject: {item.subjectName}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Weekly Exam Attempts History */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-slate-800" />
                <h3 className="text-sm font-bold text-slate-900">
                  Weekly Examination History ({currentLevel})
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {pastAttempts.length} {pastAttempts.length === 1 ? 'attempt' : 'attempts'} recorded
              </span>
            </div>

            {pastAttempts.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-slate-200 rounded-xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">No Weekly Exams Taken Yet</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Click the &quot;Launch Weekly Examination&quot; button above to take your first combined Paper 1 and Paper 2 exam.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {pastAttempts.map((attempt) => (
                  <div key={attempt.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 font-mono">
                          {new Date(attempt.completedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white font-mono">
                          {attempt.gradeRemark}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-3">
                        <span>Paper 1 (Obj): <b>{attempt.paper1ScoreMarks} / {attempt.paper1TotalQuestions}</b> ({attempt.paper1Percentage}%)</span>
                        <span>•</span>
                        <span>Paper 2 (Theory): <b>{attempt.paper2ScoreMarks} / {attempt.paper2TotalMarks}</b> ({attempt.paper2Percentage}%)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-900 font-mono">
                          {attempt.compositeTotalPercentage}%
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">
                          Composite Score
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Access PIN Paywall Modal */}
        <AccessPinModal
          isOpen={isPinModalOpen}
          onClose={() => setIsPinModalOpen(false)}
          featureName="Adaptive Weekly Examination"
          onSuccess={() => {
            setIsPinModalOpen(false);
          }}
        />
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: PAPER 1 (OBJECTIVES / CBT EXAM)
  // =========================================================================
  if (examState === 'exam_paper1' && examPackage) {
    const currentQ = examPackage.paper1Questions[paper1CurrentIdx];
    const totalP1 = examPackage.paper1Questions.length;
    const answeredCount = Object.keys(paper1Answers).length;

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Sticky Exam Bar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                PAPER 1: SECTION A (OBJECTIVES)
              </span>
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
                Question {paper1CurrentIdx + 1} of {totalP1}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-600" />
                <span>{formatTimer(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={handleProceedToPaper2}
                className="py-1.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Go to Paper 2 (Theory)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Paper 1 Question Canvas */}
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.round((answeredCount / totalP1) * 100)}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            {/* Remediation & Meta Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {currentQ.subjectName}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {currentQ.topicTitle}
                </span>
              </div>

              {currentQ.isRemediationTarget && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 border border-amber-200 text-amber-800">
                  <Target className="w-3 h-3 text-amber-600" />
                  <span>Targeted Remediation Concept</span>
                </span>
              )}
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 font-mono">QUESTION {paper1CurrentIdx + 1}</span>
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                {currentQ.questionText}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                const optText = opt === 'A' ? currentQ.optionA : opt === 'B' ? currentQ.optionB : opt === 'C' ? currentQ.optionC : currentQ.optionD;
                const isSelected = paper1Answers[currentQ.id] === opt;

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectPaper1Option(currentQ.id, opt)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition flex items-center gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold font-mono shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {opt}
                    </span>
                    <span className="flex-1">{optText}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={() => setPaper1CurrentIdx(prev => Math.max(0, prev - 1))}
                disabled={paper1CurrentIdx === 0}
                className="py-2 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40 transition"
              >
                Previous
              </button>

              <button
                onClick={() => toggleFlagPaper1(currentQ.id)}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center gap-1.5 ${
                  paper1Flagged[currentQ.id]
                    ? 'border-amber-300 bg-amber-50 text-amber-800'
                    : 'border-slate-200 text-slate-500 hover:text-slate-800'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{paper1Flagged[currentQ.id] ? 'Flagged' : 'Flag'}</span>
              </button>

              {paper1CurrentIdx < totalP1 - 1 ? (
                <button
                  onClick={() => setPaper1CurrentIdx(prev => Math.min(totalP1 - 1, prev + 1))}
                  className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleProceedToPaper2}
                  className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                >
                  <span>Proceed to Paper 2</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Palette */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-3 font-mono">
              Question Navigator ({answeredCount}/{totalP1} Answered)
            </span>
            <div className="flex flex-wrap gap-2">
              {examPackage.paper1Questions.map((q, idx) => {
                const isAns = paper1Answers[q.id] !== undefined;
                const isCur = idx === paper1CurrentIdx;
                const isFlg = paper1Flagged[q.id];

                return (
                  <button
                    key={q.id}
                    onClick={() => setPaper1CurrentIdx(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold font-mono transition flex items-center justify-center ${
                      isCur
                        ? 'ring-2 ring-blue-600 bg-slate-900 text-white'
                        : isAns
                        ? 'bg-slate-200 text-slate-800'
                        : 'border border-slate-200 text-slate-500 hover:bg-slate-100'
                    } ${isFlg ? 'border-amber-400 bg-amber-50 text-amber-900' : ''}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: PAPER 2 (THEORY / WRITTEN PROBLEMS)
  // =========================================================================
  if (examState === 'exam_paper2' && examPackage) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Sticky Exam Bar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setExamState('exam_paper1')}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 p-1 rounded hover:bg-slate-100"
              >
                ← Return to Paper 1
              </button>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                PAPER 2: SECTION B (THEORY)
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-600" />
                <span>{formatTimer(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={handleProceedToGrading}
                className="py-1.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Submit & View Marking Guide</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Paper 2 Question Canvas */}
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-2">
            <h2 className="text-base font-bold text-slate-900">
              Section B: Structured Problem-Solving & Theory Questions
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Answer all questions clearly. Type your full step-by-step mathematical working, explanations, or essay paragraphs into the designated answer boxes below. Marks are awarded for method [M1], accuracy [A1], and clear reasoning.
            </p>
          </div>

          {examPackage.paper2Questions.map((q) => (
            <div key={q.id} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold font-mono text-xs flex items-center justify-center">
                    {q.questionNumber}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {q.subjectName}: {q.topicTitle}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  {q.totalMarks} Marks
                </span>
              </div>

              {/* Scenario */}
              {q.scenario && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 leading-relaxed font-sans">
                  {q.scenario}
                </div>
              )}

              {/* Sub-questions */}
              <div className="space-y-6 pt-2">
                {q.subQuestions.map((sub) => {
                  const subId = `${q.id}-${sub.part}`;
                  const val = theoryAnswers[subId] || '';

                  return (
                    <div key={sub.part} className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                          <span className="font-mono text-blue-600 font-bold mr-1.5">{sub.part}</span>
                          {sub.prompt}
                        </p>
                        <span className="text-[11px] font-mono text-slate-500 font-semibold shrink-0">
                          [{sub.maxMarks} {sub.maxMarks === 1 ? 'mark' : 'marks'}]
                        </span>
                      </div>

                      {/* Text Input for Working */}
                      <textarea
                        value={val}
                        onChange={(e) => {
                          const text = e.target.value;
                          setTheoryAnswers(prev => ({ ...prev, [subId]: text }));
                        }}
                        placeholder="Type your working steps, final values, or structured answer here..."
                        rows={4}
                        className="w-full text-xs font-mono p-3.5 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-slate-50/50"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom Submit CTA */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Ready to submit? You will review your working side-by-side with the official WAEC marking rubric.
            </span>
            <button
              onClick={handleProceedToGrading}
              className="py-2.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Submit & Review Marking Rubrics</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================================
  // VIEW 4: INTERACTIVE MARKING RUBRIC REVIEW (Self-Scoring Side-by-Side)
  // =========================================================================
  if (examState === 'grading_review' && examPackage) {
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-8 py-4 shadow-xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Interactive Grading Stage
              </span>
              <h1 className="text-base font-bold text-slate-900 mt-0.5">
                Official WAEC Marking Guide & Self-Assessment
              </h1>
            </div>

            <button
              onClick={handleFinalizeSubmission}
              className="py-2 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Calculate Final Stanine Grade</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-2">
            <h2 className="text-sm font-bold text-slate-900">
              How to Score Your Paper 2 Answers
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compare your typed working on the left with the official WAEC model answer and step-by-step marking rubrics on the right. Award yourself marks based on whether you satisfied the method marks [M1] and accuracy marks [A1].
            </p>
          </div>

          {examPackage.paper2Questions.map((q) => (
            <div key={q.id} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-900">
                  Question {q.questionNumber}: {q.subjectName} ({q.topicTitle})
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  Max: {q.totalMarks} Marks
                </span>
              </div>

              <div className="space-y-8">
                {q.subQuestions.map((sub) => {
                  const subId = `${q.id}-${sub.part}`;
                  const studentText = theoryAnswers[subId] || '(No answer provided)';
                  const currentAwarded = theorySelfMarks[subId] || 0;

                  return (
                    <div key={sub.part} className="space-y-4 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                        <span>Part {sub.part}: {sub.prompt}</span>
                        <span className="font-mono text-slate-500">Max: {sub.maxMarks} marks</span>
                      </div>

                      {/* Side by Side Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Student Answer */}
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                            Your Working
                          </span>
                          <p className="text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed">
                            {studentText}
                          </p>
                        </div>

                        {/* Model Solution & Rubrics */}
                        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block font-mono">
                            Official Model Answer & Rubric
                          </span>
                          <p className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed font-sans">
                            {sub.modelAnswer}
                          </p>
                          <div className="p-2.5 rounded-lg bg-white border border-emerald-200/80 text-[11px] font-mono text-emerald-900 whitespace-pre-wrap">
                            {sub.markingSchemeRubric}
                          </div>
                        </div>
                      </div>

                      {/* Score Selector */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-xs">
                        <span className="font-semibold text-slate-700">
                          Marks Awarded for Part {sub.part}:
                        </span>
                        <div className="flex items-center gap-1.5">
                          {Array.from({ length: sub.maxMarks + 1 }, (_, i) => i).map((pt) => (
                            <button
                              key={pt}
                              type="button"
                              onClick={() => {
                                setTheorySelfMarks(prev => ({ ...prev, [subId]: pt }));
                              }}
                              className={`w-8 h-8 rounded-lg font-bold font-mono text-xs transition cursor-pointer ${
                                currentAwarded === pt
                                  ? 'bg-slate-900 text-white shadow-xs'
                                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              {pt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              onClick={handleFinalizeSubmission}
              className="py-3 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Calculate Final Stanine Grade & View Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================================
  // VIEW 5: FINAL COMPOSITE RESULTS & WAEC REPORT CARD
  // =========================================================================
  if (examState === 'results' && completedAttempt) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main Report Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-center">
            {/* Top Grade Badge */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Official WAEC Stanine Assessment
                </span>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {completedAttempt.gradeRemark}
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Completed on {new Date(completedAttempt.completedAt).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            {/* Score Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Composite Score</span>
                <span className="text-3xl font-extrabold text-slate-900 font-mono mt-1 block">
                  {completedAttempt.compositeTotalPercentage}%
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Overall Average</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Paper 1 (Objectives)</span>
                <span className="text-3xl font-extrabold text-slate-900 font-mono mt-1 block">
                  {completedAttempt.paper1Percentage}%
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">
                  {completedAttempt.paper1CorrectCount} / {completedAttempt.paper1TotalQuestions} Correct
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Paper 2 (Theory)</span>
                <span className="text-3xl font-extrabold text-slate-900 font-mono mt-1 block">
                  {completedAttempt.paper2Percentage}%
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">
                  {completedAttempt.paper2ScoreMarks} / {completedAttempt.paper2TotalMarks} Marks
                </span>
              </div>
            </div>

            {/* Weak Areas / Remediation Feedback */}
            {completedAttempt.weakAreasIdentified.length > 0 && (
              <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40 text-left space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>Topics Requiring Additional Revision</span>
                </div>
                <ul className="space-y-1 text-xs text-amber-800">
                  {completedAttempt.weakAreasIdentified.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setExamState('dashboard');
                  reloadData(currentLevel);
                }}
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
              >
                Back to Weekly Exam Hub
              </button>

              <Link
                href="/jhs"
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
              >
                Return to JHS Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
