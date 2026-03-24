import { motion } from 'framer-motion';
import { Briefcase, Building2, GraduationCap, PenTool } from 'lucide-react';

export default function Careers() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl bg-brand-primary min-h-screen">
      <div className="text-center mb-24 px-4">
        <div className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
          Join Our Family
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-[1.1] tracking-tight">
          Explore Your <span className="text-brand-accent">Career</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
          At the core of our approach to education is that it should be <span className="text-zinc-200">"joyful, meaningful and challenging"</span>. Join us in shaping the classrooms of tomorrow.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start px-4">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-8">
          {[
            { icon: GraduationCap, title: 'Designers of Classrooms', desc: 'Exploring design thinking and developing critical capabilities in every learner.' },
            { icon: Briefcase, title: 'Joyful & Meaningful', desc: 'An environment where staff and students achieve more academically and socially.' },
            { icon: Building2, title: 'Learner-focused', desc: 'We embrace a learner-focused curriculum for optimal engagement and results.' },
            { icon: PenTool, title: 'Experiential Education', desc: 'Utilizing concept mapping, group work, and modern advanced tools.' },
          ].map((item, i) => (
            <div key={i} className="bg-brand-secondary/20 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl border border-white/5 flex gap-6 hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-brand-primary border border-brand-accent/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-all duration-500 shadow-xl">
                <item.icon className="text-brand-accent group-hover:text-white transition-colors" size={28} />
              </div>
              <div>
                <h4 className="font-black text-white text-xl mb-2 tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
          <div className="bg-brand-secondary/10 backdrop-blur-3xl p-10 md:p-14 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-3xl font-black font-heading text-white mb-10 tracking-tight">Apply for a Position</h3>
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">First Name</label>
                  <input type="text" className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="Enter first name" />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input type="text" className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="Enter last name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="applicant@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="+91" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Role Applied For</label>
                <select className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all appearance-none cursor-pointer">
                  <option value="">Select a teaching or administrative role</option>
                  <option value="teacher">Class Teacher</option>
                  <option value="admin">Administration Staff</option>
                  <option value="coordinator">Academic Coordinator</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Cover Letter</label>
                <textarea rows={4} className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none" placeholder="Tell us why you are a great fit for Shantiniketan..."></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Resume link (Cloud Link)</label>
                <input type="url" className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="Link to your Google Drive or Dropbox CV" />
              </div>

              <button type="button" className="bg-brand-accent hover:brightness-110 text-white font-black tracking-[0.2em] py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-brand-accent/20 hover:-translate-y-1.5 active:scale-95 w-full md:w-auto uppercase text-sm">
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
