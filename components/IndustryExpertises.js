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

const industries = [
    { name: "E-Commerce", icon: <ShoppingCart />, color: "bg-teal-100 text-teal-600" },
    { name: "POS Systems", icon: <Store />, color: "bg-orange-100 text-orange-600" },
    { name: "Lifestyle", icon: <Coffee />, color: "bg-blue-100 text-blue-600" },
    { name: "Official Website", icon: <Globe />, color: "bg-green-100 text-green-600" },
    { name: "Logistics", icon: <Truck />, color: "bg-amber-100 text-amber-600" },
    { name: "Automotive", icon: <Car />, color: "bg-red-100 text-red-600" },
    { name: "Fashion & Apparel", icon: <Shirt />, color: "bg-pink-100 text-pink-600" },
    { name: "Non-Profit", icon: <HeartHandshake />, color: "bg-rose-100 text-rose-600" },
    { name: "AI Solutions", icon: <BrainCircuit />, color: "bg-purple-100 text-purple-600" },
    { name: "Pharmacy", icon: <Pill />, color: "bg-cyan-100 text-cyan-600" },
    { name: "Health & Fitness", icon: <Activity />, color: "bg-emerald-100 text-emerald-600" },
    { name: "Saloon & Spa", icon: <Scissors />, color: "bg-indigo-100 text-indigo-600" },
];

const IndustryExpertises = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-wider uppercase text-sm"
                    >
                        Industries We Serve
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6"
                    >
                        Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sectors</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Our deep understanding of diverse industries empowers us to design customized software solutions that drive real results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {React.cloneElement(item.icon, { size: 28 })}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                                {item.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryExpertises;
