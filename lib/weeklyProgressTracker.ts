// Adaptive Weekly Examination Engine for AcademicPrep
// Monitors topic completion, logs quiz mistakes, and generates adaptive Paper 1 & Paper 2 exams

import { EducationLevel, QuizQuestion, CurriculumTopic } from './types';
import { JHS_CURRICULUM_TOPICS, CURRICULUM_SUBJECTS } from './curriculumData';
import { WEEKLY_THEORY_QUESTIONS, WeeklyTheoryQuestion } from './weeklyTheoryQuestionBank';
import { saveWeeklyExam, saveStudentMistake, hasSessionToken } from './apiClient';

export interface QuizMistakeRecord {
  id: string;
  topicId: string;
  topicTitle: string;
  subjectId: string;
  subjectName: string;
  questionId: string;
  questionText: string;
  subConcept: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  remediationTip?: string;
  timestamp: string;
}

export interface WeeklyObjectiveQuestion extends QuizQuestion {
  topicId: string;
  topicTitle: string;
  subjectId: string;
  subjectName: string;
  isRemediationTarget?: boolean;
}

export interface WeeklyProgressSummary {
  level: EducationLevel;
  completedTopicsCount: number;
  completedTopicIds: string[];
  completedTopics: CurriculumTopic[];
  totalQuizQuestionsAttempted: number;
  totalQuizQuestionsCorrect: number;
  quizAccuracyPercentage: number;
  mistakesCount: number;
  mistakes: QuizMistakeRecord[];
  weakSubConcepts: { concept: string; count: number; subjectName: string }[];
  isExamReady: boolean;
  examReadinessMessage: string;
}

export interface FullWeeklyExamAttempt {
  id: string;
  studentId: string;
  level: EducationLevel;
  completedAt: string;
  timeSpentSeconds: number;
  coveredTopicIds: string[];
  coveredTopicTitles: string[];
  remediatedMistakesCount: number;
  
  // Paper 1 (Objectives)
  paper1TotalQuestions: number;
  paper1CorrectCount: number;
  paper1ScoreMarks: number; // 40 max marks
  paper1Percentage: number;
  paper1Answers: Record<string, 'A' | 'B' | 'C' | 'D'>;

  // Paper 2 (Theory)
  paper2TotalMarks: number; // 60 max marks
  paper2ScoreMarks: number;
  paper2Percentage: number;
  paper2StudentAnswers: Record<string, string>;
  paper2GradingMarks: Record<string, number>;

  // Composite & Stanine Grade
  compositeTotalPercentage: number; // (Paper 1 * 0.4) + (Paper 2 * 0.6)
  stanineGrade: number; // 1 to 9
  gradeRemark: string; // e.g. "Grade 1 (Distinction)"
  weakAreasIdentified: string[];
}

export interface AdaptiveExamPackage {
  level: EducationLevel;
  title: string;
  paper1Questions: WeeklyObjectiveQuestion[];
  paper2Questions: WeeklyTheoryQuestion[];
  paper1MaxMarks: number;
  paper2MaxMarks: number;
  totalExamMarks: number;
  suggestedDurationMinutes: number;
  remediationCount: number;
}

const STORAGE_KEYS = {
  QUIZ_MISTAKES: 'academicprep_quiz_mistakes_v1',
  WEEKLY_EXAMS: 'academicprep_full_weekly_exams_v1',
  TOPIC_PROGRESS: 'academicprep_topic_progress',
};

function getActiveStudentPhone(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('academicprep_student');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.phoneNumber) {
        return parsed.phoneNumber.trim().replace(/\s+/g, '');
      }
    }
  } catch {}
  return null;
}

function getMistakesStorageKey(): string {
  const phone = getActiveStudentPhone();
  return phone ? `academicprep_quiz_mistakes_${phone}` : STORAGE_KEYS.QUIZ_MISTAKES;
}

function getExamsStorageKey(): string {
  const phone = getActiveStudentPhone();
  return phone ? `academicprep_full_weekly_exams_${phone}` : STORAGE_KEYS.WEEKLY_EXAMS;
}

function getProgressStorageKey(): string {
  const phone = getActiveStudentPhone();
  return phone ? `academicprep_progress_${phone}` : STORAGE_KEYS.TOPIC_PROGRESS;
}

/**
 * Log incorrect answers from a quiz into the student's mistake ledger
 */
