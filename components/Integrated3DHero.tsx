'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  BookOpen,
  Award,
  Zap,
  Layers,
  ChevronRight,
  Smartphone,
  Bookmark,
  Volume2,
  VolumeX,
  Rotate3d,
  FileCheck2,
  Check
} from 'lucide-react';

interface InteractiveQuestion {
  level: 'JHS' | 'SHS';
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  bookTitle: string;
  bookColor: string;
  examCode: string;
}

const CURRICULUM_QUESTIONS: Record<'JHS' | 'SHS', InteractiveQuestion> = {
  JHS: {
    level: 'JHS',
    subject: 'Integrated Science',
    topic: 'Circulatory System & Blood Components',
    question: 'Which component of human blood is primarily responsible for blood clotting at a wound site?',
    options: [
      'Red Blood Cells (Erythrocytes)', 
      'Platelets (Thrombocytes)', 
      'White Blood Cells (Leukocytes)', 
      'Blood Plasma'
    ],
    correctIndex: 1,
    explanation: 'Platelets release thrombokinase to initiate fibrin mesh formation, sealing vascular cuts and halting bleeding.',
    bookTitle: 'BECE Integrated Science & Core Math',
    bookColor: 'from-blue-600 to-indigo-700',
    examCode: 'BECE-2026/SC-01'
  },
  SHS: {
    level: 'SHS',
    subject: 'Core Mathematics',
    topic: 'Indices & Logarithmic Equations',
    question: 'Solve for x in the exponential equation: 2^(2x - 1) = 32.',
    options: [
      'x = 2', 
      'x = 3', 
      'x = 4', 
      'x = 5'
    ],
    correctIndex: 1,
    explanation: 'Since 32 = 2^5, equating exponents gives 2x - 1 = 5 => 2x = 6 => x = 3.',
    bookTitle: 'WASSCE Core Mathematics & Electives',
    bookColor: 'from-indigo-600 to-slate-900',
    examCode: 'WASSCE-2026/MTH-01'
  }
};

const ACCREDITED_BOOKS = [
  { id: 'b1', title: 'Core Mathematics', level: 'JHS & SHS', code: 'NaCCA-MTH', color: 'bg-blue-600', icon: '📐' },
  { id: 'b2', title: 'Integrated Science', level: 'JHS & SHS', code: 'NaCCA-SCI', color: 'bg-emerald-600', icon: '🔬' },
  { id: 'b3', title: 'English Language', level: 'JHS & SHS', code: 'NaCCA-ENG', color: 'bg-indigo-600', icon: '📖' },
  { id: 'b4', title: 'Social Studies', level: 'JHS & SHS', code: 'NaCCA-SOC', color: 'bg-amber-600', icon: '🌍' },
];

// Web Audio API Synthesizer for tactile book page flips, mechanical clicks, and quiz feedback
function playTactileSound(type: 'page-flip' | 'click' | 'success' | 'tab') {
  try {
    if (typeof window === 'undefined') return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (type === 'page-flip') {
      // Paper page rustle / flip
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } else if (type === 'tab') {
      // Bookmark snap / level tab switch
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } else if (type === 'click') {
      // Tactile answer selection click
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.16, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } else if (type === 'success') {
      // Celebratory chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.32);
    }
  } catch {
    // AudioContext permission guard
  }
}

interface Integrated3DHeroProps {
  latestPost?: { id: string; title: string };
  onOpenApkModal?: () => void;
}

