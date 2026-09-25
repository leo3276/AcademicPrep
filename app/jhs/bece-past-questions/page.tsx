'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BECE_PAPERS_CATALOG, 
  BECE_PAST_QUESTIONS, 
  BECEPastQuestion,
  getAllBeceYears 
} from '@/lib/becePastQuestionsData';
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
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BecePastQuestionsPage() {
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedPaper, setSelectedPaper] = useState<1 | 2>(1);
  const [practiceMode, setPracticeMode] = useState<'study' | 'timed_cbt'>('study');

  // Timed CBT State
  const [cbtStarted, setCbtStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  const availableYears = getAllBeceYears();

  // Filter questions by subject and year and paper
  const questions = BECE_PAST_QUESTIONS.filter(
    (q) => q.subjectId === selectedSubject && q.year === selectedYear && q.paper === selectedPaper
  );

  const subjectMeta = CURRICULUM_SUBJECTS.find((s) => s.id === selectedSubject);
  const paperMeta = BECE_PAPERS_CATALOG.find((p) => p.subjectId === selectedSubject && p.year === selectedYear);

  const startCbt = () => {
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setTimeLeft(45 * 60);
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
          <span>Back to JHS Portal</span>
        </Link>
        <span className="text-xs font-mono font-semibold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
          WAEC / BECE Archive
        </span>
      </div>

      {/* Header Banner */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Official WAEC Past Examination Papers
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          BECE Past Questions & Marking Schemes
        </h1>
        <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
          Practice authentic past BECE questions from 2020 to 2024. Review Section A Multiple Choice with instant CBT scoring and Section B Theory questions with official step-by-step marking rubrics.
        </p>

        {/* Filters Strip */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
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

          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

          {/* Year Filter */}
          <div className="flex items-center gap-1">
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => { setSelectedYear(yr); setCbtStarted(false); }}
                className={`px-2.5 py-1 rounded-md text-xs font-medium font-mono transition ${
                  selectedYear === yr
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

          {/* Paper Selector */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
            <button
              onClick={() => { setSelectedPaper(1); setCbtStarted(false); }}
              className={`px-3 py-1 rounded-md transition ${
                selectedPaper === 1 ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600'
              }`}
            >
              Paper 1 (Objectives)
            </button>
            <button
              onClick={() => { setSelectedPaper(2); setCbtStarted(false); }}
              className={`px-3 py-1 rounded-md transition ${
                selectedPaper === 2 ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600'
              }`}
            >
              Paper 2 (Theory)
            </button>
          </div>
        </div>
      </div>

      {/* Mode Choice for Paper 1 */}
      {selectedPaper === 1 && !cbtStarted && (
        <div className="flex items-center justify-between bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-700">Practice Mode:</span>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => setPracticeMode('study')}
                className={`px-3 py-1 rounded-md transition ${
                  practiceMode === 'study' ? 'bg-white text-slate-900 font-semibold shadow-2xs' : 'text-slate-600'
                }`}
              >
                Study Mode (View Answers)
              </button>
              <button
                onClick={() => setPracticeMode('timed_cbt')}
                className={`px-3 py-1 rounded-md transition ${
                  practiceMode === 'timed_cbt' ? 'bg-white text-slate-900 font-semibold shadow-2xs' : 'text-slate-600'
                }`}
              >
                Timed CBT Simulation
              </button>
            </div>
          </div>

          {practiceMode === 'timed_cbt' && (
            <button
              onClick={startCbt}
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Begin Timed CBT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

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
            <div className="space-y-2.5">
              {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                const optText = currentQ.options![optKey];
                const isSelected = selectedAnswers[currentQ.id] === optKey;

                return (
                  <button
                    key={optKey}
                    type="button"
                    onClick={() => handleSelectOption(currentQ.id, optKey)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 text-slate-900 ring-1 ring-slate-900 shadow-2xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {optKey}
                    </span>
                    <span className="flex-1">{optText}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="py-2 px-3.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 disabled:opacity-40 hover:bg-slate-50"
            >
              Previous
            </button>

            {currentIdx < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))}
                className="py-2 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs"
              >
                Next Question
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="py-2 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-2xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit CBT Paper</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* PAPER 1: CBT RESULT SCREEN */}
      {selectedPaper === 1 && cbtStarted && isSubmitted && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div
            className={`p-6 rounded-2xl text-center space-y-2 ${
              percentage >= 60
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border border-amber-200 text-amber-950'
            }`}
          >
            <h3 className="text-xl font-bold">
              {percentage >= 60 ? 'BECE CBT Exam Passed!' : 'Exam Completed'}
            </h3>
            <p className="text-xs">
              Score: <b>{correct}</b> / <b>{total}</b> Correct (<b>{percentage}%</b>)
            </p>
            <p className="text-[11px] text-slate-600 max-w-md mx-auto">
              Review your question breakdown and step-by-step solutions below.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Exam Solutions & Explanations
            </h4>

            {questions.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
              const isCorrect = userChoice === q.correctOption;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border text-xs space-y-2.5 ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-red-200 bg-red-50/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-800">
                      {idx + 1}. {q.questionText}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isCorrect ? 'Correct' : `Chose ${userChoice || 'None'}`}
                    </span>
                  </div>

                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600">
                      <div className={q.correctOption === 'A' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                        A: {q.options.A}
                      </div>
                      <div className={q.correctOption === 'B' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                        B: {q.options.B}
                      </div>
                      <div className={q.correctOption === 'C' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                        C: {q.options.C}
                      </div>
                      <div className={q.correctOption === 'D' ? 'font-bold text-emerald-800 bg-emerald-50 p-1 rounded' : 'p-1'}>
                        D: {q.options.D}
                      </div>
                    </div>
                  )}

                  {q.explanation && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-700">
                      <b className="text-slate-900">Solution: </b>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
            <button
              onClick={startCbt}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold transition"
            >
              Retake Examination
            </button>
            <button
              onClick={() => setCbtStarted(false)}
              className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 transition"
            >
              Return to Paper View
            </button>
          </div>
        </div>
      )}

      {/* PAPER 1: STUDY MODE (BROWSE ALL QUESTIONS) */}
      {selectedPaper === 1 && !cbtStarted && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-900">
              BECE {selectedYear} • {subjectMeta?.name} (Paper 1 Questions)
            </span>
            <span className="text-xs text-slate-500 font-mono">
              {questions.length} Questions
            </span>
          </div>

          {questions.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              No questions found for this subject and year. Try selecting another year or subject.
            </div>
          ) : (
            <div className="space-y-4">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl border border-slate-200/80 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-xs text-slate-900">
                      <span className="font-mono text-slate-500 mr-1.5">#{idx + 1}</span>
                      {q.questionText}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {q.subConcept}
                    </span>
                  </div>

                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                        <div
                          key={opt}
                          className={`p-2 rounded-lg border ${
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
            <div className="p-8 text-center text-slate-400 text-xs">
              No Paper 2 theory questions available for this year yet.
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
