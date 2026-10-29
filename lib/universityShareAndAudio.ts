import { SlideAnalysis, CompleteSlideStudyPackage } from './universitySlides';

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
 * Generate a spoken conversational script for Audio Cram mode
 */
export function getSlideAudioScript(
  slide: SlideAnalysis,
  deckTitle?: string,
  totalSlides?: number
): string {
  let script = `Slide ${slide.pageNumber}. ${slide.title}. `;

  if (slide.whyItMatters) {
    script += `Why this matters: ${slide.whyItMatters}. `;
  }

  script += `The core principle to remember is: ${slide.coreRule}. `;

  if (slide.keyDefinitions && slide.keyDefinitions.length > 0) {
    script += `Key terms you need to know. `;
    slide.keyDefinitions.slice(0, 3).forEach((kd) => {
      script += `${kd.term}. ${kd.definition}. `;
    });
  }

  if (slide.examTrap) {
    script += `Watch out for this lecturer exam trap: ${slide.examTrap}. `;
  }

  if (slide.activeRecallPrompt?.question) {
    script += `Quick active recall question. ${slide.activeRecallPrompt.question}. The answer is: ${slide.activeRecallPrompt.answer}.`;
  }

  return script;
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

    // Helper to wrap text
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
      // Pill card
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
