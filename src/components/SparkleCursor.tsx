import { useEffect, useRef, useCallback } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  el: HTMLDivElement;
}

const COLORS = ['#B58E31', '#FFD700', '#D6C6A2', '#ffffff', '#f9e784'];

let idCounter = 0;

export default function SparkleCursor() {
  const poolRef = useRef<Spark[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const lastPos = useRef({ x: -999, y: -999 });
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const createSpark = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;

    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const size = 4 + Math.random() * 6;
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.2 + Math.random() * 2;

    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color};
      left: 0;
      top: 0;
      will-change: transform, opacity;
      transform: translate(${x}px, ${y}px);
      opacity: 1;
    `;
    containerRef.current.appendChild(el);

    const spark: Spark = {
      id: idCounter++,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      life: 0,
      maxLife: 40 + Math.random() * 20,
      size,
      color,
      el,
    };

    poolRef.current.push(spark);
  }, []);

  const animate = useCallback(() => {
    poolRef.current = poolRef.current.filter(spark => {
      spark.life++;
      spark.vy += 0.08; // gravity
      spark.x += spark.vx;
      spark.y += spark.vy;
      const progress = spark.life / spark.maxLife;
      const opacity = 1 - progress;
      const scale = 1 - progress * 0.5;
      spark.el.style.transform = `translate(${spark.x}px, ${spark.y}px) scale(${scale})`;
      spark.el.style.opacity = String(opacity);

      if (spark.life >= spark.maxLife) {
        spark.el.remove();
        return false;
      }
      return true;
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't run on touch devices to avoid slowdowns
    if (isTouch) return;

    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99999;';
    document.body.appendChild(container);
    containerRef.current = container;

    rafRef.current = requestAnimationFrame(animate);

    let throttleTimer = 0;
    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - throttleTimer < 30) return; // ~33fps throttle
      throttleTimer = now;

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 8) return; // don't emit if barely moved

      lastPos.current = { x: e.clientX, y: e.clientY };

      // Emit 2-3 sparks per move
      const count = 2 + Math.floor(Math.random() * 2);
      for (let k = 0; k < count; k++) {
        createSpark(e.clientX + (Math.random() - 0.5) * 8, e.clientY + (Math.random() - 0.5) * 8);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      container.remove();
    };
  }, [animate, createSpark, isTouch]);

  return null; // renders nothing to DOM via React — uses imperative DOM
}
