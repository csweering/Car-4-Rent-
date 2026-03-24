import React from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  t: Translation;
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onBook }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Luxury Car on French Riviera" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/80 via-brand-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Cannes • Nice • Monaco • St. Tropez
            </span>
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-primary/30">
                Tailor-Made Experience
              </span>
              <span className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                Pascal Hals
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              {t.heroTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "italic font-normal" : "font-bold"}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg text-white/80 mb-10 font-light max-w-lg leading-relaxed">
              {t.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                onClick={onBook}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-brand-ink px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center group"
              >
                {t.bookNow}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center"
              >
                {t.contactUs}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full border border-white/20 backdrop-blur-sm text-white"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60">Est.</span>
        <span className="text-2xl font-serif italic">2014</span>
        <span className="text-[10px] uppercase tracking-widest opacity-60">Cannes</span>
      </motion.div>
    </section>
  );
};
