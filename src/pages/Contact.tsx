import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl min-h-[60vh] overflow-hidden">
      
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-brand-ocean-teal px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-5">
          Get in Touch
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
          Contact us <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">today!</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-blue-100">
          We are happy to hear your enquiry and we will get back to you asap. Reach out to our admissions office or visit the campus during open hours.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { title: 'Head Office', desc: 'JW26+RQV, Kutwal Colony, Lohegaon, Pune', icon: MapPin },
            { title: 'Call Us', desc: '77679 46588', icon: Phone },
            { title: 'Email Us', desc: 'shantiniketanuniqueschool@gmail.com', icon: Mail },
            { title: 'Open Time', desc: 'Mon - Sat (9.30AM - 3.00PM)', icon: Clock }
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-brand-ocean-navy p-6 rounded-2xl shadow-sm border border-brand-ocean-cerulean/50 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-ocean-teal/5 text-white rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{info.title}</h4>
                  <p className="text-blue-100 text-sm break-all">{info.desc}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
          <div className="bg-brand-ocean-navy p-8 md:p-12 rounded-[2rem] shadow-2xl border border-brand-ocean-cerulean/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ocean-dark/5 rounded-full blur-3xl" />
            
            <h3 className="text-3xl font-heading font-extrabold text-white mb-8">Send Message</h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-ocean-dark border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-ocean-dark border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Email Address</label>
                <input type="email" className="w-full bg-brand-ocean-dark border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-ocean-dark border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:border-brand-cream focus:ring-1 focus:ring-brand-cream transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="bg-brand-ocean-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-ocean-dark hover:text-white transition-all shadow-lg hover:shadow-brand-cream/30 hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Interactive Map Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.8 }}
        className="mt-20 lg:mt-32 rounded-[40px] overflow-hidden shadow-2xl h-[500px] relative border-8 border-white group bg-zinc-200"
      >
        <iframe 
          title="Campus Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.232308709088!2d73.92135085!3d18.5714041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdce8e4c16a62!2sLohegaon%2C%20Pune!5e0!3m2!1sen!2sin!4v1704285880000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale group-hover:grayscale-0 transition-all duration-1000 w-full h-full object-cover"
        />
        
        <div className="absolute top-8 left-8 bg-brand-ocean-navy/95 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-sm hidden md:block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
           <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-lg"><MapPin size={24} className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap"/> Visit Our Campus</h4>
           <p className="text-sm text-blue-100 leading-relaxed">Come explore our world-class facilities and meet our expert faculty in person. We'd love to show you around!</p>
        </div>
      </motion.div>
    </main>
  );
}
