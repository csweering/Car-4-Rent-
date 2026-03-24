import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Translation } from '../types';
import { CARS } from '../constants';
import { ArrowLeft, Check, Fuel, Gauge, Zap } from 'lucide-react';

interface CarDetailsPageProps {
  t: Translation;
  onBook: (carId: string) => void;
}

export const CarDetailsPage: React.FC<CarDetailsPageProps> = ({ t, onBook }) => {
  const { carId } = useParams<{ carId: string }>();
  const car = CARS.find((c) => c.id === carId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carId]);

  if (!car) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen bg-brand-paper flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Car Not Found</h1>
        <Link to="/#fleet" className="text-brand-primary hover:underline">
          Return to Fleet
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-brand-paper min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-brand-ink">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/40 to-transparent flex items-end p-8 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <Link to="/#fleet" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Fleet
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                {car.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4">{car.name}</h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-serif mb-6">Overview</h2>
              <div className="prose prose-lg text-brand-ink/70">
                <p className="leading-relaxed">
                  {car.description || 'Experience the ultimate driving pleasure with this exceptional vehicle. Perfect for cruising the French Riviera in style and comfort.'}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 flex flex-col items-center text-center shadow-sm">
                  <Zap className="w-8 h-8 text-brand-primary mb-4" />
                  <span className="text-xs uppercase tracking-widest text-brand-ink/40 mb-2">Power</span>
                  <span className="text-xl font-bold">{car.specs.power}</span>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 flex flex-col items-center text-center shadow-sm">
                  <Gauge className="w-8 h-8 text-brand-primary mb-4" />
                  <span className="text-xs uppercase tracking-widest text-brand-ink/40 mb-2">0-100 km/h</span>
                  <span className="text-xl font-bold">{car.specs.acceleration}</span>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 flex flex-col items-center text-center shadow-sm">
                  <Fuel className="w-8 h-8 text-brand-primary mb-4" />
                  <span className="text-xs uppercase tracking-widest text-brand-ink/40 mb-2">Top Speed</span>
                  <span className="text-xl font-bold">{car.specs.topSpeed}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Pricing Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-ink/5 sticky top-32">
              <h3 className="text-2xl font-serif mb-8">Rental Rates</h3>

              {car.pricing ? (
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-5 rounded-2xl bg-brand-paper">
                    <span className="font-medium text-brand-ink/80">1 - 3 Days</span>
                    <span className="text-xl font-bold text-brand-primary">
                      €{car.pricing.days1to3}
                      <span className="text-xs text-brand-ink/40 font-normal ml-1">/day</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-5 rounded-2xl bg-brand-paper">
                    <span className="font-medium text-brand-ink/80">4 - 6 Days</span>
                    <span className="text-xl font-bold text-brand-primary">
                      €{car.pricing.days4to6}
                      <span className="text-xs text-brand-ink/40 font-normal ml-1">/day</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-5 rounded-2xl bg-brand-paper">
                    <span className="font-medium text-brand-ink/80">7+ Days</span>
                    <span className="text-xl font-bold text-brand-primary">
                      €{car.pricing.days7plus}
                      <span className="text-xs text-brand-ink/40 font-normal ml-1">/day</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-8">
                  <div className="flex justify-between items-center p-5 rounded-2xl bg-brand-paper">
                    <span className="font-medium text-brand-ink/80">Daily Rate</span>
                    <span className="text-xl font-bold text-brand-primary">
                      €{car.pricePerDay}
                      <span className="text-xs text-brand-ink/40 font-normal ml-1">/day</span>
                    </span>
                  </div>
                </div>
              )}

              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-sm text-brand-ink/70">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-primary" />
                  </div>
                  Comprehensive Insurance Included
                </li>
                <li className="flex items-center text-sm text-brand-ink/70">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-primary" />
                  </div>
                  24/7 Concierge Support
                </li>
                <li className="flex items-center text-sm text-brand-ink/70">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-primary" />
                  </div>
                  Custom Delivery Available
                </li>
              </ul>

              <button
                onClick={() => onBook(car.id)}
                className="w-full bg-brand-ink text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg shadow-brand-ink/10"
              >
                {t.bookNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
