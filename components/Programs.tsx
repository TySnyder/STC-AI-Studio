'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Medical Detox',
    description: 'A safe, medically supervised environment to comfortably manage withdrawal symptoms with 24/7 nursing care.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-white border border-stone-100 shadow-sm'
  },
  {
    title: 'Residential Treatment',
    description: 'Immersive, structured care in a serene setting, focusing on root causes through individual and group therapy.',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-emerald-900/5 border border-emerald-900/10 shadow-sm'
  },
  {
    title: 'Outpatient Programs',
    description: 'Flexible IOP and PHP programs that provide ongoing support while allowing you to maintain daily responsibilities.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-white border border-stone-100 shadow-sm'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-emerald-950 mb-6">A Continuum of Care</h2>
          <p className="text-lg text-stone-600">
            We offer a full spectrum of treatment options tailored to your unique journey. From initial stabilization to long-term recovery planning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden flex flex-col ${program.color}`}
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={program.image} 
                  alt={program.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-emerald-950 mb-4">{program.title}</h3>
                <p className="text-stone-600 mb-8 flex-grow">{program.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-800 font-medium hover:text-emerald-600 transition-colors group">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
