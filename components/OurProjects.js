"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Layers } from "lucide-react";
import { clientsData } from "@/lib/clientsData";


// Select top projects to feature
const featuredProjects = clientsData.slice(0, 5);

export default function OurProjects() {
    const [activeindex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const activeProject = featuredProjects[activeindex];

    return (
        <section id="projects" className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">


            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-bold tracking-wider uppercase text-sm"
                        >
                            Our Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-primary mt-2"
                        >
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/projects" className="group flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                            View All Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile View - Horizontal Scroll */}
                <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
                    <div className="flex gap-4 w-max">
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl overflow-hidden shadow-xl group w-[85vw] flex-shrink-0"
                            >
                                {/* Background Image */}
                                <div className="relative h-64 bg-gray-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
                                    >
                                        View Live Site
                                        <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Desktop View - Original Layout */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 h-[550px]">
                    {/* Project List (Left) */}
                    <div className="lg:col-span-4 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar h-full">
                        {featuredProjects.map((project, index) => (
                            <button
                                key={project.id}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`text-left p-5 rounded-xl transition-all duration-300 border border-transparent group relative overflow-hidden ${activeindex === index
                                    ? "bg-primary text-white shadow-lg scale-[1.02]"
                                    : "bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-100"
                                    }`}
                            >
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${activeindex === index ? "bg-white/20 text-white" : "bg-white text-gray-400 group-hover:text-primary"
                                        }`}>
                                        <Layers size={20} />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg leading-tight mb-1 ${activeindex === index ? "text-white" : "text-gray-800"
                                            }`}>
                                            {project.title}
                                        </h3>
                                        <p className={`text-xs line-clamp-1 ${activeindex === index ? "text-white/70" : "text-gray-500"
                                            }`}>
                                            {project.technologies.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Bar for Active Item */}
                                {activeindex === index && isAutoPlaying && (
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                        className="absolute bottom-0 left-0 h-1 bg-secondary"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Project Preview (Right) */}
                    <div className="lg:col-span-8 relative h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl group"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 bg-gray-900">
                                    <Image
                                        src={activeProject.image}
                                        alt={activeProject.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {activeProject.technologies.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                            {activeProject.title}
                                        </h3>

                                        <p className="text-gray-300 text-lg max-w-2xl mb-8 line-clamp-3">
                                            {activeProject.description}
                                        </p>

                                        <div className="flex gap-4">
                                            <Link
                                                href={activeProject.liveLink}
                                                target="_blank"
                                                className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                            >
                                                View Live Site
                                                <ExternalLink size={18} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
