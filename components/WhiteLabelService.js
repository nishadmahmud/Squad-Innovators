"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function WhiteLabelService() {
    const features = [
        {
            title: "100% White-Label Fulfillment",
            description: "Launch fully branded, high-performance apps without building from scratch - we do the heavy lifting.",
            icon: <Zap className="w-6 h-6 text-secondary" />
        },
        {
            title: "Deliver High-Quality Results",
            description: "Quality, timeliness, and affordability - our experienced team brings all three to every project.",
            icon: <Shield className="w-6 h-6 text-secondary" />
        },
        {
            title: "Scale Your Business Easily",
            description: "Reach new markets with ease by using our development team as your own - minus the hiring burden.",
            icon: <TrendingUp className="w-6 h-6 text-secondary" />
        }
    ];

    return (
        <section className="py-24 rounded-3xl bg-primary relative overflow-hidden text-white">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md border border-white/10">
                            Partnership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Expand Your Business with Our <span className="text-secondary">White-Label</span> Solutions
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Deliver high-quality results faster, without investing in a full-time development team. We act as your silent partner, providing top-tier development services under your brand.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Become a Partner
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Feature Cards */}
                    <div className="flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
