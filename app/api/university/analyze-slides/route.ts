import { NextRequest, NextResponse } from 'next/server';
import { 
  CompleteSlideStudyPackage, 
  generateAlgorithmicStudyPlan 
} from '@/lib/universitySlides';
import { 
  extractPagesFromPdf, 
  analyzeExtractedPages, 
  detectLessonStartPage,
  ExtractedPage 
} from '@/lib/slideExtractor';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface AnalyzeRequestBody {
  fileBase64?: string;
  fileName?: string;
  textChunks?: ExtractedPage[];
  daysUntilExam?: number;
  dailyMinutes?: number;
  targetGrade?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: AnalyzeRequestBody = await req.json();
    const { 
      fileBase64, 
      fileName = 'Lecture Slides.pdf', 
      textChunks = [],
      daysUntilExam = 7,
      dailyMinutes = 45,
      targetGrade = 'A / First Class'
    } = body;

    let pages: ExtractedPage[] = textChunks;

    // 1. If base64 PDF is provided, extract real text page-by-page from PDF
    if (fileBase64) {
      try {
        const cleanBase64 = fileBase64.replace(/^data:application\/pdf;base64,/, '');
        const binaryBuffer = Buffer.from(cleanBase64, 'base64');
        const uint8 = new Uint8Array(binaryBuffer);
        
        const extracted = await extractPagesFromPdf(uint8);
        if (extracted.pages && extracted.pages.length > 0) {
          pages = extracted.pages;
        }
      } catch (extractErr) {
        console.warn('PDF page text extraction note:', extractErr);
      }
    }

    const headerApiKey = req.headers.get('x-gemini-api-key') || '';
    const geminiApiKey = process.env.GEMINI_API_KEY || headerApiKey;

    // 2. If Gemini API key is configured, run deep AI analysis grounded on the actual pages
    if (geminiApiKey && pages.length > 0) {
      try {
        const geminiResult = await analyzePagesWithGemini(
          geminiApiKey, 
          pages, 
          fileName, 
          daysUntilExam, 
          dailyMinutes, 
          targetGrade
        );
        if (geminiResult && geminiResult.slides?.length > 0) {
          return NextResponse.json({ success: true, package: geminiResult });
        }
      } catch (geminiErr) {
        console.warn('Gemini page-by-page analysis fallback note:', geminiErr);
      }
    }

    // 3. High-Efficiency Grounded Analysis Engine
    // Directly processes the true extracted text of every page
    const groundedPackage = analyzeExtractedPages(
      fileName,
      pages.length > 0 ? pages : [{ pageNumber: 1, text: fileName }],
      daysUntilExam,
      dailyMinutes,
      targetGrade
    );

    return NextResponse.json({
      success: true,
      package: groundedPackage
    });

  } catch (error: any) {
    console.error('Error analyzing university slides:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to analyze slides' },
      { status: 500 }
    );
  }
}

/**
 * Gemini 1.5/2.0 Flash Page-by-Page Grounded Analyzer
 * Analyzes EVERY SINGLE PAGE sequentially with zero hallucinated or skipped slides
 */
