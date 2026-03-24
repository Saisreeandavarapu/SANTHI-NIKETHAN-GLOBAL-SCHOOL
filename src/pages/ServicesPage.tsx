import { motion } from 'framer-motion';
import SpecialPrograms from '../components/SpecialPrograms';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 bg-brand-secondary/30 pointer-events-none" />
        <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary/80 to-brand-primary pointer-events-none" />

        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/20">
              Our Offerings
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl">
              World-Class <span className="text-brand-accent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Discover our premium educational programs, dedicated coaching, and state-of-the-art facilities crafted to foster holistic development and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Dedicated Programs (Slider) */}
      <SpecialPrograms />

      {/* General Facilities Grid */}
      <Services />
    </>
  );
}
