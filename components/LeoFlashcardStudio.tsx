'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Volume2,
  RotateCcw,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  Download,
  Upload,
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Flame,
  Sparkles,
  Lightbulb,
  Eye,
  FileText
} from 'lucide-react';
import { CompleteSlideStudyPackage } from '@/lib/universitySlides';
import {
  LeoStoreState,
  LeoDeck,
  LeoCard,
  createEmptyLeoStore,
  loadLeoStore,
  saveLeoStore,
  syncPackageToLeoDeck,
  createCustomLeoDeck,
  gradeLeoCard,
  addCustomLeoCard,
  updateLeoCard,
  deleteLeoCard,
  reverseEntireDeck,
  importBulkCardsTSV,
  getDeckStats,
  schedSM2,
  fmtInterval,
  speakLeoText,
  currentDayNumber
} from '@/lib/leoFlashcardStore';

interface LeoFlashcardStudioProps {
  activePackage: CompleteSlideStudyPackage | null;
  onJumpToSlidePage?: (pageNumber: number) => void;
}

export default function LeoFlashcardStudio({
  activePackage,
  onJumpToSlidePage
}: LeoFlashcardStudioProps) {
  const [store, setStore] = useState<LeoStoreState>(() => createEmptyLeoStore());
  const [selectedDeckId, setSelectedDeckId] = useState<string>('');
  const [subView, setSubView] = useState<'drill' | 'manage'>('drill');
  const [queueMode, setQueueMode] = useState<'sm2' | 'sequential'>('sequential');
  const [showNewDeckInput, setShowNewDeckInput] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');

  // Drill state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Manage / Add / Edit state
  const [newFront, setNewFront] = useState('');
  const [newBack, setNewBack] = useState('');
  const [newHint, setNewHint] = useState('');
  const [addReverse, setAddReverse] = useState(false);

  const [showBulkImport, setShowBulkImport] = useState(false);
  const [bulkText, setBulkText] = useState('');
  const [bulkReverse, setBulkReverse] = useState(false);

  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [editFront, setEditFront] = useState('');
  const [editBack, setEditBack] = useState('');
  const [editHint, setEditHint] = useState('');

  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const importFileInputRef = useRef<HTMLInputElement>(null);

  const triggerToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(prev => (prev === msg ? null : prev));
    }, 2600);
  }, []);

  // Automatically sync activePackage into a Leo Deck (1 main card per page) in localStorage
  useEffect(() => {
    const loaded = loadLeoStore();
    if (activePackage && activePackage.slides && activePackage.slides.length > 0) {
      const { state: syncedState, deck } = syncPackageToLeoDeck(activePackage, loaded);
      setStore(syncedState);
      setSelectedDeckId(prev => prev || deck.id);
      // If activePackage changed to a new slide deck, switch to its deck
      if (deck.packageId === activePackage.id) {
        setSelectedDeckId(deck.id);
      }
    } else {
      setStore(loaded);
      if (!selectedDeckId && loaded.decks.length > 0) {
        setSelectedDeckId(loaded.decks[0].id);
      }
    }
  }, [activePackage]);

  const activeDeck: LeoDeck | null = useMemo(() => {
    if (!store.decks.length) return null;
    return store.decks.find(d => d.id === selectedDeckId) || store.decks[0];
  }, [store.decks, selectedDeckId]);

  const deckCards: LeoCard[] = useMemo(() => {
    if (!activeDeck) return [];
    return store.cards
      .filter(c => c.deckId === activeDeck.id)
      .sort((a, b) => {
        if (typeof a.pageNumber === 'number' && typeof b.pageNumber === 'number') {
          return a.pageNumber - b.pageNumber;
        }
        return a.created - b.created;
      });
  }, [store.cards, activeDeck]);

  // Build study queue based on queueMode ('sm2' vs 'sequential')
  const studyQueue: LeoCard[] = useMemo(() => {
    if (!deckCards.length) return [];
    if (queueMode === 'sequential') {
      return deckCards;
    }
    const today = currentDayNumber();
    const dueAndNew = deckCards.filter(
      c => c.state === 'new' || (c.state === 're' && c.due <= today)
    );
    // Sort: Due cards first (oldest due first), then New cards in page order
    return dueAndNew.sort((a, b) => {
      if (a.state !== b.state) return a.state === 're' ? -1 : 1;
      if (typeof a.pageNumber === 'number' && typeof b.pageNumber === 'number') {
        return a.pageNumber - b.pageNumber;
      }
      return a.due - b.due;
    });
  }, [deckCards, queueMode]);

  const safeIndex = useMemo(() => {
    if (studyQueue.length === 0) return 0;
    return Math.min(Math.max(0, currentIndex), studyQueue.length - 1);
  }, [currentIndex, studyQueue.length]);

  const currentCard: LeoCard | null = studyQueue[safeIndex] || null;

  const stats = useMemo(() => {
    if (!activeDeck) {
      return { total: 0, dueCount: 0, newCount: 0, masteredCount: 0, retentionPct: null, todayReviewed: 0 };
    }
    return getDeckStats(store, activeDeck.id);
  }, [store, activeDeck]);

  // Reset flip & hint when switching card
  useEffect(() => {
    setIsFlipped(false);
    setShowHint(false);
  }, [currentCard?.id]);

  // Grade card handler (0=Again, 1=Hard, 2=Good, 3=Easy)
  const handleGrade = useCallback(
    (g: 0 | 1 | 2 | 3) => {
      if (!currentCard) return;
      const updated = gradeLeoCard(store, currentCard.id, g);
      setStore(updated);
      setIsFlipped(false);
      setShowHint(false);

      if (queueMode === 'sequential') {
        if (safeIndex < studyQueue.length - 1) {
          setCurrentIndex(safeIndex + 1);
        }
      } else {
        // In SM-2 mode, the graded card leaves the due queue (unless graded 'Again', which stays due today)
        if (g === 0 && studyQueue.length > 1) {
          setCurrentIndex(prev => (prev + 1) % studyQueue.length);
        } else if (safeIndex >= studyQueue.length - 1) {
          setCurrentIndex(0);
        }
      }
    },
    [currentCard, store, queueMode, safeIndex, studyQueue.length]
  );

  // Keyboard shortcuts (Space to flip, 1-4 to grade, S to speak, Arrows to navigate)
  useEffect(() => {
    if (subView !== 'drill') return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (!currentCard) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (isFlipped && (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4')) {
        e.preventDefault();
        const gradeVal = (parseInt(e.key, 10) - 1) as 0 | 1 | 2 | 3;
        handleGrade(gradeVal);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        speakLeoText(isFlipped ? currentCard.back : currentCard.front);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex(prev => Math.min(studyQueue.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex(prev => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [subView, currentCard, isFlipped, handleGrade, studyQueue.length]);

  // Add custom card
  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeDeck || !newFront.trim() || !newBack.trim()) return;
    const updated = addCustomLeoCard(store, activeDeck.id, newFront, newBack, newHint, addReverse);
    setStore(updated);
    setNewFront('');
    setNewBack('');
    setNewHint('');
    triggerToast(addReverse ? 'Added card + reverse card' : 'Added card to deck');
  };

  // Bulk TSV / Quizlet import
  const handleBulkImport = () => {
    if (!activeDeck || !bulkText.trim()) return;
    const { state: updated, addedCount } = importBulkCardsTSV(store, activeDeck.id, bulkText, bulkReverse);
    if (addedCount > 0) {
      setStore(updated);
      setBulkText('');
      setShowBulkImport(false);
      triggerToast(`Imported ${addedCount} cards`);
    } else {
      triggerToast('No valid Q&A lines found (use Tab, =, -, or :)');
    }
  };

  // Reverse entire deck
  const handleReverseDeck = () => {
    if (!activeDeck) return;
    const { state: updated, addedCount } = reverseEntireDeck(store, activeDeck.id);
    if (addedCount > 0) {
      setStore(updated);
      triggerToast(`Created ${addedCount} reverse cards (A → Q)`);
    } else {
      triggerToast('All reverse cards already exist in this deck');
    }
  };

  // Save edited card
  const handleSaveEdit = (cardId: string) => {
    if (!editFront.trim() || !editBack.trim()) return;
    const updated = updateLeoCard(store, cardId, editFront, editBack, editHint);
    setStore(updated);
    setEditingCardId(null);
    triggerToast('Card updated');
  };

  // Delete card
  const handleDeleteCard = (cardId: string) => {
    const updated = deleteLeoCard(store, cardId);
    setStore(updated);
    triggerToast('Card removed');
  };

  // Export JSON backup (compatible with Leo's Learning Tool)
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(store, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academicprep-flashcards-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast('Exported flashcards backup JSON');
  };

  // Import JSON backup
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || '{}'));
        if (Array.isArray(parsed.decks) && Array.isArray(parsed.cards)) {
          saveLeoStore(parsed);
          setStore(parsed);
          if (parsed.decks[0]) setSelectedDeckId(parsed.decks[0].id);
          triggerToast(`Restored ${parsed.cards.length} cards across ${parsed.decks.length} decks`);
        } else {
          triggerToast('Invalid backup JSON format');
        }
      } catch {
        triggerToast('Failed to parse backup file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Preview next intervals for the 4 SM-2 buttons on the current card
  const nextIntervals = useMemo(() => {
    if (!currentCard) {
      return { again: 'same day', hard: '1d', good: '1d', easy: '4d' };
    }
    return {
      again: fmtInterval(schedSM2(currentCard.iv, currentCard.ease, 0).interval),
      hard: fmtInterval(schedSM2(currentCard.iv, currentCard.ease, 1).interval),
      good: fmtInterval(schedSM2(currentCard.iv, currentCard.ease, 2).interval),
      easy: fmtInterval(schedSM2(currentCard.iv, currentCard.ease, 3).interval)
    };
  }, [currentCard]);

  return (
    <div className="max-w-3xl mx-auto space-y-5 pt-2">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 bg-neutral-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 animate-in fade-in">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Bar: Deck Selector, Stats & Mode Switcher */}
      <div className="border border-neutral-200 rounded-2xl p-4 bg-white shadow-xs space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Deck Selector */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Active Flashcard Deck (1 Card / Page)
              </label>
              <select
                value={activeDeck?.id || ''}
                onChange={e => {
                  setSelectedDeckId(e.target.value);
                  setCurrentIndex(0);
                }}
                className="w-full text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none truncate cursor-pointer"
              >
                {store.decks.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({store.cards.filter(c => c.deckId === d.id).length} cards)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Drill vs Manage Toggle */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setShowNewDeckInput(prev => !prev)}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium inline-flex items-center gap-1 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Deck</span>
            </button>

            <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl">
              <button
                onClick={() => setSubView('drill')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  subView === 'drill'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Study Cards
              </button>
              <button
                onClick={() => setSubView('manage')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  subView === 'manage'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Deck & Cards ({stats.total})
              </button>
            </div>
          </div>
        </div>

        {/* Create New Custom Deck Inline Form */}
        {showNewDeckInput && (
          <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
            <input
              type="text"
              value={newDeckName}
              onChange={e => setNewDeckName(e.target.value)}
              placeholder="New deck name (e.g. RUSS 101 Vocabulary or FINC 201 Formulas)"
              className="flex-1 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
            />
            <button
              type="button"
              onClick={() => {
                if (!newDeckName.trim()) return;
                const { state: next, deck } = createCustomLeoDeck(store, newDeckName);
                setStore(next);
                setSelectedDeckId(deck.id);
                setNewDeckName('');
                setShowNewDeckInput(false);
                setSubView('manage');
                triggerToast(`Created deck "${deck.name}"`);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setShowNewDeckInput(false)}
              className="p-1.5 text-neutral-400 hover:text-neutral-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Metrics Bar (Leo's Tool Status Pills) */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-neutral-100 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px]">
              Due: <strong className="text-neutral-900">{stats.dueCount}</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px]">
              New: <strong className="text-neutral-900">{stats.newCount}</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px]">
              Mastered: <strong className="text-neutral-900">{stats.masteredCount}/{stats.total}</strong>
            </span>
            {stats.retentionPct !== null && (
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px]">
                Retention: <strong>{stats.retentionPct}%</strong>
              </span>
            )}
            <span
              title="1-day automatic Streak Freeze grace enabled"
              className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-mono text-[11px] inline-flex items-center gap-1"
            >
              <Flame className="w-3 h-3 text-amber-500" />
              <span>{store.streak.count}d streak</span>
            </span>
          </div>

          {/* Queue Ordering Selector (when in Study mode) */}
          {subView === 'drill' && (
            <div className="flex items-center gap-1 text-[11px] font-mono">
              <button
                onClick={() => {
                  setQueueMode('sequential');
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1 rounded-md transition ${
                  queueMode === 'sequential'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                All Pages (1→{stats.total})
              </button>
              <button
                onClick={() => {
                  setQueueMode('sm2');
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1 rounded-md transition ${
                  queueMode === 'sm2'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                Due & New ({stats.dueCount + stats.newCount})
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SUBVIEW 1: INTERACTIVE CARD DRILL (LEO'S TOOL STUDY VIEW)
      ───────────────────────────────────────────────────────────── */}
      {subView === 'drill' && (
        <>
          {currentCard ? (
            <div className="border border-neutral-200 rounded-2xl p-6 sm:p-8 bg-white shadow-xs space-y-6">
              {/* Card Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-neutral-500 border-b border-neutral-100 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-semibold">
                    Card {safeIndex + 1} of {studyQueue.length}
                  </span>
                  {typeof currentCard.pageNumber === 'number' && (
                    <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-900 border border-neutral-200">
                      Page {String(currentCard.pageNumber).padStart(2, '0')}
                    </span>
                  )}
                  <span className="truncate max-w-[180px] sm:max-w-[260px] text-neutral-500">
                    {currentCard.slideTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded ${
                      currentCard.state === 'new'
                        ? 'bg-neutral-100 text-neutral-600'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {currentCard.state === 'new'
                      ? 'NEW'
                      : `IV: ${fmtInterval(currentCard.iv)} · EASE ${Math.round(currentCard.ease * 100)}%`}
                  </span>

                  <button
                    type="button"
                    onClick={() => speakLeoText(isFlipped ? currentCard.back : currentCard.front)}
                    title="Speak card aloud (Shortcut: S) — Auto-detects Russian & English"
                    className="px-2.5 py-1 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 inline-flex items-center gap-1 transition"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Speak</span>
                  </button>

                  {typeof currentCard.pageNumber === 'number' && onJumpToSlidePage && (
                    <button
                      type="button"
                      onClick={() => onJumpToSlidePage(currentCard.pageNumber!)}
                      title="View this page in the Slide Studio"
                      className="px-2.5 py-1 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 inline-flex items-center gap-1 transition"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Slide</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Card Front (Question) */}
              <div
                onClick={() => !isFlipped && setIsFlipped(true)}
                className={`py-8 sm:py-10 px-4 text-center space-y-4 rounded-xl transition ${
                  !isFlipped ? 'cursor-pointer hover:bg-neutral-50/60' : ''
                }`}
              >
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Question · Page {currentCard.pageNumber || safeIndex + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 leading-relaxed max-w-xl mx-auto">
                  {currentCard.front}
                </h3>

                {/* Optional Hint */}
                {currentCard.hint && !isFlipped && (
                  <div className="pt-2">
                    {showHint ? (
                      <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 inline-block max-w-md">
                        <strong>Hint:</strong> {currentCard.hint}
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          setShowHint(true);
                        }}
                        className="text-xs text-neutral-400 hover:text-neutral-700 inline-flex items-center gap-1 transition"
                      >
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Show Hint</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Card Back (Answer + SM-2 Grading Buttons) */}
              {isFlipped ? (
                <div className="pt-6 border-t border-neutral-200 space-y-6 animate-in fade-in">
                  <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                        Answer
                      </span>
                      <button
                        type="button"
                        onClick={() => speakLeoText(currentCard.back)}
                        className="text-[11px] font-mono text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1"
                      >
                        <Volume2 className="w-3 h-3" /> Read Answer
                      </button>
                    </div>
                    <div className="text-sm text-neutral-800 leading-relaxed whitespace-pre-line">
                      {currentCard.back}
                    </div>
                  </div>

                  {/* 4 SM-2 Spaced Repetition Grading Buttons (Again, Hard, Good, Easy) */}
                  <div className="space-y-2">
                    <p className="text-center text-[11px] font-mono text-neutral-400">
                      How well did you recall this? (Press 1, 2, 3, or 4)
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleGrade(0)}
                        className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 text-rose-900 transition flex flex-col items-center gap-0.5"
                      >
                        <span className="text-xs font-semibold">1 · Again</span>
                        <span className="text-[10px] font-mono text-rose-600">{nextIntervals.again}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleGrade(1)}
                        className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-900 transition flex flex-col items-center gap-0.5"
                      >
                        <span className="text-xs font-semibold">2 · Hard</span>
                        <span className="text-[10px] font-mono text-amber-700">{nextIntervals.hard}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleGrade(2)}
                        className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-900 transition flex flex-col items-center gap-0.5"
                      >
                        <span className="text-xs font-semibold">3 · Good</span>
                        <span className="text-[10px] font-mono text-neutral-900">{nextIntervals.good}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleGrade(3)}
                        className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-900 transition flex flex-col items-center gap-0.5"
                      >
                        <span className="text-xs font-semibold">4 · Easy</span>
                        <span className="text-[10px] font-mono text-emerald-700">{nextIntervals.easy}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="w-full sm:w-auto min-w-[220px] px-8 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wide transition shadow-xs"
                  >
                    Show Answer (Space)
                  </button>
                </div>
              )}

              {/* Bottom Navigation Bar */}
              <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  disabled={safeIndex <= 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  className="hover:text-neutral-900 disabled:opacity-30 transition inline-flex items-center gap-1 font-medium"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <span className="hidden sm:inline text-[11px] font-mono text-neutral-400">
                  Space: Flip · 1–4: Grade · S: Speak · ←/→: Navigate
                </span>

                <button
                  type="button"
                  disabled={safeIndex >= studyQueue.length - 1}
                  onClick={() => setCurrentIndex(prev => Math.min(studyQueue.length - 1, prev + 1))}
                  className="hover:text-neutral-900 disabled:opacity-30 transition inline-flex items-center gap-1 font-medium"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="border border-neutral-200 rounded-2xl p-10 text-center bg-white space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-neutral-900">
                  All caught up on due reviews!
                </h4>
                <p className="text-xs text-neutral-500 max-w-md mx-auto">
                  You have finished all cards due for today in this queue. Switch to &ldquo;All Pages (1→{stats.total})&rdquo; to drill every slide card sequentially.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setQueueMode('sequential');
                  setCurrentIndex(0);
                }}
                className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition"
              >
                Review All {stats.total} Page Cards
              </button>
            </div>
          )}
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUBVIEW 2: MANAGE DECK & CARDS (ADD, IMPORT, REVERSE, EDIT)
      ───────────────────────────────────────────────────────────── */}
      {subView === 'manage' && (
        <div className="space-y-5">
          {/* Quick Actions Toolbar */}
          <div className="border border-neutral-200 rounded-2xl p-4 bg-white flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowBulkImport(prev => !prev)}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium inline-flex items-center gap-1.5 transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Quick Import (TSV / Quizlet)</span>
              </button>

              <button
                type="button"
                onClick={handleReverseDeck}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium inline-flex items-center gap-1.5 transition"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Reverse Entire Deck (A → Q)</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExportJSON}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium inline-flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Backup JSON</span>
              </button>

              <button
                type="button"
                onClick={() => importFileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium inline-flex items-center gap-1.5 transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Restore JSON</span>
              </button>
              <input
                ref={importFileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
              />
            </div>
          </div>

          {/* Bulk Importer Collapsible */}
          {showBulkImport && (
            <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase font-mono text-neutral-700">
                  Quick Vocab / Notes Importer (1 card per line)
                </h4>
                <button
                  type="button"
                  onClick={() => setShowBulkImport(false)}
                  className="text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-neutral-500">
                Paste lines separated by <strong>Tab</strong>, <strong>=</strong>, <strong>-</strong>, or <strong>:</strong> (e.g. <code>Привет - Privet (Hello)</code> or <code>NPV = Net Present Value</code>).
              </p>
              <textarea
                rows={4}
                value={bulkText}
                onChange={e => setBulkText(e.target.value)}
                placeholder={'Question 1 - Answer 1\nQuestion 2 = Answer 2'}
                className="w-full rounded-xl border border-neutral-200 bg-white p-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
              />
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-xs text-neutral-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bulkReverse}
                    onChange={e => setBulkReverse(e.target.checked)}
                    className="rounded border-neutral-300"
                  />
                  <span>Also create reverse cards (Answer → Question)</span>
                </label>
                <button
                  type="button"
                  onClick={handleBulkImport}
                  className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition"
                >
                  Import Lines
                </button>
              </div>
            </div>
          )}

          {/* Add Custom Card Form */}
          <form
            onSubmit={handleAddCard}
            className="border border-neutral-200 rounded-2xl p-5 bg-white space-y-3.5"
          >
            <h4 className="text-xs font-semibold uppercase font-mono text-neutral-500">
              Add Custom Card to Deck
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={newFront}
                onChange={e => setNewFront(e.target.value)}
                placeholder="Front (Question / Term)"
                className="rounded-xl border border-neutral-200 px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
              />
              <input
                type="text"
                value={newBack}
                onChange={e => setNewBack(e.target.value)}
                placeholder="Back (Answer / Definition)"
                className="rounded-xl border border-neutral-200 px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="inline-flex items-center gap-2 text-xs text-neutral-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={addReverse}
                  onChange={e => setAddReverse(e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span>Also add reverse card (A → Q)</span>
              </label>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium inline-flex items-center justify-center gap-1.5 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Card</span>
              </button>
            </div>
          </form>

          {/* All Page Cards List */}
          <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden">
            <div className="px-5 py-3.5 border-b border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-900">
                Cards in Deck ({deckCards.length})
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                1 Main Card Extracted Per Slide Page
              </span>
            </div>

            <div className="divide-y divide-neutral-100 max-h-[460px] overflow-y-auto">
              {deckCards.map(c => (
                <div key={c.id} className="p-4 hover:bg-neutral-50/60 transition space-y-2">
                  {editingCardId === c.id ? (
                    <div className="space-y-2.5">
                      <input
                        type="text"
                        value={editFront}
                        onChange={e => setEditFront(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-900"
                      />
                      <textarea
                        rows={2}
                        value={editBack}
                        onChange={e => setEditBack(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 px-3 py-1.5 text-xs text-neutral-800"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleSaveEdit(c.id)}
                          className="px-3 py-1 rounded-md bg-neutral-900 text-white text-xs font-medium"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingCardId(null)}
                          className="px-3 py-1 rounded-md border border-neutral-200 text-neutral-600 text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                          {typeof c.pageNumber === 'number' && (
                            <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700 font-semibold">
                              Page {c.pageNumber}
                            </span>
                          )}
                          <span className="truncate">{c.slideTitle}</span>
                          <span>•</span>
                          <span>
                            {c.state === 'new' ? 'New' : `Due: ${fmtInterval(c.iv)}`}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-neutral-900">{c.front}</p>
                        <p className="text-xs text-neutral-600 line-clamp-2">{c.back}</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => speakLeoText(`${c.front}. ${c.back}`)}
                          title="Speak"
                          className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCardId(c.id);
                            setEditFront(c.front);
                            setEditBack(c.back);
                            setEditHint(c.hint || '');
                          }}
                          title="Edit card"
                          className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteCard(c.id)}
                          title="Delete card"
                          className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-neutral-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
