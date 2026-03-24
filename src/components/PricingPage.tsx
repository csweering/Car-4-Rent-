import React from 'react';
import { motion } from 'motion/react';
import { Translation, Car } from '../types';
import { CARS } from '../constants';
import { Check, Info } from 'lucide-react';

interface PricingPageProps {
  t: Translation;
  onBook: (carId: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ t, onBook }) => {
  return (
    <div className="pt-32 pb-24 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
          >
            Transparency
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            {t.pricingTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-ink/60 max-w-2xl mx-auto"
          >
            All our rates include basic insurance, 24/7 support, and delivery to your preferred location. No hidden fees, just premier service.
          </motion.p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-brand-ink text-white text-left">
                <th className="p-6 font-serif text-lg">Vehicle</th>
                <th className="p-6 font-serif text-lg">Category</th>
                <th className="p-6 font-serif text-lg">Specs</th>
                <th className="p-6 font-serif text-lg">Daily Rate</th>
                <th className="p-6 font-serif text-lg text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-ink/5">
              {CARS.map((car, index) => (
                <motion.tr
                  key={car.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-brand-primary/5 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={car.image} alt={car.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="font-bold text-brand-ink">{car.name}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 bg-brand-ink/5 px-3 py-1 rounded-full">
                      {car.category}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="text-xs space-y-1 text-brand-ink/60">
                      <p>{car.specs.power}</p>
                      <p>{car.specs.acceleration} (0-100)</p>
                      <p>{car.specs.topSpeed} Top Speed</p>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-brand-primary">€{car.pricePerDay}</span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-ink/40">per day</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <button
                      onClick={() => onBook(car.id)}
                      className="bg-brand-ink text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors"
                    >
                      {t.bookNow}
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Full Insurance', desc: 'Comprehensive coverage included in every rental.' },
            { title: 'Free Delivery', desc: 'We deliver to hotels, villas, and airports across the Riviera.' },
            { title: '24/7 Support', desc: 'Direct line to Pascal Hals and our concierge team.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-brand-ink/5">
              <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="text-lg font-serif mb-2">{item.title}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
