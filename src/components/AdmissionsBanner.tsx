import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Sparkles, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Particle types for the burst animation
interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
  delay: number;
  shape: 'circle' | 'star' | 'rect';
}

const COLORS = [
  '#B58E31', '#D6C6A2', '#FFD700', '#FFA500',
  '#ffffff', '#fffbe6', '#f9e784', '#e8c547',
];

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 50 + (Math.random() - 0.5) * 20,
    y: 40 + (Math.random() - 0.5) * 20,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 4 + Math.random() * 8,
    angle: (Math.random() * 360 * Math.PI) / 180,
    speed: 80 + Math.random() * 120,
    delay: Math.random() * 0.6,
    shape: (['circle', 'star', 'rect'] as const)[Math.floor(Math.random() * 3)],
  }));
}

const SESSION_KEY = 'sng_banner_shown';
const AUTO_DISMISS_SECONDS = 10;

export default function AdmissionsBanner() {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(AUTO_DISMISS_SECONDS);
  const [particles] = useState(() => generateParticles(60));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Show only once per session
    if (!sessionStorage.getItem(SESSION_KEY)) {
      // Small delay so page renders first
      const showTimer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(showTimer);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          handleClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, '1');
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Circular countdown stroke
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progress = (countdown / AUTO_DISMISS_SECONDS) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Particle Burst */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(p => (
              <motion.div
                key={p.id}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.shape === 'rect' ? p.size * 0.4 : p.size,
                  backgroundColor: p.color,
                  borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'rect' ? '2px' : '0%',
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}88`,
                }}
                initial={{ scale: 0, opacity: 1, x: 0, y: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1.2, 0.8],
                  opacity: [1, 1, 0],
                  x: Math.cos(p.angle) * p.speed,
                  y: Math.sin(p.angle) * p.speed,
                  rotate: Math.random() * 720 - 360,
                }}
                transition={{
                  duration: 1.8 + Math.random() * 0.8,
                  delay: p.delay,
                  ease: 'easeOut',
                  repeat: Infinity,
                  repeatDelay: 2 + Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Banner Card */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: -30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.1 }}
            className="relative w-full max-w-lg md:max-w-2xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #1a2035 0%, #313C52 45%, #252d42 100%)',
              border: '1px solid rgba(181,142,49,0.35)',
              boxShadow: '0 0 60px rgba(181,142,49,0.25), 0 30px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Top gold shimmer band */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, transparent, #B58E31, #FFD700, #B58E31, transparent)',
              }}
            />
            {/* Glow blob */}
            <div
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-40 opacity-25 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, #FFD700 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />

            {/* Close + Countdown */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              {/* Circular countdown */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
                  <motion.circle
                    cx="20" cy="20" r={radius}
                    fill="none"
                    stroke="#B58E31"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    transition={{ duration: 0.9, ease: 'linear' }}
                  />
                </svg>
                <span className="text-xs font-bold text-brand-accent-light tabular-nums">{countdown}</span>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all active:scale-90"
                aria-label="Close banner"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 pt-10 pb-10 flex flex-col items-center text-center gap-5 relative">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.35 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #B58E31 0%, #FFD700 50%, #c9a94a 100%)',
                  boxShadow: '0 0 30px rgba(181,142,49,0.5)',
                }}
              >
                <GraduationCap size={44} className="text-white drop-shadow" />
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-2 flex-wrap justify-center"
              >
                {['2025 – 26', 'New Batch', 'Limited Seats'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                    style={{
                      background: 'rgba(181,142,49,0.15)',
                      border: '1px solid rgba(181,142,49,0.4)',
                      color: '#D6C6A2',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #B58E31 0%, #FFD700 40%, #D6C6A2 70%, #B58E31 100%)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 3s ease infinite',
                  }}
                >
                  ADMISSIONS
                  <br />
                  <span className="text-4xl sm:text-5xl md:text-6xl">NOW OPEN!</span>
                </h2>
              </motion.div>

              {/* School Name */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base font-semibold tracking-widest text-zinc-300 uppercase"
              >
                Santhi Nikethan Global School
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed"
              >
                Nurturing excellence, building character & shaping future leaders. Enrol your child in a world-class learning environment today!
              </motion.p>

              {/* Decorative divider */}
              <div className="flex items-center gap-3 w-full max-w-xs">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brand-accent/50" />
                <Sparkles size={16} className="text-brand-accent" />
                <Star size={12} className="text-brand-accent" fill="currentColor" />
                <Sparkles size={16} className="text-brand-accent" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brand-accent/50" />
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, type: 'spring', stiffness: 200 }}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
              >
                <Link
                  to="/admissions"
                  onClick={handleClose}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-sm sm:text-base tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #B58E31 0%, #FFD700 50%, #c9a94a 100%)',
                    boxShadow: '0 8px 30px rgba(181,142,49,0.45)',
                  }}
                >
                  APPLY NOW <ChevronRight size={18} />
                </Link>
                <button
                  onClick={handleClose}
                  className="flex-1 px-6 py-4 rounded-2xl font-bold text-sm sm:text-base tracking-wide text-zinc-300 hover:text-white transition-all hover:bg-white/10 border border-white/10 active:scale-95"
                >
                  EXPLORE MORE
                </button>
              </motion.div>
            </div>

            {/* Bottom shimmer band */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{
                background: 'linear-gradient(90deg, transparent, #B58E31, #FFD700, #B58E31, transparent)',
              }}
            />
          </motion.div>

          {/* Global shimmer keyframe */}
          <style>{`
            @keyframes shimmer {
              0%   { background-position: 0% 50%; }
              50%  { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
