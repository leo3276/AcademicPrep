import { SlideAnalysis, CompleteSlideStudyPackage } from './universitySlides';

/**
 * Clean text for natural conversational speech synthesis (Sol Voice Profile)
 * Converts abbreviations, numbered lists, formulas, and symbols into warm, natural spoken English
 */
export function cleanTextForSpeech(raw: string): string {
  if (!raw) return '';
  return raw
    // Strip markdown formatting
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/^[•\-\*]\s+/gm, '')
    // Convert inline numbered lists (1), (2), (3) into natural spoken ordinals
    .replace(/\(1\)\s*/g, 'First, ')
    .replace(/\(2\)\s*/g, 'Second, ')
    .replace(/\(3\)\s*/g, 'Third, ')
    .replace(/\(4\)\s*/g, 'Fourth, ')
    .replace(/\(5\)\s*/g, 'Fifth, ')
    .replace(/\(6\)\s*/g, 'Sixth, ')
    .replace(/\(7\)\s*/g, 'Seventh, ')
    // Common academic abbreviations -> spoken words
    .replace(/\be\.g\.,?\s*/gi, 'for example, ')
    .replace(/\bi\.e\.,?\s*/gi, 'that is, ')
    .replace(/\betc\.,?\s*/gi, 'and so on, ')
    .replace(/\bvs\.\s*/gi, 'versus ')
    .replace(/\bvs\b/gi, 'versus')
    .replace(/\bw\/\s*/gi, 'with ')
    .replace(/\bw\/o\s*/gi, 'without ')
    .replace(/\bdept\.\s*/gi, 'department ')
    .replace(/\bcalc\.\s*/gi, 'calculation ')
    .replace(/\bapprox\.\s*/gi, 'approximately ')
    .replace(/\bfig\.\s*(\d+)/gi, 'figure $1')
    .replace(/\bpg\.\s*(\d+)/gi, 'page $1')
    .replace(/\bp\.\s*(\d+)/gi, 'page $1')
    .replace(/\bno\.\s*(\d+)/gi, 'number $1')
    // Mathematical / logical symbols -> spoken phrases
    .replace(/\s*&\s*/g, ' and ')
    .replace(/\s*\+\s*/g, ' plus ')
    .replace(/\s*=\s*/g, ' equals ')
    .replace(/\s*≠\s*/g, ' does not equal ')
    .replace(/\s*≈\s*/g, ' is approximately ')
    .replace(/\s*%\s*/g, ' percent ')
    .replace(/\s*\/\s*/g, ' or ')
    .replace(/\s*→\s*/g, ', which leads to ')
    .replace(/\s*<=\s*|\s*≤\s*/g, ' is less than or equal to ')
    .replace(/\s*>=\s*|\s*≥\s*/g, ' is greater than or equal to ')
    // Turn em-dashes and semicolons into natural comma breath pauses
    .replace(/\s*[—–;]\s*/g, ', ')
    // Remove unwanted citation brackets like [1], [Slide 4]
    .replace(/\[\d+\]/g, '')
    // Clean multiple spaces
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export interface AudioSpeechSegment {
  text: string;
  pauseAfterMs: number;
}

/**
 * Extract clean plain-English key takeaway for a slide
 */
export function getSlideKeyTakeawayText(slide: SlideAnalysis): string {
  if (slide.coreRule && slide.coreRule.trim().length > 0) {
    return cleanTextForSpeech(slide.coreRule);
  }
  if (slide.detailedTakeaways && slide.detailedTakeaways.length > 0 && slide.detailedTakeaways[0].explanation) {
    return cleanTextForSpeech(slide.detailedTakeaways[0].explanation);
  }
  if (slide.simplifiedPoints && slide.simplifiedPoints.length > 0) {
    return cleanTextForSpeech(slide.simplifiedPoints[0]);
  }
  return cleanTextForSpeech(slide.title);
}

/**
 * Splits a paragraph into natural sentence-level thought units so Sol speaks
 * with calm, measured human breathing pauses between sentences.
 */
function splitIntoConversationalSentences(text: string): string[] {
  if (!text) return [];
  const rawSentences = text
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
  return rawSentences.length > 0 ? rawSentences : [text];
}

/**
 * Concise, focused Sol Audio Cram:
 * 1. Announces slide ("Slide 1." or "Next slide. Slide 2.")
 * 2. Speaks ONLY the Key Takeaway sentence-by-sentence with natural human pauses.
 */
