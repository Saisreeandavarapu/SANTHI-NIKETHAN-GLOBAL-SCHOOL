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
        <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">

          {/* Container */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 md:px-8">

            {WHY_US_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="min-w-[280px] sm:min-w-0 snap-start bg-brand-secondary/30 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-[1.8rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl border border-white/5 group transition-all duration-500"
                >

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-primary border border-brand-accent/30 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-md md:shadow-xl md:shadow-brand-accent/10">
                    <Icon size={24} className="md:hidden" />
                    <Icon size={28} className="hidden md:block" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 md:mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
    mt-10 sm:mt-12 md:mt-16
    bg-brand-primary/80 backdrop-blur-3xl
    rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem]
    p-6 sm:p-8 md:p-12 lg:p-16
    flex flex-col lg:flex-row
    items-center justify-between
    text-white
    shadow-[0_30px_60px_rgba(0,0,0,0.35)] md:shadow-[0_50px_100px_rgba(0,0,0,0.4)]
    border border-white/5
    relative overflow-hidden
    mx-3 sm:mx-4 md:mx-6
  "
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-brand-accent/10 rounded-full blur-[80px] md:blur-[100px] -mr-10 sm:-mr-16 md:-mr-20 -mt-10 sm:-mt-16 md:-mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-brand-secondary/20 rounded-full blur-[80px] md:blur-[100px] -ml-10 sm:-ml-16 md:-ml-20 -mb-10 sm:-mb-16 md:-mb-20"></div>

          {/* Text */}
          <div className="relative z-10 mb-8 sm:mb-10 lg:mb-0 lg:max-w-2xl text-center lg:text-left">
            <h3 className="
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      font-heading font-black
      mb-4 sm:mb-6
      tracking-tight
      leading-tight
    ">
              Admissions Open 2025-26
            </h3>

            <p className="
      text-zinc-300
      text-sm sm:text-base md:text-lg lg:text-xl
      font-medium
      leading-relaxed
      max-w-xl mx-auto lg:mx-0
    ">
              Secure your child's future today. Limited seats available for the upcoming session. Join the legacy of excellence.
            </p>
          </div>

          {/* Buttons */}
          <div className="
    relative z-10
    flex gap-3 sm:gap-4 md:gap-5
    w-full lg:w-auto
    flex-col sm:flex-row
  ">
            <a
              href="/admissions"
              className="
        px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4
        bg-brand-accent hover:brightness-110
        text-white font-bold sm:font-black
        tracking-wide sm:tracking-widest
        rounded-xl sm:rounded-2xl
        text-center
        shadow-lg sm:shadow-2xl shadow-brand-accent/20
        transition-all duration-300
        hover:-translate-y-1 sm:hover:-translate-y-1.5
        active:scale-95
        text-sm sm:text-base
        whitespace-nowrap
      "
            >
              APPLY NOW
            </a>

            <a
              href="/contact"
              className="
        px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4
        bg-white/5 hover:bg-white/10
        backdrop-blur-2xl
        border border-white/10
        text-white font-bold sm:font-black
        tracking-wide sm:tracking-widest
        rounded-xl sm:rounded-2xl
        text-center
        transition-all duration-300
        hover:-translate-y-1 sm:hover:-translate-y-1.5
        active:scale-95
        text-sm sm:text-base
      "
            >
              CONTACT US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
