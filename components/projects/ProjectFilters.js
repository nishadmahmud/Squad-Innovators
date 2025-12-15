"use client";

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'website', label: 'Website' },
    { id: 'mobile-apps', label: 'Mobile Apps' },
    { id: 'management-software', label: 'Management Software' },
];

export default function ProjectFilters({ selectedCategory, onCategoryChange }) {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            onClick={() => onCategoryChange(category.id)}
                            className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${selectedCategory === category.id
                                ? 'bg-secondary text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
