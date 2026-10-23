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
    .replace(/\b\d+\s*-\s*\d+\b/g, '') // remove stray slide numbers like 1 - 10, 1 - 11
    .replace(/\bin that the depend\b/gi, 'in that they depend') // fix common lecture slide typos
    .replace(/\s+/g, ' ')
    .trim();
}

const HEADER_FOOTER_PATTERNS = [
  /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}/,
  /kwame adom/i,
  /dept of mktg/i,
  /polycarp/i,
  /gabriel nartey/i,
  /^\d+\s*-\s*\d+$/,
  /^\d+$/,
  /^page\s+\d+/i,
  /^ugbs\s*\d+\b/i,
  /pearson/i,
  /prentice hall/i,
  /publishing as/i,
  /copyright/i,
  /all rights reserved/i,
  /\b(spring \d+|fall \d+|semester \d+)\b/i
];

export function isHeaderFooterLine(line: string): boolean {
  if (!line) return true;
  const trimmed = line.trim();
  if (trimmed.length <= 1) return true;
  return HEADER_FOOTER_PATTERNS.some(p => p.test(trimmed));
}

/**
 * Normalizes and cleans slide titles, replacing fragmented note sentences with crisp conceptual headings.
 */
export function normalizeSlideTitle(rawTitle: string, contextText: string = ''): string {
  let title = rawTitle
    .replace(/^[•\s\-\*\.\d]+/, '')
    .replace(/^(slide\s+\d+|page\s+\d+)\s*[:\-–—]?\s*/i, '')
    .replace(/^\d+\s*-\s*\d+\s*/, '')
    .replace(/\b\d+\s*-\s*\d+\b/g, '')
    .trim();

  const ctx = (title + ' ' + contextText).toLowerCase();

  // Replace fragmentary note titles with clear academic topic titles
  if (/^note\s+ngos/i.test(title) || /in that the(y)?/i.test(title)) {
    return 'Non-Governmental Organizations (NGOs) & Funding Dependency';
  }
  if (/^the challenge:\s*to maximize/i.test(title)) {
    return 'The Management Challenge: Diversity in the Workplace';
  }
  if (/^seven key business rules:\s*the great/i.test(title)) {
    return 'Seven Key Business Rules: 21st Century Management';
  }
  if (/^what have learned\??/i.test(title)) {
    return 'Chapter Review & Key Takeaways';
  }

  // Handle generic single-word titles like "Drawbacks" or "Advantages"
  if (/^drawbacks?$/i.test(title)) {
    if (/unlimited.*liability|fringe benefits|sole proprietor/i.test(ctx)) {
      return 'Sole Proprietorship: Key Drawbacks & Risks';
    }
    if (/double tax|corporation|charter/i.test(ctx)) {
      return 'Corporations: Key Drawbacks & Double Taxation';
    }
    if (/franchis|royalties/i.test(ctx)) {
      return 'Franchising: Key Drawbacks & Royalties';
    }
    if (/partner/i.test(ctx)) {
      return 'Partnerships: Key Drawbacks & Liabilities';
    }
    return 'Key Drawbacks & Operational Risks';
  }

  if (/^advantages?$/i.test(title) || /ease of start up/i.test(title)) {
    if (/partner/i.test(ctx)) {
      return 'Partnerships: Key Advantages & Formation';
    }
    if (/corporation/i.test(ctx)) {
      return 'Corporations: Key Advantages & Limited Liability';
    }
    if (/sole proprietor/i.test(ctx)) {
      return 'Sole Proprietorship: Key Advantages';
    }
    return 'Key Advantages & Business Benefits';
  }

  return title;
}

/**
 * Extracts line-bucketed and bullet-assembled slide data from pdf.js text items.
 * Sorts items top-to-bottom (descending Y) so real titles appear at the top,
 * and footers/copyrights naturally fall to the bottom.
 */
