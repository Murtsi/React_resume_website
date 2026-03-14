import { useEffect, useRef } from 'react';

/**
 * Canvas-based particle constellation background.
 * Particles drift slowly; nearby ones connect with thin lines.
 * Mouse repulsion pushes particles away from the cursor.
 * Adapts colours to dark / light mode automatically.
 *
 * Usage (inside a `position: relative` parent):
 *   <AnimatedBackground className="absolute inset-0 w-full h-full" />
 *   <div className="relative z-10">…content…</div>
 */
export default function AnimatedBackground({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 110 };
    const PARTICLE_COUNT = 58;
    const MAX_DIST = 130;          // px — max connection distance
    const SPEED = 0.28;            // base drift speed

    // ── colour helpers ──────────────────────────────────────────────
    const dark = () => document.documentElement.classList.contains('dark');

    const particleColor = () =>
      dark()
        ? Math.random() > 0.65
          ? 'rgba(196, 103, 74, 0.65)'   // terracotta
          : 'rgba(90, 116, 144, 0.55)'   // navy-300
        : Math.random() > 0.65
          ? 'rgba(196, 103, 74, 0.45)'
          : 'rgba(45, 80, 110, 0.35)';

    const lineColor = (a) =>
      dark()
        ? `rgba(228, 224, 219, ${a})`    // cream-300
        : `rgba(30,  51,  71,  ${a})`;   // navy-700

    // ── particle class ───────────────────────────────────────────────
    class Particle {
      constructor() {
        this.x  = Math.random() * canvas.width;
        this.y  = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * SPEED;
        this.vy = (Math.random() - 0.5) * SPEED;
        this.r  = Math.random() * 1.4 + 0.6;
        this.color = particleColor();
      }

      update() {
        // wrap edges
        if (this.x >  canvas.width  + 4) this.x = -4;
        if (this.x < -4)                 this.x = canvas.width  + 4;
        if (this.y >  canvas.height + 4) this.y = -4;
        if (this.y < -4)                 this.y = canvas.height + 4;

        // mouse repulsion
        if (mouse.x !== null) {
          const dx   = mouse.x - this.x;
          const dy   = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const f = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * f * 1.8;
            this.y -= (dy / dist) * f * 1.8;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // ── init / resize ────────────────────────────────────────────────
    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    };

    // ── draw connections ─────────────────────────────────────────────
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx   = particles[a].x - particles[b].x;
          const dy   = particles[a].y - particles[b].y;
          const dist = dx * dx + dy * dy;
          if (dist < MAX_DIST * MAX_DIST) {
            const alpha = (1 - Math.sqrt(dist) / MAX_DIST) * 0.13;
            ctx.strokeStyle = lineColor(alpha);
            ctx.lineWidth   = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // ── animation loop ───────────────────────────────────────────────
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
    };

    // ── event handlers ───────────────────────────────────────────────
    const onResize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize',     onResize);
    canvas.addEventListener('mousemove',  onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize',     onResize);
      canvas.removeEventListener('mousemove',  onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
