import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';
import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldAlert } from 'lucide-react';

interface ContactPageProps {
  t: Translation;
}

export const ContactPage: React.FC<ContactPageProps> = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24 bg-brand-paper min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden bg-brand-ink">
        <img
          src="https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=2000"
          alt="Contact Us"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/40 to-transparent flex items-end p-8 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Contact Car4rent
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Get in Touch with Car4Rent</h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 max-w-3xl">
          <p className="text-brand-ink/70 text-lg leading-relaxed">
            Thank you for considering Car4Rent for your vehicle rental needs. We're here to help and look forward to assisting you. You can reach us easily through any of the options below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content - Contact Form */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-brand-primary mr-4" />
                <h2 className="text-3xl font-serif">Email or Contact Form</h2>
              </div>
              <p className="text-brand-ink/70 mb-4">
                Have a question or need support? Send us an email or use the contact form below. Our team responds promptly and is happy to assist you.
              </p>
              <p className="font-bold text-brand-ink mb-8">Email: info@car4rent.fr</p>

              <form className="bg-white p-8 rounded-3xl border border-brand-ink/5 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">First Name *</label>
                    <input type="text" required className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">Last Name *</label>
                    <input type="text" required className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">Email *</label>
                    <input type="email" required className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">Phone *</label>
                    <input type="tel" required className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">Message</label>
                  <textarea rows={5} className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors"></textarea>
                </div>
                <button type="submit" className="bg-brand-ink text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg shadow-brand-ink/10">
                  Submit
                </button>
              </form>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 shadow-sm">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-brand-primary mr-3" />
                  <h3 className="text-xl font-serif">Phone</h3>
                </div>
                <p className="text-brand-ink/70 mb-4 text-sm">
                  Prefer to speak with someone directly? Call us and our customer service team will be happy to provide information or help you with your reservation.
                </p>
                <p className="font-bold text-brand-ink">Phone: +33 (0) 7 88 27 85 86</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 shadow-sm">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#25D366] mr-3" />
                  <h3 className="text-xl font-serif">WhatsApp</h3>
                </div>
                <p className="text-brand-ink/70 mb-4 text-sm">
                  For quick questions or help on the go, message us on WhatsApp. We're just one tap away.
                </p>
                <a href="https://wa.me/33788278586" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#25D366] font-bold hover:underline">
                  Chat with us on WhatsApp
                </a>
              </div>
            </section>

            <section className="bg-brand-ink text-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <ShieldAlert className="w-8 h-8 text-brand-primary mr-4" />
                <h2 className="text-3xl font-serif">Insurance Claim</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p className="font-bold text-white">Cannes office</p>
                <p>10 rue Hibert, 06400 Cannes</p>
                <p>Tel. : +33(0)7 88 27 85 86</p>
                <p>Mail: info@car4rent.fr</p>
                <p className="pt-4 border-t border-white/10 text-sm italic">
                  You can also file an early insurance claim through the above contact form.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-ink/5 sticky top-32">
              <h3 className="text-2xl font-serif mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold mb-2">Address</h4>
                  <p className="text-brand-ink/80">10 Rue Hibert, 06400 Cannes</p>
                </div>
                
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold mb-2">Reservations</h4>
                  <p className="text-brand-ink/80">07 88 27 85 86</p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold mb-2">Emergency</h4>
                  <p className="text-brand-ink/80">07 88 27 85 86</p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold mb-2">Email</h4>
                  <p className="text-brand-ink/80">info@car4rent.fr</p>
                </div>

                <div className="pt-6 border-t border-brand-ink/10">
                  <h4 className="flex items-center text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold mb-3">
                    <Clock className="w-4 h-4 mr-2" /> Opening Hours
                  </h4>
                  <p className="text-brand-ink/80 text-sm mb-1">Monday - Saturday</p>
                  <p className="text-brand-ink font-bold">9:00 am – 7:00 pm</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-brand-ink/10">
                <h3 className="text-xl font-serif mb-6">Our Locations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-brand-ink text-sm">Paris</p>
                    <p className="text-brand-ink/60 text-xs">26, rue Bayard, 75008 Paris</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-ink text-sm">Monaco</p>
                    <p className="text-brand-ink/60 text-xs">9, Boulevard Albert 1er, 98000 Monaco</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-ink text-sm">Cannes</p>
                    <p className="text-brand-ink/60 text-xs">10 rue Hibert, 06400 Cannes</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-ink text-sm">Saint-Tropez</p>
                    <p className="text-brand-ink/60 text-xs">15, place Vieille, 83310 Grimaud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
