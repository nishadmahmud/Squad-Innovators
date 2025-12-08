"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Check, Users, Zap, Code, Star, TrendingUp } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const OurServices = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Convert servicesData object to array and add extra info
    const servicesArray = Object.entries(servicesData).map(([slug, service]) => ({
        ...service,
        slug,
        projects: slug.includes('ui-ux') ? '25+' : slug.includes('mobile') ? '15+' : slug.includes('ecommerce') ? '20+' : '12+',
        category: slug.includes('ui-ux') || slug.includes('software') ? 'Development' : slug.includes('mobile') || slug.includes('ecommerce') ? 'Applications' : 'Infrastructure',
        features: slug.includes('ui-ux')
            ? ['User Research', 'Wireframing', 'Prototyping', 'Testing']
            : slug.includes('mobile')
                ? ['iOS & Android', 'Cross-platform', 'App Store Deploy', 'Maintenance']
                : slug.includes('ecommerce')
                    ? ['Payment Gateway', 'Inventory', 'Analytics', 'SEO']
                    : ['Scalable', 'Secure', 'Cloud-ready', 'API Integration']
    }));

    // Define preferred order
    const preferredOrder = ['ecommerce', 'mobile', 'ui-ux', 'software', 'saas', 'white-label', 'api'];

    // Sort services by preferred order
    const services = servicesArray.sort((a, b) => {
        const indexA = preferredOrder.findIndex(slug => a.slug.includes(slug));
        const indexB = preferredOrder.findIndex(slug => b.slug.includes(slug));

        // If both found in preferred order, sort by index
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        // If only A found, A comes first
        if (indexA !== -1) return -1;
        // If only B found, B comes first
        if (indexB !== -1) return 1;
        // Otherwise maintain original order
        return 0;
    });

    const categories = ['all', 'Development', 'Applications', 'Infrastructure'];

    const filteredServices = activeFilter === 'all'
        ? services
        : services.filter(s => s.category === activeFilter);

    const getGridSpan = (index) => {
        const pattern = [
            'md:col-span-2', // Wide card
            'md:col-span-1',
            'md:col-span-1',
            'md:col-span-2', // Wide card
            'md:col-span-1',
            'md:col-span-1',
            'md:col-span-2' // Wide card
        ];
        return pattern[index % pattern.length];
    };

    const getGradient = (index) => {
        const gradients = [
            'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
            'bg-white',
            'bg-white',
            'bg-gradient-to-br from-cyan-50 via-white to-blue-50',
            'bg-white',
            'bg-white',
            'bg-gradient-to-br from-purple-50 via-white to-pink-50'
        ];
        return gradients[index % gradients.length];
    };

    const isFeatured = (index) => {
        // First card (e-commerce) is featured
        return index === 0;
    };

    return (
        <section id="service" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-gray-50 to-gray-50"></div>
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-[#2563eb] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        WHAT WE DO
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-primary mb-4"
                    >
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        End-to-end digital solutions tailored to your business needs, with proven expertise across multiple domains.
                    </motion.p>
                </div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-md'
                                }`}
                        >
                            {category === 'all' ? 'All Services' : category}
                        </button>
                    ))}
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
                >
                    {[
                        { icon: <Code className="w-5 h-5" />, label: 'Services', value: '7+', color: 'from-blue-500 to-cyan-500' },
                        { icon: <Users className="w-5 h-5" />, label: 'Projects', value: '50+', color: 'from-purple-500 to-pink-500' },
                        { icon: <Star className="w-5 h-5" />, label: 'Rating', value: '4.9', color: 'from-emerald-500 to-teal-500' },
                        { icon: <TrendingUp className="w-5 h-5" />, label: 'Success', value: '98%', color: 'from-amber-500 to-orange-500' },
                    ].map((stat, index) => (
                        <div key={index} className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}></div>
                            <div className="relative bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-2`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tabular-nums`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Services Grid - Bento Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]"
                >
                    {filteredServices.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className={`group relative rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between ${getGridSpan(index)} ${getGradient(index)}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full flex flex-col relative z-10"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`${isFeatured(index) ? 'w-20 h-20' : 'w-16 h-16'} bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                                            {React.cloneElement(service.icon, { size: isFeatured(index) ? 36 : 32 })}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <ArrowUpRight className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
                                            <Zap className="w-3 h-3 text-amber-500" />
                                            <span className="text-xs font-semibold text-gray-700">{service.projects}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className={`${isFeatured(index) ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-gray-600 leading-relaxed mb-6 ${isFeatured(index) ? 'line-clamp-4' : 'line-clamp-3'}`}>
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span className="truncate">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
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
