"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Shield, TrendingUp, Sparkles, Users, Rocket, Award } from 'lucide-react';
import Link from 'next/link';

export default function WhiteLabelService() {
    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#030f45] to-[#1e3a8a]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4 text-[#2563eb]" />
                        PARTNERSHIP PROGRAM
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4 text-white"
                    >
                        Expand Your Business with{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
                            White-Label Solutions
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-100 text-lg md:text-xl leading-relaxed font-light"
                    >
                        Deliver high-quality results faster, without investing in a full-time development team.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {/* Large Feature Card - Spans 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="md:col-span-2 lg:row-span-2 group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 border border-[#2563eb]/30 flex items-center justify-center mb-6">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-white">
                                        100% White-Label Fulfillment
                                    </h3>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        Launch fully branded, high-performance apps without building from scratch. We handle all development while you maintain complete brand ownership.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
                                        <span className="text-sm">Your brand, our expertise</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
                                        <span className="text-sm">Complete confidentiality</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
                                        <span className="text-sm">Seamless integration</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quality Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 border border-[#2563eb]/30 flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#60a5fa] transition-colors">
                                High-Quality Results
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Quality, timeliness, and affordability - our experienced team brings all three to every project.
                            </p>
                        </div>
                    </motion.div>

                    {/* Scale Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 border border-[#2563eb]/30 flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#60a5fa] transition-colors">
                                Scale Easily
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Reach new markets with ease by using our development team as your own - minus the hiring burden.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Card - Horizontal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="md:col-span-2 group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                            <div className="grid grid-cols-3 gap-6 h-full">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 border border-[#2563eb]/30 flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                                    <div className="text-sm text-gray-400">Partners</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 border border-[#2563eb]/30 flex items-center justify-center mx-auto mb-3">
                                        <Rocket className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">200+</div>
                                    <div className="text-sm text-gray-400">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 border border-[#2563eb]/30 flex items-center justify-center mx-auto mb-3">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                                    <div className="text-sm text-gray-400">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-300"></div>
                        <div className="relative h-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] p-6 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    Ready to Partner?
                                </h3>
                                <p className="text-blue-100 text-sm mb-4">
                                    Join our growing network of successful partners.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#030f45] px-6 py-3 rounded-xl font-bold transition-all hover:bg-gray-100 transform hover:-translate-y-1 shadow-lg"
                            >
                                Get Started
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </section>
    );
}
