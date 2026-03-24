import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export default function CoreValues() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh] bg-brand-primary">
      <div className="text-center max-w-3xl mx-auto mb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10"
        >
          Shantiniketan School
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]"
        >
          Our <span className="text-brand-accent">Core Values</span>
        </motion.h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-brand-secondary/20 backdrop-blur-2xl p-12 md:p-16 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:text-brand-accent/5 transition-all duration-700">
            <Eye size={180} />
          </div>
          <div className="w-20 h-20 bg-brand-primary border border-brand-accent/30 text-brand-accent rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
            <Eye size={40} />
          </div>
          <h2 className="text-4xl font-black font-heading text-white mb-8 relative z-10 tracking-tight">Our Vision</h2>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed relative z-10">
            Our goal is to provide an environment that enables every child to have opportunities to <span className="text-zinc-200">learn and excel</span>. We encourage students to question, investigate, and acquire skills that make them learners for life.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-brand-primary p-12 md:p-16 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden group text-white"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:text-brand-accent/5 transition-all duration-700">
            <Target size={180} />
          </div>
          <div className="w-20 h-20 bg-brand-secondary/40 border border-brand-accent/20 text-brand-accent rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
            <Target size={40} />
          </div>
          <h2 className="text-4xl font-black font-heading mb-8 relative z-10 tracking-tight">Our Mission</h2>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed relative z-10">
            Our mission is to provide high-quality education and childcare in a <span className="text-zinc-200">safe, respectful, and inclusive</span> environment that builds a strong foundation for lifelong learning and success.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
