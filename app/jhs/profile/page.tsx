'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { getStudentQuizMistakes, QuizMistakeRecord } from '@/lib/weeklyProgressTracker';
import { 
  User, 
  Phone, 
  GraduationCap, 
  KeyRound, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Trophy, 
  Award, 
  TrendingUp, 
  TrendingDown, 
  BookOpen, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Lock, 
  Unlock, 
  ExternalLink,
  ChevronRight,
  Zap,
  Clock,
  Layers,
  HelpCircle,
  LogOut
} from 'lucide-react';

interface ServerStudent {
  id: string;
  phone: string;
  name: string;
  level: string;
  accessType: 'Full Pass' | 'Free Trial' | 'Expired';
  accessExpiresAt?: string;
  lastActive: string;
  topicsCompleted: number;
  completedTopicIds?: string[];
  avgScorePercentage: number;
  registeredAt: string;
}

export default function StudentProfilePage() {
  const router = useRouter();
  const { 
    student, 
    isLoading, 
    topicProgress, 
    weeklyExamAttempts, 
    redeemPin, 
    getCompletedTopicsCount,
    logoutStudent
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [leaderboard, setLeaderboard] = useState<ServerStudent[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);

  // PIN Redemption State
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  // Buy PIN Modal State
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');

  // Fetch real students leaderboard from API
  const fetchLeaderboard = async () => {
    try {
      setLoadingLeaderboard(true);
      const res = await fetch('/api/students');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setLeaderboard(data);
        }
      }
    } catch (err: any) {
      console.warn('Leaderboard fetch notice:', err?.message || err);
    } finally {
      setLoadingLeaderboard(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchLeaderboard();
  }, []);

  // Calculate student statistics
  const completedTopicsCount = useMemo(() => {
    return Object.keys(topicProgress).filter(id => topicProgress[id]?.completed).length;
  }, [topicProgress]);

  const totalQuizzesTaken = useMemo(() => {
    return Object.values(topicProgress).reduce((acc, curr) => acc + (curr.attemptsCount || 0), 0);
  }, [topicProgress]);

  const averageQuizScore = useMemo(() => {
    const scores = Object.values(topicProgress).map(p => p.bestScorePercentage);
    if (scores.length === 0) return 0;
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round(sum / scores.length);
  }, [topicProgress]);

  // Identify Strengths (>= 75%)
  const strengths = useMemo(() => {
    return Object.keys(topicProgress)
      .filter(id => topicProgress[id]?.bestScorePercentage >= 75)
      .map(id => {
        const topic = JHS_CURRICULUM_TOPICS.find(t => t.id === id);
        const subject = CURRICULUM_SUBJECTS.find(s => s.id === topic?.subjectId);
        return {
          id,
          title: topic?.title || id,
          subjectName: subject?.name || 'General',
          score: topicProgress[id].bestScorePercentage
        };
      });
  }, [topicProgress]);

  // Identify Weaknesses (< 60% or from mistake tracker)
  const [mistakes, setMistakes] = useState<QuizMistakeRecord[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const records = getStudentQuizMistakes();
      setMistakes(records);
    }
  }, []);

  const weaknesses = useMemo(() => {
    const lowScoreTopics = Object.keys(topicProgress)
      .filter(id => topicProgress[id]?.bestScorePercentage < 60 && topicProgress[id]?.attemptsCount > 0)
      .map(id => {
        const topic = JHS_CURRICULUM_TOPICS.find(t => t.id === id);
        const subject = CURRICULUM_SUBJECTS.find(s => s.id === topic?.subjectId);
        return {
          id,
          title: topic?.title || id,
          subjectName: subject?.name || 'General',
          score: topicProgress[id].bestScorePercentage,
          reason: 'Score below 60% mastery threshold'
        };
      });

    return lowScoreTopics;
  }, [topicProgress]);

  // Find user's rank in leaderboard
  const userRankIndex = useMemo(() => {
    if (!student) return -1;
    return leaderboard.findIndex(s => s.phone === student.phoneNumber);
  }, [leaderboard, student]);

  const handleRedeemPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;

    setPinLoading(true);
    setPinFeedback(null);

    const res = await redeemPin(pinInput);
    setPinLoading(false);
    setPinFeedback({
      success: res.success,
      text: res.message
    });

    if (res.success) {
      setPinInput('');
      fetchLeaderboard(); // refresh leaderboard
    }
  };

  const handleInstantDemoPurchase = async () => {
    setPinLoading(true);
    const res = await redeemPin('PREP-8842-9901');
    setPinLoading(false);
    setPinFeedback({
      success: res.success,
      text: res.message
    });
    setShowBuyModal(false);
    fetchLeaderboard();
  };

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-blue-600"></div>
      </div>
    );
  }

  // If not logged in, show access wall
  if (!student) {
    return (
      <div className="max-w-md mx-auto my-16 px-4 text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <User className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Student Account Required</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          Please create a student profile or sign in to access your personal dashboard, track your strengths & weaknesses, and view your position on the student leaderboard.
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
  const freeTopicsUsed = completedTopicsCount;
  const maxFreeTopics = 3;
  const remainingFreeTopics = Math.max(0, maxFreeTopics - freeTopicsUsed);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/jhs"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-slate-100 transition"
            >
              <span>← Back to JHS Portal</span>
            </Link>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-xs text-slate-500">Student Profile Dashboard</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeaderboard}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium transition flex items-center gap-1.5"
              title="Refresh Leaderboard"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingLeaderboard ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh Data</span>
            </button>
            <Link
              href="/jhs"
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition"
            >
              Study Curriculum
            </Link>
            <button
              onClick={() => {
                logoutStudent();
                router.push('/login');
              }}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 text-xs font-semibold transition flex items-center gap-1 cursor-pointer"
              title="Sign Out of Account"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* ============================================================ */}
        {/* 1. STUDENT IDENTITY & ACCESS STATUS CARD                      */}
        {/* ============================================================ */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {student.fullName}
                  </h1>
                  {isFullPass ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      VIP Full Pass
                    </span>
                  ) : student.accessType === 'Expired' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-200">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                      VIP Pass Expired
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                      Limited Free Access ({freeTopicsUsed}/3 Free Topics)
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono">{student.phoneNumber}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-semibold text-slate-800">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    {student.currentLevel}
                  </span>
                  <span>•</span>
                  <span className="text-slate-500">
                    Joined {new Date(student.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
              {!isFullPass && (
                <button
                  onClick={() => {
                    setModalTab('momo');
                    setShowBuyModal(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>{student.accessType === 'Expired' ? 'Renew VIP Pass (GHS 20/mo MoMo)' : 'Buy VIP Pass (GHS 20/mo MoMo)'}</span>
                </button>
              )}
              <button
                onClick={() => {
                  logoutStudent();
                  router.push('/login');
                }}
                className="px-3 py-2 rounded-xl border border-slate-200 hover:border-red-200 hover:bg-red-50 text-slate-600 hover:text-red-600 font-semibold text-xs transition flex items-center gap-1.5 cursor-pointer"
                title="Sign Out of Account"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. ACCESS TIER & PRIVILEGES BANNER                           */}
        {/* ============================================================ */}
        {!isFullPass ? (
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  {student.accessType === 'Expired' ? (
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                  ) : (
                    <Zap className="w-4 h-4 text-amber-600" />
                  )}
                  <span>
                    {student.accessType === 'Expired'
                      ? 'VIP Monthly Pass Expired'
                      : `Free Trial Status: ${freeTopicsUsed} of ${maxFreeTopics} Topics Completed`}
                  </span>
                </h3>
                <p className="text-xs text-amber-900/80 mt-0.5">
                  {student.accessType === 'Expired'
                    ? 'Your 30-day VIP pass has expired. Renew for GH₵ 20/mo via Mobile Money or enter an Access PIN to restore full unlimited access.'
                    : <>You have <b>{remainingFreeTopics} free {remainingFreeTopics === 1 ? 'topic' : 'topics'}</b> remaining. Once the 4th topic is triggered, an Access PIN is required to continue.</>}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-200/80 text-amber-900 shrink-0">
                {student.accessType === 'Expired' ? 'Expired' : `${Math.round((freeTopicsUsed / maxFreeTopics) * 100)}% Used`}
              </span>
            </div>

            {/* Feature Access Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">3 Free Topics</p>
                  <p className="text-[10px] text-emerald-700 font-semibold">{remainingFreeTopics} left</p>
                </div>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">BECE Past Papers</p>
                  <p className="text-[10px] text-rose-600 font-medium">PIN Required</p>
                </div>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Trial Mocks</p>
                  <p className="text-[10px] text-rose-600 font-medium">PIN Required</p>
                </div>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Weekly Exams</p>
                  <p className="text-[10px] text-rose-600 font-medium">PIN Required</p>
                </div>
              </div>
            </div>

            {/* Quick PIN Redemption Form */}
            <form onSubmit={handleRedeemPin} className="pt-2 flex flex-col sm:flex-row gap-2 items-stretch">
              <input
                type="text"
                placeholder="Enter Access PIN (e.g. PREP-8842-9901)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                className="flex-1 px-4 py-2 text-xs border border-amber-300 rounded-xl bg-white font-mono uppercase focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                disabled={pinLoading || !pinInput.trim()}
                className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white font-bold text-xs transition whitespace-nowrap"
              >
                {pinLoading ? 'Verifying...' : 'Unlock VIP Access'}
              </button>
            </form>

            {pinFeedback && (
              <div className={`p-2.5 rounded-lg text-xs font-medium ${pinFeedback.success ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                {pinFeedback.text}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-emerald-950">
                  VIP Full Pass Active
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-full">
                All 9 Subjects Unlocked
              </span>
            </div>
            <p className="text-xs text-emerald-900/80">
              You have full, unrestricted access to all curriculum topics, diagnostic quizzes, 2008–2026 BECE Past Question PDFs, Trial Mocks, and Adaptive Weekly Examinations.
            </p>
            {student.accessExpiresAt && (
              <div className="text-xs text-emerald-800 pt-2 border-t border-emerald-200/70 flex items-center justify-between font-medium">
                <span>Pass Expiration:</span>
                <span className="font-bold">
                  {new Date(student.accessExpiresAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                  {' '}({Math.max(0, Math.ceil((new Date(student.accessExpiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))} days remaining)
                </span>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* 3. ACADEMIC PROGRESS METRICS                                 */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Topics Mastered</span>
            <p className="text-2xl font-black text-slate-900">{completedTopicsCount}</p>
            <p className="text-[11px] text-slate-500">Across JHS Curriculum</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Quizzes Taken</span>
            <p className="text-2xl font-black text-blue-600">{totalQuizzesTaken}</p>
            <p className="text-[11px] text-slate-500">Practice tests completed</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Average Accuracy</span>
            <p className="text-2xl font-black text-emerald-600">{averageQuizScore}%</p>
            <p className="text-[11px] text-slate-500">Overall diagnostic score</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Leaderboard Standing</span>
            <p className="text-2xl font-black text-amber-600">
              {userRankIndex >= 0 ? `#${userRankIndex + 1}` : 'Ranked'}
            </p>
            <p className="text-[11px] text-slate-500">Out of {leaderboard.length} candidates</p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. STRENGTHS & WEAKNESSES ANALYSIS                           */}
        {/* ============================================================ */}
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
                  <p className="text-[11px] text-slate-500">Topics mastered with score ≥ 75%</p>
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
                <p className="text-[11px] text-slate-400">Complete topic quizzes with 75% or higher to list your strengths here.</p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
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
                  <p className="text-[11px] text-slate-500">Flagged concepts & questions to revise</p>
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
                <p className="text-[11px] text-slate-400">Keep taking topic quizzes to automatically track and remedy difficult questions.</p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {/* Specific Flagged Mistake Concepts */}
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

                {/* Low Score Topics */}
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

        {/* ============================================================ */}
        {/* 5. REAL MULTI-STUDENT LEADERBOARD                            */}
        {/* ============================================================ */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Real Academic Leaderboard</h3>
                <p className="text-xs text-slate-500">Live rankings of all registered candidates across Ghana based on completed topics & quiz mastery.</p>
              </div>
            </div>

            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
              {leaderboard.length} Total Students
            </span>
          </div>

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
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Rank</th>
                    <th className="px-4 py-3">Student Name</th>
                    <th className="px-4 py-3">Level</th>
                    <th className="px-4 py-3">Topics Completed</th>
                    <th className="px-4 py-3">Average Score</th>
                    <th className="px-4 py-3">Access Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                {leaderboard.map((st, index) => {
                  const isCurrent = student && st.phone === student.phoneNumber;
                  return (
                    <tr
                      key={st.id || index}
                      className={`transition ${
                        isCurrent
                          ? 'bg-blue-50/80 font-bold border-l-4 border-l-blue-600'
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
                          `#${index + 1}`
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
                          {st.phone.slice(0, 3)}••••{st.phone.slice(-3)}
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
                      <td className="px-4 py-3">
                        {st.accessType === 'Full Pass' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            VIP Pass
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                            Free Trial
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>

      {/* ============================================================ */}
      {/* 6. PAYSTACK PAYMENT & VIP PIN REDEMPTION MODAL               */}
      {/* ============================================================ */}
      <PaystackPaymentModal
        isOpen={showBuyModal}
        onClose={() => setShowBuyModal(false)}
        defaultTab={modalTab}
      />
    </div>
  );
}
