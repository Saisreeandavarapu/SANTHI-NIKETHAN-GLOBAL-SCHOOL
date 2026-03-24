import { motion } from 'framer-motion';
import {
  BookOpen,
  FlaskConical,
  Palette,
  Music,
  Trophy,
  Bus,
  ShieldCheck,
  Dumbbell,
} from 'lucide-react';

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Smart Classrooms',
    desc: 'Technology-enabled interactive classrooms with digital boards and audio-visual tools for immersive learning.',
    color: 'from-amber-500 to-yellow-400',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratory',
    desc: 'Fully equipped, safe, and modern science labs that encourage hands-on experimentation and discovery.',
    color: 'from-sky-500 to-blue-400',
  },
  {
    icon: Palette,
    title: 'Arts & Creativity',
    desc: 'A vibrant arts program that nurtures creative expression through painting, crafts, and visual arts.',
    color: 'from-rose-500 to-pink-400',
  },
  {
    icon: Music,
    title: 'Music & Dance',
    desc: 'Professional music and dance classes that cultivate rhythm, culture, and artistic confidence.',
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: Trophy,
    title: 'Sports & Competitions',
    desc: 'Year-round inter-school competitions and sports programs to build teamwork and a winning spirit.',
    color: 'from-emerald-500 to-green-400',
  },
  {
    icon: Bus,
    title: 'GPS Transportation',
    desc: 'Safe, GPS-tracked school buses covering multiple routes to ensure every student arrives safely.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    desc: 'CCTV-monitored campus with trained staff to maintain a safe and secure environment at all times.',
    color: 'from-teal-500 to-cyan-400',
  },
  {
    icon: Dumbbell,
    title: 'Physical Education',
    desc: 'Structured PE curriculum and modern sports grounds to promote physical fitness and team spirit.',
    color: 'from-red-500 to-rose-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-4 bg-brand-primary relative overflow-hidden">
      {/* Background glows - optimized */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -ml-40 -mt-40 md:-ml-80 md:-mt-80" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-secondary/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -mr-40 -mb-40 md:-mr-60 md:-mb-60" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-4xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            World-Class Facilities For Every{' '}
            <span className="text-brand-accent">Learner</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 font-medium leading-relaxed"
          >
            From cutting-edge labs to vibrant arts programs, our comprehensive
            services are designed to nurture every dimension of your child's
            potential.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-brand-secondary/30 backdrop-blur-md p-8 md:p-9 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-white/10 overflow-hidden group transition-all duration-300 cursor-pointer hover:shadow-brand-accent/20 hover:border-brand-accent/30"
              >
                {/* Glow Effect on Hover - simplified */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white mb-3 md:mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 font-medium leading-relaxed text-sm group-hover:text-zinc-300 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 mx-4 bg-gradient-to-r from-brand-primary via-brand-secondary/20 to-brand-primary backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-brand-accent font-black tracking-[0.2em] text-xs uppercase mb-6">
              Enroll Today
            </p>
            <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-8 tracking-tight leading-tight">
              Give Your Child the Best Start in Life
            </h3>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/admissions"
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-5 bg-brand-accent hover:brightness-110 text-white font-black tracking-wide sm:tracking-widest rounded-2xl text-center shadow-2xl shadow-brand-accent/20 transition-all hover:-translate-y-1.5 active:scale-95 text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                APPLY NOW
              </a>
              <a
                href="/contact"
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-5 bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 text-white font-black tracking-wide sm:tracking-widest rounded-2xl text-center transition-all hover:-translate-y-1.5 active:scale-95 text-xs sm:text-sm md:text-base"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
