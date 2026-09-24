'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { EducationLevel, AccessPin, CustomTestQuestion } from '@/lib/types';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';
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
  Trash2
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { 
    isAdmin, 
    loginAdmin, 
    logoutAdmin, 
    getAdminMetrics, 
    pins, 
    transactions, 
    generatePinBatch, 
    student 
  } = useAuth();

  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'entries' | 'cashflow' | 'pins' | 'progress' | 'upload'>('entries');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // PIN Generator Form State
  const [pinCount, setPinCount] = useState(10);
  const [pinPrice, setPinPrice] = useState(25);
  const [pinValidity, setPinValidity] = useState(30);
  const [newlyGenerated, setNewlyGenerated] = useState<AccessPin[]>([]);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);

  // Custom Test Uploader State
  const [testTitle, setTestTitle] = useState('');
  const [testLevel, setTestLevel] = useState<EducationLevel>('JHS 1');
  const [testSubject, setTestSubject] = useState('math');
  const [testTimeLimit, setTestTimeLimit] = useState(20);
  const [testQuestions, setTestQuestions] = useState<CustomTestQuestion[]>([
    {
      id: 'q-1',
      questionText: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: 'A',
      explanation: '',
    },
  ]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Student Search Filter
  const [studentSearch, setStudentSearch] = useState('');

  // Sample Live Student Entries (Simulated representation of 8,000+ WhatsApp base)
  const sampleStudents = [
    {
      id: 'st-01',
      phone: '0241234567',
      name: 'Kofi Mensah',
      level: 'JHS 1',
      access: 'Full Pass',
      lastActive: 'Just now',
      topicsCompleted: 4,
      avgScore: '85%',
    },
    {
      id: 'st-02',
      phone: '0559876543',
      name: 'Ama Serwaa',
      level: 'JHS 2',
      access: 'Full Pass',
      lastActive: '12 mins ago',
      topicsCompleted: 6,
      avgScore: '92%',
    },
    {
      id: 'st-03',
      phone: '0275554321',
      name: 'Kwame Osei',
      level: 'JHS 3',
      access: 'Free Trial',
      lastActive: '34 mins ago',
      topicsCompleted: 1,
      avgScore: '60%',
    },
    {
      id: 'st-04',
      phone: '0501122334',
      name: 'Abena Boateng',
      level: 'JHS 1',
      access: 'Full Pass',
      lastActive: '1 hour ago',
      topicsCompleted: 5,
      avgScore: '78%',
    },
    {
      id: 'st-05',
      phone: '0248889900',
      name: 'Yaw Darko',
      level: 'JHS 2',
      access: 'Free Trial',
      lastActive: '2 hours ago',
      topicsCompleted: 2,
      avgScore: '70%',
    },
  ];

  const filteredStudents = sampleStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.phone.includes(studentSearch)
  );

  const metrics = getAdminMetrics();

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

  const addQuestionField = () => {
    setTestQuestions((prev) => [
      ...prev,
      {
        id: `q-${prev.length + 1}`,
        questionText: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: 'A',
        explanation: '',
      },
    ]);
  };

  const removeQuestionField = (index: number) => {
    if (testQuestions.length <= 1) return;
    setTestQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePublishTest = (e: React.FormEvent) => {
    e.preventDefault();
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setTestTitle('');
      setTestQuestions([
        {
          id: 'q-1',
          questionText: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          correctOption: 'A',
          explanation: '',
        },
      ]);
    }, 2500);
  };

  if (!mounted) {
    return (
      <div className="max-w-md mx-auto my-16 px-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6 text-center animate-pulse">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 mx-auto" />
          <div className="h-6 bg-slate-100 rounded-xl w-3/4 mx-auto" />
          <div className="h-10 bg-slate-100 rounded-xl w-full" />
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-16 px-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 mx-auto flex items-center justify-center">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-bold text-slate-900">Admin Control Center</h1>
            <p className="text-xs text-slate-500">
              Enter the master administrator passcode to monitor entries and cash flows.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Passcode (Demo: 9999)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-center font-mono tracking-widest text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                autoFocus
              />
            </div>

            {authError && (
              <p className="text-xs text-red-600 font-medium">
                Invalid passcode. Please try again (Demo passcode: 9999).
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <p className="text-[11px] text-slate-400">
            Authorized admin access only • AcademicPrep Portal
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Live Administrator Hub
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            AcademicPrep Administration
          </h1>
          <p className="text-xs text-slate-500">
            Monitoring entries, cash flows, study progress, and custom test uploads.
          </p>
        </div>

        <button
          onClick={logoutAdmin}
          className="self-start sm:self-auto py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Lock Admin Panel</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">WhatsApp Students</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{metrics.totalStudents.toLocaleString()}</div>
          <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {metrics.activeToday.toLocaleString()} Active Today
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Total Cash Flow</span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            GHS {metrics.totalCashFlowGhs.toFixed(2)}
          </div>
          <p className="text-[11px] text-slate-500">Mobile Money & Vouchers</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Active PIN Passes</span>
            <KeyRound className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{metrics.activePinsCount}</div>
          <p className="text-[11px] text-slate-500">Ready for student redemption</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Avg Exam Score</span>
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {metrics.averageExamScore > 0 ? `${metrics.averageExamScore}%` : '78%'}
          </div>
          <p className="text-[11px] text-slate-500">Across JHS 1, 2 & 3</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 text-xs font-bold">
        <button
          onClick={() => setActiveTab('entries')}
          className={`py-2 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'entries'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Monitor Entries & Students
        </button>
        <button
          onClick={() => setActiveTab('cashflow')}
          className={`py-2 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'cashflow'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Cash Flows & Ledger
        </button>
        <button
          onClick={() => setActiveTab('pins')}
          className={`py-2 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'pins'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Bulk PIN Generator
        </button>
        <button
          onClick={() => setActiveTab('upload')}
          className={`py-2 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'upload'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Upload Personal Test
        </button>
      </div>

      {/* TAB 1: Monitor Entries */}
      {activeTab === 'entries' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">Student Entry & Activity Log</h2>
              <p className="text-xs text-slate-500">
                Track phone number logins, current levels, and progress across the WhatsApp cohort.
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search phone or name..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-y border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Phone Number</th>
                  <th className="py-3 px-4">Level</th>
                  <th className="py-3 px-4">Access Status</th>
                  <th className="py-3 px-4">Topics Covered</th>
                  <th className="py-3 px-4">Avg Quiz Score</th>
                  <th className="py-3 px-4">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-bold text-slate-900">{st.name}</td>
                    <td className="py-3 px-4 font-mono text-slate-600">{st.phone}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">
                        {st.level}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          st.access === 'Full Pass'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {st.access}
                      </span>
                    </td>
                    <td className="py-3 px-4">{st.topicsCompleted} Topics</td>
                    <td className="py-3 px-4 font-mono font-bold text-blue-600">{st.avgScore}</td>
                    <td className="py-3 px-4 text-slate-500">{st.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Cash Flows & Revenue */}
      {activeTab === 'cashflow' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Cash Flow & Subscription Ledger</h2>
              <p className="text-xs text-slate-500">
                Revenue generated from Mobile Money and Scratch-card PIN pass activations.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Total Collected</span>
              <span className="text-xl font-black text-emerald-600 font-mono">
                GHS {metrics.totalCashFlowGhs.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-y border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Reference</th>
                  <th className="py-3 px-4">Student Phone</th>
                  <th className="py-3 px-4">Payment Method</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono text-purple-700 font-bold">{tx.reference}</td>
                    <td className="py-3 px-4 font-mono text-slate-700">{tx.studentPhone}</td>
                    <td className="py-3 px-4">{tx.paymentMethod}</td>
                    <td className="py-3 px-4 text-slate-600">{tx.description}</td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-600">
                      GHS {tx.amountGhs.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-slate-500">
                      {new Date(tx.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Bulk PIN Generator */}
      {activeTab === 'pins' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Generator Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-slate-900">Generate Access PINs</h2>
              <p className="text-xs text-slate-500">
                Create batches of scratch-card PINs to sell to students on WhatsApp or in print.
              </p>
            </div>

            <form onSubmit={handleGeneratePins} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Number of PINs to Generate
                </label>
                <select
                  value={pinCount}
                  onChange={(e) => setPinCount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value={10}>10 PINs</option>
                  <option value={25}>25 PINs</option>
                  <option value={50}>50 PINs</option>
                  <option value={100}>100 PINs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Price per PIN (GHS)
                </label>
                <input
                  type="number"
                  value={pinPrice}
                  onChange={(e) => setPinPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                  min={1}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Validity Duration (Days)
                </label>
                <input
                  type="number"
                  value={pinValidity}
                  onChange={(e) => setPinValidity(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                  min={1}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Generate Batch Now</span>
              </button>
            </form>
          </div>

          {/* Newly Generated Batch & PIN Inventory */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">PIN Inventory & Active Codes</h3>
                <p className="text-xs text-slate-500">
                  Students use these codes with their phone numbers to unlock full access.
                </p>
              </div>
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
                {pins.length} Total in Database
              </span>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2 pr-1">
              {pins.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-xl border border-slate-200 hover:border-purple-300 bg-slate-50/50 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-slate-900">{p.pinCode}</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          p.status === 'ACTIVE'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      GHS {p.priceGhs.toFixed(2)} • {p.validityDays} Days • Batch: {p.batchId}
                    </p>
                  </div>

                  <button
                    onClick={() => copyToClipboard(p.pinCode)}
                    className="p-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedPin === p.pinCode ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Upload Personal / Custom Test */}
      {activeTab === 'upload' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">Upload Personal Test / Exam Paper</h2>
            <p className="text-xs text-slate-500">
              Create and publish a custom examination directly to your JHS students.
            </p>
          </div>

          {uploadSuccess && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Test successfully published! Your students can now see it in their portal.</span>
            </div>
          )}

          <form onSubmit={handlePublishTest} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Test Title</label>
                <input
                  type="text"
                  placeholder="e.g. End of Term Mathematics Mock"
                  value={testTitle}
                  onChange={(e) => setTestTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Class Level</label>
                <select
                  value={testLevel}
                  onChange={(e) => setTestLevel(e.target.value as EducationLevel)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                >
                  <option value="JHS 1">JHS 1</option>
                  <option value="JHS 2">JHS 2</option>
                  <option value="JHS 3">JHS 3</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <select
                  value={testSubject}
                  onChange={(e) => setTestSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                >
                  {CURRICULUM_SUBJECTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Questions Builder */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Questions ({testQuestions.length})
                </h3>
                <button
                  type="button"
                  onClick={addQuestionField}
                  className="py-1 px-3 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Question</span>
                </button>
              </div>

              {testQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Question {idx + 1}</span>
                    {testQuestions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeQuestionField(idx)}
                        className="text-red-500 hover:text-red-700 p-1 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter question text..."
                    value={q.questionText}
                    onChange={(e) => {
                      const updated = [...testQuestions];
                      updated[idx].questionText = e.target.value;
                      setTestQuestions(updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="Option A"
                      value={q.optionA}
                      onChange={(e) => {
                        const updated = [...testQuestions];
                        updated[idx].optionA = e.target.value;
                        setTestQuestions(updated);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Option B"
                      value={q.optionB}
                      onChange={(e) => {
                        const updated = [...testQuestions];
                        updated[idx].optionB = e.target.value;
                        setTestQuestions(updated);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Option C"
                      value={q.optionC}
                      onChange={(e) => {
                        const updated = [...testQuestions];
                        updated[idx].optionC = e.target.value;
                        setTestQuestions(updated);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Option D"
                      value={q.optionD}
                      onChange={(e) => {
                        const updated = [...testQuestions];
                        updated[idx].optionD = e.target.value;
                        setTestQuestions(updated);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700">Correct Option:</span>
                      <select
                        value={q.correctOption}
                        onChange={(e) => {
                          const updated = [...testQuestions];
                          updated[idx].correctOption = e.target.value as 'A' | 'B' | 'C' | 'D';
                          setTestQuestions(updated);
                        }}
                        className="px-2 py-1 rounded border border-slate-300 font-bold bg-white"
                      >
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      placeholder="Step-by-step explanation for students..."
                      value={q.explanation}
                      onChange={(e) => {
                        const updated = [...testQuestions];
                        updated[idx].explanation = e.target.value;
                        setTestQuestions(updated);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all flex items-center gap-2"
            >
              <FilePlus className="w-4 h-4" />
              <span>Publish Test to Students</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
