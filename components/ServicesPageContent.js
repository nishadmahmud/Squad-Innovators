"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

const ServicesPageContent = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12 overflow-hidden">
            {/* Hero Section */}
            <section className="relative container mx-auto px-4 mb-16 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto"
                >
                    <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Expertise
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Solutions that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Empower</span> You
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        We offer a comprehensive suite of digital services designed to help your business grow, innovate, and succeed in the digital age.
                    </motion.p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {Object.entries(servicesData).map(([slug, service]) => (
                        <motion.div
                            key={slug}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    href={`/services/${slug}`}
                                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                                >
                                    Learn More <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPageContent;
