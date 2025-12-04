"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

const techStack = {
    "Backend": [
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
    "Frontend": [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
    "Mobile App": [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ],
    "E-Commerce": [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    ],
    "Cloud": [
        { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    "Database": [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    "Design": [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    ],
};

const TechStackTabs = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-primary text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        Technology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Our Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We leverage a diverse range of cutting-edge technologies to build scalable, reliable, and secure applications.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex gap-3 w-max md:w-auto">
                        {Object.keys(techStack).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base relative overflow-hidden group whitespace-nowrap ${activeTab === tab
                                    ? "text-white shadow-lg scale-105"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tech Icons Marquee */}
                <div className="min-h-[300px] relative">
                    {/* Gradient Masks for Smooth Fade */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-10">
                                <div className="flex gap-8 px-4">
                                    {[...techStack[activeTab], ...techStack[activeTab], ...techStack[activeTab], ...techStack[activeTab]].map((tech, index) => (
                                        <div
                                            key={`${tech.name}-${index}`}
                                            className="group relative w-40 h-40 bg-white rounded-[2rem] flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 mx-4 cursor-pointer hover:-translate-y-2"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem]"></div>

                                            <div className="relative z-10 w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                                                <Image
                                                    unoptimized
                                                    width={64}
                                                    height={64}
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>

                                            <p className="relative z-10 text-gray-600 font-bold text-sm group-hover:text-primary transition-colors duration-300">
                                                {tech.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TechStackTabs;
