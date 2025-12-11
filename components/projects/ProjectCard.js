"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClick(project)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer group"
        >
            <div className="relative h-64 md:h-80 bg-gray-100 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
