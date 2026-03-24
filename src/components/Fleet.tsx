import React from 'react';
import { motion } from 'motion/react';
import { Translation, Car } from '../types';
import { CARS } from '../constants';
import { Fuel, Gauge, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FleetProps {
  t: Translation;
  onBook: (carId: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ t, onBook }) => {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">{t.fleetTitle}</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto mb-8">{t.fleetSubtitle}</p>
            <Link 
              to="/pricing" 
              className="inline-flex items-center text-brand-primary text-xs font-bold uppercase tracking-widest hover:text-brand-ink transition-colors group"
            >
              View Full Price List & Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <CarCard key={car.id} car={car} t={t} index={index} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CarCard: React.FC<{ car: Car; t: Translation; index: number; onBook: (carId: string) => void }> = ({ car, t, index, onBook }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-brand-paper rounded-3xl overflow-hidden border border-brand-ink/5 hover:border-brand-primary/20 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-brand-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-serif font-bold">{car.name}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-brand-primary">€{car.pricing?.days1to3 || car.pricePerDay}</span>
            <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">from / day</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8 border-y border-brand-ink/5 py-4">
          <div className="flex flex-col items-center">
            <Zap className="w-4 h-4 text-brand-primary mb-1" />
            <span className="text-[10px] font-bold">{car.specs.power}</span>
          </div>
          <div className="flex flex-col items-center">
            <Gauge className="w-4 h-4 text-brand-primary mb-1" />
            <span className="text-[10px] font-bold">{car.specs.acceleration}</span>
          </div>
          <div className="flex flex-col items-center">
            <Fuel className="w-4 h-4 text-brand-primary mb-1" />
            <span className="text-[10px] font-bold">{car.specs.topSpeed}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/car/${car.id}`}
            className="flex-1 bg-brand-primary/10 text-brand-primary py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center hover:bg-brand-primary hover:text-white transition-colors"
          >
            Details
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onBook(car.id)}
            className="flex-1 bg-brand-ink text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors"
          >
            {t.bookNow}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
