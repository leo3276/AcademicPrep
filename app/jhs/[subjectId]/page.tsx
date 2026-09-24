'use client';

import React, { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { EducationLevel } from '@/lib/types';
import { 
  ArrowLeft, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  KeyRound,
  FileText
} from 'lucide-react';

export default function SubjectDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { student, topicProgress } = useAuth();

  const subjectId = params.subjectId as string;
  const initialLevel = (searchParams.get('level') as EducationLevel) || student?.currentLevel || 'JHS 1';

  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(initialLevel);
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});

  const subject = CURRICULUM_SUBJECTS.find((s) => s.id === subjectId);
  const topics = JHS_CURRICULUM_TOPICS.filter(
    (t) => t.subjectId === subjectId && t.level === currentLevel
  );

  const toggleNotes = (topicId: string) => {
    setExpandedNotes((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">Subject Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The requested curriculum subject does not exist.</p>
        <Link href="/jhs" className="mt-4 inline-block text-xs font-bold text-blue-600">
          ← Back to JHS Portal
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/jhs" className="hover:text-slate-800 flex items-center gap-1 font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          JHS Portal
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-bold">{subject.name}</span>
      </div>

      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase font-mono">
              {subject.code}
            </span>
            <span className="text-xs text-slate-500 font-medium">NaCCA Curriculum</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{subject.name}</h1>
          <p className="text-xs text-slate-600 mt-0.5">
            Structured topics and interactive mastery quizzes for {currentLevel}.
          </p>
        </div>

        {/* Level Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          {(['JHS 1', 'JHS 2', 'JHS 3'] as EducationLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setCurrentLevel(lvl)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentLevel === lvl
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            {currentLevel} Curriculum Topics ({topics.length})
          </h2>
          <span className="text-xs text-slate-500">Every topic contains an assessment quiz</span>
        </div>

        {topics.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No Topics Uploaded Yet for {currentLevel}</h3>
            <p className="text-xs text-slate-500">
              The admin can upload and configure additional topic banks in the Admin Dashboard.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {topics.map((topic, index) => {
              const progress = topicProgress[topic.id];
              const isCompleted = progress?.completed;
              const isLocked = !student?.hasFullAccess && !topic.isFreeTrial;
              const isNotesOpen = expandedNotes[topic.id];

              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border bg-white p-5 transition-all shadow-sm ${
                    isCompleted
                      ? 'border-emerald-200 ring-1 ring-emerald-100'
                      : isLocked
                      ? 'border-slate-200 opacity-90'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          Topic {index + 1}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Term {topic.term}
                        </span>
                        {topic.isFreeTrial && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                            Free Trial
                          </span>
                        )}
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Passed ({progress.bestScorePercentage}%)
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-slate-900">{topic.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{topic.description}</p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      {/* Toggle Study Notes */}
                      <button
                        onClick={() => toggleNotes(topic.id)}
                        className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        <span>Notes</span>
                        {isNotesOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      {/* Quiz Button */}
                      {isLocked ? (
                        <div className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-500 text-xs font-bold flex items-center gap-1.5 cursor-not-allowed">
                          <Lock className="w-3.5 h-3.5" />
                          <span>PIN Required</span>
                        </div>
                      ) : (
                        <Link
                          href={`/jhs/quiz/${topic.id}`}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 ${
                            isCompleted
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
                          }`}
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{isCompleted ? 'Retake Quiz' : 'Take Quiz'}</span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Expandable Key Notes */}
                  {isNotesOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/70 p-4 rounded-xl text-xs text-slate-700 leading-relaxed font-sans whitespace-pre-line border border-slate-100">
                      <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        Summary Study Notes & Key Formulas
                      </div>
                      {topic.keyNotes}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
