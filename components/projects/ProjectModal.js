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
            <div className="fixed inset-0 z-50">
                {/* Overlay - only on desktop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="hidden md:block absolute inset-0 bg-black/70 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white h-full md:h-auto md:max-h-[90vh] md:rounded-3xl md:shadow-2xl md:max-w-4xl md:mx-auto md:my-8 overflow-y-auto"
                >
                    {/* Close Button - Top Right */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm hover:bg-gray-100 rounded-full transition-colors shadow-lg md:bg-transparent md:shadow-none"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        {/* Header - Mobile Optimized */}
                        <div className="mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 pr-12">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base mb-4">
                                {project.category || 'Website'} • {project.date || '2024'}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-blue-50 text-primary text-xs md:text-sm font-medium rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs - Mobile Optimized */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                {project.liveLink && (
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors text-sm md:text-base"
                                    >
                                        Live Demo
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                )}
                                <Link
                                    href="/contact"
                                    className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base"
                                >
                                    Request Quote
                                </Link>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative h-64 md:h-96 bg-gray-100 rounded-2xl overflow-hidden mb-6">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Project Details */}
                        <div className="space-y-6">
                            {/* About */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                    About the Project
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {project.detailedDescription || project.description}
                                </p>
                            </div>

                            {/* Challenge */}
                            {project.challenge && (
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Challenge
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {project.challenge}
                                    </p>
                                </div>
                            )}

                            {/* Solution */}
                            {project.solution && (
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Our Solution
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {project.solution}
                                    </p>
                                </div>
                            )}

                            {/* Technologies */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Spacing for Mobile */}
                        <div className="h-8 md:h-0"></div>
                    </div>

                    {/* Navigation Arrows - Desktop Only */}
                    {hasPrev && (
                        <button
                            onClick={onPrev}
                            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                    )}
                    {hasNext && (
                        <button
                            onClick={onNext}
                            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    )}

                    {/* Mobile Navigation - Bottom Swipe Indicators */}
                    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
                        <button
                            onClick={onPrev}
                            disabled={!hasPrev}
                            className={`p-3 rounded-full transition-colors ${hasPrev
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="text-sm text-gray-600">
                            {currentIndex + 1} / {allProjects.length}
                        </div>
                        <button
                            onClick={onNext}
                            disabled={!hasNext}
                            className={`p-3 rounded-full transition-colors ${hasNext
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
