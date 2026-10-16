'use client';

import React, { useRef, useEffect } from 'react';

// ============================================================================
// 3D OBJECT DATA STRUCTURES
// ============================================================================

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Book3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  width: number;
  height: number;
  thickness: number;
  color: string;
  spineColor: string;
  ribbonColor: string;
  label: string;
  trailIdx: number;
}

interface GradCap3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  size: number;
  trailIdx: number;
}

interface Trophy3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotY: number;
  scale: number;
  trailIdx: number;
}

interface Pencil3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  length: number;
  radius: number;
  trailIdx: number;
}

interface QuizCard3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  width: number;
  height: number;
  phase: number;
  category: string;
  question: string;
  result: string;
  trailIdx: number;
}

interface Atom3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  radius: number;
  trailIdx: number;
}

interface Polyhedron3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  size: number;
  trailIdx: number;
}

interface Diploma3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotZ: number;
  length: number;
  radius: number;
  trailIdx: number;
}

interface Sparkle3D {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  pulsePhase: number;
  color: string;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface TrailNode {
  x: number;
  y: number;
  z: number;
  time: number;
}

export default function Books3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isDragging = useRef(false);
  const dragTargetWorld = useRef({ x: 0, y: 0, z: 340 });
  const mouseScreen = useRef({ x: -1000, y: -1000, active: false, lastMoveTime: 0 });
  const trailHistory = useRef<TrailNode[]>([]);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fov = 520;
    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track scroll position to transition across the 4 thematic "Faces"
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress.current = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Coordinate conversion: converts 2D screen client (X, Y) to 3D world target
    const updateInteractionCoordinates = (clientX: number, clientY: number, dragging: boolean) => {
      if (!canvas) return;
      const relX = clientX;
      const relY = clientY;

      mouseScreen.current.x = relX;
      mouseScreen.current.y = relY;
      mouseScreen.current.active = true;
      mouseScreen.current.lastMoveTime = Date.now();

      const normX = (relX / width) * 2 - 1;
      const normY = (relY / height) * 2 - 1;

      mousePos.current.targetX = normX * 90;
      mousePos.current.targetY = normY * 65;

      const focalDepth = 340;
      const unprojectScale = (fov + focalDepth) / fov;
      const wx = normX * (width / 2) * unprojectScale + mousePos.current.x;
      const wy = normY * (height / 2) * unprojectScale + mousePos.current.y;

      dragTargetWorld.current.x = wx;
      dragTargetWorld.current.y = wy;
      dragTargetWorld.current.z = focalDepth;

      if (dragging) {
        isDragging.current = true;
      }
    };

