import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="admissions" className="bg-stone-900 text-stone-400 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center">
              <span className="text-white font-serif italic font-bold text-xl leading-none">S</span>
            </div>
            <span className="font-serif text-2xl font-medium tracking-tight text-stone-100">
              Serenity
            </span>
          </div>
          <p className="mb-6">
            Providing compassionate, evidence-based care for addiction and mental health disorders.
          </p>
          <div className="flex flex-col gap-3">
            <a href="tel:+18005551234" className="flex items-center gap-3 hover:text-stone-200 transition-colors">
              <Phone className="w-5 h-5" />
              (800) 555-1234
            </a>
            <a href="mailto:help@serenity.com" className="flex items-center gap-3 hover:text-stone-200 transition-colors">
              <Mail className="w-5 h-5" />
              help@serenity.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>123 Healing Way<br/>Sanctuary, CA 90210</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-6">Programs</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="hover:text-stone-200 transition-colors">Medical Detox</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Residential Treatment</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Partial Hospitalization (PHP)</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Intensive Outpatient (IOP)</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Alumni Program</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-6">About Us</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="hover:text-stone-200 transition-colors">Our Approach</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Clinical Team</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Facility Tour</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Success Rates</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-6">Admissions</h4>
          <p className="mb-6">Our admissions team is available 24/7 to answer your questions and verify your insurance.</p>
          <button className="w-full bg-[#D4A373] hover:bg-[#C68A5B] text-white px-6 py-3 rounded-xl font-medium transition-colors mb-4">
            Verify Insurance
          </button>
          <button className="w-full bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Chat with Us
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Serenity Treatment Center. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-stone-200 transition-colors">HIPAA Notice</a>
        </div>
      </div>
    </footer>
  );
}
