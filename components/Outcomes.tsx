'use client';
import { motion } from 'motion/react';

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-emerald-950 mb-12">Proven Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-stone-50">
            <div className="text-5xl font-serif text-[#D4A373] mb-4">85%</div>
            <p className="text-stone-600 font-medium">Sustained Recovery at 1 Year</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-3xl bg-stone-50">
            <div className="text-5xl font-serif text-[#D4A373] mb-4">92%</div>
            <p className="text-stone-600 font-medium">Client Satisfaction Rate</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 rounded-3xl bg-stone-50">
            <div className="text-5xl font-serif text-[#D4A373] mb-4">3:1</div>
            <p className="text-stone-600 font-medium">Client to Therapist Ratio</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
