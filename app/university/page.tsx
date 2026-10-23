'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Flame, 
  Target, 
  Printer, 
  Key, 
  ArrowRight, 
  HelpCircle, 
  Layers, 
  Zap, 
  RotateCcw, 
  Share2, 
  Sliders, 
  Search,
  Check,
  Brain,
  Award
} from 'lucide-react';
import { 
  CompleteSlideStudyPackage, 
  SlideAnalysis, 
  UNIVERSITY_COURSE_PRESETS,
  generateAlgorithmicStudyPlan
} from '@/lib/universitySlides';

export default function UniversityPortalPage() {
  const [activePackage, setActivePackage] = useState<CompleteSlideStudyPackage>(UNIVERSITY_COURSE_PRESETS[0]);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'slides' | 'plan' | 'cram' | 'flashcards'>('slides');
  
  // Customization controls
  const [daysUntilExam, setDaysUntilExam] = useState(7);
  const [dailyMinutes, setDailyMinutes] = useState(45);
  const [targetGrade, setTargetGrade] = useState('A / First Class');
  const [filterHighYieldOnly, setFilterHighYieldOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive user tracking
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [masteredSlides, setMasteredSlides] = useState<Record<number, boolean>>({});
  const [completedSessions, setCompletedSessions] = useState<Record<string, boolean>>({});

  // File Upload State
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [customApiKey, setCustomApiKey] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load persisted API key if student saved it
    if (typeof window !== 'undefined') {
      const savedKey = localStorage.getItem('academicprep_gemini_api_key');
      if (savedKey) setCustomApiKey(savedKey);

      const savedMastery = localStorage.getItem(`academicprep_mastery_${activePackage.id}`);
      if (savedMastery) {
        try { setMasteredSlides(JSON.parse(savedMastery)); } catch {}
      }
      const savedSessions = localStorage.getItem(`academicprep_sessions_${activePackage.id}`);
      if (savedSessions) {
        try { setCompletedSessions(JSON.parse(savedSessions)); } catch {}
      }
    }
  }, [activePackage.id]);

  const saveApiKey = (key: string) => {
    setCustomApiKey(key);
    if (typeof window !== 'undefined') {
      if (key) localStorage.setItem('academicprep_gemini_api_key', key);
      else localStorage.removeItem('academicprep_gemini_api_key');
    }
    setShowSettingsModal(false);
  };

  const toggleMastered = (pageNumber: number) => {
    setMasteredSlides(prev => {
      const updated = { ...prev, [pageNumber]: !prev[pageNumber] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(`academicprep_mastery_${activePackage.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const toggleSession = (sessionId: string) => {
    setCompletedSessions(prev => {
      const updated = { ...prev, [sessionId]: !prev[sessionId] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(`academicprep_sessions_${activePackage.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Re-generate study plan when student changes days or daily time budget
  const handleRecalculatePlan = (days: number, mins: number, grade: string) => {
    setDaysUntilExam(days);
    setDailyMinutes(mins);
    setTargetGrade(grade);

    const newPlan = generateAlgorithmicStudyPlan(activePackage.slides, days, mins, grade);
    setActivePackage(prev => ({
      ...prev,
      studyPlan: newPlan
    }));
  };

  // Load a built-in course preset
  const handleSelectPreset = (preset: CompleteSlideStudyPackage) => {
    setActivePackage(preset);
    setSelectedSlideIndex(0);
    setRevealedAnswers({});
    setDaysUntilExam(preset.studyPlan.daysUntilExam);
    setDailyMinutes(preset.studyPlan.dailyMinutes);
  };

  // Handle PDF file upload
  const handleFileUpload = async (file: File) => {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
      alert('Please upload a valid PDF lecture slides file.');
      return;
    }

    setLoading(true);
    setLoadingStatus('Converting lecture slides & extracting pages...');

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Data = reader.result as string;
          setLoadingStatus('Gemini AI analyzing slides page-by-page (identifying core rules & exam traps)...');

          const res = await fetch('/api/university/analyze-slides', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(customApiKey ? { 'x-gemini-api-key': customApiKey } : {})
            },
            body: JSON.stringify({
              fileBase64: base64Data,
              fileName: file.name,
              daysUntilExam,
              dailyMinutes,
              targetGrade
            })
          });

          const data = await res.json();
          if (data.success && data.package) {
            setActivePackage(data.package);
            setSelectedSlideIndex(0);
            setRevealedAnswers({});
            setMasteredSlides({});
            setCompletedSessions({});
            setActiveTab('slides');
          } else {
            alert('Failed to analyze slides: ' + (data.error || 'Unknown error'));
          }
        } catch (err: any) {
          alert('Network or processing error: ' + err.message);
        } finally {
          setLoading(false);
          setLoadingStatus('');
        }
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setLoading(false);
      setLoadingStatus('');
      alert('Error reading PDF: ' + err.message);
    }
  };

  // Filtered slides list
  const filteredSlides = useMemo(() => {
    return activePackage.slides.filter(slide => {
      if (filterHighYieldOnly && slide.importance !== 'CORE_FUNDAMENTAL') {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = slide.title.toLowerCase().includes(q);
        const matchesRule = slide.coreRule.toLowerCase().includes(q);
        const matchesCategory = slide.categoryTag.toLowerCase().includes(q);
        return matchesTitle || matchesRule || matchesCategory;
      }
      return true;
    });
  }, [activePackage.slides, filterHighYieldOnly, searchQuery]);

  const currentSlide = filteredSlides[selectedSlideIndex] || activePackage.slides[0];

  const totalMasteredCount = useMemo(() => {
    return Object.values(masteredSlides).filter(Boolean).length;
  }, [masteredSlides]);

  const totalCompletedSessionsCount = useMemo(() => {
    return Object.values(completedSessions).filter(Boolean).length;
  }, [completedSessions]);

  const totalSessionsCount = useMemo(() => {
    return activePackage.studyPlan.phases.reduce((acc, p) => acc + p.sessions.length, 0);
  }, [activePackage.studyPlan]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 text-slate-900">
      {/* Top Breadcrumb & Portal Identifier */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                <span>AcademicPrep University Tier · Slide Study Copilot</span>
                <span className="px-1.5 py-0.2 rounded bg-indigo-500 text-white text-[10px] font-bold">BETA</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Turn 100-Slide University Decks into a Laser-Focused Study Plan
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Pinpoint the fundamental 20% of slides professors actually test, eliminate slide fluff, 
                and execute an algorithmic spaced-repetition study plan with active recall challenges.
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
              <button
                onClick={() => setShowSettingsModal(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition flex items-center gap-2"
                title="Configure Gemini AI Key"
              >
                <Key className="w-3.5 h-3.5 text-amber-400" />
                <span>AI Key {customApiKey ? '✓ Set' : '(Optional)'}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-sm shadow-indigo-500/20"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Revision Sheet</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Course Selectors & Upload Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Quick Demo Preset Tabs */}
            <div className="space-y-1.5 flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Explore Tested University Decks:
              </span>
              <div className="flex flex-wrap gap-2">
                {UNIVERSITY_COURSE_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border flex items-center gap-1.5 ${
                      activePackage.id === preset.id
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-700 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className="font-mono font-bold text-[10px] px-1 rounded bg-white border border-slate-200 text-slate-700">
                      {preset.courseCode}
                    </span>
                    <span className="truncate max-w-[180px] sm:max-w-[220px]">{preset.deckTitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Drag & Drop Upload Trigger */}
            <div className="shrink-0 flex items-center gap-2">
              <input 
                ref={fileInputRef}
                type="file" 
                accept="application/pdf"
                className="hidden" 
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(file);
                }}
              />
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragOver(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) handleFileUpload(file);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`cursor-pointer px-5 py-3 rounded-xl border-2 border-dashed transition flex items-center gap-3 ${
                  isDragOver 
                    ? 'border-indigo-600 bg-indigo-50/60' 
                    : 'border-slate-300 hover:border-indigo-400 bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Upload className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">Upload Your University Slides (PDF)</p>
                  <p className="text-[11px] text-slate-500">Drag & drop or browse lecture file</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timetable Configuration Bar */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-400" />
                Study Plan Pacing:
              </span>

              {/* Days Until Exam */}
              <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Calendar className="w-3 h-3 text-slate-500" />
                <span className="text-slate-600">Exam In:</span>
                <select
                  value={daysUntilExam}
                  onChange={(e) => handleRecalculatePlan(Number(e.target.value), dailyMinutes, targetGrade)}
                  className="bg-transparent font-bold text-slate-900 cursor-pointer focus:outline-none"
                >
                  <option value={3}>3 Days (Express Cram)</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days (Recommended)</option>
                  <option value={14}>14 Days (Balanced)</option>
                  <option value={30}>30 Days (Semester Final)</option>
                </select>
              </div>

              {/* Daily Commitment */}
              <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Clock className="w-3 h-3 text-slate-500" />
                <span className="text-slate-600">Daily Study:</span>
                <select
                  value={dailyMinutes}
                  onChange={(e) => handleRecalculatePlan(daysUntilExam, Number(e.target.value), targetGrade)}
                  className="bg-transparent font-bold text-slate-900 cursor-pointer focus:outline-none"
                >
                  <option value={30}>30 mins / day</option>
                  <option value={45}>45 mins / day</option>
                  <option value={60}>60 mins / day</option>
                  <option value={90}>90 mins / day</option>
                </select>
              </div>

              {/* Target Grade */}
              <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Target className="w-3 h-3 text-slate-500" />
                <span className="text-slate-600">Target:</span>
                <select
                  value={targetGrade}
                  onChange={(e) => handleRecalculatePlan(daysUntilExam, dailyMinutes, e.target.value)}
                  className="bg-transparent font-bold text-slate-900 cursor-pointer focus:outline-none"
                >
                  <option value="A / First Class">A / First Class (90%+)</option>
                  <option value="B+ / Second Upper">B+ / Second Upper</option>
                  <option value="Pass">Solid Pass</option>
                </select>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
              <span>Deck: <strong className="text-slate-800">{activePackage.totalSlides} slides</strong></span>
              <span>•</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                {activePackage.highYieldCount} High-Yield ({Math.round((activePackage.highYieldCount / activePackage.totalSlides) * 100)}% of slides)
              </span>
              <span>•</span>
              <span>Mastery: <strong className="text-indigo-600">{totalMasteredCount}/{activePackage.slides.length}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Modal / State */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 mx-auto rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 animate-spin">
              <Zap className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Deconstructing Lecture Slides</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{loadingStatus}</p>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full w-2/3 animate-pulse rounded-full" />
            </div>
            <p className="text-[11px] text-slate-400">Filtering context slides • Extracting formulas • Structuring spaced repetition timetable</p>
          </div>
        </div>
      )}

      {/* Main Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-px scrollbar-none">
            <button
              onClick={() => setActiveTab('slides')}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'slides'
                  ? 'border-indigo-600 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>1. Slide-by-Slide Analyzer</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600 font-mono">
                {filteredSlides.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('plan')}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'plan'
                  ? 'border-indigo-600 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>2. Spaced Study Plan</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-700 font-mono">
                {totalCompletedSessionsCount}/{totalSessionsCount} Done
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cram')}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'cram'
                  ? 'border-indigo-600 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>3. 1-Page Exam Cheat Sheet</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'flashcards'
                  ? 'border-indigo-600 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Flame className="w-4 h-4 text-amber-500" />
              <span>4. Active Recall Drill</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SLIDE-BY-SLIDE ANALYZER */}
        {activeTab === 'slides' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Slide Navigation List */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search slide titles or concepts..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  onClick={() => setFilterHighYieldOnly(!filterHighYieldOnly)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition border flex items-center gap-1 shrink-0 ${
                    filterHighYieldOnly
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                  title="Only show Core Fundamental slides"
                >
                  <Flame className="w-3 h-3 text-emerald-600" />
                  <span>High-Yield</span>
                </button>
              </div>

              {/* Slide List */}
              <div className="max-h-[580px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
                {filteredSlides.map((slide, idx) => {
                  const isSelected = selectedSlideIndex === idx;
                  const isMastered = masteredSlides[slide.pageNumber];
                  const isCore = slide.importance === 'CORE_FUNDAMENTAL';
                  const isSupporting = slide.importance === 'SUPPORTING';

                  return (
                    <button
                      key={slide.pageNumber}
                      onClick={() => setSelectedSlideIndex(idx)}
                      className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between gap-2 border ${
                        isSelected 
                          ? 'bg-indigo-50/80 border-indigo-300 ring-1 ring-indigo-500/20' 
                          : 'bg-white border-slate-200/80 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {slide.pageNumber}
                        </span>
                        <div className="min-w-0">
                          <p className={`text-xs font-semibold truncate ${isSelected ? 'text-indigo-950 font-bold' : 'text-slate-800'}`}>
                            {slide.title}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                              isCore 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : isSupporting 
                                ? 'bg-amber-100 text-amber-800' 
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {isCore ? '★ Fundamental' : isSupporting ? 'Supporting' : 'Context'}
                            </span>
                            <span className="text-[10px] text-slate-400">• {slide.categoryTag}</span>
                          </div>
                        </div>
                      </div>

                      {isMastered && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}

                {filteredSlides.length === 0 && (
                  <div className="p-8 text-center text-xs text-slate-400">
                    No slides matching criteria.
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Deep Slide Breakdown */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              {currentSlide ? (
                <>
                  {/* Slide Header & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Slide {currentSlide.pageNumber} of {activePackage.totalSlides}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          currentSlide.importance === 'CORE_FUNDAMENTAL'
                            ? 'bg-emerald-100 text-emerald-800'
                            : currentSlide.importance === 'SUPPORTING'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {currentSlide.importance === 'CORE_FUNDAMENTAL' ? 'Core Fundamental (Must Know)' : currentSlide.importance}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                          Score: {currentSlide.importanceScore}/10
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {currentSlide.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => toggleMastered(currentSlide.pageNumber)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                          masteredSlides[currentSlide.pageNumber]
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{masteredSlides[currentSlide.pageNumber] ? 'Mastered' : 'Mark as Mastered'}</span>
                      </button>

                      {/* Previous / Next Slide */}
                      <button
                        disabled={selectedSlideIndex <= 0}
                        onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                        className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition"
                        title="Previous Slide"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-700" />
                      </button>
                      <button
                        disabled={selectedSlideIndex >= filteredSlides.length - 1}
                        onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                        className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition"
                        title="Next Slide"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-700" />
                      </button>
                    </div>
                  </div>

                  {/* 1. Core Rule (The distilled takeaway) */}
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-blue-600" />
                      The Core Takeaway (No Fluff)
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                      {currentSlide.coreRule}
                    </p>
                  </div>

                  {/* 2. Key Formulas & Definitions */}
                  {(currentSlide.keyFormulas.length > 0 || currentSlide.keyDefinitions.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentSlide.keyFormulas.length > 0 && (
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Mathematical / Algorithmic Formulas
                          </span>
                          <div className="space-y-1.5">
                            {currentSlide.keyFormulas.map((f, i) => (
                              <div key={i} className="font-mono text-xs bg-white px-3 py-2 rounded-lg border border-slate-200 text-indigo-900 font-bold overflow-x-auto">
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentSlide.keyDefinitions.length > 0 && (
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Core Terminology
                          </span>
                          <div className="space-y-2">
                            {currentSlide.keyDefinitions.map((d, i) => (
                              <div key={i} className="text-xs space-y-0.5">
                                <strong className="text-slate-900 font-bold">{d.term}:</strong>{' '}
                                <span className="text-slate-600">{d.definition}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. The Examiner Trap */}
                  {currentSlide.examTrap && (
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Examiner Trap & Common Pitfalls</span>
                      </div>
                      <p className="text-xs text-amber-900 leading-relaxed font-medium">
                        {currentSlide.examTrap}
                      </p>
                    </div>
                  )}

                  {/* 4. Active Recall Challenge Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-tr from-indigo-900 to-slate-900 text-white space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        Active Recall Test (Spaced Retrieval)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        ~{currentSlide.estimatedStudyMinutes} mins study weight
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold leading-relaxed text-indigo-50">
                      {currentSlide.activeRecallPrompt.question}
                    </p>

                    {currentSlide.activeRecallPrompt.hint && !revealedAnswers[currentSlide.pageNumber] && (
                      <p className="text-xs text-indigo-300/80 italic">
                        Hint: {currentSlide.activeRecallPrompt.hint}
                      </p>
                    )}

                    {revealedAnswers[currentSlide.pageNumber] ? (
                      <div className="pt-3 border-t border-indigo-800/80 space-y-3 animate-in fade-in">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                            Examiner Answer Model:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed bg-indigo-950/60 p-3 rounded-xl border border-indigo-800">
                            {currentSlide.activeRecallPrompt.answer}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-xs pt-1">
                          <button
                            onClick={() => toggleMastered(currentSlide.pageNumber)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition flex items-center gap-1.5"
                          >
                            <Check className="w-3 h-3" />
                            <span>I Recalled This Correctly</span>
                          </button>
                          <button
                            onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: false }))}
                            className="text-slate-400 hover:text-white transition"
                          >
                            Hide Answer
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: true }))}
                        className="w-full py-2.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-bold transition flex items-center justify-center gap-2 border border-indigo-500/30"
                      >
                        <span>Reveal Answer & Self-Evaluate</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="p-12 text-center text-slate-400 text-sm">
                  Select a slide to inspect fundamental concepts.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: SPACED STUDY PLAN */}
        {activeTab === 'plan' && (
          <div className="space-y-6">
            {/* Header info */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {daysUntilExam}-Day Spaced Retrieval Roadmap: {activePackage.deckTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Structured according to the Ebbinghaus Forgetting Curve: Foundations first, followed by mechanics, and closed-book retrieval drills.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-800">{totalCompletedSessionsCount} of {totalSessionsCount} Sessions Complete</p>
                  <p className="text-[11px] text-slate-500">{Math.round((totalCompletedSessionsCount / (totalSessionsCount || 1)) * 100)}% Execution</p>
                </div>
                <div className="w-24 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full rounded-full transition-all"
                    style={{ width: `${(totalCompletedSessionsCount / (totalSessionsCount || 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-6">
              {activePackage.studyPlan.phases.map((phase) => (
                <div key={phase.phaseNumber} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        {phase.days}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">{phase.name}</h4>
                      <p className="text-xs text-slate-500">{phase.objective}</p>
                    </div>
                  </div>

                  <div className="p-6 divide-y divide-slate-100 space-y-4">
                    {phase.sessions.map((session) => {
                      const sessionId = `${activePackage.id}-day-${session.day}`;
                      const isDone = completedSessions[sessionId];

                      return (
                        <div key={session.day} className="pt-4 first:pt-0 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() => toggleSession(sessionId)}
                                className={`w-6 h-6 rounded-lg border flex items-center justify-center transition mt-0.5 shrink-0 ${
                                  isDone
                                    ? 'bg-emerald-600 border-emerald-600 text-white'
                                    : 'border-slate-300 hover:border-slate-400 bg-white'
                                }`}
                              >
                                {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </button>
                              <div>
                                <h5 className={`text-sm font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                                  Day {session.day}: {session.title}
                                </h5>
                                <p className="text-xs text-slate-500 mt-0.5">{session.focus}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                {session.allocatedMinutes} mins
                              </span>
                            </div>
                          </div>

                          {/* Slide tags & Checklist */}
                          <div className="ml-9 space-y-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-[11px] font-bold text-slate-400">Target Slides:</span>
                              {session.slideNumbers.map(page => (
                                <button
                                  key={page}
                                  onClick={() => {
                                    const idx = activePackage.slides.findIndex(s => s.pageNumber === page);
                                    if (idx !== -1) {
                                      setSelectedSlideIndex(idx);
                                      setActiveTab('slides');
                                    }
                                  }}
                                  className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-800 transition"
                                >
                                  Slide {page}
                                </button>
                              ))}
                            </div>

                            <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 space-y-1.5">
                              {session.checklist.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 1-PAGE EXAM CHEAT SHEET */}
        {activeTab === 'cram' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
            <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {activePackage.courseCode} · Rapid Revision Synthesis
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                  1-Page Exam Cram Sheet: {activePackage.deckTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  High-density summary of governing laws, mandatory formulas, and top examiner traps.
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-2 self-start sm:self-auto"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Clean PDF</span>
              </button>
            </div>

            {/* Must-Memorize Theorems */}
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Must-Memorize Principles & Governing Laws
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activePackage.cramSheetSummary.mustMemorizeTheorems.map((theorem, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed">
                    <strong className="text-slate-950 font-bold block mb-1">Rule #{idx + 1}:</strong>
                    {theorem}
                  </div>
                ))}
              </div>
            </div>

            {/* Formula Sheet */}
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-600" />
                Governing Formulas to Recite
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {activePackage.cramSheetSummary.formulasToRecite.map((formula, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-center space-y-1">
                    <span className="text-[10px] text-emerald-800 uppercase font-bold tracking-wider">Formula #{idx + 1}</span>
                    <p className="font-mono text-xs font-bold text-slate-900 break-words">{formula}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Frequency Exam Questions */}
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Top High-Frequency Exam Questions
              </h4>
              <div className="space-y-2">
                {activePackage.cramSheetSummary.highFrequencyQuestions.map((q, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <span className="font-semibold leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ACTIVE RECALL DRILL ARENA */}
        {activeTab === 'flashcards' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                Active Retrieval Arena
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Test Your Memory on Every Core Slide
              </h3>
              <p className="text-xs text-slate-500">
                Cycle through each slide's active recall challenge. Do not look at the answer until you say it out loud!
              </p>
            </div>

            {/* Flashcard Card */}
            {currentSlide && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-6 text-center">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                  <span>Card {selectedSlideIndex + 1} of {filteredSlides.length}</span>
                  <span className="font-mono font-bold text-indigo-600">Slide {currentSlide.pageNumber}</span>
                  <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                    masteredSlides[currentSlide.pageNumber] ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {masteredSlides[currentSlide.pageNumber] ? '✓ Mastered' : 'Not Mastered'}
                  </span>
                </div>

                <div className="py-4 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Topic: {currentSlide.title}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {currentSlide.activeRecallPrompt.question}
                  </h4>
                  {currentSlide.activeRecallPrompt.hint && !revealedAnswers[currentSlide.pageNumber] && (
                    <p className="text-xs text-slate-400 italic">
                      Hint: {currentSlide.activeRecallPrompt.hint}
                    </p>
                  )}
                </div>

                {revealedAnswers[currentSlide.pageNumber] ? (
                  <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in">
                    <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-left space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">Model Answer:</span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {currentSlide.activeRecallPrompt.answer}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          toggleMastered(currentSlide.pageNumber);
                          if (selectedSlideIndex < filteredSlides.length - 1) {
                            setSelectedSlideIndex(prev => prev + 1);
                          }
                        }}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>I Knew It! (Next Card)</span>
                      </button>

                      <button
                        onClick={() => {
                          if (selectedSlideIndex < filteredSlides.length - 1) {
                            setSelectedSlideIndex(prev => prev + 1);
                          }
                        }}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                      >
                        Needs Revision
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: true }))}
                    className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-sm shadow-indigo-500/20"
                  >
                    Reveal Answer & Check Recall
                  </button>
                )}

                {/* Card Navigation */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={selectedSlideIndex <= 0}
                    onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                    className="text-xs text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>

                  <div className="flex gap-1">
                    {filteredSlides.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          i === selectedSlideIndex ? 'w-4 bg-indigo-600' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    disabled={selectedSlideIndex >= filteredSlides.length - 1}
                    onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                    className="text-xs text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* API Key Configuration Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">Google Gemini API Key</h3>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              AcademicPrep can use your Google Gemini Flash key for deep multimodal PDF slide parsing (reading equations, tables, and slide screenshots directly).
            </p>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700">Enter Gemini API Key:</label>
              <input
                type="password"
                value={customApiKey}
                onChange={(e) => setCustomApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-mono"
              />
              <p className="text-[10px] text-slate-400">
                Key is stored only in your local browser storage and sent directly to the serverless analyzer.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => saveApiKey('')}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 transition"
              >
                Clear Key
              </button>
              <button
                onClick={() => saveApiKey(customApiKey)}
                className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition"
              >
                Save Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
