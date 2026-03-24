import React from 'react';
import { motion } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { Language, Translation } from '../types';
import { cn } from '../lib/utils';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onBook: () => void;
  t: Translation;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onBook, t }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold tracking-tighter text-brand-purple leading-none">CAR<span className="border-y-2 border-brand-purple mx-1 px-1">4</span>RENT</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-ink/60 font-medium">Exclusive Car Rental</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#fleet" className="text-sm uppercase tracking-widest hover:text-brand-purple transition-colors">Fleet</a>
            <a href="#gallery" className="text-sm uppercase tracking-widest hover:text-brand-purple transition-colors">Gallery</a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-brand-purple transition-colors">About</a>
            <a href="#faq" className="text-sm uppercase tracking-widest hover:text-brand-purple transition-colors">FAQ</a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-brand-purple transition-colors">Contact</a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBook}
              className="bg-brand-purple text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest"
            >
              {t.bookNow}
            </motion.button>

            <div className="flex items-center space-x-2 border-l border-brand-ink/20 pl-8">
              <Globe className="w-4 h-4 text-brand-ink/60" />
              <button 
                onClick={() => setLang('en')}
                className={cn("text-xs font-bold uppercase tracking-tighter", lang === 'en' ? "text-brand-purple" : "text-brand-ink/40")}
              >
                EN
              </button>
              <span className="text-brand-ink/20">/</span>
              <button 
                onClick={() => setLang('fr')}
                className={cn("text-xs font-bold uppercase tracking-tighter", lang === 'fr' ? "text-brand-purple" : "text-brand-ink/40")}
              >
                FR
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-brand-ink/10 p-4"
        >
          <div className="flex flex-col space-y-4">
            <a href="#fleet" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">Fleet</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">Gallery</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">About</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">Contact</a>
            
            <button
              onClick={() => { onBook(); setIsOpen(false); }}
              className="w-full bg-brand-purple text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              {t.bookNow}
            </button>

            <div className="flex space-x-4 pt-4 border-t border-brand-ink/10">
              <button onClick={() => { setLang('en'); setIsOpen(false); }} className={cn("text-xs font-bold", lang === 'en' ? "text-brand-purple" : "text-brand-ink/40")}>ENGLISH</button>
              <button onClick={() => { setLang('fr'); setIsOpen(false); }} className={cn("text-xs font-bold", lang === 'fr' ? "text-brand-purple" : "text-brand-ink/40")}>FRANÇAIS</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
