import { SlideAnalysis, CompleteSlideStudyPackage } from './universitySlides';

/**
 * Clean text for natural conversational speech synthesis (Sol Voice Profile)
 * Converts abbreviations, numbered lists, formulas, units, and symbols into warm, natural spoken English
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
    .replace(/\bw\/o\s*/gi, 'without ')
    .replace(/\bw\/\s*/gi, 'with ')
    .replace(/\bdept\.\s*/gi, 'department ')
    .replace(/\bcalc\.\s*/gi, 'calculation ')
    .replace(/\bapprox\.\s*/gi, 'approximately ')
    .replace(/\bfig\.\s*(\d+)/gi, 'figure $1')
    .replace(/\bpg\.\s*(\d+)/gi, 'page $1')
    .replace(/\bp\.\s*(\d+)/gi, 'page $1')
    .replace(/\bno\.\s*(\d+)/gi, 'number $1')
    // Big-O and exponents / chemical formulas -> natural speech
    .replace(/\bO\(1\)/g, 'Big O of 1')
    .replace(/\bO\(n\)/gi, 'Big O of n')
    .replace(/\bO\(log\s*n\)/gi, 'Big O of log n')
    .replace(/\bO\(n\s*log\s*n\)/gi, 'Big O of n log n')
    .replace(/\bO\(n(?:\^2|²)\)/gi, 'Big O of n squared')
    .replace(/\bO\(n(?:\^3|³)\)/gi, 'Big O of n cubed')
    .replace(/([a-zA-Z0-9])\^2\b|([a-zA-Z0-9])²/g, '$1$2 squared')
    .replace(/([a-zA-Z0-9])\^3\b|([a-zA-Z0-9])³/g, '$1$2 cubed')
    .replace(/\bH2O\b|\bH₂O\b/g, 'H 2 O')
    .replace(/\bCO2\b|\bCO₂\b/g, 'C O 2')
    .replace(/\bO2\b|\bO₂\b/g, 'O 2')
    // Preserve technical slash terms & scientific units before handling generic slashes
    .replace(/\bTCP\/IP\b/gi, 'T C P I P')
    .replace(/\bI\/O\b/g, 'input output')
    .replace(/\bCI\/CD\b/gi, 'C I C D')
    .replace(/\bUI\/UX\b/gi, 'U I U X')
    .replace(/\bAC\/DC\b/gi, 'A C D C')
    .replace(/\bm\/s(?:\^2|²)\b/g, 'meters per second squared')
    .replace(/\bm\/s\b/g, 'meters per second')
    .replace(/\bkm\/h\b/g, 'kilometers per hour')
    .replace(/\b1\/2\b/g, 'one half')
    .replace(/\b1\/3\b/g, 'one third')
    .replace(/\b1\/4\b/g, 'one quarter')
    .replace(/\b3\/4\b/g, 'three quarters')
    .replace(/\band\/or\b/gi, 'and or')
    // Only turn slash between two lowercase/alphabetic words into " or "
    .replace(/\b([a-zA-Z]{2,})\s*\/\s*([a-zA-Z]{2,})\b/g, '$1 or $2')
    // Mathematical / logical symbols -> spoken phrases
    .replace(/\s*&\s*/g, ' and ')
    .replace(/\s*\+\s*/g, ' plus ')
    .replace(/\s*=\s*/g, ' equals ')
    .replace(/\s*≠\s*/g, ' does not equal ')
    .replace(/\s*≈\s*/g, ' is approximately ')
    .replace(/\s*%\s*/g, ' percent ')
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
 * with calm, measured human breathing pauses between sentences, and splits
 * overly long sentences (>160 chars) at natural clause boundaries so Chrome's
 * cloud neural voice never stalls mid-sentence.
 */
