import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export default function CoreValues() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-brand-ocean-teal px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-5"
        >
          Shantiniketan School
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6"
        >
          Our <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">Core Values</span>
        </motion.h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-brand-ocean-navy p-10 rounded-3xl shadow-xl border border-brand-ocean-cerulean/50 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors duration-500">
            <Eye size={120} />
          </div>
          <div className="w-16 h-16 bg-brand-ocean-teal text-white rounded-2xl flex items-center justify-center mb-8 shadow-md">
            <Eye size={32} />
          </div>
          <h2 className="text-3xl font-bold font-heading text-white mb-4 relative z-10">Our Vision</h2>
          <p className="text-lg text-blue-100 leading-relaxed relative z-10">
            Our Goal is to provide an environment that enables every child to have opportunities to learn and enable all-round development. The children are encouraged to question, investigate and acquire skills that will make them learners of life. We provide value-based education; hence our curriculum is based essentially on the Montessori philosophy and approach.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-brand-ocean-dark p-10 rounded-3xl shadow-xl relative overflow-hidden group text-white"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-cream/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors duration-500">
            <Target size={120} />
          </div>
          <div className="w-16 h-16 bg-brand-ocean-dark text-white rounded-2xl flex items-center justify-center mb-8 shadow-md relative z-10">
            <Target size={32} />
          </div>
          <h2 className="text-3xl font-bold font-heading mb-4 relative z-10">Our Mission</h2>
          <p className="text-lg text-blue-100/60 leading-relaxed relative z-10">
            Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
