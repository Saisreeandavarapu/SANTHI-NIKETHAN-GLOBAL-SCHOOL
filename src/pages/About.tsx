import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh]">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="inline-block bg-brand-darkblue px-4 py-1.5 rounded-full text-brand-cream font-bold text-sm tracking-wider uppercase mb-5">
            30 Years Of Quality Service
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-darkblue mb-6 leading-tight">
            Our Shantiniketan School <br /> <span className="bg-brand-darkblue text-brand-cream px-2 rounded-lg whitespace-nowrap">Inspires You More.</span>
          </h1>
          <p className="text-lg text-brand-slate mb-6 leading-relaxed">
            Our enriched curriculum encompasses a diverse array of activities tailored to accommodate various learning styles. It provides comprehensive elucidation of concepts to engage learners with multiple intelligences.
          </p>
          <p className="text-lg text-brand-slate mb-8 leading-relaxed">
            Emphasizing activity-based learning, it fosters student-driven problem-solving approaches and facilitates opportunities for extending and enhancing the learning experience. Ultimately, it empowers students to achieve outstanding academic performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 grid grid-cols-2 gap-4"
        >
          <img src="https://shantiniketanschool.com/public/theme/assets/img/about/02.png" alt="Students learning" className="rounded-2xl object-cover h-64 w-full shadow-lg" />
          <img src="https://shantiniketanschool.com/public/theme/assets/img/about/03.png" alt="School environment" className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8" />
        </motion.div>
      </div>

      <div className="bg-brand-darkblue rounded-3xl p-10 md:p-16 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-darkblue/5 rounded-full blur-[100px] -mr-40 -mt-20 pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white mb-6">1</div>
            <h3 className="text-2xl font-bold font-heading mb-4">Quality Education</h3>
            <p className="text-brand-slate/60 text-lg leading-relaxed">
              The teachers have been trained intensively on the philosophy, curriculum and the materials. We ensure the highest standard of guidance for every student.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white mb-6">2</div>
            <h3 className="text-2xl font-bold font-heading mb-4">Personalized Learning</h3>
            <p className="text-brand-slate/60 text-lg leading-relaxed">
              Targeting individual students' distinct strengths, weaknesses, competencies, and interests. Enhancing educational spaces by integrating advanced technological tools.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Management Team */}
      <div className="mt-24 mb-10 text-center">
        <div className="inline-block bg-brand-darkblue px-4 py-1.5 rounded-full text-brand-cream font-bold text-sm tracking-wider uppercase mb-4">
          Our Teachers
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-darkblue mb-6">
          Meet With Our <span className="bg-brand-darkblue text-brand-cream px-2 rounded-lg whitespace-nowrap">Highly Skill Management</span>
        </h2>
        <p className="text-lg text-brand-slate max-w-2xl mx-auto">
          We believe on skilled professionals and experienced teachers and staff.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 px-4">
        {[
          { name: 'ANISHA AZAD', role: 'Associate Manager', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/01.jpg' },
          { name: 'BHAGYASHREE KADAM', role: 'Admin Head', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/02.jpg' },
          { name: 'MANORAMA SINGH', role: 'Coordinator', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/03.jpg' },
          { name: 'SAMIKSHA SHINDE', role: 'Associate Admin', img: 'https://shantiniketanschool.com/public/theme/assets/img/team/04.jpg' },
        ].map((staff, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-[2rem] p-4 shadow-xl shadow-brand-darkblue/5 border border-zinc-100 group hover:-translate-y-2 transition-transform duration-500">
            <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-square bg-zinc-100">
              <img src={staff.img} alt={staff.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="text-center pb-2">
              <h4 className="text-lg font-bold font-heading text-brand-darkblue mb-1">{staff.name}</h4>
              <p className="text-sm font-bold text-brand-darkblue/70 uppercase tracking-wider">{staff.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Statistics Banner */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {[
          { label: 'Years of Service', value: '30+' },
          { label: 'Students Enrolled', value: '600+' },
          { label: 'Skilled Lecturers', value: '35+' },
          { label: 'Branches', value: '2+' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100/50 text-center hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-darkblue to-brand-cream mb-3 drop-shadow-sm">{stat.value}</h4>
            <p className="text-brand-slate font-bold uppercase tracking-widest text-xs relative z-10">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
