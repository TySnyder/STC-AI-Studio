'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Sunlit interior
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Serene exterior
  'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Compassionate staff
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'  // Wellness/Yoga
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="max-w-2xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-semibold tracking-wider uppercase mb-6">
              Compassionate Care
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-emerald-950 mb-6">
              Healing begins with feeling <span className="italic text-emerald-800">understood.</span>
            </h1>
            <p className="text-lg lg:text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
              We provide evidence-based, human-first treatment for addiction and mental health in a serene, sunlit environment designed for your recovery.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-white px-8 py-4 rounded-full text-base font-medium transition-all group shadow-md">
                Speak with Admissions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#programs" className="flex items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-200 text-emerald-950 px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm">
                Explore Our Programs
              </a>
              <a href="#admissions" className="flex items-center justify-center gap-2 bg-transparent hover:bg-emerald-900/5 border-2 border-emerald-950 text-emerald-950 px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm">
                Verify Insurance
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-stone-200"
        >
          {carouselImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src={src} 
                alt={`Serenity Treatment Center ${index + 1}`} 
                fill
                className="object-cover object-center"
                priority={index === 0}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent z-10 pointer-events-none"></div>
          
          <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4A373]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D4A373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-emerald-950 font-serif font-medium text-lg">&quot;They saved my life.&quot;</p>
                <p className="text-stone-500 text-sm">— Sarah M., Alumni</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
