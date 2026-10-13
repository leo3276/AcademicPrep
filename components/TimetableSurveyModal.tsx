'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Check 
} from 'lucide-react';
import { EducationLevel } from '@/lib/types';
import { 
  CURRICULUM_SUBJECTS, 
  JHS_CURRICULUM_TOPICS, 
  SHS_CORE_SUBJECTS, 
  SHS_CURRICULUM_TOPICS 
} from '@/lib/curriculumData';
import { SHS_ELECTIVE_SUBJECTS } from '@/lib/curriculumShsElectives';
import { 
  TimetablePreferences, 
  TimetableGoal, 
  TimetableIntensity, 
  DailyStudyRhythm 
} from '@/lib/timetableTypes';

interface TimetableSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentLevel: EducationLevel;
  initialWeakSubjects?: string[];
  initialWeakTopics?: string[];
  onGenerate: (preferences: TimetablePreferences, chosenLevel?: EducationLevel) => void;
}

export default function TimetableSurveyModal({
  isOpen,
  onClose,
  studentLevel,
  initialWeakSubjects = [],
  initialWeakTopics = [],
  onGenerate,
}: TimetableSurveyModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Selected level: defaults to studentLevel or JHS 3
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>(
    studentLevel?.startsWith('SHS') ? studentLevel : 'JHS 3'
  );
  const isShs = selectedLevel.startsWith('SHS');

  // Survey Form States
  const [targetGoal, setTargetGoal] = useState<TimetableGoal>(
    isShs ? 'WASSCE_PREP' : 'BECE_PREP'
  );
  const [daysPerWeek, setDaysPerWeek] = useState<5 | 6 | 7>(6);
  const [intensity, setIntensity] = useState<TimetableIntensity>('BALANCED');
  const [dailyRhythm, setDailyRhythm] = useState<DailyStudyRhythm>('DAWN_AND_EVENING');
  const [sessionDurationMinutes, setSessionDurationMinutes] = useState<number>(45);

  const [weakSubjectIds, setWeakSubjectIds] = useState<string[]>(
    initialWeakSubjects.length > 0 ? initialWeakSubjects : ['math', 'science']
  );
  const [weakTopicIds, setWeakTopicIds] = useState<string[]>(initialWeakTopics);

  // Active single-subject tab for topics selection
  const [activeWeakSubjectTab, setActiveWeakSubjectTab] = useState<string>(
    initialWeakSubjects[0] || 'math'
  );

  const [strongSubjectIds, setStrongSubjectIds] = useState<string[]>(
    isShs ? ['english', 'physics'] : ['english', 'ict']
  );
  const [includeWeekendMock, setIncludeWeekendMock] = useState<boolean>(true);

  // Available subjects based on level
  const availableSubjects = useMemo(() => {
    if (isShs) {
      return [...SHS_CORE_SUBJECTS, ...SHS_ELECTIVE_SUBJECTS];
    }
    return CURRICULUM_SUBJECTS;
  }, [isShs]);

  // Available topics for student's level
  const availableTopicsForLevel = useMemo(() => {
    if (isShs) {
      return SHS_CURRICULUM_TOPICS.filter((t) => t.level === selectedLevel);
    }
    const validJhs = selectedLevel.startsWith('JHS') ? selectedLevel : 'JHS 3';
    return JHS_CURRICULUM_TOPICS.filter((t) => t.level === validJhs);
  }, [isShs, selectedLevel]);

  // Keep active weak subject tab synchronized when subjects change
  useEffect(() => {
    if (weakSubjectIds.length > 0 && !weakSubjectIds.includes(activeWeakSubjectTab)) {
      setActiveWeakSubjectTab(weakSubjectIds[0]);
    }
  }, [weakSubjectIds, activeWeakSubjectTab]);

  // Topics solely for the currently selected active weak subject
  const currentSubjectTopics = useMemo(() => {
    if (!activeWeakSubjectTab) return [];
    return availableTopicsForLevel.filter((t) => t.subjectId === activeWeakSubjectTab);
  }, [availableTopicsForLevel, activeWeakSubjectTab]);

  if (!isOpen) return null;

  const toggleWeakSubject = (subjectId: string) => {
    if (weakSubjectIds.includes(subjectId)) {
      if (weakSubjectIds.length === 1) return; // Keep at least one
      const updated = weakSubjectIds.filter((id) => id !== subjectId);
      setWeakSubjectIds(updated);
      // Remove topics for that subject
      const topicsToRemove = availableTopicsForLevel
        .filter((t) => t.subjectId === subjectId)
        .map((t) => t.id);
      setWeakTopicIds(weakTopicIds.filter((tid) => !topicsToRemove.includes(tid)));
      if (activeWeakSubjectTab === subjectId) {
        setActiveWeakSubjectTab(updated[0] || '');
      }
    } else {
      if (weakSubjectIds.length >= 3) {
        setWeakSubjectIds([...weakSubjectIds.slice(1), subjectId]);
      } else {
        setWeakSubjectIds([...weakSubjectIds, subjectId]);
      }
      setActiveWeakSubjectTab(subjectId);
    }
  };

  const toggleWeakTopic = (topicId: string) => {
    if (weakTopicIds.includes(topicId)) {
      setWeakTopicIds(weakTopicIds.filter((id) => id !== topicId));
    } else {
      setWeakTopicIds([...weakTopicIds, topicId]);
    }
  };

  const toggleStrongSubject = (subjectId: string) => {
    if (strongSubjectIds.includes(subjectId)) {
      setStrongSubjectIds(strongSubjectIds.filter((id) => id !== subjectId));
    } else {
      if (strongSubjectIds.length >= 2) {
        setStrongSubjectIds([...strongSubjectIds.slice(1), subjectId]);
      } else {
        setStrongSubjectIds([...strongSubjectIds, subjectId]);
      }
    }
  };

  const handleFinish = () => {
    onGenerate(
      {
        targetGoal,
        intensity,
        dailyRhythm,
        daysPerWeek,
        sessionDurationMinutes,
        weakSubjectIds,
        weakTopicIds,
        strongSubjectIds,
        includeWeekendMock,
      },
      selectedLevel
    );
    onClose();
  };

  const activeSubjectMeta = availableSubjects.find((s) => s.id === activeWeakSubjectTab);

  const goalOptions = isShs
    ? [
        { id: 'WASSCE_PREP', title: 'WASSCE Final Examination', desc: 'Targeting 8 A1 grades for tertiary admission' },
        { id: 'MID_TERM', title: 'Semester / Terminal Mock Exams', desc: 'Semester assessment and class tests' },
        { id: 'TOPIC_MASTERY', title: 'Core & Electives Mastery', desc: 'Course mastery across your SHS strand' },
        { id: 'REVISION_CATCHUP', title: 'Foundation Catch-Up', desc: 'Remediating early SHS core topics' },
      ]
    : [
        { id: 'BECE_PREP', title: 'BECE Final Examination', desc: 'Targeting Best 6 Aggregate' },
        { id: 'MID_TERM', title: 'Terminal / Mock Exams', desc: 'Term tests and school revision' },
        { id: 'TOPIC_MASTERY', title: 'Curriculum Mastery', desc: 'Standard pace across all subjects' },
        { id: 'REVISION_CATCHUP', title: 'Foundation Catch-Up', desc: 'Remediating previous terms' },
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-98 duration-150">
        
        {/* Minimal Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Study Timetable Planner
              </h3>
              <span className="text-[11px] font-mono font-medium text-slate-400">
                {step}/4
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Personalized schedule and topic rotation for {selectedLevel}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full bg-slate-100 h-0.5 shrink-0">
          <div
            className="bg-slate-900 h-0.5 transition-all duration-200"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          
          {/* ============================================================ */}
          {/* STEP 1: EDUCATION LEVEL, TARGET GOAL & DAYS                  */}
          {/* ============================================================ */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Level Strand Switcher (JHS vs SHS) */}
              <div className="space-y-2 pb-3 border-b border-slate-100">
                <label className="text-xs font-semibold text-slate-700 block">
                  1. Curriculum Level
                </label>
                <div className="flex items-center gap-1.5 p-0.5 bg-slate-100 rounded-lg text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      if (isShs) {
                        setSelectedLevel('JHS 3');
                        setTargetGoal('BECE_PREP');
                        setWeakSubjectIds(['math', 'science']);
                        setWeakTopicIds([]);
                      }
                    }}
                    className={`flex-1 py-1.5 rounded-md font-medium transition cursor-pointer ${
                      !isShs ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Junior High (JHS / BECE)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!isShs) {
                        setSelectedLevel('SHS 3');
                        setTargetGoal('WASSCE_PREP');
                        setWeakSubjectIds(['math', 'science']);
                        setWeakTopicIds([]);
                      }
                    }}
                    className={`flex-1 py-1.5 rounded-md font-medium transition cursor-pointer ${
                      isShs ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Senior High (SHS / WASSCE)
                  </button>
                </div>

                {/* Specific Grade Selector */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  {(!isShs ? (['JHS 1', 'JHS 2', 'JHS 3'] as const) : (['SHS 1', 'SHS 2', 'SHS 3'] as const)).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setWeakTopicIds([]);
                      }}
                      className={`flex-1 py-1 px-2 rounded-lg text-xs font-mono font-medium border transition cursor-pointer ${
                        selectedLevel === lvl
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Examination Target */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  2. Examination Target
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goalOptions.map((goal) => {
                    const isSelected = targetGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setTargetGoal(goal.id as TimetableGoal)}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <p className="text-xs font-semibold">{goal.title}</p>
                        <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {goal.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Study Days */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-semibold text-slate-700 block">
                  3. Study Days per Week
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { days: 5, label: '5 Days', sub: 'Mon–Fri' },
                    { days: 6, label: '6 Days', sub: 'Mon–Sat (Recommended)' },
                    { days: 7, label: '7 Days', sub: 'Mon–Sun' },
                  ].map((opt) => {
                    const isSelected = daysPerWeek === opt.days;
                    return (
                      <button
                        key={opt.days}
                        type="button"
                        onClick={() => setDaysPerWeek(opt.days as 5 | 6 | 7)}
                        className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="text-xs font-semibold">{opt.label}</p>
                        <p className={`text-[10px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          {opt.sub}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 2: INTENSITY & DAILY TIME RHYTHM                       */}
          {/* ============================================================ */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Daily Study Intensity
                </label>
                <div className="space-y-2">
                  {[
                    {
                      id: 'LIGHT',
                      title: 'Light (1 to 1.5 hrs / day)',
                      desc: '1 focused topic block daily. Good for balancing heavy class assignments.',
                    },
                    {
                      id: 'BALANCED',
                      title: 'Balanced (2 to 2.5 hrs / day) - Recommended',
                      desc: '2 sessions daily with break interval. Optimal retention balance.',
                    },
                    {
                      id: 'INTENSIVE',
                      title: 'Candidate Boot Camp (3 to 4 hrs / day)',
                      desc: '3 sessions daily covering theory, worked examples, and speed quizzes.',
                    },
                  ].map((lvl) => {
                    const isSelected = intensity === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setIntensity(lvl.id as TimetableIntensity)}
                        className={`w-full p-3 rounded-xl border text-left transition cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="text-xs font-semibold">{lvl.title}</p>
                        <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {lvl.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <label className="text-xs font-semibold text-slate-700 block">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'DAWN_AND_EVENING', title: 'Dawn & Evening', time: '05:30 AM & 07:30 PM' },
                    { id: 'DAWN_ONLY', title: 'Dawn Morning', time: '05:00 AM - 06:30 AM' },
                    { id: 'AFTERNOON_ONLY', title: 'After School', time: '04:00 PM - 06:00 PM' },
                    { id: 'EVENING_ONLY', title: 'Night', time: '07:00 PM - 09:30 PM' },
                  ].map((rhythm) => {
                    const isSelected = dailyRhythm === rhythm.id;
                    return (
                      <button
                        key={rhythm.id}
                        type="button"
                        onClick={() => setDailyRhythm(rhythm.id as DailyStudyRhythm)}
                        className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="text-xs font-semibold">{rhythm.title}</p>
                        <p className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {rhythm.time}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {[
                  { min: 45, label: '45 mins / block (Pomodoro)' },
                  { min: 60, label: '60 mins / block' },
                ].map((dur) => (
                  <button
                    key={dur.min}
                    type="button"
                    onClick={() => setSessionDurationMinutes(dur.min)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium text-center transition cursor-pointer ${
                      sessionDurationMinutes === dur.min
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 3: WEAK SUBJECTS & PER-SUBJECT TOPICS SELECTOR          */}
          {/* ============================================================ */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700">
                    1. Select Weak Subjects (1 to 3)
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    {weakSubjectIds.length}/3 chosen
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-0.5">
                  {availableSubjects.map((s) => {
                    const isSelected = weakSubjectIds.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleWeakSubject(s.id)}
                        className={`py-2 px-2.5 rounded-xl border text-left transition flex items-center justify-between text-xs cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="truncate">{s.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PER-SUBJECT TOPIC PICKER (Solely for active tab) */}
              {weakSubjectIds.length > 0 && (
                <div className="pt-2 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700">
                      2. Pick Specific Difficult Topics
                    </label>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {weakTopicIds.length} topics selected
                    </span>
                  </div>

                  {/* Subject Tabs Switcher */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                    {weakSubjectIds.map((sid) => {
                      const subj = availableSubjects.find((s) => s.id === sid);
                      const isTabActive = activeWeakSubjectTab === sid;
                      const selectedCountForSubj = availableTopicsForLevel
                        .filter((t) => t.subjectId === sid && weakTopicIds.includes(t.id))
                        .length;

                      return (
                        <button
                          key={sid}
                          type="button"
                          onClick={() => setActiveWeakSubjectTab(sid)}
                          className={`py-1.5 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
                            isTabActive
                              ? 'bg-blue-50 border-blue-600 text-blue-900'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span>{subj?.name || sid}</span>
                          {selectedCountForSubj > 0 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-200/70 text-blue-900 font-bold">
                              {selectedCountForSubj}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Topic List Solely for the Active Subject Tab */}
                  <div className="border border-slate-200 rounded-xl bg-slate-50/50 p-2 max-h-52 overflow-y-auto space-y-1">
                    {currentSubjectTopics.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-400">
                        No syllabus topics found for this subject at {selectedLevel}.
                      </div>
                    ) : (
                      currentSubjectTopics.map((top) => {
                        const isSelected = weakTopicIds.includes(top.id);
                        return (
                          <button
                            key={top.id}
                            type="button"
                            onClick={() => toggleWeakTopic(top.id)}
                            className={`w-full py-1.5 px-2.5 rounded-lg text-left text-xs transition flex items-center justify-between gap-2 cursor-pointer border ${
                              isSelected
                                ? 'bg-white border-slate-900 font-semibold text-slate-900 shadow-2xs'
                                : 'bg-white/80 border-slate-200/80 text-slate-700 hover:bg-white'
                            }`}
                          >
                            <span className="truncate">{top.title}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'bg-slate-900 border-slate-900 text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 italic">
                    Showing topics solely for {activeSubjectMeta?.name || 'selected subject'}. Switch tab above to select topics for other subjects.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 4: STRONG SUBJECTS & MOCK DRILL                        */}
          {/* ============================================================ */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700">
                    Strongest / Preferred Subjects (1 or 2)
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    {strongSubjectIds.length}/2 chosen
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-0.5">
                  {availableSubjects.map((s) => {
                    const isSelected = strongSubjectIds.includes(s.id);
                    if (weakSubjectIds.includes(s.id)) return null;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleStrongSubject(s.id)}
                        className={`py-2 px-2.5 rounded-xl border text-left transition flex items-center justify-between text-xs cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="truncate">{s.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Weekend Mock Toggle */}
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="weekendMock"
                  checked={includeWeekendMock}
                  onChange={(e) => setIncludeWeekendMock(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-slate-900 rounded border-slate-300 focus:ring-slate-900 cursor-pointer"
                />
                <label htmlFor="weekendMock" className="text-xs text-slate-700 cursor-pointer space-y-0.5">
                  <span className="font-semibold block text-slate-900">
                    Include Weekend {isShs ? 'WASSCE' : 'BECE'} Past Question Speed Mock
                  </span>
                  <span className="text-[11px] text-slate-500 leading-relaxed block">
                    Schedules a timed past questions practice block on the weekend to test retention under exam conditions.
                  </span>
                </label>
              </div>

              {/* Clean Summary */}
              <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-1 text-xs">
                <p className="font-semibold text-slate-900">Summary:</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {selectedLevel} &bull; {targetGoal.replace('_', ' ')} &bull; {intensity} ({daysPerWeek} days/week) &bull; {weakSubjectIds.length} weak subjects ({weakTopicIds.length} struggle topics prioritized).
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between bg-white shrink-0">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as 1 | 2 | 3 | 4)}
              className="py-1.5 px-3 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium transition flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) as 1 | 2 | 3 | 4)}
              className="py-1.5 px-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center gap-1 cursor-pointer shadow-2xs"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Generate Timetable</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
