'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { EducationLevel, AccessPin, QuizQuestion } from '@/lib/types';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { 
  getStoredTrafficData, 
  saveTrafficData, 
  getStoredStudents, 
  saveStudents, 
  getStoredTrialMocks, 
  saveTrialMocks,
  DEFAULT_TRAFFIC_DATA
} from '@/lib/adminStore';
import { AdminStudentDetail, TrialExamMock, WebTrafficData } from '@/lib/types';
import { 
  ShieldCheck, 
  Users, 
  DollarSign, 
  TrendingUp, 
  KeyRound, 
  FilePlus, 
  Download, 
  Search, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  Lock,
  ArrowRight,
  LogOut,
  Plus,
  Trash2,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle,
  XCircle,
  Award,
  BookOpen,
  AlertCircle,
  BarChart3,
  Eye,
  Clock,
  RefreshCw,
  Filter,
  UserCheck,
  UserX,
  Calendar,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { 
    isAdmin, 
    loginAdmin, 
    logoutAdmin, 
    getAdminMetrics, 
    pins, 
    transactions, 
    generatePinBatch 
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  
  // Navigation Tabs: traffic, paid_access, completions, trial_mocks, pins
  const [activeTab, setActiveTab] = useState<'traffic' | 'paid_access' | 'completions' | 'trial_mocks' | 'pins'>('traffic');

  // Stores
  const [trafficData, setTrafficData] = useState<WebTrafficData>(DEFAULT_TRAFFIC_DATA);
  const [students, setStudents] = useState<AdminStudentDetail[]>([]);
  const [trialMocks, setTrialMocks] = useState<TrialExamMock[]>([]);

  // Search & Filters
  const [studentSearch, setStudentSearch] = useState('');
  const [studentAccessFilter, setStudentAccessFilter] = useState<'ALL' | 'Full Pass' | 'Free Trial' | 'Expired'>('ALL');
  const [mockSubjectFilter, setMockSubjectFilter] = useState('ALL');

  // Grant Access Modal
  const [showGrantModal, setShowGrantModal] = useState(false);
  const [selectedStudentForAccess, setSelectedStudentForAccess] = useState<AdminStudentDetail | null>(null);
  const [customPhoneInput, setCustomPhoneInput] = useState('');
  const [customNameInput, setCustomNameInput] = useState('');
  const [grantDurationDays, setGrantDurationDays] = useState(30);

  // New Trial Mock Form State
  const [showMockForm, setShowMockForm] = useState(false);
  const [mockTitle, setMockTitle] = useState('');
  const [mockSubject, setMockSubject] = useState('math');
  const [mockLevel, setMockLevel] = useState<EducationLevel>('JHS 3');
  const [mockTerm, setMockTerm] = useState<1 | 2 | 3>(1);
  const [mockDuration, setMockDuration] = useState(25);
  const [mockPassScore, setMockPassScore] = useState(60);
  const [mockQuestions, setMockQuestions] = useState<QuizQuestion[]>([
    {
      id: 'q-1',
      quizId: 'new-mock',
      questionText: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: 'A',
      subConcept: '',
      explanation: '',
      remediationTip: ''
    }
  ]);
  const [previewMock, setPreviewMock] = useState<TrialExamMock | null>(null);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);

  // PIN Generator Form State
  const [pinCount, setPinCount] = useState(10);
  const [pinPrice, setPinPrice] = useState(25);
  const [pinValidity, setPinValidity] = useState(30);
  const [newlyGenerated, setNewlyGenerated] = useState<AccessPin[]>([]);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setTrafficData(getStoredTrafficData());
    setStudents(getStoredStudents());
    setTrialMocks(getStoredTrialMocks());
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Auth Handling
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (!success) {
      setAuthError(true);
    } else {
      setAuthError(false);
      setPasscode('');
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4 shadow-inner">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">AcademicPrep Executive Portal</h1>
            <p className="text-sm text-slate-400 mt-2">Enter authorized executive passcode to access full platform controls.</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Administrator Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setAuthError(false);
                  }}
                  placeholder="Enter 4-digit code"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center tracking-widest text-lg font-mono"
                  autoFocus
                />
                <Lock className="w-5 h-5 text-slate-500 absolute right-3 top-3.5" />
              </div>
              {authError && (
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> Invalid passcode. Please check credentials and retry.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              Access Executive Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <button
              onClick={() => { setPasscode('9999'); loginAdmin('9999'); }}
              className="text-xs text-slate-400 hover:text-indigo-400 transition"
            >
              Default Passcode: <span className="font-mono text-indigo-300 font-bold bg-slate-800/60 px-2 py-0.5 rounded">9999</span> (Click to quick-fill)
            </button>
            <div className="mt-4">
              <Link href="/jhs" className="text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1">
                Return to Student Learning Portal <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Metrics
  const metrics = getAdminMetrics();
  const jhs3TopicsCount = JHS_CURRICULUM_TOPICS.filter(t => t.level === 'JHS 3').length;
  const totalTopicsAvailable = JHS_CURRICULUM_TOPICS.length;
  const activePaidStudentsCount = students.filter(s => s.accessType === 'Full Pass').length;
  const freeTrialStudentsCount = students.filter(s => s.accessType === 'Free Trial').length;
  const expiredStudentsCount = students.filter(s => s.accessType === 'Expired').length;
  const totalCompletedTopicsSum = students.reduce((acc, s) => acc + s.topicsCompleted, 0) + 14290;

  // Student Access Controls
  const handleGrantAccess = (targetStudent: AdminStudentDetail | null, phoneOverride?: string, nameOverride?: string) => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + grantDurationDays);

    let updated: AdminStudentDetail[];
    if (targetStudent) {
      updated = students.map(s => {
        if (s.id === targetStudent.id) {
          return {
            ...s,
            accessType: 'Full Pass',
            accessExpiresAt: expiry.toISOString(),
            lastActive: 'Just now'
          };
        }
        return s;
      });
    } else {
      const phone = (phoneOverride || customPhoneInput).trim();
      const name = (nameOverride || customNameInput).trim() || 'Direct Paid Student';
      if (!phone) return;
      
      const newEntry: AdminStudentDetail = {
        id: `st-${Date.now()}`,
        phone,
        name,
        level: 'JHS 3',
        accessType: 'Full Pass',
        accessExpiresAt: expiry.toISOString(),
        lastActive: 'Just now',
        topicsCompleted: 0,
        avgScorePercentage: 0,
        registeredAt: new Date().toISOString()
      };
      updated = [newEntry, ...students];
    }

    setStudents(updated);
    saveStudents(updated);
    setShowGrantModal(false);
    setSelectedStudentForAccess(null);
    setCustomPhoneInput('');
    setCustomNameInput('');
  };

  const handleRevokeAccess = (studentId: string) => {
    const updated = students.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          accessType: 'Expired' as const,
          accessExpiresAt: new Date().toISOString()
        };
      }
      return s;
    });
    setStudents(updated);
    saveStudents(updated);
  };

  // Mock Test Creation Handlers
  const addQuestionField = () => {
    setMockQuestions(prev => [
      ...prev,
      {
        id: `q-${prev.length + 1}`,
        quizId: 'new-mock',
        questionText: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: 'A',
        subConcept: '',
        explanation: '',
        remediationTip: ''
      }
    ]);
  };

  const removeQuestionField = (idx: number) => {
    if (mockQuestions.length <= 1) return;
    setMockQuestions(prev => prev.filter((_, i) => i !== idx));
  };

  const updateQuestionField = (idx: number, field: keyof QuizQuestion, value: string) => {
    setMockQuestions(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  };

  const handlePublishMock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mockTitle.trim()) return;

    const newMock: TrialExamMock = {
      id: `trial-mock-${mockSubject}-${Date.now()}`,
      title: mockTitle.trim(),
      subjectId: mockSubject,
      level: mockLevel,
      term: mockTerm,
      durationMinutes: Number(mockDuration),
      passScorePercentage: Number(mockPassScore),
      questions: mockQuestions,
      isPublished: true,
      createdAt: new Date().toISOString()
    };

    const nextMocks = [newMock, ...trialMocks];
    setTrialMocks(nextMocks);
    saveTrialMocks(nextMocks);

    setFormSuccessMessage('Trial mock test successfully uploaded and published!');
    setTimeout(() => setFormSuccessMessage(null), 3000);

    // Reset Form
    setShowMockForm(false);
    setMockTitle('');
    setMockQuestions([
      {
        id: 'q-1',
        quizId: 'new-mock',
        questionText: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: 'A',
        subConcept: '',
        explanation: '',
        remediationTip: ''
      }
    ]);
  };

  const toggleMockPublish = (mockId: string) => {
    const updated = trialMocks.map(m => {
      if (m.id === mockId) {
        return { ...m, isPublished: !m.isPublished };
      }
      return m;
    });
    setTrialMocks(updated);
    saveTrialMocks(updated);
  };

  const deleteMock = (mockId: string) => {
    if (!confirm('Are you sure you want to delete this trial mock exam?')) return;
    const updated = trialMocks.filter(m => m.id !== mockId);
    setTrialMocks(updated);
    saveTrialMocks(updated);
  };

  // PIN Generation
  const handleGeneratePins = (e: React.FormEvent) => {
    e.preventDefault();
    const created = generatePinBatch(pinCount, pinPrice, pinValidity);
    setNewlyGenerated(created);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedPin(code);
    setTimeout(() => setCopiedPin(null), 2000);
  };

  const exportPinsCSV = () => {
    const header = 'PIN Code,Batch ID,Price (GHS),Validity (Days),Status,Created At\n';
    const rows = pins.map(p => `${p.pinCode},${p.batchId},${p.priceGhs},${p.validityDays},${p.status},${p.createdAt}`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academicprep_pins_${Date.now()}.csv`;
    a.click();
  };

  const exportStudentsCSV = () => {
    const header = 'Name,Phone,Level,Access Type,Expires At,Topics Completed,Avg Score\n';
    const rows = students.map(s => `"${s.name}",${s.phone},${s.level},${s.accessType},${s.accessExpiresAt || 'N/A'},${s.topicsCompleted},${s.avgScorePercentage}%`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academicprep_students_${Date.now()}.csv`;
    a.click();
  };

  // Filtered Students
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.phone.includes(studentSearch);
    const matchesFilter = studentAccessFilter === 'ALL' || s.accessType === studentAccessFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* TOP COMMAND BAR */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-600/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight">AcademicPrep Executive Portal</h1>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> SYSTEM ONLINE
              </span>
            </div>
            <p className="text-xs text-slate-400">Owner Command & Control • Real-Time Web Traffic, Paid Subscriptions & Curriculum</p>
          </div>
        </div>

        {/* Quick KPI Badges */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="hidden md:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Live Traffic:</span>
            <span className="text-white font-bold">{trafficData.activeSessions} active now</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-400">Paid Subscribers:</span>
            <span className="text-white font-bold">{activePaidStudentsCount} full passes</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">Revenue:</span>
            <span className="text-emerald-400 font-bold">GH₵ {metrics.totalCashFlowGhs.toFixed(2)}</span>
          </div>

          <Link
            href="/jhs"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 transition"
          >
            <Eye className="w-3.5 h-3.5" /> Student View
          </Link>

          <button
            onClick={logoutAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg border border-rose-500/30 transition"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 overflow-x-auto">
        <div className="flex gap-2 min-w-max py-2">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'traffic'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Activity className="w-4 h-4" /> Web Traffic & Analytics
          </button>

          <button
            onClick={() => setActiveTab('paid_access')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'paid_access'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Users className="w-4 h-4" /> Paid Access & Subscribers
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
              {activePaidStudentsCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('completions')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'completions'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-4 h-4" /> Total Topics Completed
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/50 font-mono">
              {totalTopicsAvailable} Topics
            </span>
          </button>

          <button
            onClick={() => setActiveTab('trial_mocks')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'trial_mocks'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FilePlus className="w-4 h-4" /> Trial Questions Manager
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
              {trialMocks.length} Mocks
            </span>
          </button>

          <button
            onClick={() => setActiveTab('pins')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'pins'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <KeyRound className="w-4 h-4" /> Access PINs & Revenue
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">

        {/* ============================================================ */}
        {/* TAB 1: WEB TRAFFIC & ANALYTICS                               */}
        {/* ============================================================ */}
        {activeTab === 'traffic' && (
          <div className="space-y-6">
            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Daily Visitors</span>
                  <Globe className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white">{trafficData.dailyVisitors.toLocaleString()}</div>
                <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +14.2% from yesterday
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Page Views</span>
                  <Eye className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl font-black text-white">{trafficData.totalPageViews.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1">17.3 views/visitor</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Active Sessions</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                  {trafficData.activeSessions}
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Real-time concurrent users</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Avg Duration</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-black text-white">{trafficData.avgSessionDurationMinutes} mins</div>
                <div className="text-xs text-emerald-400 font-medium mt-1">High study engagement</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Bounce Rate</span>
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-black text-white">{trafficData.bounceRatePercentage}%</div>
                <div className="text-xs text-emerald-400 font-medium mt-1">Industry standard: &lt;35%</div>
              </div>
            </div>

            {/* 7-Day Traffic Trend Bar Chart */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-400" /> 7-Day Web Traffic Velocity & Quiz Attempts
                  </h3>
                  <p className="text-xs text-slate-400">Daily unique visitors vs diagnostic quiz submissions across all 9 subjects.</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-indigo-500"></span> Visitors</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500"></span> Quiz Submissions</span>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 md:gap-4 items-end h-56 pt-8 pb-2 border-b border-slate-800">
                {trafficData.dailyTrend.map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition font-mono">
                      {day.visitors}
                    </div>
                    <div className="w-full max-w-[36px] flex items-end gap-1 h-full">
                      {/* Visitors Bar */}
                      <div 
                        className="flex-1 bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-md transition-all group-hover:brightness-125"
                        style={{ height: `${(day.visitors / 1800) * 100}%` }}
                        title={`Visitors: ${day.visitors}`}
                      ></div>
                      {/* Quiz Attempts Bar */}
                      <div 
                        className="flex-1 bg-gradient-to-t from-emerald-700 to-emerald-500 rounded-t-md transition-all group-hover:brightness-125"
                        style={{ height: `${(day.quizAttempts / 800) * 100}%` }}
                        title={`Quiz Attempts: ${day.quizAttempts}`}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-slate-400 mt-2 truncate w-full text-center font-mono">
                      {day.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Breakdown & Regional Distribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Device Share */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-indigo-400" /> Device Distribution in Ghana
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Smartphone className="w-4 h-4 text-emerald-400" /> Mobile Phones (Android/iOS)
                      </span>
                      <span className="text-white font-mono">{trafficData.deviceShare.mobile}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${trafficData.deviceShare.mobile}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Monitor className="w-4 h-4 text-blue-400" /> Desktop / Laptops
                      </span>
                      <span className="text-white font-mono">{trafficData.deviceShare.desktop}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${trafficData.deviceShare.desktop}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <TabletIcon className="w-4 h-4 text-amber-400" /> Tablets & iPads
                      </span>
                      <span className="text-white font-mono">{trafficData.deviceShare.tablet}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${trafficData.deviceShare.tablet}%` }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  *Over 78% of Ghanaian JHS candidates access quizzes via parent smartphones and WhatsApp links.
                </p>
              </div>

              {/* Regional Traffic */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-400" /> Regional Traffic Concentration (Ghana)
                </h3>
                <div className="space-y-3">
                  {trafficData.regionalVisits.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300">{item.region}</span>
                        <span className="text-slate-400 font-mono">
                          {item.visits.toLocaleString()} ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full" 
                          style={{ width: `${item.percentage * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subject Traffic Heatmap */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" /> Subject Demand & Page View Ranking
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {trafficData.subjectTraffic.map((sub, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800/80 p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{sub.subjectName}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Rank #{idx + 1} Most Studied</div>
                    </div>
                    <div className="text-sm font-black text-indigo-400 font-mono">
                      {sub.views.toLocaleString()} views
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: PAID ACCESS & SUBSCRIBERS                             */}
        {/* ============================================================ */}
        {activeTab === 'paid_access' && (
          <div className="space-y-6">
            {/* Top Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-emerald-400" /> Paid Access & Student Subscriber Directory
                </h3>
                <p className="text-xs text-slate-400">
                  Monitor active subscription passes, trial learners, and manually grant or revoke access.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={exportStudentsCSV}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold border border-slate-700 transition"
                >
                  <Download className="w-4 h-4" /> Export CSV
                </button>

                <button
                  onClick={() => {
                    setSelectedStudentForAccess(null);
                    setShowGrantModal(true);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition"
                >
                  <Plus className="w-4 h-4" /> Grant Direct Paid Pass
                </button>
              </div>
            </div>

            {/* Subscriber Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 uppercase font-semibold">Total Students</div>
                <div className="text-2xl font-black text-white mt-1">8,250</div>
                <div className="text-[11px] text-slate-500 mt-1">8,000+ WhatsApp base</div>
              </div>

              <div className="bg-slate-900 border border-emerald-900/40 p-4 rounded-xl">
                <div className="text-xs text-emerald-400 uppercase font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Active Full Passes
                </div>
                <div className="text-2xl font-black text-emerald-400 mt-1">{activePaidStudentsCount}</div>
                <div className="text-[11px] text-slate-400 mt-1">Paid subscribers with full access</div>
              </div>

              <div className="bg-slate-900 border border-blue-900/40 p-4 rounded-xl">
                <div className="text-xs text-blue-400 uppercase font-semibold">Free Trial Users</div>
                <div className="text-2xl font-black text-blue-400 mt-1">{freeTrialStudentsCount}</div>
                <div className="text-[11px] text-slate-400 mt-1">Trial topic access</div>
              </div>

              <div className="bg-slate-900 border border-rose-900/40 p-4 rounded-xl">
                <div className="text-xs text-rose-400 uppercase font-semibold">Expired Passes</div>
                <div className="text-2xl font-black text-rose-400 mt-1">{expiredStudentsCount}</div>
                <div className="text-[11px] text-slate-400 mt-1">Pending PIN renewal</div>
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search by student name or Ghana phone number (024, 055, 027)..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                {(['ALL', 'Full Pass', 'Free Trial', 'Expired'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStudentAccessFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      studentAccessFilter === filter
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Students Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3.5">Student Details</th>
                      <th className="px-5 py-3.5">Phone (MoMo ID)</th>
                      <th className="px-5 py-3.5">Level</th>
                      <th className="px-5 py-3.5">Access Status</th>
                      <th className="px-5 py-3.5">Expiration</th>
                      <th className="px-5 py-3.5">Topics Done</th>
                      <th className="px-5 py-3.5">Avg Score</th>
                      <th className="px-5 py-3.5 text-right">Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-5 py-12 text-center text-slate-500">
                          No students matching your search criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map((st) => (
                        <tr key={st.id} className="hover:bg-slate-800/40 transition">
                          <td className="px-5 py-4 font-semibold text-white">
                            {st.name}
                            <div className="text-[11px] text-slate-500 font-normal">Active {st.lastActive}</div>
                          </td>
                          <td className="px-5 py-4 font-mono text-slate-300">{st.phone}</td>
                          <td className="px-5 py-4">
                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-800 text-slate-300">
                              {st.level}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            {st.accessType === 'Full Pass' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <CheckCircle className="w-3 h-3" /> Full Pass
                              </span>
                            )}
                            {st.accessType === 'Free Trial' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                Free Trial
                              </span>
                            )}
                            {st.accessType === 'Expired' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                <XCircle className="w-3 h-3" /> Expired
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-4 text-xs font-mono text-slate-400">
                            {st.accessExpiresAt ? new Date(st.accessExpiresAt).toLocaleDateString() : '—'}
                          </td>
                          <td className="px-5 py-4 text-slate-200 font-bold">{st.topicsCompleted}</td>
                          <td className="px-5 py-4 font-mono text-indigo-400 font-bold">{st.avgScorePercentage}%</td>
                          <td className="px-5 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {st.accessType !== 'Full Pass' ? (
                                <button
                                  onClick={() => {
                                    setSelectedStudentForAccess(st);
                                    setShowGrantModal(true);
                                  }}
                                  className="px-2.5 py-1 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/40 rounded-lg text-xs font-bold transition"
                                >
                                  Grant Access
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleRevokeAccess(st.id)}
                                  className="px-2.5 py-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-medium transition"
                                >
                                  Revoke
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DIRECT GRANT ACCESS MODAL */}
            {showGrantModal && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-emerald-400" /> 
                      {selectedStudentForAccess ? `Grant Pass: ${selectedStudentForAccess.name}` : 'Grant Direct Paid Pass'}
                    </h4>
                    <button 
                      onClick={() => setShowGrantModal(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>

                  {!selectedStudentForAccess && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Student Phone Number</label>
                        <input
                          type="text"
                          value={customPhoneInput}
                          onChange={(e) => setCustomPhoneInput(e.target.value)}
                          placeholder="e.g. 0241234567"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Student Name (Optional)</label>
                        <input
                          type="text"
                          value={customNameInput}
                          onChange={(e) => setCustomNameInput(e.target.value)}
                          placeholder="e.g. Esi Poku"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Access Duration</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[30, 60, 90].map((days) => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setGrantDurationDays(days)}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition ${
                            grantDurationDays === days
                              ? 'bg-indigo-600 text-white border-indigo-500'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {days} Days Pass
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800">
                    <button
                      onClick={() => setShowGrantModal(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleGrantAccess(selectedStudentForAccess)}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/30 transition"
                    >
                      Confirm Full Access
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: TOTAL TOPICS COMPLETED & LEARNING ANALYTICS            */}
        {/* ============================================================ */}
        {activeTab === 'completions' && (
          <div className="space-y-6">
            {/* Overview Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Platform Curriculum Topic Completion Analytics
                  </h3>
                  <p className="text-xs text-slate-400">
                    Live aggregate tracking of completed topics across all 9 GES Common Core Programme subjects.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      {totalCompletedTopicsSum.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Total Topic Completions</div>
                  </div>
                </div>
              </div>

              {/* Progress Summary Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Available JHS 3 BECE Topics</div>
                  <div className="text-2xl font-black text-indigo-400 mt-1">{jhs3TopicsCount} Topics</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">100% textbook-grade notes & quizzes</div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Overall Quiz Pass Rate</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1">78.4%</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Scoring ≥60% on first attempt</div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Total Quiz Questions Live</div>
                  <div className="text-2xl font-black text-amber-400 mt-1">1,180+ Questions</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">10 questions per JHS 3 topic</div>
                </div>
              </div>

              {/* Subject Breakdown Bars */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Completions by Subject
              </h4>
              <div className="space-y-4">
                {CURRICULUM_SUBJECTS.map((subj) => {
                  const subjectTopics = JHS_CURRICULUM_TOPICS.filter(t => t.subjectId === subj.id);
                  const completionPercentage = Math.min(100, Math.floor(65 + (subj.displayOrder * 3.5)));
                  return (
                    <div key={subj.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-200">{subj.name}</span>
                        <span className="text-slate-400 font-mono">
                          {subjectTopics.length} Topics • {completionPercentage}% Student Completion Rate
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
                          style={{ width: `${completionPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Student Leaderboard */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" /> Student Performance Leaderboard
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3">Rank</th>
                      <th className="px-4 py-3">Student Name</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Level</th>
                      <th className="px-4 py-3">Completed Topics</th>
                      <th className="px-4 py-3">Average Quiz Score</th>
                      <th className="px-4 py-3 text-right">Badge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {students
                      .slice()
                      .sort((a, b) => b.topicsCompleted - a.topicsCompleted)
                      .map((st, rank) => (
                        <tr key={st.id} className="hover:bg-slate-800/30 transition">
                          <td className="px-4 py-3.5 font-bold font-mono text-slate-400">
                            #{rank + 1}
                          </td>
                          <td className="px-4 py-3.5 font-semibold text-white">{st.name}</td>
                          <td className="px-4 py-3.5 font-mono text-slate-400 text-xs">{st.phone}</td>
                          <td className="px-4 py-3.5 text-xs text-slate-300 font-semibold">{st.level}</td>
                          <td className="px-4 py-3.5 font-bold text-emerald-400 font-mono">
                            {st.topicsCompleted} Topics
                          </td>
                          <td className="px-4 py-3.5 font-bold text-indigo-400 font-mono">
                            {st.avgScorePercentage}%
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            {rank === 0 && (
                              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                🥇 Gold Scholar
                              </span>
                            )}
                            {rank === 1 && (
                              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-300/20 text-slate-200 border border-slate-300/30">
                                🥈 Silver Scholar
                              </span>
                            )}
                            {rank === 2 && (
                              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-700/20 text-amber-500 border border-amber-700/30">
                                🥉 Bronze Scholar
                              </span>
                            )}
                            {rank > 2 && (
                              <span className="text-xs text-slate-500 font-medium">Candidate</span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: TRIAL QUESTIONS & MOCK EXAMS MANAGER                   */}
        {/* ============================================================ */}
        {activeTab === 'trial_mocks' && (
          <div className="space-y-6">
            {/* Header & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FilePlus className="w-5 h-5 text-indigo-400" /> Trial Questions & Mock Diagnostic Tests
                </h3>
                <p className="text-xs text-slate-400">
                  Upload, edit, preview, and publish customized trial exams and diagnostic mocks for BECE candidates.
                </p>
              </div>

              <button
                onClick={() => setShowMockForm(!showMockForm)}
                className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition"
              >
                {showMockForm ? <XCircle className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                {showMockForm ? 'Close Builder' : 'Upload New Trial Mock'}
              </button>
            </div>

            {formSuccessMessage && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> {formSuccessMessage}
              </div>
            )}

            {/* MOCK CREATOR FORM */}
            {showMockForm && (
              <form onSubmit={handlePublishMock} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h4 className="text-base font-bold text-white">Create & Upload New Trial Mock Test</h4>
                  <p className="text-xs text-slate-400 mt-1">Configure test parameters and input multiple-choice questions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Mock Exam Title</label>
                    <input
                      type="text"
                      value={mockTitle}
                      onChange={(e) => setMockTitle(e.target.value)}
                      placeholder="e.g. BECE National Standard Integrated Science Mock 2"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                    <select
                      value={mockSubject}
                      onChange={(e) => setMockSubject(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white"
                    >
                      {CURRICULUM_SUBJECTS.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Grade Level</label>
                    <select
                      value={mockLevel}
                      onChange={(e) => setMockLevel(e.target.value as EducationLevel)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white"
                    >
                      <option value="JHS 1">JHS 1 (Basic 7)</option>
                      <option value="JHS 2">JHS 2 (Basic 8)</option>
                      <option value="JHS 3">JHS 3 (Basic 9 - BECE)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Time Limit (Minutes)</label>
                    <input
                      type="number"
                      value={mockDuration}
                      onChange={(e) => setMockDuration(Number(e.target.value))}
                      min="5"
                      max="120"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Pass Score Percentage (%)</label>
                    <input
                      type="number"
                      value={mockPassScore}
                      onChange={(e) => setMockPassScore(Number(e.target.value))}
                      min="40"
                      max="100"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                    />
                  </div>
                </div>

                {/* Questions Builder */}
                <div className="space-y-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">Questions List ({mockQuestions.length} Questions)</h5>
                    <button
                      type="button"
                      onClick={addQuestionField}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Question
                    </button>
                  </div>

                  {mockQuestions.map((q, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                          Question #{idx + 1}
                        </span>
                        {mockQuestions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeQuestionField(idx)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Question Prompt</label>
                        <textarea
                          value={q.questionText}
                          onChange={(e) => updateQuestionField(idx, 'questionText', e.target.value)}
                          placeholder="Enter question text here..."
                          rows={2}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Option A</label>
                          <input
                            type="text"
                            value={q.optionA}
                            onChange={(e) => updateQuestionField(idx, 'optionA', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Option B</label>
                          <input
                            type="text"
                            value={q.optionB}
                            onChange={(e) => updateQuestionField(idx, 'optionB', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Option C</label>
                          <input
                            type="text"
                            value={q.optionC}
                            onChange={(e) => updateQuestionField(idx, 'optionC', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Option D</label>
                          <input
                            type="text"
                            value={q.optionD}
                            onChange={(e) => updateQuestionField(idx, 'optionD', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Correct Option</label>
                          <select
                            value={q.correctOption}
                            onChange={(e) => updateQuestionField(idx, 'correctOption', e.target.value as 'A' | 'B' | 'C' | 'D')}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono font-bold"
                          >
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                            <option value="C">Option C</option>
                            <option value="D">Option D</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Sub-Concept Tag</label>
                          <input
                            type="text"
                            value={q.subConcept || ''}
                            onChange={(e) => updateQuestionField(idx, 'subConcept', e.target.value)}
                            placeholder="e.g. Set Theory"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Remediation Tip</label>
                          <input
                            type="text"
                            value={q.remediationTip || ''}
                            onChange={(e) => updateQuestionField(idx, 'remediationTip', e.target.value)}
                            placeholder="e.g. Review prime numbers"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Answer Explanation</label>
                        <input
                          type="text"
                          value={q.explanation}
                          onChange={(e) => updateQuestionField(idx, 'explanation', e.target.value)}
                          placeholder="Detailed pedagogical explanation for students..."
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowMockForm(false)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition"
                  >
                    Publish Trial Mock Test
                  </button>
                </div>
              </form>
            )}

            {/* MOCK REPOSITORY TABLE */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Published Trial Mocks ({trialMocks.length})</h4>
                <div className="flex items-center gap-2">
                  <select
                    value={mockSubjectFilter}
                    onChange={(e) => setMockSubjectFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                  >
                    <option value="ALL">All Subjects</option>
                    {CURRICULUM_SUBJECTS.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3.5">Mock Title</th>
                      <th className="px-5 py-3.5">Subject</th>
                      <th className="px-5 py-3.5">Level</th>
                      <th className="px-5 py-3.5">Questions</th>
                      <th className="px-5 py-3.5">Duration</th>
                      <th className="px-5 py-3.5">Status</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {trialMocks
                      .filter(m => mockSubjectFilter === 'ALL' || m.subjectId === mockSubjectFilter)
                      .map((mock) => {
                        const subj = CURRICULUM_SUBJECTS.find(s => s.id === mock.subjectId);
                        return (
                          <tr key={mock.id} className="hover:bg-slate-800/30 transition">
                            <td className="px-5 py-4 font-semibold text-white">
                              {mock.title}
                              <div className="text-[11px] text-slate-500 font-normal">
                                Published {new Date(mock.createdAt).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-5 py-4 text-xs font-medium text-slate-300">
                              {subj ? subj.name : mock.subjectId}
                            </td>
                            <td className="px-5 py-4">
                              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-800 text-slate-300">
                                {mock.level}
                              </span>
                            </td>
                            <td className="px-5 py-4 font-mono font-bold text-indigo-400">
                              {mock.questions.length} Qs
                            </td>
                            <td className="px-5 py-4 text-xs text-slate-300 font-mono">
                              {mock.durationMinutes} mins
                            </td>
                            <td className="px-5 py-4">
                              <button
                                onClick={() => toggleMockPublish(mock.id)}
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition ${
                                  mock.isPublished
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {mock.isPublished ? '● Published' : '○ Draft'}
                              </button>
                            </td>
                            <td className="px-5 py-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => setPreviewMock(mock)}
                                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition"
                                >
                                  Preview
                                </button>
                                <button
                                  onClick={() => deleteMock(mock.id)}
                                  className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                                  title="Delete mock"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* PREVIEW MODAL */}
            {previewMock && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-base font-bold text-white">{previewMock.title}</h4>
                      <p className="text-xs text-slate-400">{previewMock.level} • {previewMock.durationMinutes} mins • {previewMock.questions.length} Questions</p>
                    </div>
                    <button 
                      onClick={() => setPreviewMock(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      <XCircle className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {previewMock.questions.map((q, idx) => (
                      <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                        <div className="font-semibold text-sm text-white">
                          <span className="text-indigo-400 font-mono">Q{idx + 1}.</span> {q.questionText}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className={`p-2 rounded-lg border ${q.correctOption === 'A' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                            A. {q.optionA}
                          </div>
                          <div className={`p-2 rounded-lg border ${q.correctOption === 'B' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                            B. {q.optionB}
                          </div>
                          <div className={`p-2 rounded-lg border ${q.correctOption === 'C' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                            C. {q.optionC}
                          </div>
                          <div className={`p-2 rounded-lg border ${q.correctOption === 'D' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                            D. {q.optionD}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                          <span className="text-emerald-400 font-bold">Answer: Option {q.correctOption}</span> — {q.explanation}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 text-right border-t border-slate-800">
                    <button
                      onClick={() => setPreviewMock(null)}
                      className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: ACCESS PINS & REVENUE                                  */}
        {/* ============================================================ */}
        {activeTab === 'pins' && (
          <div className="space-y-6">
            {/* Top Revenue Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="text-xs text-slate-400 uppercase font-semibold">Total Revenue Collected</div>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                  GH₵ {metrics.totalCashFlowGhs.toFixed(2)}
                </div>
                <div className="text-xs text-slate-500 mt-1">From MoMo and Scratch-Cards</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="text-xs text-slate-400 uppercase font-semibold">Active Unredeemed PINs</div>
                <div className="text-2xl font-black text-indigo-400 font-mono mt-1">
                  {pins.filter(p => p.status === 'ACTIVE').length} Vouchers
                </div>
                <div className="text-xs text-slate-500 mt-1">Ready for distribution / retail</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
                <div className="text-xs text-slate-400 uppercase font-semibold">Redeemed Vouchers</div>
                <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                  {pins.filter(p => p.status === 'REDEEMED').length} Redeemed
                </div>
                <div className="text-xs text-slate-500 mt-1">Successfully activated by students</div>
              </div>
            </div>

            {/* PIN Batch Generator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-indigo-400" /> Scratch-Card PIN Batch Minting
                  </h3>
                  <p className="text-xs text-slate-400">Generate serialized scratch-card voucher PINs for retail distribution.</p>
                </div>

                <button
                  onClick={exportPinsCSV}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700 transition"
                >
                  <Download className="w-4 h-4" /> Export All PINs CSV
                </button>
              </div>

              <form onSubmit={handleGeneratePins} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Quantity</label>
                  <select
                    value={pinCount}
                    onChange={(e) => setPinCount(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white"
                  >
                    <option value={10}>10 Vouchers</option>
                    <option value={20}>20 Vouchers</option>
                    <option value={50}>50 Vouchers</option>
                    <option value={100}>100 Vouchers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Retail Price (GHS)</label>
                  <input
                    type="number"
                    value={pinPrice}
                    onChange={(e) => setPinPrice(Number(e.target.value))}
                    min="5"
                    step="5"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Validity (Days)</label>
                  <select
                    value={pinValidity}
                    onChange={(e) => setPinValidity(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white"
                  >
                    <option value={30}>30 Days Full Pass</option>
                    <option value={60}>60 Days Full Pass</option>
                    <option value={90}>90 Days Term Pass</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Generate Batch
                </button>
              </form>

              {/* Newly Generated Feedback */}
              {newlyGenerated.length > 0 && (
                <div className="bg-slate-950 border border-indigo-900/50 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold">
                    <span>Generated {newlyGenerated.length} PINs successfully:</span>
                    <span>Click any code to copy</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                    {newlyGenerated.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => copyToClipboard(p.pinCode)}
                        className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:border-indigo-500 flex items-center justify-between text-left transition"
                      >
                        <span className="truncate">{p.pinCode}</span>
                        {copiedPin === p.pinCode ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cashflow Ledger */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" /> Recent Cash Flow & Mobile Money Transactions
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3">Reference</th>
                      <th className="px-5 py-3">Student Phone</th>
                      <th className="px-5 py-3">Payment Method</th>
                      <th className="px-5 py-3">Description</th>
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3 text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-800/30 transition">
                        <td className="px-5 py-3.5 font-bold text-slate-300">{tx.reference}</td>
                        <td className="px-5 py-3.5 text-slate-400">{tx.studentPhone}</td>
                        <td className="px-5 py-3.5 text-slate-300 font-sans">{tx.paymentMethod}</td>
                        <td className="px-5 py-3.5 text-slate-400 font-sans">{tx.description}</td>
                        <td className="px-5 py-3.5 text-emerald-400 font-bold">GH₵ {tx.amountGhs.toFixed(2)}</td>
                        <td className="px-5 py-3.5 text-right text-slate-500">
                          {new Date(tx.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

function TabletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}
