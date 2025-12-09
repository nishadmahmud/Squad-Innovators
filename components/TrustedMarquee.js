"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { Building2, Globe, TrendingUp, Award, Users, Zap } from 'lucide-react';
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const TrustedMarquee = () => {
    const [count, setCount] = useState(0);
    const targetCount = 50;

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = targetCount / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= targetCount) {
                setCount(targetCount);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    const logos = [
        "/bodda.png",
        "/apple_mart.png",
        "/satsuna.png",
        "/brothers.png",
        "/bhai-bhai.png",
        "/dontaion.png",
        "/bonzer.png",
        "/apPharma.png",
        "/corporate-care.png",
        "/dlm.png",
        "/mobile_club.png",
        "/PerfectGadgetBD-logo (1) 1.png"
    ];

    const industries = [
        { name: "E-Commerce", count: "15+", icon: <Building2 className="w-5 h-5" /> },
        { name: "Healthcare", count: "8+", icon: <Users className="w-5 h-5" /> },
        { name: "Real Estate", count: "12+", icon: <Globe className="w-5 h-5" /> },
        { name: "Retail", count: "10+", icon: <TrendingUp className="w-5 h-5" /> },
    ];

    const stats = [
        { label: "Happy Clients", value: `${count}+`, gradient: "from-blue-600 to-indigo-600", icon: <Award className="w-6 h-6" /> },
        { label: "Success Rate", value: "98%", gradient: "from-emerald-600 to-teal-600", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Countries Served", value: "5+", gradient: "from-purple-600 to-pink-600", icon: <Globe className="w-6 h-6" /> },
        { label: "Avg. Response Time", value: "<2h", gradient: "from-orange-600 to-red-600", icon: <Zap className="w-6 h-6" /> },
    ];

    return (
        <div className='py-10 md:py-16 lg:py-20 relative overflow-hidden bg-white'>
            {/* New Background Components */}
            <AnimatedGradient variant="blue" intensity="light" />
            <FloatingShapes variant="default" count={6} />
            <GridPattern variant="dots" opacity={0.08} color="#2563eb" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-6 md:mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-[#2563eb] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        TRUSTED WORLDWIDE
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4"
                    >
                        Chosen by <span className="inline-flex items-baseline tabular-nums">{count}+</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#030f45] to-[#2563eb]">Companies</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                    >
                        From startups to enterprises, we've partnered with diverse businesses across multiple industries,
                        delivering <span className="font-semibold text-[#2563eb]">impactful digital solutions</span> that drive measurable growth.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="group relative h-full">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full min-h-[140px] md:min-h-[160px] flex flex-col justify-center">
                                <div className={`inline-flex p-1.5 md:p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white mb-2 md:mb-3 w-fit`}>
                                    {React.cloneElement(stat.icon, { className: 'w-4 h-4 md:w-6 md:h-6' })}
                                </div>
                                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent tabular-nums leading-tight`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 font-medium mt-1 leading-tight">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Industry Breakdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 md:mb-12"
                >
                    <h3 className="text-center text-base md:text-lg font-bold text-gray-700 mb-4 md:mb-6">Industries We Serve</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="p-1.5 md:p-2 rounded-lg bg-gradient-to-br from-[#030f45] to-[#2563eb] text-white flex-shrink-0">
                                    {React.cloneElement(industry.icon, { className: 'w-4 h-4 md:w-6 md:h-6' })}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="font-bold text-gray-800 text-xs md:text-sm leading-tight truncate">{industry.name}</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 leading-tight">{industry.count} clients</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Client Logos Marquee */}
                <div className="relative">
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-indigo-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>

                    <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-8">
                        <div className="flex items-center gap-6 md:gap-12 px-3 md:px-6">
                            {logos.map((logo, index) => (
                                <div key={index} className="group relative w-28 h-16 md:w-40 md:h-24 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/40 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                    <Image
                                        className='object-contain w-full h-full p-2 md:p-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500'
                                        width={150}
                                        height={80}
                                        alt='client_logo'
                                        src={logo}
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="font-semibold">4.9/5.0 Average Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#2563eb]" />
                        <span className="font-semibold">ISO 9001 Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#2563eb]" />
                        <span className="font-semibold">24/7 Dedicated Support</span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(20px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 10s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.3; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default TrustedMarquee;