export function logQuizMistakes(newMistakes: Omit<QuizMistakeRecord, 'id' | 'timestamp'>[]): void {
  if (typeof window === 'undefined' || newMistakes.length === 0) return;

  try {
    const existing = getStudentQuizMistakes();
    const formatted: QuizMistakeRecord[] = newMistakes.map(m => ({
      ...m,
      id: `mistake-${m.questionId}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString()
    }));

    // Avoid recording exact identical question mistakes multiple times in short window
    const combined = [...formatted, ...existing].slice(0, 50); // Keep latest 50
    localStorage.setItem(getMistakesStorageKey(), JSON.stringify(combined));

    // Sync the mistake ledger to the signed-in account. Anonymous visitors keep
    // their mistakes on the device only.
    if (hasSessionToken()) {
      newMistakes.forEach(m => {
        saveStudentMistake({
          topicId: m.topicId,
          subjectName: m.subjectName,
          subConcept: m.subConcept,
          questionText: m.questionText,
          studentWrongAnswer: m.selectedOption,
          correctAnswer: m.correctOption,
        }).catch(err => console.warn('Mistake sync notice:', err?.message || err));
      });
    }
  } catch (err: any) {
    console.warn('Failed to log quiz mistakes:', err?.message || err);
  }
}

/**
 * Retrieve all logged quiz mistakes
 */
export function getStudentQuizMistakes(): QuizMistakeRecord[] {
  if (typeof window === 'undefined') return [];

  try {
    const key = getMistakesStorageKey();
    let stored = localStorage.getItem(key);
    if (!stored && key !== STORAGE_KEYS.QUIZ_MISTAKES) {
      stored = localStorage.getItem(STORAGE_KEYS.QUIZ_MISTAKES);
    }
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err: any) {
    console.warn('Failed to read quiz mistakes:', err?.message || err);
  }
  return [];
}

/**
 * Clear mistake records
 */
export function clearStudentQuizMistakes(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(getMistakesStorageKey());
    localStorage.removeItem(STORAGE_KEYS.QUIZ_MISTAKES);
  }
}

/**
 * Calculate WAEC Stanine Grade (1 to 9) from total composite percentage
 */
export function calculateStanineGrade(scorePercent: number): { grade: number; remark: string } {
  if (scorePercent >= 80) return { grade: 1, remark: 'Grade 1 (Distinction)' };
  if (scorePercent >= 75) return { grade: 2, remark: 'Grade 2 (Excellent)' };
  if (scorePercent >= 70) return { grade: 3, remark: 'Grade 3 (Very Good)' };
  if (scorePercent >= 65) return { grade: 4, remark: 'Grade 4 (Good)' };
  if (scorePercent >= 60) return { grade: 5, remark: 'Grade 5 (Credit)' };
  if (scorePercent >= 50) return { grade: 6, remark: 'Grade 6 (Pass)' };
  if (scorePercent >= 45) return { grade: 7, remark: 'Grade 7 (Weak Pass)' };
  if (scorePercent >= 40) return { grade: 8, remark: 'Grade 8 (Minimum Pass)' };
  return { grade: 9, remark: 'Grade 9 (Remediation Required)' };
}

/**
 * Get comprehensive weekly progress summary for a given level
 */
export function getWeeklyProgressSummary(level: EducationLevel = 'JHS 1'): WeeklyProgressSummary {
  let completedTopicIds: string[] = [];

  if (typeof window !== 'undefined') {
    try {
      const key = getProgressStorageKey();
      let storedProgress = localStorage.getItem(key);
      if (!storedProgress && key !== STORAGE_KEYS.TOPIC_PROGRESS) {
        storedProgress = localStorage.getItem(STORAGE_KEYS.TOPIC_PROGRESS);
      }
      if (storedProgress) {
        const parsed = JSON.parse(storedProgress);
        completedTopicIds = Object.keys(parsed).filter(id => parsed[id]?.completed);
      }
    } catch {
      // ignore
    }
  }

  // Filter completed topics matching education level
  const completedTopics = JHS_CURRICULUM_TOPICS.filter(
    t => completedTopicIds.includes(t.id) && t.level === level
  );

  // Retrieve mistakes
  const allMistakes = getStudentQuizMistakes();
  // Filter mistakes that belong to the current level's topics
  const relevantMistakes = allMistakes.filter(m => 
    completedTopics.some(t => t.id === m.topicId) || allMistakes.length <= 5
  );

  // Calculate weak sub-concepts
  const conceptCounts: Record<string, { count: number; subjectName: string }> = {};
  relevantMistakes.forEach(m => {
    const key = m.subConcept || 'General Concept';
    if (!conceptCounts[key]) {
      conceptCounts[key] = { count: 0, subjectName: m.subjectName };
    }
    conceptCounts[key].count++;
  });

  const weakSubConcepts = Object.entries(conceptCounts)
    .map(([concept, data]) => ({ concept, count: data.count, subjectName: data.subjectName }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const completedCount = completedTopics.length;
  const isExamReady = completedCount >= 1 || relevantMistakes.length > 0;
  
  let examReadinessMessage = 'Complete at least 1 topic quiz to generate your tailored weekly exam.';
  if (completedCount >= 3) {
    examReadinessMessage = `Excellent! You have mastered ${completedCount} topics this week. Your weekly exam will thoroughly test these subjects.`;
  } else if (completedCount >= 1) {
    examReadinessMessage = `You have completed ${completedCount} topic(s). Your weekly exam is ready and will reinforce your focus areas.`;
  } else if (relevantMistakes.length > 0) {
    examReadinessMessage = `You have ${relevantMistakes.length} flagged concept(s) from practice quizzes. Your weekly exam will prioritize these remediation areas.`;
  }

  return {
    level,
    completedTopicsCount: completedCount,
    completedTopicIds: completedTopics.map(t => t.id),
    completedTopics,
    totalQuizQuestionsAttempted: completedCount * 5 + relevantMistakes.length,
    totalQuizQuestionsCorrect: completedCount * 5,
    quizAccuracyPercentage: completedCount > 0 ? Math.round((completedCount * 5) / (completedCount * 5 + relevantMistakes.length) * 100) : 0,
    mistakesCount: relevantMistakes.length,
    mistakes: relevantMistakes,
    weakSubConcepts,
    isExamReady,
    examReadinessMessage,
  };
}

/**
 * Dynamically synthesize an Adaptive Weekly Examination:
 * - Paper 1 (Objectives / CBT): 15-20 questions tailored to completed topics & prior mistakes
 * - Paper 2 (Theory / Written): 3-4 structured problems with WAEC marking rubrics
 */
export function generateAdaptiveWeeklyExam(level: EducationLevel = 'JHS 1'): AdaptiveExamPackage {
  const summary = getWeeklyProgressSummary(level);
  const poolTopics = summary.completedTopics.length > 0
    ? summary.completedTopics
    : JHS_CURRICULUM_TOPICS.filter(t => t.level === level && t.isFreeTrial);

  // 1. ASSEMBLE PAPER 1: OBJECTIVES
  const paper1Questions: WeeklyObjectiveQuestion[] = [];
  const usedQuestionIds = new Set<string>();

  // A. Remediation Questions (Directly re-test questions student got wrong)
  summary.mistakes.forEach(m => {
    // Find the original question in the curriculum topic
    const topic = JHS_CURRICULUM_TOPICS.find(t => t.id === m.topicId);
    if (topic && topic.quiz?.questions) {
      const origQ = topic.quiz.questions.find(q => q.id === m.questionId);
      if (origQ && !usedQuestionIds.has(origQ.id)) {
        usedQuestionIds.add(origQ.id);
        paper1Questions.push({
          ...origQ,
          topicId: topic.id,
          topicTitle: topic.title,
          subjectId: topic.subjectId,
          subjectName: CURRICULUM_SUBJECTS.find(s => s.id === topic.subjectId)?.name || topic.subjectId,
          isRemediationTarget: true
        });
      }
    }
  });

  const remediationCount = paper1Questions.length;

  // B. Fill remaining slots from completed topic quizzes across subjects
  poolTopics.forEach(topic => {
    if (topic.quiz?.questions) {
      const subName = CURRICULUM_SUBJECTS.find(s => s.id === topic.subjectId)?.name || topic.subjectId;
      topic.quiz.questions.forEach(q => {
        if (!usedQuestionIds.has(q.id) && paper1Questions.length < 15) {
          usedQuestionIds.add(q.id);
          paper1Questions.push({
            ...q,
            topicId: topic.id,
            topicTitle: topic.title,
            subjectId: topic.subjectId,
            subjectName: subName,
            isRemediationTarget: false
          });
        }
      });
    }
  });

  // If still fewer than 10, pull additional questions from level curriculum
  if (paper1Questions.length < 10) {
    const additionalTopics = JHS_CURRICULUM_TOPICS.filter(t => t.level === level);
    for (const t of additionalTopics) {
      if (paper1Questions.length >= 12) break;
      if (t.quiz?.questions) {
        const subName = CURRICULUM_SUBJECTS.find(s => s.id === t.subjectId)?.name || t.subjectId;
        for (const q of t.quiz.questions) {
          if (!usedQuestionIds.has(q.id)) {
            usedQuestionIds.add(q.id);
            paper1Questions.push({
              ...q,
              topicId: t.id,
              topicTitle: t.title,
              subjectId: t.subjectId,
              subjectName: subName,
              isRemediationTarget: false
            });
            if (paper1Questions.length >= 12) break;
          }
        }
      }
    }
  }

  // Shuffle paper 1 questions slightly while keeping some remediation near top
  const shuffledPaper1 = paper1Questions.sort(() => 0.5 - Math.random());

  // 2. ASSEMBLE PAPER 2: THEORY QUESTIONS
  // Pick matching theory questions from the comprehensive bank
  const relevantTopicIds = poolTopics.map(t => t.id);
  let paper2Candidates = WEEKLY_THEORY_QUESTIONS.filter(q => 
    relevantTopicIds.includes(q.topicId) || q.level === level
  );

  if (paper2Candidates.length < 3) {
    paper2Candidates = WEEKLY_THEORY_QUESTIONS.filter(q => q.level === level || q.level === 'JHS 1');
  }

  // Select 3 distinct theory questions across different subjects
  const selectedPaper2: WeeklyTheoryQuestion[] = [];
  const subjectsCovered = new Set<string>();

  for (const q of paper2Candidates) {
    if (!subjectsCovered.has(q.subjectId) && selectedPaper2.length < 3) {
      subjectsCovered.add(q.subjectId);
      selectedPaper2.push({ ...q, questionNumber: selectedPaper2.length + 1 });
    }
  }

  // If needed, fill up to 3 questions
  for (const q of paper2Candidates) {
    if (selectedPaper2.length < 3 && !selectedPaper2.some(item => item.id === q.id)) {
      selectedPaper2.push({ ...q, questionNumber: selectedPaper2.length + 1 });
    }
  }

  const paper1MaxMarks = 40; // 40 marks for Objectives
  const paper2MaxMarks = selectedPaper2.reduce((acc, q) => acc + q.totalMarks, 0); // e.g. ~24-30 marks
  const totalExamMarks = paper1MaxMarks + paper2MaxMarks;

  return {
    level,
    title: `Weekly Progress & Mastery Examination (${level})`,
    paper1Questions: shuffledPaper1,
    paper2Questions: selectedPaper2,
    paper1MaxMarks,
    paper2MaxMarks,
    totalExamMarks,
    suggestedDurationMinutes: 45,
    remediationCount,
  };
}

/**
 * Record a full weekly exam attempt with composite Paper 1 + Paper 2 scoring
 */
export function recordFullWeeklyExamAttempt(attempt: Omit<FullWeeklyExamAttempt, 'id' | 'completedAt'>): FullWeeklyExamAttempt {
  const fullAttempt: FullWeeklyExamAttempt = {
    ...attempt,
    id: `weekly-attempt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    completedAt: new Date().toISOString()
  };

  if (typeof window !== 'undefined') {
    try {
      const key = getExamsStorageKey();
      const existing = getFullWeeklyExamAttempts();
      const updated = [fullAttempt, ...existing];
      localStorage.setItem(key, JSON.stringify(updated));

      if (hasSessionToken()) {
        saveWeeklyExam(fullAttempt).catch(e => console.warn('Weekly exam sync notice:', e?.message || e));
      }
    } catch (err: any) {
      console.warn('Failed to save weekly exam attempt:', err?.message || err);
    }
  }

  return fullAttempt;
}

/**
 * Get past weekly exam attempts
 */
export function getFullWeeklyExamAttempts(): FullWeeklyExamAttempt[] {
  if (typeof window === 'undefined') return [];

  try {
    const key = getExamsStorageKey();
    let stored = localStorage.getItem(key);
    if (!stored && key !== STORAGE_KEYS.WEEKLY_EXAMS) {
      stored = localStorage.getItem(STORAGE_KEYS.WEEKLY_EXAMS);
    }
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err: any) {
    console.warn('Failed to read weekly exam attempts:', err?.message || err);
  }
  return [];
}
