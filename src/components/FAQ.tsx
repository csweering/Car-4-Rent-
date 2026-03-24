import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Translation } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQProps {
  t: Translation;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-paper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif mb-4">{t.faqTitle}</h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-brand-ink/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-ink/5 transition-colors"
              >
                <span className="font-bold text-sm uppercase tracking-widest text-brand-ink">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-brand-primary transition-transform duration-300",
                    activeIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-brand-ink/60 text-sm leading-relaxed border-t border-brand-ink/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
