import { motion } from 'framer-motion';
import { Microscope, BrainCircuit, Users, Trophy, GraduationCap, CheckCircle2 } from 'lucide-react';

const METHODS = [
  { name: 'Experiential-based education', icon: Microscope },
  { name: 'Concept mapping', icon: BrainCircuit },
  { name: 'Group work / Team Work', icon: Users },
  { name: 'Genius Competition', icon: Trophy },
  { name: 'Academic System', icon: GraduationCap },
  { name: 'Laboratory Method', icon: CheckCircle2 },
];

export default function WhyShantiniketan() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh] bg-brand-primary overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20 items-center px-4">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
            Why Choose Us
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-10 leading-[1.1] tracking-tight">
            Why <span className="text-brand-accent">Shantiniketan</span> School?
          </h1>

          <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-medium">
            Our unique teaching methods are designed to foster a deep understanding of the subject matter through experiential, artistic, and laboratory-style learning.
          </p>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed font-medium opacity-80">
            By exploring the subject matter outside the traditional classroom setting, students gain a broader perspective and develop a deeper appreciation for the world. We are committed to providing a dynamic and engaging learning environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {METHODS.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div 
                  key={method.name}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-brand-secondary/10 backdrop-blur-md border border-white/5 p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-lg">
                    <Icon size={24} />
                  </div>
                  <span className="font-black text-zinc-200 text-xs tracking-tight uppercase">{method.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
           <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-brand-secondary/20">
             <img src="https://shantiniketanschool.com/public/theme/assets/img/research/05.jpg" alt="Students exploring" className="w-full h-[700px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
           </div>
           
           {/* Floating abstract decorative box */}
           <motion.div 
            animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-10 -left-10 bg-brand-secondary/30 backdrop-blur-3xl p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] max-w-xs border border-white/10 hidden md:block"
           >
             <div className="w-16 h-16 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-brand-accent/20">
               <Trophy size={32} />
             </div>
             <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Meaningful Learning</h4>
             <p className="text-zinc-400 font-medium leading-relaxed">Hands-on approach providing lasting educational experiences for every learner.</p>
           </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
