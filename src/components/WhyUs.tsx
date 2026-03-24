import { motion } from 'framer-motion';
import { Award, BookOpen, Bus, Star } from 'lucide-react';

const WHY_US_FEATURES = [
  {
    icon: Award,
    title: 'Expert Teachers',
    desc: 'Skilled professionals and experienced teachers dedicated to student development.',
  },
  {
    icon: BookOpen,
    title: 'CBSE Pattern',
    desc: 'All norms laid out by the Government as well as CBSE adhered to strictly.',
  },
  {
    icon: Bus,
    title: 'Bus Facilities',
    desc: 'We provide safe and reliable bus facilities for various locations.',
  },
  {
    icon: Star,
    title: 'Affordable Price',
    desc: 'Premium quality education provided on highly economical fees.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-ocean-dark relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-ocean-teal px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-6"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6"
          >
            We Are Expert & Do Our Best For Your <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">Child's Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100"
          >
            Our unique teaching methods are designed to foster a deep understanding of the subject matter through experiential, artistic, and laboratory-style learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-brand-ocean-navy p-8 rounded-2xl shadow-lg border border-slate-100 group"
              >
                <div className="w-16 h-16 bg-brand-ocean-dark rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-brand-ocean-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
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
           className="mt-20 bg-brand-ocean-dark rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ocean-navy/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-ocean-dark/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 mb-8 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">Admissions Open For 2025-2026 Session</h3>
            <p className="text-slate-300 text-lg max-w-xl">Hurry up! Limited seats are available. Join us and give your child the foundation they deserve.</p>
          </div>
          
          <div className="relative z-10 flex gap-4 w-full md:w-auto flex-col sm:flex-row">
            <a href="#apply" className="px-8 py-4 bg-brand-ocean-dark text-white font-bold rounded-full text-center hover:bg-yellow-400 transition-colors shadow-lg">
              Apply Now
            </a>
            <a href="#contact" className="px-8 py-4 bg-brand-ocean-navy/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full text-center hover:bg-brand-ocean-navy/20 transition-colors">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
