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
 * Creates a cohesive, plain-English teaching walkthrough explaining how the 10 slides connect.
 */
function synthesizeBlockOverview(batch: SlideAnalysis[], startPage: number, endPage: number): string {
  const substantive = batch.filter(s => !s.isIntroLogistics);

  if (substantive.length === 0) {
    return `In simple terms, Slides ${startPage}–${endPage} cover course orientation, lecturer contact details, and the syllabus outline before the core academic teaching begins.`;
  }

  // Gather unique slide topic titles across this block to explain the logical progression
  const distinctTopics: string[] = [];
  for (const s of substantive) {
    const cleanT = s.title.replace(/^Slide\s+\d+[:\-]?\s*/i, '').trim();
    if (cleanT.length > 2 && !distinctTopics.some(t => t.toLowerCase() === cleanT.toLowerCase())) {
      distinctTopics.push(cleanT);
    }
  }

  let progressionIntro = '';
  if (distinctTopics.length >= 3) {
    progressionIntro = `In plain English, Slides ${startPage}–${endPage} walk you through ${distinctTopics[0]}, move into ${distinctTopics.slice(1, Math.min(4, distinctTopics.length - 1)).join(', ')}, and connect them to ${distinctTopics[distinctTopics.length - 1]}. `;
  } else if (distinctTopics.length === 2) {
    progressionIntro = `In plain English, Slides ${startPage}–${endPage} explain how ${distinctTopics[0]} and ${distinctTopics[1]} work together in practice. `;
  } else if (distinctTopics.length === 1) {
    progressionIntro = `In plain English, Slides ${startPage}–${endPage} break down ${distinctTopics[0]} step by step. `;
  }

  // Collect the clearest plain-English core rules & intuitions from the highest-yield slides in this batch
  const coreRules: string[] = [];
  const intuitions: string[] = [];
  for (const s of substantive) {
    const text = s.coreRule?.trim();
    if (text && text.length > 15 && !coreRules.some(r => r.toLowerCase() === text.toLowerCase())) {
      coreRules.push(text.replace(/^In (plain English|simple terms),?\s*(this slide\s*)?/i, '').replace(/^[a-z]/, c => c.toUpperCase()));
    }
    if (s.whyItMatters && s.whyItMatters.length > 15 && intuitions.length < 1) {
      intuitions.push(s.whyItMatters);
    }
  }

  if (coreRules.length === 0) {
    return `${progressionIntro}Instead of memorizing each slide in isolation, focus on the simplified concept breakdowns below to see what each term means in everyday language and how they are tested together.`;
  }

  const combinedRules = coreRules.slice(0, 2).join(' ');
  const intuitionSuffix = intuitions[0] ? ` ${intuitions[0]}` : '';
  return `${progressionIntro}${combinedRules}${intuitionSuffix}`.trim();
}

/**
 * Consolidates, deduplicates, and organizes simplified concepts across the batch.
 */
function consolidateConcepts(batch: SlideAnalysis[]): CondensedConcept[] {
  const conceptMap = new Map<string, { displayTitle: string; explanation: string; slides: Set<number> }>();

  for (const slide of batch) {
    if (slide.isIntroLogistics && batch.some(s => !s.isIntroLogistics)) continue;

    if (slide.detailedTakeaways && slide.detailedTakeaways.length > 0) {
      for (const t of slide.detailedTakeaways) {
        const cleanLabel = t.label.trim();
        const normKey = cleanLabel.toLowerCase();

        if (conceptMap.has(normKey)) {
          const existing = conceptMap.get(normKey)!;
          existing.slides.add(slide.pageNumber);
          if (t.explanation.length > existing.explanation.length) {
            existing.explanation = t.explanation;
          }
        } else {
          conceptMap.set(normKey, {
            displayTitle: cleanLabel,
            explanation: t.explanation,
            slides: new Set([slide.pageNumber])
          });
        }
      }
    } else if (slide.coreRule && !slide.isIntroLogistics) {
      const normKey = slide.title.toLowerCase();
      if (!conceptMap.has(normKey)) {
        conceptMap.set(normKey, {
          displayTitle: slide.title,
          explanation: slide.coreRule,
          slides: new Set([slide.pageNumber])
        });
      }
    }
  }

  const results: CondensedConcept[] = [];
  conceptMap.forEach((val) => {
    results.push({
      title: val.displayTitle,
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
        points.push(`Slide ${slide.pageNumber} (${slide.title}): ${clean}`);
      }
    }
  }

  if (points.length === 0) {
    const substantive = batch.filter(s => !s.isIntroLogistics);
    for (const s of substantive.slice(0, 3)) {
      if (s.detailedTakeaways && s.detailedTakeaways.length >= 2) {
        points.push(
          `Slide ${s.pageNumber} (${s.title}): Be ready to clearly distinguish between "${s.detailedTakeaways[0].label}" and "${s.detailedTakeaways[1].label}" using a plain-English example.`
        );
      }
    }
  }

  return points.slice(0, 4);
}

/**
 * Selects or synthesizes a multi-slide active recall check for the 10-slide block.
 */
function pickSynthesisCheck(
  batch: SlideAnalysis[],
  startPage: number,
  endPage: number
): { question: string; answer: string; testedSlides: number[] } {
  const substantive = batch.filter(s => !s.isIntroLogistics);
  const sorted = [...(substantive.length > 0 ? substantive : batch)].sort((a, b) => b.importanceScore - a.importanceScore);

  if (sorted.length >= 2) {
    const top1 = sorted[0];
    const top2 = sorted[1];
    const t1 = top1.detailedTakeaways?.[0];
    const t2 = top2.detailedTakeaways?.[0];
    if (t1 && t2 && top1.pageNumber !== top2.pageNumber) {
      return {
        question: `Module Synthesis (Slides ${startPage}–${endPage}): In plain English, explain "${t1.label}" (from Slide ${top1.pageNumber}: ${top1.title}) and "${t2.label}" (from Slide ${top2.pageNumber}: ${top2.title}).`,
        answer: `1. ${t1.label} (Slide ${top1.pageNumber}): ${t1.explanation}\n\n2. ${t2.label} (Slide ${top2.pageNumber}): ${t2.explanation}`,
        testedSlides: [top1.pageNumber, top2.pageNumber].sort((a, b) => a - b)
      };
    }
  }

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
    answer: `Review the simplified concepts and definitions summarized in this module block.`,
    testedSlides: [startPage, endPage]
  };
}
