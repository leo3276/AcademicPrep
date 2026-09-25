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
  BarChart3, 
  Eye, 
  Clock, 
  Filter, 
  UserCheck, 
  ExternalLink,
  ChevronRight,
  FileText
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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-slate-800"></div>
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

  // Minimal, elegant login screen
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
            AcademicPrep Administration
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Enter authorized passcode to manage platform operations
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white py-8 px-6 shadow-sm border border-slate-200/80 rounded-2xl space-y-5">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Admin Passcode
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => { setPasscode(e.target.value); setAuthError(false); }}
                  placeholder="••••"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition"
                  autoFocus
                />
                {authError && (
                  <p className="text-xs text-rose-600 mt-1.5 font-medium">
                    Incorrect passcode. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1.5"
              >
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="pt-4 border-t border-slate-100 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => { setPasscode('9999'); loginAdmin('9999'); }}
                className="text-[11px] text-slate-500 hover:text-slate-800 transition"
              >
                Default Passcode: <span className="font-mono font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">9999</span> (Click to auto-fill)
              </button>

              <Link
                href="/jhs"
                className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 transition"
              >
                <span>Back to Student Portal</span>
                <ExternalLink className="w-3 h-3" />
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
      id: `trial-mock-${Date.now()}`,
      title: mockTitle.trim(),
      subjectId: mockSubject,
      level: mockLevel,
      term: mockTerm,
      durationMinutes: mockDuration,
      passScorePercentage: mockPassScore,
      questions: mockQuestions,
      isPublished: true,
      createdAt: new Date().toISOString()
    };

    const updated = [newMock, ...trialMocks];
    setTrialMocks(updated);
    saveTrialMocks(updated);

    // Reset Form
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
    setShowMockForm(false);
    setFormSuccessMessage('Trial mock test uploaded and published successfully!');
    setTimeout(() => setFormSuccessMessage(null), 4000);
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* TOP HEADER BAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              AP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 text-sm">AcademicPrep</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded tracking-wide">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Platform Management & Operation Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="hidden md:flex items-center gap-4 text-slate-600 border-r border-slate-200 pr-4 mr-1">
              <span><b>{trafficData.activeSessions}</b> active users</span>
              <span>•</span>
              <span><b>{activePaidStudentsCount}</b> subscribers</span>
              <span>•</span>
              <span className="font-semibold text-slate-900">GH₵ {metrics.totalCashFlowGhs.toFixed(2)}</span>
            </div>

            <Link
              href="/jhs"
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Student View</span>
            </Link>

            <button
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium transition flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* CLEAN HORIZONTAL TABS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 overflow-x-auto">
          <nav className="flex space-x-6 min-w-max text-xs font-medium">
            <button
              onClick={() => setActiveTab('traffic')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'traffic'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Web Traffic</span>
            </button>

            <button
              onClick={() => setActiveTab('paid_access')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'paid_access'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Paid Access & Students</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {activePaidStudentsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('completions')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'completions'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Curriculum Progress</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {totalTopicsAvailable} Topics
              </span>
            </button>

            <button
              onClick={() => setActiveTab('trial_mocks')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'trial_mocks'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FilePlus className="w-4 h-4" />
              <span>Trial Questions & Mocks</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {trialMocks.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pins')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'pins'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Access PINs & Revenue</span>
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ============================================================ */}
        {/* TAB 1: WEB TRAFFIC & ANALYTICS                               */}
        {/* ============================================================ */}
        {activeTab === 'traffic' && (
          <div className="space-y-6">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Daily Visitors</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.dailyVisitors.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-600 font-medium mt-1 inline-flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> +14.2% vs yesterday
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Page Views</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.totalPageViews.toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">17.3 views/visitor</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Active Sessions</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono flex items-center gap-2">
                  {trafficData.activeSessions}
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Real-time learners</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Avg Duration</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.avgSessionDurationMinutes} min
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Study engagement</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 font-medium block">Bounce Rate</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.bounceRatePercentage}%
                </span>
                <span className="text-[11px] text-emerald-600 font-medium mt-1 block">Standard retention</span>
              </div>
            </div>

            {/* 7-Day Traffic Chart */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">7-Day Visitor Trend & Quiz Attempts</h3>
                  <p className="text-xs text-slate-500">Daily unique platform visits compared to submitted topic quizzes.</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-900"></span> Visitors</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-500"></span> Quiz Submissions</span>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-3 items-end h-44 pt-6 pb-2 border-b border-slate-100">
                {trafficData.dailyTrend.map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition font-mono">
                      {day.visitors}
                    </div>
                    <div className="w-full max-w-[28px] flex items-end gap-1 h-full">
                      {/* Visitors Bar */}
                      <div 
                        className="flex-1 bg-slate-900 rounded-t transition-all group-hover:bg-slate-700"
                        style={{ height: `${(day.visitors / 1800) * 100}%` }}
                        title={`Visitors: ${day.visitors}`}
                      ></div>
                      {/* Quiz Attempts Bar */}
                      <div 
                        className="flex-1 bg-blue-500 rounded-t transition-all group-hover:bg-blue-600"
                        style={{ height: `${(day.quizAttempts / 800) * 100}%` }}
                        title={`Quiz Attempts: ${day.quizAttempts}`}
                      ></div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 truncate w-full text-center">
                      {day.date.replace(' (Today)', '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Share & Regional Visits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Devices */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-semibold text-slate-900">Device Distribution</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">Mobile Phones (Android / iPhone)</span>
                      <span className="font-semibold text-slate-900 font-mono">{trafficData.deviceShare.mobile}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full" style={{ width: `${trafficData.deviceShare.mobile}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">Desktop & Laptops</span>
                      <span className="font-semibold text-slate-900 font-mono">{trafficData.deviceShare.desktop}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-600 rounded-full" style={{ width: `${trafficData.deviceShare.desktop}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">Tablets & iPads</span>
                      <span className="font-semibold text-slate-900 font-mono">{trafficData.deviceShare.tablet}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: `${trafficData.deviceShare.tablet}%` }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  Majority of candidates practice via parents' smartphones.
                </p>
              </div>

              {/* Regional Traffic */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Regional Traffic Concentration (Ghana)</h3>
                <div className="space-y-2.5">
                  {trafficData.regionalVisits.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-700">{item.region}</span>
                        <span className="text-slate-500 font-mono font-medium">
                          {item.visits.toLocaleString()} ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-800 rounded-full" 
                          style={{ width: `${item.percentage * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subject Demand Ranking */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">Subject Page View Rankings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {trafficData.subjectTraffic.map((sub, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-800">{sub.subjectName}</div>
                      <div className="text-[11px] text-slate-500">Rank #{idx + 1} Most Studied</div>
                    </div>
                    <div className="text-xs font-semibold text-slate-900 font-mono">
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
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Paid Access & Student Management</h2>
                <p className="text-xs text-slate-500">
                  Track full pass subscriptions, trial accounts, and directly grant or revoke access.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={exportStudentsCSV}
                  className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedStudentForAccess(null);
                    setShowGrantModal(true);
                  }}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Grant Paid Pass</span>
                </button>
              </div>
            </div>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium">Total Registered</span>
                <span className="text-xl font-semibold text-slate-900 mt-0.5 block font-mono">8,250</span>
                <span className="text-[10px] text-slate-400">8,000+ WhatsApp base</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-emerald-700 font-medium">Active Full Passes</span>
                <span className="text-xl font-semibold text-emerald-700 mt-0.5 block font-mono">
                  {activePaidStudentsCount}
                </span>
                <span className="text-[10px] text-slate-500">Paid VIP subscribers</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-slate-600 font-medium">Free Trial Users</span>
                <span className="text-xl font-semibold text-slate-700 mt-0.5 block font-mono">
                  {freeTrialStudentsCount}
                </span>
                <span className="text-[10px] text-slate-400">Trial topic access</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-rose-600 font-medium">Expired Passes</span>
                <span className="text-xl font-semibold text-rose-600 mt-0.5 block font-mono">
                  {expiredStudentsCount}
                </span>
                <span className="text-[10px] text-slate-400">Pending renewal</span>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-white border border-slate-200/80 p-3 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search student name or phone number..."
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-1.5">
                {(['ALL', 'Full Pass', 'Free Trial', 'Expired'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStudentAccessFilter(filter)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                      studentAccessFilter === filter
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Students Table */}
            <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-3">Student Name</th>
                      <th className="px-4 py-3">Phone (MoMo)</th>
                      <th className="px-4 py-3">Level</th>
                      <th className="px-4 py-3">Access Status</th>
                      <th className="px-4 py-3">Expires</th>
                      <th className="px-4 py-3">Topics Done</th>
                      <th className="px-4 py-3">Avg Score</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-4 py-8 text-center text-slate-400 text-xs">
                          No students found matching your criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map((st) => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="px-4 py-3">
                            <span className="font-medium text-slate-900 block">{st.name}</span>
                            <span className="text-[10px] text-slate-400">Active {st.lastActive}</span>
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-600">{st.phone}</td>
                          <td className="px-4 py-3">
                            <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                              {st.level}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {st.accessType === 'Full Pass' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                Full Pass
                              </span>
                            )}
                            {st.accessType === 'Free Trial' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                                Free Trial
                              </span>
                            )}
                            {st.accessType === 'Expired' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200/60">
                                Expired
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-500">
                            {st.accessExpiresAt ? new Date(st.accessExpiresAt).toLocaleDateString() : '—'}
                          </td>
                          <td className="px-4 py-3 font-medium text-slate-800">{st.topicsCompleted}</td>
                          <td className="px-4 py-3 font-mono font-medium text-slate-800">{st.avgScorePercentage}%</td>
                          <td className="px-4 py-3 text-right">
                            {st.accessType !== 'Full Pass' ? (
                              <button
                                onClick={() => {
                                  setSelectedStudentForAccess(st);
                                  setShowGrantModal(true);
                                }}
                                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium transition"
                              >
                                Grant Pass
                              </button>
                            ) : (
                              <button
                                onClick={() => handleRevokeAccess(st.id)}
                                className="px-2.5 py-1 rounded border border-slate-200 hover:bg-rose-50 hover:text-rose-700 text-slate-600 text-[11px] font-medium transition"
                              >
                                Revoke
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Clean Grant Access Modal */}
            {showGrantModal && (
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-sm w-full shadow-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {selectedStudentForAccess ? `Grant Pass: ${selectedStudentForAccess.name}` : 'Grant Direct Paid Pass'}
                    </h4>
                    <button 
                      onClick={() => setShowGrantModal(false)}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>

                  {!selectedStudentForAccess && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Student Phone Number</label>
                        <input
                          type="text"
                          value={customPhoneInput}
                          onChange={(e) => setCustomPhoneInput(e.target.value)}
                          placeholder="e.g. 0241234567"
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Student Name (Optional)</label>
                        <input
                          type="text"
                          value={customNameInput}
                          onChange={(e) => setCustomNameInput(e.target.value)}
                          placeholder="e.g. Esi Poku"
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Access Term</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[30, 60, 90].map((days) => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setGrantDurationDays(days)}
                          className={`py-2 rounded-lg text-xs font-medium border transition ${
                            grantDurationDays === days
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {days} Days
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                    <button
                      onClick={() => setShowGrantModal(false)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleGrantAccess(selectedStudentForAccess)}
                      className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium shadow-sm transition"
                    >
                      Confirm Full Pass
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: PLATFORM TOPIC COMPLETIONS                            */}
        {/* ============================================================ */}
        {activeTab === 'completions' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Curriculum Topic Completions</h2>
                <p className="text-xs text-slate-500">
                  Aggregate learning analytics across all 9 GES Common Core Programme subjects.
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 block">Total Topics Completed</span>
                <span className="text-xl font-semibold text-slate-900 font-mono">
                  {totalCompletedTopicsSum.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Summary Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">JHS 3 BECE Topics</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {jhs3TopicsCount} Topics
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Full notes & 1,180 questions</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Platform Quiz Pass Rate</span>
                <span className="text-2xl font-semibold text-emerald-700 mt-1 block font-mono">
                  78.4%
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Scoring ≥60% standard</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Total Curriculum Topics</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {totalTopicsAvailable} Topics
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Across JHS 1, 2, and 3</span>
              </div>
            </div>

            {/* Subject Breakdown Bars */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">Completion Rate by Subject</h3>
              <div className="space-y-3">
                {CURRICULUM_SUBJECTS.map((subj) => {
                  const subjectTopics = JHS_CURRICULUM_TOPICS.filter(t => t.subjectId === subj.id);
                  const completionPercentage = Math.min(100, Math.floor(65 + (subj.displayOrder * 3.5)));
                  return (
                    <div key={subj.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800">{subj.name}</span>
                        <span className="text-slate-500 font-mono">
                          {subjectTopics.length} Topics • {completionPercentage}% completion
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-900 rounded-full" 
                          style={{ width: `${completionPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Student Leaderboard */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">Top Performing Candidates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-2.5">Rank</th>
                      <th className="px-4 py-2.5">Student Name</th>
                      <th className="px-4 py-2.5">Phone</th>
                      <th className="px-4 py-2.5">Level</th>
                      <th className="px-4 py-2.5">Topics Done</th>
                      <th className="px-4 py-2.5">Average Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {students
                      .slice()
                      .sort((a, b) => b.topicsCompleted - a.topicsCompleted)
                      .map((st, rank) => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="px-4 py-2.5 font-semibold font-mono text-slate-500">
                            #{rank + 1}
                          </td>
                          <td className="px-4 py-2.5 font-medium text-slate-900">{st.name}</td>
                          <td className="px-4 py-2.5 font-mono text-slate-500">{st.phone}</td>
                          <td className="px-4 py-2.5 text-slate-700">{st.level}</td>
                          <td className="px-4 py-2.5 font-medium text-slate-900 font-mono">
                            {st.topicsCompleted} Topics
                          </td>
                          <td className="px-4 py-2.5 font-mono font-medium text-slate-900">{st.avgScorePercentage}%</td>
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
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Trial Questions & Diagnostic Mocks</h2>
                <p className="text-xs text-slate-500">
                  Upload, preview, and publish standardized trial mocks for students.
                </p>
              </div>

              <button
                onClick={() => setShowMockForm(!showMockForm)}
                className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
              >
                {showMockForm ? <XCircle className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{showMockForm ? 'Close Builder' : 'Upload New Mock'}</span>
              </button>
            </div>

            {formSuccessMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{formSuccessMessage}</span>
              </div>
            )}

            {/* MOCK CREATOR FORM */}
            {showMockForm && (
              <form onSubmit={handlePublishMock} className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-semibold text-slate-900">Create & Publish Trial Mock Exam</h3>
                  <p className="text-xs text-slate-500">Configure parameters and enter multiple-choice diagnostic questions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">Mock Exam Title</label>
                    <input
                      type="text"
                      value={mockTitle}
                      onChange={(e) => setMockTitle(e.target.value)}
                      placeholder="e.g. BECE National Standard Integrated Science Mock 2"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Subject</label>
                    <select
                      value={mockSubject}
                      onChange={(e) => setMockSubject(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      {CURRICULUM_SUBJECTS.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Grade Level</label>
                    <select
                      value={mockLevel}
                      onChange={(e) => setMockLevel(e.target.value as EducationLevel)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="JHS 1">JHS 1 (Basic 7)</option>
                      <option value="JHS 2">JHS 2 (Basic 8)</option>
                      <option value="JHS 3">JHS 3 (Basic 9 - BECE)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Time Limit (Minutes)</label>
                    <input
                      type="number"
                      value={mockDuration}
                      onChange={(e) => setMockDuration(Number(e.target.value))}
                      min="5"
                      max="120"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Pass Score Mark (%)</label>
                    <input
                      type="number"
                      value={mockPassScore}
                      onChange={(e) => setMockPassScore(Number(e.target.value))}
                      min="40"
                      max="100"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                {/* Questions Builder */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-900">
                      Questions ({mockQuestions.length})
                    </span>
                    <button
                      type="button"
                      onClick={addQuestionField}
                      className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Question</span>
                    </button>
                  </div>

                  {mockQuestions.map((q, idx) => (
                    <div key={idx} className="bg-slate-50/60 border border-slate-200/80 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">Question #{idx + 1}</span>
                        {mockQuestions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeQuestionField(idx)}
                            className="text-slate-400 hover:text-rose-600 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-600 mb-1">Question Prompt</label>
                        <textarea
                          value={q.questionText}
                          onChange={(e) => updateQuestionField(idx, 'questionText', e.target.value)}
                          placeholder="Enter question text here..."
                          rows={2}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Option A</label>
                          <input
                            type="text"
                            value={q.optionA}
                            onChange={(e) => updateQuestionField(idx, 'optionA', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Option B</label>
                          <input
                            type="text"
                            value={q.optionB}
                            onChange={(e) => updateQuestionField(idx, 'optionB', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Option C</label>
                          <input
                            type="text"
                            value={q.optionC}
                            onChange={(e) => updateQuestionField(idx, 'optionC', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Option D</label>
                          <input
                            type="text"
                            value={q.optionD}
                            onChange={(e) => updateQuestionField(idx, 'optionD', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Correct Option</label>
                          <select
                            value={q.correctOption}
                            onChange={(e) => updateQuestionField(idx, 'correctOption', e.target.value as 'A' | 'B' | 'C' | 'D')}
                            className="w-full bg-white border border-slate-300 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-900"
                          >
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                            <option value="C">Option C</option>
                            <option value="D">Option D</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Sub-Concept / Topic Tag</label>
                          <input
                            type="text"
                            value={q.subConcept || ''}
                            onChange={(e) => updateQuestionField(idx, 'subConcept', e.target.value)}
                            placeholder="e.g. Set Theory & Subsets"
                            className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Answer Explanation</label>
                        <input
                          type="text"
                          value={q.explanation}
                          onChange={(e) => updateQuestionField(idx, 'explanation', e.target.value)}
                          placeholder="Detailed pedagogical explanation for students..."
                          className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowMockForm(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-sm transition"
                  >
                    Publish Trial Mock
                  </button>
                </div>
              </form>
            )}

            {/* MOCK REPOSITORY TABLE */}
            <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
              <div className="p-3.5 border-b border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">
                  Published Mock Exams ({trialMocks.length})
                </span>
                <select
                  value={mockSubjectFilter}
                  onChange={(e) => setMockSubjectFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-xs text-slate-700"
                >
                  <option value="ALL">All Subjects</option>
                  {CURRICULUM_SUBJECTS.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-3">Mock Title</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Level</th>
                      <th className="px-4 py-3">Questions</th>
                      <th className="px-4 py-3">Duration</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {trialMocks
                      .filter(m => mockSubjectFilter === 'ALL' || m.subjectId === mockSubjectFilter)
                      .map((mock) => {
                        const subj = CURRICULUM_SUBJECTS.find(s => s.id === mock.subjectId);
                        return (
                          <tr key={mock.id} className="hover:bg-slate-50/60 transition">
                            <td className="px-4 py-3 font-medium text-slate-900">
                              {mock.title}
                              <div className="text-[10px] text-slate-400 font-normal">
                                Added {new Date(mock.createdAt).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                              {subj ? subj.name : mock.subjectId}
                            </td>
                            <td className="px-4 py-3">
                              <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                                {mock.level}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-mono font-medium text-slate-800">
                              {mock.questions.length} Qs
                            </td>
                            <td className="px-4 py-3 font-mono text-slate-600">
                              {mock.durationMinutes} mins
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => toggleMockPublish(mock.id)}
                                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition ${
                                  mock.isPublished
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                                    : 'bg-slate-100 text-slate-500'
                                }`}
                              >
                                {mock.isPublished ? '● Published' : '○ Draft'}
                              </button>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => setPreviewMock(mock)}
                                  className="px-2 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 text-[11px] font-medium transition"
                                >
                                  Preview
                                </button>
                                <button
                                  onClick={() => deleteMock(mock.id)}
                                  className="p-1 text-slate-400 hover:text-rose-600 transition"
                                  title="Delete mock"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
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
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{previewMock.title}</h4>
                      <p className="text-[11px] text-slate-500">{previewMock.level} • {previewMock.durationMinutes} mins • {previewMock.questions.length} Questions</p>
                    </div>
                    <button 
                      onClick={() => setPreviewMock(null)}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {previewMock.questions.map((q, idx) => (
                      <div key={idx} className="bg-slate-50/50 border border-slate-200/80 p-3.5 rounded-xl space-y-2">
                        <div className="font-medium text-xs text-slate-900">
                          <span className="font-mono text-slate-500 mr-1">Q{idx + 1}.</span> {q.questionText}
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                          <div className={`p-1.5 rounded border ${q.correctOption === 'A' ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-800' : 'bg-white border-slate-200 text-slate-700'}`}>
                            A. {q.optionA}
                          </div>
                          <div className={`p-1.5 rounded border ${q.correctOption === 'B' ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-800' : 'bg-white border-slate-200 text-slate-700'}`}>
                            B. {q.optionB}
                          </div>
                          <div className={`p-1.5 rounded border ${q.correctOption === 'C' ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-800' : 'bg-white border-slate-200 text-slate-700'}`}>
                            C. {q.optionC}
                          </div>
                          <div className={`p-1.5 rounded border ${q.correctOption === 'D' ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-800' : 'bg-white border-slate-200 text-slate-700'}`}>
                            D. {q.optionD}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                          <b className="text-slate-700">Correct: Option {q.correctOption}</b> — {q.explanation}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 text-right border-t border-slate-100">
                    <button
                      onClick={() => setPreviewMock(null)}
                      className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium"
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
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Total Cash Flow Collected</span>
                <span className="text-2xl font-semibold text-slate-900 font-mono mt-1 block">
                  GH₵ {metrics.totalCashFlowGhs.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">MoMo and scratch-card retail</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Unredeemed Active PINs</span>
                <span className="text-2xl font-semibold text-slate-900 font-mono mt-1 block">
                  {pins.filter(p => p.status === 'ACTIVE').length} Vouchers
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Ready for distribution</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Redeemed Vouchers</span>
                <span className="text-2xl font-semibold text-slate-900 font-mono mt-1 block">
                  {pins.filter(p => p.status === 'REDEEMED').length} Redeemed
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Activated by students</span>
              </div>
            </div>

            {/* PIN Batch Generator */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Scratch-Card PIN Minting</h3>
                  <p className="text-xs text-slate-500">Generate voucher batches for print and retail distribution.</p>
                </div>

                <button
                  onClick={exportPinsCSV}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Export All PINs</span>
                </button>
              </div>

              <form onSubmit={handleGeneratePins} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Quantity</label>
                  <select
                    value={pinCount}
                    onChange={(e) => setPinCount(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value={10}>10 Vouchers</option>
                    <option value={20}>20 Vouchers</option>
                    <option value={50}>50 Vouchers</option>
                    <option value={100}>100 Vouchers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Retail Price (GHS)</label>
                  <input
                    type="number"
                    value={pinPrice}
                    onChange={(e) => setPinPrice(Number(e.target.value))}
                    min="5"
                    step="5"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Validity Period</label>
                  <select
                    value={pinValidity}
                    onChange={(e) => setPinValidity(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value={30}>30 Days Full Pass</option>
                    <option value={60}>60 Days Full Pass</option>
                    <option value={90}>90 Days Term Pass</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs shadow-sm transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Generate Batch</span>
                </button>
              </form>

              {/* Newly Generated Feedback */}
              {newlyGenerated.length > 0 && (
                <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-700 font-medium">
                    <span>Generated {newlyGenerated.length} PINs successfully:</span>
                    <span className="text-[11px] text-slate-500">Click any code to copy</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                    {newlyGenerated.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => copyToClipboard(p.pinCode)}
                        className="p-2 bg-white border border-slate-200 rounded-md text-slate-800 hover:border-slate-400 flex items-center justify-between text-left transition shadow-2xs"
                      >
                        <span className="truncate">{p.pinCode}</span>
                        {copiedPin === p.pinCode ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cashflow Ledger */}
            <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
              <div className="p-3.5 border-b border-slate-200/80">
                <h3 className="text-xs font-semibold text-slate-900">Recent Cashflow & MoMo Transactions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-2.5">Reference</th>
                      <th className="px-4 py-2.5">Student Phone</th>
                      <th className="px-4 py-2.5">Payment Method</th>
                      <th className="px-4 py-2.5">Description</th>
                      <th className="px-4 py-2.5">Amount</th>
                      <th className="px-4 py-2.5 text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50/60 transition">
                        <td className="px-4 py-2.5 font-medium text-slate-900">{tx.reference}</td>
                        <td className="px-4 py-2.5 text-slate-600">{tx.studentPhone}</td>
                        <td className="px-4 py-2.5 font-sans text-slate-700">{tx.paymentMethod}</td>
                        <td className="px-4 py-2.5 font-sans text-slate-600">{tx.description}</td>
                        <td className="px-4 py-2.5 text-slate-900 font-semibold">GH₵ {tx.amountGhs.toFixed(2)}</td>
                        <td className="px-4 py-2.5 text-right text-slate-400">
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
