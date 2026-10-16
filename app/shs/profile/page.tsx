'use client';

import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { fetchLeaderboard as fetchLeaderboardEntries, LeaderboardEntry } from '@/lib/apiClient';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';
import { CurriculumService } from '@/lib/curriculumService';
import { SHS_CORE_SUBJECTS, SHS_CURRICULUM_TOPICS } from '@/lib/curriculumShsData';
import { SHS_ELECTIVE_GROUPS, getElectiveSubjects } from '@/lib/curriculumShsElectives';
import { getStudentQuizMistakes, QuizMistakeRecord } from '@/lib/weeklyProgressTracker';
import StudentTimetablePlanner from '@/components/StudentTimetablePlanner';
import TrialCountdownBanner from '@/components/TrialCountdownBanner';
import { 
  User, 
  Phone, 
  GraduationCap, 
  KeyRound, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  Award, 
  TrendingUp, 
  TrendingDown, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Lock, 
  LogOut,
  Search,
  BarChart3,
  ChevronRight,
  Zap,
  Calendar,
  Crown
} from 'lucide-react';

function ShsProfileContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { 
    student, 
    isLoading, 
    topicProgress, 
    redeemPin, 
    logoutStudent,
    hasFullAccess,
    isTrialActive,
    trialDaysRemaining
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  const initialTabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'overview' | 'timetable' | 'leaderboard' | 'access'>(
    initialTabParam === 'timetable' ? 'timetable' : 'overview'
  );
  
  // Leaderboard states
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);
  const [leaderboardSearch, setLeaderboardSearch] = useState('');
  const currentUserRowRef = useRef<HTMLTableRowElement | null>(null);

  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  // PIN Redemption State
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  // Buy PIN Modal State
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');

  // Fetch Leaderboard
  const fetchLeaderboard = async () => {
    setLoadingLeaderboard(true);
    try {
      const entries = await fetchLeaderboardEntries();
      setLeaderboard(entries);
    } catch (err: any) {
      console.warn('Leaderboard fetch notice:', err?.message || err);
    } finally {
      setLoadingLeaderboard(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchLeaderboard();
    if (student?.accessExpiresAt) {
      const msLeft = new Date(student.accessExpiresAt).getTime() - Date.now();
      setDaysRemaining(Math.max(0, Math.ceil(msLeft / (1000 * 60 * 60 * 24))));
    }
  }, [student?.accessExpiresAt]);

  // Synchronize tab if query param changes
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'timetable' || tab === 'overview' || tab === 'leaderboard' || tab === 'access') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Academic Statistics for SHS
  const studentLevel = student?.currentLevel?.startsWith('SHS') ? student.currentLevel : 'SHS 1';

  const relevantShsTopics = useMemo(() => {
    return SHS_CURRICULUM_TOPICS.filter((t) => t.level === studentLevel);
  }, [studentLevel]);

  const completedTopicsCount = useMemo(() => {
    return Object.keys(topicProgress).filter((id) => {
      return topicProgress[id]?.completed && SHS_CURRICULUM_TOPICS.some((t) => t.id === id);
    }).length;
  }, [topicProgress]);

  const totalQuizzesTaken = useMemo(() => {
    return Object.keys(topicProgress).reduce((acc, currId) => {
      if (SHS_CURRICULUM_TOPICS.some((t) => t.id === currId)) {
        return acc + (topicProgress[currId]?.attemptsCount || 0);
      }
      return acc;
    }, 0);
  }, [topicProgress]);

  const averageQuizScore = useMemo(() => {
    const shsScores = Object.keys(topicProgress)
      .filter((id) => SHS_CURRICULUM_TOPICS.some((t) => t.id === id))
      .map((id) => topicProgress[id].bestScorePercentage);
    if (shsScores.length === 0) return 0;
    const sum = shsScores.reduce((a, b) => a + b, 0);
    return Math.round(sum / shsScores.length);
  }, [topicProgress]);

  // Strengths (>= 75%)
  const strengths = useMemo(() => {
    return Object.keys(topicProgress)
      .filter((id) => (topicProgress[id]?.bestScorePercentage || 0) >= 75)
      .map((id) => {
        const topic = SHS_CURRICULUM_TOPICS.find((t) => t.id === id);
        if (!topic) return null;
        const subject = CurriculumService.getSubjectById(topic.subjectId, studentLevel);
        return {
          id,
          title: topic.title || id,
          subjectId: topic.subjectId,
          subjectName: subject?.name || 'General',
          score: topicProgress[id].bestScorePercentage,
        };
      })
      .filter(Boolean) as { id: string; title: string; subjectId: string; subjectName: string; score: number }[];
  }, [topicProgress, studentLevel]);

  // Weaknesses (< 60% and flagged mistakes)
  const [mistakes, setMistakes] = useState<QuizMistakeRecord[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const records = getStudentQuizMistakes();
      setMistakes(records.filter((m) => SHS_CURRICULUM_TOPICS.some((t) => t.id === m.topicId)));
    }
  }, []);

  const weaknesses = useMemo(() => {
    return Object.keys(topicProgress)
      .filter((id) => (topicProgress[id]?.bestScorePercentage || 0) < 60 && (topicProgress[id]?.attemptsCount || 0) > 0)
      .map((id) => {
        const topic = SHS_CURRICULUM_TOPICS.find((t) => t.id === id);
        if (!topic) return null;
        const subject = CurriculumService.getSubjectById(topic.subjectId, studentLevel);
        return {
          id,
          title: topic.title || id,
          subjectId: topic.subjectId,
          subjectName: subject?.name || 'General',
          score: topicProgress[id].bestScorePercentage,
          reason: 'Score below 60% mastery threshold',
        };
      })
      .filter(Boolean) as { id: string; title: string; subjectId: string; subjectName: string; score: number; reason: string }[];
  }, [topicProgress, studentLevel]);

  const detectedWeakTopicIds = useMemo(() => {
    return weaknesses.map((w) => w.id);
  }, [weaknesses]);

  const detectedWeakSubjectIds = useMemo(() => {
    const subs = weaknesses.map((w) => w.subjectId).filter(Boolean);
    return Array.from(new Set(subs));
  }, [weaknesses]);

  // User Rank in Leaderboard
  const userRankIndex = useMemo(() => {
    return leaderboard.findIndex((s) => s.isCurrentUser);
  }, [leaderboard]);

  // Filtered leaderboard
  const filteredLeaderboard = useMemo(() => {
    if (!leaderboardSearch.trim()) return leaderboard;
    const q = leaderboardSearch.toLowerCase();
    return leaderboard.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.level.toLowerCase().includes(q) ||
        s.phoneMasked.includes(q)
    );
  }, [leaderboard, leaderboardSearch]);

  const handleScrollToMyRank = () => {
    if (currentUserRowRef.current) {
      currentUserRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
      setPinInput('');
      fetchLeaderboard();
    }
  };

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-blue-600"></div>
      </div>
    );
  }

  // Guest State (Not Logged In)
  if (!student) {
    return (
      <div className="max-w-xl mx-auto my-14 px-4 space-y-6 text-center">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Senior High School (SHS) Student Portal
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Sign in or create an SHS account to track topic mastery across Core and Electives, access your personalized WASSCE study timetable, and join the national student rankings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              href="/login?mode=register&redirect=/shs/profile"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-xs"
            >
              Create Free SHS Account
            </Link>
            <Link
              href="/login?redirect=/shs/profile"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition"
            >
              Sign In to Existing Account
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-400 mb-2">Want to generate your revision timetable right now?</p>
            <button
              type="button"
              onClick={() => setActiveTab('timetable')}
              className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <span>Continue to Timetable Planner as Guest</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* If guest toggled to timetable */}
        {activeTab === 'timetable' && (
          <div className="text-left animate-in fade-in duration-200 pt-2">
            <StudentTimetablePlanner
              studentId="guest-shs"
              studentName="Candidate"
              studentLevel="SHS 3"
              initialWeakSubjects={['math', 'science']}
              initialWeakTopics={[]}
            />
          </div>
        )}
      </div>
    );
  }

  // Masked Phone Number
  const maskedPhone = student.phoneNumber.length >= 7
    ? `${student.phoneNumber.substring(0, 3)}••••${student.phoneNumber.substring(student.phoneNumber.length - 3)}`
    : student.phoneNumber;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* ============================================================ */}
      {/* 1. STUDENT HEADER & NAVIGATION (MINIMALIST)                  */}
      {/* ============================================================ */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
              {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {student.fullName}
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                  {student.currentLevel}
                </span>
                {isTrialActive ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-800 border border-blue-200/80">
                    Free Trial ({trialDaysRemaining}d remaining)
                  </span>
                ) : student.hasFullAccess ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    VIP Active
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    Trial Expired
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>{maskedPhone}</span>
                <span>•</span>
                <span>WASSCE Portal</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => logoutStudent()}
            className="py-1 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 font-medium text-xs transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-400" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* PROFILE NAVIGATION TABS (MINIMALIST UNDERLINE) */}
        <div className="flex items-center gap-6 overflow-x-auto border-b border-slate-200 mt-6 no-scrollbar">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'timetable', label: 'Timetable' },
            { id: 'leaderboard', label: 'Leaderboard' },
            { id: 'access', label: isTrialActive ? 'Trial & PIN' : 'Access & PIN' },
          ].map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer border-b-2 -mb-px ${
                  isTabActive
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB 1: ACADEMIC OVERVIEW & REMEDIATION                       */}
      {/* ============================================================ */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Quick Statistics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Topics Mastered
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900">
                {completedTopicsCount}
              </div>
              <p className="text-[10px] text-slate-400">Passing score &ge; 60%</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Quizzes Completed
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900">
                {totalQuizzesTaken}
              </div>
              <p className="text-[10px] text-slate-400">Diagnostic test blocks</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Average Mastery
              </span>
              <div className="text-xl sm:text-2xl font-black text-blue-600 font-mono">
                {averageQuizScore}%
              </div>
              <p className="text-[10px] text-slate-400">Across SHS quizzes</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Study Timetable
                </span>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  WASSCE Revision
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('timetable')}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Open Timetable</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>


          {/* Strengths & Weaknesses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Strengths */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Academic Strengths</h3>
                    <p className="text-[11px] text-slate-500">Topics mastered with score &ge; 75%</p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                  {strengths.length} Mastered
                </span>
              </div>

              {strengths.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <Award className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-500 font-medium">No mastered topics yet.</p>
                  <p className="text-[11px] text-slate-400">Complete curriculum quizzes with 75% or higher to list your strengths here.</p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {strengths.map((item) => (
                    <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{item.subjectName}</span>
                        <p className="text-xs font-bold text-slate-800">{item.title}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-extrabold font-mono">
                        {item.score}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Weaknesses */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Areas for Improvement</h3>
                    <p className="text-[11px] text-slate-500">Flagged concepts &amp; questions to revise</p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-rose-50 text-rose-700">
                  {weaknesses.length + mistakes.length} Targets
                </span>
              </div>

              {weaknesses.length === 0 && mistakes.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-xs text-slate-600 font-semibold">No critical weaknesses detected!</p>
                  <p className="text-[11px] text-slate-400">Keep solving quizzes across Core and Electives to automatically identify improvement areas.</p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {mistakes.slice(0, 5).map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-rose-800">{m.subjectName}: {m.subConcept}</span>
                        <span className="text-[10px] text-rose-600 uppercase font-mono font-bold">Flagged Mistake</span>
                      </div>
                      <p className="text-xs text-slate-700 line-clamp-2">{m.questionText}</p>
                      <Link
                        href={`/shs/quiz/${m.topicId}`}
                        className="text-[11px] font-bold text-blue-600 hover:underline inline-flex items-center gap-1 pt-1"
                      >
                        <span>Retake Topic Quiz</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}

                  {weaknesses.map((w) => (
                    <div key={w.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{w.subjectName}</span>
                        <p className="text-xs font-bold text-slate-800">{w.title}</p>
                        <p className="text-[10px] text-rose-600">{w.reason}</p>
                      </div>
                      <Link
                        href={`/shs/quiz/${w.id}`}
                        className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold"
                      >
                        Retake
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: PERSONAL WASSCE STUDY TIMETABLE & PLANNER             */}
      {/* ============================================================ */}
      {activeTab === 'timetable' && (
        <div className="animate-in fade-in duration-150">
          <StudentTimetablePlanner
            studentId={student.id}
            studentName={student.fullName}
            studentLevel={student.currentLevel}
            initialWeakSubjects={detectedWeakSubjectIds}
            initialWeakTopics={detectedWeakTopicIds}
          />
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: NATIONAL ACADEMIC LEADERBOARD                         */}
      {/* ============================================================ */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">National Academic Leaderboard</h3>
                <p className="text-xs text-slate-500">Live rankings of all registered SHS and JHS candidates across Ghana.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={fetchLeaderboard}
                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-medium transition flex items-center gap-1.5 cursor-pointer"
                title="Refresh Leaderboard"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingLeaderboard ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>

              {userRankIndex !== -1 && (
                <button
                  type="button"
                  onClick={handleScrollToMyRank}
                  className="py-1.5 px-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>My Rank: #{userRankIndex + 1}</span>
                </button>
              )}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search candidate by name, level, or phone..."
              value={leaderboardSearch}
              onChange={(e) => setLeaderboardSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-mono text-[10px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Candidate</th>
                  <th className="py-2.5 px-3">Level</th>
                  <th className="py-2.5 px-3">Topics Completed</th>
                  <th className="py-2.5 px-3">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeaderboard.map((entry, index) => {
                  const isCurrent = entry.isCurrentUser;
                  return (
                    <tr
                      key={`${entry.rank}-${entry.phoneMasked}-${index}`}
                      ref={isCurrent ? currentUserRowRef : null}
                      className={`transition ${isCurrent ? 'bg-blue-50/80 font-bold' : 'hover:bg-slate-50/50'}`}
                    >
                      <td className="py-2.5 px-3 font-mono">
                        {index === 0 ? '🥇 1' : index === 1 ? '🥈 2' : index === 2 ? '🥉 3' : `#${index + 1}`}
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-1.5">
                          <span>{entry.name}</span>
                          {isCurrent && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-600 text-white font-bold">You</span>
                          )}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-slate-500">{entry.level}</td>
                      <td className="py-2.5 px-3 font-mono">{entry.topicsCompleted}</td>
                      <td className="py-2.5 px-3 font-mono text-emerald-600">{entry.avgScorePercentage}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 4: VIP ACCESS & PIN REDEMPTION                           */}
      {/* ============================================================ */}
      {activeTab === 'access' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {isTrialActive && (
            <TrialCountdownBanner variant="card" />
          )}

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-500" />
                  <h3 className="text-base font-bold text-slate-900">
                    {isTrialActive ? '30-Day Free Trial Active' : 'AcademicPrep VIP Pass'}
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  {isTrialActive
                    ? 'All WASSCE lesson notes, worked examples, quizzes, and personal timetable tools are 100% unlocked with zero payment.'
                    : 'Full unrestricted access to all WASSCE lesson notes, worked examples, quizzes, and personal timetable tools.'}
                </p>
              </div>

              {!isTrialActive && !student?.hasFullAccess && (
                <button
                  type="button"
                  onClick={() => setShowBuyModal(true)}
                  className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>Buy VIP Pass (GH₵ 25)</span>
                </button>
              )}
            </div>

            {/* PIN Code Redemption Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-slate-600" />
                  <span>Have a Scratch Card PIN Code?</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Enter the 8-to-12 digit PIN code from your school scratch card or vendor receipt below.
                </p>
              </div>

              <form onSubmit={handleRedeemPin} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="e.g. AP-XXXX-XXXX"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={pinLoading || !pinInput.trim()}
                  className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer shrink-0"
                >
                  {pinLoading ? 'Activating...' : 'Activate PIN'}
                </button>
              </form>

              {pinFeedback && (
                <div
                  className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                    pinFeedback.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {pinFeedback.success ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  )}
                  <span>{pinFeedback.text}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Paystack Payment Modal */}
      <PaystackPaymentModal
        isOpen={showBuyModal}
        onClose={() => setShowBuyModal(false)}
        defaultTab={modalTab}
        featureName="SHS VIP Full Access Pass"
      />
    </div>
  );
}

export default function ShsStudentProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-blue-600"></div>
        </div>
      }
    >
      <ShsProfileContent />
    </Suspense>
  );
}