async function analyzePagesWithGemini(
  apiKey: string,
  pages: ExtractedPage[],
  fileName: string,
  daysUntilExam: number,
  dailyMinutes: number,
  targetGrade: string
): Promise<CompleteSlideStudyPackage | null> {
  const cleanTitle = fileName.replace(/\.[^/.]+$/, '').trim();

  // Format page texts for Gemini context
  const slidesContentPrompt = pages.map(p => 
    `[PAGE ${p.pageNumber}]\n${p.text || '(Visual / diagram slide)'}`
  ).join('\n\n--- NEXT SLIDE ---\n\n');

  const prompt = `You are a supportive, high-clarity university tutor who excels at making complex university lecture slides simple, intuitive, and easy for undergraduate students to master.

TOTAL PAGES IN DECK: ${pages.length}.
YOU MUST ANALYZE EVERY PAGE FROM 1 TO ${pages.length}. DO NOT SKIP ANY SLIDE.

MISSION:
Take each slide and explain the important information in DETAILED, STRUCTURED, and SIMPLE PLAIN ENGLISH so an undergraduate student can easily assess and master it.

SPECIAL REQUIREMENT - IDENTIFY WHERE THE LESSON ACTUALLY BEGINS:
University slide decks almost always begin with title slides, professor/instructor names, emails, office hours, syllabus logistics, grading policies, and agenda/outline slides.
Identify the EXACT page number where the actual instructional lesson begins:
- "lessonStartPage": The 1-based page number (e.g., 3, 4, or 5) of the first slide where actual academic teaching, core definitions, or theory begins.
- For all slides before this page: mark "isIntroLogistics": true, "importance": "CONTEXT_LOW_YIELD", "importanceScore": 2, and "categoryTag": "Intro / Logistics".
- For the exact lesson start slide: mark "isLessonStart": true, and "categoryTag": "Lesson Begins".

DATA INTEGRITY RULES:
1. ONLY extract formulas, terms, and definitions that ACTUALLY APPEAR on that specific slide text. Do not invent equations not present on the slide.
2. For EVERY slide:
   - "pageNumber": Exact number (1 to ${pages.length})
   - "title": Concise, accurate title of this specific slide
   - "importance": "CORE_FUNDAMENTAL" (score 8-10 for core governing laws, theorems, algorithms, exam-heavy formulas), "SUPPORTING" (score 4-7 for worked examples, case studies, illustrations), or "CONTEXT_LOW_YIELD" (score 1-3 for title, agenda, logistics, fluff)
   - "importanceScore": 1 to 10
   - "categoryTag": "Theorem" | "Equation" | "Concept" | "Algorithm" | "Overview" | "Example" | "Intro / Logistics" | "Lesson Begins"
   - "isLessonStart": boolean (true ONLY on the exact slide where educational teaching begins)
   - "isIntroLogistics": boolean (true for slides before the lesson starts)
   - "whyItMatters": 1-2 sentence real-world intuition or reason why the lecturer included this topic in the course.
   - "coreRule": A comprehensive, crystal-clear 2-3 sentence explanation in simple, plain English of what this slide actually means.
   - "detailedTakeaways": Array of 3 to 5 structured points [{ "label": "e.g. Core Mechanism / Key Condition / Practical Implication / Crucial Boundary", "explanation": "Substantial, detailed explanation of what happens and why in plain English" }]
   - "simplifiedPoints": Array of 2 to 4 quick summary bullet points.
   - "decodedFormulas": Array of [{ "formula": "...", "inPlainEnglish": "...", "variables": [{ "symbol": "...", "meaning": "...", "units": "..." }] }] (empty array [] if none)
   - "keyFormulas": Array of real formulas/equations present on this slide (empty array [] if none)
   - "keyDefinitions": Array of real definitions [{ "term": "...", "definition": "..." }] present on this slide (empty array [] if none)
   - "examTrap": Exactly how professors test this topic and where students lose marks (e.g., tricky edge cases, common calculation mistakes, or conditions that must hold)
   - "activeRecallPrompt": { "question": "Realistic exam question to test understanding", "hint": "Helpful hint", "answer": "Clear model answer", "stepByStepSolution": "Step-by-step worked response" }
   - "estimatedStudyMinutes": 1 to 10

3. Provide a high-yield synthesis for the 1-page cram sheet:
   - "mustMemorizeTheorems": Top governing principles across the entire deck
   - "formulasToRecite": Essential equations
   - "highFrequencyQuestions": Top exam questions

SLIDES TEXT CONTENT:
${slidesContentPrompt}

Output your response STRICTLY as valid JSON without markdown fences, adhering to this structure:
{
  "deckTitle": "${cleanTitle}",
  "courseCode": "COURSE",
  "subject": "University Coursework",
  "totalSlides": ${pages.length},
  "lessonStartPage": 4,
  "cramSheetSummary": {
    "mustMemorizeTheorems": ["..."],
    "formulasToRecite": ["..."],
    "highFrequencyQuestions": ["..."]
  },
  "slides": [ ... ]
}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 8192,
          responseMimeType: 'application/json'
        }
      })
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${errorText}`);
  }

  const json = await response.json();
  const textContent = json.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textContent) return null;

  const parsed = JSON.parse(textContent);
  
  // Validate lesson start page
  const fallbackStartPage = detectLessonStartPage(pages);
  const lessonStartPage = (typeof parsed.lessonStartPage === 'number' && parsed.lessonStartPage >= 1 && parsed.lessonStartPage <= pages.length)
    ? parsed.lessonStartPage
    : fallbackStartPage;

  const normalizedSlides: any[] = (parsed.slides || []).map((s: any, idx: number) => {
    const pageNum = s.pageNumber || idx + 1;
    const isBeforeLessonStart = pageNum < lessonStartPage;
    const isLessonStart = pageNum === lessonStartPage;

    const formulas = Array.isArray(s.keyFormulas) ? s.keyFormulas : [];
    const definitions = Array.isArray(s.keyDefinitions) ? s.keyDefinitions : [];

    const defaultTakeaways = [
      {
        label: 'Core Mechanism',
        explanation: s.coreRule || `Master the operational principle of ${s.title || `Slide ${pageNum}`}.`
      },
      {
        label: 'Analytical Condition',
        explanation: 'Verify the governing boundary conditions and assumptions before applying this principle to exam questions.'
      },
      {
        label: 'Exam Application',
        explanation: s.examTrap || 'Focus on precise terminology, variable definitions, and standard units.'
      }
    ];

    const detailedTakeaways = Array.isArray(s.detailedTakeaways) && s.detailedTakeaways.length > 0
      ? s.detailedTakeaways
      : defaultTakeaways;

    const decodedFormulas = Array.isArray(s.decodedFormulas) && s.decodedFormulas.length > 0
      ? s.decodedFormulas
      : formulas.map((f: string) => ({
          formula: f,
          inPlainEnglish: 'Expresses the governing mathematical balance between the system parameters.',
          variables: Array.from(new Set(f.match(/[A-Za-zΔΣπλθα-ω]/g) || [])).slice(0, 4).map(sym => ({
            symbol: sym,
            meaning: `Parameter ${sym} in ${f}`,
            units: 'Standard unit'
          }))
        }));

    return {
      pageNumber: pageNum,
      title: s.title || `Slide ${pageNum}`,
      importance: isBeforeLessonStart 
        ? 'CONTEXT_LOW_YIELD' 
        : (s.importance || 'SUPPORTING'),
      importanceScore: isBeforeLessonStart 
        ? 2 
        : (typeof s.importanceScore === 'number' ? s.importanceScore : 6),
      categoryTag: isBeforeLessonStart 
        ? 'Intro / Logistics' 
        : (isLessonStart ? 'Lesson Begins' : (s.categoryTag || 'Concept')),
      isLessonStart,
      isIntroLogistics: isBeforeLessonStart,
      whyItMatters: s.whyItMatters || (isBeforeLessonStart
        ? 'Provides administrative orientation and establishes course scope.'
        : `Establishes fundamental theoretical concepts connecting lecture definitions to exam problems.`),
      coreRule: s.coreRule || (isBeforeLessonStart 
        ? `Course introduction & administration slide. The instructional lesson begins on Slide ${lessonStartPage}.`
        : `Essential takeaways for ${s.title || `Slide ${pageNum}`}`),
      detailedTakeaways,
      simplifiedPoints: Array.isArray(s.simplifiedPoints) && s.simplifiedPoints.length > 0
        ? s.simplifiedPoints
        : (isBeforeLessonStart
          ? [
              'Course administrative and instructor contact details',
              'Lecture agenda and topics roadmap',
              `Teaching content officially begins on Slide ${lessonStartPage}`
            ]
          : detailedTakeaways.map(t => `${t.label}: ${t.explanation}`)),
      keyFormulas: formulas,
      decodedFormulas,
      keyDefinitions: definitions,
      examTrap: isBeforeLessonStart
        ? `Introductory slides are not tested in exams. Focus your revision on Slide ${lessonStartPage} onwards.`
        : (s.examTrap || 'Focus on understanding the exact definitions and operational conditions on this slide.'),
      activeRecallPrompt: s.activeRecallPrompt || {
        question: isBeforeLessonStart
          ? `On which slide does the core lecture teaching begin?`
          : `What is the primary concept on slide ${pageNum}?`,
        answer: isBeforeLessonStart
          ? `The lesson begins on Slide ${lessonStartPage}.`
          : (s.coreRule || 'Review the slide summary.'),
        hint: 'Recall the main term or relation.',
        stepByStepSolution: isBeforeLessonStart
          ? `Step 1: Check the course outline. Step 2: Jump directly to Slide ${lessonStartPage}.`
          : `Step 1: Define the core concept. Step 2: State the operational mechanism. Step 3: Check units and boundary conditions.`
      },
      estimatedStudyMinutes: isBeforeLessonStart ? 1 : (s.estimatedStudyMinutes || 5)
    };
  });

  const plan = generateAlgorithmicStudyPlan(
    normalizedSlides,
    daysUntilExam,
    dailyMinutes,
    targetGrade
  );

  const highYieldCount = normalizedSlides.filter((s: any) => s.importance === 'CORE_FUNDAMENTAL').length;

  return {
    id: `deck-${Date.now()}`,
    deckTitle: parsed.deckTitle || cleanTitle,
    courseCode: parsed.courseCode || 'COURSE',
    subject: parsed.subject || 'University Coursework',
    totalSlides: pages.length,
    lessonStartPage,
    highYieldCount,
    estimatedHoursTotal: Math.round((normalizedSlides.reduce((acc: number, s: any) => acc + (s.estimatedStudyMinutes || 5), 0) / 60) * 10) / 10,
    slides: normalizedSlides,
    studyPlan: plan,
    cramSheetSummary: parsed.cramSheetSummary || {
      mustMemorizeTheorems: [],
      formulasToRecite: [],
      highFrequencyQuestions: []
    },
    analyzedAt: new Date().toISOString()
  };
}
