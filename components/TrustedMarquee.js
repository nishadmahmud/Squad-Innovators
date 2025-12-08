"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

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

    return (
        <div className='py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section with Stats */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block">
                        <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
                            OUR CLIENTS
                        </p>
                        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#030f45] via-[#2563eb] to-[#030f45] bg-clip-text text-transparent animate-gradient-x mb-4">
                            Chosen by <span className="inline-flex items-baseline">
                                <span className="tabular-nums">{count}</span>
                                <span>+</span>
                            </span> Companies
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            We are proud to have partnered with diverse businesses across the country,
                            <br className="hidden md:block" />
                            delivering <span className="font-semibold text-[#2563eb]">impactful digital solutions</span> that drive growth.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        <div className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                {count}+
                            </div>
                            <div className="text-sm text-gray-600 font-medium mt-1">Happy Clients</div>
                        </div>
                        <div className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                100%
                            </div>
                            <div className="text-sm text-gray-600 font-medium mt-1">Satisfaction</div>
                        </div>
                        <div className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                24/7
                            </div>
                            <div className="text-sm text-gray-600 font-medium mt-1">Support</div>
                        </div>
                    </div>
                </div>

                {/* Logo Marquee Section */}
                <div className="relative">
                    {/* Gradient Masks with Glow */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-indigo-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Top Row - Moving Right */}
                    <Marquee gradient={false} speed={50} pauseOnHover={true} className="mb-8">
                        <div className="flex items-center gap-8 px-4">
                            {logos.map((logo, index) => (
                                <div
                                    key={`top-${index}`}
                                    className="relative group cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>

                                    {/* Card */}
                                    <div className="relative bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 w-48 h-32 flex items-center justify-center overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                        <Image
                                            className='object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10'
                                            width={150}
                                            height={80}
                                            alt='client_logo'
                                            src={logo}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>

                    {/* Bottom Row - Moving Left */}
                    <Marquee gradient={false} speed={50} pauseOnHover={true} direction="right">
                        <div className="flex items-center gap-8 px-4">
                            {logos.reverse().map((logo, index) => (
                                <div
                                    key={`bottom-${index}`}
                                    className="relative group cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-indigo-500/20 to-blue-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>

                                    {/* Card */}
                                    <div className="relative bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 w-48 h-32 flex items-center justify-center overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                        <Image
                                            className='object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10'
                                            width={150}
                                            height={80}
                                            alt='client_logo'
                                            src={logo}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-40px, 30px) scale(0.9); }
                    66% { transform: translate(30px, -20px) scale(1.1); }
                }

                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.15; transform: scale(1); }
                    50% { opacity: 0.25; transform: scale(1.1); }
                }

                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
                }

                .animate-gradient-x {
                    background-size: 200% auto;
                    animation: gradient-x 3s linear infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, #030f45 1px, transparent 1px),
                        linear-gradient(to bottom, #030f45 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </div>
    );
};

export default TrustedMarquee;
