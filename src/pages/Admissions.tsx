import { motion } from 'framer-motion';
import { FileText, CalendarCheck, FileCheck2, CheckCircle2 } from 'lucide-react';

export default function Admissions() {
  const steps = [
    { title: 'Enquiry Form', desc: 'Parent can fill the Enquiry Form online with all details and submit it. Or can visit the school.', icon: FileText },
    { title: 'Book Appointment', desc: 'An appointment will be fixed with the School Management for the interaction and admission process.', icon: CalendarCheck },
    { title: 'Documents & Fees', desc: 'Complete the necessary formalities at the Administration Office by submitting the required documents & Fees.', icon: FileCheck2 }
  ];

  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh]">

      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-brand-ocean-teal px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-5">
          Join Us
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
          Admission <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">2025-26</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-blue-100">
          To begin the admissions process, please complete and submit our Online Application Form. You will need to upload documents based on the grade level requirements.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Requirements */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-ocean-navy p-10 rounded-3xl shadow-lg border border-brand-ocean-cerulean/50 relative">
          <div className="absolute top-0 right-0 p-8 text-zinc-50"><FileCheck2 size={70} /></div>
          <h3 className="text-2xl font-heading font-bold text-white mb-8 relative z-10 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-brand-ocean-dark text-white flex items-center justify-center text-sm">1</span> Required Documents
          </h3>
          <ul className="space-y-4 relative z-10 text-blue-100">
            {['Photograph of Father, Mother & Child (JPEG/PNG 35x45mm)', 'Birth Certificate of the Student', 'Current Address Proof (Electricity Bill/Passport/Aadhar/Rent)', '1st & 2nd Guardian Photo (Authorized for pickup/drop)', 'Aadhar Card of Student', 'Last 2 years Academic Report cards'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Age Criteria */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-brand-ocean-dark text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-ocean-dark/20 rounded-full blur-[80px]" />
          <h3 className="text-2xl font-heading font-bold mb-8 relative z-10 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-brand-ocean-dark text-white flex items-center justify-center text-sm">2</span> Age Criteria
          </h3>
          <div className="space-y-6 relative z-10">
            {[
              { g: 'Play Group & Nursery', d: '1st July 2021 - 31st December 2022' },
              { g: 'Lower KG', d: '1st July 2020 - 31st December 2021' },
              { g: 'Upper KG', d: '1st July 2019 - 31st December 2020' },
              { g: 'Grade 1', d: '1st July 2018 - 31st December 2019' }
            ].map((crit, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-ocean-cerulean/50 pb-4">
                <span className="font-bold text-lg text-white">{crit.g}</span>
                <span className="text-blue-100/60 text-sm sm:text-right mt-1 sm:mt-0">{crit.d}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Process Steps */}
      <div className="bg-brand-ocean-dark rounded-[40px] p-10 lg:p-16 border border-brand-ocean-cerulean/50 text-center">
        <h3 className="text-3xl font-heading font-bold text-white mb-4">Admission Process</h3>
        <p className="text-blue-100 mb-12 max-w-2xl mx-auto">For information/queries, please contact the admissions office on 7767946588. After the admissions office receives the application form and required documents, the applicant will be considered for admission.</p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-zinc-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-brand-ocean-navy rounded-full flex items-center justify-center shadow-lg border-4 border-brand-ocean-cerulean/30 text-white mb-4 md:mb-6 hook-icon group">
                  <Icon size={28} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 mx-auto bg-brand-ocean-teal text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm mb-4">0{i + 1}</div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed px-4 md:px-0">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  );
}

