'use client';

import React, { useRef, useEffect } from 'react';

// ============================================================================
// 3D OBJECT & MARINE LIFE DATA STRUCTURES
// ============================================================================

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Book3D {
  id: number;
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
  wobbleSpeed: number;
  wobblePhase: number;
}

interface Fish3D {
  id: number;
  species: 'blue_tang' | 'clownfish' | 'yellow_tang' | 'neon_tetra';
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  speed: number;
  size: number;
  heading: number; // 1 = right, -1 = left
  tailPhase: number;
  tailSpeed: number;
  finPhase: number;
  turnTimer: number;
  bodyColor: string;
  stripeColor: string;
  finColor: string;
}

interface Shark3D {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  speed: number;
  size: number;
  heading: number;
  tailPhase: number;
  tailSpeed: number;
  turnTimer: number;
}

interface Crab3D {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  legPhase: number;
  clawPhase: number;
  direction: number;
  wanderTimer: number;
  bodyColor: string;
  clawColor: string;
}

interface MantaRay3D {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  speed: number;
  size: number;
  heading: number;
  wingPhase: number;
  wingSpeed: number;
  turnTimer: number;
}

interface Jellyfish3D {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  pulsePhase: number;
  pulseSpeed: number;
  tentacleCount: number;
  color: string;
  glowColor: string;
}

interface SeaweedStrand {
  colRatio: number;
  baseZ: number;
  totalHeight: number;
  segments: number;
  swaySpeed: number;
  swayAmp: number;
  phaseOffset: number;
  leafColor: string;
  stemColor: string;
  width: number;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  wobbleSpeed: number;
  wobbleAmp: number;
}

