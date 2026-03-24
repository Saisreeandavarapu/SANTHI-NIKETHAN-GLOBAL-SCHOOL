import { motion } from 'framer-motion';
import { Briefcase, Building2, GraduationCap, PenTool } from 'lucide-react';

export default function Careers() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <div className="inline-block bg-brand-darkblue px-6 py-2 rounded-full text-brand-cream font-bold text-sm tracking-widest uppercase mb-6">
          Join Our Team
        </div>
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-brand-darkblue mb-6 leading-tight">
          Explore Your <span className="bg-brand-darkblue text-brand-cream px-2 rounded-lg whitespace-nowrap">Career</span>
        </h1>
        <p className="text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed">
          At the core of our approach to education is that it should be "joyful, meaningful and challenging". Join us in shaping classrooms of tomorrow.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">
          {[
            { icon: GraduationCap, title: 'Designers of Classrooms', desc: 'Exploring design thinking and developing critical capabilities.' },
            { icon: Briefcase, title: 'Joyful & Meaningful', desc: 'An environment where staff and students achieve more academically and socially.' },
            { icon: Building2, title: 'Learner-focused', desc: 'We embrace a learner-focused curriculum for optimal results.' },
            { icon: PenTool, title: 'Experiential Education', desc: 'Utilizing concept mapping, group work, and advanced tools.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-lg border border-zinc-100 flex gap-5 hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 bg-brand-darkblue/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-navy/5 transition-colors">
                <item.icon className="text-brand-darkblue group-hover:text-brand-cream transition-colors" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-darkblue mb-1">{item.title}</h4>
                <p className="text-sm text-brand-slate leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden">
            <h3 className="text-3xl font-heading font-extrabold text-brand-darkblue mb-8">Apply for a Position</h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-darkblue mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-darkblue mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="Last Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-darkblue mb-2">Email Address</label>
                  <input type="email" className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="applicant@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-darkblue mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="+91" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-darkblue mb-2">Role Applied For</label>
                <select className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors">
                  <option value="">Select a teaching or administrative role</option>
                  <option value="teacher">Class Teacher</option>
                  <option value="admin">Administration</option>
                  <option value="coordinator">Coordinator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-darkblue mb-2">Cover Letter</label>
                <textarea rows={4} className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="Tell us why you are a great fit..."></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-brand-darkblue mb-2">Resume link</label>
                <input type="url" className="w-full bg-brand-cream border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream" placeholder="Link to your Google Drive or Dropbox CV" />
              </div>

              <button type="button" className="bg-brand-darkblue text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-cream hover:text-brand-darkblue transition-all shadow-lg hover:shadow-brand-cream/30 hover:-translate-y-1 w-full md:w-auto">
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
