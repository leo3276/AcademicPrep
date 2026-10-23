// Condensed Slide Summarizer Engine
// Conjoins groups of slides (e.g. 10 slides into 1) into a high-density, structured summary
// ensuring EVERY important piece of information, formula, definition, and concept is preserved without AI fluff.

import { SlideAnalysis } from './universitySlides';

export interface CondensedConcept {
  title: string;
  explanation: string;
  sourceSlides: number[];
}

export interface CondensedFormula {
  formula: string;
  inPlainEnglish: string;
  sourceSlide: number;
  variables?: Array<{
    symbol: string;
    meaning: string;
    units?: string;
  }>;
}

export interface CondensedDefinition {
  term: string;
  definition: string;
  sourceSlide: number;
}

export interface CondensedSlideGroup {
  groupIndex: number; // 1-based index (e.g. Part 1, Part 2...)
  title: string; // Meaningful module/topic title for this 10-slide block
  startPage: number;
  endPage: number;
  slideCount: number;
  overview: string; // Cohesive executive conjunction summary tying all 10 slides together
  coreTakeaways: CondensedConcept[]; // Essential concepts across the slides with source slide tags
  essentialFormulas: CondensedFormula[]; // Deduplicated governing equations in this block
  keyDefinitions: CondensedDefinition[]; // Deduplicated vocabulary and terms in this block
  examPoints: string[]; // Key examiner angles and traps for this batch
  synthesisCheck: {
    question: string;
    answer: string;
    testedSlides: number[];
  };
}

/**
 * Conjoins and summarizes batches of slides into unified module digests.
 * @param slides All analyzed slides from the deck
 * @param groupSize Target number of slides per summary (default: 10)
 */
export function generateCondensedSlideSummaries(
  slides: SlideAnalysis[],
  groupSize: number = 10
): CondensedSlideGroup[] {
  if (!slides || slides.length === 0) return [];

  const safeGroupSize = Math.max(3, Math.min(25, groupSize));
  const groups: CondensedSlideGroup[] = [];
  const totalSlides = slides.length;

  let currentIdx = 0;
  let groupNum = 1;

  while (currentIdx < totalSlides) {
    let nextIdx = Math.min(totalSlides, currentIdx + safeGroupSize);

    // If the remaining slides after this chunk would be very small (e.g., 1 or 2 slides),
    // merge them into the current group so the student doesn't get a 1-slide "module"
    const remainingAfterNext = totalSlides - nextIdx;
    if (remainingAfterNext > 0 && remainingAfterNext <= 2) {
      nextIdx = totalSlides;
    }

    const batch = slides.slice(currentIdx, nextIdx);
    const startPage = batch[0].pageNumber;
    const endPage = batch[batch.length - 1].pageNumber;

    // 1. Synthesize Block Title
    const title = deriveBlockTitle(batch, groupNum);

    // 2. Synthesize Executive Conjunction Overview
    const overview = synthesizeBlockOverview(batch, startPage, endPage);

    // 3. Consolidate & Deduplicate Key Concepts
    const coreTakeaways = consolidateConcepts(batch);

    // 4. Consolidate Formulas
    const essentialFormulas = consolidateFormulas(batch);

    // 5. Consolidate Definitions
    const keyDefinitions = consolidateDefinitions(batch);

    // 6. Gather Exam Watch-Outs
    const examPoints = consolidateExamPoints(batch);

    // 7. Pick or synthesize best review self-check question
    const synthesisCheck = pickSynthesisCheck(batch, startPage, endPage);

    groups.push({
      groupIndex: groupNum,
      title,
      startPage,
      endPage,
      slideCount: batch.length,
      overview,
      coreTakeaways,
      essentialFormulas,
      keyDefinitions,
      examPoints,
      synthesisCheck
    });

    currentIdx = nextIdx;
    groupNum++;
  }

  return groups;
}

/**
 * Derives a clean, readable topic title for a block of slides.
 */
