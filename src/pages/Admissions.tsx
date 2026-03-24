import { motion } from 'framer-motion';
import { FileText, CalendarCheck, FileCheck2, CheckCircle2 } from 'lucide-react';

export default function Admissions() {
  const steps = [
    { title: 'Enquiry Form', desc: 'Parent can fill the Enquiry Form online with all details and submit it. Or can visit the school.', icon: FileText },
    { title: 'Book Appointment', desc: 'An appointment will be fixed with the School Management for the interaction and admission process.', icon: CalendarCheck },
    { title: 'Documents & Fees', desc: 'Complete the necessary formalities at the Administration Office by submitting the required documents & Fees.', icon: FileCheck2 }
  ];

  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh] bg-brand-primary">

      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-brand-accent px-6 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/20">
          Admission Open
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-zinc-100 mb-8 tracking-tight">
          Session <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">2025-26</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-zinc-400 font-medium leading-relaxed">
          To begin the admissions process, please complete our online application form. Our team is ready to welcome your child into a world-class educational environment.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 px-4">
        {/* Requirements */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-secondary/40 backdrop-blur-2xl p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 text-white/5 group-hover:text-brand-accent/5 transition-colors"></div>
          <h3 className="text-3xl font-heading font-black text-white mb-10 relative z-10 flex items-center gap-4">
            <span className="w-10 h-10 rounded-2xl bg-brand-accent text-white flex items-center justify-center text-lg font-black shadow-lg shadow-brand-accent/30">1</span>
            Required Documents
          </h3>
          <ul className="space-y-5 relative z-10 text-zinc-400 font-medium">
            {['Photograph of Father, Mother & Child (JPEG/PNG 35x45mm)', 'Birth Certificate of the Student', 'Current Address Proof (Electricity Bill/Passport/Aadhar/Rent)', '1st & 2nd Guardian Photo (Authorized for pickup/drop)', 'Aadhar Card of Student', 'Last 2 years Academic Report cards'].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 size={22} className="text-brand-accent mt-1 shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Age Criteria */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-brand-primary p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/5 group">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-3xl font-heading font-black text-zinc-100 mb-10 relative z-10 flex items-center gap-4">
            <span className="w-10 h-10 rounded-2xl bg-brand-primary border border-brand-accent/30 text-brand-accent flex items-center justify-center text-lg font-black shadow-lg">2</span>
            Age Criteria
          </h3>
          <div className="space-y-8 relative z-10">
            {[
              { g: 'Play Group & Nursery', d: '1st July 2021 - 31st Dec 2022' },
              { g: 'Lower KG', d: '1st July 2020 - 31st Dec 2021' },
              { g: 'Upper KG', d: '1st July 2019 - 31st Dec 2020' },
              { g: 'Grade 1', d: '1st July 2018 - 31st Dec 2019' }
            ].map((crit, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-5 group/item cursor-default">
                <span className="font-black text-xl text-zinc-100 group-hover/item:text-brand-accent transition-colors">{crit.g}</span>
                <span className="text-zinc-500 font-bold text-sm sm:text-right mt-2 sm:mt-0 tracking-wider bg-white/5 px-3 py-1 rounded-lg">{crit.d}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Process Steps */}
      <div className="bg-brand-primary rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20 border border-white/5 text-center shadow-[0_40px_100px_rgba(0,0,0,0.3)] relative overflow-hidden backdrop-blur-3xl mx-4">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6">Admission Process</h3>
        <p className="text-zinc-400 font-medium mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          For any queries, please contact the admissions office at <span className="text-brand-accent font-black">+91 77679 46588</span>. We ensure a smooth and personalized experience for every applicant.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative px-4">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[20%] left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative z-10 group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto bg-brand-secondary/20 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-white/10 text-white mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 backdrop-blur-xl">
                  <Icon size={36} className="text-brand-accent" />
                </div>
                <div className="w-9 h-9 mx-auto bg-brand-accent text-white rounded-xl flex items-center justify-center font-black text-sm mb-6 shadow-lg shadow-brand-accent/30 tracking-tighter">0{i + 1}</div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h4>
                <p className="text-zinc-400 font-medium text-base leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  );
}

