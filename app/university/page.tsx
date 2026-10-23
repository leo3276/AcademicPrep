'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { 
  Upload, 
  FileText, 
  Check, 
  AlertCircle, 
  Printer, 
  Key, 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  Clock, 
  Layers, 
  Brain, 
  Search,
  SlidersHorizontal,
  X,
  Maximize2,
  Minimize2,
  Sparkles,
  BookOpen,
  HelpCircle,
  Eye,
  Send,
  MessageSquare,
  RotateCcw
} from 'lucide-react';
import { 
  CompleteSlideStudyPackage, 
  SlideAnalysis, 
  generateAlgorithmicStudyPlan,
  generateCondensedSlideSummaries,
  CondensedSlideGroup
} from '@/lib/universitySlides';
import { extractStructuredSlideFromItems } from '@/lib/slideTextCleaner';

// ─────────────────────────────────────────────────────────────
// Lightweight IndexedDB Storage for PDF Binaries
// Allows visual slide persistence across browser refreshes
// ─────────────────────────────────────────────────────────────
const IDB_NAME = 'AcademicPrepSlidesDB';
const IDB_STORE = 'slide_files';

function openPdfIDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(IDB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function savePdfToIDB(id: string, buffer: ArrayBuffer): Promise<void> {
  try {
    const db = await openPdfIDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(buffer, id);
  } catch (err) {
    console.warn('Could not save PDF to IndexedDB:', err);
  }
}

async function loadPdfFromIDB(id: string): Promise<ArrayBuffer | null> {
  try {
    const db = await openPdfIDB();
    return new Promise(resolve => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────
// PDF.js Browser Loader
// Utilizes local /pdf.min.js and /pdf.worker.min.js
// ─────────────────────────────────────────────────────────────
async function getPdfJsLib(): Promise<any> {
  if (typeof window === 'undefined') return null;
  if ((window as any).pdfjsLib) {
    (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    return (window as any).pdfjsLib;
  }
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src="/pdf.min.js"]') as HTMLScriptElement;
    if (existing) {
      if ((window as any).pdfjsLib) {
        (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
        resolve((window as any).pdfjsLib);
      } else {
        existing.addEventListener('load', () => {
          const lib = (window as any).pdfjsLib;
          if (lib) {
            lib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
            resolve(lib);
          } else {
            reject(new Error('pdfjsLib not initialized'));
          }
        });
      }
      return;
    }
    const script = document.createElement('script');
    script.src = '/pdf.min.js';
    script.async = true;
    script.onload = () => {
      const lib = (window as any).pdfjsLib;
      if (lib) {
        lib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
        resolve(lib);
      } else {
        reject(new Error('pdfjsLib not found on window'));
      }
    };
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
  });
}

export default function UniversityPortalPage() {
  const router = useRouter();
  const { student, isLoading: authLoading, logoutStudent } = useAuth();
  const [mounted, setMounted] = useState(false);

  const [activePackage, setActivePackage] = useState<CompleteSlideStudyPackage | null>(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'slides' | 'digest' | 'plan' | 'cram' | 'flashcards'>('slides');
  const [condensedGroupSize, setCondensedGroupSize] = useState<number>(10);
  const [revealedDigestAnswers, setRevealedDigestAnswers] = useState<Record<number, boolean>>({});

  // Study plan pacing settings
  const [daysUntilExam, setDaysUntilExam] = useState(7);
  const [dailyMinutes, setDailyMinutes] = useState(45);
  const [targetGrade, setTargetGrade] = useState('A / First Class');
  const [filterHighYieldOnly, setFilterHighYieldOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive user tracking
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [masteredSlides, setMasteredSlides] = useState<Record<number, boolean>>({});
  const [completedSessions, setCompletedSessions] = useState<Record<string, boolean>>({});

  // PDF Document & Visual Rendering
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfBuffer, setPdfBuffer] = useState<ArrayBuffer | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [isRenderingCanvas, setIsRenderingCanvas] = useState(false);
  const [isFullscreenSlide, setIsFullscreenSlide] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modalCanvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null);
  const modalRenderTaskRef = useRef<any>(null);
  const breakdownScrollRef = useRef<HTMLDivElement>(null);

  // Per-slide interactive AI Tutor chat state
  const [tutorMessages, setTutorMessages] = useState<Record<number, Array<{ id: string; role: 'user' | 'assistant'; text: string; timestamp: number }>>>({});
  const [tutorInput, setTutorInput] = useState('');
  const [isTutorLoading, setIsTutorLoading] = useState(false);
  const [tutorError, setTutorError] = useState<string | null>(null);

  // Upload & UI status
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [customApiKey, setCustomApiKey] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Restore saved state & cached deck on mount
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedKey = localStorage.getItem('academicprep_gemini_api_key');
      if (savedKey) setCustomApiKey(savedKey);

      const savedPackage = localStorage.getItem('academicprep_active_package');
      if (savedPackage) {
        try {
          const pkg = JSON.parse(savedPackage);
          setActivePackage(pkg);
          const initialLessonIndex = pkg.lessonStartPage 
            ? pkg.slides.findIndex((s: SlideAnalysis) => s.pageNumber === pkg.lessonStartPage)
            : 0;
          if (initialLessonIndex >= 0) {
            setSelectedSlideIndex(initialLessonIndex);
          }

          // Restore mastery & sessions
          const savedMastery = localStorage.getItem(`academicprep_mastery_${pkg.id}`);
          if (savedMastery) {
            try { setMasteredSlides(JSON.parse(savedMastery)); } catch {}
          }
          const savedSessions = localStorage.getItem(`academicprep_sessions_${pkg.id}`);
          if (savedSessions) {
            try { setCompletedSessions(JSON.parse(savedSessions)); } catch {}
          }

          // Restore PDF buffer for visual canvas & auto-upgrade stale analysis packages
          loadPdfFromIDB(pkg.id).then(async (buf) => {
            if (buf) {
              setPdfBuffer(buf);
              const pdfjs = await getPdfJsLib();
              if (pdfjs) {
                const doc = await pdfjs.getDocument({ data: buf.slice(0) }).promise;
                setPdfDoc(doc);

                // Auto-upgrade cached package if it was generated by an older engine version
                if (pkg.engineVersion !== 'v6-condensed') {
                  try {
                    const extractedPages: Array<{ pageNumber: number; text: string }> = [];
                    for (let i = 1; i <= doc.numPages; i++) {
                      try {
                        const p = await doc.getPage(i);
                        const content = await p.getTextContent();
                        const structured = extractStructuredSlideFromItems(content.items);
                        extractedPages.push({ pageNumber: i, text: structured.fullText || '' });
                      } catch {
                        extractedPages.push({ pageNumber: i, text: '' });
                      }
                    }
                    const res = await fetch('/api/university/analyze-slides', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        textChunks: extractedPages,
                        fileName: pkg.deckTitle || 'Lecture Slides.pdf',
                        daysUntilExam: pkg.studyPlan?.daysUntilExam || 7,
                        dailyMinutes: pkg.studyPlan?.dailyMinutes || 45,
                        targetGrade: pkg.studyPlan?.targetGrade || 'A / First Class'
                      })
                    });
                    if (res.ok) {
                      const data = await res.json();
                      if (data.success && data.package) {
                        const upgradedPkg = { ...data.package, id: pkg.id };
                        setActivePackage(upgradedPkg);
                        localStorage.setItem('academicprep_active_package', JSON.stringify(upgradedPkg));
                      }
                    }
                  } catch (upgradeErr) {
                    console.warn('Auto-upgrade slide package notice:', upgradeErr);
                  }
                }
              }
            }
          });
        } catch {}
      }
    }
  }, []);

  const saveApiKey = (key: string) => {
    setCustomApiKey(key);
    if (typeof window !== 'undefined') {
      if (key) localStorage.setItem('academicprep_gemini_api_key', key);
      else localStorage.removeItem('academicprep_gemini_api_key');
    }
    setShowSettingsModal(false);
  };

  const toggleMastered = (pageNumber: number) => {
    if (!activePackage) return;
    setMasteredSlides(prev => {
      const updated = { ...prev, [pageNumber]: !prev[pageNumber] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(`academicprep_mastery_${activePackage.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const toggleSession = (sessionId: string) => {
    if (!activePackage) return;
    setCompletedSessions(prev => {
      const updated = { ...prev, [sessionId]: !prev[sessionId] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(`academicprep_sessions_${activePackage.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const handleRecalculatePlan = (days: number, mins: number, grade: string) => {
    setDaysUntilExam(days);
    setDailyMinutes(mins);
    setTargetGrade(grade);

    if (activePackage) {
      const newPlan = generateAlgorithmicStudyPlan(activePackage.slides, days, mins, grade);
      const updatedPkg = { ...activePackage, studyPlan: newPlan };
      setActivePackage(updatedPkg);
      if (typeof window !== 'undefined') {
        localStorage.setItem('academicprep_active_package', JSON.stringify(updatedPkg));
      }
    }
  };

  const handleClearDeck = () => {
    if (activePackage && typeof window !== 'undefined') {
      localStorage.removeItem('academicprep_active_package');
    }
    setActivePackage(null);
    setSelectedFile(null);
    setPdfBuffer(null);
    setPdfDoc(null);
    setSelectedSlideIndex(0);
    setRevealedAnswers({});
    setMasteredSlides({});
    setCompletedSessions({});
  };

  const handleFileDrop = async (file: File) => {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
      alert('Please select a valid PDF lecture slides file.');
      return;
    }
    setSelectedFile(file);
    try {
      const buffer = await file.arrayBuffer();
      setPdfBuffer(buffer);
      const pdfjs = await getPdfJsLib();
      if (pdfjs) {
        const loadingTask = pdfjs.getDocument({ data: buffer.slice(0) });
        const doc = await loadingTask.promise;
        setPdfDoc(doc);
      }
    } catch (err) {
      console.warn('PDF pre-read notice:', err);
    }
  };

  const handleProcessUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setLoadingStatus('Loading slide pages...');

    try {
      // 1. Ensure buffer and pdfDoc are ready
      let currentBuffer = pdfBuffer;
      if (!currentBuffer) {
        currentBuffer = await selectedFile.arrayBuffer();
        setPdfBuffer(currentBuffer);
      }

      let clientExtractedPages: Array<{ pageNumber: number; text: string }> = [];
      const pdfjs = await getPdfJsLib();
      if (pdfjs && currentBuffer) {
        const loadingTask = pdfjs.getDocument({ data: currentBuffer.slice(0) });
        const doc = await loadingTask.promise;
        setPdfDoc(doc);

        setLoadingStatus(`Extracting structured text from ${doc.numPages} slide pages...`);
        for (let i = 1; i <= doc.numPages; i++) {
          try {
            const page = await doc.getPage(i);
            const content = await page.getTextContent();
            const structured = extractStructuredSlideFromItems(content.items);
            clientExtractedPages.push({ pageNumber: i, text: structured.fullText || '' });
          } catch {
            clientExtractedPages.push({ pageNumber: i, text: '' });
          }
        }
      }

      setLoadingStatus('Analyzing all slides & generating detailed study breakdowns...');

      // 2. Prepare payload for API
      // If client-side extracted text is present, do NOT transmit the multi-megabyte PDF binary (prevents HTTP 413 "Request Entity Too Large")
      const hasClientText = clientExtractedPages && clientExtractedPages.length > 0;
      let base64Data: string | undefined = undefined;

      if (!hasClientText && selectedFile.size < 4 * 1024 * 1024) {
        base64Data = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => resolve('');
          reader.readAsDataURL(selectedFile);
        });
      }

      const res = await fetch('/api/university/analyze-slides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(customApiKey ? { 'x-gemini-api-key': customApiKey } : {})
        },
        body: JSON.stringify({
          textChunks: clientExtractedPages,
          fileBase64: base64Data,
          fileName: selectedFile.name,
          daysUntilExam,
          dailyMinutes,
          targetGrade
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        let errorMessage = `Server error (${res.status})`;
        try {
          const errJson = JSON.parse(errorText);
          if (errJson.error) errorMessage = errJson.error;
        } catch {
          if (res.status === 413) {
            errorMessage = 'The file exceeds the server payload limit. Text extraction has been switched to client-only mode.';
          } else if (errorText) {
            errorMessage = errorText.slice(0, 150);
          }
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      if (data.success && data.package) {
        setActivePackage(data.package);
        const initialLessonIndex = data.package.lessonStartPage 
          ? data.package.slides.findIndex((s: SlideAnalysis) => s.pageNumber === data.package.lessonStartPage)
          : 0;
        setSelectedSlideIndex(initialLessonIndex >= 0 ? initialLessonIndex : 0);
        setRevealedAnswers({});
        setMasteredSlides({});
        setCompletedSessions({});
        setActiveTab('slides');

        // Persist locally
        if (typeof window !== 'undefined') {
          localStorage.setItem('academicprep_active_package', JSON.stringify(data.package));
        }
        if (currentBuffer) {
          savePdfToIDB(data.package.id, currentBuffer);
        }
      } else {
        alert('Failed to analyze slides: ' + (data.error || 'Unknown error'));
      }
    } catch (err: any) {
      alert('Network or processing error: ' + err.message);
    } finally {
      setLoading(false);
      setLoadingStatus('');
    }
  };

  const filteredSlides = useMemo(() => {
    if (!activePackage) return [];
    return activePackage.slides.filter(slide => {
      if (filterHighYieldOnly && slide.importance !== 'CORE_FUNDAMENTAL') {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return slide.title.toLowerCase().includes(q) || 
               slide.coreRule.toLowerCase().includes(q) || 
               slide.categoryTag.toLowerCase().includes(q);
      }
      return true;
    });
  }, [activePackage, filterHighYieldOnly, searchQuery]);

  const currentSlide = filteredSlides[selectedSlideIndex] || activePackage?.slides[0];

  const condensedSummaries: CondensedSlideGroup[] = useMemo(() => {
    if (!activePackage || !activePackage.slides || activePackage.slides.length === 0) return [];
    if (condensedGroupSize === 10 && activePackage.condensedSummaries && activePackage.condensedSummaries.length > 0) {
      return activePackage.condensedSummaries;
    }
    return generateCondensedSlideSummaries(activePackage.slides, condensedGroupSize);
  }, [activePackage, condensedGroupSize]);

  const currentSlideGroup = useMemo(() => {
    if (!currentSlide || condensedSummaries.length === 0) return null;
    return condensedSummaries.find(
      g => currentSlide.pageNumber >= g.startPage && currentSlide.pageNumber <= g.endPage
    ) || null;
  }, [currentSlide, condensedSummaries]);

  // ─────────────────────────────────────────────────────────────
  // Canvas Render Execution
  // ─────────────────────────────────────────────────────────────
  const renderSlideToCanvas = useCallback(async (canvas: HTMLCanvasElement | null, isModal = false) => {
    if (!canvas || !pdfDoc || !currentSlide) return;
    const taskRef = isModal ? modalRenderTaskRef : renderTaskRef;
    try {
      if (taskRef.current) {
        try { taskRef.current.cancel(); } catch {}
        taskRef.current = null;
      }
      if (!isModal) setIsRenderingCanvas(true);
      const page = await pdfDoc.getPage(currentSlide.pageNumber);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const container = canvas.parentElement;
      const targetWidth = container 
        ? Math.max(300, container.clientWidth - (isModal ? 32 : 16))
        : 600;

      const unscaledViewport = page.getViewport({ scale: 1 });
      const scale = targetWidth / unscaledViewport.width;
      const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
      const viewport = page.getViewport({ scale: scale * dpr });

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;

      const renderTask = page.render({
        canvasContext: ctx,
        viewport: viewport
      });
      taskRef.current = renderTask;
      await renderTask.promise;
      taskRef.current = null;

      if (!isModal) setIsRenderingCanvas(false);
    } catch (err: any) {
      if (err?.name !== 'RenderingCancelledException') {
        console.warn('Canvas render notice:', err);
      }
      if (!isModal) setIsRenderingCanvas(false);
    }
  }, [pdfDoc, currentSlide]);

  useEffect(() => {
    renderSlideToCanvas(canvasRef.current, false);
    if (isFullscreenSlide && modalCanvasRef.current) {
      renderSlideToCanvas(modalCanvasRef.current, true);
    }
  }, [renderSlideToCanvas, isFullscreenSlide]);

  // Scroll breakdown panel to top when slide changes
  useEffect(() => {
    if (breakdownScrollRef.current) {
      breakdownScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedSlideIndex]);

  // Window resize handler to maintain aspect ratio
  useEffect(() => {
    const handleResize = () => {
      renderSlideToCanvas(canvasRef.current, false);
      if (isFullscreenSlide && modalCanvasRef.current) {
        renderSlideToCanvas(modalCanvasRef.current, true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderSlideToCanvas, isFullscreenSlide]);

  // Keyboard navigation for flipping slides (Left / Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== 'slides' || !activePackage) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setSelectedSlideIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Escape' && isFullscreenSlide) {
        setIsFullscreenSlide(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, activePackage, filteredSlides.length, isFullscreenSlide]);

  // Ask AI Tutor Handler
  const handleAskTutor = async (questionText: string) => {
    if (!currentSlide || !questionText.trim() || isTutorLoading) return;
    const cleanQ = questionText.trim();
    const currentSlideNum = currentSlide.pageNumber;

    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user' as const,
      text: cleanQ,
      timestamp: Date.now()
    };

    const existingChat = tutorMessages[currentSlideNum] || [];
    setTutorMessages(prev => ({
      ...prev,
      [currentSlideNum]: [...existingChat, userMsg]
    }));
    setTutorInput('');
    setIsTutorLoading(true);
    setTutorError(null);

    try {
      const historyPayload = existingChat.map(m => ({
        role: m.role,
        content: m.text
      }));

      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      };
      if (customApiKey) {
        headers['x-gemini-api-key'] = customApiKey;
      }

      const res = await fetch('/api/university/tutor-chat', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          slideNumber: currentSlideNum,
          slideTitle: currentSlide.title,
          slideText: `${currentSlide.coreRule} ${currentSlide.simplifiedPoints.join(' ')}`,
          coreRule: currentSlide.coreRule,
          takeaways: currentSlide.detailedTakeaways,
          formulas: currentSlide.keyFormulas,
          definitions: currentSlide.keyDefinitions,
          userQuestion: cleanQ,
          chatHistory: historyPayload
        })
      });

      if (!res.ok) {
        throw new Error(`Tutor service error (${res.status})`);
      }

      const data = await res.json();
      if (data.success && data.answer) {
        const assistantMsg = {
          id: `asst-${Date.now()}`,
          role: 'assistant' as const,
          text: data.answer,
          timestamp: Date.now()
        };
        setTutorMessages(prev => ({
          ...prev,
          [currentSlideNum]: [...(prev[currentSlideNum] || []), assistantMsg]
        }));
      } else {
        throw new Error(data.error || 'Failed to receive tutor response');
      }
    } catch (err: any) {
      setTutorError(err.message || 'Could not connect to tutor. Please try again.');
    } finally {
      setIsTutorLoading(false);
    }
  };

  // Re-run pedagogical analysis with updated plain-English models
  const handleReanalyze = async () => {
    if (!activePackage) return;
    setLoading(true);
    setLoadingStatus('Updating slide analyses with deep plain-English explanations...');

    try {
      let currentBuffer = pdfBuffer;
      if (!currentBuffer && activePackage?.id) {
        currentBuffer = await loadPdfFromIDB(activePackage.id);
        if (currentBuffer) setPdfBuffer(currentBuffer);
      }

      let clientExtractedPages: Array<{ pageNumber: number; text: string }> = [];
      const pdfjs = await getPdfJsLib();

      if (pdfjs && currentBuffer) {
        const loadingTask = pdfjs.getDocument({ data: currentBuffer.slice(0) });
        const doc = await loadingTask.promise;
        setPdfDoc(doc);

        for (let i = 1; i <= doc.numPages; i++) {
          try {
            const page = await doc.getPage(i);
            const content = await page.getTextContent();
            const structured = extractStructuredSlideFromItems(content.items);
            clientExtractedPages.push({ pageNumber: i, text: structured.fullText || '' });
          } catch {
            clientExtractedPages.push({ pageNumber: i, text: '' });
          }
        }
      }

      if (clientExtractedPages.length === 0) {
        alert('Please re-upload the PDF to refresh analyses.');
        fileInputRef.current?.click();
        return;
      }

      const res = await fetch('/api/university/analyze-slides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(customApiKey ? { 'x-gemini-api-key': customApiKey } : {})
        },
        body: JSON.stringify({
          textChunks: clientExtractedPages,
          fileName: activePackage.deckTitle || 'Lecture Slides',
          daysUntilExam,
          dailyMinutes,
          targetGrade
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.success && data.package) {
        setActivePackage(data.package);
        if (typeof window !== 'undefined') {
          localStorage.setItem('academicprep_active_package', JSON.stringify(data.package));
        }
      }
    } catch (err: any) {
      alert('Could not refresh analysis: ' + err.message);
    } finally {
      setLoading(false);
      setLoadingStatus('');
    }
  };

  const totalMasteredCount = useMemo(() => {
    return Object.values(masteredSlides).filter(Boolean).length;
  }, [masteredSlides]);

  const totalCompletedSessionsCount = useMemo(() => {
    return Object.values(completedSessions).filter(Boolean).length;
  }, [completedSessions]);

  const totalSessionsCount = useMemo(() => {
    if (!activePackage) return 0;
    return activePackage.studyPlan.phases.reduce((acc, p) => acc + p.sessions.length, 0);
  }, [activePackage]);

  useEffect(() => {
    if (mounted && !authLoading && !student) {
      router.push('/login?redirect=/university');
    }
  }, [mounted, authLoading, student, router]);

  if (!mounted || authLoading || !student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-neutral-400">
        <div className="w-6 h-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-24 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. CLEAN MINIMAL HEADER
      ───────────────────────────────────────────────────────────── */}
      <header className="border-b border-neutral-200/80 bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>AcademicPrep</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="font-medium text-neutral-900">University Slide Studio</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login?redirect=/university"
              className="text-neutral-600 hover:text-neutral-900 transition flex items-center gap-1.5 font-medium"
            >
              <span>{student.fullName}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700">
                Tertiary
              </span>
            </Link>

            <button
              onClick={() => setShowSettingsModal(true)}
              className="text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1.5"
              title="Configure Gemini API key"
            >
              <Key className="w-3.5 h-3.5 text-neutral-400" />
              <span>{customApiKey ? 'API Key Active' : 'API Key'}</span>
            </button>

            {activePackage && (
              <button
                onClick={() => window.print()}
                className="text-neutral-600 hover:text-neutral-900 transition flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print Summary</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. EMPTY STATE: CLEAN MINIMAL UPLOAD WORKSPACE
      ───────────────────────────────────────────────────────────── */}
      {!activePackage && (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 space-y-10">
          <div className="space-y-3 text-center max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Understand your lecture slides.
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed pt-1">
              Upload your lecture PDF to read each slide side-by-side with plain-English explanations, formulas, and a study plan.
            </p>
          </div>

          {/* Minimal Drag & Drop Box */}
          <div className="space-y-6">
            <input 
              ref={fileInputRef}
              type="file" 
              accept="application/pdf"
              className="hidden" 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileDrop(file);
              }}
            />

            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleFileDrop(file);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`cursor-pointer rounded-2xl border border-dashed p-10 sm:p-14 text-center transition flex flex-col items-center justify-center gap-3 ${
                isDragOver 
                  ? 'border-neutral-900 bg-neutral-50' 
                  : selectedFile 
                  ? 'border-neutral-900 bg-neutral-50/50' 
                  : 'border-neutral-300 hover:border-neutral-500 bg-white'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center">
                <Upload className="w-4 h-4" />
              </div>

              {selectedFile ? (
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-neutral-900">{selectedFile.name}</p>
                  <p className="text-xs text-neutral-500 font-mono">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to analyze
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-neutral-900">
                    Drop lecture slide PDF here, or <span className="underline underline-offset-4">browse</span>
                  </p>
                  <p className="text-xs text-neutral-500">Supports multi-page slide decks (up to 150+ pages)</p>
                </div>
              )}
            </div>

            {/* Pacing Configuration Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                <label className="text-neutral-500 font-medium block">Days Until Exam</label>
                <select
                  value={daysUntilExam}
                  onChange={(e) => setDaysUntilExam(Number(e.target.value))}
                  className="w-full font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value={3}>3 Days (Express Cram)</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days (Standard)</option>
                  <option value={14}>14 Days (Balanced)</option>
                  <option value={30}>30 Days (Semester Final)</option>
                </select>
              </div>

              <div className="p-3 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                <label className="text-neutral-500 font-medium block">Daily Time Budget</label>
                <select
                  value={dailyMinutes}
                  onChange={(e) => setDailyMinutes(Number(e.target.value))}
                  className="w-full font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value={30}>30 mins / day</option>
                  <option value={45}>45 mins / day</option>
                  <option value={60}>60 mins / day</option>
                  <option value={90}>90 mins / day</option>
                </select>
              </div>

              <div className="p-3 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                <label className="text-neutral-500 font-medium block">Target Grade</label>
                <select
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className="w-full font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="A / First Class">A / First Class (90%+)</option>
                  <option value="B+ / Second Upper">B+ / Second Upper</option>
                  <option value="Pass">Solid Pass</option>
                </select>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center pt-2">
              <button
                disabled={!selectedFile || loading}
                onClick={handleProcessUpload}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold transition tracking-tight shadow-sm"
              >
                {loading ? 'Analyzing Slides...' : 'Analyze Lecture Slides'}
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. ACTIVE STATE: ANALYZED SLIDE DECK WORKSPACE
      ───────────────────────────────────────────────────────────── */}
      {activePackage && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
          
          {/* Deck Header & Metadata Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
            <div className="space-y-1.5">
              <button
                onClick={handleClearDeck}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Upload a different slide deck</span>
              </button>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                {activePackage.deckTitle}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-mono">
                <span>{activePackage.totalSlides} slides</span>
                {activePackage.lessonStartPage > 1 && (
                  <>
                    <span>•</span>
                    <button
                      onClick={() => {
                        const idx = activePackage.slides.findIndex(s => s.pageNumber === activePackage.lessonStartPage);
                        if (idx !== -1) setSelectedSlideIndex(idx);
                      }}
                      className="text-neutral-900 font-medium hover:underline bg-neutral-100 px-2 py-0.5 rounded transition"
                      title="Jump to the first slide where teaching begins"
                    >
                      <span>Lesson starts: Slide {activePackage.lessonStartPage}</span>
                    </button>
                  </>
                )}
                <span>•</span>
                <span>{activePackage.studyPlan.daysUntilExam}-day plan</span>
                <span>•</span>
                <span>Completed: {totalMasteredCount}/{activePackage.slides.length}</span>
              </div>
            </div>

            {/* Quick Pacing Recalibration & Refresh */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto text-xs">
              <button
                onClick={handleReanalyze}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-medium transition flex items-center gap-1.5 shadow-2xs"
                title="Re-analyze all slides using latest plain-English models"
              >
                <RotateCcw className={`w-3 h-3 text-neutral-600 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? 'Re-analyzing...' : 'Refresh Explanations'}</span>
              </button>

              <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3 h-3 text-neutral-400" />
                <select
                  value={daysUntilExam}
                  onChange={(e) => handleRecalculatePlan(Number(e.target.value), dailyMinutes, targetGrade)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                >
                  <option value={3}>3 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days</option>
                  <option value={14}>14 Days</option>
                  <option value={30}>30 Days</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg">
                <Clock className="w-3 h-3 text-neutral-400" />
                <select
                  value={dailyMinutes}
                  onChange={(e) => handleRecalculatePlan(daysUntilExam, Number(e.target.value), targetGrade)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                >
                  <option value={30}>30m/day</option>
                  <option value={45}>45m/day</option>
                  <option value={60}>60m/day</option>
                  <option value={90}>90m/day</option>
                </select>
              </div>
            </div>
          </div>

          {/* Minimal Navigation Tabs */}
          <div className="flex items-center gap-6 border-b border-neutral-200 text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab('slides')}
              className={`pb-3 border-b-2 transition shrink-0 ${
                activeTab === 'slides' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Slide Studio ({filteredSlides.length})
            </button>
            <button
              onClick={() => setActiveTab('digest')}
              className={`pb-3 border-b-2 transition shrink-0 ${
                activeTab === 'digest' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              10-to-1 Digest ({condensedSummaries.length} Modules)
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`pb-3 border-b-2 transition shrink-0 ${
                activeTab === 'plan' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Study Plan ({totalCompletedSessionsCount}/{totalSessionsCount} Done)
            </button>
            <button
              onClick={() => setActiveTab('cram')}
              className={`pb-3 border-b-2 transition shrink-0 ${
                activeTab === 'cram' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              1-Page Cheat Sheet
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`pb-3 border-b-2 transition shrink-0 ${
                activeTab === 'flashcards' 
                  ? 'border-neutral-900 text-neutral-900 font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Active Recall Drill
            </button>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              TAB 1: SLIDE STUDIO (SPLIT-SCREEN SLIDE VIEWER & SIMPLIFIER)
          ───────────────────────────────────────────────────────────── */}
          {activeTab === 'slides' && (
            <div className="space-y-6">
              
              {/* Filter & Jump Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-neutral-400" />
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search slides..."
                      className="pl-8 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 w-48 sm:w-56"
                    />
                  </div>

                  <button
                    onClick={() => setFilterHighYieldOnly(!filterHighYieldOnly)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                      filterHighYieldOnly
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    {filterHighYieldOnly ? 'Showing Core Only' : 'Filter Core Only'}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-neutral-500 font-mono text-[11px]">
                  <span>Use <kbd className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 rounded text-neutral-700 font-sans">←</kbd> <kbd className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 rounded text-neutral-700 font-sans">→</kbd> keys to flip slides</span>
                </div>
              </div>

              {/* Main Split-Screen Studio */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* ─────────────────────────────────────────────────────────
                    LEFT PANEL: THE VISUAL SLIDE PAGE (STICKY IN VIEWPORT)
                ───────────────────────────────────────────────────────── */}
                <div className="lg:col-span-6 lg:sticky lg:top-20 border border-neutral-200 rounded-2xl p-4 sm:p-5 bg-white space-y-4 shadow-xs">
                  
                  {/* Visual Header Controls */}
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400">SLIDE</span>
                      <span className="font-bold text-neutral-900 font-mono text-sm">
                        {currentSlide ? String(currentSlide.pageNumber).padStart(2, '0') : '01'}
                      </span>
                      <span className="text-neutral-300">/</span>
                      <span className="font-mono text-neutral-400">
                        {String(activePackage.totalSlides).padStart(2, '0')}
                      </span>

                      {currentSlide?.isLessonStart && (
                        <span className="ml-1 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-white font-semibold uppercase tracking-wider">
                          Lesson Starts
                        </span>
                      )}

                      {currentSlide?.isIntroLogistics && (
                        <span className="ml-1 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-500 font-medium uppercase tracking-wider">
                          Intro
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsFullscreenSlide(true)}
                        className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-600 transition flex items-center gap-1 text-[11px]"
                        title="Expand slide full size"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Expand</span>
                      </button>

                      <button
                        disabled={selectedSlideIndex <= 0}
                        onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                        className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition"
                        title="Previous slide"
                      >
                        <ChevronLeft className="w-4 h-4 text-neutral-700" />
                      </button>

                      <button
                        disabled={selectedSlideIndex >= filteredSlides.length - 1}
                        onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                        className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition"
                        title="Next slide"
                      >
                        <ChevronRight className="w-4 h-4 text-neutral-700" />
                      </button>
                    </div>
                  </div>

                  {/* The Slide Canvas Display */}
                  <div className="relative min-h-[320px] sm:min-h-[380px] bg-neutral-50 rounded-xl border border-neutral-200/80 p-2 flex items-center justify-center overflow-hidden">
                    <canvas 
                      ref={canvasRef} 
                      className="rounded-lg shadow-xs max-w-full h-auto object-contain mx-auto transition-opacity duration-150"
                    />

                    {isRenderingCanvas && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-10">
                        <div className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {!pdfDoc && !isRenderingCanvas && (
                      <div className="text-center p-8 space-y-2 text-xs text-neutral-400">
                        <Eye className="w-6 h-6 mx-auto text-neutral-300" />
                        <p className="font-medium text-neutral-700">Slide Preview Ready</p>
                        <p className="text-[11px] max-w-xs mx-auto">
                          Viewing slide {currentSlide?.pageNumber || 1} text analysis. Upload or drop PDF to activate visual canvas.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Horizontal Slide Quick-Jump Scroller */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                      <span>QUICK JUMP</span>
                      <span>{filteredSlides.length} slides</span>
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin">
                      {filteredSlides.map((slide, idx) => {
                        const isCurrent = selectedSlideIndex === idx;
                        const isMastered = masteredSlides[slide.pageNumber];
                        const isCore = slide.importance === 'CORE_FUNDAMENTAL';
                        const isStart = slide.pageNumber === activePackage.lessonStartPage;
                        const isIntro = slide.pageNumber < activePackage.lessonStartPage;

                        return (
                          <button
                            key={slide.pageNumber}
                            onClick={() => setSelectedSlideIndex(idx)}
                            className={`shrink-0 h-8 px-2.5 rounded-lg font-mono text-[11px] font-medium transition flex items-center gap-1 border ${
                              isCurrent
                                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs font-semibold'
                                : isStart
                                ? 'bg-neutral-50 text-neutral-900 border-neutral-900 font-semibold ring-1 ring-neutral-900/15'
                                : isMastered
                                ? 'bg-neutral-100 text-neutral-900 border-neutral-300 hover:bg-neutral-200'
                                : isCore
                                ? 'bg-white text-neutral-800 border-neutral-300 hover:border-neutral-900'
                                : isIntro
                                ? 'bg-neutral-50/70 text-neutral-400 border-neutral-200 hover:bg-neutral-100'
                                : 'bg-white text-neutral-500 border-neutral-200 hover:bg-neutral-50'
                            }`}
                            title={`Slide ${slide.pageNumber}: ${slide.title}`}
                          >
                            <span>{String(slide.pageNumber).padStart(2, '0')}</span>
                            {isMastered && <Check className="w-2.5 h-2.5 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────
                    RIGHT PANEL: THE SIMPLIFIED STUDENT BREAKDOWN (SCROLLABLE)
                ───────────────────────────────────────────────────────── */}
                <div 
                  ref={breakdownScrollRef}
                  className="lg:col-span-6 border border-neutral-200 rounded-2xl p-6 sm:p-7 bg-white space-y-6 shadow-xs lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-thin"
                >
                  {currentSlide ? (
                    <>
                      {/* Slide Title & Status Bar */}
                      <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                            <span>SLIDE {String(currentSlide.pageNumber).padStart(2, '0')}</span>
                            {currentSlide.categoryTag && (
                              <>
                                <span>•</span>
                                <span className="text-neutral-600 font-medium">
                                  {currentSlide.categoryTag}
                                </span>
                              </>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug">
                            {currentSlide.title}
                          </h3>
                        </div>

                        <button
                          onClick={() => toggleMastered(currentSlide.pageNumber)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition border flex items-center gap-1.5 shrink-0 ${
                            masteredSlides[currentSlide.pageNumber]
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{masteredSlides[currentSlide.pageNumber] ? 'Done' : 'Mark Done'}</span>
                        </button>
                      </div>

                      {/* Link to 10-Slide Conjunction Module */}
                      {currentSlideGroup && (
                        <div className="flex items-center justify-between text-xs bg-neutral-50 border border-neutral-200/80 rounded-xl px-3.5 py-2">
                          <div className="flex items-center gap-1.5 text-neutral-600 truncate">
                            <span className="font-semibold text-neutral-900">Module {currentSlideGroup.groupIndex}:</span>
                            <span className="truncate">{currentSlideGroup.title}</span>
                            <span className="text-neutral-400 font-mono text-[11px] shrink-0">(Slides {currentSlideGroup.startPage}–{currentSlideGroup.endPage})</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveTab('digest');
                              setTimeout(() => {
                                const el = document.getElementById(`digest-module-${currentSlideGroup.groupIndex}`);
                                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 50);
                            }}
                            className="text-neutral-900 font-medium hover:underline text-xs shrink-0 ml-2"
                          >
                            View 10-Slide Digest →
                          </button>
                        </div>
                      )}

                      {/* Intro & Logistics Banner */}
                      {currentSlide.pageNumber < activePackage.lessonStartPage && (
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="space-y-0.5">
                            <p className="font-semibold text-neutral-900">Course Introduction</p>
                            <p className="text-neutral-500 text-[11px]">
                              Lecture content starts on Slide {activePackage.lessonStartPage}.
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              const startIdx = activePackage.slides.findIndex(s => s.pageNumber === activePackage.lessonStartPage);
                              if (startIdx !== -1) setSelectedSlideIndex(startIdx);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto text-xs"
                          >
                            <span>Go to Slide {activePackage.lessonStartPage}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {/* 1. Overview (only shown when distinct from the first concept item) */}
                      {(!currentSlide.detailedTakeaways ||
                        currentSlide.detailedTakeaways.length === 0 ||
                        (currentSlide.detailedTakeaways.length > 1 &&
                          currentSlide.coreRule !== currentSlide.detailedTakeaways[0]?.explanation)) && (
                        <div className="border-l-2 border-neutral-900 pl-4 py-1 space-y-1">
                          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                            {currentSlide.coreRule}
                          </p>
                        </div>
                      )}

                      {/* 2. Concept Breakdown */}
                      {currentSlide.detailedTakeaways && currentSlide.detailedTakeaways.length > 0 ? (
                        <div className="space-y-2.5">
                          <div className="space-y-2.5">
                            {currentSlide.detailedTakeaways.map((item, i) => (
                              <div key={i} className="p-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/40 space-y-1 text-xs">
                                <div className="font-semibold text-neutral-900 text-xs">
                                  {item.label}
                                </div>
                                <p className="text-neutral-700 leading-relaxed text-xs">
                                  {item.explanation}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : currentSlide.simplifiedPoints && currentSlide.simplifiedPoints.length > 0 ? (
                        <ul className="space-y-2">
                          {currentSlide.simplifiedPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {/* 3. Formulas */}
                      {currentSlide.decodedFormulas && currentSlide.decodedFormulas.length > 0 ? (
                        <div className="space-y-3">
                          <span className="text-[11px] font-semibold text-neutral-500 block">
                            Formulas
                          </span>
                          <div className="space-y-3">
                            {currentSlide.decodedFormulas.map((df, i) => (
                              <div key={i} className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 space-y-2.5 text-xs">
                                <div className="font-mono text-sm bg-white px-3 py-1.5 rounded-lg border border-neutral-200 font-bold text-neutral-900 w-fit">
                                  {df.formula}
                                </div>
                                <p className="text-neutral-600 leading-relaxed text-xs">
                                  {df.inPlainEnglish}
                                </p>
                                {df.variables && df.variables.length > 0 && (
                                  <div className="pt-2 border-t border-neutral-200/70 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                                    {df.variables.map((v, vIdx) => (
                                      <div key={vIdx} className="bg-white p-2 rounded-lg border border-neutral-100 flex items-start gap-1.5">
                                        <span className="font-mono font-bold text-neutral-900 shrink-0">{v.symbol}:</span>
                                        <span className="text-neutral-600">{v.meaning} {v.units ? `(${v.units})` : ''}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : currentSlide.keyFormulas.length > 0 ? (
                        <div className="border border-neutral-200 rounded-xl p-3.5 space-y-2 bg-neutral-50/50">
                          <span className="text-[11px] font-semibold text-neutral-500 block">
                            Formula
                          </span>
                          <div className="space-y-1.5">
                            {currentSlide.keyFormulas.map((f, i) => (
                              <div key={i} className="font-mono text-xs bg-white px-2.5 py-1.5 rounded border border-neutral-200 text-neutral-900 font-semibold overflow-x-auto">
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {/* 4. Definitions */}
                      {currentSlide.keyDefinitions.length > 0 && (
                        <div className="space-y-2">
                          <span className="text-[11px] font-semibold text-neutral-500 block">
                            Definitions
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {currentSlide.keyDefinitions.map((d, i) => (
                              <div key={i} className="border border-neutral-200 rounded-xl p-3 bg-white space-y-1 text-xs">
                                <strong className="text-neutral-900 font-bold block">{d.term}</strong>
                                <p className="text-neutral-600 leading-relaxed text-[11px]">{d.definition}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 5. Note / Common Mistake */}
                      {currentSlide.examTrap && (
                        <div className="border border-neutral-200 bg-neutral-50/60 rounded-xl p-3.5 space-y-1 text-xs">
                          <span className="text-[11px] font-semibold text-neutral-900 block">
                            Keep in Mind
                          </span>
                          <p className="text-neutral-600 leading-relaxed">
                            {currentSlide.examTrap.replace(/^Exam\s+(Trap|Tip|Watch-Out|Advice):\s*/i, '')}
                          </p>
                        </div>
                      )}

                      {/* 6. Self-Check Question */}
                      <div className="border border-neutral-200 rounded-xl p-4 space-y-3 bg-white">
                        <span className="text-[11px] font-semibold text-neutral-500 block">
                          Quick Check
                        </span>

                        <p className="text-xs sm:text-sm font-medium text-neutral-900 leading-relaxed">
                          {currentSlide.activeRecallPrompt.question}
                        </p>

                        {revealedAnswers[currentSlide.pageNumber] ? (
                          <div className="pt-2.5 border-t border-neutral-100 space-y-2.5">
                            <p className="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                              {currentSlide.activeRecallPrompt.answer}
                            </p>
                            <button
                              onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: false }))}
                              className="text-xs text-neutral-400 hover:text-neutral-700 transition"
                            >
                              Hide answer
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: true }))}
                            className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                          >
                            Show Answer
                          </button>
                        )}
                      </div>

                      {/* 7. Ask a Question */}
                      <div className="border border-neutral-200 rounded-xl p-4 space-y-3.5 bg-white">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-neutral-900">
                            Ask a question about this slide
                          </span>
                          {tutorMessages[currentSlide.pageNumber]?.length > 0 && (
                            <button
                              onClick={() => setTutorMessages(prev => ({ ...prev, [currentSlide.pageNumber]: [] }))}
                              className="text-[11px] text-neutral-400 hover:text-neutral-700 transition"
                            >
                              Clear
                            </button>
                          )}
                        </div>

                        {/* Quick Prompt Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          <button
                            onClick={() => handleAskTutor("Explain like I'm a beginner")}
                            disabled={isTutorLoading}
                            className="px-2.5 py-1 rounded-lg text-[11px] bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition disabled:opacity-50"
                          >
                            Explain simply
                          </button>
                          <button
                            onClick={() => handleAskTutor("Give me a real-world example")}
                            disabled={isTutorLoading}
                            className="px-2.5 py-1 rounded-lg text-[11px] bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition disabled:opacity-50"
                          >
                            Real-world example
                          </button>
                          <button
                            onClick={() => handleAskTutor("How will this be tested on my exam?")}
                            disabled={isTutorLoading}
                            className="px-2.5 py-1 rounded-lg text-[11px] bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition disabled:opacity-50"
                          >
                            Exam questions
                          </button>
                          <button
                            onClick={() => handleAskTutor("Quiz my understanding")}
                            disabled={isTutorLoading}
                            className="px-2.5 py-1 rounded-lg text-[11px] bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition disabled:opacity-50"
                          >
                            Quiz me
                          </button>
                        </div>

                        {/* Message Thread */}
                        {tutorMessages[currentSlide.pageNumber]?.length > 0 && (
                          <div className="space-y-2.5 pt-1 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                            {tutorMessages[currentSlide.pageNumber].map((msg) => (
                              <div
                                key={msg.id}
                                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                              >
                                <div
                                  className={`rounded-xl p-3 text-xs leading-relaxed max-w-[92%] ${
                                    msg.role === 'user'
                                      ? 'bg-neutral-900 text-white font-medium'
                                      : 'bg-neutral-50 border border-neutral-200/80 text-neutral-800 space-y-1.5'
                                  }`}
                                >
                                  {msg.role === 'assistant' ? (
                                    <div className="whitespace-pre-line font-sans text-xs">
                                      {msg.text}
                                    </div>
                                  ) : (
                                    <span>{msg.text}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                            {isTutorLoading && (
                              <div className="text-xs text-neutral-400 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 w-fit">
                                Thinking...
                              </div>
                            )}
                          </div>
                        )}

                        {tutorError && (
                          <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                            {tutorError}
                          </div>
                        )}

                        {/* Input Form */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleAskTutor(tutorInput);
                          }}
                          className="flex items-center gap-2 pt-1"
                        >
                          <input
                            type="text"
                            value={tutorInput}
                            onChange={(e) => setTutorInput(e.target.value)}
                            placeholder="Ask a question..."
                            disabled={isTutorLoading}
                            className="flex-1 px-3.5 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 bg-white placeholder:text-neutral-400"
                          />
                          <button
                            type="submit"
                            disabled={!tutorInput.trim() || isTutorLoading}
                            className="px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white text-xs font-medium transition flex items-center gap-1.5 shrink-0"
                          >
                            <span>Send</span>
                            <Send className="w-3 h-3" />
                          </button>
                        </form>
                      </div>

                      {/* Slide Flip Bottom Navigation */}
                      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <button
                          disabled={selectedSlideIndex <= 0}
                          onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                          className="hover:text-neutral-900 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1 font-medium"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Previous Slide</span>
                        </button>

                        <button
                          disabled={selectedSlideIndex >= filteredSlides.length - 1}
                          onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                          className="hover:text-neutral-900 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1 font-medium"
                        >
                          <span>Next Slide</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-12 text-center text-xs text-neutral-400">
                      Select a slide from the index.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 2: 10-TO-1 CONDENSED SLIDE DIGEST
          ───────────────────────────────────────────────────────────── */}
          {activeTab === 'digest' && (
            <div className="space-y-6">
              {/* Digest Top Bar & Batch Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-200 rounded-2xl p-5 bg-white shadow-xs">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span>10-to-1 Condensed Slide Digest</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-medium">
                      {condensedSummaries.length} {condensedSummaries.length === 1 ? 'Module' : 'Modules'}
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-2xl leading-relaxed">
                    Conjoins batches of slides into high-density executive summaries. Every governing formula, core definition, and exam test-point is preserved without slide-by-slide clutter.
                  </p>
                </div>

                {/* Batch size selector */}
                <div className="flex items-center gap-2 text-xs shrink-0 self-start sm:self-auto">
                  <span className="text-neutral-400 font-medium">Batch:</span>
                  <div className="inline-flex rounded-lg border border-neutral-200 p-0.5 bg-neutral-50">
                    <button
                      onClick={() => setCondensedGroupSize(10)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                        condensedGroupSize === 10
                          ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      ~10 Slides
                    </button>
                    <button
                      onClick={() => setCondensedGroupSize(5)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                        condensedGroupSize === 5
                          ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      ~5 Slides
                    </button>
                    <button
                      onClick={() => setCondensedGroupSize(activePackage.slides.length)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                        condensedGroupSize === activePackage.slides.length
                          ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      All-in-One
                    </button>
                  </div>
                </div>
              </div>

              {/* Module Cards */}
              <div className="space-y-6">
                {condensedSummaries.map((group) => (
                  <div 
                    key={group.groupIndex} 
                    id={`digest-module-${group.groupIndex}`}
                    className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-xs space-y-5 p-6 sm:p-7"
                  >
                    {/* Module Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                          <span className="font-bold text-neutral-900 uppercase">
                            Module {group.groupIndex}
                          </span>
                          <span>•</span>
                          <span>Slides {String(group.startPage).padStart(2, '0')} to {String(group.endPage).padStart(2, '0')}</span>
                          <span>•</span>
                          <span>{group.slideCount} slides conjoined</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">
                          {group.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => {
                          const idx = activePackage.slides.findIndex(s => s.pageNumber === group.startPage);
                          if (idx !== -1) {
                            setSelectedSlideIndex(idx);
                            setActiveTab('slides');
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium transition flex items-center gap-1.5 self-start sm:self-auto shrink-0"
                      >
                        <span>Open in Slide Studio</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Executive Conjunction Overview */}
                    <div className="border-l-2 border-neutral-900 pl-4 py-1 bg-neutral-50/50 rounded-r-xl p-3.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                        Executive Conjunction Overview
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                        {group.overview}
                      </p>
                    </div>

                    {/* Core Takeaways */}
                    {group.coreTakeaways.length > 0 && (
                      <div className="space-y-2.5">
                        <span className="text-[11px] font-semibold text-neutral-500 block uppercase tracking-wider font-mono">
                          Consolidated Concepts ({group.coreTakeaways.length})
                        </span>
                        <div className="grid grid-cols-1 gap-2.5">
                          {group.coreTakeaways.map((concept, cIdx) => (
                            <div key={cIdx} className="p-3.5 rounded-xl border border-neutral-200/80 bg-white space-y-1.5 text-xs">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold text-neutral-900 text-xs">
                                  {concept.title}
                                </span>
                                <div className="flex items-center gap-1 shrink-0">
                                  {concept.sourceSlides.map(p => (
                                    <button
                                      key={p}
                                      onClick={() => {
                                        const idx = activePackage.slides.findIndex(s => s.pageNumber === p);
                                        if (idx !== -1) {
                                          setSelectedSlideIndex(idx);
                                          setActiveTab('slides');
                                        }
                                      }}
                                      className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition"
                                      title={`Go to Slide ${p}`}
                                    >
                                      Slide {p}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <p className="text-neutral-700 leading-relaxed text-xs">
                                {concept.explanation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Governing Formulas (if any in this 10-slide block) */}
                    {group.essentialFormulas.length > 0 && (
                      <div className="space-y-2.5">
                        <span className="text-[11px] font-semibold text-neutral-500 block uppercase tracking-wider font-mono">
                          Governing Equations in This Module
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {group.essentialFormulas.map((f, fIdx) => (
                            <div key={fIdx} className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50/50 space-y-2 text-xs">
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-xs bg-white px-2.5 py-1 rounded-lg border border-neutral-200 font-bold text-neutral-900">
                                  {f.formula}
                                </span>
                                <span className="font-mono text-[10px] text-neutral-400">Slide {f.sourceSlide}</span>
                              </div>
                              <p className="text-neutral-600 text-xs leading-relaxed">
                                {f.inPlainEnglish}
                              </p>
                              {f.variables && f.variables.length > 0 && (
                                <div className="pt-2 border-t border-neutral-200/60 flex flex-wrap gap-2 text-[11px]">
                                  {f.variables.map((v, vIdx) => (
                                    <span key={vIdx} className="bg-white px-2 py-0.5 rounded border border-neutral-100 text-neutral-700">
                                      <strong className="font-mono text-neutral-900">{v.symbol}</strong>: {v.meaning}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Definitions */}
                    {group.keyDefinitions.length > 0 && (
                      <div className="space-y-2.5">
                        <span className="text-[11px] font-semibold text-neutral-500 block uppercase tracking-wider font-mono">
                          Essential Definitions
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {group.keyDefinitions.map((d, dIdx) => (
                            <div key={dIdx} className="border border-neutral-200/80 rounded-xl p-3 bg-white space-y-1 text-xs">
                              <div className="flex items-center justify-between">
                                <strong className="text-neutral-900 font-bold text-xs">{d.term}</strong>
                                <span className="font-mono text-[10px] text-neutral-400">Slide {d.sourceSlide}</span>
                              </div>
                              <p className="text-neutral-600 leading-relaxed text-[11px]">{d.definition}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Exam Watch-Outs */}
                    {group.examPoints.length > 0 && (
                      <div className="border border-neutral-200 bg-neutral-50/60 rounded-xl p-4 space-y-2 text-xs">
                        <span className="text-[11px] font-semibold text-neutral-900 block">
                          Module Exam Watch-Outs
                        </span>
                        <ul className="space-y-1.5">
                          {group.examPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-neutral-700 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Synthesis Self-Check */}
                    <div className="border border-neutral-200 rounded-xl p-4 space-y-2.5 bg-white">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span>MODULE SYNTHESIS CHECK</span>
                        <span>Slides {group.startPage}–{group.endPage}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-neutral-900 leading-relaxed">
                        {group.synthesisCheck.question}
                      </p>

                      {revealedDigestAnswers[group.groupIndex] ? (
                        <div className="pt-2.5 border-t border-neutral-100 space-y-2">
                          <p className="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                            {group.synthesisCheck.answer}
                          </p>
                          <button
                            onClick={() => setRevealedDigestAnswers(prev => ({ ...prev, [group.groupIndex]: false }))}
                            className="text-xs text-neutral-400 hover:text-neutral-700 transition"
                          >
                            Hide answer
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setRevealedDigestAnswers(prev => ({ ...prev, [group.groupIndex]: true }))}
                          className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                        >
                          Check Model Answer
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 3: STUDY PLAN (SPACED TIMETABLE & DAILY CHECKLISTS)
          ───────────────────────────────────────────────────────────── */}
          {activeTab === 'plan' && (
            <div className="space-y-6">
              {activePackage.studyPlan.phases.map((phase) => (
                <div key={phase.phaseNumber} className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                  <div className="bg-neutral-50 px-5 py-3 border-b border-neutral-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono text-neutral-400 uppercase text-[10px]">{phase.days}</span>
                      <h4 className="font-bold text-neutral-900 text-sm mt-0.5">{phase.name}</h4>
                    </div>
                    <span className="text-neutral-500">{phase.objective}</span>
                  </div>

                  <div className="p-5 divide-y divide-neutral-100 space-y-4 text-xs">
                    {phase.sessions.map((session) => {
                      const sessionId = `${activePackage.id}-day-${session.day}`;
                      const isDone = completedSessions[sessionId];

                      return (
                        <div key={session.day} className="pt-4 first:pt-0 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-2.5">
                              <button
                                onClick={() => toggleSession(sessionId)}
                                className={`w-4 h-4 rounded border flex items-center justify-center transition mt-0.5 shrink-0 ${
                                  isDone ? 'bg-neutral-900 border-neutral-900 text-white' : 'border-neutral-300'
                                }`}
                              >
                                {isDone && <Check className="w-3 h-3" />}
                              </button>
                              <div>
                                <h5 className={`font-semibold ${isDone ? 'line-through text-neutral-400' : 'text-neutral-900'}`}>
                                  Day {session.day}: {session.title}
                                </h5>
                                <p className="text-neutral-500 mt-0.5">{session.focus}</p>
                              </div>
                            </div>

                            <span className="font-mono text-neutral-400 text-[11px] shrink-0">
                              {session.allocatedMinutes}m
                            </span>
                          </div>

                          <div className="ml-6 space-y-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] text-neutral-400 font-mono">Slides:</span>
                              {session.slideNumbers.map(page => (
                                <button
                                  key={page}
                                  onClick={() => {
                                    const idx = activePackage.slides.findIndex(s => s.pageNumber === page);
                                    if (idx !== -1) {
                                      setSelectedSlideIndex(idx);
                                      setActiveTab('slides');
                                    }
                                  }}
                                  className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition"
                                >
                                  {String(page).padStart(2, '0')}
                                </button>
                              ))}
                            </div>

                            <div className="bg-neutral-50/50 p-2.5 rounded border border-neutral-100 space-y-1 text-neutral-600">
                              {session.checklist.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-1.5">
                                  <div className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 3: 1-PAGE CHEAT SHEET (HIGH-YIELD REVISION SUMMARY)
          ───────────────────────────────────────────────────────────── */}
          {activeTab === 'cram' && (
            <div className="border border-neutral-200 rounded-xl p-8 space-y-8 bg-white">
              <div className="border-b border-neutral-200 pb-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase text-neutral-400">High-Yield Revision Sheet</p>
                  <h3 className="text-xl font-bold text-neutral-900 mt-0.5">{activePackage.deckTitle}</h3>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-xs font-medium transition"
                >
                  Print / Export PDF
                </button>
              </div>

              {/* Theorems */}
              <div className="space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Must-Memorize Principles
                </h4>
                <div className="space-y-2 text-xs leading-relaxed">
                  {activePackage.cramSheetSummary.mustMemorizeTheorems.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 text-neutral-800">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulas */}
              <div className="space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Essential Equations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activePackage.cramSheetSummary.formulasToRecite.map((f, idx) => (
                    <div key={idx} className="font-mono text-xs p-3 rounded-lg border border-neutral-100 bg-neutral-50 text-neutral-900 font-semibold text-center">
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Frequency Questions */}
              <div className="space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Key Examiner Questions
                </h4>
                <div className="space-y-2 text-xs leading-relaxed">
                  {activePackage.cramSheetSummary.highFrequencyQuestions.map((q, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 text-neutral-800 flex items-start gap-2">
                      <span className="font-mono text-neutral-400 shrink-0">Q{idx + 1}.</span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 4: ACTIVE RECALL DRILL (FLASHCARDS MODE)
          ───────────────────────────────────────────────────────────── */}
          {activeTab === 'flashcards' && (
            <div className="max-w-xl mx-auto space-y-6 pt-6">
              {currentSlide && (
                <div className="border border-neutral-200 rounded-2xl p-8 space-y-6 text-center bg-white shadow-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-neutral-100 pb-3">
                    <span>Card {selectedSlideIndex + 1} of {filteredSlides.length}</span>
                    <span>Slide {String(currentSlide.pageNumber).padStart(2, '0')}</span>
                    <span>{masteredSlides[currentSlide.pageNumber] ? 'Mastered' : 'Unmastered'}</span>
                  </div>

                  <div className="py-6 space-y-3">
                    <p className="text-xs text-neutral-400 font-mono uppercase">{currentSlide.title}</p>
                    <h4 className="text-lg font-semibold text-neutral-900 leading-snug">
                      {currentSlide.activeRecallPrompt.question}
                    </h4>
                  </div>

                  {revealedAnswers[currentSlide.pageNumber] ? (
                    <div className="pt-4 border-t border-neutral-100 space-y-4 animate-in fade-in">
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-left text-xs text-neutral-800 leading-relaxed">
                        <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1">Answer</span>
                        {currentSlide.activeRecallPrompt.answer}
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => {
                            toggleMastered(currentSlide.pageNumber);
                            if (selectedSlideIndex < filteredSlides.length - 1) {
                              setSelectedSlideIndex(prev => prev + 1);
                            }
                          }}
                          className="px-5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                        >
                          I Knew This
                        </button>
                        <button
                          onClick={() => {
                            if (selectedSlideIndex < filteredSlides.length - 1) {
                              setSelectedSlideIndex(prev => prev + 1);
                            }
                          }}
                          className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs transition"
                        >
                          Review Later
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentSlide.pageNumber]: true }))}
                      className="px-6 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition"
                    >
                      Reveal Answer
                    </button>
                  )}

                  <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                    <button
                      disabled={selectedSlideIndex <= 0}
                      onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                      className="hover:text-neutral-900 disabled:opacity-30 transition flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                    <button
                      disabled={selectedSlideIndex >= filteredSlides.length - 1}
                      onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                      className="hover:text-neutral-900 disabled:opacity-30 transition flex items-center gap-1"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. FULLSCREEN SLIDE MODAL
      ───────────────────────────────────────────────────────────── */}
      {isFullscreenSlide && currentSlide && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col p-4 sm:p-6 animate-in fade-in">
          <div className="flex items-center justify-between text-white text-xs pb-3 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2 font-mono">
              <span className="font-bold">SLIDE {String(currentSlide.pageNumber).padStart(2, '0')}</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-300 font-sans">{currentSlide.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled={selectedSlideIndex <= 0}
                onClick={() => setSelectedSlideIndex(prev => Math.max(0, prev - 1))}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={selectedSlideIndex >= filteredSlides.length - 1}
                onClick={() => setSelectedSlideIndex(prev => Math.min(filteredSlides.length - 1, prev + 1))}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFullscreenSlide(false)}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-auto max-w-5xl mx-auto w-full">
            <canvas 
              ref={modalCanvasRef} 
              className="max-h-[85vh] max-w-[95vw] object-contain rounded-xl shadow-2xl bg-white"
            />
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. MINIMAL GEMINI API KEY MODAL
      ───────────────────────────────────────────────────────────── */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl text-neutral-900">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Gemini API Key</h3>
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="text-neutral-400 hover:text-neutral-700 text-xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              AcademicPrep natively processes slides using Google Gemini Flash. You can optionally supply your own personal key.
            </p>
            <input
              type="password"
              value={customApiKey}
              onChange={(e) => setCustomApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 font-mono"
            />
            <div className="flex items-center justify-end gap-2 pt-2 text-xs">
              <button
                onClick={() => saveApiKey('')}
                className="text-neutral-500 hover:text-neutral-800 px-3 py-1.5"
              >
                Clear
              </button>
              <button
                onClick={() => saveApiKey(customApiKey)}
                className="px-4 py-1.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. LOADING OVERLAY
      ───────────────────────────────────────────────────────────── */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="text-center space-y-2">
            <div className="w-6 h-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-medium text-neutral-800">{loadingStatus}</p>
          </div>
        </div>
      )}
    </div>
  );
}