function deriveBlockTitle(batch: SlideAnalysis[], groupNum: number): string {
  // Filter out pure intro/logistics slide titles
  const substantiveSlides = batch.filter(s => !s.isIntroLogistics);
  const targetSlides = substantiveSlides.length > 0 ? substantiveSlides : batch;

  // Gather distinct, meaningful titles
  const rawTitles = targetSlides
    .map(s => s.title.replace(/^Slide\s+\d+[:\-]?\s*/i, '').trim())
    .filter(t => t.length > 2 && !/^(intro|agenda|outline|welcome|syllabus|logistics)$/i.test(t));

  const uniqueTitles: string[] = [];
  for (const t of rawTitles) {
    if (!uniqueTitles.some(u => u.toLowerCase() === t.toLowerCase() || t.toLowerCase().includes(u.toLowerCase()))) {
      uniqueTitles.push(t);
    }
  }

  if (uniqueTitles.length === 0) {
    return `Module ${groupNum}: Core Course Principles`;
  }

  if (uniqueTitles.length === 1) {
    return uniqueTitles[0];
  }

  if (uniqueTitles.length === 2) {
    return `${uniqueTitles[0]} & ${uniqueTitles[1]}`;
  }

  // If 3 or more, pick first and a key contrasting/advancing title
  return `${uniqueTitles[0]}, ${uniqueTitles[1]} & Related Principles`;
}

/**
 * Creates a cohesive high-density overview combining the core rules across the slides.
 */
function synthesizeBlockOverview(batch: SlideAnalysis[], startPage: number, endPage: number): string {
  const substantive = batch.filter(s => !s.isIntroLogistics);

  if (substantive.length === 0) {
    return `Slides ${startPage}–${endPage} cover preliminary lecture orientation, course administration, and the syllabus outline before formal instructional topics commence.`;
  }

  // Collect distinct core rules from the highest yield slides in this batch
  const coreRules: string[] = [];
  for (const s of substantive) {
    const text = s.coreRule?.trim();
    if (text && text.length > 10 && !coreRules.some(r => r.toLowerCase() === text.toLowerCase())) {
      coreRules.push(text);
    }
  }

  if (coreRules.length === 0) {
    return `Slides ${startPage}–${endPage} present foundational concepts, definitions, and relationships essential for this section of the course.`;
  }

  // Join the most distinct rules (up to 3) into a coherent block summary
  const selectedRules = coreRules.slice(0, 3);
  return selectedRules.join(' ');
}

/**
 * Consolidates, deduplicates, and organizes concepts across the batch.
 */
function consolidateConcepts(batch: SlideAnalysis[]): CondensedConcept[] {
  const conceptMap = new Map<string, { explanation: string; slides: Set<number> }>();

  for (const slide of batch) {
    // If slide has detailed takeaways, use them
    if (slide.detailedTakeaways && slide.detailedTakeaways.length > 0) {
      for (const t of slide.detailedTakeaways) {
        const cleanLabel = t.label.trim();
        const normKey = cleanLabel.toLowerCase();

        if (conceptMap.has(normKey)) {
          const existing = conceptMap.get(normKey)!;
          existing.slides.add(slide.pageNumber);
          // If the new explanation has more detail, enhance it
          if (t.explanation.length > existing.explanation.length) {
            existing.explanation = t.explanation;
          }
        } else {
          conceptMap.set(normKey, {
            explanation: t.explanation,
            slides: new Set([slide.pageNumber])
          });
        }
      }
    } else if (slide.simplifiedPoints && slide.simplifiedPoints.length > 0) {
      // Fallback to simplified points
      for (const pt of slide.simplifiedPoints) {
        const parts = pt.split(/:\s*/);
        const title = parts.length > 1 ? parts[0].trim() : slide.title;
        const explanation = parts.length > 1 ? parts.slice(1).join(': ').trim() : pt;
        const normKey = title.toLowerCase();

        if (conceptMap.has(normKey)) {
          conceptMap.get(normKey)!.slides.add(slide.pageNumber);
        } else {
          conceptMap.set(normKey, {
            explanation,
            slides: new Set([slide.pageNumber])
          });
        }
      }
    } else if (slide.coreRule && !slide.isIntroLogistics) {
      const normKey = slide.title.toLowerCase();
      if (!conceptMap.has(normKey)) {
        conceptMap.set(normKey, {
          explanation: slide.coreRule,
          slides: new Set([slide.pageNumber])
        });
      }
    }
  }

  const results: CondensedConcept[] = [];
  conceptMap.forEach((val, key) => {
    // Title case the key
    const formattedTitle = key
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    results.push({
      title: formattedTitle,
      explanation: val.explanation,
      sourceSlides: Array.from(val.slides).sort((a, b) => a - b)
    });
  });

  return results;
}

