'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { EducationLevel, AccessPin } from '@/lib/types';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import {
  getStoredTrafficData,
  clearStudentRosterCache,
  DEFAULT_TRAFFIC_DATA
} from '@/lib/adminStore';
import { fetchStudents, adminGrantAccess, adminRevokeAccess } from '@/lib/apiClient';
import { AdminStudentDetail, WebTrafficData } from '@/lib/types';
import { getAllBeceYears } from '@/lib/becePastQuestionsData';
import { 
  UploadedPdfDocument, 
  fetchUploadedDocuments, 
  uploadPdfDocument, 
  deletePdfDocument, 
  formatFileSize,
  PdfCategory,
  PdfPaperType
} from '@/lib/pdfStore';
import { 
  ShieldCheck,
  EyeOff,
  Key,
  AlertCircle,
  ShieldAlert, 
  Users, 
  DollarSign, 
  TrendingUp, 
  KeyRound, 
  FilePlus, 
  Upload,
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
    updateAdminPins,
    getAdminMetrics, 
    pins, 
    transactions, 
    generatePinBatch,
    refreshPins
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  // Sequential Two-Stage Authentication States
  const [authStep, setAuthStep] = useState<'primary' | 'secondary'>('primary');
  const [primaryPin, setPrimaryPin] = useState('');
  const [secondaryPin, setSecondaryPin] = useState('');
  const [showPrimaryPin, setShowPrimaryPin] = useState(false);
  const [showSecondaryPin, setShowSecondaryPin] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Security Credentials Update Modal
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [currentPrimaryPin, setCurrentPrimaryPin] = useState('');
  const [currentSecondaryPin, setCurrentSecondaryPin] = useState('');
  const [editPrimaryPin, setEditPrimaryPin] = useState('');
  const [editSecondaryPin, setEditSecondaryPin] = useState('');
  const [securityModalMsg, setSecurityModalMsg] = useState<string | null>(null);
  const [isSavingKeys, setIsSavingKeys] = useState(false);
  
  // Navigation Tabs: traffic, paid_access, completions, trial_mocks, pins
  const [activeTab, setActiveTab] = useState<'traffic' | 'paid_access' | 'completions' | 'trial_mocks' | 'pins'>('traffic');

  // Stores
  const [trafficData, setTrafficData] = useState<WebTrafficData>(DEFAULT_TRAFFIC_DATA);
  const [students, setStudents] = useState<AdminStudentDetail[]>([]);
  // PDF Documents Store
  const [pdfDocuments, setPdfDocuments] = useState<UploadedPdfDocument[]>([]);
  const [pdfFilterCategory, setPdfFilterCategory] = useState<'ALL' | PdfCategory>('ALL');
  const [pdfFilterSubject, setPdfFilterSubject] = useState('ALL');
  const [showPdfUploadForm, setShowPdfUploadForm] = useState(false);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);

  // PDF Upload Form State
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfTitle, setPdfTitle] = useState('');
  const [pdfCategory, setPdfCategory] = useState<PdfCategory>('bece_past_question');
  const [pdfSubject, setPdfSubject] = useState('math');
  const [pdfYear, setPdfYear] = useState(2024);
  const [pdfLevel, setPdfLevel] = useState<EducationLevel>('JHS 3');
  const [pdfPaperType, setPdfPaperType] = useState<PdfPaperType>('Combined Paper');

  // Search & Filters
  const [studentSearch, setStudentSearch] = useState('');
  const [studentAccessFilter, setStudentAccessFilter] = useState<'ALL' | 'Full Pass' | 'Free Trial' | 'Expired'>('ALL');


  // Grant Access Modal
  const [showGrantModal, setShowGrantModal] = useState(false);
  const [selectedStudentForAccess, setSelectedStudentForAccess] = useState<AdminStudentDetail | null>(null);
  const [customPhoneInput, setCustomPhoneInput] = useState('');
  const [grantDurationDays, setGrantDurationDays] = useState(30);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);

  // PIN Generator Form State
  const [pinCount, setPinCount] = useState(10);
  const [pinPrice, setPinPrice] = useState(25);
  const [pinValidity, setPinValidity] = useState(30);
  const [newlyGenerated, setNewlyGenerated] = useState<AccessPin[]>([]);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);
  const [isGeneratingPins, setIsGeneratingPins] = useState(false);
  const [pinError, setPinError] = useState<string | null>(null);
  const [accessError, setAccessError] = useState<string | null>(null);

  const loadRealStudents = async () => {
    const { view, students: roster } = await fetchStudents();

    // The server only returns unmasked phone numbers to an authenticated
    // administrator; anonymous callers get the public leaderboard instead.
    if (view !== 'admin') {
      setStudents([]);
      return;
    }

    setStudents(roster as AdminStudentDetail[]);
  };

  useEffect(() => {
    setMounted(true);
    setTrafficData(getStoredTrafficData());
    clearStudentRosterCache();
    loadRealStudents();
    fetchUploadedDocuments().then(setPdfDocuments).catch(e => console.warn('Fetch docs warning:', e?.message || e));
    if (isAdmin) refreshPins();
  }, [activeTab, isAdmin]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-slate-800"></div>
      </div>
    );
  }

  // Sequential Two-Stage Authentication Handlers.
  // Both passwords are verified together by the server; the two screens are a
  // presentation choice, not two separate checks.
  const handleVerifyPrimary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryPin.trim()) {
      setAuthError('Please enter your primary password.');
      return;
    }
    setAuthError(null);
    setAuthStep('secondary');
  };

  const handleVerifySecondary = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!secondaryPin.trim()) {
      setAuthError('Please enter your secondary password.');
      return;
    }

    setIsSigningIn(true);
    setAuthError(null);

    const ok = await loginAdmin(primaryPin.trim(), secondaryPin.trim());

    setIsSigningIn(false);

    if (!ok) {
      setSecondaryPin('');
      setAuthStep('primary');
      setAuthError('Those administrator passwords were rejected. Please try again.');
      return;
    }

    setPrimaryPin('');
    setSecondaryPin('');
    setAuthStep('primary');
  };

  const handleUpdateKeys = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPrimaryPin.trim() || !currentSecondaryPin.trim()) {
      setSecurityModalMsg('Enter both current passwords to prove you own this console.');
      return;
    }
    if (!editPrimaryPin.trim() || !editSecondaryPin.trim()) {
      setSecurityModalMsg('Both new passwords are required.');
      return;
    }
    if (editPrimaryPin.trim().length < 8 || editSecondaryPin.trim().length < 8) {
      setSecurityModalMsg('Each new password must be at least 8 characters long.');
      return;
    }

    setIsSavingKeys(true);

    const result = await updateAdminPins({
      currentPrimary: currentPrimaryPin.trim(),
      currentSecondary: currentSecondaryPin.trim(),
      newPrimary: editPrimaryPin.trim(),
      newSecondary: editSecondaryPin.trim(),
    });

    setIsSavingKeys(false);

    if (result.success) {
      setSecurityModalMsg('Passwords successfully updated!');
      setCurrentPrimaryPin('');
      setCurrentSecondaryPin('');
      setEditPrimaryPin('');
      setEditSecondaryPin('');
      setTimeout(() => {
        setShowSecurityModal(false);
        setSecurityModalMsg(null);
      }, 1500);
    } else {
      setSecurityModalMsg(result.error || 'Failed to update passwords.');
    }
  };

  // MINIMALIST TWO-STEP SIGN IN (Clean, Understated Executive Style)
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Lock className="w-4 h-4" />
          </div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            AcademicPrep Admin
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {authStep === 'primary' ? 'Step 1 of 2 · Primary Password' : 'Step 2 of 2 · Secondary Password'}
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white py-7 px-6 sm:px-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
            {/* Minimalist step progress bar */}
            <div className="flex items-center gap-1.5 justify-center pb-1">
              <span className="w-10 h-1 rounded-full bg-slate-900 transition-colors" />
              <span className={`w-10 h-1 rounded-full transition-colors ${authStep === 'secondary' ? 'bg-slate-900' : 'bg-slate-200'}`} />
            </div>

            {/* STAGE 1: Primary Password */}
            {authStep === 'primary' && (
              <form onSubmit={handleVerifyPrimary} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Primary Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPrimaryPin ? 'text' : 'password'}
                      value={primaryPin}
                      onChange={(e) => {
                        setPrimaryPin(e.target.value);
                        setAuthError(null);
                      }}
                      placeholder="Enter primary password"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition pr-10"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPrimaryPin(!showPrimaryPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                      tabIndex={-1}
                    >
                      {showPrimaryPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {authError && (
                    <p className="text-xs text-rose-600 mt-2 font-medium">
                      {authError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* STAGE 2: Secondary Password */}
            {authStep === 'secondary' && (
              <form onSubmit={handleVerifySecondary} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Secondary Password
                  </label>
                  <div className="relative">
                    <input
                      type={showSecondaryPin ? 'text' : 'password'}
                      value={secondaryPin}
                      onChange={(e) => {
                        setSecondaryPin(e.target.value);
                        setAuthError(null);
                      }}
                      placeholder="Enter secondary password"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition pr-10"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowSecondaryPin(!showSecondaryPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                      tabIndex={-1}
                    >
                      {showSecondaryPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {authError && (
                    <p className="text-xs text-rose-600 mt-2 font-medium">
                      {authError}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthStep('primary');
                      setAuthError(null);
                      setSecondaryPin('');
                    }}
                    className="w-1/3 py-2.5 px-3 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-medium rounded-lg transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSigningIn}
                    className="w-2/3 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isSigningIn ? 'Verifying…' : 'Sign In'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="text-center mt-6">
            <Link
              href="/jhs"
              className="text-xs text-slate-500 hover:text-slate-800 transition"
            >
              ← Back to student portal
            </Link>
          </p>
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
  const totalCompletedTopicsSum = students.reduce((acc, s) => acc + s.topicsCompleted, 0);
  const overallAvgScore = students.length > 0
    ? Math.round(students.reduce((acc, s) => acc + (s.avgScorePercentage || 0), 0) / students.length)
    : 0;

  // Student Access Controls (server-verified administrator actions)
  const handleGrantAccess = async (targetStudent: AdminStudentDetail | null) => {
    const phone = (targetStudent ? targetStudent.phone : customPhoneInput).trim().replace(/\s+/g, '');
    if (!phone) return;

    setAccessError(null);

    const result = await adminGrantAccess(phone, grantDurationDays);
    if (!result.success) {
      setAccessError(result.error || 'Could not grant access.');
      return;
    }

    await loadRealStudents();

    setShowGrantModal(false);
    setSelectedStudentForAccess(null);
    setCustomPhoneInput('');
  };

  const handleRevokeAccess = async (studentId: string) => {
    const target = students.find(s => s.id === studentId);
    if (!target) return;

    setAccessError(null);

    const result = await adminRevokeAccess(target.phone);
    if (!result.success) {
      setAccessError(result.error || 'Could not revoke access.');
      return;
    }

    await loadRealStudents();
  };


  const handleUploadPdfSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      alert('Please select a local PDF file to upload.');
      return;
    }
    if (!pdfTitle.trim()) {
      alert('Please enter a title for the document.');
      return;
    }

    try {
      setIsUploadingPdf(true);
      const subName = CURRICULUM_SUBJECTS.find(s => s.id === pdfSubject)?.name || pdfSubject;

      const formData = new FormData();
      formData.append('file', pdfFile);
      formData.append('title', pdfTitle.trim());
      formData.append('category', pdfCategory);
      formData.append('subjectId', pdfSubject);
      formData.append('subjectName', subName);
      formData.append('paperType', pdfPaperType);

      if (pdfCategory === 'bece_past_question') {
        formData.append('year', String(pdfYear));
      } else {
        formData.append('level', pdfLevel);
      }

      const created = await uploadPdfDocument(formData);
      setPdfDocuments(prev => [created, ...prev]);

      // Reset form
      setPdfFile(null);
      setPdfTitle('');
      setShowPdfUploadForm(false);
      setFormSuccessMessage(`"${created.title}" uploaded successfully!`);
      setTimeout(() => setFormSuccessMessage(null), 4000);
    } catch (err: any) {
      alert('Upload failed: ' + (err.message || 'Error occurred'));
    } finally {
      setIsUploadingPdf(false);
    }
  };

  const handleDeletePdf = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      await deletePdfDocument(id);
      setPdfDocuments(prev => prev.filter(d => d.id !== id));
      setFormSuccessMessage(`Document "${title}" deleted successfully.`);
      setTimeout(() => setFormSuccessMessage(null), 4000);
    } catch (err: any) {
      alert('Failed to delete: ' + err.message);
    }
  };

  // PIN Generation (codes are minted by the server's CSPRNG)
  const handleGeneratePins = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsGeneratingPins(true);
    setPinError(null);

    try {
      const created = await generatePinBatch(pinCount, pinPrice, pinValidity);
      setNewlyGenerated(created);
      await refreshPins();
    } catch (err: any) {
      setPinError(err?.message || 'Could not generate the PIN batch.');
      setNewlyGenerated([]);
    } finally {
      setIsGeneratingPins(false);
    }
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

            <button
              onClick={() => {
                setCurrentPrimaryPin('');
                setCurrentSecondaryPin('');
                setEditPrimaryPin('');
                setEditSecondaryPin('');
                setSecurityModalMsg(null);
                setShowSecurityModal(true);
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium transition flex items-center gap-1.5"
              title="Security credentials management"
            >
              <KeyRound className="w-3.5 h-3.5 text-slate-500" />
              <span>Security Keys</span>
            </button>

            <Link
              href="/jhs"
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Student View</span>
            </Link>

            <button
              onClick={() => {
                void logoutAdmin();
                clearStudentRosterCache();
                setStudents([]);
                setAuthStep('primary');
                setPrimaryPin('');
                setSecondaryPin('');
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 font-semibold transition flex items-center gap-1.5"
              title="Lock administration portal immediately"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Lock Portal</span>
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
              <span>PDF Past Papers & Mocks</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {pdfDocuments.length}
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
                  <TrendingUp className="w-3 h-3" /> Live traffic stream
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Page Views</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.totalPageViews.toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block font-mono">
                  {(trafficData.totalPageViews / Math.max(1, trafficData.dailyVisitors)).toFixed(1)} views/visitor
                </span>
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
                {trafficData.dailyTrend.map((day, idx) => {
                  const maxTrendVisitors = Math.max(...trafficData.dailyTrend.map(d => d.visitors), 1);
                  const maxTrendQuizzes = Math.max(...trafficData.dailyTrend.map(d => d.quizAttempts), 1);

                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                      <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition font-mono">
                        {day.visitors}
                      </div>
                      <div className="w-full max-w-[28px] flex items-end gap-1 h-full">
                        {/* Visitors Bar */}
                        <div 
                          className="flex-1 bg-slate-900 rounded-t transition-all group-hover:bg-slate-700"
                          style={{ height: `${Math.max(day.visitors > 0 ? 10 : 0, (day.visitors / maxTrendVisitors) * 100)}%` }}
                          title={`Visitors: ${day.visitors}`}
                        ></div>
                        {/* Quiz Attempts Bar */}
                        <div 
                          className="flex-1 bg-blue-500 rounded-t transition-all group-hover:bg-blue-600"
                          style={{ height: `${Math.max(day.quizAttempts > 0 ? 10 : 0, (day.quizAttempts / maxTrendQuizzes) * 100)}%` }}
                          title={`Quiz Attempts: ${day.quizAttempts}`}
                        ></div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 truncate w-full text-center">
                        {day.date.replace(' (Today)', '')}
                      </span>
                    </div>
                  );
                })}
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
                    setAccessError(null);
                    setShowGrantModal(true);
                  }}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Grant Paid Pass</span>
                </button>
              </div>
            </div>

            {accessError && !showGrantModal && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-medium flex items-start justify-between gap-3">
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {accessError}
                </span>
                <button onClick={() => setAccessError(null)} className="text-rose-400 hover:text-rose-700">
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium">Total Registered</span>
                <span className="text-xl font-semibold text-slate-900 mt-0.5 block font-mono">{students.length}</span>
                <span className="text-[10px] text-slate-400">Registered student directory</span>
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
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-slate-700 mb-1">Student Phone Number</label>
                      <input
                        type="text"
                        value={customPhoneInput}
                        onChange={(e) => setCustomPhoneInput(e.target.value)}
                        placeholder="e.g. 0241234567"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      />
                      <p className="text-[10px] text-slate-400">
                        The student must already have a registered account on this number.
                      </p>
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

                  {accessError && (
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {accessError}
                    </div>
                  )}

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
                <span className="text-xs text-slate-500 font-medium">Candidate Average Score</span>
                <span className="text-2xl font-semibold text-emerald-700 mt-1 block font-mono">
                  {overallAvgScore}%
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Real diagnostic candidate average</span>
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
                  const completedInSubject = students.reduce((acc, s) => {
                    const count = (s.completedTopicIds || []).filter((tid: string) => subjectTopics.some(st => st.id === tid)).length;
                    return acc + count;
                  }, 0);
                  const maxPossible = Math.max(1, students.length * subjectTopics.length);
                  const completionPercentage = Math.round((completedInSubject / maxPossible) * 100);

                  return (
                    <div key={subj.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800">{subj.name}</span>
                        <span className="text-slate-500 font-mono">
                          {completedInSubject} completions • {subjectTopics.length} Topics ({completionPercentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-900 rounded-full transition-all" 
                          style={{ width: `${Math.max(completedInSubject > 0 ? 6 : 0, completionPercentage)}%` }}
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
            {/* Header & Sub-Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-base font-semibold text-slate-900">PDF Document Management Hub</h2>
                <p className="text-xs text-slate-500">
                  Upload local PDF examination papers from your computer for BECE Past Questions and Trial Mocks.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPdfUploadForm(!showPdfUploadForm)}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
                >
                  {showPdfUploadForm ? <XCircle className="w-3.5 h-3.5" /> : <Upload className="w-3.5 h-3.5" />}
                  <span>{showPdfUploadForm ? 'Close Uploader' : 'Upload Local PDF'}</span>
                </button>
              </div>
            </div>

            {formSuccessMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{formSuccessMessage}</span>
              </div>
            )}

            {/* UPLOAD PDF FORM */}
            {showPdfUploadForm && (
              <form onSubmit={handleUploadPdfSubmit} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Upload PDF Past Paper or Mock</h3>
                    <p className="text-xs text-slate-500">Select a PDF file from your local computer and set the subject/year tags.</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">PDF Format Only</span>
                </div>

                {/* File Drop / Select Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Select PDF File from Local Storage *
                  </label>
                  <div className="border-2 border-dashed border-slate-200 hover:border-slate-400 rounded-xl p-6 text-center transition bg-slate-50/50">
                    <input
                      type="file"
                      id="pdfFileInput"
                      accept=".pdf,application/pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setPdfFile(file);
                        if (file && !pdfTitle) {
                          // Auto-suggest title from filename
                          const clean = file.name.replace(/\.pdf$/i, '').replace(/[_-]/g, ' ');
                          setPdfTitle(clean);
                        }
                      }}
                      className="hidden"
                    />
                    <label htmlFor="pdfFileInput" className="cursor-pointer block space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto">
                        <Upload className="w-5 h-5 text-slate-500" />
                      </div>
                      {pdfFile ? (
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-emerald-700 flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{pdfFile.name}</span>
                          </p>
                          <p className="text-[11px] text-slate-500 font-mono">
                            {formatFileSize(pdfFile.size)}
                          </p>
                          <span className="text-[10px] text-blue-600 underline">Click to choose a different file</span>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            Click here to browse your computer for a PDF file
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Supports official WAEC question papers, marking guides, and trial mocks.
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Metadata Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <div className="sm:col-span-2 lg:col-span-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Document Title *
                    </label>
                    <input
                      type="text"
                      value={pdfTitle}
                      onChange={(e) => setPdfTitle(e.target.value)}
                      placeholder="e.g. BECE 2024 Integrated Science Paper 1 & 2 with Solutions"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Document Category *
                    </label>
                    <select
                      value={pdfCategory}
                      onChange={(e) => setPdfCategory(e.target.value as PdfCategory)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                    >
                      <option value="bece_past_question">BECE Past Question (2008 – 2026)</option>
                      <option value="trial_mock">Trial Question / Mock Exam</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject *
                    </label>
                    <select
                      value={pdfSubject}
                      onChange={(e) => setPdfSubject(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                    >
                      {CURRICULUM_SUBJECTS.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  {pdfCategory === 'bece_past_question' ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Exam Year (2008 – 2026) *
                      </label>
                      <select
                        value={pdfYear}
                        onChange={(e) => setPdfYear(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                      >
                        {getAllBeceYears().map((yr) => (
                          <option key={yr} value={yr}>BECE {yr}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Grade Level *
                      </label>
                      <select
                        value={pdfLevel}
                        onChange={(e) => setPdfLevel(e.target.value as EducationLevel)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                      >
                        <option value="JHS 1">JHS 1 (Basic 7)</option>
                        <option value="JHS 2">JHS 2 (Basic 8)</option>
                        <option value="JHS 3">JHS 3 (Basic 9 - BECE)</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Paper Type *
                    </label>
                    <select
                      value={pdfPaperType}
                      onChange={(e) => setPdfPaperType(e.target.value as PdfPaperType)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                    >
                      <option value="Combined Paper">Combined Paper (Section A & B)</option>
                      <option value="Paper 1">Paper 1 (Objectives)</option>
                      <option value="Paper 2">Paper 2 (Theory / Written)</option>
                      <option value="Marking Scheme">Official Marking Scheme</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPdfUploadForm(false)}
                    className="px-3.5 py-2 text-xs text-slate-600 hover:text-slate-900 font-medium"
                    disabled={isUploadingPdf}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploadingPdf || !pdfFile}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{isUploadingPdf ? 'Uploading Document...' : 'Upload & Publish PDF'}</span>
                  </button>
                </div>
              </form>
            )}

            {/* DOCUMENT REPOSITORY TABLE */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPdfFilterCategory('ALL')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'ALL'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All PDFs ({pdfDocuments.length})
                  </button>
                  <button
                    onClick={() => setPdfFilterCategory('bece_past_question')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'bece_past_question'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    BECE Past Questions ({pdfDocuments.filter(d => d.category === 'bece_past_question').length})
                  </button>
                  <button
                    onClick={() => setPdfFilterCategory('trial_mock')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'trial_mock'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Trial Mocks ({pdfDocuments.filter(d => d.category === 'trial_mock').length})
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={pdfFilterSubject}
                    onChange={(e) => setPdfFilterSubject(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1 text-xs text-slate-700"
                  >
                    <option value="ALL">All Subjects</option>
                    {CURRICULUM_SUBJECTS.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {pdfDocuments.length === 0 ? (
                <div className="p-16 text-center space-y-3">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                  <h4 className="text-sm font-semibold text-slate-800">No PDF Documents Uploaded Yet</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Click "Upload Local PDF" above to upload past question booklets, trial exams, or marking schemes directly from your local storage.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                      <tr>
                        <th className="px-4 py-3">Document Title</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Subject</th>
                        <th className="px-4 py-3">Year / Grade</th>
                        <th className="px-4 py-3">Paper</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {pdfDocuments
                        .filter(d => pdfFilterCategory === 'ALL' || d.category === pdfFilterCategory)
                        .filter(d => pdfFilterSubject === 'ALL' || d.subjectId === pdfFilterSubject)
                        .map((doc) => (
                          <tr key={doc.id} className="hover:bg-slate-50/60 transition">
                            <td className="px-4 py-3">
                              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                                <span>{doc.title}</span>
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                {doc.fileName}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                doc.category === 'bece_past_question'
                                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              }`}>
                                {doc.category === 'bece_past_question' ? 'BECE Past Paper' : 'Trial Mock'}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-700 font-medium">
                              {doc.subjectName}
                            </td>
                            <td className="px-4 py-3 font-mono text-slate-700">
                              {doc.category === 'bece_past_question' ? `BECE ${doc.year}` : doc.level}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                              {doc.paperType}
                            </td>
                            <td className="px-4 py-3 font-mono text-slate-500">
                              {formatFileSize(doc.fileSizeBytes)}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <a
                                  href={doc.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2.5 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-medium transition flex items-center gap-1"
                                >
                                  <span>View</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                                <a
                                  href={doc.fileUrl}
                                  download={doc.fileName}
                                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium transition flex items-center gap-1"
                                >
                                  <span>Download</span>
                                  <Download className="w-3 h-3" />
                                </a>
                                <button
                                  onClick={() => handleDeletePdf(doc.id, doc.title)}
                                  className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                                  title="Delete PDF"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

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
                  disabled={isGeneratingPins}
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-medium rounded-lg text-xs shadow-sm transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isGeneratingPins ? 'Minting…' : 'Generate Batch'}</span>
                </button>
              </form>

              {pinError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{pinError}</span>
                </div>
              )}

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

      {/* Security Credentials Management Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Security Credentials</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Manage Dual-Key Gateway Passwords</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowSecurityModal(false);
                  setSecurityModalMsg(null);
                }}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateKeys} className="space-y-4">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Passwords are stored as bcrypt hashes on the server and are never shown again. Confirm
                both current passwords to prove you control this console before setting new ones.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block font-mono">
                    Current Primary
                  </label>
                  <input
                    type="password"
                    value={currentPrimaryPin}
                    onChange={(e) => setCurrentPrimaryPin(e.target.value)}
                    autoComplete="current-password"
                    className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block font-mono">
                    Current Secondary
                  </label>
                  <input
                    type="password"
                    value={currentSecondaryPin}
                    onChange={(e) => setCurrentSecondaryPin(e.target.value)}
                    autoComplete="current-password"
                    className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block font-mono">
                  1. New Primary Administrator Passcode
                </label>
                <input
                  type="password"
                  value={editPrimaryPin}
                  onChange={(e) => setEditPrimaryPin(e.target.value)}
                  autoComplete="new-password"
                  className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  required
                />
                <span className="text-[10px] text-slate-400 block">Minimum 8 characters</span>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block font-mono">
                  2. New Secondary Security Token
                </label>
                <input
                  type="password"
                  value={editSecondaryPin}
                  onChange={(e) => setEditSecondaryPin(e.target.value)}
                  autoComplete="new-password"
                  className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  required
                />
                <span className="text-[10px] text-slate-400 block">Minimum 8 characters</span>
              </div>

              {securityModalMsg && (
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium">
                  {securityModalMsg}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setShowSecurityModal(false);
                    setSecurityModalMsg(null);
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingKeys}
                  className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white text-xs font-bold transition shadow-xs"
                >
                  {isSavingKeys ? 'Saving…' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