    // Desktop Mouse Handlers
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        updateInteractionCoordinates(e.clientX, e.clientY, true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const isMouseDown = (e.buttons & 1) === 1;
      updateInteractionCoordinates(e.clientX, e.clientY, isMouseDown);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Mobile / Tablet Touch Handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateInteractionCoordinates(e.touches[0].clientX, e.touches[0].clientY, true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateInteractionCoordinates(e.touches[0].clientX, e.touches[0].clientY, true);
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      mouseScreen.current.active = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    // ========================================================================
    // 1. GENERATE 3D HARDCOVER TEXTBOOKS (Trail Nodes 0 to 7)
    // ========================================================================
    const bookColors = [
      { cover: '#1e40af', spine: '#172554', ribbon: '#fbbf24', label: 'WAEC MATH' },
      { cover: '#0284c7', spine: '#082f49', ribbon: '#38bdf8', label: 'INT SCIENCE' },
      { cover: '#4338ca', spine: '#1e1b4b', ribbon: '#f43f5e', label: 'CORE ENGLISH' },
      { cover: '#059669', spine: '#022c22', ribbon: '#34d399', label: 'PHYSICS' },
      { cover: '#b45309', spine: '#451a03', ribbon: '#fbbf24', label: 'SOCIAL STUDIES' },
      { cover: '#7c3aed', spine: '#2e1065', ribbon: '#a78bfa', label: 'CHEMISTRY' },
      { cover: '#0f766e', spine: '#042f2e', ribbon: '#5eead4', label: 'BIOLOGY' },
      { cover: '#334155', spine: '#0f172a', ribbon: '#38bdf8', label: 'COMPUTING' },
    ];

    const books: Book3D[] = bookColors.map((c, i) => {
      const angle = (i / bookColors.length) * Math.PI * 2;
      const radius = 240 + (i % 3) * 110;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * (radius * 0.52),
        z: 320 + (i % 4) * 160,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        vz: (Math.random() - 0.5) * 0.12,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.006,
        vRotY: (Math.random() - 0.5) * 0.008,
        vRotZ: (Math.random() - 0.5) * 0.005,
        width: 84,
        height: 114,
        thickness: 22,
        color: c.cover,
        spineColor: c.spine,
        ribbonColor: c.ribbon,
        label: c.label,
        trailIdx: i * 3, // Spaced along the pointer trail
      };
    });

    // ========================================================================
    // 2. GENERATE 3D GRADUATION CAPS (Trail Nodes 8, 9)
    // ========================================================================
    const gradCaps: GradCap3D[] = [
      {
        x: -320,
        y: -140,
        z: 380,
        vx: 0.12,
        vy: -0.08,
        vz: -0.05,
        rotX: 0.45,
        rotY: -0.35,
        rotZ: 0.2,
        vRotX: 0.004,
        vRotY: 0.006,
        vRotZ: 0.003,
        size: 52,
        trailIdx: 24,
      },
      {
        x: 340,
        y: 110,
        z: 420,
        vx: -0.1,
        vy: 0.09,
        vz: 0.06,
        rotX: -0.3,
        rotY: 0.5,
        rotZ: -0.15,
        vRotX: -0.005,
        vRotY: 0.005,
        vRotZ: -0.003,
        size: 48,
        trailIdx: 27,
      },
    ];

    // ========================================================================
    // 3. GENERATE 3D GOLDEN TROPHIES (Trail Nodes 10, 11)
    // ========================================================================
    const trophies: Trophy3D[] = [
      {
        x: 290,
        y: -170,
        z: 360,
        vx: -0.08,
        vy: 0.06,
        vz: -0.04,
        rotX: 0.15,
        rotY: 0,
        rotZ: 0.08,
        vRotY: 0.012,
        scale: 1.05,
        trailIdx: 30,
      },
      {
        x: -260,
        y: 190,
        z: 430,
        vx: 0.07,
        vy: -0.07,
        vz: 0.03,
        rotX: -0.1,
        rotY: Math.PI * 0.7,
        rotZ: -0.06,
        vRotY: 0.011,
        scale: 0.9,
        trailIdx: 33,
      },
    ];

    // ========================================================================
    // 4. GENERATE 3D EXAM PENCILS (Trail Nodes 12, 13)
    // ========================================================================
    const pencils: Pencil3D[] = [
      {
        x: -160,
        y: -220,
        z: 290,
        vx: 0.15,
        vy: 0.12,
        vz: -0.06,
        rotX: 0.7,
        rotY: 0.5,
        rotZ: 0.9,
        vRotX: 0.008,
        vRotY: 0.01,
        vRotZ: 0.007,
        length: 78,
        radius: 6.5,
        trailIdx: 36,
      },
      {
        x: 210,
        y: 200,
        z: 330,
        vx: -0.14,
        vy: -0.1,
        vz: 0.05,
        rotX: -0.8,
        rotY: -0.4,
        rotZ: 0.3,
        vRotX: -0.007,
        vRotY: 0.009,
        vRotZ: -0.006,
        length: 72,
        radius: 6,
        trailIdx: 39,
      },
    ];

    // ========================================================================
    // 5. GENERATE 3D ATOMS / STEM ORBITS (Trail Nodes 14, 15)
    // ========================================================================
    const atoms: Atom3D[] = [
      {
        x: -360,
        y: 70,
        z: 460,
        vx: 0.09,
        vy: -0.05,
        vz: 0.02,
        rotX: 0.6,
        rotY: 0.8,
        rotZ: 0.3,
        radius: 36,
        trailIdx: 42,
      },
      {
        x: 370,
        y: -60,
        z: 490,
        vx: -0.08,
        vy: 0.06,
        vz: -0.02,
        rotX: -0.5,
        rotY: 0.4,
        rotZ: -0.4,
        radius: 32,
        trailIdx: 45,
      },
    ];

    // ========================================================================
    // 6. GENERATE 3D SACRED POLYHEDRA / CRYSTALS (Trail Nodes 16, 17)
    // ========================================================================
    const polyhedra: Polyhedron3D[] = [
      {
        x: -280,
        y: -90,
        z: 400,
        vx: 0.1,
        vy: -0.07,
        vz: 0.03,
        rotX: 0.3,
        rotY: 0.6,
        rotZ: 0.2,
        vRotX: 0.01,
        vRotY: 0.015,
        size: 32,
        trailIdx: 48,
      },
      {
        x: 270,
        y: 140,
        z: 370,
        vx: -0.09,
        vy: 0.08,
        vz: -0.04,
        rotX: -0.4,
        rotY: 0.7,
        rotZ: -0.2,
        vRotX: 0.012,
        vRotY: 0.014,
        size: 28,
        trailIdx: 51,
      },
    ];

    // ========================================================================
    // 7. GENERATE 3D ROLLED DIPLOMAS WITH RIBBONS (Trail Nodes 18, 19)
    // ========================================================================
    const diplomas: Diploma3D[] = [
      {
        x: 180,
        y: -190,
        z: 340,
        vx: -0.08,
        vy: 0.07,
        vz: 0.02,
        rotX: 0.5,
        rotY: 0.3,
        rotZ: 0.8,
        vRotX: 0.007,
        vRotZ: 0.009,
        length: 54,
        radius: 7,
        trailIdx: 54,
      },
      {
        x: -210,
        y: 220,
        z: 390,
        vx: 0.07,
        vy: -0.06,
        vz: -0.03,
        rotX: -0.6,
        rotY: 0.4,
        rotZ: -0.5,
        vRotX: 0.008,
        vRotZ: 0.008,
        length: 48,
        radius: 6.5,
        trailIdx: 57,
      },
    ];

    // ========================================================================
    // 8. GENERATE AUTHENTIC 3D QUIZ CARDS / FLASHCARDS
    // ========================================================================
    const quizCardData = [
      { category: 'WASSCE MATH', question: '2x + 9 = 25', result: 'x = 8 ✓' },
      { category: 'INT SCIENCE', question: 'Osmosis & Diffusion', result: 'Grade A1 ✓' },
      { category: 'CORE ENGLISH', question: 'Concord & Tenses', result: 'Verified ✓' },
      { category: 'BECE 2026', question: 'Pythagoras: a²+b²=c²', result: 'Best 6 🌟' },
      { category: 'PHYSICS', question: 'Force = mass × accel', result: 'Stanine 1 ✓' },
      { category: 'CHEMISTRY', question: '2H₂ + O₂ → 2H₂O', result: '100% Score' },
      { category: 'SOCIAL', question: 'Good Governance', result: 'Mastered ✓' },
      { category: 'BIOLOGY', question: 'Photosynthesis Cycle', result: 'A1 Pass ✓' },
    ];

    const quizCards: QuizCard3D[] = quizCardData.map((d, i) => {
      const angle = (i / quizCardData.length) * Math.PI * 2;
      return {
        x: Math.cos(angle) * (280 + (i % 3) * 90),
        y: Math.sin(angle) * (180 + (i % 2) * 80),
        z: 270 + (i % 4) * 110,
        vx: (Math.random() - 0.5) * 0.28,
        vy: 0.15 + Math.random() * 0.22,
        vz: (Math.random() - 0.5) * 0.1,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        vRotX: 0.005 + (i % 3) * 0.002,
        vRotY: 0.006 + (i % 2) * 0.003,
        vRotZ: 0.004,
        width: 62,
        height: 82,
        phase: Math.random() * Math.PI * 2,
        category: d.category,
        question: d.question,
        result: d.result,
        trailIdx: 60 + i * 3,
      };
    });

    // ========================================================================
    // 9. GENERATE TWINKLING 3D SPARKLES (✦)
    // ========================================================================
    const sparkles: Sparkle3D[] = Array.from({ length: 24 }).map((_, i) => ({
      x: (Math.random() - 0.5) * 880,
      y: (Math.random() - 0.5) * 580,
      z: 200 + Math.random() * 480,
      size: 4 + Math.random() * 6.5,
      alpha: 0.4 + Math.random() * 0.6,
      pulsePhase: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? '#38bdf8' : '#fbbf24',
    }));

    // ========================================================================
    // 10. GENERATE FLOATING AMBIENT GLOW DUST
    // ========================================================================
    const particles: Particle3D[] = Array.from({ length: 65 }).map(() => ({
      x: (Math.random() - 0.5) * 950,
      y: (Math.random() - 0.5) * 650,
      z: 180 + Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: 1.2 + Math.random() * 2.8,
      alpha: 0.2 + Math.random() * 0.55,
    }));

    // Helper: Project 3D coordinate to 2D screen space with camera parallax
    const project = (x: number, y: number, z: number, camX: number, camY: number) => {
      const adjX = x - camX;
      const adjY = y - camY;
      const scale = fov / (fov + z);
      return {
        x: width / 2 + adjX * scale,
        y: height / 2 + adjY * scale,
        scale,
        depth: z,
      };
    };

    // Helper: 3D Vector rotation matrix (Euler angles)
    const rotate3D = (p: Point3D, rx: number, ry: number, rz: number): Point3D => {
      const y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      const z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
      const x1 = p.x;

      const x2 = x1 * Math.cos(ry) + z1 * Math.sin(ry);
      const z2 = -x1 * Math.sin(ry) + z1 * Math.cos(ry);
      const y2 = y1;

      const x3 = x2 * Math.cos(rz) - y2 * Math.sin(rz);
      const y3 = x2 * Math.sin(rz) + y2 * Math.cos(rz);
      const z3 = z2;

      return { x: x3, y: y3, z: z3 };
    };

    // Helper: Draw 4-point Diamond Starburst
    const drawDiamondStar = (cx: number, cy: number, size: number, color: string, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.quadraticCurveTo(cx, cy, cx + size * 0.3, cy);
      ctx.quadraticCurveTo(cx, cy, cx, cy + size);
      ctx.quadraticCurveTo(cx, cy, cx - size * 0.3, cy);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx - size, cy);
      ctx.quadraticCurveTo(cx, cy, cx, cy - size * 0.3);
      ctx.quadraticCurveTo(cx, cy, cx + size, cy);
      ctx.quadraticCurveTo(cx, cy, cx, cy + size * 0.3);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.restore();
    };

