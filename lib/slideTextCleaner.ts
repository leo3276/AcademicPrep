// Pure TypeScript Slide Text Cleaner and Structure Parser
// Safe for both Client-Side and Server-Side execution in Next.js

export interface ParsedSlideStructure {
  title: string;
  bullets: string[];
  termDefinitions: Array<{ term: string; definition: string }>;
  fullText: string;
}

export function cleanBulletSymbols(str: string): string {
  if (!str) return '';
  return str
    .replace(/[\uF0A8\uF0D8\uF0B7\uF071\u25CF\u25AA\u25B6\u25C6\u25CB\u25BA\u2022\u2013\u2014•–—➢*✔▪▫]/g, ' • ')
    .replace(/\s+/g, ' ')
    .trim();
}

const HEADER_FOOTER_PATTERNS = [
  /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}/,
  /kwame adom/i,
  /dept of mktg/i,
  /polycarp/i,
  /^\d+\s*-\s*\d+$/,
  /^\d+$/,
  /^page\s+\d+/i,
  /^ugbs\s*\d+\b/i,
  /\b(all rights reserved|copyright|spring \d+|fall \d+|semester \d+)\b/i
];

export function isHeaderFooterLine(line: string): boolean {
  if (!line) return true;
  const trimmed = line.trim();
  if (trimmed.length <= 1) return true;
  return HEADER_FOOTER_PATTERNS.some(p => p.test(trimmed));
}

/**
 * Extracts line-bucketed and bullet-assembled slide data from pdf.js text items.
 */
export function extractStructuredSlideFromItems(items: any[]): ParsedSlideStructure {
  if (!items || items.length === 0) {
    return { title: 'Lecture Slide', bullets: [], termDefinitions: [], fullText: '' };
  }

  const lineBuckets: string[] = [];
  let currentY: number | null = null;
  let currentLine: string[] = [];

  for (const item of items) {
    if (!item || !item.str) continue;
    const y = Math.round(item.transform ? item.transform[5] : 0);
    if (currentY !== null && Math.abs(y - currentY) > 5) {
      if (currentLine.length > 0) {
        lineBuckets.push(currentLine.join(' '));
        currentLine = [];
      }
    }
    currentLine.push(item.str);
    currentY = y;
  }
  if (currentLine.length > 0) {
    lineBuckets.push(currentLine.join(' '));
  }

  // Filter out recurring header/footer stamps
  const cleanCandidates = lineBuckets
    .map(cleanBulletSymbols)
    .filter(l => !isHeaderFooterLine(l) && l.trim().length > 1);

  if (cleanCandidates.length === 0) {
    return { title: 'Lecture Slide', bullets: [], termDefinitions: [], fullText: '' };
  }

  // 1. Identify Title
  let title = cleanCandidates[0]
    .replace(/^[•\s\-\*\.\d]+/, '')
    .replace(/^(slide\s+\d+|page\s+\d+)\s*[:\-–—]?\s*/i, '')
    .replace(/^\d+\s*-\s*\d+\s*/, '')
    .trim();

  let bodyStartIndex = 1;

  // Title wrapping check (e.g. "UGBS 101: INTRODUCTION TO" + "BUSINESS ADMINISTRATION")
  if (
    cleanCandidates.length > 1 &&
    (title.endsWith(':') || /\b(to|of|and|for|in|on|with|part\s+[a-z0-9]+:?)$/i.test(title)) &&
    cleanCandidates[1].length < 60 &&
    !cleanCandidates[1].startsWith('•')
  ) {
    title = `${title} ${cleanCandidates[1].replace(/^[•\s\-\*\.\d]+/, '').trim()}`;
    bodyStartIndex = 2;
  }

  // Handle broken decorative part headers
  if (/^part\s+[a-z0-9]+:\s*today/i.test(title)) {
    title = "PART ONE: TODAY'S BUSINESS ENVIRONMENT";
    bodyStartIndex = cleanCandidates.length;
  }

  // 2. Assemble Multiline Body Bullets
  const bodyLines = cleanCandidates.slice(bodyStartIndex);
  const bullets: string[] = [];
  let currentBullet = '';

  for (const rawLine of bodyLines) {
    const hasBullet = /^[•\-\*]/.test(rawLine) || rawLine.startsWith('•');
    const cleanL = rawLine.replace(/^[•\-\*\s]+/, '').trim();
    if (!cleanL) continue;

    if (hasBullet) {
      if (currentBullet) bullets.push(currentBullet);
      currentBullet = cleanL;
    } else {
      if (currentBullet) {
        currentBullet += ' ' + cleanL;
      } else {
        currentBullet = cleanL;
      }
    }
  }
  if (currentBullet) bullets.push(currentBullet);

  // Fix wrapped IBA lines
  bullets.forEach((b, idx) => {
    if (b.includes('Payoffs Beyond Money Risk, Entrepreneurship and the Factors of') && bullets[idx + 1]?.startsWith('Production :')) {
      bullets[idx] = 'Business as Benefactor : Payoffs Beyond Money';
      bullets[idx + 1] = 'Risk, Entrepreneurship and the Factors of Production : The Creative Fire of Business';
    }
  });

  // 3. Extract Explicit Term Definitions
  const termDefinitions = extractTermDefinitionsFromBullets(bullets);

  return {
    title: title || 'Lecture Slide',
    bullets,
    termDefinitions,
    fullText: `${title}\n${bullets.join('\n')}`
  };
}