export function getSlideAudioSpeechSegments(
  slide: SlideAnalysis,
  deckTitle?: string,
  isAdvancing: boolean = false
): AudioSpeechSegment[] {
  const segments: AudioSpeechSegment[] = [];
  const takeaway = getSlideKeyTakeawayText(slide);

  // 1. Calm slide announcement with thoughtful breath pause
  const announcement = isAdvancing
    ? `Next slide. Slide ${slide.pageNumber}.`
    : `Slide ${slide.pageNumber}.`;

  segments.push({
    text: announcement,
    pauseAfterMs: 380
  });

  // 2. Sentence-by-sentence delivery for natural human cadence (Sol style)
  const sentences = splitIntoConversationalSentences(takeaway);
  sentences.forEach((sentence, idx) => {
    const isLast = idx === sentences.length - 1;
    segments.push({
      text: sentence,
      pauseAfterMs: isLast ? 750 : 420
    });
  });

  return segments;
}

/**
 * Dedicated Sol Voice Resolver (ChatGPT "Sol" persona: "Savvy and relaxed" — warm, smooth, laid-back feminine alto).
 * Strictly prioritizes cloud neural feminine voices (Edge Online Natural Ava/Emma/Aria/Jenny, Chrome Google US English,
 * Apple Ava/Samantha) over offline OS SAPI5 robotic voices.
 */
export function getSolVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices || voices.length === 0) return null;

  // Tier 1: Microsoft Edge Cloud Neural Feminine voices (Ava & Emma are warm, relaxed, conversational alto voices closest to Sol)
  const edgeNeuralOrder = ['ava', 'emma', 'jenny', 'aria', 'michelle', 'sonia', 'libby', 'natasha'];
  for (const keyword of edgeNeuralOrder) {
    const match = voices.find(v =>
      v.lang.startsWith('en') &&
      (v.name.includes('Natural') || v.name.includes('Online') || !v.localService) &&
      v.name.toLowerCase().includes(keyword)
    );
    if (match) return match;
  }

  // Tier 2: Chrome Cloud Neural Voice ("Google US English" in Chrome is a smooth, warm online feminine voice)
  const googleUS = voices.find(v =>
    v.name === 'Google US English' ||
    (v.lang === 'en-US' && v.name.includes('Google'))
  );
  if (googleUS) return googleUS;

  const googleUKFemale = voices.find(v =>
    v.name.includes('Google UK English Female') ||
    (v.lang.startsWith('en') && v.name.includes('Google') && !v.name.includes('Male'))
  );
  if (googleUKFemale) return googleUKFemale;

  // Tier 3: Apple macOS / iOS Premium & Enhanced Feminine voices
  const appleOrder = ['ava', 'allison', 'samantha', 'serena', 'karen', 'moira'];
  for (const keyword of appleOrder) {
    const match = voices.find(v =>
      v.lang.startsWith('en') &&
      v.name.toLowerCase().includes(keyword)
    );
    if (match) return match;
  }

  // Tier 4: Any other online/network English voice (!localService)
  const anyCloudEn = voices.find(v => v.lang.startsWith('en') && !v.localService);
  if (anyCloudEn) return anyCloudEn;

  // Tier 5: Offline Windows Feminine fallback (Zira) — never David/Mark
  const zira = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('zira'));
  if (zira) return zira;

  // Universal English Fallback
  return voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
}

/**
 * Returns optimal Sol pitch and rate for the resolved voice engine.
 * ChatGPT's "Sol" voice has a savvy, relaxed, warm alto quality (slightly lower feminine pitch ~0.94-0.96, unhurried cadence).
 */
export function getSolVoiceProsody(voice: SpeechSynthesisVoice | null, baseSpeed: number = 1.0): { pitch: number; rate: number } {
  const name = voice?.name?.toLowerCase() || '';
  if (name.includes('google us english') || name.includes('google')) {
    return {
      pitch: 0.94,
      rate: Number((baseSpeed * 0.97).toFixed(2))
    };
  }
  if (name.includes('natural') || name.includes('online')) {
    return {
      pitch: 0.96,
      rate: Number((baseSpeed * 0.98).toFixed(2))
    };
  }
  return {
    pitch: 0.93,
    rate: Number((baseSpeed * 0.96).toFixed(2))
  };
}

