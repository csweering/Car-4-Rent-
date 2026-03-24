import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Fleet } from './components/Fleet';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import { Phone } from 'lucide-react';

export default function App() {
  const [lang, setLang] = React.useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [selectedCarId, setSelectedCarId] = React.useState<string | undefined>();
  const t = TRANSLATIONS[lang];

  const handleBook = (carId?: string) => {
    setSelectedCarId(carId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} onBook={() => handleBook()} t={t} />
      
      <main>
        <Hero t={t} onBook={() => handleBook()} />
        
        <section id="about" className="py-24 bg-brand-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  {t.aboutTitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  Tailor-Made <span className="italic">Solutions</span> for Elite Clients
                </h2>
                <p className="text-brand-ink/70 leading-relaxed mb-8 text-lg">
                  {t.aboutText}
                </p>
                <div className="mb-8">
                  <p className="font-serif italic text-xl text-brand-purple">Pascal Hals</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">Founder & Director</p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-ink/10">
                  <div>
                    <span className="block text-3xl font-serif text-brand-purple mb-1">10+</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-ink/40">Years of Excellence</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif text-brand-purple mb-1">24/7</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-ink/40">VIP Concierge Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000" 
                    alt="Luxury Car Interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                      C4R
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">Certified</p>
                      <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest">Luxury Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Fleet t={t} onBook={handleBook} />
        
        <Gallery t={t} />
        
        <FAQ t={t} />
        
        <Testimonials t={t} />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Premier Experience
            </span>
            <h2 className="text-4xl font-serif mb-6">Delivered Where You Want, <span className="italic">How You Want</span></h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto mb-12">
              {t.locationsText} We provide a truly tailor-made experience, ensuring your vehicle is waiting for you at your exact location, whether it's a private jet terminal, a yacht club, or your personal villa.
            </p>
            <div className="aspect-[21/9] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000" 
                alt="French Riviera Coastline" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />

      <BookingForm 
        t={t} 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedCarId={selectedCarId}
      />

      {/* Floating Contact Button */}
      <motion.a
        href="https://wa.me/33493000000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-brand-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}
