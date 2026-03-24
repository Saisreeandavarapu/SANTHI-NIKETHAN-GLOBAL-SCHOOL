import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  "https://shantiniketanschool.com/public/theme/assets/img/slider/slider-123.jpg",
  "https://shantiniketanschool.com/public/theme/assets/img/slider/slider-122.jpg",
  "https://shantiniketanschool.com/public/theme/assets/img/slider/slider-12.jpg"
];

const FEATURES = [
  { icon: BookOpen, title: 'Quality Education', desc: 'World-class curriculum and digital facilities' },
  { icon: Users, title: 'Expert Faculty', desc: 'Highly trained and experienced mentors' },
  { icon: GraduationCap, title: 'Holistic Growth', desc: 'Focus on all-round character building' },
];

// Faster, snappier animation presets
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-28 lg:py-32 bg-brand-primary">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={currentSlide}
            src={SLIDES[currentSlide]}
            alt="Students at Santhi Nikethan Global School"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-brand-primary/30 z-10" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20 md:pb-80 lg:pb-0">
        <div className="max-w-4xl">
          {/* Pill badge */}
          <motion.div {...fadeUp(0)}>
            <div className="inline-block mb-7 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
              <span className="text-white font-black tracking-[0.2em] text-xs uppercase flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                Admissions Open 2025-26
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-7 leading-[1.05] tracking-tight"
          >
            Shape Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
              Beautiful Future
            </span>
            <br /> With Us.
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            {...fadeUp(0.18)}
            className="text-lg md:text-2xl text-zinc-100/70 mb-10 max-w-2xl leading-relaxed font-medium"
          >
            Embark on a transformative journey of excellence. We provide a broad and balanced approach to raise leaders ready for tomorrow's challenges.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.26)} className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              to="/admissions"
              className="px-10 py-4 bg-brand-accent hover:brightness-110 text-white rounded-2xl font-black tracking-widest transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-accent/20 hover:-translate-y-1 active:scale-95"
            >
              APPLY ONLINE
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/about-us"
              className="px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              LEARN MORE
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="absolute bottom-0 left-0 w-full z-20 lg:translate-y-1/2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="bg-brand-primary/90 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/5 group hover:-translate-y-2 transition-transform duration-300 will-change-transform"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-accent/20">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-400 ${currentSlide === i ? 'w-12 bg-brand-accent' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        onClick={scrollDown}
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 group cursor-pointer"
      >
        <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase group-hover:text-white/70 transition-colors duration-300">
          Scroll
        </span>
        {/* Mouse shell */}
        <div
          className="w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-brand-accent/70 transition-colors duration-300 flex items-start justify-center pt-1.5"
          style={{ boxShadow: '0 0 12px rgba(181,142,49,0.15)' }}
        >
          {/* Wheel dot */}
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-brand-accent"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        {/* Chevrons */}
        <div className="flex flex-col -mt-0.5">
          {[0, 1].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            >
              <ChevronDown size={14} className="text-brand-accent -mt-1" />
            </motion.div>
          ))}
        </div>
      </motion.button>
    </section>
  );
}
