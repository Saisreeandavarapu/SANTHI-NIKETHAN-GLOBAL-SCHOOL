import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-40 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] -z-10 opacity-50 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-brand-darkblue px-4 py-1.5 rounded-full text-brand-cream font-bold text-sm tracking-wider uppercase mb-6">
              About Shantiniketan
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-darkblue mb-8 leading-tight">
              Our School Inspires You <span className="bg-brand-darkblue text-brand-cream px-2 rounded-lg whitespace-nowrap">More.</span>
            </h2>

            <p className="text-lg text-brand-slate mb-8 leading-relaxed">
              We are tightly integrating components in a way that will have the most beneficial impact on the development of the child. The core philosophy inspired by the Montessori method drives the curriculum, and the curriculum is the foundation for the tools and materials used in the school.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-darkblue mb-2">Quality Education</h4>
                  <p className="text-brand-slate">The teachers have been trained intensively on the philosophy, curriculum, and the materials to provide the highest standard of learning.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-darkblue mb-2">Personalized Learning</h4>
                  <p className="text-brand-slate">We nurture individual students' distinct strengths, weaknesses, competencies, and interests. Each material is designed keeping curriculum objectives in mind.</p>
                </div>
              </div>
            </div>

            <a
              href="#admissions"
              className="inline-block bg-brand-darkblue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all"
            >
              Discover More
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img
                src="https://shantiniketanschool.com/public/theme/assets/img/about/01.png"
                alt="Students learning"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-100"
              />
              <div className="absolute inset-0 bg-brand-darkblue/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Play Video Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-brand-darkblue shadow-lg hover:scale-110 transition-transform cursor-pointer pl-1 group-hover:bg-brand-navy group-hover:text-brand-cream">
                  <Play size={32} className="fill-current" />
                </button>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-brand-cream text-white p-8 rounded-2xl shadow-xl max-w-[200px]"
            >
              <h3 className="text-5xl font-extrabold mb-2">95%</h3>
              <p className="font-bold text-sm uppercase tracking-wide opacity-90">Student Success Rate</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