    // Helper: Color interpolation
    const lerpColor = (a: [number, number, number], b: [number, number, number], t: number): string => {
      const r = Math.round(a[0] + (b[0] - a[0]) * t);
      const g = Math.round(a[1] + (b[1] - a[1]) * t);
      const blue = Math.round(a[2] + (b[2] - a[2]) * t);
      return `rgb(${r}, ${g}, ${blue})`;
    };

    // ========================================================================
    // MAIN 60FPS ANIMATION LOOP
    // ========================================================================
    const render = () => {
      time += 0.016;

      // Smooth camera parallax lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.07;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.07;
      const camX = mousePos.current.x;
      const camY = mousePos.current.y;

      const dragging = isDragging.current;
      const targetWorld = dragTargetWorld.current;
      const sp = scrollProgress.current; // 0.0 to 1.0

      // Compute which thematic "Face" is currently dominant (0 = Core, 1 = STEM, 2 = Mocks, 3 = Grad)
      const currentFace = sp * 3; // 0 to 3 range

      // Dynamic Face Weights: boosts dominant face items, gracefully blends across transitions
      const calcFaceWeight = (targetFace: number): number => {
        const dist = Math.abs(currentFace - targetFace);
        return Math.max(0.25, Math.min(1.0, 1.25 - dist * 0.75));
      };

      const wFace0 = dragging ? 1.0 : calcFaceWeight(0);
      const wFace1 = dragging ? 1.0 : calcFaceWeight(1);
      const wFace2 = dragging ? 1.0 : calcFaceWeight(2);
      const wFace3 = dragging ? 1.0 : calcFaceWeight(3);

      ctx.clearRect(0, 0, width, height);

      // ── DYNAMIC BACKGROUND MORPHING ACROSS THE 4 FACES ──
      // Face 0: Deep Midnight & Royal Blue [7, 21, 43] -> [11, 35, 71]
      // Face 1: STEM Cosmic Cyan & Violet [8, 18, 38] -> [28, 16, 56]
      // Face 2: WAEC Exam Emerald & Gold [4, 28, 23] -> [15, 42, 28]
      // Face 3: Graduation Imperial Purple & Gold [17, 11, 38] -> [36, 24, 10]
      let cTop: [number, number, number];
      let cMid: [number, number, number];
      let cBot: [number, number, number];
      let spotlightHex: string;

      if (currentFace < 1) {
        const t = currentFace;
        cTop = [7 + Math.round(t), 21 - Math.round(t * 3), 43 - Math.round(t * 5)];
        cMid = [11 + Math.round(t * 17), 35 - Math.round(t * 19), 71 - Math.round(t * 15)];
        cBot = [4 + Math.round(t * 4), 9 + Math.round(t * 2), 18 + Math.round(t * 2)];
        spotlightHex = 'rgba(37, 99, 235,'; // Royal Blue
      } else if (currentFace < 2) {
        const t = currentFace - 1;
        cTop = [8 - Math.round(t * 4), 18 + Math.round(t * 10), 38 - Math.round(t * 15)];
        cMid = [28 - Math.round(t * 13), 16 + Math.round(t * 26), 56 - Math.round(t * 28)];
        cBot = [8 - Math.round(t * 4), 11 + Math.round(t * 5), 20 - Math.round(t * 8)];
        spotlightHex = 'rgba(16, 185, 129,'; // Emerald Gold
      } else {
        const t = Math.min(1, currentFace - 2);
        cTop = [4 + Math.round(t * 13), 28 - Math.round(t * 17), 23 + Math.round(t * 15)];
        cMid = [15 + Math.round(t * 21), 42 - Math.round(t * 18), 28 - Math.round(t * 18)];
        cBot = [4 + Math.round(t * 10), 16 - Math.round(t * 8), 12 + Math.round(t * 6)];
        spotlightHex = 'rgba(168, 85, 247,'; // Imperial Purple & Gold
      }

      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, `rgb(${cTop[0]}, ${cTop[1]}, ${cTop[2]})`);
      bgGrad.addColorStop(0.48, `rgb(${cMid[0]}, ${cMid[1]}, ${cMid[2]})`);
      bgGrad.addColorStop(1, `rgb(${cBot[0]}, ${cBot[1]}, ${cBot[2]})`);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Spotlight that transforms across faces
      const radialGlow = ctx.createRadialGradient(
        width / 2 + camX * 0.45,
        height * 0.38 + camY * 0.45,
        40,
        width / 2,
        height * 0.38,
        width * 0.75
      );
      radialGlow.addColorStop(0, `${spotlightHex} ${dragging ? 0.42 : 0.28})`);
      radialGlow.addColorStop(0.45, `${spotlightHex} 0.14)`);
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // ── MOUSE INTERACTION TRAIL PHYSICS CALCULATION ──
      // Checks if mouse has been active recently (within 3 seconds)
      const mouseIsActive = mouseScreen.current.active && (Date.now() - mouseScreen.current.lastMoveTime < 3200);

