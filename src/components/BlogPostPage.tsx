import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Translation } from '../types';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPostPageProps {
  t: Translation;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ t }) => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-paper pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-brand-primary hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-paper min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-brand-ink/60 hover:text-brand-primary transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-brand-ink text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-brand-ink/60 text-sm flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-brand-ink mb-8 leading-tight">
            {post.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl overflow-hidden mb-12 shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto max-h-[600px] object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://car4rent.fr/wp-content/uploads/Rent-Range-Rover-Cannes-scaled-1-1030x773-1.jpg';
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-brand max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};
