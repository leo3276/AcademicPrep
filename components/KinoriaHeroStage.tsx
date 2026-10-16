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
  Zap,
  Layers,
  ChevronRight,
  Sliders,
  Volume2,
  VolumeX,
  Rotate3d,
  Compass,
  Cpu
} from 'lucide-react';

interface InteractiveQuestion {
  level: 'JHS' | 'SHS';
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  examCode: string;
}

const SAMPLE_QUESTIONS: Record<'JHS' | 'SHS', InteractiveQuestion> = {
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
    explanation: 'Platelets release thrombokinase to initiate fibrin mesh formation, sealing vascular lesions and preventing hemorrhage.',
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
    explanation: 'Express 32 as 2^5: equating base-2 exponents yields 2x - 1 = 5 => 2x = 6 => x = 3.',
    examCode: 'WASSCE-2026/MTH-01'
  }
};

const CURRICULUM_STRANDS = {
  JHS: [
    { label: 'Core Math', code: 'J-MTH', icon: '📐' },
    { label: 'Integrated Science', code: 'J-SCI', icon: '🔬' },
    { label: 'English Language', code: 'J-ENG', icon: '📖' },
    { label: 'Social Studies', code: 'J-SOC', icon: '🌍' },
    { label: 'Computing', code: 'J-CMP', icon: '💻' },
  ],
  SHS: [
    { label: 'Core Math', code: 'S-MTH', icon: '📊' },
    { label: 'Elective Physics', code: 'S-PHY', icon: '⚛️' },
    { label: 'Elective Chemistry', code: 'S-CHM', icon: '🧪' },
    { label: 'Economics', code: 'S-ECN', icon: '📈' },
    { label: 'Elective Biology', code: 'S-BIO', icon: '🧬' },
  ]
};

