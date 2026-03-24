import React from 'react';
import { Translation } from '../types';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  t: Translation;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer id="contact" className="bg-brand-paper pt-24 pb-12 border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <img 
                src="https://car4rent.fr/wp-content/uploads/car4rent.svg" 
                alt="Car4Rent" 
                className="h-10 w-auto self-start"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-ink/60 font-medium mt-2">Exclusive Car Rental</span>
            </div>
            <p className="text-sm text-brand-ink/60 leading-relaxed mb-8">
              {t.aboutText}
            </p>
            <div className="mb-8">
              <p className="font-serif italic text-lg text-brand-primary">Pascal Hals</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">Founder & Director</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full border border-brand-ink/5 hover:text-brand-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white rounded-full border border-brand-ink/5 hover:text-brand-primary transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white rounded-full border border-brand-ink/5 hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-ink/40">{t.locationsTitle}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-1" />
                <span className="text-sm text-brand-ink/80">Cannes City Center & Port</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-1" />
                <span className="text-sm text-brand-ink/80">Nice Côte d'Azur Airport (NCE)</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-1" />
                <span className="text-sm text-brand-ink/80">Monaco / Monte-Carlo</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-1" />
                <span className="text-sm text-brand-ink/80">Saint-Tropez</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-ink/40">{t.contactUs}</h4>
            <div className="space-y-4">
              <a href="tel:+33493000000" className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span className="text-sm text-brand-ink/80 group-hover:text-brand-primary transition-colors">+33 (0) 4 93 00 00 00</span>
              </a>
              <a href="mailto:contact@car4rent.fr" className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span className="text-sm text-brand-ink/80 group-hover:text-brand-primary transition-colors">contact@car4rent.fr</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-ink/40">Newsletter</h4>
            <p className="text-xs text-brand-ink/60 mb-4">Join our exclusive circle for Riviera updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white border border-brand-ink/10 px-4 py-2 text-xs rounded-l-lg focus:outline-none focus:border-brand-primary w-full"
              />
              <button className="bg-brand-primary text-brand-ink px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-r-lg">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">
            © 2026 Car4Rent Cannes. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-ink/40 hover:text-brand-primary transition-colors">Legal Mentions</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-ink/40 hover:text-brand-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
