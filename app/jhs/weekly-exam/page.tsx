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
  OFFICIAL_SCHEDULED_EXAM, 
  ScheduledExamAttemptRecord,
  getScheduledExamAttempt, 
  saveScheduledExamAttempt, 
  getScheduledExamStatus, 
  isStudentDisqualified,
  SCHEDULED_EXAM_STORAGE_KEYS,
  setPenaltyLockout,
  getRemainingPenaltyLockoutSeconds,
  clearPenaltyLockout
} from '@/lib/scheduledWeeklyExam';
import ScheduledExamBanner from '@/components/ScheduledExamBanner';
import ScheduledExamBriefingModal from '@/components/ScheduledExamBriefingModal';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Trophy, 
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
  Unlock,
  KeyRound,
  ShieldAlert,
  AlertTriangle,
  FlaskConical,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import AccessPinModal from '@/components/AccessPinModal';

export default function WeeklyExamPage() {
  const { student, topicProgress, hasFullAccess, isTrialActive, trialDaysRemaining, isAdmin } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(student?.currentLevel || 'JHS 1');
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [isAdminPreviewMode, setIsAdminPreviewMode] = useState(false);
  const [timeStatus, setTimeStatus] = useState(() => getScheduledExamStatus());

  // Examination Lifecycle States
  // 'dashboard' -> 'exam_paper1' -> 'exam_paper2' -> 'penalty_lockout' -> 'grading_review' -> 'results' | 'disqualified'
  const [examState, setExamState] = useState<'dashboard' | 'exam_paper1' | 'exam_paper2' | 'penalty_lockout' | 'grading_review' | 'results' | 'disqualified'>('dashboard');

  // Penalty Lockout & Proctoring State
  const [penaltyLockoutRemaining, setPenaltyLockoutRemaining] = useState(0);
  const [activeScheduledPaper, setActiveScheduledPaper] = useState<'paper1' | 'paper2'>('paper1');

  // Scheduled Exam States
  const [isScheduledMode, setIsScheduledMode] = useState(false);
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [scheduledAttempt, setScheduledAttempt] = useState<ScheduledExamAttemptRecord | null>(null);
  const [terminationReason, setTerminationReason] = useState<'normal_submission' | 'time_expired' | 'tab_switched_expired' | null>(null);

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

  // Continuously refresh schedule status
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStatus(getScheduledExamStatus());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load progress summary and past attempts on mount or level change
  const reloadData = (lvl: EducationLevel) => {
    const sum = getWeeklyProgressSummary(lvl);
    setSummary(sum);
    const attempts = getFullWeeklyExamAttempts().filter(a => a.level === lvl);
    setPastAttempts(attempts);
  };

  // Check URL parameters and past attempts on mount
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const urlMode = urlParams.get('mode');
      const urlAdmin = urlParams.get('admin') === 'true';
      if (urlAdmin || isAdmin) {
        setIsAdminPreviewMode(true);
      }
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

      // Check active penalty lockout
      const remLockout = getRemainingPenaltyLockoutSeconds();
      const storedEndTime = localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME);
      const storedPaper = (localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER) as 'paper1' | 'paper2') || 'paper1';

      if (storedPaper) {
        setActiveScheduledPaper(storedPaper);
      }

      // Check scheduled attempt
      const pastSched = getScheduledExamAttempt(OFFICIAL_SCHEDULED_EXAM.id);
      if (pastSched) {
        setScheduledAttempt(pastSched);
        // Only show disqualified if explicitly expired in an older session with no active lockout/exam
        if (pastSched.status === 'expired' && remLockout <= 0 && !storedEndTime) {
          setIsScheduledMode(true);
          setTerminationReason(pastSched.terminationReason || 'tab_switched_expired');
          setExamState('disqualified');
          return;
        }
      }

      // Check if an active examination session was in progress
      if (storedEndTime) {
        const endTimeNum = parseInt(storedEndTime, 10);
        const remExamTime = Math.max(0, Math.ceil((endTimeNum - Date.now()) / 1000));

        // Restore saved answers from localStorage
        try {
          const rawP1 = localStorage.getItem('academicprep_scheduled_p1_answers');
          if (rawP1) setPaper1Answers(JSON.parse(rawP1));
          const rawP2 = localStorage.getItem('academicprep_scheduled_theory_answers');
          if (rawP2) setTheoryAnswers(JSON.parse(rawP2));
        } catch {}

        const pkg: AdaptiveExamPackage = {
          level: 'JHS 3',
          title: OFFICIAL_SCHEDULED_EXAM.title,
          paper1Questions: OFFICIAL_SCHEDULED_EXAM.paper1Questions.map(q => ({
            ...q,
            topicId: OFFICIAL_SCHEDULED_EXAM.topicId,
            topicTitle: OFFICIAL_SCHEDULED_EXAM.topicTitle,
            subjectId: OFFICIAL_SCHEDULED_EXAM.subjectId,
            subjectName: OFFICIAL_SCHEDULED_EXAM.subjectName,
          })),
          paper2Questions: OFFICIAL_SCHEDULED_EXAM.paper2Questions,
          paper1MaxMarks: OFFICIAL_SCHEDULED_EXAM.paper1MaxMarks,
          paper2MaxMarks: OFFICIAL_SCHEDULED_EXAM.paper2MaxMarks,
          totalExamMarks: OFFICIAL_SCHEDULED_EXAM.totalMarks,
          suggestedDurationMinutes: OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes,
          remediationCount: 0,
        };
        setExamPackage(pkg);
        setIsScheduledMode(true);
        setTimeLeftSeconds(remExamTime);

        if (remLockout > 0) {
          setPenaltyLockoutRemaining(remLockout);
          setExamState('penalty_lockout');
          return;
        } else if (remExamTime > 0) {
          setExamState(storedPaper === 'paper2' ? 'exam_paper2' : 'exam_paper1');
          return;
        }
      }

      if (urlMode === 'scheduled') {
        setIsScheduledMode(true);
        effectiveLevel = 'JHS 3';
        if (!pastSched || pastSched.status !== 'completed') {
          setIsBriefingModalOpen(true);
        }
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

  // Launch Scheduled Examination (Atomic Structure)
  const handleStartScheduledExam = () => {
    const remLockout = getRemainingPenaltyLockoutSeconds();
    if (remLockout > 0) {
      setPenaltyLockoutRemaining(remLockout);
      setExamState('penalty_lockout');
      return;
    }
    setIsBriefingModalOpen(true);
  };

  // Reset exam state to permit re-testing
  const handleResetScheduledExamForTesting = () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(`${SCHEDULED_EXAM_STORAGE_KEYS.ATTEMPT}_${OFFICIAL_SCHEDULED_EXAM.id}`);
      localStorage.removeItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME);
      localStorage.removeItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER);
      localStorage.removeItem('academicprep_scheduled_p1_answers');
      localStorage.removeItem('academicprep_scheduled_theory_answers');
      localStorage.removeItem('academicprep_scheduled_theory_marks');
      clearPenaltyLockout();
    } catch {}
    setScheduledAttempt(null);
    setExamPackage(null);
    setPaper1Answers({});
    setPaper1Flagged({});
    setTheoryAnswers({});
    setTheorySelfMarks({});
    setPenaltyLockoutRemaining(0);
    setExamState('dashboard');
    setIsBriefingModalOpen(true);
  };

  const handleConfirmLaunchScheduledExam = () => {
    if (!isAdminPreviewMode && timeStatus.isUpcoming) {
      alert('The Examination Hall is locked and will open at 6:00 PM GMT sharp. Please wait for the countdown to complete.');
      return;
    }
    if (!isAdminPreviewMode && timeStatus.isEnded) {
      alert('The Examination window concluded at 12:00 AM GMT (Midnight). Submissions for this session are now closed.');
      return;
    }

    setIsBriefingModalOpen(false);
    setIsScheduledMode(true);
    setCurrentLevel('JHS 3');

    const pkg: AdaptiveExamPackage = {
      level: 'JHS 3',
      title: OFFICIAL_SCHEDULED_EXAM.title,
      paper1Questions: OFFICIAL_SCHEDULED_EXAM.paper1Questions.map(q => ({
        ...q,
        topicId: OFFICIAL_SCHEDULED_EXAM.topicId,
        topicTitle: OFFICIAL_SCHEDULED_EXAM.topicTitle,
        subjectId: OFFICIAL_SCHEDULED_EXAM.subjectId,
        subjectName: OFFICIAL_SCHEDULED_EXAM.subjectName,
      })),
      paper2Questions: OFFICIAL_SCHEDULED_EXAM.paper2Questions,
      paper1MaxMarks: OFFICIAL_SCHEDULED_EXAM.paper1MaxMarks,
      paper2MaxMarks: OFFICIAL_SCHEDULED_EXAM.paper2MaxMarks,
      totalExamMarks: OFFICIAL_SCHEDULED_EXAM.totalMarks,
      suggestedDurationMinutes: OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes,
      remediationCount: 0,
    };

    setExamPackage(pkg);
    setPaper1CurrentIdx(0);
    setPaper1Answers({});
    setPaper1Flagged({});
    setTheoryAnswers({});
    setTheorySelfMarks({});

    clearPenaltyLockout();
    try {
      localStorage.removeItem('academicprep_scheduled_p1_answers');
      localStorage.removeItem('academicprep_scheduled_theory_answers');
      localStorage.removeItem('academicprep_scheduled_theory_marks');
    } catch {}

    // Sync candidate start to admin scoreboard API
    fetch('/api/admin/weekly-exams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: `attempt-sched-${Date.now()}`,
        examId: OFFICIAL_SCHEDULED_EXAM.id,
        studentId: student?.id || (isAdminPreviewMode ? 'admin-preview-user' : 'guest-student'),
        studentName: student?.fullName || (isAdminPreviewMode ? 'Administrator (Preview)' : 'Candidate'),
        studentPhone: student?.phoneNumber || (isAdminPreviewMode ? '0244000000' : '0240000000'),
        level: 'JHS 3',
        status: 'in_progress',
        paper1ScoreMarks: 0,
        paper1TotalQuestions: 25,
        paper1Percentage: 0,
        paper2ScoreMarks: 0,
        paper2TotalMarks: 60,
        paper2Percentage: 0,
        compositePercentage: 0,
        stanineGrade: 9,
        gradeRemark: 'Paper 1 In-Progress',
        timeSpentSeconds: 0,
        startedAt: new Date().toISOString(),
      })
    }).catch(() => {});

    // Paper 1 Sequential Timer: 30 minutes (1800s)
    const p1DurationSec = OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes * 60;
    const p1EndTimestamp = Date.now() + p1DurationSec * 1000;
    try {
      localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME, String(p1EndTimestamp));
      localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER, 'paper1');
    } catch {}

    setActiveScheduledPaper('paper1');
    setTimeLeftSeconds(p1DurationSec);
    setTimeSpentSeconds(0);
    setExamState('exam_paper1');
  };

  // Strict Proctoring: Trigger 5-Minute Penalty Lockout on Tab Switch / Window Blur
  useEffect(() => {
    if (!mounted || !isScheduledMode) return;
    if (examState !== 'exam_paper1' && examState !== 'exam_paper2') return;

    const handleViolation = () => {
      const existing = getRemainingPenaltyLockoutSeconds();
      if (existing <= 0) {
        setPenaltyLockout(300); // 5 minutes (300 seconds)
        setPenaltyLockoutRemaining(300);
      } else {
        setPenaltyLockoutRemaining(existing);
      }
      setExamState('penalty_lockout');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handleViolation();
      }
    };

    const handleBlur = () => {
      handleViolation();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };
  }, [mounted, isScheduledMode, examState]);

  // Penalty Lockout Interval: Cooldown countdown AND Live Exam countdown in real time!
  useEffect(() => {
    if (!mounted || examState !== 'penalty_lockout') return;

    const interval = setInterval(() => {
      // 1. Update Penalty Lockout countdown
      const remLockout = getRemainingPenaltyLockoutSeconds();
      setPenaltyLockoutRemaining(remLockout);

      // 2. Update Active Exam Clock (continues running in real time)
      const storedEndTime = localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME);
      if (storedEndTime) {
        const endTimeNum = parseInt(storedEndTime, 10);
        const remExamTime = Math.max(0, Math.ceil((endTimeNum - Date.now()) / 1000));
        setTimeLeftSeconds(remExamTime);

        // If Paper 1 runs out of time while locked out:
        if (remExamTime <= 0 && activeScheduledPaper === 'paper1') {
          const p2DurationSec = OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes * 60;
          const p2EndTimestamp = Date.now() + p2DurationSec * 1000;
          try {
            localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME, String(p2EndTimestamp));
            localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER, 'paper2');
          } catch {}
          setActiveScheduledPaper('paper2');
          setTimeLeftSeconds(p2DurationSec);
        }
      }
      setTimeSpentSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, examState, activeScheduledPaper]);

  // Resume examination after completing 5-minute penalty lockout
  const handleResumeAfterPenalty = () => {
    clearPenaltyLockout();
    setPenaltyLockoutRemaining(0);

    const storedEndTime = localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME);
    const storedPaper = (localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER) as 'paper1' | 'paper2') || activeScheduledPaper;

    if (storedEndTime) {
      const rem = Math.max(0, Math.ceil((parseInt(storedEndTime, 10) - Date.now()) / 1000));
      if (rem <= 0 && storedPaper === 'paper2') {
        handleProceedToGrading();
        return;
      }
      setTimeLeftSeconds(rem);
    }

    if (storedPaper === 'paper2') {
      setActiveScheduledPaper('paper2');
      setExamState('exam_paper2');
    } else {
      setActiveScheduledPaper('paper1');
      setExamState('exam_paper1');
    }
  };

  // Developer / Tester Fast-Forward: Skip 5-minute wait during test session
  const handleSkipPenaltyForTesting = () => {
    clearPenaltyLockout();
    setPenaltyLockoutRemaining(0);
  };

  // Sequential Timer countdown during active exam
  useEffect(() => {
    if (!mounted) return;
    if (examState !== 'exam_paper1' && examState !== 'exam_paper2') return;

    const interval = setInterval(() => {
      if (isScheduledMode) {
        const storedEndTime = localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME);
        if (storedEndTime) {
          const endTimeNum = parseInt(storedEndTime, 10);
          const remExamTime = Math.max(0, Math.ceil((endTimeNum - Date.now()) / 1000));
          setTimeLeftSeconds(remExamTime);

          if (remExamTime <= 0) {
            clearInterval(interval);
            if (examState === 'exam_paper1') {
              handleProceedToPaper2();
            } else {
              handleProceedToGradingRef.current();
            }
            return;
          }
          setTimeSpentSeconds(prev => prev + 1);
          return;
        }
      }

      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          if (isScheduledMode && examState === 'exam_paper1') {
            handleProceedToPaper2();
            return OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes * 60;
          } else {
            handleProceedToGradingRef.current();
            return 0;
          }
        }
        return prev - 1;
      });
      setTimeSpentSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [examState, isScheduledMode, mounted]);

  // Start Adaptive General Exam (Non-scheduled practice)
  const handleStartExam = () => {
    setIsScheduledMode(false);
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
    setPaper1Answers(prev => {
      const next = { ...prev, [questionId]: opt };
      if (isScheduledMode && typeof window !== 'undefined') {
        try {
          localStorage.setItem('academicprep_scheduled_p1_answers', JSON.stringify(next));
        } catch {}
      }
      return next;
    });
  };

  const toggleFlagPaper1 = (questionId: string) => {
    setPaper1Flagged(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // Transition from Paper 1 to Paper 2
  const handleProceedToPaper2 = () => {
    if (isScheduledMode) {
      // Paper 2 starts with fresh 1-hour timer (3600s)
      const p2DurationSec = OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes * 60;
      const p2EndTimestamp = Date.now() + p2DurationSec * 1000;
      try {
        localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME, String(p2EndTimestamp));
        localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER, 'paper2');
      } catch {}
      setActiveScheduledPaper('paper2');
      setTimeLeftSeconds(p2DurationSec);
    }
    setExamState('exam_paper2');
  };

  const handleUpdateTheoryAnswer = (subId: string, text: string) => {
    setTheoryAnswers(prev => {
      const next = { ...prev, [subId]: text };
      if (isScheduledMode && typeof window !== 'undefined') {
        try {
          localStorage.setItem('academicprep_scheduled_theory_answers', JSON.stringify(next));
        } catch {}
      }
      return next;
    });
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

    if (isScheduledMode) {
      const schedRecord: ScheduledExamAttemptRecord = {
        id: `attempt-sched-${Date.now()}`,
        examId: OFFICIAL_SCHEDULED_EXAM.id,
        studentId: student?.id || 'guest-student',
        studentName: student?.fullName || 'Candidate',
        studentPhone: student?.phoneNumber || undefined,
        startedAt: new Date(Date.now() - Math.max(1, timeSpentSeconds) * 1000).toISOString(),
        completedAt: new Date().toISOString(),
        status: 'completed',
        terminationReason: 'normal_submission',
        timeSpentSeconds,
        paper1Answers,
        paper1CorrectCount: p1Correct,
        paper1TotalQuestions: p1TotalQ,
        paper1Percentage: p1Percent,
        paper1ScoreMarks: p1MarksAwarded,
        paper2Answers: theoryAnswers,
        paper2SelfMarks: theorySelfMarks,
        paper2TotalMarks: p2TotalMarks,
        paper2ScoreMarks: p2EarnedMarks,
        paper2Percentage: p2Percent,
        compositePercentage: compositePercent,
        stanineGrade: grade,
        gradeRemark: remark,
      };
      saveScheduledExamAttempt(schedRecord);
      setScheduledAttempt(schedRecord);

      // Sync candidate completion and final score to admin scoreboard API
      fetch('/api/admin/weekly-exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: schedRecord.id,
          examId: schedRecord.examId,
          studentId: schedRecord.studentId,
          studentName: schedRecord.studentName,
          studentPhone: schedRecord.studentPhone || 'N/A',
          level: 'JHS 3',
          status: 'completed',
          paper1ScoreMarks: schedRecord.paper1ScoreMarks,
          paper1TotalQuestions: schedRecord.paper1TotalQuestions,
          paper1Percentage: schedRecord.paper1Percentage,
          paper2ScoreMarks: schedRecord.paper2ScoreMarks,
          paper2TotalMarks: schedRecord.paper2TotalMarks,
          paper2Percentage: schedRecord.paper2Percentage,
          compositePercentage: schedRecord.compositePercentage,
          stanineGrade: schedRecord.stanineGrade,
          gradeRemark: schedRecord.gradeRemark,
          timeSpentSeconds: schedRecord.timeSpentSeconds,
          startedAt: schedRecord.startedAt,
          completedAt: schedRecord.completedAt,
        })
      }).catch(() => {});

      try {
        localStorage.removeItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_END_TIME);
        localStorage.removeItem(SCHEDULED_EXAM_STORAGE_KEYS.ACTIVE_EXAM_CURRENT_PAPER);
        localStorage.removeItem('academicprep_scheduled_p1_answers');
        localStorage.removeItem('academicprep_scheduled_theory_answers');
        clearPenaltyLockout();
      } catch {}
    }

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
  // VIEW: 5-MINUTE PROCTORING PENALTY LOCKOUT
  // =========================================================================
  if (examState === 'penalty_lockout') {
    const isCooldownFinished = penaltyLockoutRemaining <= 0;

    return (
      <div className="min-h-screen bg-slate-900 py-10 px-4 sm:px-6 lg:px-8 text-white flex items-center justify-center">
        <div className="max-w-2xl w-full bg-slate-950 border-2 border-amber-500/70 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
          
          {/* Violation Icon */}
          <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-900/40">
            <ShieldAlert className="w-10 h-10 animate-pulse" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              PROCTORING PENALTY LOCKOUT ACTIVE
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-2">
              Examination Temporarily Locked
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              An unauthorized window blur or browser tab switch was detected while your examination was active.
            </p>
          </div>

          {/* Dual Timer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* Penalty Cooldown Timer */}
            <div className={`p-4 rounded-2xl border transition-all ${
              isCooldownFinished
                ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/40'
                : 'bg-amber-950/40 border-amber-500/60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Penalty Wait Time
                </span>
                {isCooldownFinished ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/30 text-emerald-300">
                    COMPLETE
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/30 text-amber-300 animate-pulse">
                    SERVING PENALTY
                  </span>
                )}
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mt-2">
                {isCooldownFinished ? (
                  <span className="text-emerald-400">00:00</span>
                ) : (
                  <span className="text-amber-300">{formatTimer(penaltyLockoutRemaining)}</span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {isCooldownFinished
                  ? 'Penalty served! You may now resume your paper.'
                  : 'Re-entry is locked until this timer hits 00:00.'}
              </p>
            </div>

            {/* Live Exam Clock (Ticking in real time) */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {activeScheduledPaper === 'paper1' ? 'Paper 1 (Objs) Clock' : 'Paper 2 (Theory) Clock'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300">
                  RUNNING IN BACKGROUND
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mt-2">
                <span className={timeLeftSeconds < 300 ? 'text-rose-400' : 'text-blue-400'}>
                  {formatTimer(timeLeftSeconds)}
                </span>
              </div>
              <p className="text-[11px] text-rose-300/90 mt-1 font-medium">
                ⚠️ Exam clock does NOT pause. Time spent locked out is lost from your exam.
              </p>
            </div>
          </div>

          {/* Explanation Alert */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 text-left space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Proctoring Rule & Answer Preservation</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Your answers have been safely preserved in your browser. Leaving the exam window triggers a mandatory 5-minute penalty lockout before you can continue. Once the penalty countdown expires, the button below will unlock and return you directly to your paper.
            </p>
            {activeScheduledPaper === 'paper1' && timeLeftSeconds <= 0 && (
              <p className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 p-2 rounded-lg border border-amber-800/60">
                Notice: Paper 1 (30 minutes) elapsed while waiting in lockout and has been auto-submitted. You will resume straight into Paper 2 (Theory).
              </p>
            )}
          </div>

          {/* Primary Action Button */}
          <div className="space-y-3 pt-2">
            {isCooldownFinished ? (
              <button
                type="button"
                onClick={handleResumeAfterPenalty}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base transition shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer ring-2 ring-emerald-400/50"
              >
                <Unlock className="w-5 h-5" />
                <span>Resume Examination Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-slate-800 text-slate-400 font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-not-allowed border border-slate-700/60"
              >
                <Lock className="w-4 h-4 text-slate-500" />
                <span>Locked • Wait {formatTimer(penaltyLockoutRemaining)} to Resume</span>
              </button>
            )}

            {/* Tester Fast-Forward Shortcut */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
              <span className="text-slate-400">Testing & Demonstration Tool</span>
              <button
                type="button"
                onClick={handleSkipPenaltyForTesting}
                className="text-amber-400 hover:text-amber-300 font-semibold underline cursor-pointer"
              >
                ⚡ Fast-Forward: Skip 5-Min Wait
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: DISQUALIFIED / EXPIRED ATTEMPT (Legacy permanent expiration)
  // =========================================================================
  if (examState === 'disqualified') {
    return (
      <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-white flex items-center justify-center">
        <div className="max-w-2xl w-full bg-slate-950 border-2 border-rose-500/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-3xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto shadow-lg shadow-rose-900/40">
            <ShieldAlert className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-rose-500/20 text-rose-300 border border-rose-500/40">
              PROCTORING VIOLATION • SESSION TERMINATED
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-2">
              Examination Expired & Locked
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              An unauthorized window blur or browser tab switch was detected while the examination was active.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/60 text-xs text-rose-200 text-left space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-300">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Strict Proctoring Rule Enforced</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              As explicitly stated and acknowledged in the Pre-Examination Briefing, leaving the examination window, opening other tabs, or minimizing the browser results in a penalty lockout. If you have an older expired attempt, you can clear it below to retake and test the exam.
            </p>
          </div>

          {/* Partial Score Summary */}
          {scheduledAttempt && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Time Before Exit</span>
                <span className="text-base font-bold font-mono text-white">
                  {Math.floor(scheduledAttempt.timeSpentSeconds / 60)}m {scheduledAttempt.timeSpentSeconds % 60}s
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Paper 1 Objectives</span>
                <span className="text-base font-bold font-mono text-white">
                  {scheduledAttempt.paper1CorrectCount} / {scheduledAttempt.paper1TotalQuestions} ({scheduledAttempt.paper1Percentage}%)
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Composite Score</span>
                <span className="text-base font-bold font-mono text-amber-400">
                  {scheduledAttempt.compositePercentage}% ({scheduledAttempt.gradeRemark})
                </span>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleResetScheduledExamForTesting}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset & Retake Exam for Testing</span>
            </button>
            <Link
              href="/jhs"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
            >
              Return to JHS Portal
            </Link>
            <Link
              href="/jhs/science"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm"
            >
              Revise Atomic Structure Notes
            </Link>
          </div>
        </div>
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
                      ? 'bg-blue-600 text-white shadow-xs'
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
          {/* Scheduled Examination Banner (Today at 6:00 PM GMT) */}
          <ScheduledExamBanner />

          {/* Hero Banner */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>Curriculum Adaptive Assessment</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentLevel} Adaptive Weekly Examination
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                This engine continuously monitors the topics you complete and the specific questions you got wrong in quizzes. At the end of every week, it synthesizes a full examination featuring <b>Paper 1 (Objectives)</b> and <b>Paper 2 (Theory)</b> with authentic WAEC marking rubrics.
              </p>
            </div>

            {/* Free Trial / VIP Lock Notice */}
            {mounted && isTrialActive && !student?.hasFullAccess ? (
              <div className="mt-4 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <span className="text-lg">🎁</span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-blue-950">
                      30-Day Free Trial: Full CBT Adaptive Weekly Exam Unlocked!
                    </p>
                    <p className="text-[11px] text-blue-800">
                      You have full access to timed objectives and theory marking rubrics ({trialDaysRemaining} days remaining of free trial).
                    </p>
                  </div>
                </div>
              </div>
            ) : mounted && !hasFullAccess && !isTrialActive ? (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-amber-950">
                      Free Trial Ended • Weekly Adaptive Examination Requires VIP Pass
                    </p>
                    <p className="text-[11px] text-amber-800">
                      Your 30-day free trial has expired. An Access PIN unlocks full CBT weekly examinations featuring timed objectives and theory marking rubrics.
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
            ) : null}

            {/* Exam Launch CTA */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-slate-500">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>Full Exam: Paper 1 (Objectives) + Paper 2 (Theory)</span>
                </div>
                <p>Duration: 45 minutes · Automated WAEC Stanine Grading (Grade 1 - 9)</p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleStartScheduledExam}
                  className="py-3 px-5 rounded-xl text-xs font-bold transition shadow-sm shadow-emerald-600/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Enter 6:00 PM Atomic Exam</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {scheduledAttempt && (
                  <button
                    type="button"
                    onClick={handleResetScheduledExamForTesting}
                    className="py-3 px-4 rounded-xl text-xs font-bold transition border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                    title="Clear previous attempt to test the exam again"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-700" />
                    <span>Reset / Retake Test</span>
                  </button>
                )}

                <button
                  onClick={handleStartExam}
                  className="py-3 px-5 rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 shrink-0 cursor-pointer border border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                >
                  <span>General {currentLevel} Revision</span>
                </button>
              </div>
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

        {/* Pre-Exam Rules & Anti-Cheat Briefing Modal */}
        <ScheduledExamBriefingModal
          isOpen={isBriefingModalOpen}
          onClose={() => setIsBriefingModalOpen(false)}
          onConfirmStart={handleConfirmLaunchScheduledExam}
          isAdmin={isAdminPreviewMode}
          isLocked={(timeStatus.isUpcoming || timeStatus.isEnded) && !isAdminPreviewMode}
          countdownText={timeStatus.isEnded ? 'Closed' : `${timeStatus.hoursUntilStart}h ${timeStatus.minutesUntilStart}m`}
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
            <div className="flex items-center gap-2.5">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                isScheduledMode
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {isScheduledMode ? 'SCHEDULED EXAM • PAPER 1: OBJECTIVES' : 'PAPER 1: SECTION A (OBJECTIVES)'}
              </span>

              {isScheduledMode && (
                <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  <ShieldAlert className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>PROCTORING ACTIVE: Leaving tab triggers 5-min penalty lockout</span>
                </span>
              )}

              {isAdminPreviewMode && (
                <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 text-purple-800 border border-purple-200">
                  ⚡ ADMIN PREVIEW ACTIVE
                </span>
              )}

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
                className="py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition shadow-sm shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{isScheduledMode ? 'Submit & Start Paper 2 (1 Hr)' : 'Go to Paper 2 (Theory)'}</span>
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
                        ? 'border-blue-600 bg-blue-600 text-white shadow-xs'
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
                  className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm shadow-blue-500/20"
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
                        ? 'ring-2 ring-blue-600 bg-blue-600 text-white'
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
            <div className="flex items-center gap-2.5">
              {!isScheduledMode && (
                <button
                  onClick={() => setExamState('exam_paper1')}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 p-1 rounded hover:bg-slate-100"
                >
                  ← Return to Paper 1
                </button>
              )}
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                isScheduledMode
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                {isScheduledMode ? 'SCHEDULED EXAM • PAPER 2: THEORY (1 HOUR)' : 'PAPER 2: SECTION B (THEORY)'}
              </span>

              {isScheduledMode && (
                <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  <ShieldAlert className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>PROCTORING ACTIVE: Leaving tab triggers 5-min penalty lockout</span>
                </span>
              )}

              {isAdminPreviewMode && (
                <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 text-purple-800 border border-purple-200">
                  ⚡ ADMIN PREVIEW ACTIVE
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-600" />
                <span>{formatTimer(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={handleProceedToGrading}
                className="py-1.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition shadow-sm shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer"
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
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold font-mono text-xs flex items-center justify-center shadow-xs">
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
                        onChange={(e) => handleUpdateTheoryAnswer(subId, e.target.value)}
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
              className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm shadow-blue-500/20 cursor-pointer flex items-center gap-2"
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
              className="py-2 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer"
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
                                  ? 'bg-blue-600 text-white shadow-xs'
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
              className="py-3 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
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
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/30">
                <Trophy className="w-8 h-8 text-amber-300" />
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
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm shadow-blue-500/20"
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