      // Record trail breadcrumbs at consistent 60fps frame rate
      if (mouseIsActive) {
        const lastNode = trailHistory.current[0];
        const distMoved = lastNode ? Math.hypot(targetWorld.x - lastNode.x, targetWorld.y - lastNode.y) : 999;
        if (distMoved > 2 || trailHistory.current.length === 0) {
          trailHistory.current.unshift({
            x: targetWorld.x,
            y: targetWorld.y,
            z: targetWorld.z,
            time: Date.now()
          });
          if (trailHistory.current.length > 110) {
            trailHistory.current.pop();
          }
        }
      } else if (trailHistory.current.length > 0) {
        trailHistory.current.pop();
      }

      // ── CLICK & DRAG CELESTIAL AURA ──
      if (dragging && mouseScreen.current.active) {
        const mx = mouseScreen.current.x;
        const my = mouseScreen.current.y;
        const aura = ctx.createRadialGradient(mx, my, 0, mx, my, 140);
        aura.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
        aura.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)');
        aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(mx, my, 140, 0, Math.PI * 2);
        ctx.fill();

        // Magnetic trailing ripple ring
        const rippleR = 25 + (Math.sin(time * 4) + 1) * 20;
        ctx.beginPath();
        ctx.arc(mx, my, rippleR, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Helper function to update an item following the trail snake
      const updateTrailMotion = (
        item: {
          x: number;
          y: number;
          z: number;
          vx: number;
          vy: number;
          vz: number;
          trailIdx: number;
          rotZ?: number;
        },
        faceProminence = 1.0
      ) => {
        if (mouseIsActive && trailHistory.current.length > 0) {
          // Look up point along trail snake based on assigned trail index
          const targetNodeIdx = Math.min(trailHistory.current.length - 1, Math.floor(item.trailIdx * 0.9));
          const node = trailHistory.current[targetNodeIdx] || targetWorld;

          // Gentle organic breathing halo so items do not clump when stationary
          const haloAngle = time * 1.3 + item.trailIdx * 0.38;
          const haloRadius = dragging ? 18 + (item.trailIdx % 4) * 8 : 28 + (item.trailIdx % 6) * 10;
          const destX = node.x + Math.cos(haloAngle) * haloRadius;
          const destY = node.y + Math.sin(haloAngle) * haloRadius;
          const destZ = node.z + Math.sin(haloAngle * 1.3) * 16;

          // Normal smooth trail physics (calibrated to feel fluid, not frantic or sluggish)
          const pullStrength = dragging ? 0.052 : 0.038;
          const damping = dragging ? 0.88 : 0.895;

          item.vx += (destX - item.x) * pullStrength;
          item.vy += (destY - item.y) * pullStrength;
          item.vz += (destZ - item.z) * pullStrength;

          item.vx *= damping;
          item.vy *= damping;
          item.vz *= damping;

          // Velocity clamp to ensure items never move too fast or violently
          const currentSpeed = Math.hypot(item.vx, item.vy);
          const maxSpeed = dragging ? 10.5 : 7.2;
          if (currentSpeed > maxSpeed) {
            item.vx = (item.vx / currentSpeed) * maxSpeed;
            item.vy = (item.vy / currentSpeed) * maxSpeed;
          }

          if (item.rotZ !== undefined) {
            item.rotZ += item.vx * 0.0012 - item.rotZ * 0.03;
          }
        } else {
          // Ambient gentle floating
          item.vx *= 0.985;
          item.vy *= 0.985;
          item.vz *= 0.985;

          if (item.x < -480 || item.x > 480) item.vx *= -1;
          if (item.y < -320 || item.y > 320) item.vy *= -1;
          if (item.z < 250 || item.z > 650) item.vz *= -1;
        }

        item.x += item.vx;
        item.y += item.vy;
        item.z += item.vz;
      };

      // ── 1. DRAW GLOWING PARTICLES (ADAPTS TO FACE) ──
      particles.forEach((p, idx) => {
        if (mouseIsActive) {
          const pAngle = idx + time * 1.5;
          const pRadius = 55 + (idx % 8) * 18;
          const targetPX = targetWorld.x + Math.cos(pAngle) * pRadius;
          const targetPY = targetWorld.y + Math.sin(pAngle) * pRadius;

          p.x += (targetPX - p.x) * 0.04;
          p.y += (targetPY - p.y) * 0.04;
        } else {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -480) p.x = 480;
          if (p.x > 480) p.x = -480;
          if (p.y < -330) p.y = 330;
          if (p.y > 330) p.y = -330;
        }

        const proj = project(p.x, p.y, p.z, camX * 0.3, camY * 0.3);
        const radius = p.radius * proj.scale;

        // Particle tint shifts by face: Cyan (0), Violet (1), Emerald/Gold (2), Amber (3)
        const pColor = currentFace < 1 ? '147, 197, 253' : currentFace < 2 ? '192, 132, 252' : currentFace < 3 ? '110, 231, 183' : '251, 191, 36';

        ctx.beginPath();
        ctx.arc(proj.x, proj.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pColor}, ${p.alpha * proj.scale})`;
        ctx.fill();
      });

      // ── 2. DRAW TWINKLING 3D SPARKLES (✦) ──
      sparkles.forEach((s) => {
        if (mouseIsActive) {
          s.x += (targetWorld.x - s.x) * 0.05;
          s.y += (targetWorld.y - s.y) * 0.05;
        }
        const pulse = Math.sin(time * 3 + s.pulsePhase);
        const currentAlpha = (s.alpha + pulse * 0.3) * 0.85;
        const proj = project(s.x, s.y, s.z, camX * 0.4, camY * 0.4);
        drawDiamondStar(proj.x, proj.y, s.size * proj.scale * (1 + pulse * 0.2), s.color, currentAlpha * proj.scale);
      });

      // ── 3. DRAW 3D SACRED POLYHEDRA / CRYSTALS (FACE 1: STEM & MATH GEOMETRY) ──
      polyhedra.forEach((poly) => {
        updateTrailMotion(poly, wFace1);
        poly.rotX += poly.vRotX * (0.8 + 0.6 * wFace1);
        poly.rotY += poly.vRotY * (0.8 + 0.6 * wFace1);

        const s = poly.size * (0.85 + 0.3 * wFace1);
        // 6 Octahedron vertices
        const rawVertices: Point3D[] = [
          { x: 0, y: -s, z: 0 },
          { x: 0, y: s, z: 0 },
          { x: -s, y: 0, z: -s * 0.4 },
          { x: s, y: 0, z: -s * 0.4 },
          { x: s * 0.5, y: 0, z: s },
          { x: -s * 0.5, y: 0, z: s },
        ];

        const pts = rawVertices.map((v) => {
          const r = rotate3D(v, poly.rotX, poly.rotY, poly.rotZ);
          return project(poly.x + r.x, poly.y + r.y, poly.z + r.z, camX, camY);
        });

        // 8 Triangular faces
        const triFaces = [
          [0, 2, 5],
          [0, 5, 4],
          [0, 4, 3],
          [0, 3, 2],
          [1, 5, 2],
          [1, 4, 5],
          [1, 3, 4],
          [1, 2, 3],
        ];

        triFaces.forEach((tri) => {
          const p0 = pts[tri[0]];
          const p1 = pts[tri[1]];
          const p2 = pts[tri[2]];

          const normalZ = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);
          if (normalZ > 0) {
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.closePath();
            ctx.fillStyle = `rgba(6, 182, 212, ${0.32 * wFace1})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(56, 189, 248, ${Math.max(0.35, wFace1)})`;
            ctx.lineWidth = Math.max(0.8, 1.4 * p0.scale);
            ctx.stroke();
          }
        });
      });

      // ── 4. DRAW 3D ATOMS / SCIENTIFIC ORBITS (FACE 1: STEM SCIENCE) ──
      atoms.forEach((atom) => {
        updateTrailMotion(atom, wFace1);
        const spinSpeed = dragging ? 0.028 : 0.012 + 0.012 * wFace1;
        atom.rotX += spinSpeed;
        atom.rotY += spinSpeed * 1.3;

        const centerProj = project(atom.x, atom.y, atom.z, camX, camY);
        const scale = centerProj.scale * (0.85 + 0.3 * wFace1);

        // Glowing nucleus
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerProj.x, centerProj.y, 6.5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.5 + 0.45 * wFace1})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 14 * scale * wFace1;
        ctx.fill();
        ctx.restore();

        // 3 Elliptical orbits with traveling electrons
        const orbitAlpha = Math.max(0.25, 0.65 * wFace1);
        const orbitColors = [
          `rgba(56, 189, 248, ${orbitAlpha})`,
          `rgba(168, 85, 247, ${orbitAlpha})`,
          `rgba(251, 191, 36, ${orbitAlpha})`
        ];
        for (let o = 0; o < 3; o++) {
          const orbitTilt = (o * Math.PI) / 3;
          ctx.save();
          ctx.translate(centerProj.x, centerProj.y);
          ctx.rotate(atom.rotZ + orbitTilt);

          ctx.beginPath();
          ctx.ellipse(0, 0, atom.radius * scale, atom.radius * 0.38 * scale, 0, 0, Math.PI * 2);
          ctx.strokeStyle = orbitColors[o];
          ctx.lineWidth = 1.2 * scale;
          ctx.stroke();

          const speedMultiplier = dragging ? 5 : 2.5 + 2 * wFace1;
          const eAngle = time * (speedMultiplier + o) + o;
          const ex = Math.cos(eAngle) * (atom.radius * scale);
          const ey = Math.sin(eAngle) * (atom.radius * 0.38 * scale);

          ctx.beginPath();
          ctx.arc(ex, ey, 2.5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          ctx.restore();
        }
      });

      // ── 5. DRAW 3D GOLDEN TROPHIES (FACE 2: EXAMINATION & A1 CUPS) ──
      trophies.forEach((t) => {
        updateTrailMotion(t, wFace2);
        t.rotY += dragging ? t.vRotY * 2 : t.vRotY;

        const proj = project(t.x, t.y, t.z, camX, camY);
        const s = proj.scale * t.scale * 28 * (0.85 + 0.35 * wFace2);

        ctx.save();
        ctx.globalAlpha = Math.max(0.35, wFace2);
        ctx.translate(proj.x, proj.y);
        ctx.rotate(Math.sin(time + t.rotX) * 0.12);

        // Cup Body
        const goldGrad = ctx.createLinearGradient(-s * 0.6, 0, s * 0.6, 0);
        goldGrad.addColorStop(0, '#f59e0b');
        goldGrad.addColorStop(0.35, '#fef08a');
        goldGrad.addColorStop(0.7, '#d97706');
        goldGrad.addColorStop(1, '#78350f');

        // Pedestal base
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-s * 0.45, s * 0.7, s * 0.9, s * 0.28);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1;
        ctx.strokeRect(-s * 0.45, s * 0.7, s * 0.9, s * 0.28);

        // Stem
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-s * 0.12, s * 0.35, s * 0.24, s * 0.35);

        // Chalice
        ctx.beginPath();
        ctx.moveTo(-s * 0.5, -s * 0.4);
        ctx.lineTo(s * 0.5, -s * 0.4);
        ctx.quadraticCurveTo(s * 0.45, s * 0.35, 0, s * 0.35);
        ctx.quadraticCurveTo(-s * 0.45, s * 0.35, -s * 0.5, -s * 0.4);
        ctx.closePath();
        ctx.fillStyle = goldGrad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.stroke();

        // Left & Right Handles
        ctx.beginPath();
        ctx.arc(-s * 0.52, -s * 0.05, s * 0.22, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = Math.max(1, 2.5 * proj.scale);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s * 0.52, -s * 0.05, s * 0.22, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = Math.max(1, 2.5 * proj.scale);
        ctx.stroke();

        // Star A1
        ctx.font = `bold ${Math.round(8 * proj.scale)}px sans-serif`;
        ctx.fillStyle = '#78350f';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('★ A1', 0, -s * 0.05);

        ctx.restore();
      });

      // ── 6. DRAW 3D EXAM PENCILS (FACE 2: 2B STYLUSES) ──
      pencils.forEach((pen) => {
        updateTrailMotion(pen, wFace2);
        pen.rotX += pen.vRotX;
        pen.rotY += pen.vRotY;
        pen.rotZ += pen.vRotZ;

        const hl = pen.length / 2;
        const r = pen.radius;

        const rawPoints: Point3D[] = [
          { x: 0, y: -hl - 14, z: 0 },
          { x: -r, y: -hl, z: 0 },
          { x: r, y: -hl, z: 0 },
          { x: -r, y: hl - 10, z: 0 },
          { x: r, y: hl - 10, z: 0 },
          { x: -r, y: hl, z: 0 },
          { x: r, y: hl, z: 0 },
        ];

        const pts = rawPoints.map((p) => {
          const rot = rotate3D(p, pen.rotX, pen.rotY, pen.rotZ);
          return project(pen.x + rot.x, pen.y + rot.y, pen.z + rot.z, camX, camY);
        });

        ctx.save();
        ctx.globalAlpha = Math.max(0.35, wFace2);

        // Yellow Hexagonal Pencil Shaft
        ctx.beginPath();
        ctx.moveTo(pts[1].x, pts[1].y);
        ctx.lineTo(pts[2].x, pts[2].y);
        ctx.lineTo(pts[4].x, pts[4].y);
        ctx.lineTo(pts[3].x, pts[3].y);
        ctx.closePath();
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Wood Cone
        ctx.beginPath();
        ctx.moveTo(pts[1].x, pts[1].y);
        ctx.lineTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[2].x, pts[2].y);
        ctx.closePath();
        ctx.fillStyle = '#fde68a';
        ctx.fill();

        // Graphite Tip
        const tipMidX = (pts[1].x + pts[2].x) / 2;
        const tipMidY = (pts[1].y + pts[2].y) / 2;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[0].x * 0.6 + tipMidX * 0.4 - 2, pts[0].y * 0.6 + tipMidY * 0.4);
        ctx.lineTo(pts[0].x * 0.6 + tipMidX * 0.4 + 2, pts[0].y * 0.6 + tipMidY * 0.4);
        ctx.closePath();
        ctx.fillStyle = '#334155';
        ctx.fill();

        // Ferrule & Eraser
        ctx.beginPath();
        ctx.moveTo(pts[3].x, pts[3].y);
        ctx.lineTo(pts[4].x, pts[4].y);
        ctx.lineTo(pts[6].x, pts[6].y);
        ctx.lineTo(pts[5].x, pts[5].y);
        ctx.closePath();
        ctx.fillStyle = '#cbd5e1';
        ctx.fill();

        const eraserTop = project(
          pen.x + rotate3D({ x: 0, y: hl + 6, z: 0 }, pen.rotX, pen.rotY, pen.rotZ).x,
          pen.y + rotate3D({ x: 0, y: hl + 6, z: 0 }, pen.rotX, pen.rotY, pen.rotZ).y,
          pen.z + rotate3D({ x: 0, y: hl + 6, z: 0 }, pen.rotX, pen.rotY, pen.rotZ).z,
          camX,
          camY
        );
        ctx.beginPath();
        ctx.moveTo(pts[5].x, pts[5].y);
        ctx.lineTo(pts[6].x, pts[6].y);
        ctx.lineTo(eraserTop.x, eraserTop.y);
        ctx.closePath();
        ctx.fillStyle = '#fb7185';
        ctx.fill();

        ctx.restore();
      });

      // ── 7. DRAW 3D ROLLED DIPLOMAS (FACE 3: GRADUATION TRIUMPH) ──
      diplomas.forEach((dip) => {
        updateTrailMotion(dip, wFace3);
        dip.rotX += dip.vRotX;
        dip.rotZ += dip.vRotZ;

        const hl = dip.length / 2;
        const r = dip.radius;

        const pStart = project(
          dip.x + rotate3D({ x: 0, y: -hl, z: 0 }, dip.rotX, dip.rotY, dip.rotZ).x,
          dip.y + rotate3D({ x: 0, y: -hl, z: 0 }, dip.rotX, dip.rotY, dip.rotZ).y,
          dip.z + rotate3D({ x: 0, y: -hl, z: 0 }, dip.rotX, dip.rotY, dip.rotZ).z,
          camX,
          camY
        );
        const pEnd = project(
          dip.x + rotate3D({ x: 0, y: hl, z: 0 }, dip.rotX, dip.rotY, dip.rotZ).x,
          dip.y + rotate3D({ x: 0, y: hl, z: 0 }, dip.rotX, dip.rotY, dip.rotZ).y,
          dip.z + rotate3D({ x: 0, y: hl, z: 0 }, dip.rotX, dip.rotY, dip.rotZ).z,
          camX,
          camY
        );

        ctx.save();
        ctx.globalAlpha = Math.max(0.35, wFace3);
        ctx.beginPath();
        ctx.moveTo(pStart.x, pStart.y);
        ctx.lineTo(pEnd.x, pEnd.y);
        ctx.lineWidth = r * 2 * pStart.scale * (0.85 + 0.35 * wFace3);
        ctx.strokeStyle = '#fef3c7'; // Ivory parchment
        ctx.lineCap = 'round';
        ctx.stroke();

        // Crimson Ribbon Band in center
        const pMid = {
          x: (pStart.x + pEnd.x) / 2,
          y: (pStart.y + pEnd.y) / 2,
        };
        ctx.beginPath();
        ctx.arc(pMid.x, pMid.y, (r * 1.3) * pStart.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#dc2626';
        ctx.fill();

        // Golden Seal on Ribbon
        ctx.beginPath();
        ctx.arc(pMid.x, pMid.y, (r * 0.7) * pStart.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
        ctx.restore();
      });

      // ── 8. DRAW 3D GRADUATION MORTARBOARDS (FACE 3: ACADEMIC SUCCESS) ──
      gradCaps.forEach((cap) => {
        updateTrailMotion(cap, wFace3);
        cap.rotX += cap.vRotX;
        cap.rotY += cap.vRotY;
        cap.rotZ += cap.vRotZ;

        const s = cap.size * (0.85 + 0.35 * wFace3);
        const rawBoard: Point3D[] = [
          { x: 0, y: -s * 0.45, z: 0 },
          { x: s * 0.9, y: 0, z: 0 },
          { x: 0, y: s * 0.45, z: 0 },
          { x: -s * 0.9, y: 0, z: 0 },
        ];

        const projectedBoard = rawBoard.map((p) => {
          const r = rotate3D(p, cap.rotX, cap.rotY, cap.rotZ);
          return project(cap.x + r.x, cap.y + r.y, cap.z + r.z, camX, camY);
        });

        const baseProj = project(cap.x, cap.y + s * 0.22, cap.z, camX, camY);

        ctx.save();
        ctx.globalAlpha = Math.max(0.35, wFace3);
        ctx.beginPath();
        ctx.ellipse(baseProj.x, baseProj.y, s * 0.35 * baseProj.scale, s * 0.22 * baseProj.scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();

        // Diamond Flat Cap Top
        ctx.beginPath();
        ctx.moveTo(projectedBoard[0].x, projectedBoard[0].y);
        for (let idx = 1; idx < 4; idx++) {
          ctx.lineTo(projectedBoard[idx].x, projectedBoard[idx].y);
        }
        ctx.closePath();
        ctx.fillStyle = '#1e293b';
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = Math.max(0.8, 1.2 * projectedBoard[0].scale);
        ctx.stroke();

        // Center Gold Stud
        const centerProj = project(cap.x, cap.y, cap.z, camX, camY);
        ctx.beginPath();
        ctx.arc(centerProj.x, centerProj.y, 3 * centerProj.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();

        // Swinging Gold Tassel
        const tasselSway = Math.sin(time * 3.5 + cap.x) * (dragging ? 18 : 12);
        ctx.beginPath();
        ctx.moveTo(centerProj.x, centerProj.y);
        ctx.quadraticCurveTo(
          centerProj.x + (s * 0.4 + tasselSway) * centerProj.scale,
          centerProj.y + s * 0.3 * centerProj.scale,
          projectedBoard[1].x + tasselSway * 0.5 * centerProj.scale,
          projectedBoard[1].y + s * 0.5 * centerProj.scale
        );
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = Math.max(1, 1.8 * centerProj.scale);
        ctx.stroke();

        ctx.restore();
      });

      // ── 9. DRAW 3D QUIZ CARDS (AUTHENTIC EXAM QUESTIONS) ──
      quizCards.forEach((card) => {
        updateTrailMotion(card, wFace0);
        card.rotX += card.vRotX;
        card.rotY += card.vRotY;
        card.rotZ += card.vRotZ;

        const hw = card.width / 2;
        const hh = card.height / 2;
        const flutter = Math.sin(time * 2.2 + card.phase) * 3.5;

        const corners: Point3D[] = [
          { x: -hw, y: -hh, z: flutter },
          { x: hw, y: -hh, z: -flutter },
          { x: hw, y: hh, z: flutter },
          { x: -hw, y: hh, z: -flutter },
        ];

        const projectedCorners = corners.map((c) => {
          const r = rotate3D(c, card.rotX, card.rotY, card.rotZ);
          return project(card.x + r.x, card.y + r.y, card.z + r.z, camX, camY);
        });

        // Draw Card Body
        ctx.beginPath();
        ctx.moveTo(projectedCorners[0].x, projectedCorners[0].y);
        for (let idx = 1; idx < 4; idx++) {
          ctx.lineTo(projectedCorners[idx].x, projectedCorners[idx].y);
        }
        ctx.closePath();

        const avgScale = (projectedCorners[0].scale + projectedCorners[2].scale) / 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * avgScale * Math.max(0.35, wFace0)})`;
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.8 * avgScale * Math.max(0.35, wFace0)})`;
        ctx.lineWidth = Math.max(1, 1.5 * avgScale);
        ctx.fill();
        ctx.stroke();

        if (avgScale > 0.42) {
          const cx = (projectedCorners[0].x + projectedCorners[2].x) / 2;
          const cy = (projectedCorners[0].y + projectedCorners[2].y) / 2;

          ctx.save();
          ctx.translate(cx, cy);
          const angle = Math.atan2(
            projectedCorners[1].y - projectedCorners[0].y,
            projectedCorners[1].x - projectedCorners[0].x
          );
          ctx.rotate(angle);

          ctx.font = `bold ${Math.round(6.5 * avgScale)}px sans-serif`;
          ctx.fillStyle = '#0284c7';
          ctx.textAlign = 'center';
          ctx.fillText(card.category, 0, -hh * 0.45 * avgScale);

          ctx.font = `bold ${Math.round(7.5 * avgScale)}px monospace`;
          ctx.fillStyle = '#0f172a';
          ctx.fillText(card.question, 0, -hh * 0.05 * avgScale);

          ctx.font = `bold ${Math.round(8 * avgScale)}px sans-serif`;
          ctx.fillStyle = '#16a34a';
          ctx.fillText(card.result, 0, hh * 0.45 * avgScale);

          ctx.restore();
        }
      });

      // ── 10. DRAW 3D HARDCOVER TEXTBOOKS (TRAILS IN SNAKE FORMATION) ──
      const sortedBooks = [...books].sort((a, b) => b.z - a.z);

      sortedBooks.forEach((b) => {
        updateTrailMotion(b, wFace0);
        b.rotX += b.vRotX;
        b.rotY += b.vRotY;
        b.rotZ += b.vRotZ;

        const hw = b.width / 2;
        const hh = b.height / 2;
        const ht = b.thickness / 2;

        const rawVertices: Point3D[] = [
          { x: -hw, y: -hh, z: -ht },
          { x: hw, y: -hh, z: -ht },
          { x: hw, y: hh, z: -ht },
          { x: -hw, y: hh, z: -ht },
          { x: -hw, y: -hh, z: ht },
          { x: hw, y: -hh, z: ht },
          { x: hw, y: hh, z: ht },
          { x: -hw, y: hh, z: ht },
        ];

        const projectedVertices = rawVertices.map((v) => {
          const r = rotate3D(v, b.rotX, b.rotY, b.rotZ);
          return project(b.x + r.x, b.y + r.y, b.z + r.z, camX, camY);
        });

        const faces = [
          { indices: [0, 1, 2, 3], type: 'cover', color: b.color },
          { indices: [5, 4, 7, 6], type: 'cover', color: b.color },
          { indices: [4, 0, 3, 7], type: 'spine', color: b.spineColor },
          { indices: [1, 5, 6, 2], type: 'pages', color: '#f8fafc' },
          { indices: [4, 5, 1, 0], type: 'pages', color: '#e2e8f0' },
          { indices: [3, 2, 6, 7], type: 'pages', color: '#cbd5e1' },
        ];

        faces.forEach((face) => {
          const p0 = projectedVertices[face.indices[0]];
          const p1 = projectedVertices[face.indices[1]];
          const p2 = projectedVertices[face.indices[2]];

          const normalZ = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

          if (normalZ > 0) {
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(projectedVertices[face.indices[3]].x, projectedVertices[face.indices[3]].y);
            ctx.closePath();

            const avgScale = (p0.scale + p2.scale) / 2;
            const depthFade = Math.min(1, Math.max(0.35, avgScale * 1.3));

            if (face.type === 'cover') {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.96 * Math.max(0.35, wFace0);
              ctx.fill();

              ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
              ctx.lineWidth = 1;
              ctx.stroke();

              if (avgScale > 0.44) {
                const cx = (p0.x + p2.x) / 2;
                const cy = (p0.y + p2.y) / 2;
                ctx.save();
                ctx.translate(cx, cy);
                const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x);
                ctx.rotate(angle);
                ctx.font = `900 ${Math.round(9.5 * avgScale)}px sans-serif`;
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(b.label, 0, 0);

                ctx.beginPath();
                ctx.arc(0, 14 * avgScale, 4 * avgScale, 0, Math.PI * 2);
                ctx.fillStyle = '#fbbf24';
                ctx.fill();

                ctx.restore();
              }
            } else if (face.type === 'spine') {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.98 * Math.max(0.35, wFace0);
              ctx.fill();

              ctx.strokeStyle = 'rgba(251, 191, 36, 0.75)';
              ctx.lineWidth = 1.5;
              ctx.stroke();
            } else {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.88 * Math.max(0.35, wFace0);
              ctx.fill();
              ctx.strokeStyle = 'rgba(203, 213, 225, 0.5)';
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }

            ctx.globalAlpha = 1;
          }
        });

        // Dangling Bookmark Ribbon
        const p2 = projectedVertices[2];
        const p3 = projectedVertices[3];
        const ribbonBaseX = (p2.x + p3.x) / 2;
        const ribbonBaseY = (p2.y + p3.y) / 2;
        const ribbonSway = Math.sin(time * 3 + b.x) * 10 * p2.scale;

        ctx.beginPath();
        ctx.moveTo(ribbonBaseX, ribbonBaseY);
        ctx.quadraticCurveTo(
          ribbonBaseX + ribbonSway * 0.6,
          ribbonBaseY + 12 * p2.scale,
          ribbonBaseX + ribbonSway,
          ribbonBaseY + 24 * p2.scale
        );
        ctx.strokeStyle = b.ribbonColor;
        ctx.lineWidth = Math.max(1.2, 2.5 * p2.scale);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);

      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-screen pointer-events-none z-0"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
}