/**
 * Deduplicates and consolidates formulas across the slide batch.
 */
function consolidateFormulas(batch: SlideAnalysis[]): CondensedFormula[] {
  const formulas: CondensedFormula[] = [];
  const seen = new Set<string>();

  for (const slide of batch) {
    // Prefer decoded formulas if available
    if (slide.decodedFormulas && slide.decodedFormulas.length > 0) {
      for (const df of slide.decodedFormulas) {
        const norm = df.formula.replace(/\s+/g, '').toLowerCase();
        if (!seen.has(norm)) {
          seen.add(norm);
          formulas.push({
            formula: df.formula,
            inPlainEnglish: df.inPlainEnglish,
            sourceSlide: slide.pageNumber,
            variables: df.variables
          });
        }
      }
    } else if (slide.keyFormulas && slide.keyFormulas.length > 0) {
      for (const f of slide.keyFormulas) {
        const norm = f.replace(/\s+/g, '').toLowerCase();
        if (!seen.has(norm)) {
          seen.add(norm);
          formulas.push({
            formula: f,
            inPlainEnglish: `Governing relationship presented on Slide ${slide.pageNumber}.`,
            sourceSlide: slide.pageNumber
          });
        }
      }
    }
  }

  return formulas;
}

/**
 * Deduplicates and consolidates key definitions across the batch.
 */
function consolidateDefinitions(batch: SlideAnalysis[]): CondensedDefinition[] {
  const definitions: CondensedDefinition[] = [];
  const seen = new Set<string>();

  for (const slide of batch) {
    if (slide.keyDefinitions && slide.keyDefinitions.length > 0) {
      for (const def of slide.keyDefinitions) {
        const cleanTerm = def.term.trim();
        const norm = cleanTerm.toLowerCase();
        if (!seen.has(norm) && cleanTerm.length > 1) {
          seen.add(norm);
          definitions.push({
            term: cleanTerm,
            definition: def.definition,
            sourceSlide: slide.pageNumber
          });
        }
      }
    }
  }

  return definitions;
}

/**
 * Gathers and consolidates exam watch-outs and student pitfalls.
 */
function consolidateExamPoints(batch: SlideAnalysis[]): string[] {
  const points: string[] = [];
  const seen = new Set<string>();

  for (const slide of batch) {
    if (slide.examTrap && !slide.isIntroLogistics) {
      const clean = slide.examTrap
        .replace(/^Exam\s+(Trap|Tip|Watch-Out|Advice):\s*/i, '')
        .trim();

      const norm = clean.toLowerCase();
      if (!seen.has(norm) && clean.length > 15) {
        seen.add(norm);
        points.push(clean);
      }
    }
  }

  return points.slice(0, 4);
}

/**
 * Selects the best active recall check for the 10-slide block.
 */
function pickSynthesisCheck(
  batch: SlideAnalysis[],
  startPage: number,
  endPage: number
): { question: string; answer: string; testedSlides: number[] } {
  // Find the highest yield slide in the batch with a strong question
  const sorted = [...batch].sort((a, b) => b.importanceScore - a.importanceScore);
  const bestSlide = sorted.find(s => s.activeRecallPrompt && s.activeRecallPrompt.question.length > 15) || batch[0];

  if (bestSlide && bestSlide.activeRecallPrompt) {
    return {
      question: bestSlide.activeRecallPrompt.question,
      answer: bestSlide.activeRecallPrompt.answer,
      testedSlides: [bestSlide.pageNumber]
    };
  }

  return {
    question: `What are the primary governing principles established across Slides ${startPage}–${endPage}?`,
    answer: `Review the core concepts and definitions summarized in this module block.`,
    testedSlides: [startPage, endPage]
  };
}
