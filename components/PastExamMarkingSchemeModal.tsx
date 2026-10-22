'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Clock, 
  Award, 
  FlaskConical, 
  ArrowRight,
  BookOpen,
  Check,
  Play
} from 'lucide-react';
import { ArchivedWeeklyExam } from '@/lib/scheduledWeeklyExam';

interface PastExamMarkingSchemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: ArchivedWeeklyExam | null;
  onPractice?: () => void;
  userAttempt?: any | null;
}

export default function PastExamMarkingSchemeModal({
  isOpen,
  onClose,
  exam,
  onPractice,
  userAttempt = null,
}: PastExamMarkingSchemeModalProps) {
  const [activeTab, setActiveTab] = useState<'paper1' | 'paper2'>('paper1');
  const [selectedP1Filter, setSelectedP1Filter] = useState<'all' | 'mistakes_only'>('all');

  if (!isOpen || !exam) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                Official Past Paper & Marking Scheme
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800">
                {exam.level} {exam.subjectName}
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {exam.sessionDate}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {exam.title}
            </h2>
            <p className="text-xs text-slate-500">
              Complete WAEC standard marking rubrics, objective answer keys, and theory model solutions.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher & User Score Banner */}
        <div className="bg-white border-b border-slate-200 px-5 pt-3 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('paper1')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'paper1'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Paper 1: Objectives ({exam.paper1Questions.length} Questions • 40m)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('paper2')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'paper2'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Paper 2: WAEC Theory ({exam.paper2Questions.length} Questions • 60m)</span>
            </button>
          </div>

          {userAttempt && (
            <div className="flex items-center gap-2 text-xs bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-emerald-900 font-semibold self-start sm:self-auto">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Your Previous Result: <b>{userAttempt.compositePercentage}%</b> (Stanine {userAttempt.stanineGrade})</span>
            </div>
          )}
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800">
          
          {/* ================================================================ */}
          {/* TAB 1: PAPER 1 OBJECTIVES & RATIONALES                           */}
          {/* ================================================================ */}
          {activeTab === 'paper1' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700">
                  Paper 1 Answer Key & Explanations ({exam.paper1Questions.length} Items)
                </span>
                <span className="text-[11px] text-slate-500">
                  Total Marks: 40 Marks (Weighted to 40% Composite)
                </span>
              </div>

              <div className="space-y-4">
                {exam.paper1Questions.map((q, idx) => {
                  const userAns = userAttempt?.paper1Answers?.[q.id];
                  const isUserCorrect = userAns === q.correctOption;
                  const answered = !!userAns;

                  return (
                    <div
                      key={q.id || idx}
                      className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide bg-slate-100 px-2 py-0.5 rounded">
                            {q.subConcept || 'General Concept'}
                          </span>
                        </div>

                        {userAttempt && (
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              isUserCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : answered
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {isUserCorrect ? 'Correct' : answered ? `You Chose ${userAns}` : 'Unanswered'}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                        {q.questionText}
                      </p>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          { key: 'A', text: q.optionA },
                          { key: 'B', text: q.optionB },
                          { key: 'C', text: q.optionC },
                          { key: 'D', text: q.optionD },
                        ].map((opt) => {
                          const isCorrect = q.correctOption === opt.key;
                          const wasChosen = userAns === opt.key;

                          return (
                            <div
                              key={opt.key}
                              className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${
                                isCorrect
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                                  : wasChosen && !isCorrect
                                  ? 'bg-rose-50 border-rose-200 text-rose-900 line-through opacity-80'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                  isCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : wasChosen
                                    ? 'bg-rose-500 text-white'
                                    : 'bg-white border border-slate-300 text-slate-600'
                                }`}
                              >
                                {opt.key}
                              </span>
                              <span className="leading-tight pt-0.5">{opt.text}</span>
                              {isCorrect && (
                                <span className="ml-auto text-[10px] uppercase font-bold text-emerald-700 shrink-0">
                                  Correct Key
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation Box */}
                      {q.explanation && (
                        <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-950 space-y-1">
                          <span className="font-bold text-[11px] text-blue-900 block">
                            💡 WAEC Explanation & Rationale:
                          </span>
                          <p className="text-[11px] leading-relaxed text-blue-900">
                            {q.explanation}
                          </p>
                          {q.remediationTip && (
                            <p className="text-[10px] text-blue-700 font-medium pt-1 border-t border-blue-200/60">
                              Tip: {q.remediationTip}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 2: PAPER 2 WAEC THEORY QUESTIONS & RUBRICS                   */}
          {/* ================================================================ */}
          {activeTab === 'paper2' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700">
                  Paper 2 WAEC Theory Marking Scheme ({exam.paper2Questions.length} Structured Questions)
                </span>
                <span className="text-[11px] text-slate-500">
                  Total Marks: 60 Marks (Weighted to 60% Composite)
                </span>
              </div>

              <div className="space-y-6">
                {exam.paper2Questions.map((q, qIdx) => (
                  <div
                    key={q.id || qIdx}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center">
                          {qIdx + 1}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">
                          Question {qIdx + 1} • {q.topicTitle || 'Section B'}
                        </h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                        {q.subQuestions.reduce((acc, s) => acc + (s.maxMarks || 0), 0)} Marks Total
                      </span>
                    </div>

                    {q.scenario && (
                      <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed italic">
                        &quot;{q.scenario}&quot;
                      </p>
                    )}

                    {/* Sub-Questions & Model Rubric */}
                    <div className="space-y-4">
                      {q.subQuestions.map((sub, sIdx) => {
                        const subId = `${q.id}-${sub.part}`;
                        const studentAnswer = userAttempt?.paper2Answers?.[subId];
                        const studentScore = userAttempt?.paper2SelfMarks?.[subId];

                        return (
                          <div
                            key={sub.part || sIdx}
                            className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">
                                Part {sub.part}
                              </span>
                              <span className="text-[11px] font-bold font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                                [{sub.maxMarks} Marks]
                              </span>
                            </div>

                            <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                              {sub.prompt}
                            </p>

                            {/* Student Answer if available */}
                            {studentAnswer && (
                              <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs space-y-1">
                                <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase">
                                  <span>Your Submission</span>
                                  {typeof studentScore === 'number' && (
                                    <span className="text-emerald-700 font-bold">
                                      Marks Awarded: {studentScore} / {sub.maxMarks}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-700 whitespace-pre-wrap font-sans">
                                  {studentAnswer}
                                </p>
                              </div>
                            )}

                            {/* WAEC Model Solution & Marking Rubric */}
                            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-2 text-emerald-950">
                              <span className="font-bold text-[11px] text-emerald-900 block flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-emerald-700" />
                                <span>Official WAEC Model Answer:</span>
                              </span>
                              <div className="text-[11px] leading-relaxed whitespace-pre-wrap font-sans">
                                {sub.modelAnswer}
                              </div>
                              {sub.markingSchemeRubric && (
                                <div className="pt-2 border-t border-emerald-200/80 text-[10px] text-emerald-900 font-mono">
                                  <span className="font-bold block uppercase tracking-wider text-[9px] text-emerald-800 mb-0.5">
                                    Scoring Rubric Breakdown:
                                  </span>
                                  <div className="whitespace-pre-wrap">{sub.markingSchemeRubric}</div>
                                </div>
                              )}
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

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold transition"
          >
            Close Marking Scheme
          </button>

          {onPractice && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onPractice();
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm shadow-blue-600/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Practice This Past Paper Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
