import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';

interface BlogPageProps {
  t: Translation;
}

export const BlogPage: React.FC<BlogPageProps> = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-paper flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-brand-ink mb-6">Blog</h1>
        <p className="text-brand-ink/70 text-lg max-w-2xl mx-auto">
          Read our latest articles, news, and insights from the world of luxury car rentals.
        </p>
      </motion.div>
    </div>
  );
};