// Web Audio API Synthesizer for Kinoria-style tactile mechanical haptics
function playMechanicalHaptic(type: 'switch' | 'dial' | 'button' | 'success') {
  try {
    if (typeof window === 'undefined') return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (type === 'switch') {
      // Crisp mechanical metal toggle click (Kinoria shutter lever)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(32, ctx.currentTime + 0.045);
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'dial') {
      // Soft optical rotary tick
      osc.type = 'sine';
      osc.frequency.setValueAtTime(380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.025);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } else if (type === 'button') {
      // Tactile push key click
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } else if (type === 'success') {
      // Celebratory chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  } catch {
    // Ignore audio permission or context restrictions
  }
}

export default function KinoriaHeroStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  // States
  const [selectedLevel, setSelectedLevel] = useState<'JHS' | 'SHS'>('JHS');
  const [activeStrandIdx, setActiveStrandIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [examMillis, setExamMillis] = useState(899900); // 14:59.90
  const [dialRotation, setDialRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
    vx: 0,
    vy: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    isPointerDown: false
  });
  const animFrameId = useRef<number | null>(null);

  // Countdown timer with milliseconds simulation (Kinoria HUD style)
  useEffect(() => {
    const timer = setInterval(() => {
      setExamMillis(prev => (prev > 10 ? prev - 73 : 900000));
    }, 73);
    return () => clearInterval(timer);
  }, []);

  const formatHudTimer = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const centis = Math.floor((ms % 1000) / 10);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${centis.toString().padStart(2, '0')}`;
  };

  // Sound trigger helper
  const triggerHaptic = useCallback((type: 'switch' | 'dial' | 'button' | 'success') => {
    if (!isAudioMuted) {
      playMechanicalHaptic(type);
    }
  }, [isAudioMuted]);

  // Spring physics loop for Kinoria aim-frame cursor and 3D console tilt
  useEffect(() => {
    let active = true;

    const renderLoop = () => {
      if (!active) return;

      // 1. Update 3D Stage Inertia
      const p = physics.current;
      p.rx += (p.targetRx - p.rx) * 0.085;
      p.ry += (p.targetRy - p.ry) * 0.085;

      if (consoleRef.current) {
        consoleRef.current.style.transform = `perspective(1400px) rotateX(${p.rx.toFixed(2)}deg) rotateY(${p.ry.toFixed(2)}deg)`;
      }

      if (glareRef.current) {
        // Specular light reflection sheen
        const glareX = 50 + (p.ry / 16) * 45;
        const glareY = 50 - (p.rx / 14) * 45;
        glareRef.current.style.background = `radial-gradient(circle 460px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.42), transparent 75%)`;
      }

      if (shadowRef.current) {
        // Dynamic contact shadow beneath 3D console
        const shadowShiftX = (-p.ry / 16) * 35;
        const shadowShiftY = (p.rx / 14) * 20;
        shadowRef.current.style.transform = `translate3d(${shadowShiftX.toFixed(1)}px, ${shadowShiftY.toFixed(1)}px, -60px) scale(${1 - Math.abs(p.rx) * 0.008})`;
      }

      // 2. Update Kinoria Spring Reticle Cursor
      const c = cursorState.current;
      if (c.visible && cursorDotRef.current && cursorFrameRef.current) {
        // Dot locks straight onto pointer
        cursorDotRef.current.style.transform = `translate3d(${c.x - 5.5}px, ${c.y - 5.5}px, 0)`;

        // Frame springs behind dot (Kinoria spring formula: w=28, z=0.82)
        const dt = 0.016;
        const fw = c.isHot ? 38 : 26;
        const fz = c.isHot ? 0.8 : 0.84;
        
        // Spring step X
        c.fvx += (fw * fw * (c.x - c.fx) - 2 * fz * fw * c.fvx) * dt;
        c.fx += c.fvx * dt;

        // Spring step Y
        c.fvy += (fw * fw * (c.y - c.fy) - 2 * fz * fw * c.fvy) * dt;
        c.fy += c.fvy * dt;

        const frameScale = c.isDown ? 0.76 : (c.isHot ? 1.05 : 1.0);
        cursorFrameRef.current.style.transform = `translate3d(${c.fx - 16}px, ${c.fy - 16}px, 0) scale(${frameScale})`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      active = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Pointer interactions over stage
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const stageX = e.clientX - rect.left;
    const stageY = e.clientY - rect.top;

    // Cursor position in stage space
    const c = cursorState.current;
    c.x = stageX;
    c.y = stageY;
    c.visible = true;

    // Check if hovering interactive element
    const target = e.target as HTMLElement;
    const isInteractive = !!target.closest('button, a, [data-hot="true"], input');
    c.isHot = isInteractive;

    // 3D Tilt calculation
    if (physics.current.isPointerDown) {
      // Dragging to freely orbit
      const deltaX = e.clientX - physics.current.lastMouseX;
      const deltaY = e.clientY - physics.current.lastMouseY;
      physics.current.lastMouseX = e.clientX;
      physics.current.lastMouseY = e.clientY;

      physics.current.targetRy = Math.max(-28, Math.min(28, physics.current.targetRy + deltaX * 0.25));
      physics.current.targetRx = Math.max(-22, Math.min(22, physics.current.targetRx - deltaY * 0.25));
    } else {
      // Hover parallax
      const normX = (stageX / rect.width) * 2 - 1;
      const normY = (stageY / rect.height) * 2 - 1;
      physics.current.targetRy = normX * 14;
      physics.current.targetRx = -normY * 11;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    cursorState.current.isDown = true;
    const target = e.target as HTMLElement;
    if (!target.closest('button, a, input, select')) {
      physics.current.isPointerDown = true;
      setIsDragging(true);
      physics.current.lastMouseX = e.clientX;
      physics.current.lastMouseY = e.clientY;
    }
  };

  const handlePointerUp = () => {
    cursorState.current.isDown = false;
    physics.current.isPointerDown = false;
    setIsDragging(false);
  };

  const handlePointerLeave = () => {
    cursorState.current.visible = false;
    cursorState.current.isDown = false;
    physics.current.isPointerDown = false;
    setIsDragging(false);
    physics.current.targetRx = 0;
    physics.current.targetRy = 0;
  };

  // Switch between JHS and SHS with mechanical lever animation
  const handleToggleLevel = (lvl: 'JHS' | 'SHS') => {
    if (lvl === selectedLevel) return;
    setSelectedLevel(lvl);
    setActiveStrandIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setDialRotation(prev => prev + (lvl === 'SHS' ? 45 : -45));
    triggerHaptic('switch');
  };

  // Rotary Aperture Dial click to step through subjects
  const handleRotateDial = () => {
    const strands = CURRICULUM_STRANDS[selectedLevel];
    const nextIdx = (activeStrandIdx + 1) % strands.length;
    setActiveStrandIdx(nextIdx);
    setDialRotation(prev => prev + (360 / strands.length));
    triggerHaptic('dial');
  };

  const currentQ = SAMPLE_QUESTIONS[selectedLevel];
  const isCorrect = selectedOption === currentQ.correctIndex;

  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);

    if (index === currentQ.correctIndex) {
      triggerHaptic('success');
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 55,
          spread: 65,
          origin: { y: 0.72 },
          colors: ['#2563eb', '#10b981', '#f59e0b', '#4f46e5']
        });
      }
    } else {
      triggerHaptic('button');
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    triggerHaptic('button');
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-6 sm:mt-10 select-none">
      
      {/* ── KINORIA-GRADE STAGE CONTAINER ── */}
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        className={`relative w-full rounded-3xl overflow-hidden bg-slate-950 text-slate-100 p-4 sm:p-7 lg:p-10 border border-slate-800 shadow-2xl transition-all ${
          isDragging ? 'cursor-grabbing' : 'cursor-default'
        }`}
        style={{
          perspective: '1400px',
          touchAction: 'none'
        }}
      >
        {/* Architectural Studio Stage Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255, 255, 255, 0.4) 1.5px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />

        {/* Ambient Volumetric Lighting Glows */}
        <div 
          className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* ── KINORIA SPRING-DAMPED RETICLE CURSOR ── */}
        <div 
          ref={cursorDotRef}
          className="absolute top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 transition-colors duration-150 shadow-sm"
          style={{
            backgroundColor: cursorState.current.isHot ? '#10b981' : '#f97316',
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
          {/* Kinoria 4 Precision Corner Aim Brackets */}
          <svg viewBox="0 0 32 32" className="w-full h-full stroke-white/80 fill-none" strokeWidth="1.6">
            {/* Top Left */}
            <path d="M2 9V2H9" />
            {/* Top Right */}
            <path d="M23 2H30V9" />
            {/* Bottom Left */}
            <path d="M2 23V30H9" />
            {/* Bottom Right */}
            <path d="M23 30H30V23" />
          </svg>
        </div>

        {/* ── KINORIA OPTICAL VIEWFINDER RETICLE OVERLAYS ── */}
        <div className="absolute inset-4 sm:inset-6 pointer-events-none flex flex-col justify-between z-20" aria-hidden="true">
          {/* Top Reticles & Telemetry */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold tracking-tight">┌ AP-135 // CBT CONSOLE</span>
              <span className="hidden md:inline text-slate-600">────────────────</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                OPTICAL FEED 60FPS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 hidden sm:inline">NaCCA ACCREDITED</span>
              <span className="text-white font-bold">┐ ISO-WAEC 100</span>
            </div>
          </div>

          {/* Center Precision Target Crosshair Ticks */}
          <div className="relative w-full flex items-center justify-between opacity-30 px-2 sm:px-8">
            <span className="font-mono text-[9px] text-slate-400">+0.00</span>
            <div className="w-8 h-px bg-slate-500" />
            <span className="font-mono text-[9px] text-slate-400">STAGE ORBIT 360°</span>
            <div className="w-8 h-px bg-slate-500" />
            <span className="font-mono text-[9px] text-slate-400">+1.00</span>
          </div>

          {/* Bottom Reticles & Telemetry */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">└ CALIBRATION: OK</span>
              <span className="hidden md:inline text-slate-600">────────────────</span>
              <span className="text-slate-400">BECE &amp; WASSCE CURRICULUM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 hidden sm:inline">SHUTTER 1/250s</span>
              <span className="text-white font-bold">┘ REAL-TIME CBT</span>
            </div>
          </div>
        </div>

        {/* ── TOP UTILITY STRIP (Sound, Drag Indicator, Level Mode) ── */}
        <div className="relative z-30 flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            {/* Trademark Blue Brand Mark */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight text-white font-sans">
                  AcademicPrep 3D Lab
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60 font-semibold">
                  KINORIA 3D STAGE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                Tactile Examination Console • Move pointer or drag to orbit in 3D
              </p>
            </div>
          </div>

          {/* Sound Mute & 3D Orbit Tip */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsAudioMuted(!isAudioMuted);
                triggerHaptic('button');
              }}
              data-hot="true"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              title={isAudioMuted ? 'Unmute Mechanical Sound' : 'Mute Mechanical Sound'}
            >
              {isAudioMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline text-[10px]">SOUND OFF</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-[10px] text-emerald-300">AUDIO CLICK ON</span>
                </>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400">
              <Rotate3d className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>DRAG TO TILT</span>
            </div>
          </div>
        </div>

        {/* ── 3D PHYSICAL INSTRUMENT (THE ACADEMIC TERMINAL) ── */}
        <div className="relative py-2 sm:py-6 flex items-center justify-center">
          
          {/* Floor Shadow Plane */}
          <div
            ref={shadowRef}
            className="absolute -bottom-6 w-11/12 h-16 rounded-[100%] bg-black/80 blur-2xl pointer-events-none transition-transform duration-75"
            aria-hidden="true"
          />

          {/* The Physical Hardware Chassis */}
          <div
            ref={consoleRef}
            className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border-2 border-slate-700/80 shadow-2xl p-4 sm:p-7 lg:p-8 transition-transform ease-out will-change-transform overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08) inset'
            }}
          >
            {/* Dynamic Specular Light Glare Sheen */}
            <div
              ref={glareRef}
              className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-3xl"
              style={{ opacity: 0.55 }}
              aria-hidden="true"
            />

            {/* Hardware Top Panel: Mechanical Lever, Aperture Dial, Status LEDs */}
            <div 
              className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-5 border-b border-slate-800/80"
              style={{ transform: 'translateZ(30px)' }}
            >
              {/* Left: Mechanical Lever Switch (BECE <--> WASSCE) */}
              <div className="flex items-center gap-4 bg-slate-950/90 p-2.5 rounded-2xl border border-slate-800">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
                    LEVEL SELECTOR
                  </span>
                  <span className="text-xs font-bold text-white tracking-tight">
                    {selectedLevel === 'JHS' ? 'Junior High School' : 'Senior High School'}
                  </span>
                </div>

                {/* Tactile Hardware Lever */}
                <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700/70">
                  <button
                    type="button"
                    onClick={() => handleToggleLevel('JHS')}
                    data-hot="true"
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                      selectedLevel === 'JHS'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-102'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedLevel === 'JHS' ? 'bg-slate-950' : 'bg-slate-600'}`} />
                    <span>BECE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleLevel('SHS')}
                    data-hot="true"
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                      selectedLevel === 'SHS'
                        ? 'bg-blue-500 text-white shadow-md font-black scale-102'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedLevel === 'SHS' ? 'bg-white' : 'bg-slate-600'}`} />
                    <span>WASSCE</span>
                  </button>
                </div>

                {/* Status LED */}
                <div className="flex items-center gap-1.5 pl-1 pr-2">
                  <span 
                    className={`w-2.5 h-2.5 rounded-full ${
                      selectedLevel === 'JHS' 
                        ? 'bg-amber-400 shadow-[0_0_12px_#f59e0b]' 
                        : 'bg-blue-400 shadow-[0_0_12px_#3b82f6]'
                    } animate-pulse`} 
                  />
                  <span className="font-mono text-[9px] text-slate-400 font-bold uppercase">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Center: Kinoria Aperture Focus Dial (Subject Strand Selector) */}
              <div className="flex items-center justify-between sm:justify-start gap-3 bg-slate-950/90 p-2.5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleRotateDial}
                    data-hot="true"
                    className="relative w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 border-2 border-slate-600 shadow-inner flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
                    style={{ transform: `rotate(${dialRotation}deg)` }}
                    title="Click to rotate strand dial"
                  >
                    {/* Dial Knurled Grip Marks */}
                    <div className="absolute inset-1 rounded-full border border-dashed border-slate-400/40 pointer-events-none" />
                    <div className="w-1.5 h-3 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]" />
                  </button>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <Compass className="w-2.5 h-2.5 text-blue-400" />
                      ROTARY STRAND
                    </span>
                    <span className="text-xs font-bold text-white">
                      {CURRICULUM_STRANDS[selectedLevel][activeStrandIdx].label}
                    </span>
                  </div>
                </div>

                {/* Dial Step Indicators */}
                <div className="flex items-center gap-1">
                  {CURRICULUM_STRANDS[selectedLevel].map((st, i) => (
                    <button
                      key={st.code}
                      type="button"
                      onClick={() => {
                        setActiveStrandIdx(i);
                        setDialRotation(prev => prev + 45);
                        triggerHaptic('dial');
                      }}
                      data-hot="true"
                      className={`w-6 h-6 rounded-md font-mono text-[10px] font-bold transition-all cursor-pointer flex items-center justify-center ${
                        activeStrandIdx === i
                          ? 'bg-blue-600 text-white font-black shadow-xs'
                          : 'bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Telemetry Clock (Running Milliseconds) */}
              <div className="flex items-center justify-between sm:justify-end gap-3 font-mono">
                <div className="flex flex-col text-right">
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
                    CBT CLOCK
                  </span>
                  <span className="text-sm font-black text-amber-400 tracking-wider">
                    {formatHudTimer(examMillis)}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400">
                  <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
              </div>
            </div>

            {/* Hardware Main Body: 3D Terminal Screen & Side Cartridge Deck */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-stretch">
              
              {/* Left Screen: Recessed High-Definition WAEC CBT Display (translateZ: 45px) */}
              <div 
                className="lg:col-span-8 rounded-2xl bg-slate-950 border-2 border-slate-800 p-5 sm:p-6 shadow-inner flex flex-col justify-between space-y-4 relative overflow-hidden"
                style={{
                  transform: 'translateZ(45px)',
                  boxShadow: 'inset 0 4px 18px rgba(0, 0, 0, 0.95), 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* CRT Scanline and Screen Reflection Glass */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"
                  aria-hidden="true" 
                />

                {/* Question Terminal Header */}
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-900">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                        {currentQ.examCode}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {currentQ.subject}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-slate-500">ACCURACY VALUE</span>
                      <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        +10 PTS
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed tracking-tight font-sans">
                    {currentQ.question}
                  </h3>
                </div>

                {/* 4 Clickable Tactical Answer Pads */}
                <div className="space-y-2.5 pt-1 relative z-10">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isAnswerCorrect = idx === currentQ.correctIndex;
                    
                    let padStyles = 'bg-slate-900/90 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700';
                    
                    if (hasAnswered) {
                      if (isAnswerCorrect) {
                        padStyles = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]';
                      } else if (isSelected) {
                        padStyles = 'bg-rose-950/90 border-rose-500 text-rose-100 font-bold shadow-[0_0_15px_rgba(244,63,94,0.2)]';
                      } else {
                        padStyles = 'bg-slate-950/50 border-slate-900 text-slate-600 opacity-50';
                      }
                    } else if (isSelected) {
                      padStyles = 'bg-blue-600 border-blue-400 text-white font-bold';
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleOptionSelect(idx)}
                        disabled={hasAnswered}
                        data-hot="true"
                        className={`w-full text-left p-3 sm:p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 cursor-pointer ${padStyles}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                            hasAnswered && isAnswerCorrect 
                              ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black' 
                              : hasAnswered && isSelected 
                              ? 'bg-rose-500 text-white border-rose-400 font-black' 
                              : 'bg-slate-950 text-slate-300 border-slate-700'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="font-sans font-medium">{option}</span>
                        </div>

                        {hasAnswered && isAnswerCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                        {hasAnswered && isSelected && !isAnswerCorrect && (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Worked Solution Dropdown */}
                {hasAnswered && (
                  <div className="pt-2 animate-in fade-in duration-200 relative z-10">
                    <div className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-1.5 ${
                      isCorrect 
                        ? 'bg-emerald-950/80 border-emerald-700/80 text-emerald-200' 
                        : 'bg-amber-950/80 border-amber-700/80 text-amber-200'
                    }`}>
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-1.5">
                          {isCorrect ? '🎉 Correct Answer Verified' : '💡 Official Examiner Breakdown:'}
                        </span>
                        <button
                          type="button"
                          onClick={handleReset}
                          data-hot="true"
                          className="text-[11px] underline hover:no-underline font-semibold flex items-center gap-1 cursor-pointer text-white"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Try Again</span>
                        </button>
                      </div>
                      <p className="text-[11px] opacity-90 font-sans">{currentQ.explanation}</p>
                    </div>
                  </div>
                )}

                {/* Terminal Bottom Controls */}
                <div className="pt-3 border-t border-slate-900 flex flex-wrap items-center justify-between gap-2 text-xs relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-slate-400">
                      NaCCA CURRICULUM SYLLABUS ACTIVE
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      data-hot="true"
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-mono text-[11px] transition cursor-pointer"
                    >
                      ↺ RE-CALIBRATE
                    </button>
                    <Link
                      href={selectedLevel === 'JHS' ? '/jhs' : '/shs'}
                      data-hot="true"
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-bold transition flex items-center gap-1"
                    >
                      <span>LAUNCH PORTAL</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Deck: 3D Floating Syllabi Cartridges & Hardware Modules (translateZ: 60px) */}
              <div 
                className="lg:col-span-4 flex flex-col justify-between space-y-4"
                style={{ transform: 'translateZ(60px)' }}
              >
                {/* Cartridge 1: Live Exam Simulator Widget */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md space-y-3 relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>TIMED CBT SIMULATOR</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">2026 MOCK</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {selectedLevel === 'JHS' ? 'BECE Speed & Accuracy Engine' : 'WASSCE Timed CBT Hall'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                      Realistic examination timer, instant grading rubrics, and automated difficulty calibration.
                    </p>
                  </div>

                  <Link
                    href={selectedLevel === 'JHS' ? '/jhs/weekly-exam' : '/shs/weekly-exam'}
                    data-hot="true"
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700 text-white font-mono text-xs font-bold transition flex items-center justify-center gap-2 group shadow-sm"
                  >
                    <span>ENTER EXAM ROOM</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Cartridge 2: 3D Curriculum Strands Badge */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5 font-mono">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>{selectedLevel} ACCREDITED STRANDS</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">100% FREE TRIAL</span>
                  </div>

                  {/* Strand Chips */}
                  <div className="flex flex-wrap gap-2">
                    {CURRICULUM_STRANDS[selectedLevel].map((subj, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => {
                          setActiveStrandIdx(sIdx);
                          triggerHaptic('dial');
                        }}
                        data-hot="true"
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          activeStrandIdx === sIdx
                            ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <span>{subj.icon}</span>
                        <span>{subj.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Over 12,400+ Verified Questions</span>
                    <span className="text-blue-400 font-bold">NaCCA Ghana</span>
                  </div>
                </div>

                {/* Cartridge 3: Quick Personal Study Timetable Shortcut */}
                <Link
                  href="/jhs/profile"
                  data-hot="true"
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition flex items-center justify-between text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-300 border border-blue-800 flex items-center justify-center font-bold shrink-0">
                      📅
                    </div>
                    <div>
                      <span className="font-bold text-white block leading-tight font-sans">
                        Personal Study Timetable
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        AI-optimized revision schedule
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
                </Link>

              </div>
            </div>

            {/* Hardware Console Bottom Rim Bar */}
            <div 
              className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono"
              style={{ transform: 'translateZ(25px)' }}
            >
              <div className="flex items-center gap-2 text-[11px]">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>HARDWARE SIMULATION: ACTIVE</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">LATENCY 8ms</span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span>KINORIA STAGE v135</span>
                <span className="text-slate-700">•</span>
                <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
