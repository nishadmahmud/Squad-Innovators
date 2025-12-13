"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Users, Rocket, CheckCircle2 } from "lucide-react";
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';
import WavyLines from './backgrounds/WavyLines';

const StrategySection = () => {
    return (
        <section className="bg-white text-black py-12 md:py-20 lg:py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Components */}
            <AnimatedGradient variant="cool" intensity="light" />
            <FloatingShapes variant="default" count={4} />
            <GridPattern variant="grid" opacity={0.04} color="#2563eb" />
            <WavyLines
                lineCount={3}
                color="#2563eb"
                opacity={0.06}
                amplitude={25}
                frequency={0.02}
                speed={2}
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Modern Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract Background Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl -z-10"></div>

                        <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
                            {/* Main Image */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                                <Image
                                    src="/evan-sir.webp"
                                    alt="Team Lead"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Floating Card 1 (Top Right) */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -top-12 -right-6 md:-right-12 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20"
                            >
                                <Image src="/ishan.jpeg" alt="Team Member" fill className="object-cover" unoptimized />
                            </motion.div>

                            {/* Floating Card 2 (Bottom Left) */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-8 -left-6 md:-left-12 w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20"
                            >
                                <Image src="/sayem.webp" alt="Team Member" fill className="object-cover" unoptimized />
                            </motion.div>

                            {/* Stats Badge */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-8 right-8 md:-right-4 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 border border-gray-100"
                            >
                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 leading-none">20+</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Expert Engineers</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content & Steps */}
                    <div className="space-y-12">
                        <div className="mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-secondary font-bold tracking-wider uppercase text-sm"
                            >
                                Our Process
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-primary mt-3 leading-tight"
                            >
                                From Concept to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Reality</span>
                            </motion.h2>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-100 -z-10"></div>

                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-8 group"
                            >
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 relative">
                                        <Phone size={24} className="text-primary group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        Initiate a Strategy Session
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We start with a deep dive into your business goals. Through consultative meetings, we define key objectives, timelines, and the perfect roadmap for success.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-8 group"
                            >
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 z-10 relative">
                                        <Users size={24} className="text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors">
                                        Shape Your Dream Team
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We assemble a dedicated team of experts tailored to your project's needs. Seamlessly integrate our developers, designers, and strategists with your vision.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-8 group"
                            >
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 z-10 relative">
                                        <Rocket size={24} className="text-purple-600 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                        Begin Your Journey
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        With the plan and team in place, we launch into execution. Expect transparent communication, agile development, and a focus on hitting every milestone.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