export default function Books3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
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

    // Viewport bounds calculation at any 3D depth Z
    const getVisibleHalfWidth = (z: number) => ((width / 2) * (fov + z)) / fov;
    const getVisibleHalfHeight = (z: number) => ((height / 2) * (fov + z)) / fov;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress.current = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Camera Parallax Pointer Handlers (Subtle 3D depth, no trail tethering)
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / width) * 2 - 1;
      const normY = (e.clientY / height) * 2 - 1;
      mousePos.current.targetX = normX * 80;
      mousePos.current.targetY = normY * 55;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const normX = (e.touches[0].clientX / width) * 2 - 1;
        const normY = (e.touches[0].clientY / height) * 2 - 1;
        mousePos.current.targetX = normX * 80;
        mousePos.current.targetY = normY * 55;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // ========================================================================
    // 1. GENERATE 3D TEXTBOOKS FLOATING FREELY AROUND LIKE FISHES
    // ========================================================================
    const bookConfigs = [
      { cover: '#1e40af', spine: '#172554', ribbon: '#fbbf24', label: 'WAEC MATH' },
      { cover: '#0284c7', spine: '#082f49', ribbon: '#38bdf8', label: 'INT SCIENCE' },
      { cover: '#4338ca', spine: '#1e1b4b', ribbon: '#f43f5e', label: 'CORE ENGLISH' },
      { cover: '#059669', spine: '#022c22', ribbon: '#34d399', label: 'PHYSICS' },
      { cover: '#b45309', spine: '#451a03', ribbon: '#fbbf24', label: 'SOCIAL STUDIES' },
      { cover: '#7c3aed', spine: '#2e1065', ribbon: '#a78bfa', label: 'CHEMISTRY' },
      { cover: '#0f766e', spine: '#042f2e', ribbon: '#5eead4', label: 'BIOLOGY' },
      { cover: '#334155', spine: '#0f172a', ribbon: '#38bdf8', label: 'COMPUTING' },
    ];

    const books: Book3D[] = bookConfigs.map((cfg, i) => {
      const z = 240 + (i % 4) * 85;
      const hw = getVisibleHalfWidth(z);
      const hh = getVisibleHalfHeight(z);
      return {
        id: i,
        x: (Math.random() - 0.5) * (hw * 1.8),
        y: (Math.random() - 0.5) * (hh * 1.7),
        z,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.25,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.007,
        vRotY: (Math.random() - 0.5) * 0.009,
        vRotZ: (Math.random() - 0.5) * 0.005,
        width: 76,
        height: 104,
        thickness: 20,
        color: cfg.cover,
        spineColor: cfg.spine,
        ribbonColor: cfg.ribbon,
        label: cfg.label,
        wobbleSpeed: 0.8 + Math.random() * 0.6,
        wobblePhase: i * 0.8,
      };
    });

    // ========================================================================
    // 2. TROPICAL REEF FISHES ALL OVER SCREEN
    // ========================================================================
    const fishConfigs = [
      { species: 'blue_tang' as const, body: '#1d4ed8', stripe: '#1e1b4b', fin: '#facc15' },
      { species: 'clownfish' as const, body: '#ea580c', stripe: '#ffffff', fin: '#c2410c' },
      { species: 'yellow_tang' as const, body: '#facc15', stripe: '#fef08a', fin: '#eab308' },
      { species: 'neon_tetra' as const, body: '#06b6d4', stripe: '#ef4444', fin: '#38bdf8' },
    ];

    const fishes: Fish3D[] = Array.from({ length: 26 }).map((_, i) => {
      const cfg = fishConfigs[i % fishConfigs.length];
      const startHeading = Math.random() > 0.5 ? 1 : -1;
      const initialSpeed = 1.2 + Math.random() * 1.6;
      const startZ = 220 + Math.random() * 460;
      const hw = getVisibleHalfWidth(startZ);
      const hh = getVisibleHalfHeight(startZ);

      return {
        id: i,
        species: cfg.species,
        x: (Math.random() - 0.5) * (hw * 2.1),
        y: (Math.random() - 0.5) * (hh * 2.0),
        z: startZ,
        vx: startHeading * initialSpeed,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.3,
        speed: initialSpeed,
        size: 24 + Math.random() * 16,
        heading: startHeading,
        tailPhase: Math.random() * Math.PI * 2,
        tailSpeed: 4.5 + Math.random() * 3.5,
        finPhase: Math.random() * Math.PI * 2,
        turnTimer: 180 + Math.floor(Math.random() * 260),
        bodyColor: cfg.body,
        stripeColor: cfg.stripe,
        finColor: cfg.fin,
      };
    });

    // Predatory Sharks
    const sharks: Shark3D[] = [
      {
        id: 1,
        x: -getVisibleHalfWidth(380) * 0.85,
        y: -getVisibleHalfHeight(380) * 0.4,
        z: 380,
        vx: 1.8,
        vy: 0.12,
        vz: -0.05,
        speed: 1.8,
        size: 96,
        heading: 1,
        tailPhase: 0,
        tailSpeed: 3.2,
        turnTimer: 340,
      },
      {
        id: 2,
        x: getVisibleHalfWidth(480) * 0.85,
        y: getVisibleHalfHeight(480) * 0.35,
        z: 480,
        vx: -1.6,
        vy: -0.1,
        vz: 0.08,
        speed: 1.6,
        size: 86,
        heading: -1,
        tailPhase: Math.PI * 0.8,
        tailSpeed: 2.8,
        turnTimer: 420,
      }
    ];

    // Crabs along bottom
    const crabs: Crab3D[] = [
      {
        id: 1,
        x: -getVisibleHalfWidth(330) * 0.75,
        y: getVisibleHalfHeight(330) * 0.8,
        z: 330,
        vx: 0.55,
        vy: 0.05,
        vz: 0,
        size: 34,
        legPhase: 0,
        clawPhase: 0,
        direction: 1,
        wanderTimer: 220,
        bodyColor: '#e11d48',
        clawColor: '#fb7185',
      },
      {
        id: 2,
        x: getVisibleHalfWidth(360) * 0.7,
        y: getVisibleHalfHeight(360) * 0.84,
        z: 360,
        vx: -0.5,
        vy: -0.05,
        vz: 0,
        size: 38,
        legPhase: Math.PI,
        clawPhase: 1.4,
        direction: -1,
        wanderTimer: 260,
        bodyColor: '#ea580c',
        clawColor: '#f97316',
      },
      {
        id: 3,
        x: -getVisibleHalfWidth(390) * 0.15,
        y: getVisibleHalfHeight(390) * 0.88,
        z: 390,
        vx: 0.45,
        vy: 0.04,
        vz: 0,
        size: 32,
        legPhase: 0.8,
        clawPhase: 2.2,
        direction: 1,
        wanderTimer: 190,
        bodyColor: '#be123c',
        clawColor: '#f43f5e',
      }
    ];

    // Manta Rays & Jellyfish
    const mantaRays: MantaRay3D[] = [
      {
        id: 1,
        x: -getVisibleHalfWidth(450) * 0.7,
        y: -getVisibleHalfHeight(450) * 0.35,
        z: 450,
        vx: 1.15,
        vy: 0.1,
        vz: -0.04,
        speed: 1.15,
        size: 82,
        heading: 1,
        wingPhase: 0,
        wingSpeed: 1.9,
        turnTimer: 380,
      },
      {
        id: 2,
        x: getVisibleHalfWidth(510) * 0.65,
        y: -getVisibleHalfHeight(510) * 0.15,
        z: 510,
        vx: -0.98,
        vy: -0.08,
        vz: 0.05,
        speed: 0.98,
        size: 72,
        heading: -1,
        wingPhase: Math.PI * 0.8,
        wingSpeed: 1.8,
        turnTimer: 460,
      }
    ];

    const jellyfish: Jellyfish3D[] = [
      {
        id: 1,
        x: -getVisibleHalfWidth(370) * 0.8,
        y: -getVisibleHalfHeight(370) * 0.2,
        z: 370,
        vx: 0.15,
        vy: -0.45,
        vz: 0.05,
        size: 38,
        pulsePhase: 0,
        pulseSpeed: 1.6,
        tentacleCount: 6,
        color: 'rgba(216, 180, 254, 0.65)',
        glowColor: 'rgba(168, 85, 247, 0.4)',
      },
      {
        id: 2,
        x: getVisibleHalfWidth(420) * 0.78,
        y: getVisibleHalfHeight(420) * 0.1,
        z: 420,
        vx: -0.12,
        vy: -0.38,
        vz: -0.06,
        size: 44,
        pulsePhase: 1.4,
        pulseSpeed: 1.4,
        tentacleCount: 7,
        color: 'rgba(125, 211, 252, 0.65)',
        glowColor: 'rgba(14, 165, 233, 0.4)',
      },
      {
        id: 3,
        x: -getVisibleHalfWidth(400) * 0.35,
        y: getVisibleHalfHeight(400) * 0.3,
        z: 400,
        vx: 0.08,
        vy: -0.42,
        vz: 0.04,
        size: 34,
        pulsePhase: 2.7,
        pulseSpeed: 1.7,
        tentacleCount: 5,
        color: 'rgba(244, 114, 182, 0.65)',
        glowColor: 'rgba(236, 72, 153, 0.4)',
      }
    ];

    // Seaweed strands spanning across screen width
    const totalSeaweed = 18;
    const seaweedStrands: SeaweedStrand[] = Array.from({ length: totalSeaweed }).map((_, i) => ({
      colRatio: (i + 0.5) / totalSeaweed,
      baseZ: 250 + (i % 6) * 60,
      totalHeight: 280 + Math.random() * 180,
      segments: 11,
      swaySpeed: 1.0 + Math.random() * 0.7,
      swayAmp: 3.5 + Math.random() * 3.0,
      phaseOffset: i * 0.65,
      leafColor: i % 3 === 0 ? 'rgba(16, 185, 129,' : i % 3 === 1 ? 'rgba(5, 150, 105,' : 'rgba(20, 184, 166,',
      stemColor: '#064e3b',
      width: 14 + Math.random() * 8,
    }));

    // Ambient Bubbles
    const bubbles: Particle3D[] = Array.from({ length: 70 }).map(() => ({
      x: (Math.random() - 0.5) * 1800,
      y: (Math.random() - 0.5) * 1200,
      z: 160 + Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(0.4 + Math.random() * 0.8),
      radius: 1.2 + Math.random() * 3.8,
      alpha: 0.25 + Math.random() * 0.65,
      wobbleSpeed: 1.0 + Math.random() * 1.8,
      wobbleAmp: 0.3 + Math.random() * 0.5,
    }));

    // 3D Vector rotation matrix
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

    // Project 3D coordinate to 2D screen space
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

    // ========================================================================
    // MAIN 60FPS RENDERING LOOP
    // ========================================================================
    const render = () => {
      time += 0.016;

      // Smooth camera parallax
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.07;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.07;
      const camX = mousePos.current.x;
      const camY = mousePos.current.y;

      ctx.clearRect(0, 0, width, height);

      // Deep Ocean Waters
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
      oceanGrad.addColorStop(0, '#042f4c');
      oceanGrad.addColorStop(0.35, '#031c36');
      oceanGrad.addColorStop(0.75, '#021226');
      oceanGrad.addColorStop(1, '#010a17');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, width, height);

      // Volumetric sunlight shafts
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      const numRays = 7;
      for (let r = 0; r < numRays; r++) {
        const rayDrift = Math.sin(time * 0.3 + r * 1.4) * 45;
        const rayAngle = -0.14 + (r - 3) * 0.05 + Math.sin(time * 0.2 + r) * 0.025;
        const rayOriginX = width * (0.08 + r * 0.15) + rayDrift;
        const rayLength = height * 0.95;
        const topWidth = 35 + Math.sin(time * 0.7 + r) * 15;
        const botWidth = 160 + Math.sin(time * 0.5 + r * 1.3) * 45;

        const rayGrad = ctx.createLinearGradient(
          rayOriginX, 0,
          rayOriginX + Math.tan(rayAngle) * rayLength, rayLength
        );
        const rayAlpha = 0.05 + Math.sin(time * 0.45 + r * 1.2) * 0.025;
        rayGrad.addColorStop(0, `rgba(56, 189, 248, ${rayAlpha * 1.9})`);
        rayGrad.addColorStop(0.4, `rgba(45, 212, 191, ${rayAlpha * 1.1})`);
        rayGrad.addColorStop(0.85, `rgba(14, 116, 144, ${rayAlpha * 0.3})`);
        rayGrad.addColorStop(1, 'rgba(1, 10, 23, 0)');

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(rayOriginX - topWidth / 2, 0);
        ctx.lineTo(rayOriginX + topWidth / 2, 0);
        ctx.lineTo(rayOriginX + Math.tan(rayAngle) * rayLength + botWidth / 2, rayLength);
        ctx.lineTo(rayOriginX + Math.tan(rayAngle) * rayLength - botWidth / 2, rayLength);
        ctx.closePath();
        ctx.fill();
      }

      // Shimmering surface caustics
      const causticPulse = Math.sin(time * 0.8) * 0.012 + 0.028;
      const causticGrad = ctx.createRadialGradient(
        width / 2 + Math.sin(time * 0.4) * 100,
        height * 0.12,
        20,
        width / 2,
        height * 0.18,
        width * 0.7
      );
      causticGrad.addColorStop(0, `rgba(56, 189, 248, ${causticPulse * 2.2})`);
      causticGrad.addColorStop(0.45, `rgba(20, 184, 166, ${causticPulse})`);
      causticGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = causticGrad;
      ctx.fillRect(0, 0, width, height * 0.55);

      ctx.restore();

      // ── 1. DRAW SEAWEED SPANNING FULL SCREEN WIDTH ──
      seaweedStrands.forEach((strand) => {
        const hw = getVisibleHalfWidth(strand.baseZ);
        const hh = getVisibleHalfHeight(strand.baseZ);
        const curX = -hw + strand.colRatio * (hw * 2) + Math.sin(time * 0.2 + strand.phaseOffset) * 20;
        const curY = hh * 0.94;
        const curZ = strand.baseZ;

        const baseProj = project(curX, curY, curZ, camX, camY);
        ctx.save();

        const strandPts: { x: number; y: number; scale: number }[] = [
          { x: baseProj.x, y: baseProj.y, scale: baseProj.scale }
        ];

        const segLen = strand.totalHeight / strand.segments;
        for (let s = 1; s <= strand.segments; s++) {
          const swayFactor = (s / strand.segments) * (s / strand.segments);
          const sway = Math.sin(time * strand.swaySpeed + s * 0.32 + strand.phaseOffset) * (strand.swayAmp * swayFactor * 22);
          const segY = curY - (s * segLen);
          const segX = curX + sway;
          const p = project(segX, segY, curZ, camX, camY);
          strandPts.push({ x: p.x, y: p.y, scale: p.scale });
        }

        for (let s = 1; s < strandPts.length; s++) {
          const pt = strandPts[s];
          const prev = strandPts[s - 1];
          const bladeSide = s % 2 === 0 ? 1 : -1;
          const bladeLen = (strand.width * 1.8) * pt.scale;
          const bladeWidth = (strand.width * 0.6) * pt.scale;
          const bladeAngle = Math.atan2(pt.y - prev.y, pt.x - prev.x) + (bladeSide * 0.7);

          const tipX = pt.x + Math.cos(bladeAngle) * bladeLen;
          const tipY = pt.y + Math.sin(bladeAngle) * bladeLen;

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.quadraticCurveTo(
            pt.x + Math.cos(bladeAngle + 0.3) * (bladeLen * 0.6),
            pt.y + Math.sin(bladeAngle + 0.3) * (bladeLen * 0.6) - bladeWidth,
            tipX, tipY
          );
          ctx.quadraticCurveTo(
            pt.x + Math.cos(bladeAngle - 0.3) * (bladeLen * 0.6),
            pt.y + Math.sin(bladeAngle - 0.3) * (bladeLen * 0.6) + bladeWidth,
            pt.x, pt.y
          );
          ctx.closePath();
          ctx.fillStyle = `${strand.leafColor} ${0.35 + (s / strand.segments) * 0.45})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.moveTo(strandPts[0].x, strandPts[0].y);
        for (let s = 1; s < strandPts.length; s++) {
          ctx.lineTo(strandPts[s].x, strandPts[s].y);
        }
        ctx.strokeStyle = strand.stemColor;
        ctx.lineWidth = Math.max(1.5, 4.5 * baseProj.scale);
        ctx.stroke();

        ctx.restore();
      });

      // ── 2. DRAW AMBIENT BUBBLES ──
      bubbles.forEach((b, idx) => {
        b.y += b.vy;
        b.x += Math.sin(time * b.wobbleSpeed + idx) * b.wobbleAmp;

        const hw = getVisibleHalfWidth(b.z) * 1.1;
        const hh = getVisibleHalfHeight(b.z) * 1.1;

        if (b.y < -hh) {
          b.y = hh;
          b.x = (Math.random() - 0.5) * (hw * 2);
        }

        const proj = project(b.x, b.y, b.z, camX * 0.3, camY * 0.3);
        const radius = b.radius * proj.scale;

        ctx.beginPath();
        ctx.arc(proj.x, proj.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${b.alpha * 0.25 * proj.scale})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(186, 230, 253, ${b.alpha * 0.7 * proj.scale})`;
        ctx.lineWidth = Math.max(0.6, 1.2 * proj.scale);
        ctx.stroke();

        if (radius > 1.8) {
          ctx.beginPath();
          ctx.arc(proj.x - radius * 0.3, proj.y - radius * 0.3, Math.max(0.5, radius * 0.24), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.85 * proj.scale})`;
          ctx.fill();
        }
      });

      // ── 3. DRAW JELLYFISH ──
      jellyfish.forEach((jelly) => {
        jelly.pulsePhase += 0.04 * jelly.pulseSpeed;
        const pulse = (Math.sin(jelly.pulsePhase) + 1) / 2;
        const thrust = Math.pow(Math.sin(jelly.pulsePhase), 2);
        jelly.y += jelly.vy * (0.4 + thrust * 1.2);
        jelly.x += jelly.vx + Math.sin(time * 0.8 + jelly.id) * 0.25;

        const hw = getVisibleHalfWidth(jelly.z) * 1.1;
        const hh = getVisibleHalfHeight(jelly.z) * 1.1;

        if (jelly.y < -hh) jelly.y = hh;
        if (jelly.x < -hw) jelly.x = hw;
        if (jelly.x > hw) jelly.x = -hw;

        const proj = project(jelly.x, jelly.y, jelly.z, camX, camY);
        const s = jelly.size * proj.scale;

        const bellWidth = s * (1.1 - pulse * 0.3);
        const bellHeight = s * (0.8 + pulse * 0.4);

        ctx.save();
        ctx.translate(proj.x, proj.y);

        const aura = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 1.5);
        aura.addColorStop(0, jelly.glowColor);
        aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(0, 0, s * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(-bellWidth / 2, 0);
        ctx.bezierCurveTo(-bellWidth / 2, -bellHeight, bellWidth / 2, -bellHeight, bellWidth / 2, 0);
        ctx.quadraticCurveTo(0, bellHeight * 0.15, -bellWidth / 2, 0);
        ctx.closePath();
        ctx.fillStyle = jelly.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.lineWidth = Math.max(0.8, 1.4 * proj.scale);
        ctx.stroke();

        for (let t = 0; t < jelly.tentacleCount; t++) {
          const tOffset = ((t - (jelly.tentacleCount - 1) / 2) / jelly.tentacleCount) * (bellWidth * 0.75);
          const tLen = s * (1.6 + (t % 3) * 0.4);
          const wave = Math.sin(time * 3 + t * 1.2) * (s * 0.25);

          ctx.beginPath();
          ctx.moveTo(tOffset, 0);
          ctx.bezierCurveTo(
            tOffset + wave * 0.5, tLen * 0.35,
            tOffset - wave, tLen * 0.7,
            tOffset + wave * 1.2, tLen
          );
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = Math.max(0.6, 1.2 * proj.scale);
          ctx.stroke();
        }

        ctx.restore();
      });

      // ── 4. DRAW MANTA RAYS ──
      mantaRays.forEach((ray) => {
        ray.wingPhase += 0.05 * ray.wingSpeed;
        ray.x += ray.vx;
        ray.y += ray.vy;

        const hw = getVisibleHalfWidth(ray.z) * 1.05;
        const hh = getVisibleHalfHeight(ray.z) * 1.05;

        if (ray.x > hw) { ray.vx = -Math.abs(ray.vx); ray.heading = -1; }
        if (ray.x < -hw) { ray.vx = Math.abs(ray.vx); ray.heading = 1; }
        if (ray.y > hh * 0.8) ray.vy = -Math.abs(ray.vy);
        if (ray.y < -hh * 0.8) ray.vy = Math.abs(ray.vy);

        const proj = project(ray.x, ray.y, ray.z, camX, camY);
        const s = ray.size * proj.scale;
        const wingFlap = Math.sin(ray.wingPhase) * (s * 0.38);

        ctx.save();
        ctx.translate(proj.x, proj.y);
        if (ray.heading < 0) ctx.scale(-1, 1);

        ctx.beginPath();
        ctx.moveTo(s * 0.7, 0);
        ctx.quadraticCurveTo(0, -s * 0.35 + wingFlap, -s * 0.25, -s * 0.85 + wingFlap);
        ctx.quadraticCurveTo(-s * 0.2, -s * 0.2, -s * 0.65, 0);
        ctx.quadraticCurveTo(-s * 0.2, s * 0.2, -s * 0.25, s * 0.85 - wingFlap);
        ctx.quadraticCurveTo(0, s * 0.35 - wingFlap, s * 0.7, 0);
        ctx.closePath();

        const rayGrad = ctx.createLinearGradient(0, -s, 0, s);
        rayGrad.addColorStop(0, '#0f172a');
        rayGrad.addColorStop(0.5, '#1e293b');
        rayGrad.addColorStop(1, '#020617');
        ctx.fillStyle = rayGrad;
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = Math.max(0.8, 1.2 * proj.scale);
        ctx.stroke();

        const tailWave = Math.sin(time * 2.5 + ray.id) * (s * 0.2);
        ctx.beginPath();
        ctx.moveTo(-s * 0.65, 0);
        ctx.quadraticCurveTo(-s * 1.2, tailWave, -s * 1.8, tailWave * 1.5);
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = Math.max(0.8, 1.5 * proj.scale);
        ctx.stroke();

        ctx.restore();
      });

      // ── 5. DRAW CRABS ("GRABS") ──
      crabs.forEach((crab) => {
        crab.legPhase += 0.12;
        crab.clawPhase += 0.06;
        crab.wanderTimer--;

        const hw = getVisibleHalfWidth(crab.z);
        const hh = getVisibleHalfHeight(crab.z);

        if (crab.wanderTimer <= 0) {
          crab.wanderTimer = 180 + Math.floor(Math.random() * 240);
          crab.direction *= -1;
          crab.vx = crab.direction * (0.35 + Math.random() * 0.45);
          crab.vy = (Math.random() - 0.5) * 0.2;
        }

        crab.x += crab.vx;
        crab.y += crab.vy;

        if (crab.x > hw * 0.95) { crab.x = hw * 0.95; crab.vx *= -1; crab.direction = -1; }
        if (crab.x < -hw * 0.95) { crab.x = -hw * 0.95; crab.vx *= -1; crab.direction = 1; }
        if (crab.y > hh * 0.92) { crab.y = hh * 0.92; crab.vy *= -1; }
        if (crab.y < hh * 0.65) { crab.y = hh * 0.65; crab.vy *= -1; }

        const proj = project(crab.x, crab.y, crab.z, camX, camY);
        const s = crab.size * proj.scale;

        ctx.save();
        ctx.translate(proj.x, proj.y);

        for (let side = -1; side <= 1; side += 2) {
          for (let l = 0; l < 3; l++) {
            const legWiggle = Math.sin(crab.legPhase + l * 0.9 + side) * (s * 0.25);
            ctx.beginPath();
            ctx.moveTo(side * s * 0.45, (l - 1) * s * 0.28);
            ctx.quadraticCurveTo(
              side * (s * 0.85 + legWiggle),
              (l - 1) * s * 0.35,
              side * (s * 1.15),
              (l - 0.5) * s * 0.55 + legWiggle
            );
            ctx.strokeStyle = crab.bodyColor;
            ctx.lineWidth = Math.max(1, 2.4 * proj.scale);
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        }

        for (let side = -1; side <= 1; side += 2) {
          const clawWave = Math.sin(crab.clawPhase + side) * (s * 0.2);
          const clawBaseX = side * s * 0.4;
          const clawBaseY = -s * 0.35;
          const elbowX = side * (s * 0.75);
          const elbowY = -s * 0.65 + clawWave;
          const pincerX = side * (s * 0.6);
          const pincerY = -s * 0.95 + clawWave;

          ctx.beginPath();
          ctx.moveTo(clawBaseX, clawBaseY);
          ctx.lineTo(elbowX, elbowY);
          ctx.lineTo(pincerX, pincerY);
          ctx.strokeStyle = crab.bodyColor;
          ctx.lineWidth = Math.max(1.2, 3.2 * proj.scale);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(pincerX, pincerY, s * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = crab.clawColor;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(pincerX - side * s * 0.08, pincerY - s * 0.15);
          ctx.lineTo(pincerX - side * s * 0.18, pincerY - s * 0.35);
          ctx.moveTo(pincerX + side * s * 0.08, pincerY - s * 0.15);
          ctx.lineTo(pincerX + side * s * 0.18, pincerY - s * 0.35);
          ctx.strokeStyle = '#fef08a';
          ctx.lineWidth = Math.max(0.8, 1.8 * proj.scale);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.55, s * 0.42, 0, 0, Math.PI * 2);
        ctx.fillStyle = crab.bodyColor;
        ctx.fill();
        ctx.strokeStyle = '#881337';
        ctx.lineWidth = Math.max(0.8, 1.5 * proj.scale);
        ctx.stroke();

        for (let side = -1; side <= 1; side += 2) {
          const eyeX = side * s * 0.22;
          const eyeY = -s * 0.44;
          ctx.beginPath();
          ctx.moveTo(eyeX, -s * 0.3);
          ctx.lineTo(eyeX, eyeY);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = Math.max(1, 2 * proj.scale);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(eyeX, eyeY, s * 0.09, 0, Math.PI * 2);
          ctx.fillStyle = '#0f172a';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(eyeX - s * 0.02, eyeY - s * 0.02, s * 0.03, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }

        ctx.restore();
      });

      // ── 6. DRAW PREDATORY SHARKS ──
      sharks.forEach((shark) => {
        shark.tailPhase += 0.06 * shark.tailSpeed;
        shark.x += shark.vx;
        shark.y += shark.vy;

        const hw = getVisibleHalfWidth(shark.z) * 1.1;
        const hh = getVisibleHalfHeight(shark.z) * 1.05;

        if (shark.x > hw) { shark.vx = -Math.abs(shark.vx); shark.heading = -1; }
        if (shark.x < -hw) { shark.vx = Math.abs(shark.vx); shark.heading = 1; }
        if (shark.y > hh * 0.85) shark.vy = -Math.abs(shark.vy);
        if (shark.y < -hh * 0.85) shark.vy = Math.abs(shark.vy);

        const proj = project(shark.x, shark.y, shark.z, camX, camY);
        const s = shark.size * proj.scale;
        const tailSway = Math.sin(shark.tailPhase) * (s * 0.24);

        ctx.save();
        ctx.translate(proj.x, proj.y);
        if (shark.heading < 0) ctx.scale(-1, 1);

        ctx.beginPath();
        ctx.moveTo(s * 0.95, -s * 0.02);
        ctx.quadraticCurveTo(s * 0.45, -s * 0.32, -s * 0.45, -s * 0.12);
        ctx.lineTo(-s * 0.9, tailSway * 0.4);
        ctx.quadraticCurveTo(-s * 0.4, s * 0.24, s * 0.3, s * 0.2);
        ctx.quadraticCurveTo(s * 0.75, s * 0.12, s * 0.95, -s * 0.02);
        ctx.closePath();

        const sharkGrad = ctx.createLinearGradient(0, -s * 0.3, 0, s * 0.2);
        sharkGrad.addColorStop(0, '#334155');
        sharkGrad.addColorStop(0.55, '#475569');
        sharkGrad.addColorStop(1, '#f1f5f9');
        ctx.fillStyle = sharkGrad;
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = Math.max(1, 1.8 * proj.scale);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(s * 0.05, -s * 0.25);
        ctx.lineTo(-s * 0.18, -s * 0.65);
        ctx.quadraticCurveTo(-s * 0.12, -s * 0.3, -s * 0.25, -s * 0.18);
        ctx.closePath();
        ctx.fillStyle = '#334155';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(s * 0.32, s * 0.08);
        ctx.lineTo(s * 0.05, s * 0.55);
        ctx.quadraticCurveTo(s * 0.15, s * 0.3, s * 0.12, s * 0.1);
        ctx.closePath();
        ctx.fillStyle = '#475569';
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(-s * 0.9, tailSway * 0.4);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-s * 0.38, -s * 0.48 + tailSway);
        ctx.quadraticCurveTo(-s * 0.22, 0, -s * 0.3, s * 0.32 + tailSway);
        ctx.closePath();
        ctx.fillStyle = '#334155';
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(s * 0.72, -s * 0.05, s * 0.045, 0, Math.PI * 2);
        ctx.fillStyle = '#020617';
        ctx.fill();

        ctx.restore();
      });

      // ── 7. DRAW TROPICAL REEF FISHES ALL OVER SCREEN ──
      fishes.forEach((fish) => {
        fish.tailPhase += 0.08 * fish.tailSpeed;
        fish.finPhase += 0.15;
        fish.turnTimer--;

        const hw = getVisibleHalfWidth(fish.z) * 1.05;
        const hh = getVisibleHalfHeight(fish.z) * 1.05;

        if (fish.turnTimer <= 0) {
          fish.turnTimer = 160 + Math.floor(Math.random() * 260);
          if (Math.random() > 0.4) {
            fish.heading *= -1;
            fish.vx = fish.heading * (1.2 + Math.random() * 1.6);
          }
          fish.vy = (Math.random() - 0.5) * 0.7;
          fish.vz = (Math.random() - 0.5) * 0.4;
        }

        fish.x += fish.vx;
        fish.y += fish.vy;
        fish.z += fish.vz;

        if (fish.x > hw) { fish.x = hw; fish.vx = -Math.abs(fish.vx); fish.heading = -1; }
        if (fish.x < -hw) { fish.x = -hw; fish.vx = Math.abs(fish.vx); fish.heading = 1; }
        if (fish.y > hh) { fish.y = hh; fish.vy = -Math.abs(fish.vy); }
        if (fish.y < -hh) { fish.y = -hh; fish.vy = Math.abs(fish.vy); }
        if (fish.z > 680) { fish.z = 680; fish.vz = -Math.abs(fish.vz); }
        if (fish.z < 200) { fish.z = 200; fish.vz = Math.abs(fish.vz); }

        const proj = project(fish.x, fish.y, fish.z, camX, camY);
        const s = fish.size * proj.scale;
        const tailWag = Math.sin(fish.tailPhase) * (s * 0.32);

        ctx.save();
        ctx.translate(proj.x, proj.y);
        if (fish.heading < 0) ctx.scale(-1, 1);

        ctx.beginPath();
        ctx.moveTo(s * 0.7, 0);
        ctx.quadraticCurveTo(s * 0.25, -s * 0.45, -s * 0.4, -s * 0.1);
        ctx.lineTo(-s * 0.65, tailWag * 0.5);
        ctx.quadraticCurveTo(-s * 0.4, s * 0.4, s * 0.25, s * 0.35);
        ctx.closePath();
        ctx.fillStyle = fish.bodyColor;
        ctx.fill();

        if (fish.species === 'clownfish') {
          for (let st = 0; st < 3; st++) {
            const stX = s * (0.35 - st * 0.38);
            ctx.beginPath();
            ctx.ellipse(stX, 0, s * 0.09, s * 0.36 - st * s * 0.06, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = Math.max(0.6, 1.2 * proj.scale);
            ctx.stroke();
          }
        } else if (fish.species === 'blue_tang') {
          ctx.beginPath();
          ctx.ellipse(-s * 0.05, 0, s * 0.26, s * 0.2, 0.2, 0, Math.PI * 2);
          ctx.fillStyle = fish.stripeColor;
          ctx.fill();
        } else if (fish.species === 'neon_tetra') {
          ctx.beginPath();
          ctx.rect(-s * 0.4, -s * 0.12, s * 0.8, s * 0.09);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();

          ctx.beginPath();
          ctx.rect(-s * 0.35, 0.02, s * 0.55, s * 0.15);
          ctx.fillStyle = '#ef4444';
          ctx.fill();
        }

        ctx.save();
        ctx.translate(-s * 0.65, tailWag * 0.5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-s * 0.38, -s * 0.32 + tailWag);
        ctx.quadraticCurveTo(-s * 0.2, 0, -s * 0.38, s * 0.32 + tailWag);
        ctx.closePath();
        ctx.fillStyle = fish.finColor;
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(s * 0.48, -s * 0.08, s * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(s * 0.5, -s * 0.08, s * 0.038, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();

        ctx.restore();
      });

      // ========================================================================
      // 8. 3D HARDCOVER TEXTBOOKS FLOATING FREELY AROUND LIKE THE FISHES
      // ========================================================================
      const sortedBooks = [...books].sort((a, b) => b.z - a.z);

      sortedBooks.forEach((b) => {
        // Autonomous floating & oceanic water drift
        b.x += b.vx + Math.sin(time * b.wobbleSpeed + b.wobblePhase) * 0.35;
        b.y += b.vy + Math.cos(time * (b.wobbleSpeed * 0.85) + b.wobblePhase) * 0.3;
        b.z += b.vz;

        // Smooth tumbling rotation in water
        b.rotX += b.vRotX;
        b.rotY += b.vRotY;
        b.rotZ += b.vRotZ;

        // Roaming across full viewport boundaries
        const hw = getVisibleHalfWidth(b.z) * 1.05;
        const hh = getVisibleHalfHeight(b.z) * 1.05;

        if (b.x > hw) { b.x = hw; b.vx = -Math.abs(b.vx); }
        if (b.x < -hw) { b.x = -hw; b.vx = Math.abs(b.vx); }
        if (b.y > hh) { b.y = hh; b.vy = -Math.abs(b.vy); }
        if (b.y < -hh) { b.y = -hh; b.vy = Math.abs(b.vy); }
        if (b.z > 640) { b.z = 640; b.vz = -Math.abs(b.vz); }
        if (b.z < 200) { b.z = 200; b.vz = Math.abs(b.vz); }

        const hwBox = b.width / 2;
        const hhBox = b.height / 2;
        const htBox = b.thickness / 2;

        const rawVertices: Point3D[] = [
          { x: -hwBox, y: -hhBox, z: -htBox },
          { x: hwBox, y: -hhBox, z: -htBox },
          { x: hwBox, y: hhBox, z: -htBox },
          { x: -hwBox, y: hhBox, z: -htBox },
          { x: -hwBox, y: -hhBox, z: htBox },
          { x: hwBox, y: -hhBox, z: htBox },
          { x: hwBox, y: hhBox, z: htBox },
          { x: -hwBox, y: hhBox, z: htBox },
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
          const p3 = projectedVertices[face.indices[3]];

          const normalZ = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

          if (normalZ > 0) {
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.closePath();

            const avgScale = (p0.scale + p2.scale) / 2;
            const depthFade = Math.min(1, Math.max(0.35, avgScale * 1.3));

            if (face.type === 'cover') {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.96;
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
              ctx.globalAlpha = depthFade * 0.98;
              ctx.fill();

              ctx.strokeStyle = 'rgba(251, 191, 36, 0.75)';
              ctx.lineWidth = 1.5;
              ctx.stroke();
            } else {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.88;
              ctx.fill();
              ctx.strokeStyle = 'rgba(203, 213, 225, 0.5)';
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }

            ctx.globalAlpha = 1;
          }
        });

        // Dangling Bookmark Ribbon swaying in the ocean water
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
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
