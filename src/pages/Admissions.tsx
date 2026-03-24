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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-brand-darkblue px-4 py-1.5 rounded-full text-brand-cream font-bold text-sm tracking-wider uppercase mb-5">
          Join Us
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-extrabold text-brand-darkblue mb-6">
          Admission <span className="bg-brand-darkblue text-brand-cream px-2 rounded-lg whitespace-nowrap">2025-26</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-brand-slate">
          To begin the admissions process, please complete and submit our Online Application Form. You will need to upload documents based on the grade level requirements.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Requirements */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="bg-white p-10 rounded-3xl shadow-lg border border-zinc-100 relative">
          <div className="absolute top-0 right-0 p-8 text-zinc-50"><FileCheck2 size={100} /></div>
          <h3 className="text-2xl font-heading font-bold text-brand-darkblue mb-8 relative z-10 flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-brand-cream text-white flex items-center justify-center text-sm">1</span> Required Documents
          </h3>
          <ul className="space-y-4 relative z-10 text-brand-slate">
            {['Photograph of Father, Mother & Child (JPEG/PNG 35x45mm)', 'Birth Certificate of the Student', 'Current Address Proof (Electricity Bill/Passport/Aadhar/Rent)', '1st & 2nd Guardian Photo (Authorized for pickup/drop)', 'Aadhar Card of Student', 'Last 2 years Academic Report cards'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-cream mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Age Criteria */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-brand-darkblue text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-cream/20 rounded-full blur-[80px]" />
           <h3 className="text-2xl font-heading font-bold mb-8 relative z-10 flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-brand-cream text-white flex items-center justify-center text-sm">2</span> Age Criteria
          </h3>
          <div className="space-y-6 relative z-10">
            {[
              { g: 'Play Group & Nursery', d: '1st July 2021 - 31st December 2022' },
              { g: 'Lower KG', d: '1st July 2020 - 31st December 2021' },
              { g: 'Upper KG', d: '1st July 2019 - 31st December 2020' },
              { g: 'Grade 1', d: '1st July 2018 - 31st December 2019' }
            ].map((crit, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4">
                <span className="font-bold text-lg text-brand-cream">{crit.g}</span>
                <span className="text-brand-slate/60 text-sm sm:text-right mt-1 sm:mt-0">{crit.d}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Process Steps */}
      <div className="bg-slate-50 rounded-[40px] p-10 lg:p-16 border border-zinc-100 text-center">
        <h3 className="text-3xl font-heading font-bold text-brand-darkblue mb-4">Admission Process</h3>
        <p className="text-brand-slate mb-12 max-w-2xl mx-auto">For information/queries, please contact the admissions office on 7767946588. After the admissions office receives the application form and required documents, the applicant will be considered for admission.</p>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-zinc-200" />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: i*0.2 }} className="relative z-10">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50 text-brand-darkblue mb-6 hook-icon group">
                  <Icon size={32} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-8 h-8 mx-auto bg-brand-cream text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">0{i+1}</div>
                <h4 className="text-xl font-bold text-brand-darkblue mb-3">{step.title}</h4>
                <p className="text-brand-slate text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  );
}

