'use client';

import React, { useState, useEffect } from 'react';
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
  FileText,
  Lightbulb,
  Video,
  PlayCircle,
  Crown,
  Sparkles,
  ExternalLink,
  Award,
  X
} from 'lucide-react';

export default function SubjectDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { student, topicProgress, redeemPin } = useAuth();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subjectId = params.subjectId as string;
  const initialLevel = (searchParams.get('level') as EducationLevel) || student?.currentLevel || 'JHS 1';

  const [currentLevel, setCurrentLevel] = useState<EducationLevel>(initialLevel);
  // Track open tab for each topic: 'notes' | 'examples' | 'video' | null
  const [activeTabByTopic, setActiveTabByTopic] = useState<Record<string, 'notes' | 'examples' | 'video' | null>>({});

  // VIP PIN Modal state
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinLoading, setPinLoading] = useState(false);
  const [pinFeedback, setPinFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  const subject = CURRICULUM_SUBJECTS.find((s) => s.id === subjectId);
  const topics = JHS_CURRICULUM_TOPICS.filter(
    (t) => t.subjectId === subjectId && t.level === currentLevel
  );

  const toggleTab = (topicId: string, tab: 'notes' | 'examples' | 'video') => {
    setActiveTabByTopic((prev) => ({
      ...prev,
      [topicId]: prev[topicId] === tab ? null : tab,
    }));
  };

  const handleRedeemPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;

    setPinLoading(true);
    setPinFeedback(null);

    const res = await redeemPin(pinInput);
    setPinLoading(false);
    setPinFeedback({
      success: res.success,
      text: res.message,
    });

    if (res.success) {
      setTimeout(() => {
        setPinModalOpen(false);
        setPinInput('');
        setPinFeedback(null);
      }, 2000);
    }
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
            Structured topics, video tutorials, worked examples, and mastery quizzes for {currentLevel}.
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

      {/* VIP Access Banner if student is on free trial */}
      {mounted && !student?.hasFullAccess && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-950">
                Unlock VIP Access for All {currentLevel} Topics & Video Lessons
              </p>
              <p className="text-[11px] text-amber-800">
                Topic 1 is free for everyone. Subsequent topics, step-by-step worked examples, and full quizzes require a VIP Pass.
              </p>
            </div>
          </div>
          <button
            onClick={() => setPinModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-sm shadow-amber-500/20 whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Redeem Access PIN</span>
          </button>
        </div>
      )}

      {/* Topics List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            {currentLevel} Curriculum Topics ({topics.length})
          </h2>
          <span className="text-xs text-slate-500">Every topic contains video lessons & quizzes</span>
        </div>

        {topics.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No Topics Uploaded Yet for {currentLevel}</h3>
            <p className="text-xs text-slate-500">
              Additional topics are being structured for this subject level.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {topics.map((topic, index) => {
              const progress = topicProgress[topic.id];
              const isCompleted = progress?.completed;
              const isLocked = mounted && !student?.hasFullAccess && (topic.isVip || !topic.isFreeTrial);
              const activeTab = activeTabByTopic[topic.id];

              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border bg-white p-5 transition-all shadow-sm ${
                    isCompleted
                      ? 'border-emerald-200 ring-1 ring-emerald-100'
                      : isLocked
                      ? 'border-amber-200/60 bg-amber-50/20'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          Topic {index + 1}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Term {topic.term}
                        </span>
                        {topic.isFreeTrial ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                            Free Trial
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
                            <Crown className="w-3 h-3 text-amber-600" />
                            VIP Access
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

                    {/* Action Buttons: Notes, Examples, Video, Quiz */}
                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                      {/* Notes Button */}
                      <button
                        onClick={() => toggleTab(topic.id, 'notes')}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                          activeTab === 'notes'
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Notes</span>
                      </button>

                      {/* Worked Examples Button */}
                      {topic.examples && topic.examples.length > 0 && (
                        <button
                          onClick={() => toggleTab(topic.id, 'examples')}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                            activeTab === 'examples'
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                          }`}
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>Examples ({topic.examples.length})</span>
                        </button>
                      )}

                      {/* YouTube Video Button */}
                      {topic.youtubeUrl && (
                        <button
                          onClick={() => toggleTab(topic.id, 'video')}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                            activeTab === 'video'
                              ? 'bg-red-600 text-white border-red-600 shadow-xs'
                              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                          }`}
                        >
                          <Video className="w-3.5 h-3.5 text-red-500" />
                          <span>Video Lesson</span>
                        </button>
                      )}

                      {/* Quiz Button / Locked Indicator */}
                      {isLocked ? (
                        <button
                          onClick={() => setPinModalOpen(true)}
                          className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                          title="VIP Pass Required"
                        >
                          <Crown className="w-3.5 h-3.5 text-amber-600" />
                          <span>Unlock VIP</span>
                        </button>
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

                  {/* TAB 1: Key Study Notes */}
                  {activeTab === 'notes' && (
                    <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5 rounded-xl text-xs text-slate-800 leading-relaxed font-sans whitespace-pre-line border border-slate-200/80 animate-in fade-in duration-200">
                      <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-sm">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        Summary Study Notes & Formulas
                      </div>
                      {topic.keyNotes}
                    </div>
                  )}

                  {/* TAB 2: Step-by-Step Worked Examples */}
                  {activeTab === 'examples' && topic.examples && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <Lightbulb className="w-4 h-4 text-amber-500" />
                        Step-by-Step Worked Examples
                      </div>

                      {topic.examples.map((ex, exIdx) => {
                        if (isLocked && exIdx > 0) {
                          return (
                            <div
                              key={ex.id}
                              className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                                  <Crown className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-amber-950">
                                    Example {exIdx + 1}: {ex.title}
                                  </h4>
                                  <p className="text-[11px] text-amber-800">
                                    Advanced step-by-step BECE worked solution reserved for VIP Pass members.
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => setPinModalOpen(true)}
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-xs self-start sm:self-auto flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                              >
                                <KeyRound className="w-3 h-3" />
                                <span>Unlock VIP</span>
                              </button>
                            </div>
                          );
                        }

                        return (
                          <div
                            key={ex.id}
                            className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-indigo-700">
                                Example {exIdx + 1}: {ex.title}
                              </span>
                              {isLocked && exIdx === 0 && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                                  Free Preview
                                </span>
                              )}
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-900">
                              <b>Problem: </b> {ex.problem}
                            </div>

                            <div className="space-y-1.5 text-xs text-slate-700 pl-2 border-l-2 border-indigo-400">
                              {ex.stepByStepSolution.map((step, stepIdx) => (
                                <p key={stepIdx} className="leading-relaxed">
                                  {step}
                                </p>
                              ))}
                            </div>

                            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 font-medium">
                              💡 <b>Key Rule: </b> {ex.keyTakeaway}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TAB 3: Curated YouTube Video Lesson */}
                  {activeTab === 'video' && topic.youtubeUrl && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                          <PlayCircle className="w-4 h-4 text-red-600" />
                          Curated Video Lesson for {topic.title}
                        </div>
                        <a
                          href={topic.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                          <span>Open on YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {topic.youtubeId ? (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-slate-200 bg-black">
                          <iframe
                            src={`https://www.youtube.com/embed/${topic.youtubeId}`}
                            title={topic.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                          />
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                          <span>Video available on YouTube for this lesson.</span>
                          <a
                            href={topic.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center gap-1"
                          >
                            Watch Tutorial
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Redeem PIN VIP Modal */}
      {pinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => {
                setPinModalOpen(false);
                setPinFeedback(null);
              }}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Unlock VIP Access Pass</h3>
                <p className="text-xs text-slate-500">Full access to all subjects, videos, examples & quizzes</p>
              </div>
            </div>

            <form onSubmit={handleRedeemPin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Enter Your VIP Access PIN
                </label>
                <input
                  type="text"
                  placeholder="e.g. PREP-8842-9901"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-center tracking-widest text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase text-sm"
                  autoFocus
                />
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                  <span>💡 Active VIP Demo PIN: <span className="font-mono font-bold text-amber-700">PREP-8842-9901</span></span>
                  <button
                    type="button"
                    onClick={() => setPinInput('PREP-8842-9901')}
                    className="text-amber-700 font-bold hover:underline cursor-pointer"
                  >
                    Autofill
                  </button>
                </div>
              </div>

              {pinFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    pinFeedback.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {pinFeedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={pinLoading || !pinInput.trim()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:bg-slate-300 text-white font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5"
              >
                {pinLoading ? (
                  <span>Verifying PIN...</span>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    Activate Full VIP Pass (30 Days)
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
