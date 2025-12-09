"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCart,
    Store,
    Coffee,
    Globe,
    Truck,
    Car,
    Shirt,
    HeartHandshake,
    BrainCircuit,
    Pill,
    Activity,
    Scissors
} from 'lucide-react';
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const industries = [
    { name: "E-Commerce", icon: <ShoppingCart />, color: "from-teal-500 to-cyan-600" },
    { name: "POS Systems", icon: <Store />, color: "from-orange-500 to-red-600" },
    { name: "Lifestyle", icon: <Coffee />, color: "from-blue-500 to-indigo-600" },
    { name: "Official Website", icon: <Globe />, color: "from-green-500 to-emerald-600" },
    { name: "Logistics", icon: <Truck />, color: "from-amber-500 to-orange-600" },
    { name: "Automotive", icon: <Car />, color: "from-red-500 to-rose-600" },
    { name: "Fashion & Apparel", icon: <Shirt />, color: "from-pink-500 to-fuchsia-600" },
    { name: "Non-Profit", icon: <HeartHandshake />, color: "from-rose-500 to-pink-600" },
    { name: "AI Solutions", icon: <BrainCircuit />, color: "from-purple-500 to-violet-600" },
    { name: "Pharmacy", icon: <Pill />, color: "from-cyan-500 to-blue-600" },
    { name: "Health & Fitness", icon: <Activity />, color: "from-emerald-500 to-green-600" },
    { name: "Saloon & Spa", icon: <Scissors />, color: "from-indigo-500 to-purple-600" },
];

const IndustryExpertises = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Components */}
            <AnimatedGradient variant="blue" intensity="light" />
            <FloatingShapes variant="default" count={6} />
            <GridPattern variant="dots" opacity={0.06} color="#2563eb" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-[#2563eb] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        INDUSTRIES WE SERVE
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4"
                    >
                        <span className="text-[#030f45]">Expertise Across </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#030f45] to-[#2563eb]">
                            Sectors
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl leading-relaxed"
                    >
                        Our deep understanding of diverse industries empowers us to design customized software solutions that drive real results.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
                    {/* E-Commerce - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="col-span-2 row-span-2 group relative"
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${industries[0].color} rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>
                        <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industries[0].color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                                    {React.cloneElement(industries[0].icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {industries[0].name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Building scalable online stores with seamless payment integration and inventory management.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Regular Cards */}
                    {industries.slice(1, 7).map((item, index) => (
                        <motion.div
                            key={index + 1}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 1) * 0.05, duration: 0.3 }}
                            className="col-span-1 group relative"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>
                            <div className="relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 text-white shadow-md`}>
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <h3 className="text-base font-bold text-gray-800">
                                    {item.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}

                    {/* AI Solutions - Wide Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="col-span-2 group relative"
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${industries[8].color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>
                        <div className="relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industries[8].color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                                {React.cloneElement(industries[8].icon, { size: 28 })}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    {industries[8].name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Cutting-edge AI integration
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Remaining Cards */}
                    {industries.slice(9).map((item, index) => (
                        <motion.div
                            key={index + 9}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 9) * 0.05, duration: 0.3 }}
                            className="col-span-1 group relative"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>
                            <div className="relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 text-white shadow-md`}>
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <h3 className="text-base font-bold text-gray-800">
                                    {item.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryExpertises;
