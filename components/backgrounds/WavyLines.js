"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WavyLines({
    lineCount = 3,
    color = '#2563eb',
    opacity = 0.1,
    amplitude = 40,
    frequency = 0.02,
    speed = 2
}) {
    const lines = Array.from({ length: lineCount }, (_, i) => ({
        id: i,
        yOffset: (i * 100) / lineCount,
        delay: i * 0.5,
        strokeWidth: 2 - (i * 0.3)
    }));

    const generatePath = (yOffset, phase = 0) => {
        const points = [];
        const width = 100;
        const segments = 50;

        for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * width;
            const y = yOffset + Math.sin((i * frequency * 100) + phase) * amplitude;
            points.push(`${x},${y}`);
        }

        return `M ${points.join(' L ')}`;
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={color} stopOpacity={opacity} />
                        <stop offset="50%" stopColor={color} stopOpacity={opacity * 1.5} />
                        <stop offset="100%" stopColor={color} stopOpacity={opacity} />
                    </linearGradient>
                </defs>
                {lines.map((line) => (
                    <motion.path
                        key={line.id}
                        d={generatePath(line.yOffset)}
                        fill="none"
                        stroke="url(#wave-gradient)"
                        strokeWidth={line.strokeWidth}
                        strokeLinecap="round"
                        animate={{
                            d: [
                                generatePath(line.yOffset, 0),
                                generatePath(line.yOffset, Math.PI * 2),
                            ]
                        }}
                        transition={{
                            duration: speed * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: line.delay
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
