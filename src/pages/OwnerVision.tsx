import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function OwnerVision() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl bg-brand-primary">
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
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-7/12"
        >
          <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
            Vision & Philosophy
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 leading-[1.1] tracking-tight">
            "Embrace a learner-focused <br /> <span className="text-brand-accent">curriculum for results."</span>
          </h2>

          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-medium mb-12">
            <p>
              Personalized learning encompasses an educational methodology customized to individual students' distinct strengths, weaknesses, competencies, and interests. This approach entails adapting the learning environment, instructional pace, and curriculum to align with each learner's specific requirements.
            </p>
            <p className="pl-8 border-l-4 border-brand-accent bg-brand-secondary/20 backdrop-blur-xl rounded-r-[2rem] py-8 pr-8 text-white font-bold shadow-2xl">
              By harnessing technology, data, and tailored lesson plans, educators can craft a more individualized learning experience, thereby nurturing student engagement and fostering academic achievement.
            </p>
            <p>
              Our enriched curriculum encompasses a diverse array of activities tailored to accommodate various learning styles. It provides comprehensive elucidation of concepts to engage learners with multiple intelligences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {['Experiential-based education', 'Concept mapping', 'Group work/ Team Work', 'Genius Competition'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-brand-secondary/10 backdrop-blur-md border border-white/5 p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <CheckCircle2 className="text-brand-accent shrink-0 group-hover:scale-110 transition-transform" size={28} />
                <span className="font-black text-zinc-200 text-sm tracking-tight uppercase">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Team and Community Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-secondary/20 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden mx-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />

        <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
          <h2 className="text-xl md:text-5xl font-heading font-black text-white mb-8 tracking-tight">
            Our Team & <span className="text-brand-accent">Community</span>
          </h2>
          <p className="text-xl text-zinc-300 font-medium leading-relaxed italic opacity-80">
            "At the core of our approach to education is that it should be joyful, meaningful and challenging. This is great learning and students exposed to this approach will always achieve more both academically and socially."
          </p>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-xl text-zinc-400 font-medium leading-relaxed">
            <p>
              The child is at the center of all that we are doing, and our approach is broad and balanced, to help raise them ready for the future. A future that in some ways is known and in many ways is not. We are in an age where skills are just as important as knowledge.
            </p>
            <p className="text-zinc-200">
              We believe that understanding is the key to knowledge, which will then naturally lead to great academic results. Students are encouraged to be critical learners and to be involved in their own learning process.
            </p>
            <p className="bg-brand-primary/50 p-10 rounded-[3rem] border border-brand-accent/20 font-bold text-zinc-200 shadow-2xl border-l-8 border-l-brand-accent">
              Our teachers are the designers of classrooms - exploring design thinking, developing critical thinking and logical reasoning capabilities. They are facilitators, making students think out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 md:gap-6 h-full relative">
            <div className="md:space-y-6 md:translate-y-12">
              <img src="https://shantiniketanschool.com/public/theme/assets/img/research/02.jpg" className="rounded-[3rem] object-cover h-80 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="Students in Classroom" />
              <img src="https://shantiniketanschool.com/public/theme/assets/img/research/04.jpg" className="rounded-[3rem] object-cover h-64 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="Student Reading" />
            </div>
            <div className="  md:space-y-6 md:-translate-y-6">
              <img src="https://shantiniketanschool.com/public/theme/assets/img/research/03.jpg" className="rounded-[3rem] object-cover h-64 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="Student Presentation" />
              <img src="https://shantiniketanschool.com/public/theme/assets/img/course/single.jpg" className="rounded-[3rem] object-cover h-80 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5" alt="School Activity" />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
