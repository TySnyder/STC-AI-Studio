'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Dual-Diagnosis Capable",
  "Trauma-Informed Care",
  "Holistic Therapies (Yoga, Art, Equine)",
  "Low Client-to-Staff Ratio",
  "Family Integration Programs",
  "Lifelong Alumni Support"
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-emerald-950 text-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-white">
            Treating the <span className="italic text-[#D4A373]">whole person</span>, not just the symptom.
          </h2>
          <p className="text-lg text-emerald-100/80 mb-10 leading-relaxed">
            True healing requires addressing the underlying trauma and mental health conditions that fuel addiction. Our master&apos;s-level clinicians utilize a blend of evidence-based modalities and holistic practices to foster deep, lasting recovery.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#D4A373] flex-shrink-0" />
                <span className="text-emerald-50">{benefit}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#D4A373] hover:bg-[#C68A5B] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-md">
            Meet Our Clinical Team
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image 
            src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Compassionate therapist with client"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply"></div>
        </motion.div>
      </div>
    </section>
  );
}
