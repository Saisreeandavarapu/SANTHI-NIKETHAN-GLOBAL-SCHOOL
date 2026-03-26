"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Apeksha Kadam",
    role: "Parent",
    content:
      "Very nice facility and good service and good staffs. If you want your kids base to be excellent then this is the right place go for it.",
    rating: 5,
  },
  {
    name: "Prashant",
    role: "Parent",
    content:
      "Very nice school...mam is very cooperative.. Highly recommended for every parent looking for a great start.",
    rating: 5,
  },
  {
    name: "Siddhant",
    role: "Parent",
    content:
      "Highly recommended this school. Principle always cooperative and listens to parent concerns actively.",
    rating: 5,
  },
  {
    name: "Ramesh Sutar",
    role: "Parent",
    content:
      "Admission process is easy and get admission with easy installment. Very helpful management team.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 md:pb-10 bg-brand-primary relative overflow-hidden">

      {/* Background (reduced overflow impact) */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -left-[10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 sm:mb-8 gap-6">

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand-accent px-4 py-2 rounded-full text-white font-black text-[10px] sm:text-xs tracking-widest uppercase mb-5"
            >
              Testimonials
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white tracking-tight leading-tight"
            >
              What Our Parents{" "}
              <span className="text-brand-accent">Say</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-zinc-500 max-w-sm text-right font-medium text-base leading-relaxed">
              Building a community of trust where every child's future is shaped with care.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2">

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-1 sm:px-2 md:px-4">

            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -6 }}
                className="min-w-[260px] sm:min-w-0 snap-start bg-brand-secondary/20 backdrop-blur-2xl p-5 sm:p-7 md:p-9 rounded-[1.6rem] sm:rounded-[2rem] border border-white/5 shadow-lg sm:shadow-xl transition-all duration-500 relative group"
              >

                {/* Quote */}
                <div className="absolute top-4 right-4 text-white/5">
                  <Quote size={36} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < testimonial.rating
                          ? "fill-brand-accent text-brand-accent"
                          : "fill-white/10 text-white/10"
                      }
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-zinc-400 mb-5 font-medium italic leading-relaxed text-sm sm:text-base min-h-[80px]">
                  "{testimonial.content}"
                </p>

                {/* User */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-brand-primary border border-brand-accent/20 text-brand-accent flex items-center justify-center font-black text-sm sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-black text-white text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}