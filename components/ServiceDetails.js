"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceDetails({ slug }) {
    const service = servicesData[slug];
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    if (!service) {
        return notFound();
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-12 relative overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

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
                            className="text-xl text-gray-600 leading-relaxed mb-8"
                        >
                            {service.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/appointment"
                                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                Book a Call
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(#2563eb 2px, transparent 2px), linear-gradient(90deg, #2563eb 2px, transparent 2px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Overview</h2>
                        <p className="text-gray-700 text-lg leading-relaxed text-center">
                            {service.overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-20 right-10 w-96 h-96 bg-blue-400/40 rounded-full filter blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/40 rounded-full filter blur-3xl"
                        animate={{
                            scale: [1.3, 1, 1.3],
                            opacity: [0.6, 0.4, 0.6],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Key Features</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Comprehensive capabilities designed to deliver exceptional results
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {service.keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Process Timeline */}
            < section className="py-20 bg-white relative overflow-hidden" >
                {/* Soft Animated Circles Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -30, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 30, 0],
                            scale: [1.1, 1, 1.1],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A proven methodology that ensures successful project delivery
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 mb-12 last:mb-0"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        {step.step}
                                    </div>
                                    {index < service.process.length - 1 && (
                                        <div className="w-0.5 h-full bg-blue-200 mx-auto mt-4"></div>
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Technologies Section */}
            < section className="py-20 bg-gray-50 relative overflow-hidden" >
                {/* Floating Tech Icons Background */}
                < div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15" >
                    {
                        [...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-16 h-16 border-3 border-primary rounded-lg"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -60, 0],
                                    rotate: [0, 180, 360],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 4,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                }}
                            />
                        ))
                    }
                </div >

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technologies We Use</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Industry-leading tools and technologies for optimal results
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {service.techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="w-16 h-16 relative flex-shrink-0">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <span className="font-semibold text-gray-800 text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Benefits Grid */}
            < section className="py-20 bg-white relative overflow-hidden" >
                {/* Radial Gradient Background */}
                < div className="absolute inset-0" >
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-full h-full opacity-30">
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl"></div>
                    </div>
                </div >

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            The advantages that set our services apart
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-8 h-8 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Case Studies */}
            < section className="py-20 bg-gray-50 relative overflow-hidden" >
                {/* Animated Dots Pattern */}
                < div className="absolute inset-0 opacity-25" >
                    {
                        [...Array(50)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-primary rounded-full"
                                style={{
                                    left: `${(i % 10) * 10}%`,
                                    top: `${Math.floor(i / 10) * 20}%`,
                                }}
                                animate={{
                                    scale: [1, 2, 1],
                                    opacity: [0.4, 0.8, 0.4],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.05,
                                }}
                            />
                        ))
                    }
                </div >

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Real projects showcasing our expertise and results
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {service.caseStudies.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
                            >
                                <div className="relative h-48 bg-gray-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                                    >
                                        View Project
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Pricing Packages */}
            < section className="py-20 bg-white relative overflow-hidden" >
                {/* Wave Pattern Background */}
                < div className="absolute inset-0 opacity-20" >
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#2563eb" strokeWidth="3" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#wave)" />
                    </svg>
                </div >

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pricing Packages</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Flexible pricing options to match your needs and budget
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {service.packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative p-8 rounded-2xl border-2 ${pkg.recommended
                                    ? 'border-primary bg-blue-50 shadow-xl scale-105'
                                    : 'border-gray-200 bg-white shadow-sm'
                                    }`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                                        Recommended
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                                </div>
                                <p className="text-gray-600 mb-6">{pkg.duration}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`block text-center px-6 py-3 rounded-full font-bold transition-colors ${pkg.recommended
                                        ? 'bg-primary text-white hover:bg-secondary'
                                        : 'bg-gray-100 text-primary hover:bg-gray-200'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className="py-20 bg-gray-50" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Find answers to common questions about our {service.title.toLowerCase()} services
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {service.faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                    {activeFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {activeFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Testimonials */}
            < section className="py-20 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Hear what our clients say about working with us
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTestimonial}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
                                        <Image
                                            src={service.testimonials[activeTestimonial].image}
                                            alt={service.testimonials[activeTestimonial].name}
                                            width={80}
                                            height={80}
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                                        "{service.testimonials[activeTestimonial].text}"
                                    </p>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        {service.testimonials[activeTestimonial].name}
                                    </h4>
                                    <p className="text-gray-600">{service.testimonials[activeTestimonial].role}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="flex justify-center gap-2 mt-8">
                            {service.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-primary' : 'bg-gray-300'
                                        }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-20 bg-primary text-white relative overflow-hidden" >
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
            </section >
        </div >
    );
}