/**
 * Parses existing line-delimited slide text (from API or textChunks) back into structured title and bullets.
 */
export function parseSlideText(rawText: string, pageNum: number): ParsedSlideStructure {
  if (!rawText || !rawText.trim()) {
    return { title: `Slide ${pageNum}`, bullets: [], termDefinitions: [], fullText: '' };
  }

  const rawLines = rawText
    .split(/\r?\n/)
    .map(cleanBulletSymbols)
    .filter(l => !isHeaderFooterLine(l) && l.trim().length > 1);

  if (rawLines.length === 0) {
    return { title: `Slide ${pageNum}`, bullets: [], termDefinitions: [], fullText: '' };
  }

  let title = rawLines[0]
    .replace(/^[•\s\-\*\.\d]+/, '')
    .replace(/^(slide\s+\d+|page\s+\d+)\s*[:\-–—]?\s*/i, '')
    .replace(/^\d+\s*-\s*\d+\s*/, '')
    .trim();

  let bodyStartIndex = 1;

  if (
    rawLines.length > 1 &&
    (title.endsWith(':') || /\b(to|of|and|for|in|on|with|part\s+[a-z0-9]+:?)$/i.test(title)) &&
    rawLines[1].length < 60 &&
    !rawLines[1].startsWith('•')
  ) {
    title = `${title} ${rawLines[1].replace(/^[•\s\-\*\.\d]+/, '').trim()}`;
    bodyStartIndex = 2;
  }

  const bullets: string[] = [];
  let currentBullet = '';

  for (const rawLine of rawLines.slice(bodyStartIndex)) {
    const hasBullet = /^[•\-\*]/.test(rawLine) || rawLine.startsWith('•');
    const cleanL = rawLine.replace(/^[•\-\*\s]+/, '').trim();
    if (!cleanL) continue;

    if (hasBullet) {
      if (currentBullet) bullets.push(currentBullet);
      currentBullet = cleanL;
    } else {
      if (currentBullet) {
        currentBullet += ' ' + cleanL;
      } else {
        currentBullet = cleanL;
      }
    }
  }
  if (currentBullet) bullets.push(currentBullet);

  const termDefinitions = extractTermDefinitionsFromBullets(bullets);

  return {
    title: title || `Slide ${pageNum}`,
    bullets,
    termDefinitions,
    fullText: `${title}\n${bullets.join('\n')}`
  };
}

function extractTermDefinitionsFromBullets(bullets: string[]): Array<{ term: string; definition: string }> {
  const termDefinitions: Array<{ term: string; definition: string }> = [];

  for (const b of bullets) {
    const match = b.match(/^([A-Za-z0-9\s/&\-]{2,35})\s*(?:•|:|\s+[-–—]\s+|is defined as|refers to|means)\s+([^.]+.*)$/i);
    if (match) {
      const term = match[1].trim();
      const def = match[2].trim();
      if (
        term.length >= 2 &&
        term.length <= 35 &&
        def.length >= 5 &&
        !/^(how|why|what|when|where|note|in|the)\b/i.test(term)
      ) {
        termDefinitions.push({ term, definition: def });
      }
    }
  }

  return termDefinitions;
}
