"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricShapes({ variant = 'default', count = 4 }) {
    const shapes = [
        {
            id: 1,
            type: 'hexagon',
            size: 200,
            position: { top: '10%', right: '5%' },
            rotation: 30,
            gradient: 'from-blue-500/10 to-cyan-500/10',
            duration: 20
        },
        {
            id: 2,
            type: 'triangle',
            size: 180,
            position: { bottom: '15%', left: '8%' },
            rotation: 45,
            gradient: 'from-purple-500/10 to-pink-500/10',
            duration: 25
        },
        {
            id: 3,
            type: 'pentagon',
            size: 150,
            position: { top: '50%', left: '3%' },
            rotation: 0,
            gradient: 'from-indigo-500/10 to-blue-500/10',
            duration: 18
        },
        {
            id: 4,
            type: 'square',
            size: 160,
            position: { top: '25%', right: '15%' },
            rotation: 15,
            gradient: 'from-cyan-500/10 to-teal-500/10',
            duration: 22
        }
    ].slice(0, count);

    const renderShape = (shape) => {
        switch (shape.type) {
            case 'hexagon':
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id={`grad-${shape.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="50 1 95 25 95 75 50 99 5 75 5 25"
                            fill={`url(#grad-${shape.id})`}
                            stroke="#2563eb"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                        />
                    </svg>
                );
            case 'triangle':
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id={`grad-${shape.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="50 5 95 95 5 95"
                            fill={`url(#grad-${shape.id})`}
                            stroke="#8b5cf6"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                        />
                    </svg>
                );
            case 'pentagon':
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id={`grad-${shape.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="50 1 95 38 78 95 22 95 5 38"
                            fill={`url(#grad-${shape.id})`}
                            stroke="#6366f1"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                        />
                    </svg>
                );
            case 'square':
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id={`grad-${shape.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <rect
                            x="10"
                            y="10"
                            width="80"
                            height="80"
                            fill={`url(#grad-${shape.id})`}
                            stroke="#06b6d4"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            rx="5"
                        />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute"
                    style={{
                        ...shape.position,
                        width: shape.size,
                        height: shape.size
                    }}
                    animate={{
                        rotate: [shape.rotation, shape.rotation + 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {renderShape(shape)}
                </motion.div>
            ))}
        </div>
    );
}
