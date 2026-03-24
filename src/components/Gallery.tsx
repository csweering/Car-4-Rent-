import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Translation, Car } from '../types';
import { CARS } from '../constants';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface GalleryProps {
  t: Translation;
  onBook: (carId: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ t, onBook }) => {
  const [selectedCar, setSelectedCar] = React.useState<Car | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">{t.galleryTitle}</h2>
          </motion.div>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide px-[max(1rem,calc((100vw-80rem)/2))] snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CARS.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-none w-[85vw] md:w-[45vw] lg:w-[35vw] snap-center group relative cursor-pointer"
            onClick={() => setSelectedCar(car)}
          >
            <div className="aspect-[16/10] rounded-3xl overflow-hidden relative">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex justify-between items-end w-full">
                  <div>
                    <p className="text-brand-primary text-[10px] uppercase tracking-widest mb-2">{car.category}</p>
                    <h3 className="text-2xl font-serif">{car.name}</h3>
                  </div>
                  <Maximize2 className="w-6 h-6 text-white/60" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedCar && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCar(null)}
              className="absolute inset-0 bg-brand-ink/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden text-brand-ink"
            >
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-6 right-6 p-2 hover:bg-brand-ink/5 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto h-full">
                  <img 
                    src={selectedCar.image} 
                    alt={selectedCar.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                    {selectedCar.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8">{selectedCar.name}</h2>
                  
                  <div className="grid grid-cols-3 gap-8 mb-12 border-y border-brand-ink/5 py-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2">Power</p>
                      <p className="text-xl font-bold">{selectedCar.specs.power}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2">0-100 km/h</p>
                      <p className="text-xl font-bold">{selectedCar.specs.acceleration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2">Top Speed</p>
                      <p className="text-xl font-bold">{selectedCar.specs.topSpeed}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-brand-primary">€{selectedCar.pricePerDay}<span className="text-sm font-normal text-brand-ink/40"> / day</span></p>
                    </div>
                    <div className="flex gap-4 w-full sm:w-auto">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { onBook(selectedCar.id); setSelectedCar(null); }}
                        className="flex-1 sm:flex-none bg-brand-primary text-brand-ink px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-primary/20"
                      >
                        {t.bookNow}
                      </motion.button>
                      <button 
                        onClick={() => setSelectedCar(null)}
                        className="flex-1 sm:flex-none bg-brand-ink/5 text-brand-ink px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-ink/10 transition-colors"
                      >
                        {t.close}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
