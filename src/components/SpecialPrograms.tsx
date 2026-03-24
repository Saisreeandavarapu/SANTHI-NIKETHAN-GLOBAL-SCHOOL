import { motion } from 'framer-motion';
import { useRef } from 'react';

const PROGRAMS = [
  {
    title: 'Integrated Coaching',
    subtitle: 'IIT-JEE | NEET | Civil Services | Olympiad',
    desc: 'Empowering future leaders with top-tier integrated coaching programs designed rigorously for competitive examinations.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    color: 'from-blue-600 to-indigo-900',
  },
  {
    title: 'NEP-CBSE Curriculum',
    subtitle: 'Future-Ready Education',
    desc: 'A comprehensive, modern curriculum strictly aligned with the latest National Education Policy and CBSE guidelines.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    color: 'from-amber-600 to-yellow-900',
  },
  {
    title: 'Day Care Services',
    subtitle: 'For Young Learners',
    desc: 'A secure, warm, and engaging day care facility crafted to support working parents while nurturing children.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80',
    color: 'from-emerald-600 to-teal-900',
  },
  {
    title: 'A/C Classrooms',
    subtitle: 'Comfortable Learning',
    desc: 'Fully air-conditioned, temperature-controlled environments ensuring absolute comfort and focused study.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    color: 'from-cyan-600 to-blue-900',
  },
];

export default function SpecialPrograms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-brand-secondary/20 pointer-events-none" />
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none -mr-40 -mt-40" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 mb-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-6 shadow-xl shadow-brand-accent/20">
            Premium Offerings
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight leading-[1.1] max-w-2xl">
            Exclusive <span className="text-brand-accent">Programs & Facilities</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full z-10">
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-4 md:px-8 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
              className="min-w-[85vw] md:min-w-[450px] lg:min-w-[550px] snap-center relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/10 shrink-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="relative h-[450px] md:h-[550px] p-8 md:p-12 flex flex-col justify-end">
                <div className="transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <span className="text-brand-accent font-black tracking-widest text-xs uppercase mb-4 block drop-shadow-md">
                    {program.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-xl">
                    {program.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-zinc-300 font-medium leading-relaxed opacity-0 transform translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-lg">
                      {program.desc}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 -rotate-45 group-hover:rotate-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
