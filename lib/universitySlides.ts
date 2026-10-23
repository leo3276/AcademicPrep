// University Slides Intelligence & Strategic Study Planner Engine
// Clean data models & algorithmic study plan generators.

export type SlideImportance = 'CORE_FUNDAMENTAL' | 'SUPPORTING' | 'CONTEXT_LOW_YIELD';

export interface KeyDefinition {
  term: string;
  definition: string;
}

export interface DetailedTakeaway {
  label: string; // e.g., "Core Mechanism", "Operational Condition", "Real-World Context"
  explanation: string;
}

export interface DecodedVariable {
  symbol: string;
  meaning: string;
  units?: string;
}

export interface DecodedFormula {
  formula: string;
  inPlainEnglish: string;
  variables: DecodedVariable[];
}

export interface ActiveRecallPrompt {
  question: string;
  answer: string;
  hint?: string;
  stepByStepSolution?: string;
}

export interface SlideAnalysis {
  pageNumber: number;
  title: string;
  importance: SlideImportance;
  importanceScore: number; // 1 to 10
  categoryTag: string;
  isLessonStart?: boolean; // True for the exact slide where educational teaching begins
  isIntroLogistics?: boolean; // True for professor names, syllabus, logistics, agenda
  coreRule: string; // Comprehensive, clear plain-English explanation
  whyItMatters?: string; // The big-picture intuition / context of why this slide is taught
  detailedTakeaways: DetailedTakeaway[]; // Rich, structured explanations with clear headings
  simplifiedPoints: string[]; // Fast bullet points for quick scan
  keyFormulas: string[];
  decodedFormulas?: DecodedFormula[]; // Formulas with variable breakdowns
  keyDefinitions: KeyDefinition[];
  examTrap: string; // Practical exam angle & common traps
  activeRecallPrompt: ActiveRecallPrompt;
  estimatedStudyMinutes: number;
}

export interface StudyPlanSession {
  day: number;
  title: string;
  slideNumbers: number[];
  allocatedMinutes: number;
  focus: string;
  checklist: string[];
}

export interface StudyPlanPhase {
  phaseNumber: number;
  name: string;
  objective: string;
  days: string;
  sessions: StudyPlanSession[];
}

export interface CramSheetSummary {
  mustMemorizeTheorems: string[];
  formulasToRecite: string[];
  highFrequencyQuestions: string[];
}

export interface CompleteSlideStudyPackage {
  id: string;
  deckTitle: string;
  courseCode: string;
  subject: string;
  totalSlides: number;
  lessonStartPage: number; // The exact slide number where teaching begins (skipping intro/logistics)
  highYieldCount: number;
  estimatedHoursTotal: number;
  slides: SlideAnalysis[];
  studyPlan: {
    daysUntilExam: number;
    dailyMinutes: number;
    targetGrade: string;
    phases: StudyPlanPhase[];
  };
  cramSheetSummary: CramSheetSummary;
  analyzedAt: string;
  engineVersion?: string;
}

/**
 * Algorithmic Study Plan Generator
 * Synthesizes an active recall + spaced repetition timetable based on user constraints.
 */
