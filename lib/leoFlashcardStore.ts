// Leo's Learning Tool — Spaced Repetition (SM-2) Decks & Flashcards Engine
// Persisted 100% in browser localStorage.
// Automatically converts every page of an uploaded University Slide Deck into 1 main Q&A Flashcard.

import { CompleteSlideStudyPackage, SlideAnalysis } from './universitySlides';

export interface LeoDeck {
  id: string;
  name: string;
  courseCode: string;
  packageId?: string;
  totalPages: number;
  createdAt: number;
  updatedAt: number;
}

export interface LeoCard {
  id: string;
  deckId: string;
  pageNumber?: number;
  slideTitle?: string;
  front: string; // Question
  back: string;  // Answer
  hint?: string;
  state: 'new' | 're'; // 'new' = unstudied, 're' = in spaced review
  ease: number;        // SM-2 ease factor (default 2.5, min 1.3, max 3.2)
  iv: number;          // Interval in days (0 = same day)
  due: number;         // Day number (Math.floor(Date.now() / 86400000))
  lapses: number;      // Number of times graded 'Again' (0)
  reps: number;        // Total reviews completed
  customEdited?: boolean;
  created: number;
}

export interface LeoGradeLog {
  id: string;     // cardId
  deckId: string;
  g: 0 | 1 | 2 | 3; // 0=Again, 1=Hard, 2=Good, 3=Easy
  ts: number;
}

export interface LeoStreak {
  count: number;
  lastDay: number;
  freezeUsedDay: number;
}

export interface LeoStoreState {
  decks: LeoDeck[];
  cards: LeoCard[];
  grades: LeoGradeLog[];
  streak: LeoStreak;
}

const STORAGE_KEY = 'academicprep_leo_flashcards_v1';

export function currentDayNumber(): number {
  return Math.floor(Date.now() / 86400000);
}

export function uid(prefix = 'c_'): string {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/**
 * Exact SM-2 scheduling algorithm from Leo's Learning Tool
 * g: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy
 */
export function schedSM2(iv: number, ease: number, g: 0 | 1 | 2 | 3): { ease: number; interval: number } {
  const curIv = +iv || 0;
  const curEase = +ease || 2.5;
  if (g === 0) {
    return { ease: Math.max(1.3, curEase - 0.2), interval: 0 };
  }
  if (g === 1) {
    return {
      ease: Math.max(1.3, curEase - 0.15),
      interval: curIv <= 0 ? 1 : Math.max(1, Math.round(curIv * 1.3))
    };
  }
  if (g === 2) {
    return {
      ease: curEase,
      interval: curIv <= 0 ? 1 : (curIv <= 1 ? 6 : Math.round(curIv * curEase))
    };
  }
  return {
    ease: Math.min(3.2, curEase + 0.15),
    interval: curIv <= 0 ? 4 : (curIv <= 1 ? 9 : Math.round(curIv * curEase * 1.15))
  };
}

/**
 * Formats an interval in days into a compact human label (same day, 4d, 2mo, 1.2yr)
 */
export function fmtInterval(iv: number): string {
  if (iv <= 0) return 'same day';
  if (iv < 31) return `${iv}d`;
  if (iv < 365) return `${Math.round(iv / 30)}mo`;
  return `${Math.round(iv / 36.5) / 10}yr`;
}

export function createEmptyLeoStore(): LeoStoreState {
  return {
    decks: [],
    cards: [],
    grades: [],
    streak: { count: 0, lastDay: 0, freezeUsedDay: 0 }
  };
}

export function loadLeoStore(): LeoStoreState {
  if (typeof window === 'undefined') return createEmptyLeoStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyLeoStore();
    const parsed = JSON.parse(raw);
    return {
      decks: Array.isArray(parsed?.decks) ? parsed.decks : [],
      cards: Array.isArray(parsed?.cards) ? parsed.cards : [],
      grades: Array.isArray(parsed?.grades) ? parsed.grades : [],
      streak: parsed?.streak && typeof parsed.streak === 'object'
        ? {
            count: Number(parsed.streak.count) || 0,
            lastDay: Number(parsed.streak.lastDay) || 0,
            freezeUsedDay: Number(parsed.streak.freezeUsedDay) || 0
          }
        : { count: 0, lastDay: 0, freezeUsedDay: 0 }
    };
  } catch {
    return createEmptyLeoStore();
  }
}

export function saveLeoStore(state: LeoStoreState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('[LeoFlashcardStore] Failed to save to localStorage:', err);
  }
}

/**
 * Synchronizes an uploaded/analyzed slide package into a Leo Flashcard Deck.
 * Creates 1 main flashcard per page from every slide in the package.
 * Preserves existing SM-2 scheduling state if the student has already studied cards in this deck.
 */
