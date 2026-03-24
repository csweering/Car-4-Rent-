import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Translation, City, Car } from '../types';
import { CITIES, CARS } from '../constants';
import { MapPin, Compass, Car as CarIcon, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface CityPageProps {
  t: Translation;
  lang: string;
  onBook: (carId: string) => void;
}

export const CityPage: React.FC<CityPageProps> = ({ t, lang, onBook }) => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = CITIES[lang].find((c: City) => c.id === cityId);
  const recommendedCar = CARS.find((c: Car) => c.id === city?.recommendedCarId);

  if (!city) return <div className="pt-32 text-center h-screen">City not found</div>;

  return (
    <div className="pt-24 pb-24 bg-brand-paper min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={city.image} 
          alt={city.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/40 to-transparent flex items-end p-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Destinations
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">{city.name}</h1>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                {city.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Recommendations */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <Compass className="w-8 h-8 text-brand-primary" />
                <h2 className="text-3xl font-serif">{t.recommendations}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {city.recommendations.map((rec: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-brand-ink/5 flex items-start space-x-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-brand-ink/80 leading-relaxed font-medium">{rec}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-brand-ink text-white p-12 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <Info className="w-8 h-8 text-brand-primary" />
                  <h2 className="text-3xl font-serif text-brand-primary">Local Advice</h2>
                </div>
                <p className="text-xl leading-relaxed text-white/80 italic mb-8">
                  "The Riviera is best experienced at your own pace. Avoid the main highways during peak hours and take the scenic coastal roads (Corniches) for breathtaking views."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-primary text-brand-ink rounded-full flex items-center justify-center font-bold">PH</div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest">Pascal Hals</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Founder & Local Expert</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Best Car Recommendation */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-brand-ink/5 sticky top-32">
              <div className="flex items-center space-x-4 mb-8">
                <CarIcon className="w-8 h-8 text-brand-primary" />
                <h2 className="text-2xl font-serif">{t.bestCarForTrip}</h2>
              </div>
              
              <p className="text-brand-ink/70 leading-relaxed mb-8">
                {city.bestCarAdvice}
              </p>

              {recommendedCar && (
                <div className="space-y-8">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={recommendedCar.image} 
                      alt={recommendedCar.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-2">{recommendedCar.name}</h3>
                    <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">{recommendedCar.category}</p>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-brand-primary">€{recommendedCar.pricing?.days1to3 || recommendedCar.pricePerDay}</span>
                        <span className="text-[10px] uppercase tracking-widest text-brand-ink/40">from / day</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link
                          to={`/car/${recommendedCar.id}`}
                          className="bg-brand-primary/10 text-brand-primary px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => onBook(recommendedCar.id)}
                          className="bg-brand-ink text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors flex items-center justify-center"
                        >
                          Book Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
