'use client';

import { useState, useEffect } from 'react';
import { Phone, ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center">
            <span className="text-white font-serif italic font-bold text-xl leading-none">S</span>
          </div>
          <span className={`font-serif text-2xl font-medium tracking-tight text-emerald-950`}>
            Serenity
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#programs" className="text-sm font-medium text-stone-600 hover:text-emerald-900 transition-colors">Programs</a>
          <a href="#approach" className="text-sm font-medium text-stone-600 hover:text-emerald-900 transition-colors">Our Approach</a>
          <a href="#outcomes" className="text-sm font-medium text-stone-600 hover:text-emerald-900 transition-colors">Outcomes</a>
          <a href="#admissions" className="text-sm font-medium text-stone-600 hover:text-emerald-900 transition-colors">Admissions</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-sm font-medium text-emerald-950 hover:text-emerald-700 transition-colors">
            <Phone className="w-4 h-4" />
            <span>(800) 555-1234</span>
          </a>
          <button className="flex items-center gap-2 bg-[#D4A373] hover:bg-[#C68A5B] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            Verify Insurance
          </button>
        </div>

        <button 
          className="lg:hidden text-emerald-950"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-stone-100 p-6 flex flex-col gap-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              <a href="#programs" className="text-lg font-medium text-stone-800" onClick={() => setMobileMenuOpen(false)}>Programs</a>
              <a href="#approach" className="text-lg font-medium text-stone-800" onClick={() => setMobileMenuOpen(false)}>Our Approach</a>
              <a href="#outcomes" className="text-lg font-medium text-stone-800" onClick={() => setMobileMenuOpen(false)}>Outcomes</a>
              <a href="#admissions" className="text-lg font-medium text-stone-800" onClick={() => setMobileMenuOpen(false)}>Admissions</a>
            </nav>
            <div className="flex flex-col gap-4 pt-4 border-t border-stone-100">
              <a href="tel:+18005551234" className="flex items-center justify-center gap-2 text-base font-medium text-emerald-950 bg-stone-100 py-3 rounded-xl">
                <Phone className="w-5 h-5" />
                <span>(800) 555-1234</span>
              </a>
              <button className="flex items-center justify-center gap-2 bg-[#D4A373] text-white px-5 py-3 rounded-xl text-base font-medium shadow-sm">
                <ShieldCheck className="w-5 h-5" />
                Verify Insurance
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
