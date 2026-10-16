'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { fetchLeaderboard as fetchLeaderboardEntries, LeaderboardEntry } from '@/lib/apiClient';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { getStudentQuizMistakes, QuizMistakeRecord } from '@/lib/weeklyProgressTracker';
import BeceGradeCalculator from '@/components/BeceGradeCalculator';
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
  Calculator,
  ChevronRight,
  Zap,
  Calendar
} from 'lucide-react';

export default function StudentProfilePage() {
  const router = useRouter();
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
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'timetable' | 'leaderboard' | 'access'>('overview');
  
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

  // Academic Statistics
  const completedTopicsCount = useMemo(() => {
    return Object.keys(topicProgress).filter((id) => topicProgress[id]?.completed).length;
  }, [topicProgress]);

  const totalQuizzesTaken = useMemo(() => {
    return Object.values(topicProgress).reduce((acc, curr) => acc + (curr.attemptsCount || 0), 0);
  }, [topicProgress]);

  const averageQuizScore = useMemo(() => {
    const scores = Object.values(topicProgress).map((p) => p.bestScorePercentage);
    if (scores.length === 0) return 0;
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round(sum / scores.length);
  }, [topicProgress]);

  // Strengths (>= 75%)
  const strengths = useMemo(() => {
    return Object.keys(topicProgress)
      .filter((id) => (topicProgress[id]?.bestScorePercentage || 0) >= 75)
      .map((id) => {
        const topic = JHS_CURRICULUM_TOPICS.find((t) => t.id === id);
        const subject = CURRICULUM_SUBJECTS.find((s) => s.id === topic?.subjectId);
        return {
          id,
          title: topic?.title || id,
          subjectName: subject?.name || 'General',
          score: topicProgress[id].bestScorePercentage,
        };
      });
  }, [topicProgress]);

  // Weaknesses (< 60% and flagged mistakes)
  const [mistakes, setMistakes] = useState<QuizMistakeRecord[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const records = getStudentQuizMistakes();
      setMistakes(records);
    }
  }, []);

  const weaknesses = useMemo(() => {
    return Object.keys(topicProgress)
      .filter((id) => (topicProgress[id]?.bestScorePercentage || 0) < 60 && (topicProgress[id]?.attemptsCount || 0) > 0)
      .map((id) => {
        const topic = JHS_CURRICULUM_TOPICS.find((t) => t.id === id);
        const subject = CURRICULUM_SUBJECTS.find((s) => s.id === topic?.subjectId);
        return {
          id,
          title: topic?.title || id,
          subjectName: subject?.name || 'General',
          score: topicProgress[id].bestScorePercentage,
          reason: 'Score below 60% mastery threshold',
        };
      });
  }, [topicProgress]);

  const detectedWeakTopicIds = useMemo(() => {
    return weaknesses.map((w) => w.id);
  }, [weaknesses]);

  const detectedWeakSubjectIds = useMemo(() => {
    const subs = weaknesses.map((w) => {
      const topic = JHS_CURRICULUM_TOPICS.find((t) => t.id === w.id);
      return topic?.subjectId;
    }).filter(Boolean) as string[];
    return Array.from(new Set(subs));
  }, [weaknesses]);

  // User Rank in Leaderboard
  const userRankIndex = useMemo(() => {
    return leaderboard.findIndex((s) => s.isCurrentUser);
  }, [leaderboard]);

  // Client filtered leaderboard
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

  // Not Logged In
  if (!student) {
    return (
      <div className="max-w-md mx-auto my-16 px-4 text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <User className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Student Account Required</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          Please create a student profile or sign in to access your personal dashboard, track your strengths &amp; weaknesses, and view your position on the national leaderboard.
        </p>
        <Link
          href="/login?redirect=/jhs/profile"
          className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-md shadow-blue-500/20"
        >
          <span>Create Account / Sign In</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const isFullPass = student.hasFullAccess;

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
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
                  ) : hasFullAccess ? (
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
                  <span>{student.phoneNumber}</span>
                  <span>•</span>
                  <span>BECE Portal</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={async () => {
                await logoutStudent();
                router.push('/login');
              }}
              className="py-1 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 font-medium text-xs transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-400" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Minimalist Underline Navigation Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto border-b border-slate-200 mt-6 no-scrollbar">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'timetable', label: 'Timetable' },
              { id: 'calculator', label: 'BECE Calculator' },
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
        {/* TAB 1: ACADEMIC OVERVIEW (Stats, Strengths, Weaknesses)      */}
        {/* ============================================================ */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 4 KPI Progress Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Topics Mastered</span>
                <p className="text-2xl font-black text-slate-900">{completedTopicsCount}</p>
                <p className="text-[11px] text-slate-500">Across JHS Curriculum</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Quizzes Taken</span>
                <p className="text-2xl font-black text-blue-600">{totalQuizzesTaken}</p>
                <p className="text-[11px] text-slate-500">Diagnostic tests taken</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Average Accuracy</span>
                <p className="text-2xl font-black text-emerald-600">{averageQuizScore}%</p>
                <p className="text-[11px] text-slate-500">Curriculum accuracy</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Leaderboard Rank</span>
                <p className="text-2xl font-black text-amber-600">
                  {userRankIndex >= 0 ? `#${leaderboard[userRankIndex].rank}` : 'Ranked'}
                </p>
                <p className="text-[11px] text-slate-500">Out of {leaderboard.length} candidates</p>
              </div>
            </div>

            {/* Shortcut Card to Calculator (Clean Minimalist) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5 text-slate-600" />
                  <span>WAEC Ghana BECE Predictor</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Want to simulate your BECE Aggregate?</h3>
                <p className="text-xs text-slate-500 max-w-xl">
                  Calculate your Best 6 subjects and see which Senior High Schools (Category A, B, C) you qualify for right now.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('calculator')}
                className="py-2 px-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition shrink-0 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shadow-sm shadow-blue-500/20"
              >
                <span>Open BECE Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Strengths & Weaknesses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* STRENGTHS */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
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

              {/* WEAKNESSES & REMEDIATION */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
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
                    <p className="text-[11px] text-slate-400">Keep practicing quizzes to automatically track and remedy difficult questions.</p>
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
                          href={`/jhs/quiz/${m.topicId}`}
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
                          href={`/jhs/quiz/${w.id}`}
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
        {/* TAB 2: BECE GRADE CALCULATOR & SCHOOL ADVISOR                */}
        {/* ============================================================ */}
        {activeTab === 'calculator' && (
          <div className="animate-in fade-in duration-200">
            <BeceGradeCalculator
              topicProgress={topicProgress}
              studentName={student.fullName}
            />
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: PERSONAL BECE STUDY TIMETABLE & PLANNER               */}
        {/* ============================================================ */}
        {activeTab === 'timetable' && (
          <div className="animate-in fade-in duration-200">
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
        {/* TAB 4: REAL MULTI-STUDENT LEADERBOARD                        */}
        {/* ============================================================ */}
        {activeTab === 'leaderboard' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">National Academic Leaderboard</h3>
                  <p className="text-xs text-slate-500">Live rankings of all registered candidates across Ghana based on completed topics & diagnostic accuracy.</p>
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
                  <span className="hidden sm:inline">Refresh</span>
                </button>
                {userRankIndex >= 0 && (
                  <button
                    type="button"
                    onClick={handleScrollToMyRank}
                    className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 transition cursor-pointer"
                    title="Scroll table to your ranking"
                  >
                    Jump to My Rank (#{leaderboard[userRankIndex].rank})
                  </button>
                )}
                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                  {leaderboard.length} Candidates
                </span>
              </div>
            </div>

            {/* Search Filter for Leaderboard */}
            {leaderboard.length > 0 && (
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search candidates by name or class level (e.g. Kwame, JHS 3)..."
                  value={leaderboardSearch}
                  onChange={(e) => setLeaderboardSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {leaderboard.length === 0 ? (
              <div className="py-12 text-center space-y-3 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-800">No Students on the Leaderboard Yet</p>
                  <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                    Complete your first curriculum topic quiz to rank #1 on the national leaderboard!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Contained Scrollable Table with Sticky Header */}
                <div className="overflow-x-auto max-h-[460px] overflow-y-auto rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full min-w-[500px] text-left text-xs relative">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200 sticky top-0 z-10 shadow-2xs">
                      <tr>
                        <th className="px-4 py-3 bg-slate-100">Rank</th>
                        <th className="px-4 py-3 bg-slate-100">Student Name</th>
                        <th className="px-4 py-3 bg-slate-100">Level</th>
                        <th className="px-4 py-3 bg-slate-100">Topics Completed</th>
                        <th className="px-4 py-3 bg-slate-100">Average Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeaderboard.map((st, index) => {
                        const isCurrent = st.isCurrentUser;
                        return (
                          <tr
                            key={`${st.rank}-${index}`}
                            ref={isCurrent ? currentUserRowRef : undefined}
                            className={`transition ${
                              isCurrent
                                ? 'bg-blue-50 font-bold border-l-4 border-l-blue-600'
                                : 'hover:bg-slate-50/60'
                            }`}
                          >
                            <td className="px-4 py-3 font-mono font-bold text-slate-700">
                              {index === 0 ? (
                                <span className="inline-flex items-center gap-1 text-amber-600">🥇 #1</span>
                              ) : index === 1 ? (
                                <span className="inline-flex items-center gap-1 text-slate-500">🥈 #2</span>
                              ) : index === 2 ? (
                                <span className="inline-flex items-center gap-1 text-amber-700">🥉 #3</span>
                              ) : (
                                `#${st.rank}`
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-900">{st.name}</span>
                                {isCurrent && (
                                  <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-blue-600 text-white tracking-wider">
                                    YOU
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">
                                {st.phoneMasked}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-600">{st.level}</td>
                            <td className="px-4 py-3 font-mono font-bold text-slate-900">
                              {st.topicsCompleted} Topics
                            </td>
                            <td className="px-4 py-3 font-mono font-bold">
                              <span className={`px-2 py-0.5 rounded ${st.avgScorePercentage >= 80 ? 'text-emerald-700 bg-emerald-50' : 'text-slate-800'}`}>
                                {st.avgScorePercentage}%
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
                  <span>Showing {filteredLeaderboard.length} of {leaderboard.length} candidates</span>
                  <span className="text-slate-500 font-medium">↔️ Swipe sideways to view all columns &bull; ↕️ Scroll inside box to browse ranks</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: VIP PASS, PIN REDEMPTION & SUBSCRIPTION               */}
        {/* ============================================================ */}
        {activeTab === 'access' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Plan Status Card */}
            {isFullPass ? (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base font-bold text-emerald-950">VIP Full Pass Active</h3>
                  </div>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-200/60 px-3 py-1 rounded-full">
                    All 9 Subjects Unlocked
                  </span>
                </div>
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  You have full, unrestricted access to all curriculum topics, diagnostic quizzes, 2008–2026 BECE Past Question PDFs, Trial Mocks, and Adaptive Weekly Examinations.
                </p>
                {student.accessExpiresAt && (
                  <div className="text-xs text-emerald-800 pt-3 border-t border-emerald-200/70 flex items-center justify-between font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Pass Expiration:</span>
                    </span>
                    <span className="font-bold">
                      {new Date(student.accessExpiresAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                      {daysRemaining !== null && ` (${daysRemaining} days remaining)`}
                    </span>
                  </div>
                )}
              </div>
            ) : isTrialActive ? (
              <TrialCountdownBanner variant="card" />
            ) : (
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <h3 className="text-base font-bold text-amber-950">Free Trial Expired</h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-200 text-amber-900">
                    Expired
                  </span>
                </div>
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  Your 30-day free trial has concluded. Upgrade to VIP for GH₵ 25/mo via Mobile Money or enter an Access PIN to restore full unlimited access to all examination materials.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('momo');
                    setShowBuyModal(true);
                  }}
                  className="py-2.5 px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  Unlock VIP via MoMo (GH₵ 25/mo)
                </button>
              </div>
            )}

            {/* Feature Access Grid */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Included Examination Features
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    hasFullAccess ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {hasFullAccess ? <CheckCircle2 className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">All Curriculum</p>
                    <p className={`text-[10px] ${hasFullAccess ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                      {hasFullAccess ? 'Unlocked' : 'PIN Required'}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    hasFullAccess ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {hasFullAccess ? <CheckCircle2 className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">BECE Past Papers</p>
                    <p className={`text-[10px] ${hasFullAccess ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                      {hasFullAccess ? 'Unlocked' : 'PIN Required'}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    hasFullAccess ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {hasFullAccess ? <CheckCircle2 className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Trial Mocks</p>
                    <p className={`text-[10px] ${hasFullAccess ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                      {hasFullAccess ? 'Unlocked' : 'PIN Required'}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    hasFullAccess ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {hasFullAccess ? <CheckCircle2 className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Weekly CBT Exams</p>
                    <p className={`text-[10px] ${hasFullAccess ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                      {hasFullAccess ? 'Unlocked' : 'PIN Required'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PIN Redemption Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Redeem VIP Access PIN</h4>
                  <p className="text-xs text-slate-500">Purchased a scratch card or received an access voucher? Enter your 12-digit code below.</p>
                </div>
              </div>

              <form onSubmit={handleRedeemPin} className="flex flex-col sm:flex-row gap-2.5 items-stretch pt-1">
                <input
                  type="text"
                  placeholder="Enter Access PIN (e.g. PREP-XXXX-XXXX)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="flex-1 px-4 py-2.5 text-xs border border-slate-300 rounded-xl bg-slate-50 font-mono uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={pinLoading || !pinInput.trim()}
                  className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs transition cursor-pointer"
                >
                  {pinLoading ? 'Verifying PIN...' : 'Activate Access'}
                </button>
              </form>

              {pinFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    pinFeedback.success ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200'
                  }`}
                >
                  {pinFeedback.success ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                  <span>{pinFeedback.text}</span>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Paystack Payment Modal */}
      <PaystackPaymentModal
        isOpen={showBuyModal}
        onClose={() => setShowBuyModal(false)}
        defaultTab={modalTab}
      />
    </div>
  );
}
