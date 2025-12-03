"use client";

import React from 'react';
import Image from 'next/image';
import { clientsData } from '@/lib/clientsData';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function ClientsPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-50/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Portfolio
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">500+ Clients</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
                        We are proud to have partnered with these amazing companies to build digital solutions that drive growth.
                    </motion.p>
                </motion.div>

                {/* Clients Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {clientsData.map((client) => (
                        <motion.div
                            key={client.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative w-24 h-24 mb-6 rounded-2xl overflow-hidden bg-white p-4 shadow-inner group-hover:shadow-md transition-all duration-300 border border-gray-50 group-hover:border-blue-100">
                                <Image
                                    src={client.logo}
                                    alt={client.title}
                                    fill
                                    className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    unoptimized
                                />
                            </div>

                            <h3 className="relative text-lg font-bold text-gray-700 group-hover:text-primary transition-colors">
                                {client.title}
                            </h3>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-200">
                                <Building2 size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
