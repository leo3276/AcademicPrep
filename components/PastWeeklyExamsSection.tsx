'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  FileText, 
  Search,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { EducationLevel } from '@/lib/types';
import { 
  ArchivedWeeklyExam, 
  PAST_WEEKLY_EXAMS, 
  getScheduledExamAttempt 
} from '@/lib/scheduledWeeklyExam';
import PastExamMarkingSchemeModal from './PastExamMarkingSchemeModal';

interface PastWeeklyExamsSectionProps {
  currentLevel: EducationLevel;
  onPracticeExam: (exam: ArchivedWeeklyExam) => void;
}

export default function PastWeeklyExamsSection({
  currentLevel,
  onPracticeExam,
}: PastWeeklyExamsSectionProps) {
  const [selectedExamForScheme, setSelectedExamForScheme] = useState<ArchivedWeeklyExam | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter past exams by level and search
  const filteredExams = PAST_WEEKLY_EXAMS.filter((exam) => {
    const matchesLevel = exam.level === currentLevel;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      !q || 
      exam.title.toLowerCase().includes(q) || 
      exam.topicTitle.toLowerCase().includes(q) ||
      exam.subjectName.toLowerCase().includes(q);
    return matchesLevel && matchesSearch;
  });

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Past Weekly Examinations Archive ({currentLevel})
              </h2>
              <p className="text-xs text-slate-500">
                Concluded official weekly examination papers available for self-paced revision, mock practice, and marking scheme study.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-mono font-semibold">
            {filteredExams.length} {filteredExams.length === 1 ? 'Past Paper' : 'Past Papers'}
          </span>
        </div>
      </div>

      {/* List of Past Papers */}
      {filteredExams.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-slate-200 rounded-xl space-y-2">
          <FileText className="w-8 h-8 mx-auto text-slate-300" />
          <p className="text-xs font-semibold text-slate-700">No past weekly exams found for {currentLevel}.</p>
          <p className="text-[11px] text-slate-500">Concluded examinations will automatically be archived here once their session ends.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredExams.map((exam) => {
            const pastAttempt = getScheduledExamAttempt(exam.id);
            const isCompleted = pastAttempt && pastAttempt.status === 'completed';

            return (
              <div
                key={exam.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 hover:border-blue-300 hover:bg-white transition-all space-y-4 shadow-2xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Metadata */}
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                        {exam.termWeekLabel}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-800 border border-blue-200/80">
                        {exam.subjectName}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Exam Date: {exam.sessionDate}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {exam.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-slate-600 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Paper 1: <b>{exam.paper1Questions.length} Objs</b> ({exam.paper1MaxMarks} Marks)</span>
                      </span>
                      <span>•</span>
                      <span>Paper 2: <b>{exam.paper2Questions.length} WAEC Theory</b> ({exam.paper2MaxMarks} Marks)</span>
                      <span>•</span>
                      <span>Total: <b>{exam.totalMarks} Marks</b></span>
                    </div>
                  </div>

                  {/* Right: User Score or Status */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0">
                    {isCompleted ? (
                      <div className="p-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-0.5 text-left lg:text-right">
                        <div className="flex items-center gap-1.5 lg:justify-end font-bold text-emerald-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Attempt Completed</span>
                        </div>
                        <div className="font-mono text-xs">
                          Score: <strong className="text-emerald-700 text-sm">{pastAttempt.compositePercentage}%</strong> ({pastAttempt.gradeRemark})
                        </div>
                        <div className="text-[10px] text-emerald-800">
                          P1: {pastAttempt.paper1ScoreMarks}/40 • P2: {pastAttempt.paper2ScoreMarks}/60
                        </div>
                      </div>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                        Past Exam Paper • Ready for Practice
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedExamForScheme(exam)}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Marking Scheme & Solutions</span>
                    </button>

                    {isCompleted && (
                      <button
                        type="button"
                        onClick={() => setSelectedExamForScheme(exam)}
                        className="px-3.5 py-2 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Review My Submission</span>
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onPracticeExam(exam)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm shadow-blue-600/20 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isCompleted ? 'Retake / Practice Again' : 'Practice Past Paper'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Marking Scheme Modal */}
      {selectedExamForScheme && (
        <PastExamMarkingSchemeModal
          isOpen={true}
          onClose={() => setSelectedExamForScheme(null)}
          exam={selectedExamForScheme}
          userAttempt={getScheduledExamAttempt(selectedExamForScheme.id)}
          onPractice={() => {
            const e = selectedExamForScheme;
            setSelectedExamForScheme(null);
            onPracticeExam(e);
          }}
        />
      )}
    </section>
  );
}
