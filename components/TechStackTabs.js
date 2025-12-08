"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

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

// 3D Tech Card Component
const TechCard = ({ tech, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseXPos = e.clientX - centerX;
        const mouseYPos = e.clientY - centerY;

        rotateY.set(mouseXPos / 15);
        rotateX.set(-mouseYPos / 15);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group cursor-pointer"
        >
            {/* Glow Effect */}
            <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#030f45] to-[#2563eb] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            />

            {/* Main Card */}
            <div
                className="relative w-40 h-48 bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{ transform: "translateZ(20px)" }}
            >
                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full rounded-2xl"
                    animate={isHovered ? { x: ["100%", "200%"] } : {}}
                    transition={{ duration: 0.5 }}
                />

                {/* Icon Container */}
                <motion.div
                    className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center"
                    style={{ transform: "translateZ(30px)" }}
                    animate={isHovered ? { scale: 1.1 } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        unoptimized
                        width={64}
                        height={64}
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Tech Name */}
                <motion.p
                    className="relative z-10 text-gray-700 font-semibold text-sm text-center px-4"
                    style={{ transform: "translateZ(25px)" }}
                >
                    {tech.name}
                </motion.p>
            </div>
        </motion.div>
    );
};

const TechStackTabs = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <section className="py-20 relative overflow-hidden bg-gray-50">
            {/* Simple Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-[#030f45] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        TECHNOLOGY
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-[#030f45]">Our Powerful </span>
                        <span className="bg-gradient-to-r from-[#030f45] to-[#2563eb] bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We leverage cutting-edge technologies to build scalable, reliable, and secure applications.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex gap-3 w-max md:w-auto">
                        {Object.keys(techStack).map((tab, idx) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm whitespace-nowrap ${activeTab === tab
                                        ? "text-white shadow-lg"
                                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTabBg"
                                        className="absolute inset-0 bg-gradient-to-r from-[#030f45] to-[#2563eb] rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Tech Cards Grid */}
                <div className="perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-wrap justify-center gap-6 py-8"
                        >
                            {techStack[activeTab].map((tech, index) => (
                                <TechCard key={tech.name} tech={tech} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default TechStackTabs;
