"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose, onPrev, onNext, allProjects }) {
    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!project) return null;

    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < allProjects.length - 1;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 z-10">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-primary mb-2">{project.title}</h2>
                                <p className="text-gray-600">{project.category || 'Website'} • {project.date || '2024'}</p>
                            </div>

                            {/* Tech Stack Icons */}
                            <div className="flex items-center gap-3">
                                {project.technologies.slice(0, 5).map((tech, index) => (
                                    <div
                                        key={index}
                                        className="px-3 py-1 bg-blue-50 text-primary text-sm font-medium rounded-full"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex items-center gap-3">
                                {project.liveLink && (
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors"
                                    >
                                        Live Demo
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                )}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
                                >
                                    Request Quote
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-8">
                        {/* Project Image */}
                        <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden mb-8">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Project Details */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">About the Project</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.detailedDescription || project.description}
                                </p>
                            </div>

                            {project.challenge && (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Challenge</h3>
                                    <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                                </div>
                            )}
                        </div>

                        {project.solution && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
                                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                            </div>
                        )}

                        {/* Technologies */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {hasPrev && (
                        <button
                            onClick={onPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                    )}
                    {hasNext && (
                        <button
                            onClick={onNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
