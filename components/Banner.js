"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Play } from "lucide-react";
import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

const Banner = () => {
    return (
        <div id="home" className="relative w-full min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#030f45]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Wave Background Integration */}
                <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                    <WaveBackground />
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary text-sm font-bold uppercase tracking-wider mb-8 shadow-lg">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                            </span>
                            #1 Software Development Company
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                            We Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Digital Empires</span>
                        </h1>

                        <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
                            Transforming visionary ideas into high-performance software. We are the architects of your digital future.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mb-12">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-accent rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(0,200,224,0.5)] hover:shadow-[0_0_30px_rgba(0,200,224,0.8)] transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </Link>

                            <Link
                                href="/projects"
                                className="flex items-center gap-3 text-white font-semibold hover:text-secondary transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                                View Our Work
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 pt-8 border-t border-white/10 w-full">
                            <div className="flex -space-x-4">
                                {[
                                    "/fizan.png",
                                    "/sayem.jpg",
                                    "/mushfiq.jpg",
                                    "/mazhar.jpg"
                                ].map((src, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#030f45] overflow-hidden">
                                        <Image
                                            src={src}
                                            width={48}
                                            height={48}
                                            alt="Client"
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-white text-sm font-medium">Trusted by <span className="text-secondary font-bold">500+</span> Clients</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: 3D/Glass Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                            {/* Main Glass Card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden z-10"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50"></div>
                                <Image
                                    src="/banner_dashboard.png"
                                    alt="Dashboard"
                                    fill
                                    className="object-contain p-8 drop-shadow-2xl"
                                    unoptimized
                                />
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 backdrop-blur-xl rounded-3xl border border-white/20 z-20 flex items-center justify-center shadow-xl"
                            >
                                <div className="text-center">
                                    <span className="block text-4xl font-bold text-white">98%</span>
                                    <span className="text-xs text-blue-100 uppercase tracking-wider">Success Rate</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-5 -left-5 w-48 h-24 bg-accent/20 backdrop-blur-xl rounded-2xl border border-white/20 z-20 flex items-center gap-4 px-4 shadow-xl"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <span className="block text-sm text-blue-100">Projects Completed</span>
                                    <span className="block text-lg font-bold text-white">50+</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