export function syncPackageToLeoDeck(
  pkg: CompleteSlideStudyPackage,
  existingState?: LeoStoreState
): { state: LeoStoreState; deck: LeoDeck } {
  const state = existingState ? { ...existingState } : loadLeoStore();
  const now = Date.now();
  const today = currentDayNumber();

  const deckName = pkg.deckTitle || 'University Slide Deck';
  const courseCode = pkg.courseCode || 'UNI 101';

  // Find existing deck by packageId or matching title
  let deck = state.decks.find(
    d => (pkg.id && d.packageId === pkg.id) || d.name.toLowerCase() === deckName.toLowerCase()
  );

  if (!deck) {
    deck = {
      id: `deck_${pkg.id || Date.now()}`,
      name: deckName,
      courseCode,
      packageId: pkg.id,
      totalPages: pkg.slides?.length || 0,
      createdAt: now,
      updatedAt: now
    };
    state.decks = [deck, ...state.decks];
  } else {
    deck = {
      ...deck,
      name: deckName,
      courseCode,
      packageId: pkg.id || deck.packageId,
      totalPages: pkg.slides?.length || deck.totalPages,
      updatedAt: now
    };
    state.decks = state.decks.map(d => (d.id === deck!.id ? deck! : d));
  }

  const deckId = deck.id;
  const existingDeckCards = state.cards.filter(c => c.deckId === deckId);
  const otherCards = state.cards.filter(c => c.deckId !== deckId);

  // Map existing page cards by pageNumber
  const cardByPage = new Map<number, LeoCard>();
  const customCards: LeoCard[] = [];

  for (const c of existingDeckCards) {
    if (typeof c.pageNumber === 'number' && !cardByPage.has(c.pageNumber)) {
      cardByPage.set(c.pageNumber, c);
    } else {
      customCards.push(c);
    }
  }

  const syncedPageCards: LeoCard[] = (pkg.slides || []).map((slide: SlideAnalysis) => {
    const existing = cardByPage.get(slide.pageNumber);
    const frontText = slide.activeRecallPrompt?.question?.trim() || `What is the main concept covered on Slide ${slide.pageNumber} (${slide.title})?`;
    const backText = slide.activeRecallPrompt?.answer?.trim() || slide.coreRule || slide.simplifiedPoints?.join('\n') || 'Review slide details.';
    const hintText = slide.activeRecallPrompt?.hint?.trim() || '';

    if (existing) {
      return {
        ...existing,
        slideTitle: slide.title,
        front: existing.customEdited ? existing.front : frontText,
        back: existing.customEdited ? existing.back : backText,
        hint: existing.customEdited ? existing.hint : hintText
      };
    }

    return {
      id: `card_${deckId}_p${slide.pageNumber}`,
      deckId,
      pageNumber: slide.pageNumber,
      slideTitle: slide.title,
      front: frontText,
      back: backText,
      hint: hintText,
      state: 'new',
      ease: 2.5,
      iv: 0,
      due: today,
      lapses: 0,
      reps: 0,
      created: now
    };
  });

  state.cards = [...otherCards, ...syncedPageCards, ...customCards];
  saveLeoStore(state);
  return { state, deck };
}

/**
 * Grades a card using Leo's SM-2 scheduler and updates daily streak (with 1-day Streak Freeze grace)
 */
export function gradeLeoCard(
  state: LeoStoreState,
  cardId: string,
  g: 0 | 1 | 2 | 3
): LeoStoreState {
  const today = currentDayNumber();
  const now = Date.now();

  let targetDeckId = '';
  const updatedCards = state.cards.map(c => {
    if (c.id !== cardId) return c;
    targetDeckId = c.deckId;
    const next = schedSM2(c.iv, c.ease, g);
    return {
      ...c,
      state: 're' as const,
      ease: next.ease,
      iv: next.interval,
      due: today + next.interval,
      lapses: g === 0 ? (c.lapses || 0) + 1 : (c.lapses || 0),
      reps: (c.reps || 0) + 1
    };
  });

  // Update Streak with 1-day automatic Streak Freeze grace period
  const prevStreak = state.streak || { count: 0, lastDay: 0, freezeUsedDay: 0 };
  let newCount = prevStreak.count;
  let newFreezeDay = prevStreak.freezeUsedDay;

  if (prevStreak.lastDay === 0) {
    newCount = 1;
  } else if (today === prevStreak.lastDay) {
    // Already studied today, keep streak
    newCount = Math.max(1, prevStreak.count);
  } else if (today === prevStreak.lastDay + 1) {
    // Consecutive day
    newCount = prevStreak.count + 1;
  } else if (today === prevStreak.lastDay + 2 && prevStreak.freezeUsedDay < prevStreak.lastDay) {
    // Missed 1 single day — Streak Freeze activates!
    newCount = prevStreak.count + 1;
    newFreezeDay = today - 1;
  } else {
    // Streak reset
    newCount = 1;
  }

  const nextState: LeoStoreState = {
    ...state,
    cards: updatedCards,
    grades: [
      ...state.grades.slice(-999),
      { id: cardId, deckId: targetDeckId, g, ts: now }
    ],
    streak: {
      count: newCount,
      lastDay: today,
      freezeUsedDay: newFreezeDay
    }
  };

  saveLeoStore(nextState);
  return nextState;
}

