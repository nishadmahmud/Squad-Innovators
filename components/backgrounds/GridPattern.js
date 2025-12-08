"use client";

import React from 'react';

export default function GridPattern({ variant = 'dots', opacity = 0.1, color = '#2563eb' }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {variant === 'dots' && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                        opacity: opacity,
                    }}
                />
            )}

            {variant === 'grid' && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(${color} 1px, transparent 1px),
                            linear-gradient(90deg, ${color} 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        opacity: opacity,
                    }}
                />
            )}

            {variant === 'diagonal' && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            ${color},
                            ${color} 1px,
                            transparent 1px,
                            transparent 40px
                        )`,
                        opacity: opacity,
                    }}
                />
            )}

            {variant === 'hexagon' && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 50% 50%, transparent 10px, ${color} 10px, ${color} 11px, transparent 11px),
                            radial-gradient(circle at 0% 50%, transparent 10px, ${color} 10px, ${color} 11px, transparent 11px),
                            radial-gradient(circle at 100% 50%, transparent 10px, ${color} 10px, ${color} 11px, transparent 11px)
                        `,
                        backgroundSize: '40px 70px',
                        backgroundPosition: '0 0, 0 0, 0 0',
                        opacity: opacity,
                    }}
                />
            )}

            {variant === 'mesh' && (
                <>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                            opacity: opacity * 0.5,
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(${color} 0.5px, transparent 0.5px),
                                linear-gradient(90deg, ${color} 0.5px, transparent 0.5px)
                            `,
                            backgroundSize: '60px 60px',
                            opacity: opacity * 0.3,
                        }}
                    />
                </>
            )}
        </div>
    );
}
