"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="pt-12 sm:pt-16 md:pt-36 pb-10 sm:pb-14 md:pb-16 bg-brand-primary relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary rounded-l-[80px] -z-10 opacity-20 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag */}
            <div className="inline-block bg-brand-accent px-4 py-2 rounded-full text-white font-black text-[10px] sm:text-xs tracking-widest uppercase mb-6 shadow-lg">
              About Shantiniketan
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Our School Inspires You{" "}
              <span className="text-brand-accent">More.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 md:mb-8 leading-relaxed font-medium">
              We are tightly integrating components in a way that will have the most beneficial impact on the development of the child. The core philosophy inspired by the Montessori method drives our curriculum.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-6 mb-8 md:mb-10">

              {/* Item 1 */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition">
                  <span className="text-brand-accent group-hover:text-white font-black text-lg sm:text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white mb-1">
                    Quality Education
                  </h4>
                  <p className="text-zinc-300 text-sm sm:text-base">
                    The teachers are trained to provide the highest standard of learning.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent-light/10 border border-brand-accent-light/20 flex items-center justify-center shrink-0 group-hover:bg-brand-accent-light transition">
                  <span className="text-brand-accent-light group-hover:text-white font-black text-lg sm:text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white mb-1">
                    Personalized Learning
                  </h4>
                  <p className="text-zinc-300 text-sm sm:text-base">
                    We nurture each student's strengths and interests individually.
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}
            <a
              href="/about-us"
              className="inline-block bg-brand-secondary/40 hover:bg-brand-secondary/60 backdrop-blur-xl border border-white/5 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold tracking-wide sm:tracking-widest shadow-xl transition-all hover:-translate-y-1 active:scale-95 text-sm sm:text-base"
            >
              DISCOVER MORE
            </a>
          </motion.div>

          {/* IMAGE / VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Video */}
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border-4 sm:border-6 md:border-8 border-brand-primary">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/BIkbCnLzTnk?rel=0&modestbranding=1"
                  title="School Video"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Badge (FIXED POSITION) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-brand-primary/90 backdrop-blur-xl text-white p-4 sm:p-6 rounded-2xl shadow-xl border border-white/10"
            >
              <h3 className="text-2xl sm:text-4xl font-black text-brand-accent">
                95%
              </h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">
                Success Rate
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}