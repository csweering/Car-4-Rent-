import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, ChevronDown, Home } from 'lucide-react';
import { Language, Translation } from '../types';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { CITIES } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onBook: () => void;
  t: Translation;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onBook, t }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFleetOpen, setIsFleetOpen] = React.useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = React.useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const fleetCategories = [
    { name: 'Sports cars', id: 'Sport' },
    { name: 'Luxury cars', id: 'Luxury' },
    { name: 'SUV', id: 'SUV' },
    { name: 'Convertible', id: 'Convertible' }
  ];

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
    if (isHome && href.startsWith('#')) {
      return (
        <a href={href} onClick={onClick} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-primary transition-colors">
          {children}
        </a>
      );
    }
    return (
      <Link to={href.startsWith('#') ? `/${href}` : href} onClick={onClick} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-primary transition-colors">
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-brand-ink/95 backdrop-blur-xl border-b border-brand-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 bg-[#6834bd]">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://car4rent.fr/wp-content/uploads/car4rent.svg" 
              alt="Car4Rent" 
              className="h-12 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10 text-white">
            <NavLink href="/"><Home className="w-4 h-4" /></NavLink>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsFleetOpen(true)}
              onMouseLeave={() => setIsFleetOpen(false)}
            >
              <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-primary transition-colors">
                Our Fleet <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isFleetOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-brand-dark shadow-2xl rounded-2xl border border-brand-primary/10 py-4 mt-2"
                  >
                    {fleetCategories.map((cat) => (
                      <a 
                        key={cat.id} 
                        href={`#fleet`}
                        onClick={() => setIsFleetOpen(false)}
                        className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                      >
                        {cat.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/pricing">Pricing</NavLink>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-primary transition-colors">
                Destinations <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isDestinationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-brand-dark shadow-2xl rounded-2xl border border-brand-primary/10 py-4 mt-2"
                  >
                    {CITIES[lang].map((city: any) => (
                      <Link 
                        key={city.id} 
                        to={`/destinations/${city.id}`}
                        className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBook}
              className="bg-brand-primary text-brand-ink px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand-primary/20"
            >
              {t.bookNow}
            </motion.button>

            <div className="flex items-center space-x-3 border-l border-white/10 pl-10">
              <Globe className="w-4 h-4 text-white/30" />
              <div className="flex space-x-2">
                <button 
                  onClick={() => setLang('en')}
                  className={cn("text-[10px] font-black tracking-tighter", lang === 'en' ? "text-brand-primary" : "text-white/20")}
                >
                  EN
                </button>
                <span className="text-white/10 text-[10px]">/</span>
                <button 
                  onClick={() => setLang('fr')}
                  className={cn("text-[10px] font-black tracking-tighter", lang === 'fr' ? "text-brand-primary" : "text-white/20")}
                >
                  FR
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-ink border-b border-brand-primary/10 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6 text-white">
              <NavLink href="/" onClick={() => setIsOpen(false)}><Home className="w-4 h-4" /></NavLink>
              
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Our Fleet</p>
                <div className="grid grid-cols-2 gap-4">
                  {fleetCategories.map((cat) => (
                    <a 
                      key={cat.id} 
                      href={`#fleet`}
                      onClick={() => setIsOpen(false)}
                      className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-primary"
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>

              <NavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
              
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Destinations</p>
                <div className="grid grid-cols-2 gap-4">
                  {CITIES[lang].map((city: any) => (
                    <Link 
                      key={city.id} 
                      to={`/destinations/${city.id}`}
                      onClick={() => setIsOpen(false)}
                      className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-primary"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
              <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
              
              <button
                onClick={() => { onBook(); setIsOpen(false); }}
                className="w-full bg-brand-primary text-brand-ink py-5 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-brand-primary/20"
              >
                {t.bookNow}
              </button>

              <div className="flex space-x-6 pt-6 border-t border-white/5">
                <button onClick={() => { setLang('en'); setIsOpen(false); }} className={cn("text-xs font-black", lang === 'en' ? "text-brand-primary" : "text-white/20")}>ENGLISH</button>
                <button onClick={() => { setLang('fr'); setIsOpen(false); }} className={cn("text-xs font-black", lang === 'fr' ? "text-brand-primary" : "text-white/20")}>FRANÇAIS</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
