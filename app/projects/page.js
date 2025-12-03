"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clientsData } from '@/lib/clientsData';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Work
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        Discover how we've helped businesses transform their digital presence with custom solutions.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {clientsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                                {/* Overlay Content */}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="text-[10px] font-bold px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <ExternalLink size={20} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="absolute top-0 right-8 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center -translate-y-1/2 shadow-lg group-hover:bg-secondary transition-colors duration-300">
                                    <Layers size={24} />
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors mt-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-auto uppercase tracking-wider"
                                >
                                    View Project
                                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
