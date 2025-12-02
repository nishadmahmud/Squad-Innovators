"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceDetails({ slug }) {
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 text-primary"
                        >
                            {service.icon}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-primary mb-6"
                        >
                            {service.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed"
                        >
                            {service.description}
                        </motion.p>
                    </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6">What We Do</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {service.details}
                            </p>
                            <div className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 rounded-3xl p-10 border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-8">Technologies We Use</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {service.techStack.map((tech, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 relative flex-shrink-0">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                fill
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>
                                        <span className="font-semibold text-gray-800">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                        Let's collaborate to build something amazing. Our team is ready to bring your ideas to life with our {service.title} expertise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/appointment"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
                </div>
            </section>
        </div>
    );
}
