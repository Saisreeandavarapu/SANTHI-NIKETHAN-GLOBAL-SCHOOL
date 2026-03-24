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
    <section className="relative min-h-screen flex items-center justify-center py-20 lg:py-0 bg-brand-ocean-dark">
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ocean-dark/95 via-brand-darkblue/80 to-brand-darkblue/30 z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20 md:pb-80 lg:pb-0">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-ocean-navy/10 backdrop-blur-md border border-white/20">
              <span className="text-white font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-ocean-dark animate-pulse" />
                Admissions Open 2025-26
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-[1.1]">
              Shape Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream to-amber-50">
                Beautiful Future
              </span>
              <br /> With Us.
            </h1>

            <p className="text-lg md:text-xl text-blue-100/60 mb-10 max-w-2xl leading-relaxed">
              Embark on a transformative journey of knowledge and wisdom. We provide a broad and balanced approach to raise students ready for tomorrow's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-8 py-4 bg-brand-ocean-teal hover:bg-brand-ocean-cerulean text-white rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-brand-cream/20 hover:-translate-y-1">
                Apply Admission Online
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-brand-ocean-navy/10 hover:bg-brand-ocean-navy/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold tracking-wide transition-all shadow-xl hover:-translate-y-1">
                Explore Curriculum
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 md:translate-y-0 lg:translate-y-1/2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'Quality Education', desc: 'World-class curriculum and facilities' },
              { icon: Users, title: 'Expert Faculty', desc: 'Highly trained and experienced teachers' },
              { icon: GraduationCap, title: 'Holistic Growth', desc: 'Focus on all-round development' },
            ].map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }} className="bg-brand-ocean-navy p-8 rounded-3xl shadow-xl shadow-brand-darkblue/10 border border-brand-ocean-cerulean/50 group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-brand-ocean-teal rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === i ? 'w-10 bg-brand-ocean-dark' : 'w-2 bg-brand-ocean-navy/50 hover:bg-brand-ocean-navy'}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
