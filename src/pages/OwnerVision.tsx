import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function OwnerVision() {
  return (
    <main className="pt-32 pb-10 container mx-auto px-4 max-w-7xl bg-brand-primary">
      {/* Top Vision Section */}
      <div className="flex flex-col md:flex-row gap-16 items-start mb-28 px-4">

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          className="md:w-5/12 relative mt-4"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative border border-white/5">
            <img
              src="https://shantiniketanschool.com/public/theme/assets/img/research/01.jpg"
              alt="Aditi Ambre - School Owner"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full backdrop-blur-sm bg-brand-primary/40">
              <h2 className="text-4xl font-black font-heading text-white mb-2 tracking-tight">ADITI AMBRE</h2>
              <p className="text-brand-accent font-black tracking-[0.2em] uppercase text-xs">School Owner & Visionary</p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-brand-accent/20 border-4 border-brand-primary">
            <Quote size={48} fill="currentColor" strokeWidth={0} />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-7/12 lg:w-6/12 px-4 md:px-0"
        >
          {/* Section Tag */}
          <div className="inline-block bg-brand-accent px-4 py-1 sm:px-5 sm:py-1 rounded-full text-white font-black text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-4 shadow-xl shadow-brand-accent/10">
            Vision & Philosophy
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-xl  lg:text-3xl font-heading font-black text-white mb-8 sm:mb-3 leading-snug sm:leading-tight tracking-tight">
            "Embrace a learner-focused <br />
            <span className="text-brand-accent">curriculum for results."</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 sm:space-y-8 text-base sm:text-xs md:text-sm text-zinc-400 leading-relaxed font-medium mb-10 sm:mb-8">
            <p>
              Personalized learning encompasses an educational methodology customized to individual students' distinct strengths, weaknesses, competencies, and interests. This approach entails adapting the learning environment, instructional pace, and curriculum to align with each learner's specific requirements.
            </p>
            <p className="pl-4 sm:pl-6 md:pl-8 border-l-4 border-brand-accent bg-brand-secondary/20 backdrop-blur-xl rounded-r-2xl py-6 sm:py-4 pr-4 sm:pr-8 text-white font-bold shadow-2xl">
              By harnessing technology, data, and tailored lesson plans, educators can craft a more individualized learning experience, thereby nurturing student engagement and fostering academic achievement.
            </p>
            <p>
              Our enriched curriculum encompasses a diverse array of activities tailored to accommodate various learning styles. It provides comprehensive elucidation of concepts to engage learners with multiple intelligences.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {['Experiential-based education', 'Concept mapping', 'Group work/ Team Work', 'Genius Competition'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 bg-brand-secondary/10 backdrop-blur-md border border-white/5 p-4 sm:p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <CheckCircle2 className="text-brand-accent shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-black text-zinc-200 text-xs sm:text-sm tracking-tight uppercase">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Team and Community Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-secondary/20 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden mx-4 md:mx-6"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-brand-accent/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] -mr-16 sm:-mr-24 md:-mr-32 -mt-12 sm:-mt-16 md:-mt-20 pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-4 sm:mb-6 tracking-tight">
            Our Team & <span className="text-brand-accent">Community</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium leading-relaxed italic opacity-80">
            "At the core of our approach to education is that it should be joyful, meaningful and challenging. Students exposed to this approach will always achieve more."
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Text Column */}
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
            <p>
              The child is at the center of all that we are doing, and our approach is broad and balanced, to help raise them ready for the future. Skills are just as important as knowledge.
            </p>
            <p className="text-zinc-200">
              Understanding is the key to knowledge, which leads to great academic results. Students are encouraged to be critical learners.
            </p>
            <p className="bg-brand-primary/50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-brand-accent/20 font-bold text-zinc-200 shadow-2xl border-l-4 border-l-brand-accent">
              Our teachers are designers of classrooms - exploring design thinking, developing critical thinking and logical reasoning. They are facilitators, making students think out of the box.
            </p>
          </div>

          {/* Image Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 h-auto">
            <div className="flex flex-col gap-4 md:translate-y-2">
              <img src="https://shantiniketanschool.com/public/theme/assets/img/research/02.jpg" className="rounded-xl md:rounded-2xl object-cover h-44 sm:h-52 md:h-56 lg:h-64 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="Students in Classroom" />
              <img src="https://shantiniketanschool.com/public/theme/assets/img/research/04.jpg" className="rounded-xl md:rounded-2xl object-cover h-36 sm:h-44 md:h-48 lg:h-52 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="Student Reading" />
            </div>
            <div className="flex flex-col gap-4 md:-translate-y-2">
              <img src="https://shantiniketanschool.com/public/theme/assets/img/research/03.jpg" className="rounded-xl md:rounded-2xl object-cover h-36 sm:h-44 md:h-48 lg:h-52 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="Student Presentation" />
              <img src="https://shantiniketanschool.com/public/theme/assets/img/course/single.jpg" className="rounded-xl md:rounded-2xl object-cover h-44 sm:h-52 md:h-56 lg:h-64 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="School Activity" />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
