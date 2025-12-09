"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ParticleNetwork from './backgrounds/ParticleNetwork';
import WavyLines from './backgrounds/WavyLines';
import GeometricShapes from './backgrounds/GeometricShapes';

const AboutPageContent = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12 overflow-hidden relative">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <ParticleNetwork
                    particleCount={40}
                    color="#2563eb"
                    lineColor="#2563eb"
                    maxDistance={100}
                    mouseRadius={150}
                    speed={0.2}
                />
                <WavyLines
                    lineCount={3}
                    color="#2563eb"
                    opacity={0.05}
                    amplitude={20}
                    frequency={0.015}
                    speed={1.5}
                />
                <GeometricShapes variant="default" count={3} />
            </div>

            {/* Hero Section */}
            <section className="relative container mx-auto px-4 mb-24 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-100/30 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Who We Are
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                        Innovating the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Solutions</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        Squad Innovators is a premier software development company dedicated to transforming ideas into powerful digital realities. We combine creativity, technology, and strategy to build products that drive growth.
                    </motion.p>
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-[2rem] border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Target size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To empower businesses with cutting-edge technology solutions that enhance efficiency, engagement, and profitability. We strive to be the catalyst for digital transformation, delivering excellence in every line of code.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group bg-gradient-to-br from-white to-cyan-50 p-8 rounded-[2rem] border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-secondary shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Zap size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To be a global leader in software innovation, recognized for our commitment to quality, creativity, and client success. We envision a world where technology seamlessly solves complex challenges.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team collaboration"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-xl">Collaborative Excellence</p>
                            <p className="text-white/80">Working together to achieve greatness</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary mb-8">
                            Why Partner with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Squad Innovators?</span>
                        </motion.h2>
                        <div className="space-y-6">
                            {[
                                { title: "Expert Team", desc: "A diverse team of skilled developers, designers, and strategists." },
                                { title: "Client-Centric Approach", desc: "We prioritize your goals and work collaboratively to achieve them." },
                                { title: "Innovative Solutions", desc: "We leverage the latest technologies to build future-proof products." },
                                { title: "Timely Delivery", desc: "We respect deadlines and ensure smooth, on-time project launches." },
                            ].map((item, index) => (
                                <motion.div variants={fadeInUp} key={index} className="flex gap-4 group">
                                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary py-20 text-white relative overflow-hidden" ref={ref}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: 500, suffix: "+", label: "Clients Worldwide", icon: <Users className="mx-auto mb-4 opacity-80" /> },
                            { number: 150, suffix: "+", label: "Projects Completed", icon: <CheckCircle2 className="mx-auto mb-4 opacity-80" /> },
                            { number: 50, suffix: "+", label: "Team Members", icon: <Users className="mx-auto mb-4 opacity-80" /> },
                            { number: 5, suffix: "+", label: "Years Experience", icon: <Award className="mx-auto mb-4 opacity-80" /> },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                {stat.icon}
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">
                                    {inView ? <CountUp end={stat.number} duration={2.5} /> : 0}{stat.suffix}
                                </div>
                                <div className="text-blue-200 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-[#05165e] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-blue-100 text-lg mb-10">
                            Join hundreds of satisfied clients who have partnered with Squad Innovators to build the future.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Get Started Today
                            <ArrowRight size={20} />
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPageContent;
