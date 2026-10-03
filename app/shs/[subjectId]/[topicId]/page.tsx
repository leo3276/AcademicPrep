'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CurriculumService } from '@/lib/curriculumService';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Lightbulb, 
  HelpCircle, 
  CheckCircle2, 
  Crown, 
  KeyRound, 
  Award, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink, 
  Check, 
  ChevronRight, 
  X,
  FileText,
  Lock,
  Compass
} from 'lucide-react';
import PaystackPaymentModal from '@/components/PaystackPaymentModal';

export default function ShsDetailedTopicLessonPage() {
  const params = useParams();
  const { student, topicProgress } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [activeSectionTab, setActiveSectionTab] = useState<'notes' | 'examples'>('notes');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [modalTab, setModalTab] = useState<'momo' | 'pin'>('momo');

  const subjectId = params.subjectId as string;
  const topicId = params.topicId as string;

  const topic = CurriculumService.getTopicById(topicId);
  const subject = CurriculumService.getSubjectById(subjectId, topic?.level);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && topic?.level) {
      localStorage.setItem('academicprep_shs_level', topic.level);
    }
  }, [topic?.level]);

  // Find index and previous / next topics in same subject
  const subjectTopics = CurriculumService.getTopics(topic?.level || 'SHS 1', subjectId);
  const currentTopicIndex = subjectTopics.findIndex((t) => t.id === topicId);
  const prevTopic = currentTopicIndex > 0 ? subjectTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < subjectTopics.length - 1 ? subjectTopics[currentTopicIndex + 1] : null;

  if (!subject || !topic) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Topic Lesson Not Found</h2>
        <p className="text-xs text-slate-500">
          The requested SHS lesson could not be loaded. Please return to the curriculum portal.
        </p>
        <Link
          href={`/shs/${subjectId || ''}?level=${encodeURIComponent(topic?.level || 'SHS 1')}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Subject Topics
        </Link>
      </div>
    );
  }

  const isCompleted = mounted && topicProgress[topic.id]?.completed;
  const isLocked = mounted && !student?.hasFullAccess && (topic.isVip || !topic.isFreeTrial);
  const detailedNotes = topic.detailedNotes;
  const examTips = detailedNotes?.wassceExamTips || detailedNotes?.examTips || detailedNotes?.beceExamTips;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <Link href={`/shs?level=${encodeURIComponent(topic.level)}`} className="hover:text-slate-800 flex items-center gap-1 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            SHS Portal
          </Link>
          <span>/</span>
          <Link href={`/shs/${subjectId}?level=${encodeURIComponent(topic.level)}`} className="hover:text-slate-800 font-medium">
            {subject.name}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-bold truncate max-w-xs">{topic.title}</span>
        </div>

        {/* Action button: Take Quiz */}
        {topic.quiz?.questions && topic.quiz.questions.length > 0 && (
          <div>
            {isLocked ? (
              <button
                type="button"
                onClick={() => {
                  setModalTab('momo');
                  setShowPaymentModal(true);
                }}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Unlock Topic Quiz</span>
              </button>
            ) : (
              <Link
                href={`/shs/quiz/${topic.id}`}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md shadow-purple-500/20 flex items-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Take Practice Quiz ({topic.quiz.questions.length} Qs)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Lesson Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase font-mono">
            {subject.code} • {topic.level}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            Term {topic.term}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
            WAEC / WASSCE Syllabus
          </span>
          {topic.isFreeTrial ? (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Free Trial Topic
            </span>
          ) : (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
              <Crown className="w-3 h-3 text-amber-600" />
              VIP Lesson
            </span>
          )}
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3" />
              Completed
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {topic.title}
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          {topic.description}
        </p>

        {/* Tab Navigation: Study Notes vs Worked Examples */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setActiveSectionTab('notes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeSectionTab === 'notes'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Comprehensive Notes</span>
          </button>

          {topic.examples && topic.examples.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveSectionTab('examples')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeSectionTab === 'examples'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Worked Examples ({topic.examples.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Content */}
      {activeSectionTab === 'notes' ? (
        <div className="space-y-6">
          {/* Real-World Context Banner */}
          {(detailedNotes?.realWorldContext || topic.keyNotes) && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
                <Compass className="w-4 h-4 text-blue-600" />
                <span>Real-World Context & Relevance in Ghana</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {detailedNotes?.realWorldContext || topic.keyNotes}
              </p>
            </div>
          )}

          {/* Learning Objectives */}
          {detailedNotes?.objectives && detailedNotes.objectives.length > 0 && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Key Syllabus Learning Objectives</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {detailedNotes.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detailed Study Sections */}
          {detailedNotes?.sections && detailedNotes.sections.length > 0 ? (
            <div className="space-y-6">
              {detailedNotes.sections.map((section, idx) => (
                <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {section.title}
                    </h3>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-2">
                    {section.content}
                  </div>

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                      {section.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.realWorldExample && (
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                      <span className="font-bold block text-emerald-800">Practical Example:</span>
                      <p className="leading-relaxed">{section.realWorldExample}</p>
                    </div>
                  )}

                  {section.keyTakeaway && (
                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-950 space-y-1">
                      <span className="font-bold block text-blue-800">Core Takeaway:</span>
                      <p className="leading-relaxed">{section.keyTakeaway}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900">Key Study Notes</h3>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                {topic.keyNotes}
              </p>
            </div>
          )}

          {/* WASSCE Exam Tips */}
          {examTips && examTips.length > 0 && (
            <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>WAEC / WASSCE Examiner Tips</span>
              </div>
              <ul className="space-y-2 text-xs text-amber-950">
                {examTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes */}
          {detailedNotes?.commonMistakes && detailedNotes.commonMistakes.length > 0 && (
            <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Common Candidate Pitfalls & Errors to Avoid</span>
              </div>
              <ul className="space-y-2 text-xs text-rose-950">
                {detailedNotes.commonMistakes.map((err, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{err}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Summary Checklist */}
          {detailedNotes?.summaryChecklist && detailedNotes.summaryChecklist.length > 0 && (
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Topic Mastery Checklist</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {detailedNotes.summaryChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        /* Worked Examples Tab */
        <div className="space-y-6">
          {topic.examples && topic.examples.length > 0 ? (
            topic.examples.map((example, idx) => (
              <div key={example.id || idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{example.title}</h3>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  <span className="font-bold text-slate-500 block text-[11px] uppercase mb-1">
                    Problem / Question:
                  </span>
                  {example.problem}
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Step-by-Step Solution:
                  </span>
                  <ol className="space-y-2 text-xs text-slate-700">
                    {example.stepByStepSolution.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/40 border border-emerald-100">
                        <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {example.keyTakeaway && (
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 font-medium">
                    <span className="font-bold text-blue-900 block mb-0.5">Takeaway:</span>
                    {example.keyTakeaway}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-500">
              No worked examples added for this topic.
            </div>
          )}
        </div>
      )}

      {/* Topic Quiz Call-to-Action Card */}
      {topic.quiz?.questions && topic.quiz.questions.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Test Your Knowledge
            </span>
            <h3 className="text-xl font-extrabold tracking-tight">
              Ready for the Topic Quiz?
            </h3>
            <p className="text-xs text-slate-300">
              {topic.quiz.questions.length} WAEC-standard multiple choice questions with instant explanations.
            </p>
          </div>

          <div>
            {isLocked ? (
              <button
                type="button"
                onClick={() => {
                  setModalTab('momo');
                  setShowPaymentModal(true);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Unlock VIP Quiz</span>
              </button>
            ) : (
              <Link
                href={`/shs/quiz/${topic.id}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs transition-all shadow-md shadow-purple-500/30 flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Start Quiz Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Prev / Next Footer Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs font-bold">
        {prevTopic ? (
          <Link
            href={`/shs/${subjectId}/${prevTopic.id}?level=${encodeURIComponent(prevTopic.level)}`}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous:</span>
            <span className="truncate max-w-[180px]">{prevTopic.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <Link
            href={`/shs/${subjectId}/${nextTopic.id}?level=${encodeURIComponent(nextTopic.level)}`}
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 p-2 rounded-xl hover:bg-blue-50 transition-colors ml-auto"
          >
            <span className="hidden sm:inline">Next:</span>
            <span className="truncate max-w-[180px]">{nextTopic.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Paystack Payment Modal */}
      <PaystackPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        defaultTab={modalTab}
        featureName={`Lesson: ${topic.title}`}
      />
    </div>
  );
}
