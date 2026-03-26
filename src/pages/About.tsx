"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="pt-32 pb-10 md:pb-4 container mx-auto px-4 max-w-7xl min-h-[60vh] bg-brand-primary">

      <div className="flex flex-col md:flex-row gap-16 items-center mb-16 md:mb-20 px-4">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
            30 Years Of Excellence
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-10 leading-[1.1] tracking-tight">
            Our Shantiniketan School <br />
            <span className="text-brand-accent">Inspires You More.</span>
          </h1>

          <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-medium">
            Our enriched curriculum encompasses a diverse array of activities tailored to accommodate various learning styles. It provides comprehensive elucidation of concepts to engage learners with multiple intelligences.
          </p>

          <p className="text-xl text-zinc-400 mb-4 leading-relaxed font-medium">
            Emphasizing activity-based learning, it fosters student-driven problem-solving approaches and facilitates opportunities for extending and enhancing the learning experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 grid grid-cols-2 gap-6 relative"
        >
          <div className="absolute -inset-10 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

          <img src="https://shantiniketanschool.com/public/theme/assets/img/about/02.png" alt="" className="rounded-[2.5rem] object-cover h-80 w-full shadow-2xl border border-white/5 relative z-10" />

          <img src="https://shantiniketanschool.com/public/theme/assets/img/about/03.png" alt="" className="rounded-[2.5rem] object-cover h-80 w-full shadow-2xl border border-white/5 mt-12 relative z-10" />
        </motion.div>
      </div>

      <div className="bg-brand-secondary/30 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 text-white shadow-[0_40px_100px_rgba(0,0,0,0.3)] relative overflow-hidden border border-white/5 mx-4 mb-16 md:mb-20">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 relative z-10">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
            <div className="w-16 h-16 bg-brand-primary border border-brand-accent/30 rounded-2xl flex items-center justify-center text-3xl font-black text-brand-accent mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
              1
            </div>
            <h3 className="text-3xl font-black font-heading mb-6 tracking-tight">Quality Education</h3>
            <p className="text-zinc-400 text-xl leading-relaxed font-medium">
              The teachers have been trained intensively on the philosophy, curriculum and the materials. We ensure the highest standard of guidance for every student.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group">
            <div className="w-16 h-16 bg-brand-primary border border-brand-accent/30 rounded-2xl flex items-center justify-center text-3xl font-black text-brand-accent mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
              2
            </div>
            <h3 className="text-3xl font-black font-heading mb-6 tracking-tight">Personalized Learning</h3>
            <p className="text-zinc-400 text-xl leading-relaxed font-medium">
              Targeting individual students' distinct strengths, weaknesses, competencies, and interests. Enhancing educational spaces by integrating advanced technological tools.
            </p>
          </motion.div>

        </div>
      </div>

      {/* TEAM */}
      <div className="mt-20 md:mt-24 mb-10 md:mb-12 text-center px-4">
        <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
          Our Team
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]">
          Highly Skilled <span className="text-brand-accent">Management</span>
        </h2>

        <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">
          We believe in skilled professionals and experienced teachers who are dedicated to nurturing the leaders of tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 md:mb-20 px-4">
        {[
          { name: 'ANISHA AZAD', role: 'Associate Manager', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/01.jpg' },
          { name: 'BHAGYASHREE KADAM', role: 'Admin Head', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/02.jpg' },
          { name: 'MANORAMA SINGH', role: 'Coordinator', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/03.jpg' },
          { name: 'SAMIKSHA SHINDE', role: 'Associate Admin', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/04.jpg' },
        ].map((staff, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-brand-secondary/20 backdrop-blur-2xl rounded-[3rem] p-5 border border-white/5 group hover:-translate-y-3 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">

            <div className="rounded-[2.2rem] overflow-hidden mb-8 aspect-square bg-brand-primary relative">
              <img src={staff.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
            </div>

            <div className="text-center pb-4">
              <h4 className="text-xl font-black font-heading text-white mb-1 tracking-tight">{staff.name}</h4>
              <p className="text-xs font-black text-brand-accent uppercase tracking-[0.15em]">{staff.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 pb-4">
        {[
          { label: 'Years of Service', value: '30+' },
          { label: 'Students Enrolled', value: '600+' },
          { label: 'Skilled Lecturers', value: '35+' },
          { label: 'Academic Branches', value: '2+' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-brand-primary/40 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/5 text-center hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group shadow-2xl"
          >
            <h4 className="text-5xl font-black text-brand-accent mb-4 tracking-tighter">
              {stat.value}
            </h4>
            <p className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

    </main>
  );
}