// Backwards-compatible exports
export const getBestNaturalVoice = getSolVoice;
export function getAvailableNaturalVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  const sol = getSolVoice(voices);
  return sol ? [sol] : [];
}

/**
 * Generate formatted WhatsApp markdown for a single slide
 */
export function generateSlideWhatsAppText(
  slide: SlideAnalysis,
  deckTitle: string,
  courseCode?: string
): string {
  const code = courseCode ? courseCode.toUpperCase().trim() : 'COURSE';
  let text = `📚 *${code}: ${deckTitle}*\n`;
  text += `⚡ *Slide ${slide.pageNumber}: ${slide.title}* (AcademicPrep Digest)\n\n`;

  text += `📌 *Core Exam Principle:*\n${slide.coreRule}\n\n`;

  if (slide.keyDefinitions && slide.keyDefinitions.length > 0) {
    text += `🔑 *Must-Know Definitions:*\n`;
    slide.keyDefinitions.slice(0, 3).forEach((d) => {
      text += `• *${d.term}:* ${d.definition}\n`;
    });
    text += `\n`;
  }

  if (slide.keyFormulas && slide.keyFormulas.length > 0) {
    text += `📐 *Essential Formulas / Rules:*\n`;
    slide.keyFormulas.slice(0, 3).forEach((f) => {
      text += `• \`${f}\`\n`;
    });
    text += `\n`;
  }

  if (slide.examTrap) {
    text += `⚠️ *Lecturer Exam Trap:*\n${slide.examTrap}\n\n`;
  }

  if (slide.activeRecallPrompt?.question) {
    text += `🎯 *Likely Exam Question:*\n*Q:* ${slide.activeRecallPrompt.question}\n*A:* ${slide.activeRecallPrompt.answer}\n\n`;
  }

  text += `📖 _Study full slides, AI breakdowns & practice quizzes on AcademicPrep:_\nhttps://academicprep.app/university`;
  return text;
}

/**
 * Generate formatted WhatsApp markdown for the entire slide deck revision pack
 */
export function generateDeckWhatsAppText(pkg: CompleteSlideStudyPackage): string {
  const code = pkg.courseCode ? pkg.courseCode.toUpperCase().trim() : 'COURSE';
  let text = `🎓 *${code}: ${pkg.deckTitle}*\n`;
  text += `⚡ *1-Page Exam Cram Pack & Revision Sheet* (AcademicPrep)\n\n`;

  text += `📌 *MUST-MEMORIZE PRINCIPLES:*\n`;
  pkg.cramSheetSummary.mustMemorizeTheorems.slice(0, 5).forEach((t, i) => {
    text += `${i + 1}. ${t}\n`;
  });
  text += `\n`;

  if (pkg.cramSheetSummary.formulasToRecite && pkg.cramSheetSummary.formulasToRecite.length > 0) {
    text += `📐 *ESSENTIAL FORMULAS & EQUATIONS:*\n`;
    pkg.cramSheetSummary.formulasToRecite.slice(0, 6).forEach((f) => {
      text += `• \`${f}\`\n`;
    });
    text += `\n`;
  }

  text += `🎯 *TOP HIGH-FREQUENCY EXAM QUESTIONS:*\n`;
  pkg.cramSheetSummary.highFrequencyQuestions.slice(0, 5).forEach((q, i) => {
    text += `Q${i + 1}: ${q}\n`;
  });
  text += `\n`;

  text += `📊 _${pkg.totalSlides} Slides Analyzed • Plain-English Study Studio_\n`;
  text += `🔗 _Study free with interactive quizzes & flashcards:_\nhttps://academicprep.app/university`;
  return text;
}

/**
 * Legacy single-string generator for backwards compatibility
 */
export function getSlideAudioScript(
  slide: SlideAnalysis,
  deckTitle?: string,
  totalSlides?: number
): string {
  const segments = getSlideAudioSpeechSegments(slide, deckTitle);
  return segments.map(s => s.text).join(' ');
}

/**
 * Client-side Canvas generator to download a clean Apple-style 1-Page Summary Card as PNG
 */