/**
 * Creates a new standalone custom deck (e.g. for vocabulary or personal course notes)
 */
export function createCustomLeoDeck(
  state: LeoStoreState,
  name: string,
  courseCode = 'CUSTOM'
): { state: LeoStoreState; deck: LeoDeck } {
  const now = Date.now();
  const deck: LeoDeck = {
    id: uid('deck_'),
    name: name.trim(),
    courseCode: courseCode.trim() || 'CUSTOM',
    totalPages: 0,
    createdAt: now,
    updatedAt: now
  };
  const nextState: LeoStoreState = {
    ...state,
    decks: [deck, ...state.decks]
  };
  saveLeoStore(nextState);
  return { state: nextState, deck };
}

/**
 * Adds a manual card (and optional reverse card A -> Q) to a deck
 */
export function addCustomLeoCard(
  state: LeoStoreState,
  deckId: string,
  front: string,
  back: string,
  hint?: string,
  addReverse = false
): LeoStoreState {
  const cleanFront = front.trim();
  const cleanBack = back.trim();
  if (!cleanFront || !cleanBack) return state;

  const today = currentDayNumber();
  const now = Date.now();
  const newCards: LeoCard[] = [
    {
      id: uid('card_'),
      deckId,
      slideTitle: 'Custom Card',
      front: cleanFront,
      back: cleanBack,
      hint: hint?.trim() || '',
      state: 'new',
      ease: 2.5,
      iv: 0,
      due: today,
      lapses: 0,
      reps: 0,
      customEdited: true,
      created: now
    }
  ];

  if (addReverse) {
    newCards.push({
      id: uid('card_rev_'),
      deckId,
      slideTitle: 'Reverse Card (A → Q)',
      front: cleanBack,
      back: cleanFront,
      hint: hint?.trim() || '',
      state: 'new',
      ease: 2.5,
      iv: 0,
      due: today,
      lapses: 0,
      reps: 0,
      customEdited: true,
      created: now + 1
    });
  }

  const nextState: LeoStoreState = {
    ...state,
    cards: [...state.cards, ...newCards]
  };
  saveLeoStore(nextState);
  return nextState;
}

/**
 * Updates an existing card's front/back/hint
 */
export function updateLeoCard(
  state: LeoStoreState,
  cardId: string,
  front: string,
  back: string,
  hint?: string
): LeoStoreState {
  const nextState: LeoStoreState = {
    ...state,
    cards: state.cards.map(c =>
      c.id === cardId
        ? { ...c, front: front.trim(), back: back.trim(), hint: hint?.trim() || '', customEdited: true }
        : c
    )
  };
  saveLeoStore(nextState);
  return nextState;
}

/**
 * Deletes a card by ID
 */
export function deleteLeoCard(state: LeoStoreState, cardId: string): LeoStoreState {
  const nextState: LeoStoreState = {
    ...state,
    cards: state.cards.filter(c => c.id !== cardId)
  };
  saveLeoStore(nextState);
  return nextState;
}

/**
 * Generates reverse cards (Answer -> Question) for an entire deck (skipping duplicates)
 */
export function reverseEntireDeck(
  state: LeoStoreState,
  deckId: string
): { state: LeoStoreState; addedCount: number } {
  const deckCards = state.cards.filter(c => c.deckId === deckId);
  const existingFronts = new Set(deckCards.map(c => c.front.trim().toLowerCase()));
  const today = currentDayNumber();
  const now = Date.now();
  const reversedToAdd: LeoCard[] = [];

  deckCards.forEach((c, idx) => {
    const newFront = c.back.trim();
    const newBack = c.front.trim();
    if (newFront && newBack && !existingFronts.has(newFront.toLowerCase())) {
      existingFronts.add(newFront.toLowerCase());
      reversedToAdd.push({
        id: uid(`rev_${idx}_`),
        deckId,
        pageNumber: c.pageNumber,
        slideTitle: c.slideTitle ? `${c.slideTitle} (Reverse)` : 'Reverse Card',
        front: newFront,
        back: newBack,
        hint: c.hint,
        state: 'new',
        ease: 2.5,
        iv: 0,
        due: today,
        lapses: 0,
        reps: 0,
        customEdited: true,
        created: now + idx
      });
    }
  });

  if (reversedToAdd.length === 0) {
    return { state, addedCount: 0 };
  }

  const nextState: LeoStoreState = {
    ...state,
    cards: [...state.cards, ...reversedToAdd]
  };
  saveLeoStore(nextState);
  return { state: nextState, addedCount: reversedToAdd.length };
}

