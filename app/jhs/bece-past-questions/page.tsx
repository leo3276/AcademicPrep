'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  BECE_PAPERS_CATALOG, 
  BECEPastQuestion,
  getAllBeceYears,
  getBecePaperMeta
} from '@/lib/becePastQuestionsData';
import { getStoredBeceQuestions } from '@/lib/adminStore';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';
import { 
  BookOpen, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Award, 
  HelpCircle, 
  Sparkles, 
  FileText, 
  Check, 
  RotateCcw,
  Flag,
  ArrowRight,
  Search,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BecePastQuestionsPage() {
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedPaper, setSelectedPaper] = useState<1 | 2>(1);
  const [practiceMode, setPracticeMode] = useState<'study' | 'timed_cbt'>('study');
  const [searchQuery, setSearchQuery] = useState('');
  const [allQuestions, setAllQuestions] = useState<BECEPastQuestion[]>([]);
  const [mounted, setMounted] = useState(false);

  // Timed CBT State
  const [cbtStarted, setCbtStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  const availableYears = getAllBeceYears();

  useEffect(() => {
    setMounted(true);
    // Load dynamically from admin storage
    const stored = getStoredBeceQuestions();
    setAllQuestions(stored);
  }, []);

  // Filter questions by subject, year, and paper
  const rawQuestions = useMemo(() => {
    return allQuestions.filter(
      (q) => q.subjectId === selectedSubject && q.year === selectedYear && q.paper === selectedPaper
    );
  }, [allQuestions, selectedSubject, selectedYear, selectedPaper]);

  // Apply search query in study mode
  const questions = useMemo(() => {
    if (!searchQuery.trim() || (selectedPaper === 1 && cbtStarted)) {
      return rawQuestions;
    }
    const q = searchQuery.toLowerCase();
    return rawQuestions.filter(
      (item) =>
        item.questionText.toLowerCase().includes(q) ||
        item.subConcept.toLowerCase().includes(q) ||
        (item.explanation && item.explanation.toLowerCase().includes(q))
    );
  }, [rawQuestions, searchQuery, selectedPaper, cbtStarted]);

  const subjectMeta = CURRICULUM_SUBJECTS.find((s) => s.id === selectedSubject);
  const paperMeta = getBecePaperMeta(selectedYear, selectedSubject) || 
    BECE_PAPERS_CATALOG.find((p) => p.subjectId === selectedSubject && p.year === selectedYear);

  const isCcp = selectedYear >= 2024;

  const startCbt = () => {
    if (questions.length === 0) return;
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    const durationMins = paperMeta?.paper1DurationMinutes || 45;
    setTimeLeft(durationMins * 60);
    setCbtStarted(true);
  };

  const handleSelectOption = (qId: string, opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOption) {
        correct++;
      }
    });
    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percentage };
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    const { percentage } = calculateScore();
    if (percentage >= 60) {
      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {
        // safe fallback
      }
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const { correct, total, percentage } = calculateScore();
  const currentQ = questions[currentIdx];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/jhs"
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to JHS Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-medium text-slate-500">
            {allQuestions.length} Admin Questions Uploaded
          </span>
          <span className="text-xs font-mono font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
            WAEC BECE Portal
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              WAEC BECE Examination Portal
            </span>
          </div>

          {/* Syllabus Era Indicator Badge */}
          {isCcp ? (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>New Common Core Programme (CCP)</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span>Standard GES JHS Syllabus</span>
            </span>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            BECE Past Questions & Official Marking Schemes
          </h1>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed mt-1">
            Questions and marking schemes are published directly by your administrator. Select a subject and exam year below to study or take a timed CBT simulation.
          </p>
        </div>

        {/* Filters Strip */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          {/* Subject Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {['math', 'science', 'english', 'social', 'ict'].map((subId) => {
              const s = CURRICULUM_SUBJECTS.find((item) => item.id === subId);
              return (
                <button
                  key={subId}
                  onClick={() => { setSelectedSubject(subId); setCbtStarted(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    selectedSubject === subId
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {s?.name || subId.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Year Selector Carousel / Dropdown */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Exam Year:</span>
              </span>

              <select
                value={selectedYear}
                onChange={(e) => { setSelectedYear(Number(e.target.value)); setCbtStarted(false); }}
                className="text-xs font-mono font-semibold bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>
                    BECE {yr} {yr >= 2024 ? '(CCP)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Paper 1 vs Paper 2 Selector */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
              <button
                onClick={() => { setSelectedPaper(1); setCbtStarted(false); }}
                className={`px-3 py-1 rounded-md transition ${
                  selectedPaper === 1 ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600'
                }`}
              >
                Paper 1 (Objectives CBT)
              </button>
              <button
                onClick={() => { setSelectedPaper(2); setCbtStarted(false); }}
                className={`px-3 py-1 rounded-md transition ${
                  selectedPaper === 2 ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600'
                }`}
              >
                Paper 2 (Theory & Rubrics)
              </button>
            </div>
          </div>

          {/* 19-Year Horizontal Scrollable Pill List */}
          <div className="overflow-x-auto pb-1.5 pt-1 -mx-2 px-2 scrollbar-thin">
            <div className="flex items-center gap-1 min-w-max">
              {availableYears.map((yr) => {
                const isSelected = selectedYear === yr;
                return (
                  <button
                    key={yr}
                    onClick={() => { setSelectedYear(yr); setCbtStarted(false); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-2xs font-bold'
                        : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    {yr}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Search & Paper Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </div>

          <span className="text-xs text-slate-500 hidden sm:inline">
            Showing <strong className="text-slate-800">{questions.length}</strong> questions for{' '}
            <strong className="text-slate-900">BECE {selectedYear} {subjectMeta?.name}</strong>
          </span>
        </div>

        {selectedPaper === 1 && questions.length > 0 && !cbtStarted && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-600">Mode:</span>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => setPracticeMode('study')}
                className={`px-3 py-1 rounded-md transition ${
                  practiceMode === 'study' ? 'bg-white text-slate-900 font-semibold shadow-2xs' : 'text-slate-600'
                }`}
              >
                Study Mode
              </button>
              <button
                onClick={() => setPracticeMode('timed_cbt')}
                className={`px-3 py-1 rounded-md transition ${
                  practiceMode === 'timed_cbt' ? 'bg-white text-slate-900 font-semibold shadow-2xs' : 'text-slate-600'
                }`}
              >
                Timed CBT
              </button>
            </div>

            {practiceMode === 'timed_cbt' && (
              <button
                onClick={startCbt}
                className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
              >
                <span>Start CBT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* PAPER 1: TIMED CBT ACTIVE SIMULATION */}
      {selectedPaper === 1 && cbtStarted && !isSubmitted && currentQ && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">
                Question {currentIdx + 1} of {questions.length}
              </span>
              <span className="text-xs font-semibold text-slate-800">
                BECE {selectedYear} • {subjectMeta?.name} Paper 1
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggleFlag(currentQ.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition ${
                  flagged[currentQ.id]
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flag className="w-3 h-3" />
                <span>{flagged[currentQ.id] ? 'Flagged' : 'Flag'}</span>
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{timeFormatted}</span>
              </div>
            </div>
          </div>

          {/* Number Palette */}
          <div className="flex flex-wrap gap-1.5">
            {questions.map((q, idx) => {
              const isAnswered = Boolean(selectedAnswers[q.id]);
              const isCurrent = idx === currentIdx;
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all relative ${
                    isCurrent
                      ? 'bg-slate-900 text-white'
                      : isAnswered
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Question Text */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <p className="text-sm sm:text-base font-medium text-slate-900 leading-snug">
              {currentQ.questionText}
            </p>
          </div>

          {/* Options */}
          {currentQ.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                const isSelected = selectedAnswers[currentQ.id] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(currentQ.id, opt)}
                    className={`p-4 rounded-xl text-left border transition flex items-center justify-between text-xs sm:text-sm ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span>
                      <strong className="mr-2 font-mono text-slate-900">{opt}.</strong>
                      {currentQ.options![opt]}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 disabled:opacity-40"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {currentIdx < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm transition"
                >
                  Submit Exam
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PAPER 1: CBT SCORE REPORT */}
      {selectedPaper === 1 && cbtStarted && isSubmitted && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2 py-4 border-b border-slate-100">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              percentage >= 60 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}>
              {percentage >= 60 ? 'Pass - Standard Attained' : 'Review & Practice Recommended'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">{percentage}%</h2>
            <p className="text-xs text-slate-500">
              You answered <strong>{correct}</strong> out of <strong>{total}</strong> questions correctly for BECE {selectedYear} ({subjectMeta?.name}).
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={startCbt}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Exam</span>
            </button>
            <button
              onClick={() => { setCbtStarted(false); setPracticeMode('study'); }}
              className="px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-medium transition"
            >
              View Full Solutions
            </button>
          </div>
        </div>
      )}

      {/* PAPER 1: STUDY MODE OR EMPTY STATE */}
      {selectedPaper === 1 && (!cbtStarted || isSubmitted) && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                BECE {selectedYear} • {subjectMeta?.name} (Paper 1 Objectives)
              </h3>
              <p className="text-xs text-slate-500">
                Study answers, options, and in-depth explanations for every question.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
              {questions.length} Questions
            </span>
          </div>

          {questions.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-sm font-semibold text-slate-800">
                No BECE questions uploaded for {subjectMeta?.name} ({selectedYear}) yet.
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Your administrator has not uploaded or published examination questions for this paper yet. When uploaded in the Admin Portal, they will appear right here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-xl border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      Question {q.questionNumber || idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {q.subConcept}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {q.questionText}
                  </p>

                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                        <div
                          key={opt}
                          className={`p-3 rounded-lg border text-xs ${
                            q.correctOption === opt
                              ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-800'
                              : 'bg-slate-50/50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <b className="mr-1.5">{opt}.</b> {q.options![opt]}
                        </div>
                      ))}
                    </div>
                  )}

                  {q.explanation && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                      <b className="text-slate-900">Answer Explanation: </b> {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PAPER 2: THEORY QUESTIONS & MARKING SCHEMES */}
      {selectedPaper === 2 && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                BECE {selectedYear} • {subjectMeta?.name} (Paper 2 Theory & Structured)
              </h3>
              <p className="text-xs text-slate-500">
                Official WAEC marking rubrics with step-by-step mark allocations ($B1, M1, A1$).
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
              Section B
            </span>
          </div>

          {questions.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <FileText className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-sm font-semibold text-slate-800">
                No Paper 2 theory questions uploaded for {subjectMeta?.name} ({selectedYear}) yet.
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                When the administrator uploads structured theory questions and official WAEC marking rubrics, they will be displayed here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-xl border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      Question {q.questionNumber || idx + 1}: {q.subConcept}
                    </span>
                    {q.totalMarks && (
                      <span className="text-xs font-mono font-semibold text-slate-600">
                        [{q.totalMarks} Marks]
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-medium text-slate-800">{q.questionText}</p>

                  {q.subQuestions && q.subQuestions.map((sq, subIdx) => (
                    <div key={subIdx} className="pl-3 border-l-2 border-slate-200 space-y-2">
                      <div className="flex items-start justify-between text-xs">
                        <span className="font-semibold text-slate-900">{sq.part} {sq.prompt}</span>
                        <span className="text-[11px] font-mono font-bold text-slate-500 shrink-0 ml-2">
                          [{sq.maxMarks} marks]
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs space-y-1.5">
                        <div>
                          <b className="text-slate-900">Model Answer: </b>
                          <span className="text-slate-700">{sq.modelAnswer}</span>
                        </div>
                        <div className="pt-1 border-t border-slate-200/60 text-[11px] text-slate-600">
                          <b className="text-blue-700">Official WAEC Marking Scheme: </b>
                          <span>{sq.markingSchemeRubric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