export function generateAlgorithmicStudyPlan(
  slides: SlideAnalysis[],
  daysUntilExam: number = 7,
  dailyMinutes: number = 45,
  targetGrade: string = 'A / First Class'
): CompleteSlideStudyPackage['studyPlan'] {
  const safeDays = Math.max(2, Math.min(30, daysUntilExam));
  const safeMinutes = Math.max(20, Math.min(180, dailyMinutes));

  const coreSlides = slides.filter(s => s.importance === 'CORE_FUNDAMENTAL');
  const supportingSlides = slides.filter(s => s.importance === 'SUPPORTING');

  const p1DaysCount = Math.max(1, Math.floor(safeDays * 0.4));
  const p2DaysCount = Math.max(1, Math.floor(safeDays * 0.35));
  const p3DaysCount = Math.max(1, safeDays - p1DaysCount - p2DaysCount);

  const sessions: StudyPlanSession[] = [];
  const allTargetSlides = [...coreSlides, ...supportingSlides];
  const slidesPerDay = Math.max(1, Math.ceil(allTargetSlides.length / (p1DaysCount + p2DaysCount)));

  for (let d = 1; d <= safeDays; d++) {
    if (d <= p1DaysCount) {
      const daySlice = allTargetSlides.slice((d - 1) * slidesPerDay, d * slidesPerDay);
      const slideNums = daySlice.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: `Core Concepts & Key Principles (Part ${d})`,
        slideNumbers: slideNums.length > 0 ? slideNums : [slides[0]?.pageNumber || 1],
        allocatedMinutes: safeMinutes,
        focus: 'Understand main definitions and core slide takeaways in simple terms.',
        checklist: [
          'Read the simplified takeaways and state them in your own words',
          'Note down unfamiliar terms in your personal summary',
          'Attempt the self-check question for each slide'
        ]
      });
    } else if (d <= p1DaysCount + p2DaysCount) {
      const idx = d - p1DaysCount;
      const daySlice = allTargetSlides.slice((d - 1) * slidesPerDay, d * slidesPerDay);
      const slideNums = daySlice.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: `Mechanisms, Formulas & Applications (Day ${idx})`,
        slideNumbers: slideNums.length > 0 ? slideNums : coreSlides.map(s => s.pageNumber).slice(0, 3),
        allocatedMinutes: safeMinutes,
        focus: 'Review key formulas, diagrams, and common exam traps.',
        checklist: [
          'Practice explaining key diagrams or equations from memory',
          'Review the exam tips and common pitfalls for today\'s slides',
          'Check off the slides you feel confident about'
        ]
      });
    } else if (d < safeDays) {
      const highYieldPages = coreSlides.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: 'Active Retrieval & Closed-Book Review',
        slideNumbers: highYieldPages,
        allocatedMinutes: safeMinutes,
        focus: 'Self-test your memory without looking at notes.',
        checklist: [
          'Go through the key slides and answer the self-check questions',
          'Flag any concept where you felt unsure for a quick re-read',
          'Write down core formulas without checking the slide'
        ]
      });
    } else {
      sessions.push({
        day: d,
        title: 'Final High-Yield Exam Eve Scan',
        slideNumbers: coreSlides.map(s => s.pageNumber).slice(0, 5),
        allocatedMinutes: Math.min(45, safeMinutes),
        focus: 'Relaxed review of key takeaways and summary sheet.',
        checklist: [
          'Review the 1-page summary sheet',
          'Read through top exam tips one last time',
          'Get a full night\'s rest before the exam'
        ]
      });
    }
  }

  return {
    daysUntilExam: safeDays,
    dailyMinutes: safeMinutes,
    targetGrade,
    phases: [
      {
        phaseNumber: 1,
        name: 'Phase 1: Core Understanding & Concepts',
        objective: 'Build a solid grasp of the primary ideas and definitions.',
        days: `Days 1 - ${p1DaysCount}`,
        sessions: sessions.filter(s => s.day <= p1DaysCount)
      },
      {
        phaseNumber: 2,
        name: 'Phase 2: Applications & Exam Traps',
        objective: 'Master equations, examples, and points where students lose marks.',
        days: `Days ${p1DaysCount + 1} - ${p1DaysCount + p2DaysCount}`,
        sessions: sessions.filter(s => s.day > p1DaysCount && s.day <= p1DaysCount + p2DaysCount)
      },
      {
        phaseNumber: 3,
        name: 'Phase 3: Active Recall & Final Scan',
        objective: 'Solidify retention with closed-book self-tests before the exam.',
        days: `Days ${p1DaysCount + p2DaysCount + 1} - ${safeDays}`,
        sessions: sessions.filter(s => s.day > p1DaysCount + p2DaysCount)
      }
    ]
  };
}
