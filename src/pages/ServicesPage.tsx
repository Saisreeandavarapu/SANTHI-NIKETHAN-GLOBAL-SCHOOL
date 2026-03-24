import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Trophy } from 'lucide-react';
import SpecialPrograms from '../components/SpecialPrograms';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-primary">
        {/* Static Background Mesh (Optimized for performance) */}
        <div className="absolute inset-0 bg-brand-secondary/20 pointer-events-none" />
        <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-primary/80 pointer-events-none" />

        {/* Static Glows (Removed animations for performance) */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"
        />
        <div 
          className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pt-10 lg:pt-0"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6 sm:mb-8 shadow-2xl"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent" />
                <span>Our Premium Offerings</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl"
              >
                World-Class <br className="hidden sm:block lg:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Services</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-zinc-300 font-medium leading-relaxed drop-shadow-md mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Discover our premium educational programs, dedicated coaching, and state-of-the-art facilities crafted to foster holistic development and academic excellence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-brand-accent/20 active:scale-95 text-sm sm:text-base">
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#special-programs" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95 text-sm sm:text-base">
                  View Programs
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-[4/5] rounded-[3rem] shadow-2xl shadow-brand-accent/20 group">
                {/* Image Container with Overflow Hidden */}
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/20 transition-all duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" 
                    alt="Students in premium library"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-8 lg:-left-6 xl:-left-12 z-20 bg-brand-secondary/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-accent/30">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg">Top Rated</h4>
                    <p className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Educational Campus</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Special Dedicated Programs (Slider) */}
      <div id="special-programs">
        <SpecialPrograms />
      </div>

      {/* General Facilities Grid */}
      <Services />
    </>
  );
}
