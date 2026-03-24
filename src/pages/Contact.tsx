import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh] bg-brand-primary overflow-hidden">
      
      <div className="text-center max-w-3xl mx-auto mb-20 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10">
          Get in Touch
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]">
          Contact us <span className="text-brand-accent">today!</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-zinc-400 font-medium leading-relaxed">
          We are happy to hear your enquiry and we will get back to you asap. Reach out to our admissions office or visit the campus during open hours.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 px-4">
        {/* Contact Info Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          {[
            { title: 'Head Office', desc: 'JW26+RQV, Kutwal Colony, Lohegaon, Pune', icon: MapPin },
            { title: 'Call Us', desc: '+91 77679 46588', icon: Phone },
            { title: 'Email Us', desc: 'shantiniketanuniqueschool@gmail.com', icon: Mail },
            { title: 'Open Time', desc: 'Mon - Sat (9.30AM - 3.00PM)', icon: Clock }
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-brand-secondary/20 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl border border-white/5 flex items-center gap-6 hover:-translate-y-1.5 transition-all duration-500 group">
                <div className="w-16 h-16 bg-brand-primary border border-brand-accent/20 text-brand-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-xl">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="font-black text-white text-lg mb-2 tracking-tight group-hover:text-brand-accent transition-colors">{info.title}</h4>
                  <p className="text-zinc-500 font-medium text-sm break-all leading-relaxed">{info.desc}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
          <div className="bg-brand-secondary/10 backdrop-blur-3xl p-10 md:p-14 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="text-3xl font-black font-heading text-white mb-10 tracking-tight">Send Message</h3>
            
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
              <div className="space-y-3">
                <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="your@email.com" />
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={4} className="w-full bg-brand-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              <button type="button" className="bg-brand-accent hover:brightness-110 text-white font-black tracking-[0.2em] py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-brand-accent/20 hover:-translate-y-1.5 active:scale-95 w-full md:w-auto uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Interactive Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mt-28 lg:mt-40 mx-4"
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-brand-accent/10 border border-brand-accent/20 px-6 py-3 rounded-full mb-4">
            <MapPin size={18} className="text-brand-accent" />
            <span className="text-brand-accent font-black text-sm tracking-widest uppercase">Find Us</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tight">Visit Our <span className="text-brand-accent">Campus</span></h3>
        </div>

        {/* Map Card */}
        <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-brand-accent/40 via-white/5 to-brand-secondary/30 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-[2.6rem] overflow-hidden h-auto lg:h-[520px]">

            {/* Left Info Panel */}
            <div className="bg-brand-secondary/30 backdrop-blur-3xl p-10 flex flex-col justify-between border-r border-white/5">
              <div>
                <h4 className="text-2xl font-black text-white mb-8 tracking-tight">Campus Address</h4>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Address</p>
                      <p className="text-white font-semibold leading-relaxed">JW26+RQV, Kutwal Colony,<br />Lohegaon, Pune</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-white font-semibold">+91 77679 46588</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Open Hours</p>
                      <p className="text-white font-semibold">Mon – Sat<br />9:30 AM – 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Santhi+Nikethan+Global+School+Lohegaon+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-accent hover:brightness-110 text-white font-black tracking-widest text-sm py-4 px-8 rounded-2xl transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-accent/20"
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>

            {/* Right Map Panel */}
            <div className="lg:col-span-2 h-72 lg:h-auto">
              <iframe
                title="Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.232308709088!2d73.92135085!3d18.5714041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdce8e4c16a62!2sLohegaon%2C%20Pune!5e0!3m2!1sen!2sin!4v1704285880000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
