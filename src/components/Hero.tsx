import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';

const SLIDES = [
  "https://shantiniketanschool.com/public/theme/assets/img/slider/slider-123.jpg",
  "https://shantiniketanschool.com/public/theme/assets/img/slider/slider-122.jpg",
  "https://shantiniketanschool.com/public/theme/assets/img/slider/slider-12.jpg"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-30 lg:py-30 bg-brand-primary">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={currentSlide}
            src={SLIDES[currentSlide]}
            alt="Students in a premium school environment"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-brand-primary/30 z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20 md:pb-80 lg:pb-0">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block mb-8 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <span className="text-white font-black tracking-[0.2em] text-xs uppercase flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                Admissions Open 2025-26
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-8 leading-[1.05] tracking-tight">
              Shape Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
                Beautiful Future
              </span>
              <br /> With Us.
            </h1>

            <p className="text-lg md:text-2xl text-zinc-100/70 mb-12 max-w-2xl leading-relaxed font-medium">
              Embark on a transformative journey of excellence. We provide a broad and balanced approach to raise leaders ready for tomorrow's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <button className="px-10 py-5 bg-brand-accent hover:brightness-110 text-white rounded-2xl font-black tracking-widest transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-brand-accent/20 hover:-translate-y-1.5 active:scale-95">
                APPLY ONLINE
                <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 text-white rounded-2xl font-black tracking-widest transition-all shadow-2xl hover:-translate-y-1.5 active:scale-95">
                CURRICULUM
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 md:translate-y-0 lg:translate-y-1/2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Quality Education', desc: 'World-class curriculum and digital facilities' },
              { icon: Users, title: 'Expert Faculty', desc: 'Highly trained and experienced mentors' },
              { icon: GraduationCap, title: 'Holistic Growth', desc: 'Focus on all-round character building' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                className="bg-brand-primary/90 backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-2xl border border-white/5 group hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-brand-accent/20">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-20 flex gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer shadow-lg ${currentSlide === i ? 'w-14 bg-brand-accent' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
