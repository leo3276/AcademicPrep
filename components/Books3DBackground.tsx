'use client';

import React, { useRef, useEffect } from 'react';

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
}

interface QuizPaper3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  width: number;
  height: number;
  phase: number;
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

export default function Books3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / height) * 2 - 1;
      mousePos.current.targetX = normX * 80;
      mousePos.current.targetY = normY * 60;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Books
    const bookColors = [
      { cover: '#1e40af', spine: '#172554', ribbon: '#fbbf24', label: 'WAEC MATH' },
      { cover: '#0284c7', spine: '#082f49', ribbon: '#38bdf8', label: 'SCIENCE' },
      { cover: '#4338ca', spine: '#1e1b4b', ribbon: '#f43f5e', label: 'ENGLISH' },
      { cover: '#059669', spine: '#022c22', ribbon: '#34d399', label: 'PHYSICS' },
      { cover: '#b45309', spine: '#451a03', ribbon: '#fbbf24', label: 'SOCIAL' },
      { cover: '#7c3aed', spine: '#2e1065', ribbon: '#a78bfa', label: 'CHEMISTRY' },
      { cover: '#0f766e', spine: '#042f2e', ribbon: '#5eead4', label: 'BIOLOGY' },
    ];

    const books: Book3D[] = bookColors.map((c, i) => {
      const angle = (i / bookColors.length) * Math.PI * 2;
      const radius = 220 + (i % 3) * 120;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * (radius * 0.55),
        z: 350 + (i % 4) * 180,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.15,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.007,
        vRotY: (Math.random() - 0.5) * 0.009,
        vRotZ: (Math.random() - 0.5) * 0.006,
        width: 80,
        height: 110,
        thickness: 20,
        color: c.cover,
        spineColor: c.spine,
        ribbonColor: c.ribbon,
        label: c.label
      };
    });

    // Generate Floating Quiz Papers
    const quizPapers: QuizPaper3D[] = Array.from({ length: 8 }).map((_, i) => ({
      x: (Math.random() - 0.5) * 700,
      y: (Math.random() - 0.5) * 450,
      z: 280 + Math.random() * 400,
      vx: (Math.random() - 0.5) * 0.35,
      vy: 0.2 + Math.random() * 0.25,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      width: 48,
      height: 64,
      phase: Math.random() * Math.PI * 2
    }));

    // Floating Glowing Dust Particles
    const particles: Particle3D[] = Array.from({ length: 45 }).map(() => ({
      x: (Math.random() - 0.5) * 900,
      y: (Math.random() - 0.5) * 600,
      z: 200 + Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1.5 + Math.random() * 2.5,
      alpha: 0.2 + Math.random() * 0.5
    }));

    const fov = 500;
    let time = 0;

    // Helper: Project 3D point to 2D screen space with camera parallax
    const project = (x: number, y: number, z: number, camX: number, camY: number) => {
      const adjX = x - camX;
      const adjY = y - camY;
      const scale = fov / (fov + z);
      return {
        x: width / 2 + adjX * scale,
        y: height / 2 + adjY * scale,
        scale,
        depth: z
      };
    };

    // Helper: 3D Vector rotation matrix
    const rotate3D = (
      p: { x: number; y: number; z: number },
      rx: number,
      ry: number,
      rz: number
    ) => {
      // Rotate X
      let y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      let z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
      let x1 = p.x;

      // Rotate Y
      let x2 = x1 * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -x1 * Math.sin(ry) + z1 * Math.cos(ry);
      let y2 = y1;

      // Rotate Z
      let x3 = x2 * Math.cos(rz) - y2 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y2 * Math.cos(rz);
      let z3 = z2;

      return { x: x3, y: y3, z: z3 };
    };

    // Main 60fps render loop
    const render = () => {
      time += 0.016;

      // Smooth mouse parallax lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.06;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.06;
      const camX = mousePos.current.x;
      const camY = mousePos.current.y;

      ctx.clearRect(0, 0, width, height);

      // Deep Blue Cinematic Studio Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#0a192f'); // Deep Midnight Navy
      bgGrad.addColorStop(0.45, '#0f274a'); // Deep Royal Blue
      bgGrad.addColorStop(0.85, '#0b1b36'); // Midnight Indigo
      bgGrad.addColorStop(1, '#050b14'); // Ground Abyss
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Atmospheric Radial Light Spotlights
      const radialGlow = ctx.createRadialGradient(
        width / 2 + camX * 0.5,
        height * 0.35 + camY * 0.5,
        50,
        width / 2,
        height * 0.35,
        width * 0.7
      );
      radialGlow.addColorStop(0, 'rgba(59, 130, 246, 0.28)'); // Electric Royal Glow
      radialGlow.addColorStop(0.5, 'rgba(37, 99, 235, 0.12)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw Floating Glowing Blue Particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -450) p.x = 450;
        if (p.x > 450) p.x = -450;
        if (p.y < -300) p.y = 300;
        if (p.y > 300) p.y = -300;

        const proj = project(p.x, p.y, p.z, camX * 0.3, camY * 0.3);
        const radius = p.radius * proj.scale;

        ctx.beginPath();
        ctx.arc(proj.x, proj.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${p.alpha * proj.scale})`;
        ctx.fill();
      });

      // ── DRAW FLOATING QUIZ PAPERS (EXAMINATION SHEETS) ──
      quizPapers.forEach(paper => {
        paper.x += paper.vx;
        paper.y += paper.vy;
        paper.rotX += 0.005;
        paper.rotY += 0.007;
        paper.rotZ += 0.004;

        if (paper.y > 350) {
          paper.y = -350;
          paper.x = (Math.random() - 0.5) * 600;
        }

        const hw = paper.width / 2;
        const hh = paper.height / 2;

        // Flutter wave
        const flutter = Math.sin(time * 2 + paper.phase) * 4;

        // 4 paper corners
        const corners = [
          { x: -hw, y: -hh, z: flutter },
          { x: hw, y: -hh, z: -flutter },
          { x: hw, y: hh, z: flutter },
          { x: -hw, y: hh, z: -flutter }
        ];

        const projectedCorners = corners.map(c => {
          const r = rotate3D(c, paper.rotX, paper.rotY, paper.rotZ);
          return project(paper.x + r.x, paper.y + r.y, paper.z + r.z, camX, camY);
        });

        // Draw Paper Polygon
        ctx.beginPath();
        ctx.moveTo(projectedCorners[0].x, projectedCorners[0].y);
        for (let i = 1; i < 4; i++) {
          ctx.lineTo(projectedCorners[i].x, projectedCorners[i].y);
        }
        ctx.closePath();

        const avgScale = (projectedCorners[0].scale + projectedCorners[2].scale) / 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.45 * avgScale})`;
        ctx.strokeStyle = `rgba(186, 230, 253, ${0.6 * avgScale})`;
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();

        // Draw subtle quiz lines / checkmark on paper
        if (avgScale > 0.4) {
          const centerX = (projectedCorners[0].x + projectedCorners[2].x) / 2;
          const centerY = (projectedCorners[0].y + projectedCorners[2].y) / 2;
          ctx.font = `bold ${Math.round(10 * avgScale)}px sans-serif`;
          ctx.fillStyle = `rgba(34, 197, 94, ${0.85 * avgScale})`; // Green WAEC Checkmark
          ctx.fillText('✓ A', centerX - 6 * avgScale, centerY);
        }
      });

      // ── DRAW 3D HARDCOVER BOOKS ──
      // Sort books by depth (back to front painter's algorithm)
      const sortedBooks = [...books].sort((a, b) => b.z - a.z);

      sortedBooks.forEach(b => {
        // Continuous slow tumble
        b.x += b.vx;
        b.y += b.vy;
        b.z += b.vz;
        b.rotX += b.vRotX;
        b.rotY += b.vRotY;
        b.rotZ += b.vRotZ;

        // Keep inside bounds
        if (b.x < -480 || b.x > 480) b.vx *= -1;
        if (b.y < -320 || b.y > 320) b.vy *= -1;
        if (b.z < 250 || b.z > 650) b.vz *= -1;

        const hw = b.width / 2;
        const hh = b.height / 2;
        const ht = b.thickness / 2;

        // Define 8 vertices of a 3D book box
        const rawVertices = [
          { x: -hw, y: -hh, z: -ht }, // 0: Top-Left-Front
          { x: hw, y: -hh, z: -ht },  // 1: Top-Right-Front
          { x: hw, y: hh, z: -ht },   // 2: Bottom-Right-Front
          { x: -hw, y: hh, z: -ht },  // 3: Bottom-Left-Front
          { x: -hw, y: -hh, z: ht },  // 4: Top-Left-Back
          { x: hw, y: -hh, z: ht },   // 5: Top-Right-Back
          { x: hw, y: hh, z: ht },    // 6: Bottom-Right-Back
          { x: -hw, y: hh, z: ht }    // 7: Bottom-Left-Back
        ];

        // Rotate and project all vertices
        const projectedVertices = rawVertices.map(v => {
          const r = rotate3D(v, b.rotX, b.rotY, b.rotZ);
          return project(b.x + r.x, b.y + r.y, b.z + r.z, camX, camY);
        });

        // Book 6 Faces [v0, v1, v2, v3, faceType, baseColor]
        const faces = [
          { indices: [0, 1, 2, 3], type: 'cover', color: b.color }, // Front Cover
          { indices: [5, 4, 7, 6], type: 'cover', color: b.color }, // Back Cover
          { indices: [4, 0, 3, 7], type: 'spine', color: b.spineColor }, // Book Spine
          { indices: [1, 5, 6, 2], type: 'pages', color: '#f8fafc' }, // Front Page Edges
          { indices: [4, 5, 1, 0], type: 'pages', color: '#e2e8f0' }, // Top Page Edges
          { indices: [3, 2, 6, 7], type: 'pages', color: '#cbd5e1' }  // Bottom Page Edges
        ];

        // Calculate face normals for backface culling & dynamic lighting
        faces.forEach(face => {
          const p0 = projectedVertices[face.indices[0]];
          const p1 = projectedVertices[face.indices[1]];
          const p2 = projectedVertices[face.indices[2]];

          // Cross product Z-component (determines front/back facing in 2D projection)
          const normalZ = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

          if (normalZ > 0) {
            // Front facing: draw face
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(projectedVertices[face.indices[3]].x, projectedVertices[face.indices[3]].y);
            ctx.closePath();

            // Lighting based on depth & normal
            const avgScale = (p0.scale + p2.scale) / 2;
            const depthFade = Math.min(1, Math.max(0.3, avgScale * 1.3));

            if (face.type === 'cover') {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.95;
              ctx.fill();

              // Cover border / gold foil edge
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
              ctx.lineWidth = 1;
              ctx.stroke();

              // Embossed Subject Label on Front Cover
              if (avgScale > 0.45) {
                const cx = (p0.x + p2.x) / 2;
                const cy = (p0.y + p2.y) / 2;
                ctx.save();
                ctx.translate(cx, cy);
                const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x);
                ctx.rotate(angle);
                ctx.font = `900 ${Math.round(9 * avgScale)}px sans-serif`;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(b.label, 0, 0);
                ctx.restore();
              }
            } else if (face.type === 'spine') {
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.98;
              ctx.fill();

              // Gold rib on spine
              ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
              ctx.lineWidth = 1.5;
              ctx.stroke();
            } else {
              // Page edges (paper stack)
              ctx.fillStyle = face.color;
              ctx.globalAlpha = depthFade * 0.85;
              ctx.fill();
              ctx.strokeStyle = 'rgba(203, 213, 225, 0.5)';
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }

            ctx.globalAlpha = 1;
          }
        });
      });

      // Bottom Studio Ambient Vignette
      const vignette = ctx.createLinearGradient(0, height * 0.7, 0, height);
      vignette.addColorStop(0, 'rgba(5, 11, 20, 0)');
      vignette.addColorStop(1, 'rgba(5, 11, 20, 0.85)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, height * 0.7, width, height * 0.3);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-0"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
}