function splitIntoConversationalSentences(text: string): string[] {
  if (!text) return [];
  const rawSentences = text
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const chunks: string[] = [];
  for (const sentence of rawSentences) {
    if (sentence.length <= 165) {
      chunks.push(sentence);
    } else {
      // Split long sentences at natural conversational clause transitions
      const clauseParts = sentence
        .split(/(?<=,)\s+(?=(?:which|where|while|whereas|meaning|because|so that|allowing|ensuring|making|and|but)\b)/i)
        .map(p => p.trim())
        .filter(p => p.length > 0);
      if (clauseParts.length > 1) {
        chunks.push(...clauseParts);
      } else {
        chunks.push(sentence);
      }
    }
  }

  return chunks.length > 0 ? chunks : [text];
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
    pauseAfterMs: 360
  });

  // 2. Sentence-by-sentence delivery for natural human cadence (Sol style)
  const sentences = splitIntoConversationalSentences(takeaway);
  sentences.forEach((sentence, idx) => {
    const isLast = idx === sentences.length - 1;
    segments.push({
      text: sentence,
      pauseAfterMs: isLast ? 650 : 380
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

  text += `📖 _Study full slides, AI breakdowns & practice quizzes on AcademicPrep:_\nhttps://acadmicprep.com/university`;
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
  text += `🔗 _Study free with interactive quizzes & flashcards:_\nhttps://acadmicprep.com/university`;
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
 * Client-side Canvas generator to download a clean Minimalist Neutral 1-Page Summary Card as PNG
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

    // Helper for rounded rectangles
    const drawRoundedCard = (x: number, y: number, w: number, h: number, r: number, fill: string, stroke?: string) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    // 1. Pure White Minimalist Canvas Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle neutral outer frame
    ctx.strokeStyle = '#E5E5E5';
    ctx.lineWidth = 12;
    ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);

    // 2. Minimalist Neutral Header Banner
    drawRoundedCard(40, 40, canvas.width - 80, 175, 20, '#FAFAFA', '#E5E5E5');

    // Brand Badge inside Header
    drawRoundedCard(72, 68, 44, 44, 10, '#2563EB');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText('AP', 80, 98);

    // Top Brand Subtitle
    ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#525252';
    ctx.fillText('ACADEMIC PREP • UNIVERSITY REVISION SHEET', 132, 96);

    // Deck Title
    ctx.font = 'bold 38px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillStyle = '#171717';
    const cleanTitle = pkg.deckTitle.length > 44 ? pkg.deckTitle.substring(0, 42) + '...' : pkg.deckTitle;
    ctx.fillText(cleanTitle, 72, 152);

    // Course Metadata
    ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#525252';
    ctx.fillText(`${pkg.courseCode || 'UNIVERSITY COURSE'}  •  ${pkg.totalSlides} SLIDES ANALYZED  •  KEY TAKEAWAYS`, 72, 188);

    let yOffset = 265;

    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines = 2) => {
      const words = text.split(' ');
      let line = '';
      let linesDrawn = 0;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line.trim(), x, y);
          line = words[n] + ' ';
          y += lineHeight;
          linesDrawn++;
          if (linesDrawn >= maxLines - 1 && n < words.length - 1) {
            let remaining = line + words.slice(n + 1).join(' ');
            while (ctx.measureText(remaining + '...').width > maxWidth && remaining.length > 0) {
              remaining = remaining.slice(0, -1).trim();
            }
            ctx.fillText(remaining + (remaining.length < (line + words.slice(n + 1).join(' ')).length ? '...' : ''), x, y);
            return y + lineHeight;
          }
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line.trim(), x, y);
      return y + lineHeight;
    };

    // SECTION 1: MUST-MEMORIZE PRINCIPLES
    ctx.fillStyle = '#171717';
    ctx.font = 'bold 23px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText('KEY TAKEAWAYS & CORE PRINCIPLES', 56, yOffset);
    yOffset += 24;

    const theorems = pkg.cramSheetSummary.mustMemorizeTheorems.slice(0, 4);
    theorems.forEach((t, i) => {
      drawRoundedCard(56, yOffset, canvas.width - 112, 86, 16, '#FAFAFA', '#E5E5E5');
      drawRoundedCard(76, yOffset + 21, 36, 36, 9, '#171717');

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      ctx.fillText(`${i + 1}`, 89, yOffset + 45);

      ctx.fillStyle = '#262626';
      ctx.font = '19px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      wrapText(t, 128, yOffset + 36, canvas.width - 210, 26, 2);
      yOffset += 100;
    });

    yOffset += 22;

    // SECTION 2: ESSENTIAL FORMULAS & DEFINITIONS
    if (pkg.cramSheetSummary.formulasToRecite && pkg.cramSheetSummary.formulasToRecite.length > 0) {
      ctx.fillStyle = '#171717';
      ctx.font = 'bold 23px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
      ctx.fillText('ESSENTIAL FORMULAS & DEFINITIONS', 56, yOffset);
      yOffset += 24;

      const formulas = pkg.cramSheetSummary.formulasToRecite.slice(0, 4);
      formulas.forEach((f, i) => {
        drawRoundedCard(56, yOffset, canvas.width - 112, 68, 14, '#FAFAFA', '#E5E5E5');
        drawRoundedCard(76, yOffset + 16, 36, 36, 9, '#171717');

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.fillText(`F${i + 1}`, 84, yOffset + 40);

        ctx.fillStyle = '#171717';
        ctx.font = '600 19px monospace, -apple-system, sans-serif';
        wrapText(f, 128, yOffset + 40, canvas.width - 210, 24, 1);
        yOffset += 80;
      });
      yOffset += 22;
    }

    // SECTION 3: TOP EXAMINER QUESTIONS
    ctx.fillStyle = '#171717';
    ctx.font = 'bold 23px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText('HIGH-FREQUENCY EXAM QUESTIONS', 56, yOffset);
    yOffset += 24;

    const questions = pkg.cramSheetSummary.highFrequencyQuestions.slice(0, 3);
    questions.forEach((q, i) => {
      drawRoundedCard(56, yOffset, canvas.width - 112, 86, 16, '#FAFAFA', '#E5E5E5');
      drawRoundedCard(76, yOffset + 21, 36, 36, 9, '#171717');

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      ctx.fillText(`Q${i + 1}`, 83, yOffset + 45);

      ctx.fillStyle = '#262626';
      ctx.font = '19px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
      wrapText(q, 128, yOffset + 36, canvas.width - 210, 26, 2);
      yOffset += 100;
    });

    // FOOTER
    drawRoundedCard(40, canvas.height - 96, canvas.width - 80, 64, 14, '#171717');
    ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('acadmicprep.com', 72, canvas.height - 57);

    ctx.font = '17px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillStyle = '#A3A3A3';
    ctx.fillText('University Lecture Slides  •  Sol Audio Cram  •  Plain-English Revision Studio', 290, canvas.height - 57);

    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/png');
  });
}