export default function Integrated3DHero({ latestPost, onOpenApkModal }: Integrated3DHeroProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const bookStageRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // States
  const [selectedLevel, setSelectedLevel] = useState<'JHS' | 'SHS'>('JHS');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [examSeconds, setExamSeconds] = useState(899); // 14:59
  const [activeBookIdx, setActiveBookIdx] = useState(0);

  // Kinoria Spring Cursor State
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorFrameRef = useRef<HTMLDivElement>(null);
  const cursorState = useRef({
    x: -100,
    y: -100,
    fx: -100,
    fy: -100,
    fvx: 0,
    fvy: 0,
    isHot: false,
    isDown: false,
    visible: false
  });

  // Inertial 3D Physics State
  const physics = useRef({
    rx: 0,
    ry: 0,
    targetRx: 0,
    targetRy: 0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0
  });
  const animFrameId = useRef<number | null>(null);

  // Exam Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setExamSeconds(prev => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const triggerSound = useCallback((type: 'page-flip' | 'click' | 'success' | 'tab') => {
    if (!isAudioMuted) playTactileSound(type);
  }, [isAudioMuted]);

  // Spring physics render loop (Kinoria cursor + 3D book & quiz stage tilt)
  useEffect(() => {
    let active = true;

    const render = () => {
      if (!active) return;

      // 1. Smooth 3D Stage Inertia
      const p = physics.current;
      p.rx += (p.targetRx - p.rx) * 0.085;
      p.ry += (p.targetRy - p.ry) * 0.085;

      if (bookStageRef.current) {
        bookStageRef.current.style.transform = `perspective(1200px) rotateX(${p.rx.toFixed(2)}deg) rotateY(${p.ry.toFixed(2)}deg)`;
      }

      if (glareRef.current) {
        const glareX = 50 + (p.ry / 14) * 40;
        const glareY = 50 - (p.rx / 12) * 40;
        glareRef.current.style.background = `radial-gradient(circle 380px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45), transparent 75%)`;
      }

      // 2. Kinoria Spring Reticle Cursor
      const c = cursorState.current;
      if (c.visible && cursorDotRef.current && cursorFrameRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${c.x - 5.5}px, ${c.y - 5.5}px, 0)`;

        const dt = 0.016;
        const fw = c.isHot ? 36 : 26;
        const fz = c.isHot ? 0.8 : 0.84;

        c.fvx += (fw * fw * (c.x - c.fx) - 2 * fz * fw * c.fvx) * dt;
        c.fx += c.fvx * dt;

        c.fvy += (fw * fw * (c.y - c.fy) - 2 * fz * fw * c.fvy) * dt;
        c.fy += c.fvy * dt;

        const frameScale = c.isDown ? 0.74 : (c.isHot ? 1.05 : 1.0);
        cursorFrameRef.current.style.transform = `translate3d(${c.fx - 16}px, ${c.fy - 16}px, 0) scale(${frameScale})`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      active = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Pointer tracking
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const stageX = e.clientX - rect.left;
    const stageY = e.clientY - rect.top;

    const c = cursorState.current;
    c.x = stageX;
    c.y = stageY;
    c.visible = true;

    const target = e.target as HTMLElement;
    c.isHot = !!target.closest('button, a, [data-hot="true"], input');

    if (physics.current.isDragging) {
      const deltaX = e.clientX - physics.current.lastMouseX;
      const deltaY = e.clientY - physics.current.lastMouseY;
      physics.current.lastMouseX = e.clientX;
      physics.current.lastMouseY = e.clientY;

      physics.current.targetRy = Math.max(-24, Math.min(24, physics.current.targetRy + deltaX * 0.22));
      physics.current.targetRx = Math.max(-18, Math.min(18, physics.current.targetRx - deltaY * 0.22));
    } else {
      const normX = (stageX / rect.width) * 2 - 1;
      const normY = (stageY / rect.height) * 2 - 1;
      physics.current.targetRy = normX * 12;
      physics.current.targetRx = -normY * 10;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    cursorState.current.isDown = true;
    const target = e.target as HTMLElement;
    if (!target.closest('button, a, input, select')) {
      physics.current.isDragging = true;
      physics.current.lastMouseX = e.clientX;
      physics.current.lastMouseY = e.clientY;
    }
  };

  const handlePointerUp = () => {
    cursorState.current.isDown = false;
    physics.current.isDragging = false;
  };

  const handlePointerLeave = () => {
    cursorState.current.visible = false;
    cursorState.current.isDown = false;
    physics.current.isDragging = false;
    physics.current.targetRx = 0;
    physics.current.targetRy = 0;
  };

  // Toggle Level (JHS / SHS)
  const handleLevelSwitch = (level: 'JHS' | 'SHS') => {
    if (level === selectedLevel) return;
    setSelectedLevel(level);
    setSelectedOption(null);
    setHasAnswered(false);
    triggerSound('tab');
  };

  // Answer selection
  const currentQ = CURRICULUM_QUESTIONS[selectedLevel];
  const isCorrect = selectedOption === currentQ.correctIndex;

  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);

    if (index === currentQ.correctIndex) {
      triggerSound('success');
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#2563eb', '#10b981', '#f59e0b', '#4f46e5']
        });
      }
    } else {
      triggerSound('click');
    }
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    triggerSound('click');
  };

  return (
    <section 
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className="relative w-full bg-white border-b border-slate-200 text-slate-900 pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Kinoria Architectural Stage Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(203, 213, 225, 0.45) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Lighting Depth Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-100/40 blur-[100px] pointer-events-none -z-10" />

      {/* ── KINORIA SPRING-DAMPED RETICLE CURSOR ── */}
      <div 
        ref={cursorDotRef}
        className="absolute top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 transition-colors duration-150 shadow-sm"
        style={{
          backgroundColor: cursorState.current.isHot ? '#10b981' : '#2563eb',
          opacity: cursorState.current.visible ? 1 : 0
        }}
        aria-hidden="true"
      />
      <div
        ref={cursorFrameRef}
        className="absolute top-0 left-0 w-8 h-8 pointer-events-none z-50 transition-opacity duration-150"
        style={{
          opacity: cursorState.current.visible ? 1 : 0
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="w-full h-full stroke-slate-900/80 fill-none" strokeWidth="1.6">
          <path d="M2 9V2H9" />
          <path d="M23 2H30V9" />
          <path d="M2 23V30H9" />
          <path d="M23 30H30V23" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ── KINORIA VIEWPORT OPTICAL HUD RETICLES ── */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-[10px] font-mono uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">┌ ACADEMICPREP // 3D STAGE</span>
            <span className="hidden md:inline text-slate-300">────────────</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              GHANA NaCCA ACCREDITED
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setIsAudioMuted(!isAudioMuted);
                triggerSound('click');
              }}
              data-hot="true"
              className="p-1 rounded-md text-slate-500 hover:text-slate-900 transition flex items-center gap-1 cursor-pointer"
            >
              {isAudioMuted ? (
                <>
                  <VolumeX className="w-3 h-3 text-slate-400" />
                  <span className="text-[9px]">MUTE</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3 h-3 text-blue-600" />
                  <span className="text-[9px] text-blue-600 font-bold">HAPTIC AUDIO</span>
                </>
              )}
            </button>
            <span className="hidden sm:inline text-slate-500">┐ BECE &amp; WASSCE 2026</span>
          </div>
        </div>

        {/* ── UNIFIED INTEGRATED 3D HERO GRID (HEADLINE + 3D BOOKS & QUIZ CENTERPIECE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS (Framing the 3D Stage) */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span>8,000+ Online Students</span>
              </div>

              {latestPost && (
                <Link
                  href={`/blog/${latestPost.id}`}
                  data-hot="true"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium transition group"
                >
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 text-white text-[9px] font-bold uppercase tracking-wider">NEW</span>
                  <span className="truncate max-w-[150px] sm:max-w-xs text-slate-800">{latestPost.title}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black tracking-tight leading-[1.12] text-slate-900">
              Master Your Curriculum, <br />
              <span className="text-blue-600">
                Topic by Topic, Week by Week.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Full JHS and SHS curriculum lesson notes, instant WAEC-standard quizzes with step-by-step worked explanations, and 5 comprehensive elective programme strands.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
              <Link
                href="/jhs"
                id="tour-home-launch"
                data-hot="true"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-sm shadow-blue-500/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Launch JHS Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/shs"
                data-hot="true"
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm transition shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Launch SHS (WASSCE) Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {onOpenApkModal && (
                <button
                  type="button"
                  onClick={onOpenApkModal}
                  data-hot="true"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-slate-600" />
                  <span>Get App</span>
                </button>
              )}
            </div>

            {/* Quick Demo Info Pill */}
            <div className="pt-2 max-w-md mx-auto lg:mx-0">
              <div id="tour-home-demo" className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-left text-xs text-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                <div>
                  <span className="font-semibold text-slate-900 block text-[11px]">Quick Demo Account:</span>
                  <span className="text-slate-600 text-[11px]">
                    Phone: <b className="text-slate-900 font-mono">0241234567</b> • PIN: <b className="text-slate-900 font-mono">1234</b>
                  </span>
                </div>
                <Link 
                  href="/login"
                  data-hot="true"
                  className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-semibold text-[10px] hover:bg-blue-500 shadow-sm shadow-blue-500/20 shrink-0"
                >
                  Quick Fill
                </Link>
              </div>
            </div>

            {/* Floating Accredited Books Selector Bar */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold">
                SELECT CURRICULUM TEXTBOOK:
              </span>
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {ACCREDITED_BOOKS.map((b, bIdx) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      setActiveBookIdx(bIdx);
                      triggerSound('page-flip');
                    }}
                    data-hot="true"
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                      activeBookIdx === bIdx 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-2xs font-bold' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{b.icon}</span>
                    <span>{b.title}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE 3D BOOK & QUIZ INSTRUMENT (The Central Experience) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* 3D Physical Book and Quiz Stage */}
            <div
              ref={bookStageRef}
              className="relative w-full max-w-xl transition-transform ease-out will-change-transform"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Dynamic Glare Overlay */}
              <div
                ref={glareRef}
                className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-3xl"
                style={{ opacity: 0.5 }}
                aria-hidden="true"
              />

              {/* ── 3D PHYSICAL BOOK 1 (UNDERLYING STACKED ENCYCLOPEDIA) ── */}
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-slate-800 border-r-8 border-b-6 border-slate-900 shadow-xl opacity-40 pointer-events-none"
                style={{
                  transform: 'translateZ(-40px) rotate(-2deg)',
                  boxShadow: '10px 15px 30px rgba(0, 0, 0, 0.15)'
                }}
                aria-hidden="true"
              />

              {/* ── 3D PHYSICAL BOOK 2 (MIDDLE SYLLABUS VOLUME) ── */}
              <div 
                className="absolute -bottom-2 -right-2 w-full h-full rounded-3xl bg-blue-900/40 border-r-6 border-b-4 border-blue-950 shadow-md opacity-60 pointer-events-none"
                style={{
                  transform: 'translateZ(-20px) rotate(-1deg)'
                }}
                aria-hidden="true"
              />

              {/* ── 3D MAIN OPEN BOOK & LIVE QUIZ SLATE ── */}
              <div
                className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-5 sm:p-7 overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Book Spine Texture Ribbon on Left */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 shadow-inner"
                  aria-hidden="true"
                />

                {/* Book Header Bar: Level Switcher Bookmarks & Exam Timer */}
                <div 
                  className="pl-3 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {/* Bookmark Tabs: JHS / SHS Level */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => handleLevelSwitch('JHS')}
                      data-hot="true"
                      className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedLevel === 'JHS'
                          ? 'bg-white text-slate-900 shadow-xs font-black'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${selectedLevel === 'JHS' ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
                      <span>BECE (JHS)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLevelSwitch('SHS')}
                      data-hot="true"
                      className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedLevel === 'SHS'
                          ? 'bg-white text-slate-900 shadow-xs font-black'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${selectedLevel === 'SHS' ? 'text-blue-600 fill-blue-600' : 'text-slate-400'}`} />
                      <span>WASSCE (SHS)</span>
                    </button>
                  </div>

                  {/* CBT Running Clock */}
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 font-bold">
                    <Clock className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} />
                    <span>{formatTimer(examSeconds)}</span>
                  </div>
                </div>

                {/* Main Open Book Page Content (Live WAEC Quiz Slate) */}
                <div 
                  className="pl-3 pt-5 space-y-4"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  {/* Book Metadata & Subject Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {currentQ.subject}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                          {currentQ.examCode}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        +10 PTS
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      {currentQ.topic}
                    </span>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {currentQ.question}
                    </h3>
                  </div>

                  {/* 4 Clickable Answer Options */}
                  <div className="space-y-2 pt-1">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isAnswerCorrect = idx === currentQ.correctIndex;

                      let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
                      
                      if (hasAnswered) {
                        if (isAnswerCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold shadow-xs';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-bold';
                        } else {
                          btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-slate-900 border-slate-900 text-white font-bold';
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleOptionSelect(idx)}
                          disabled={hasAnswered}
                          data-hot="true"
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono font-bold text-[10px] shrink-0 border ${
                              hasAnswered && isAnswerCorrect 
                                ? 'bg-emerald-600 text-white border-emerald-600' 
                                : hasAnswered && isSelected 
                                ? 'bg-rose-600 text-white border-rose-600' 
                                : 'bg-white text-slate-700 border-slate-200'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </div>

                          {hasAnswered && isAnswerCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {hasAnswered && isSelected && !isAnswerCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Worked Solution & Examiner Breakdown */}
                  {hasAnswered && (
                    <div className="pt-2 animate-in fade-in duration-200">
                      <div className={`p-3 rounded-xl border text-xs leading-relaxed space-y-1.5 ${
                        isCorrect 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                          : 'bg-amber-50 border-amber-200 text-amber-900'
                      }`}>
                        <div className="flex items-center justify-between font-bold">
                          <span className="flex items-center gap-1.5">
                            {isCorrect ? '🎉 Correct WAEC Answer!' : '💡 Official Examiner Explanation:'}
                          </span>
                          <button
                            type="button"
                            onClick={handleResetQuiz}
                            data-hot="true"
                            className="text-[11px] underline hover:no-underline font-semibold flex items-center gap-1 cursor-pointer text-slate-900"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Try Again</span>
                          </button>
                        </div>
                        <p className="text-[11px] opacity-90">{currentQ.explanation}</p>
                      </div>
                    </div>
                  )}

                  {/* Book Bottom Controls */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Over 12,400+ verified exam questions</span>
                    </span>
                    <Link
                      href={selectedLevel === 'JHS' ? '/jhs' : '/shs'}
                      data-hot="true"
                      className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Full Syllabus</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>

              {/* ── FLOATING 3D SYLLABI SATELLITE CHIPS ── */}
              {/* Chip 1: 98.4% Pass Rate */}
              <div 
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-900 pointer-events-none"
                style={{ transform: 'translateZ(55px)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>98.4% Pass Rate</span>
              </div>

              {/* Chip 2: NaCCA Verified Notes */}
              <div 
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800 pointer-events-none hidden sm:flex"
                style={{ transform: 'translateZ(50px)' }}
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>NaCCA Notes</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
