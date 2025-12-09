"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Globe, Star, Quote } from "lucide-react";
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';
import GeometricShapes from './backgrounds/GeometricShapes';

const companies = [
    { name: "Satsuma Corporation", category: "Japanese Website", logo: "/satsuna.png", width: 120, testimonial: "Outstanding quality and professionalism" },
    { name: "BONZER", category: "Saloon Management", logo: "/bonzer.png", width: 100, testimonial: "Transformed our business operations" },
    { name: "BROTHERS", category: "E-Commerce", logo: "/brothers.png", width: 100, testimonial: "Exceeded all expectations" },
    { name: "Gadget Bodda", category: "E-Commerce", logo: "/bodda.png", width: 120, testimonial: "Best development partner we've had" },
    { name: "Apple Mart", category: "E-Commerce", logo: "/apple_mart.png", width: 130, testimonial: "Incredible attention to detail" },
    { name: "DLM Properties", category: "Real-Estate", logo: "/dlm.png", width: 90, testimonial: "Delivered beyond our requirements" },
    { name: "Afrin Pharma", category: "Pharmacy", logo: "/apPharma.png", width: 80, testimonial: "Professional and reliable team" },
    { name: "Bhai Bhai", category: "Garments & Apparels", logo: "/bhai-bhai.png", width: 90, testimonial: "Highly recommend their services" },
    { name: "Corporate Care", category: "HRM & Payroll", logo: "/corporate-care.png", width: 120, testimonial: "Streamlined our HR processes" },
    { name: "Donation", category: "Donation Management", logo: "/dontaion.png", width: 80, testimonial: "Made our platform user-friendly" },
];

const industryStats = [
    { icon: <Building2 className="w-5 h-5" />, label: "E-Commerce", count: "15+", color: "from-blue-500 to-cyan-500" },
    { icon: <Globe className="w-5 h-5" />, label: "Real Estate", count: "12+", color: "from-purple-500 to-pink-500" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Healthcare", count: "8+", color: "from-emerald-500 to-teal-500" },
    { icon: <Star className="w-5 h-5" />, label: "Others", count: "15+", color: "from-amber-500 to-orange-500" },
];

const TrustedBy = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <AnimatedGradient variant="blue" intensity="light" />
            <FloatingShapes variant="default" count={7} />
            <GridPattern variant="dots" opacity={0.06} color="#2563eb" />
            <GeometricShapes variant="default" count={3} />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-[#2563eb] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        TRUSTED PARTNERS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[#030f45] mb-4"
                    >
                        Chosen by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#030f45] to-[#2563eb]">50+ Companies</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        We are proud to have partnered with diverse businesses across multiple industries, delivering impactful digital solutions that drive growth and innovation.
                    </motion.p>
                </div>

                {/* Industry Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
                >
                    {industryStats.map((stat, index) => (
                        <div key={index} className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}></div>
                            <div className="relative bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white md:mb-2 flex-shrink-0`}>
                                    {stat.icon}
                                </div>
                                <div className="flex-1 md:flex-initial">
                                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tabular-nums`}>
                                        {stat.count}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px]"
                        >
                            {/* Category Badge */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-[10px] font-bold px-2 py-1 bg-gradient-to-r from-[#030f45] to-[#2563eb] text-white rounded-full uppercase tracking-wide">
                                    {company.category}
                                </span>
                            </div>

                            {/* Logo */}
                            <div className="relative w-full h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 mb-3">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={company.width}
                                    height={80}
                                    className="object-contain max-h-16 w-auto transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                />
                            </div>

                            {/* Testimonial Quote */}
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex items-start gap-1 text-xs text-gray-500 italic">
                                    <Quote className="w-3 h-3 flex-shrink-0 mt-0.5 text-[#2563eb]" />
                                    <p className="line-clamp-2">{company.testimonial}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>
                        <span className="font-semibold">4.9/5.0 Client Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#2563eb]" />
                        <span className="font-semibold">98% Project Success Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#2563eb]" />
                        <span className="font-semibold">5+ Countries Served</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;