/**
 * Bulk imports TSV / Excel / Quizlet lines (separated by Tab, =, :, or -)
 */
export function importBulkCardsTSV(
  state: LeoStoreState,
  deckId: string,
  rawText: string,
  addReverse = false
): { state: LeoStoreState; addedCount: number } {
  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const today = currentDayNumber();
  const now = Date.now();
  const imported: LeoCard[] = [];

  lines.forEach((line, idx) => {
    let parts: string[] = [];
    if (line.includes('\t')) {
      parts = line.split('\t');
    } else if (line.includes(' = ')) {
      parts = line.split(' = ');
    } else if (line.includes(' - ')) {
      parts = line.split(' - ');
    } else if (line.includes(': ')) {
      parts = line.split(': ');
    } else if (line.includes('=')) {
      parts = line.split('=');
    } else if (line.includes('-')) {
      parts = line.split('-');
    }

    if (parts.length >= 2) {
      const q = parts[0].trim();
      const a = parts.slice(1).join(' - ').trim();
      if (q && a) {
        imported.push({
          id: uid(`imp_${idx}_`),
          deckId,
          slideTitle: 'Imported Card',
          front: q,
          back: a,
          state: 'new',
          ease: 2.5,
          iv: 0,
          due: today,
          lapses: 0,
          reps: 0,
          customEdited: true,
          created: now + idx
        });
        if (addReverse) {
          imported.push({
            id: uid(`imp_rev_${idx}_`),
            deckId,
            slideTitle: 'Imported (Reverse)',
            front: a,
            back: q,
            state: 'new',
            ease: 2.5,
            iv: 0,
            due: today,
            lapses: 0,
            reps: 0,
            customEdited: true,
            created: now + idx + 1000
          });
        }
      }
    }
  });

  if (imported.length === 0) {
    return { state, addedCount: 0 };
  }

  const nextState: LeoStoreState = {
    ...state,
    cards: [...state.cards, ...imported]
  };
  saveLeoStore(nextState);
  return { state: nextState, addedCount: imported.length };
}

/**
 * Computes live deck statistics (Due count, New count, Mastered count, Retention %, Today's reviews)
 */
export function getDeckStats(state: LeoStoreState, deckId: string) {
  const today = currentDayNumber();
  const deckCards = deckId === 'all' ? state.cards : state.cards.filter(c => c.deckId === deckId);

  const total = deckCards.length;
  const dueCount = deckCards.filter(c => c.state === 're' && c.due <= today).length;
  const newCount = deckCards.filter(c => c.state === 'new').length;
  const masteredCount = deckCards.filter(c => c.state === 're' && c.iv >= 6).length;

  // Retention over last 20 grades for this deck
  const deckGrades = deckId === 'all'
    ? state.grades
    : state.grades.filter(g => g.deckId === deckId);
  const recent = deckGrades.slice(-20);
  const retentionPct = recent.length > 0
    ? Math.round((recent.filter(g => g.g !== 0).length / recent.length) * 100)
    : null;

  const todayReviewed = deckGrades.filter(g => Math.floor(g.ts / 86400000) === today).length;

  return {
    total,
    dueCount,
    newCount,
    masteredCount,
    retentionPct,
    todayReviewed
  };
}

/**
 * Native Text-to-Speech (TTS) with automatic Cyrillic (Russian) & English detection
 */
export function speakLeoText(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const clean = String(text || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!clean) return;

    const u = new SpeechSynthesisUtterance(clean);
    const isCyrillic = /[\u0400-\u04FF]/.test(clean);
    u.lang = isCyrillic ? 'ru-RU' : 'en-US';
    u.rate = isCyrillic ? 0.88 : 0.96;

    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const targetLang = isCyrillic ? 'ru' : 'en';
    const matchedVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(targetLang));
    if (matchedVoice) {
      u.voice = matchedVoice;
    }

    window.speechSynthesis.speak(u);
  } catch (err) {
    console.warn('[speakLeoText] Speech synthesis error:', err);
  }
}
