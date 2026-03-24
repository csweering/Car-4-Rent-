import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';
import { Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

interface BlogPageProps {
  t: Translation;
}

export const BlogPage: React.FC<BlogPageProps> = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="bg-brand-ink min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6"
          >
            Car4Rent <span className="text-brand-primary">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Discover the latest news, luxury travel tips, and exclusive event guides for the French Riviera.
          </motion.p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.id}`}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16 group cursor-pointer block"
            >
              <div className="relative h-[60vh] min-h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-brand-primary text-brand-ink text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/60 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 max-w-3xl text-lg mb-6 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-brand-primary font-bold uppercase tracking-widest text-sm">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block h-full">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-brand-primary/50 transition-colors flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://car4rent.fr/wp-content/uploads/Rent-Range-Rover-Cannes-scaled-1-1030x773-1.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-ink/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-white/40 text-xs mb-4">
                    <Calendar className="w-3 h-3 mr-2" />
                    {post.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-brand-primary font-bold uppercase tracking-widest text-xs mt-auto">
                    Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Pagination (Visual only for now) */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-brand-primary text-brand-ink font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 font-bold flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 font-bold flex items-center justify-center transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
