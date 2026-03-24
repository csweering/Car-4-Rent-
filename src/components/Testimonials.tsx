import React from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  t: Translation;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section className="py-24 bg-brand-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">{t.reviewsTitle}</h2>
            <div className="flex items-center space-x-1 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-bold tracking-widest">4.9 / 5.0</span>
            </div>
          </div>
          <div className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Based on 200+ Google Reviews
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <div className="flex items-center space-x-1 text-brand-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-white/80 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm tracking-widest uppercase">{review.name}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
