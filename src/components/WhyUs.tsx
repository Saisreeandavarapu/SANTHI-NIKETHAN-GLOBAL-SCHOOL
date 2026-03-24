import { motion } from 'framer-motion';
import { Award, BookOpen, Bus, Star } from 'lucide-react';

const WHY_US_FEATURES = [
  {
    icon: Award,
    title: 'Expert Teachers',
    desc: 'Skilled professionals and experienced mentors dedicated to student excellence.',
  },
  {
    icon: BookOpen,
    title: 'CBSE Pattern',
    desc: 'Strict adherence to CBSE and Govt norms for a globally recognized curriculum.',
  },
  {
    icon: Bus,
    title: 'Safe Transit',
    desc: 'Secure and reliable GPS-enabled transportation across multiple routes.',
  },
  {
    icon: Star,
    title: 'Affordable Excellence',
    desc: 'Premium quality education provided with an accessible fee structure.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-12 md:py-16 bg-brand-primary relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            We Are Expert & Do Our Best For Your <span className="text-brand-accent">Child's Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Our unique teaching methods are designed to foster deep understanding through experiential, artistic, and modern laboratory-style learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {WHY_US_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-brand-secondary/30 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl border border-white/5 group transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-primary border border-brand-accent/30 rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-xl shadow-brand-accent/10">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-300 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-brand-primary/80 backdrop-blur-3xl rounded-[3.5rem] p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between text-white shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/5 relative overflow-hidden mx-4"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-[100px] -ml-20 -mb-20"></div>

          <div className="relative z-10 mb-10 lg:mb-0 lg:max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight">Admissions Open 2025-26</h3>
            <p className="text-zinc-400 text-xl font-medium leading-relaxed">Secure your child's future today. Limited seats available for the upcoming session. Join the legacy of excellence.</p>
          </div>

          <div className="relative z-10 flex gap-5 w-full lg:w-auto flex-col sm:flex-row">
            <a href="/admissions" className="px-12 py-5 bg-brand-accent hover:brightness-110 text-white font-black tracking-widest rounded-2xl text-center shadow-2xl shadow-brand-accent/20 transition-all hover:-translate-y-1.5 active:scale-95">
              APPLY NOW
            </a>
            <a href="/contact" className="px-12 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 text-white font-black tracking-widest rounded-2xl text-center transition-all hover:-translate-y-1.5 active:scale-95">
              CONTACT US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
