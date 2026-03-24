import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-40 bg-brand-primary relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary rounded-l-[100px] -z-10 opacity-20 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
              About Shantiniketan
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 leading-[1.1] tracking-tight">
              Our School Inspires You <span className="text-brand-accent">More.</span>
            </h2>

            <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-medium">
              We are tightly integrating components in a way that will have the most beneficial impact on the development of the child. The core philosophy inspired by the Montessori method drives our curriculum.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-all duration-500">
                  <span className="text-brand-accent group-hover:text-white font-black text-2xl">1</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Quality Education</h4>
                  <p className="text-zinc-300 font-medium">The teachers have been trained intensively on the philosophy and curriculum to provide the highest standard of learning.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent-light/10 border border-brand-accent-light/20 flex items-center justify-center shrink-0 group-hover:bg-brand-accent-light transition-all duration-500">
                  <span className="text-brand-accent-light group-hover:text-white font-black text-2xl">2</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Personalized Learning</h4>
                  <p className="text-zinc-300 font-medium">We nurture individual students' distinct strengths and interests. Each material is designed keeping curriculum objectives in mind.</p>
                </div>
              </div>
            </div>

            <a
              href="/about-us"
              className="inline-block bg-brand-secondary/40 hover:bg-brand-secondary/60 backdrop-blur-xl border border-white/5 text-white px-10 py-5 rounded-2xl font-black tracking-widest shadow-2xl transition-all hover:-translate-y-1.5 active:scale-95"
            >
              DISCOVER MORE
            </a>
          </motion.div>

          {/* Image & Video Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] border-8 border-brand-primary">
              {/* YouTube Video Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/BIkbCnLzTnk?rel=0&modestbranding=1&autoplay=0"
                  title="Santhi Nikethan Global School – Desam Manade Song"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-brand-primary/90 backdrop-blur-3xl text-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10 max-w-[240px]"
            >
              <h3 className="text-6xl font-black mb-2 text-brand-accent">95%</h3>
              <p className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">Student Success Rate</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
