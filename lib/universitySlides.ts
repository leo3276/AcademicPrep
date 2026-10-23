// University Slides Intelligence & Strategic Study Planner Engine
// Pure data models & algorithmic spaced-repetition study plan generators.

export type SlideImportance = 'CORE_FUNDAMENTAL' | 'SUPPORTING' | 'CONTEXT_LOW_YIELD';

export interface KeyDefinition {
  term: string;
  definition: string;
}

export interface ActiveRecallPrompt {
  question: string;
  answer: string;
  hint?: string;
}

export interface SlideAnalysis {
  pageNumber: number;
  title: string;
  importance: SlideImportance;
  importanceScore: number; // 1 to 10
  categoryTag: string; // 'Concept', 'Equation', 'Algorithm', 'Theorem', 'Example', 'Overview'
  coreRule: string; // The 1-2 sentence core takeaway (No fluff)
  keyFormulas: string[];
  keyDefinitions: KeyDefinition[];
  examTrap: string; // Where examiners trick students or common misconceptions
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
        title: `Core Fundamentals & Definitions (Part ${d})`,
        slideNumbers: slideNums.length > 0 ? slideNums : [slides[0]?.pageNumber || 1],
        allocatedMinutes: safeMinutes,
        focus: 'Deconstruct governing laws, definitions, and slide takeaways without rote memorization.',
        checklist: [
          'Read slide core rules and state them out loud in your own words',
          'Identify and write down any unfamiliar terms in your personal glossary',
          'Attempt the active recall card on each assigned slide'
        ]
      });
    } else if (d <= p1DaysCount + p2DaysCount) {
      const idx = d - p1DaysCount;
      const daySlice = allTargetSlides.slice((d - 1) * slidesPerDay, d * slidesPerDay);
      const slideNums = daySlice.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: `Mechanisms, Formulas & Worked Examples (Day ${idx})`,
        slideNumbers: slideNums.length > 0 ? slideNums : coreSlides.map(s => s.pageNumber).slice(0, 3),
        allocatedMinutes: safeMinutes,
        focus: 'Practice formula substitutions, diagram sketching, and examiner pitfall analysis.',
        checklist: [
          'Solve 2 calculation problems or sketch key diagrams from memory',
          'Review the Examiner Trap warnings for today\'s slide deck',
          'Highlight any formulas that need instant recall'
        ]
      });
    } else if (d < safeDays) {
      const highYieldPages = coreSlides.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: 'Spaced Retrieval Practice & Closed-Book Drills',
        slideNumbers: highYieldPages,
        allocatedMinutes: safeMinutes,
        focus: 'Closed-book flashcard drills across all high-yield fundamental slides.',
        checklist: [
          'Cycle through all high-yield flashcards with answers hidden',
          'Flag any slide where you hesitated for > 15 seconds for re-review',
          'Write down all governing formulas without looking at notes'
        ]
      });
    } else {
      sessions.push({
        day: d,
        title: 'Final High-Yield Exam Eve Scan & Formula Recitation',
        slideNumbers: coreSlides.map(s => s.pageNumber).slice(0, 5),
        allocatedMinutes: Math.min(45, safeMinutes),
        focus: 'Zero new material. Rapid 30-minute scan of top 5 highest-yield slides and sleep hygiene.',
        checklist: [
          'Review the 1-page cheat sheet formulas',
          'Read the top examiner traps one last time',
          'Get 8 hours of restorative sleep before the exam hall'
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
        name: 'Phase 1: Conceptual Foundations & Terminology',
        objective: 'Extract governing rules and establish strong foundational understanding.',
        days: `Days 1 - ${p1DaysCount}`,
        sessions: sessions.filter(s => s.day <= p1DaysCount)
      },
      {
        phaseNumber: 2,
        name: 'Phase 2: Mechanisms, Derivations & Examiner Traps',
        objective: 'Master problem-solving steps, formulas, and common exam traps.',
        days: `Days ${p1DaysCount + 1} - ${p1DaysCount + p2DaysCount}`,
        sessions: sessions.filter(s => s.day > p1DaysCount && s.day <= p1DaysCount + p2DaysCount)
      },
      {
        phaseNumber: 3,
        name: 'Phase 3: Active Retrieval & Spaced Recall',
        objective: 'Test retention with closed-book prompts and exam-eve rapid scanning.',
        days: `Days ${p1DaysCount + p2DaysCount + 1} - ${safeDays}`,
        sessions: sessions.filter(s => s.day > p1DaysCount + p2DaysCount)
      }
    ]
  };
}
