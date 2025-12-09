"use client";

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectGrid({ projects, onProjectClick }) {
    if (projects.length === 0) {
        return (
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No projects found in this category.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} onClick={onProjectClick} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