export function generateSummaryCardPngBlob(pkg: CompleteSlideStudyPackage): Promise<Blob | null> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      resolve(null);
      return;
    }

    // 1. Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle outer border
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 16;
    ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

    // 2. Header Top Banner (Slate 900)
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(16, 16, canvas.width - 32, 180);

    // Top Brand Subtitle
    ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('ACADEMICPREP • GHANA TERTIARY REVISION CO-PILOT', 60, 65);

    // Deck Title
    ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    const cleanTitle = pkg.deckTitle.length > 40 ? pkg.deckTitle.substring(0, 38) + '...' : pkg.deckTitle;
    ctx.fillText(cleanTitle, 60, 125);

    // Metadata pill
    ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#38BDF8';
    ctx.fillText(`${pkg.courseCode || 'COURSE'} • 1-PAGE HIGH-YIELD CHEAT SHEET • ${pkg.totalSlides} SLIDES`, 60, 165);

    let yOffset = 240;

    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines = 4) => {
      const words = text.split(' ');
      let line = '';
      let linesDrawn = 0;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
          linesDrawn++;
          if (linesDrawn >= maxLines - 1 && n < words.length - 1) {
            ctx.fillText(line.trim() + '...', x, y);
            return y + lineHeight;
          }
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y);
      return y + lineHeight;
    };

    // SECTION 1: MUST-MEMORIZE PRINCIPLES
    ctx.fillStyle = '#1E293B';
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText('📌 MUST-MEMORIZE PRINCIPLES', 60, yOffset);
    yOffset += 40;

    const theorems = pkg.cramSheetSummary.mustMemorizeTheorems.slice(0, 4);
    ctx.font = '22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    theorems.forEach((t, i) => {
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(60, yOffset - 25, canvas.width - 120, 68);
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 2;
      ctx.strokeRect(60, yOffset - 25, canvas.width - 120, 68);

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      ctx.fillText(`${i + 1}.`, 80, yOffset + 16);

      ctx.fillStyle = '#334155';
      ctx.font = '20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      const truncated = t.length > 90 ? t.substring(0, 88) + '...' : t;
      ctx.fillText(truncated, 115, yOffset + 16);
      yOffset += 82;
    });

    yOffset += 30;

    // SECTION 2: ESSENTIAL FORMULAS & RULES
    if (pkg.cramSheetSummary.formulasToRecite && pkg.cramSheetSummary.formulasToRecite.length > 0) {
      ctx.fillStyle = '#1E293B';
      ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
      ctx.fillText('📐 ESSENTIAL FORMULAS & DEFINITIONS', 60, yOffset);
      yOffset += 40;

      const formulas = pkg.cramSheetSummary.formulasToRecite.slice(0, 4);
      formulas.forEach((f) => {
        ctx.fillStyle = '#EFF6FF';
        ctx.fillRect(60, yOffset - 22, canvas.width - 120, 56);
        ctx.strokeStyle = '#BFDBFE';
        ctx.lineWidth = 2;
        ctx.strokeRect(60, yOffset - 22, canvas.width - 120, 56);

        ctx.fillStyle = '#1E40AF';
        ctx.font = 'bold 20px monospace, -apple-system, sans-serif';
        const truncated = f.length > 70 ? f.substring(0, 68) + '...' : f;
        ctx.fillText(truncated, 85, yOffset + 13);
        yOffset += 68;
      });
      yOffset += 30;
    }

    // SECTION 3: TOP EXAMINER QUESTIONS
    ctx.fillStyle = '#1E293B';
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText('🎯 TOP EXAM QUESTIONS TO MASTER', 60, yOffset);
    yOffset += 40;

    const questions = pkg.cramSheetSummary.highFrequencyQuestions.slice(0, 3);
    questions.forEach((q, i) => {
      ctx.fillStyle = '#FFFBEB';
      ctx.fillRect(60, yOffset - 22, canvas.width - 120, 75);
      ctx.strokeStyle = '#FDE68A';
      ctx.lineWidth = 2;
      ctx.strokeRect(60, yOffset - 22, canvas.width - 120, 75);

      ctx.fillStyle = '#92400E';
      ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      ctx.fillText(`Q${i + 1}:`, 80, yOffset + 14);

      ctx.fillStyle = '#78350F';
      ctx.font = '19px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      wrapText(q, 125, yOffset + 14, canvas.width - 270, 26, 2);
      yOffset += 92;
    });

    // FOOTER
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(16, canvas.height - 100, canvas.width - 32, 84);

    ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('AcademicPrep.app', 60, canvas.height - 50);

    ctx.font = '18px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('Interactive Lecture Slides • AI Studio Breakdown • Spaced Repetition Timetables', 300, canvas.height - 50);

    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/png');
  });
}
