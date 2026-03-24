import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Fleet } from './components/Fleet';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { PricingPage } from './components/PricingPage';
import { CityPage } from './components/CityPage';
import { CarDetailsPage } from './components/CarDetailsPage';
import { ContactPage } from './components/ContactPage';
import { EventsPage } from './components/EventsPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { TRANSLATIONS } from './constants';
import { Language, Translation } from './types';
import { Phone } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC<{ t: Translation; onBook: (carId?: string) => void }> = ({ t, onBook }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero t={t} onBook={() => onBook()} />
    
    <section id="about" className="py-24 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              {t.aboutTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Tailor-Made <span className="italic">Solutions</span> for Elite Clients
            </h2>
            <p className="text-brand-ink/70 leading-relaxed mb-8 text-lg">
              {t.aboutText}
            </p>
            <div className="mb-8 p-6 bg-white rounded-2xl border border-brand-ink/5 shadow-sm inline-block">
              <p className="font-serif italic text-2xl text-brand-primary mb-1">Pascal Hals</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">Founder & Director</p>
              <p className="mt-4 text-sm text-brand-ink/60 max-w-xs">"My mission is to provide more than just a car; I provide a seamless, high-end experience tailored exactly to your lifestyle."</p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-ink/10">
              <div>
                <span className="block text-3xl font-serif text-brand-primary mb-1">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-ink/40">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-brand-primary mb-1">24/7</span>
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
          </div>
        </div>
      </div>
    </section>

    <Fleet t={t} onBook={onBook} />
    <Gallery t={t} onBook={onBook} />
    <FAQ t={t} />
    <Testimonials t={t} />
    
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
          Premier Experience
        </span>
        <h2 className="text-4xl font-serif mb-6">Delivered Where You Want, <span className="italic">How You Want</span></h2>
        <p className="text-brand-ink/60 max-w-2xl mx-auto mb-12 text-lg">
          {t.locationsText} We provide a truly tailor-made experience, ensuring your vehicle is waiting for you at your exact location, whether it's a private jet terminal, a yacht club, or your personal villa.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Private Jet Terminals', 'Yacht Clubs', 'Luxury Villas', 'Hotels & Resorts'].map((loc) => (
            <span key={loc} className="px-6 py-2 rounded-full border border-brand-ink/10 text-xs font-bold uppercase tracking-widest text-brand-ink/60">
              {loc}
            </span>
          ))}
        </div>
        <div className="aspect-[21/9] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl group relative">
          <img 
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000" 
            alt="French Riviera Coastline" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-transparent transition-colors duration-1000" />
        </div>
      </div>
    </section>
  </motion.div>
);

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-brand-ink selection:bg-brand-primary/20 selection:text-brand-primary">
        <Navbar lang={lang} setLang={setLang} onBook={() => handleBook()} t={t} />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage t={t} onBook={handleBook} />} />
              <Route path="/pricing" element={<PricingPage t={t} onBook={handleBook} />} />
              <Route path="/events" element={<EventsPage t={t} />} />
              <Route path="/blog" element={<BlogPage t={t} />} />
              <Route path="/blog/:id" element={<BlogPostPage t={t} />} />
              <Route path="/contact" element={<ContactPage t={t} />} />
              <Route path="/destinations/:cityId" element={<CityPage t={t} lang={lang} onBook={handleBook} />} />
              <Route path="/car/:carId" element={<CarDetailsPage t={t} onBook={handleBook} />} />
            </Routes>
          </AnimatePresence>
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
          href="https://wa.me/33788278586"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center group"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-white text-brand-ink text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Chat with Pascal Hals
          </span>
        </motion.a>
      </div>
    </Router>
  );
}
