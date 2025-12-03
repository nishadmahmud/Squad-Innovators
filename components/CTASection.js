"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 mb-16 rounded-3xl relative overflow-hidden bg-primary text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Blobs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary font-bold text-sm mb-8"
                >
                    <Sparkles size={16} />
                    <span>Let's Create Something Amazing</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight"
                >
                    Ready to Transform Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Vision?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
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
                        className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
                    >
                        Start a Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/contact"
                        className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                    >
                        <Calendar className="w-5 h-5" />
                        Book a Call
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
