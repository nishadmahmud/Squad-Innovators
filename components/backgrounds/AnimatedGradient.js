"use client";

import React from 'react';

export default function AnimatedGradient({ variant = 'blue', intensity = 'medium' }) {
    const gradients = {
        blue: {
            light: 'from-blue-50/30 via-indigo-50/20 to-transparent',
            medium: 'from-blue-100/40 via-indigo-100/30 to-transparent',
            strong: 'from-blue-200/50 via-indigo-200/40 to-purple-100/30'
        },
        purple: {
            light: 'from-purple-50/30 via-pink-50/20 to-transparent',
            medium: 'from-purple-100/40 via-pink-100/30 to-transparent',
            strong: 'from-purple-200/50 via-pink-200/40 to-blue-100/30'
        },
        warm: {
            light: 'from-orange-50/30 via-amber-50/20 to-transparent',
            medium: 'from-orange-100/40 via-amber-100/30 to-transparent',
            strong: 'from-orange-200/50 via-amber-200/40 to-yellow-100/30'
        },
        cool: {
            light: 'from-cyan-50/30 via-teal-50/20 to-transparent',
            medium: 'from-cyan-100/40 via-teal-100/30 to-transparent',
            strong: 'from-cyan-200/50 via-teal-200/40 to-blue-100/30'
        }
    };

    const selectedGradient = gradients[variant]?.[intensity] || gradients.blue.medium;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main animated gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${selectedGradient} animate-gradient-shift`} />

            {/* Secondary gradient for depth */}
            <div className={`absolute inset-0 bg-gradient-to-tl ${selectedGradient} opacity-50 animate-gradient-shift-reverse`} />

            {/* Radial gradient overlays */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-100/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-indigo-100/20 to-transparent blur-3xl" />

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% {
                        opacity: 1;
                        transform: translateX(0) translateY(0);
                    }
                    50% {
                        opacity: 0.8;
                        transform: translateX(10px) translateY(-10px);
                    }
                }
                
                @keyframes gradient-shift-reverse {
                    0%, 100% {
                        opacity: 1;
                        transform: translateX(0) translateY(0);
                    }
                    50% {
                        opacity: 0.6;
                        transform: translateX(-10px) translateY(10px);
                    }
                }

                .animate-gradient-shift {
                    animation: gradient-shift 15s ease-in-out infinite;
                }

                .animate-gradient-shift-reverse {
                    animation: gradient-shift-reverse 20s ease-in-out infinite;
                }

                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </div>
    );
}