export function extractStructuredSlideFromItems(items: any[]): ParsedSlideStructure {
  if (!items || items.length === 0) {
    return { title: 'Lecture Slide', bullets: [], termDefinitions: [], fullText: '' };
  }

  // Sort items top-to-bottom, left-to-right (Y descending, X ascending)
  const sortedItems = items
    .filter((it: any) => it && it.str)
    .map((it: any) => ({
      str: it.str,
      y: Math.round(it.transform ? it.transform[5] : 0),
      x: Math.round(it.transform ? it.transform[4] : 0)
    }))
    .sort((a, b) => {
      if (Math.abs(b.y - a.y) > 5) {
        return b.y - a.y; // Top of slide to bottom of slide
      }
      return a.x - b.x; // Left to right
    });

  const lineBuckets: string[] = [];
  let currentY: number | null = null;
  let currentLine: string[] = [];

  for (const item of sortedItems) {
    if (currentY !== null && Math.abs(item.y - currentY) > 5) {
      if (currentLine.length > 0) {
        lineBuckets.push(currentLine.join(' '));
        currentLine = [];
      }
    }
    currentLine.push(item.str);
    currentY = item.y;
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
  let rawTitle = cleanCandidates[0]
    .replace(/^[•\s\-\*\.\d]+/, '')
    .replace(/^(slide\s+\d+|page\s+\d+)\s*[:\-–—]?\s*/i, '')
    .replace(/^\d+\s*-\s*\d+\s*/, '')
    .trim();

  let bodyStartIndex = 1;

  // Title wrapping check (e.g. "UGBS 101: INTRODUCTION TO" + "BUSINESS ADMINISTRATION")
  if (
    cleanCandidates.length > 1 &&
    (rawTitle.endsWith(':') || /\b(to|of|and|for|in|on|with|part\s+[a-z0-9]+:?)$/i.test(rawTitle)) &&
    cleanCandidates[1].length < 60 &&
    !cleanCandidates[1].startsWith('•')
  ) {
    rawTitle = `${rawTitle} ${cleanCandidates[1].replace(/^[•\s\-\*\.\d]+/, '').trim()}`;
    bodyStartIndex = 2;
  }

  // Handle broken decorative part headers
  if (/^part\s+[a-z0-9]+:\s*today/i.test(rawTitle)) {
    rawTitle = "PART ONE: TODAY'S BUSINESS ENVIRONMENT";
    bodyStartIndex = cleanCandidates.length;
  }

  const title = normalizeSlideTitle(rawTitle, cleanCandidates.slice(bodyStartIndex).join(' '));

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

  // If title was a note fragment (e.g. Slide 11), preserve original note inside bullets for analysis
  if (/^note\s+ngos/i.test(rawTitle) || /in that the(y)?/i.test(rawTitle)) {
    const noteFull = `${cleanCandidates[0]} ${bullets.join(' ')}`.replace(/\b\d+\s*-\s*\d+\b/g, '').trim();
    if (!bullets.some(b => b.includes('depend mainly on donations'))) {
      bullets.unshift(noteFull);
    }
  }

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
 * Parses existing line-delimited slide text back into structured title and bullets.
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

  let rawTitle = rawLines[0]
    .replace(/^[•\s\-\*\.\d]+/, '')
    .replace(/^(slide\s+\d+|page\s+\d+)\s*[:\-–—]?\s*/i, '')
    .replace(/^\d+\s*-\s*\d+\s*/, '')
    .trim();

  let bodyStartIndex = 1;

  if (
    rawLines.length > 1 &&
    (rawTitle.endsWith(':') || /\b(to|of|and|for|in|on|with|part\s+[a-z0-9]+:?)$/i.test(rawTitle)) &&
    rawLines[1].length < 60 &&
    !rawLines[1].startsWith('•')
  ) {
    rawTitle = `${rawTitle} ${rawLines[1].replace(/^[•\s\-\*\.\d]+/, '').trim()}`;
    bodyStartIndex = 2;
  }

  const title = normalizeSlideTitle(rawTitle, cleanCandidates.slice(bodyStartIndex).join(' '));

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

  // If title was a note fragment, preserve note inside bullets
  if (/^note\s+ngos/i.test(rawTitle) || /in that the(y)?/i.test(rawTitle)) {
    const noteFull = `${rawLines[0]} ${bullets.join(' ')}`.replace(/\b\d+\s*-\s*\d+\b/g, '').trim();
    if (!bullets.some(b => b.includes('depend mainly on donations'))) {
      bullets.unshift(noteFull);
    }
  }

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
