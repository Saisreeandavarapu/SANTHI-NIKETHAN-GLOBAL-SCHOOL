import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Apeksha Kadam',
    role: 'Parent',
    content: 'Very nice facility and good service and good staffs. If you want your kids base to be excellent then this is the right place go for it.',
    rating: 5,
  },
  {
    name: 'Prashant',
    role: 'Parent',
    content: 'Very nice school...mam is very cooperative.. Highly recommended for every parent looking for a great start.',
    rating: 5,
  },
  {
    name: 'Siddhant',
    role: 'Parent',
    content: 'Highly recommended this school. Principle always cooperative and listens to parent concerns actively.',
    rating: 5,
  },
  {
    name: 'Ramesh Sutar',
    role: 'Parent',
    content: 'Admission process is easy and get admission with easy installment. Very helpful management team.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-ocean-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-ocean-dark/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] bg-brand-ocean-dark/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand-ocean-dark/10 px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-6"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-extrabold text-white"
            >
              What Our Parents <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">Say</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-blue-100 max-w-sm text-right hidden md:block">
              We take pride in building a community where parents trust us to shape the future of their children.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -5 }}
              className="bg-brand-ocean-dark p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all relative group"
            >
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-white/20 transition-colors">
                <Quote size={48} />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-brand-cream text-white' : 'fill-slate-200 text-slate-200'}
                  />
                ))}
              </div>

              <p className="text-blue-100 mb-8 italic relative z-10 leading-relaxed min-h-[100px]">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-ocean-dark text-white flex items-center justify-center font-bold font-heading text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
