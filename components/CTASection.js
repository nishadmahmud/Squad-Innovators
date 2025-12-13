"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Zap } from 'lucide-react';
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const CTASection = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#030f45] to-[#1e3a8a]">
            {/* Background Components */}
            <FloatingShapes variant="cool" count={8} />
            <GridPattern variant="mesh" opacity={0.08} color="#60a5fa" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-wider uppercase mb-8 shadow-lg"
                >
                    <Sparkles size={16} className="text-[#60a5fa]" />
                    <span>LET'S CREATE SOMETHING AMAZING</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight text-white"
                >
                    Ready to Transform Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
                        Digital Vision?
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    Join hundreds of successful businesses that have scaled with our custom software solutions. Schedule a free consultation today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                    >
                        <Zap className="w-5 h-5" />
                        Start a Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/contact"
                        className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                    >
                        <Calendar className="w-5 h-5" />
                        Book a Call
                    </Link>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 text-blue-100"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {["/fizan.webp", "/sayem.webp", "/mushfiq.webp"].map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030f45] overflow-hidden">
                                    <img src={src} alt="Client" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium">500+ Happy Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm font-medium">5.0 Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#60a5fa]" />
                        <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
};

export default CTASection;
