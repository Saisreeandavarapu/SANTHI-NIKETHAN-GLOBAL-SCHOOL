import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function OwnerVision() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-4 max-w-7xl">
      {/* Top Vision Section */}
      <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
        
        {/* Profile Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          className="md:w-5/12 relative mt-4"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-darkblue/10 relative">
            <img 
              src="https://shantiniketanschool.com/public/theme/assets/img/research/01.jpg" 
              alt="Aditi Ambre - School Owner" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ocean-dark via-brand-darkblue/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h2 className="text-3xl font-heading font-extrabold text-white mb-1">ADITI AMBRE</h2>
              <p className="text-white font-bold tracking-wider uppercase text-sm">School Owner Vision</p>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-brand-ocean-dark rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-brand-cream/30">
            <Quote size={40} fill="currentColor" strokeWidth={0} />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-7/12"
        >
          <div className="inline-block bg-brand-ocean-teal px-6 py-2 rounded-full text-white font-bold text-sm tracking-widest uppercase mb-6">
            Vision & Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-8 leading-tight">
            "Embrace a learner-focused <br/> <span className="bg-brand-ocean-teal text-white px-3 py-1 rounded-xl text-3xl md:text-4xl leading-tight inline-block mt-2">curriculum for optimal results."</span>
          </h2>
          
          <div className="space-y-6 text-lg text-blue-100 leading-relaxed font-sans mb-10">
            <p>
              Personalized learning encompasses an educational methodology customized to individual students' distinct strengths, weaknesses, competencies, and interests. This approach entails adapting the learning environment, instructional pace, and curriculum to align with each learner's specific requirements.
            </p>
            <p className="pl-6 border-l-4 border-brand-cream bg-brand-ocean-dark rounded-r-2xl py-4 pr-6 text-white font-semibold shadow-sm">
              By harnessing technology, data, and tailored lesson plans, educators can craft a more individualized learning experience, thereby nurturing student engagement and fostering academic achievement. Enhancing educational spaces by integrating advanced technological tools to facilitate engaging and immersive learning experiences.
            </p>
            <p>
              Our enriched curriculum encompasses a diverse array of activities tailored to accommodate various learning styles. It provides comprehensive elucidation of concepts to engage learners with multiple intelligences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {['Experiential-based education', 'Concept mapping', 'Group work/ Team Work', 'Genius Competition'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-brand-ocean-navy border border-brand-ocean-cerulean/50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-white shrink-0" size={24} />
                <span className="font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Team and Community Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="bg-brand-ocean-navy rounded-[3rem] p-10 md:p-16 shadow-2xl border border-brand-ocean-cerulean/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-ocean-dark/5 rounded-full blur-[100px] -mr-40 -mt-20 pointer-events-none" />
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
            Our Team & <span className="bg-brand-ocean-teal text-white px-2 rounded-lg whitespace-nowrap">Our Community</span>
          </h2>
          <p className="text-xl text-zinc-700 font-medium leading-relaxed italic">
            At the core of our approach to education is that it should be "joyful, meaningful and challenging". This is great learning and students exposed to this approach will always achieve more both academically and socially.
          </p>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-blue-100 leading-relaxed text-lg text-justify">
          <div className="space-y-6">
            <p>
              The child is at the center of all that we are doing, and our approach is broad and balanced, to help raise them ready for the future. A future that in some ways is known and in many ways is not. We are in an age where skills are just as important as knowledge. Our teachers are focused on our students and their learning.
            </p>
            <p>
              We believe that understanding is the key to knowledge, which will then naturally lead to great academic results. Students are encouraged to be critical learners and to be involved in their own learning.
            </p>
            <p>
              In a similar manner, we believe that we must continually update our systems with the latest ideas and methodologies so that both the teacher and the taught can use them to stimulate their creativity and excel academically.
            </p>
            <p className="bg-brand-ocean-dark p-6 rounded-2xl border border-brand-ocean-cerulean/50 font-semibold text-white mt-4 shadow-sm border-l-4 border-l-brand-cream">
              Our teachers are the designers of classrooms - exploring design thinking, developing critical thinking and logical reasoning capabilities. They are the facilitators of learning, making students think out of the box with a student-centric approach.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full relative">
             <div className="space-y-4 translate-y-8">
               <img src="https://shantiniketanschool.com/public/theme/assets/img/research/02.jpg" className="rounded-3xl object-cover h-64 w-full shadow-lg hover:scale-[1.03] transition-transform duration-500" alt="Students in Classroom" />
               <img src="https://shantiniketanschool.com/public/theme/assets/img/research/04.jpg" className="rounded-3xl object-cover h-48 w-full shadow-lg hover:scale-[1.03] transition-transform duration-500" alt="Student Reading" />
             </div>
             <div className="space-y-4 -translate-y-4">
               <img src="https://shantiniketanschool.com/public/theme/assets/img/research/03.jpg" className="rounded-3xl object-cover h-48 w-full shadow-lg hover:scale-[1.03] transition-transform duration-500" alt="Student Presentation" />
               <img src="https://shantiniketanschool.com/public/theme/assets/img/course/single.jpg" className="rounded-3xl object-cover h-64 w-full shadow-lg hover:scale-[1.03] transition-transform duration-500" alt="School Activity" />
             </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
