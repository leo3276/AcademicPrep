'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { 
  Upload, 
  FileText, 
  Check, 
  AlertCircle, 
  Printer, 
  Key, 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  Clock, 
  Layers, 
  Brain, 
  Search,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { 
  CompleteSlideStudyPackage, 
  SlideAnalysis, 
  generateAlgorithmicStudyPlan 
} from '@/lib/universitySlides';

export default function UniversityPortalPage() {
  const [activePackage, setActivePackage] = useState<CompleteSlideStudyPackage | null>(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'slides' | 'plan' | 'cram' | 'flashcards'>('slides');

  // Study plan pacing settings
  const [daysUntilExam, setDaysUntilExam] = useState(7);
  const [dailyMinutes, setDailyMinutes] = useState(45);
  const [targetGrade, setTargetGrade] = useState('A / First Class');
  const [filterHighYieldOnly, setFilterHighYieldOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive user tracking
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [masteredSlides, setMasteredSlides] = useState<Record<number, boolean>>({});
  const [completedSessions, setCompletedSessions] = useState<Record<string, boolean>>({});

  // File upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [customApiKey, setCustomApiKey] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedKey = localStorage.getItem('academicprep_gemini_api_key');
      if (savedKey) setCustomApiKey(savedKey);

      if (activePackage) {
        const savedMastery = localStorage.getItem(`academicprep_mastery_${activePackage.id}`);
        if (savedMastery) {
          try { setMasteredSlides(JSON.parse(savedMastery)); } catch {}
        }
        const savedSessions = localStorage.getItem(`academicprep_sessions_${activePackage.id}`);
        if (savedSessions) {
          try { setCompletedSessions(JSON.parse(savedSessions)); } catch {}
        }
      }
    }
  }, [activePackage?.id]);

  const saveApiKey = (key: string) => {
    setCustomApiKey(key);
    if (typeof window !== 'undefined') {
      if (key) localStorage.setItem('academicprep_gemini_api_key', key);
      else localStorage.removeItem('academicprep_gemini_api_key');
    }
    setShowSettingsModal(false);
  };

  const toggleMastered = (pageNumber: number) => {
    if (!activePackage) return;
    setMasteredSlides(prev => {
      const updated = { ...prev, [pageNumber]: !prev[pageNumber] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(`academicprep_mastery_${activePackage.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const toggleSession = (sessionId: string) => {
    if (!activePackage) return;
    setCompletedSessions(prev => {
      const updated = { ...prev, [sessionId]: !prev[sessionId] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(`academicprep_sessions_${activePackage.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const handleRecalculatePlan = (days: number, mins: number, grade: string) => {
    setDaysUntilExam(days);
    setDailyMinutes(mins);
    setTargetGrade(grade);

    if (activePackage) {
      const newPlan = generateAlgorithmicStudyPlan(activePackage.slides, days, mins, grade);
      setActivePackage(prev => prev ? ({ ...prev, studyPlan: newPlan }) : null);
    }
  };

  const handleFileDrop = (file: File) => {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
      alert('Please select a valid PDF lecture slides file.');
      return;
    }
    setSelectedFile(file);
  };

  const handleProcessUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setLoadingStatus('Reading lecture slide pages...');

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Data = reader.result as string;
          setLoadingStatus('Deconstructing slides page-by-page and generating study plan...');

          const res = await fetch('/api/university/analyze-slides', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(customApiKey ? { 'x-gemini-api-key': customApiKey } : {})
            },
            body: JSON.stringify({
              fileBase64: base64Data,
              fileName: selectedFile.name,
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
      reader.readAsDataURL(selectedFile);
    } catch (err: any) {
      setLoading(false);
      setLoadingStatus('');
      alert('Error reading PDF: ' + err.message);
    }
  };

  const filteredSlides = useMemo(() => {
    if (!activePackage) return [];
    return activePackage.slides.filter(slide => {
      if (filterHighYieldOnly && slide.importance !== 'CORE_FUNDAMENTAL') {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return slide.title.toLowerCase().includes(q) || 
               slide.coreRule.toLowerCase().includes(q) || 
               slide.categoryTag.toLowerCase().includes(q);
      }
      return true;
    });
  }, [activePackage, filterHighYieldOnly, searchQuery]);

  const currentSlide = filteredSlides[selectedSlideIndex] || activePackage?.slides[0];

  const totalMasteredCount = useMemo(() => {
    return Object.values(masteredSlides).filter(Boolean).length;
  }, [masteredSlides]);

  const totalCompletedSessionsCount = useMemo(() => {
    return Object.values(completedSessions).filter(Boolean).length;
  }, [completedSessions]);

  const totalSessionsCount = useMemo(() => {
    if (!activePackage) return 0;
    return activePackage.studyPlan.phases.reduce((acc, p) => acc + p.sessions.length, 0);
  }, [activePackage]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-24 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. CLEAN MINIMAL HEADER
      ───────────────────────────────────────────────────────────── */}
      <header className="border-b border-neutral-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>AcademicPrep</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="font-medium text-neutral-900">University Slide Studio</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSettingsModal(true)}
              className="text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1.5"
              title="Configure Gemini API key"
            >
              <Key className="w-3.5 h-3.5 text-neutral-400" />
              <span>{customApiKey ? 'API Key Active' : 'API Key'}</span>
            </button>

            {activePackage && (
              <button
                onClick={() => window.print()}
                className="text-neutral-600 hover:text-neutral-900 transition flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print Summary</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. EMPTY STATE: CLEAN MINIMAL UPLOAD WORKSPACE
      ───────────────────────────────────────────────────────────── */}
      {!activePackage && (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 space-y-10">
          <div className="space-y-3 text-center max-w-xl mx-auto">
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              Slide Intelligence &amp; Spaced Planner
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Deconstruct your lecture slides.
              <br />
              <span className="text-neutral-500">Extract the exam fundamentals.</span>
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed pt-1">
              Upload university lecture slides (PDF). The system pinpoints the core 20% of slides examiners test, eliminates context fluff, and builds an active recall study timetable.
            </p>
          </div>

          {/* Minimal Drag & Drop Box */}
          <div className="space-y-6">
            <input 
              ref={fileInputRef}
              type="file" 
              accept="application/pdf"
              className="hidden" 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileDrop(file);
              }}
            />

            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleFileDrop(file);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`cursor-pointer rounded-2xl border border-dashed p-10 sm:p-14 text-center transition flex flex-col items-center justify-center gap-3 ${
                isDragOver 
                  ? 'border-neutral-900 bg-neutral-50' 
                  : selectedFile 
                  ? 'border-neutral-900 bg-neutral-50/50' 
                  : 'border-neutral-300 hover:border-neutral-500 bg-white'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center">
                <Upload className="w-4 h-4" />
              </div>

              {selectedFile ? (
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-neutral-900">{selectedFile.name}</p>
                  <p className="text-xs text-neutral-500 font-mono">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to analyze
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-neutral-900">
                    Drop lecture slide PDF here, or <span className="underline underline-offset-4">browse</span>
                  </p>
                  <p className="text-xs text-neutral-500">Supports multi-page slide decks (up to 150+ pages)</p>
                </div>
              )}
            </div>

            {/* Pacing Configuration Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                <label className="text-neutral-500 font-medium block">Days Until Exam</label>
                <select
                  value={daysUntilExam}
                  onChange={(e) => setDaysUntilExam(Number(e.target.value))}
                  className="w-full font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value={3}>3 Days (Express Cram)</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days (Standard)</option>
                  <option value={14}>14 Days (Balanced)</option>
                  <option value={30}>30 Days (Semester Final)</option>
                </select>
              </div>

              <div className="p-3 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                <label className="text-neutral-500 font-medium block">Daily Time Budget</label>
                <select
                  value={dailyMinutes}
                  onChange={(e) => setDailyMinutes(Number(e.target.value))}
                  className="w-full font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value={30}>30 mins / day</option>
                  <option value={45}>45 mins / day</option>
                  <option value={60}>60 mins / day</option>
                  <option value={90}>90 mins / day</option>
                </select>
              </div>

              <div className="p-3 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                <label className="text-neutral-500 font-medium block">Target Grade</label>
                <select
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className="w-full font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="A / First Class">A / First Class (90%+)</option>
                  <option value="B+ / Second Upper">B+ / Second Upper</option>
                  <option value="Pass">Solid Pass</option>
                </select>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center pt-2">
              <button
                disabled={!selectedFile || loading}
                onClick={handleProcessUpload}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold transition tracking-tight"
              >
                {loading ? 'Analyzing Slides...' : 'Analyze Lecture Slides'}
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. ACTIVE STATE: ANALYZED SLIDE DECK WORKSPACE
      ───────────────────────────────────────────────────────────── */}
      {activePackage && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
          
          {/* Deck Header & Metadata Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
            <div className="space-y-1.5">
              <button
                onClick={() => {
                  setActivePackage(null);
                  setSelectedFile(null);
                }}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Upload a different slide deck</span>
              </button>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                {activePackage.deckTitle}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-mono">
                <span>{activePackage.totalSlides} slides total</span>
                <span>•</span>
                <span className="text-neutral-900 font-bold">
                  {activePackage.highYieldCount} core fundamentals ({Math.round((activePackage.highYieldCount / activePackage.totalSlides) * 100)}% signal)
                </span>
                <span>•</span>
                <span>{activePackage.studyPlan.daysUntilExam}-day plan</span>
                <span>•</span>
                <span>Mastery: {totalMasteredCount}/{activePackage.slides.length}</span>
              </div>
            </div>

            {/* Quick Pacing Recalibration */}
            <div className="flex items-center gap-2 self-start md:self-auto text-xs">
              <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3 h-3 text-neutral-400" />
                <select
                  value={daysUntilExam}
                  onChange={(e) => handleRecalculatePlan(Number(e.target.value), dailyMinutes, targetGrade)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                >
                  <option value={3}>3 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days</option>
                  <option value={14}>14 Days</option>
                  <option value={30}>30 Days</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg">
                <Clock className="w-3 h-3 text-neutral-400" />
                <select
                  value={dailyMinutes}
                  onChange={(e) => handleRecalculatePlan(daysUntilExam, Number(e.target.value), targetGrade)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                >
                  <option value={30}>30m/day</option>
                  <option value={45}>45m/day</option>
                  <option value={60}>60m/day</option>
                  <option value={90}>90m/day</option>
                </select>
              </div>
            </div>
          </div>

          {/* Minimal Navigation Tabs */}
          <div className="flex items-center gap-6 border-b border-neutral-200 text-xs font-medium">
            <button
              onClick={() => setActiveTab('slides')}
              className={`pb-3 border-b-2 transition ${
                activeTab === 'slides' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Slides ({filteredSlides.length})
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`pb-3 border-b-2 transition ${
                activeTab === 'plan' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Study Plan ({totalCompletedSessionsCount}/{totalSessionsCount} Done)
            </button>
            <button
              onClick={() => setActiveTab('cram')}
              className={`pb-3 border-b-2 transition ${
                activeTab === 'cram' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              1-Page Cheat Sheet
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`pb-3 border-b-2 transition ${
                activeTab === 'flashcards' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Active Recall Drill
            </button>
          </div>

          {/* TAB 1: SLIDES (PAGE BY PAGE) */}
          {activeTab === 'slides' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Slide Index List */}
              <div className="lg:col-span-4 border border-neutral-200 rounded-xl p-3 space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-neutral-400" />
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter slides..."
                      className="w-full pl-8 pr-2 py-1 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <button
                    onClick={() => setFilterHighYieldOnly(!filterHighYieldOnly)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-medium transition border ${
                      filterHighYieldOnly
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    Core Only
                  </button>
                </div>

                <div className="max-h-[560px] overflow-y-auto space-y-1 pr-1 scrollbar-thin">
                  {filteredSlides.map((slide, idx) => {
                    const isSelected = selectedSlideIndex === idx;
                    const isMastered = masteredSlides[slide.pageNumber];
                    const isCore = slide.importance === 'CORE_FUNDAMENTAL';

                    return (
                      <button
                        key={slide.pageNumber}
                        onClick={() => setSelectedSlideIndex(idx)}
                        className={`w-full text-left p-2.5 rounded-lg transition flex items-center justify-between gap-2 text-xs ${
                          isSelected 
                            ? 'bg-neutral-900 text-white' 
                            : 'hover:bg-neutral-100 text-neutral-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`font-mono text-[11px] shrink-0 ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                            {String(slide.pageNumber).padStart(2, '0')}
                          </span>
                          <span className="truncate font-medium">{slide.title}</span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {isCore && (
                            <span className={`text-[9px] uppercase font-mono px-1 py-0.2 rounded ${
                              isSelected ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                            }`}>
                              Core
                            </span>
                          )}
                          {isMastered && (
                            <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-900'}`} />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Slide Editorial View */}
              <div className="lg:col-span-8 border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-6">
                {currentSlide ? (
                  <>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                          <span>SLIDE {String(currentSlide.pageNumber).padStart(2, '0')}</span>
                          <span>•</span>
                          <span className="text-neutral-900 font-medium">
                            {currentSlide.importance === 'CORE_FUNDAMENTAL' ? 'CORE FUNDAMENTAL' : currentSlide.importance}
                          </span>
                          <span>•</span>
                          <span>SCORE {currentSlide.importanceScore}/10</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                          {currentSlide.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => toggleMastered(currentSlide.pageNumber)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition border flex items-center gap-1.5 ${
                            masteredSlides[currentSlide.pageNumber]
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{masteredSlides[currentSlide.pageNumber] ? 'Mastered' : 'Mark Mastered'}</span>
                        </button>

                        <button
                          disabled={selectedSlideIndex <= 0}
                          onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                          className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition"
                        >
                          <ChevronLeft className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button
                          disabled={selectedSlideIndex >= filteredSlides.length - 1}
                          onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                          className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition"
                        >
                          <ChevronRight className="w-4 h-4 text-neutral-600" />
                        </button>
                      </div>
                    </div>

                    {/* 1. Core Rule */}
                    <div className="border-l-2 border-neutral-900 pl-4 py-1 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                        Core Principle
                      </span>
                      <p className="text-sm text-neutral-900 font-medium leading-relaxed">
                        {currentSlide.coreRule}
                      </p>
                    </div>

                    {/* 2. Formulas & Definitions */}
                    {(currentSlide.keyFormulas.length > 0 || currentSlide.keyDefinitions.length > 0) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {currentSlide.keyFormulas.length > 0 && (
                          <div className="border border-neutral-200 rounded-lg p-3.5 space-y-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                              Governing Equations
                            </span>
                            <div className="space-y-1.5">
                              {currentSlide.keyFormulas.map((f, i) => (
                                <div key={i} className="font-mono text-xs bg-neutral-50 px-2.5 py-1.5 rounded border border-neutral-100 text-neutral-900 font-semibold overflow-x-auto">
                                  {f}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentSlide.keyDefinitions.length > 0 && (
                          <div className="border border-neutral-200 rounded-lg p-3.5 space-y-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                              Definitions
                            </span>
                            <div className="space-y-1.5">
                              {currentSlide.keyDefinitions.map((d, i) => (
                                <div key={i} className="text-xs leading-relaxed">
                                  <strong className="text-neutral-900 font-semibold">{d.term}:</strong>{' '}
                                  <span className="text-neutral-600">{d.definition}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 3. The Examiner Trap */}
                    {currentSlide.examTrap && (
                      <div className="border border-neutral-200 bg-neutral-50/50 rounded-lg p-4 space-y-1 text-xs">
                        <div className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5 text-neutral-600" />
                          <span>Examiner Trap &amp; Common Misconception</span>
                        </div>
                        <p className="text-neutral-600 leading-relaxed pl-5">
                          {currentSlide.examTrap}
                        </p>
                      </div>
                    )}

                    {/* 4. Active Recall Challenge Card */}
                    <div className="border border-neutral-200 rounded-xl p-5 space-y-4">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span>ACTIVE RETRIEVAL PROMPT</span>
                        <span>~{currentSlide.estimatedStudyMinutes}m study weight</span>
                      </div>

                      <p className="text-sm font-medium text-neutral-900 leading-relaxed">
                        {currentSlide.activeRecallPrompt.question}
                      </p>

                      {revealedAnswers[currentSlide.pageNumber] ? (
                        <div className="pt-3 border-t border-neutral-100 space-y-3">
                          <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-100 text-xs text-neutral-800 leading-relaxed">
                            <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1">
                              Model Answer
                            </span>
                            {currentSlide.activeRecallPrompt.answer}
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <button
                              onClick={() => toggleMastered(currentSlide.pageNumber)}
                              className="text-neutral-900 font-semibold underline underline-offset-4"
                            >
                              {masteredSlides[currentSlide.pageNumber] ? 'Marked as Mastered' : 'Mark as Mastered'}
                            </button>
                            <button
                              onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: false }))}
                              className="text-neutral-400 hover:text-neutral-700 transition"
                            >
                              Hide answer
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: true }))}
                          className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                        >
                          Show Answer &amp; Self-Evaluate
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="p-12 text-center text-xs text-neutral-400">
                    Select a slide from the index.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: STUDY PLAN */}
          {activeTab === 'plan' && (
            <div className="space-y-6">
              {activePackage.studyPlan.phases.map((phase) => (
                <div key={phase.phaseNumber} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <div className="bg-neutral-50 px-5 py-3 border-b border-neutral-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono text-neutral-400 uppercase text-[10px]">{phase.days}</span>
                      <h4 className="font-bold text-neutral-900 text-sm mt-0.5">{phase.name}</h4>
                    </div>
                    <span className="text-neutral-500">{phase.objective}</span>
                  </div>

                  <div className="p-5 divide-y divide-neutral-100 space-y-4 text-xs">
                    {phase.sessions.map((session) => {
                      const sessionId = `${activePackage.id}-day-${session.day}`;
                      const isDone = completedSessions[sessionId];

                      return (
                        <div key={session.day} className="pt-4 first:pt-0 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-2.5">
                              <button
                                onClick={() => toggleSession(sessionId)}
                                className={`w-4 h-4 rounded border flex items-center justify-center transition mt-0.5 shrink-0 ${
                                  isDone ? 'bg-neutral-900 border-neutral-900 text-white' : 'border-neutral-300'
                                }`}
                              >
                                {isDone && <Check className="w-3 h-3" />}
                              </button>
                              <div>
                                <h5 className={`font-semibold ${isDone ? 'line-through text-neutral-400' : 'text-neutral-900'}`}>
                                  Day {session.day}: {session.title}
                                </h5>
                                <p className="text-neutral-500 mt-0.5">{session.focus}</p>
                              </div>
                            </div>

                            <span className="font-mono text-neutral-400 text-[11px] shrink-0">
                              {session.allocatedMinutes}m
                            </span>
                          </div>

                          <div className="ml-6 space-y-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] text-neutral-400 font-mono">Slides:</span>
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
                                  className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition"
                                >
                                  {String(page).padStart(2, '0')}
                                </button>
                              ))}
                            </div>

                            <div className="bg-neutral-50/50 p-2.5 rounded border border-neutral-100 space-y-1 text-neutral-600">
                              {session.checklist.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-1.5">
                                  <div className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
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
          )}

          {/* TAB 3: 1-PAGE CHEAT SHEET */}
          {activeTab === 'cram' && (
            <div className="border border-neutral-200 rounded-xl p-8 space-y-8">
              <div className="border-b border-neutral-200 pb-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase text-neutral-400">High-Yield Revision Sheet</p>
                  <h3 className="text-xl font-bold text-neutral-900 mt-0.5">{activePackage.deckTitle}</h3>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-xs font-medium transition"
                >
                  Print / Export PDF
                </button>
              </div>

              {/* Theorems */}
              <div className="space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Must-Memorize Principles
                </h4>
                <div className="space-y-2 text-xs leading-relaxed">
                  {activePackage.cramSheetSummary.mustMemorizeTheorems.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 text-neutral-800">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulas */}
              <div className="space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Essential Equations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activePackage.cramSheetSummary.formulasToRecite.map((f, idx) => (
                    <div key={idx} className="font-mono text-xs p-3 rounded-lg border border-neutral-100 bg-neutral-50 text-neutral-900 font-semibold text-center">
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Frequency Questions */}
              <div className="space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Key Examiner Questions
                </h4>
                <div className="space-y-2 text-xs leading-relaxed">
                  {activePackage.cramSheetSummary.highFrequencyQuestions.map((q, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 text-neutral-800 flex items-start gap-2">
                      <span className="font-mono text-neutral-400 shrink-0">Q{idx + 1}.</span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACTIVE RECALL DRILL */}
          {activeTab === 'flashcards' && (
            <div className="max-w-xl mx-auto space-y-6 pt-6">
              {currentSlide && (
                <div className="border border-neutral-200 rounded-2xl p-8 space-y-6 text-center">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-neutral-100 pb-3">
                    <span>Card {selectedSlideIndex + 1} of {filteredSlides.length}</span>
                    <span>Slide {String(currentSlide.pageNumber).padStart(2, '0')}</span>
                    <span>{masteredSlides[currentSlide.pageNumber] ? 'Mastered' : 'Unmastered'}</span>
                  </div>

                  <div className="py-6 space-y-3">
                    <p className="text-xs text-neutral-400 font-mono uppercase">{currentSlide.title}</p>
                    <h4 className="text-lg font-semibold text-neutral-900 leading-snug">
                      {currentSlide.activeRecallPrompt.question}
                    </h4>
                  </div>

                  {revealedAnswers[currentSlide.pageNumber] ? (
                    <div className="pt-4 border-t border-neutral-100 space-y-4 animate-in fade-in">
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-left text-xs text-neutral-800 leading-relaxed">
                        <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1">Answer</span>
                        {currentSlide.activeRecallPrompt.answer}
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => {
                            toggleMastered(currentSlide.pageNumber);
                            if (selectedSlideIndex < filteredSlides.length - 1) {
                              setSelectedSlideIndex(prev => prev + 1);
                            }
                          }}
                          className="px-5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                        >
                          I Knew This
                        </button>
                        <button
                          onClick={() => {
                            if (selectedSlideIndex < filteredSlides.length - 1) {
                              setSelectedSlideIndex(prev => prev + 1);
                            }
                          }}
                          className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs transition"
                        >
                          Review Later
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: true }))}
                      className="px-6 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                    >
                      Reveal Answer
                    </button>
                  )}

                  <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                    <button
                      disabled={selectedSlideIndex <= 0}
                      onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                      className="hover:text-neutral-900 disabled:opacity-30 transition flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                    <button
                      disabled={selectedSlideIndex >= filteredSlides.length - 1}
                      onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                      className="hover:text-neutral-900 disabled:opacity-30 transition flex items-center gap-1"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. MINIMAL API KEY MODAL
      ───────────────────────────────────────────────────────────── */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl text-neutral-900">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Gemini API Key</h3>
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="text-neutral-400 hover:text-neutral-700 text-xs"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              AcademicPrep natively processes slides using Google Gemini Flash. You can optionally supply your own key.
            </p>
            <input
              type="password"
              value={customApiKey}
              onChange={(e) => setCustomApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 font-mono"
            />
            <div className="flex items-center justify-end gap-2 pt-2 text-xs">
              <button
                onClick={() => saveApiKey('')}
                className="text-neutral-500 hover:text-neutral-800 px-3 py-1.5"
              >
                Clear
              </button>
              <button
                onClick={() => saveApiKey(customApiKey)}
                className="px-4 py-1.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="text-center space-y-2">
            <div className="w-6 h-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-medium text-neutral-800">{loadingStatus}</p>
          </div>
        </div>
      )}
    </div>
  );
}
