"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const products = [
    {
        id: 1,
        title: "Outlet Expense",
        category: "Business Management",
        description: "Precise tracking, automated workflows, and real-time insights to streamline your business operations.",
        image: "/outlet-2.png",
        color: "from-blue-500 to-cyan-400",
        link: 'https://outletexpense.com/'
    },
    {
        id: 2,
        title: "Day Planner",
        category: "Productivity",
        description: "Unleash Your Potential with the Ultimate Day Planner App. Organize Your Life, Maximize Your Productivity.",
        image: "/day-planner-p.png",
        color: "from-purple-500 to-pink-400",
        link: 'https://www.dayplannerapp.com/'
    },
    {
        id: 3,
        title: "Squad HRM",
        category: "Enterprise",
        description: "Seamlessly manage your workforce with Squad HRM, an all-in-one Human Resource Management System.",
        image: "/hrm.png",
        color: "from-teal-500 to-emerald-400",
        link: '#'
    },
];

export default function OurProjects() {
    const [activeTab, setActiveTab] = useState(0);

    // Auto-rotate tabs
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
                        Featured <span className="text-gradient">Products</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Smart, scalable, and future-ready solutions built to solve real-world problems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Tabs */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {products.map((product, index) => (
                            <button
                                key={product.id}
                                onClick={() => setActiveTab(index)}
                                className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${activeTab === index
                                    ? "bg-white border-primary/10 shadow-xl scale-105"
                                    : "bg-gray-50 border-transparent hover:bg-gray-100"
                                    }`}
                            >
                                <h3 className={`text-xl font-bold mb-2 ${activeTab === index ? "text-primary" : "text-gray-500"}`}>
                                    {product.title}
                                </h3>
                                <p className={`text-sm line-clamp-2 ${activeTab === index ? "text-gray-600" : "text-gray-400"}`}>
                                    {product.description}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Preview */}
                    <div className="lg:col-span-7 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${products[activeTab].color} opacity-20`}></div>

                                <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                                    {/* Text Content */}
                                    <div className="flex flex-col justify-center">
                                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 w-fit backdrop-blur-md">
                                            {products[activeTab].category}
                                        </span>

                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                            {products[activeTab].title}
                                        </h3>

                                        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                                            {products[activeTab].description}
                                        </p>

                                        <Link
                                            href={products[activeTab].link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-fit group text-sm md:text-base"
                                        >
                                            View Project
                                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Image Container */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="relative h-full w-full flex items-center justify-center"
                                    >
                                        <div className="relative w-full aspect-video md:aspect-square rounded-xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <Image
                                                src={products[activeTab].image}
                                                alt={products[activeTab].title}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
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
