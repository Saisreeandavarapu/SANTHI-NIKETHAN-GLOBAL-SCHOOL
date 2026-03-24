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
    <section className="py-12 md:py-16 bg-brand-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8 px-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand-accent px-5 py-2 rounded-full text-white font-black text-xs tracking-[0.2em] uppercase mb-8 shadow-xl shadow-brand-accent/10"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight leading-[1.1]"
            >
              What Our Parents <span className="text-brand-accent">Say</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-zinc-500 max-w-sm text-right font-medium text-lg leading-relaxed">
              Building a community of trust where every child's future is shaped with care and excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="bg-brand-secondary/20 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500 relative group"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-brand-accent/10 transition-colors duration-500">
                <Quote size={56} />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-brand-accent text-brand-accent' : 'fill-white/10 text-white/10'}
                  />
                ))}
              </div>

              <p className="text-zinc-400 mb-10 font-medium italic relative z-10 leading-relaxed text-lg min-h-[120px]">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary border border-brand-accent/20 text-brand-accent flex items-center justify-center font-black font-heading text-2xl shadow-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-white text-lg tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
