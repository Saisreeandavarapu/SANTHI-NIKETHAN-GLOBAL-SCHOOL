import { motion } from 'framer-motion';
import { Microscope, BrainCircuit, Users, Trophy, GraduationCap, CheckCircle2 } from 'lucide-react';

const METHODS = [
  { name: 'Experiential-based education', icon: Microscope },
  { name: 'Concept mapping', icon: BrainCircuit },
  { name: 'Group work / Team Work', icon: Users },
  { name: 'Genius Competition', icon: Trophy },
  { name: 'Well-developed Academic System', icon: GraduationCap },
  { name: 'Laboratory method of Teaching', icon: CheckCircle2 },
];

export default function WhyShantiniketan() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <div className="inline-block bg-brand-ocean-teal px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-5">
            Why Choose Us
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-8 leading-tight">
            Why <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">Shantiniketan</span> School?
          </h1>

          <p className="text-lg text-blue-100 mb-6 leading-relaxed">
            Our unique teaching methods are designed to foster a deep understanding of the subject matter through experiential, artistic, and laboratory-style learning.
          </p>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            By exploring the subject matter outside the traditional classroom setting, students are able to gain a broader perspective and develop a deeper appreciation for the world around them. We are committed to providing a dynamic and engaging learning environment, where students are empowered to learn outside the box and achieve their full potential.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {METHODS.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div 
                  key={method.name}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 bg-brand-ocean-navy p-4 rounded-xl shadow-sm border border-brand-ocean-cerulean/50 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-ocean-dark/5 text-white flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="font-semibold text-zinc-800 text-sm">{method.name}</span>
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
           <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
             <img src="https://shantiniketanschool.com/public/theme/assets/img/research/05.jpg" alt="Students exploring" className="w-full h-[600px] object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-ocean-dark/60 to-transparent" />
           </div>
           
           {/* Floating abstract decorative box */}
           <motion.div 
            animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-10 -left-10 bg-brand-ocean-navy p-8 rounded-3xl shadow-xl max-w-xs border border-brand-ocean-cerulean/50 hidden md:block"
           >
             <div className="text-white mb-4">
               <Trophy size={40} />
             </div>
             <h4 className="text-xl font-bold text-white mb-2">Meaningful Learning</h4>
             <p className="text-sm text-blue-100">Hands-on approach providing lasting educational experiences.</p>
           </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
