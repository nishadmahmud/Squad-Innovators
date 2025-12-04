"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

const OurServices = () => {
    // Convert servicesData object to array for mapping
    const services = Object.entries(servicesData).map(([slug, service]) => ({
        ...service,
        slug
    }));

    // Define grid spans for Bento layout
    const getGridSpan = (index) => {
        // Pattern: 2 cols, 1 col, 1 col, 2 cols, 1 col, 1 col...
        const pattern = [
            'md:col-span-2', 'md:col-span-1', 'md:col-span-1',
            'md:col-span-2', 'md:col-span-1', 'md:col-span-1',
            'md:col-span-2'
        ];
        return pattern[index % pattern.length];
    };

    // Define background gradients
    const getGradient = (index) => {
        const gradients = [
            'bg-gradient-to-br from-blue-50 to-white',
            'bg-white',
            'bg-white',
            'bg-gradient-to-br from-cyan-50 to-white',
            'bg-white',
            'bg-white',
            'bg-gradient-to-br from-indigo-50 to-white'
        ];
        return gradients[index % gradients.length];
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id='service' className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-gray-50 to-gray-50"></div>
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        What We Do
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-4xl md:text-5xl font-bold text-primary mb-6'
                    >
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        We deliver end-to-end digital solutions tailored to your business needs, ensuring growth and scalability.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
                >
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className={`group relative rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between ${getGridSpan(index)} ${getGradient(index)}`}
                        >
                            <motion.div variants={item} className="h-full flex flex-col relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                                            {React.cloneElement(service.icon, { size: 28 })}
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <ArrowUpRight className="w-5 h-5 text-primary" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurServices;
