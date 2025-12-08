"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes({ variant = 'default', count = 5 }) {
    const shapes = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 200 + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.1 + 0.05,
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
    }));

    const getShapeColor = (index) => {
        const colors = {
            default: ['#030f45', '#2563eb', '#60a5fa'],
            warm: ['#f59e0b', '#ef4444', '#ec4899'],
            cool: ['#06b6d4', '#3b82f6', '#8b5cf6']
        };
        const palette = colors[variant] || colors.default;
        return palette[index % palette.length];
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute"
                    style={{
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                        width: shape.size,
                        height: shape.size,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        rotate: shape.shape === 'square' ? [0, 90, 0] : [0, 360, 0],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: shape.delay,
                    }}
                >
                    {shape.shape === 'circle' && (
                        <div
                            className="w-full h-full rounded-full blur-3xl"
                            style={{
                                background: `radial-gradient(circle, ${getShapeColor(shape.id)}${Math.floor(shape.opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
                            }}
                        />
                    )}
                    {shape.shape === 'square' && (
                        <div
                            className="w-full h-full blur-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${getShapeColor(shape.id)}${Math.floor(shape.opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
                                borderRadius: '30%',
                            }}
                        />
                    )}
                    {shape.shape === 'triangle' && (
                        <div
                            className="w-full h-full blur-2xl"
                            style={{
                                background: `conic-gradient(from 0deg, ${getShapeColor(shape.id)}${Math.floor(shape.opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
