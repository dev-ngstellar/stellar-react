import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostTemplate = ({
    title,
    subtitle,
    author = "Stellar Solutions",
    date,
    readTime = "5 min read",
    image,
    category = "Technology",
    children
}) => {
    return (
        <article className="min-h-screen bg-[#020510] text-white pt-24 pb-20 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        {category}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            {subtitle}
                        </p>
                    )}

                    {/* Meta Data */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm md:text-base border-t border-white/5 pt-8 max-w-2xl mx-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                {author[0]}
                            </div>
                            <span>{author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{readTime}</span>
                        </div>
                    </div>
                </motion.header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16 relative group"
                >
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-[2rem] opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    <img
                        src={image}
                        alt={title}
                        className="relative w-full h-[400px] md:h-[500px] object-cover rounded-[2rem] shadow-2xl border border-white/10"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-lg prose-invert max-w-3xl mx-auto 
                        prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-blue-200
                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-purple-200
                        prose-p:text-gray-200 prose-p:text-lg prose-p:leading-8 prose-p:mb-8
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                        prose-strong:text-white prose-strong:font-bold
                        prose-ul:my-8 prose-li:text-gray-200 prose-li:text-lg prose-li:leading-8 prose-li:my-2 prose-li:marker:text-blue-500
                        bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl"
                >
                    {children}
                </motion.div>

                {/* Share/Footer */}
                {/* <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Share this article</h3>
                    <div className="flex gap-4">
                        {['twitter', 'facebook', 'linkedin', 'link'].map((social) => (
                            <button key={social} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                                <Share2 className="w-4 h-4 text-gray-400" />
                            </button>
                        ))}
                    </div>
                </div> */}
            </div>
        </article>
    );
};

export default BlogPostTemplate;
