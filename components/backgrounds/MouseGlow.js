"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function MouseGlow({
    color = '#2563eb',
    size = 300,
    blur = 100,
    opacity = 0.15,
    lag = 0.1
}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Check if device supports hover (not mobile)
        const hasHover = window.matchMedia('(hover: hover)').matches;
        if (!hasHover) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            targetRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            setIsVisible(true);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Smooth animation loop
        const animate = () => {
            // Lerp (linear interpolation) for smooth following
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lag;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lag;

            setPosition({
                x: currentRef.current.x,
                y: currentRef.current.y
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        animate();

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [lag]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
        >
            <div
                className="absolute transition-opacity duration-300"
                style={{
                    left: position.x,
                    top: position.y,
                    width: size,
                    height: size,
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    opacity: isVisible ? opacity : 0,
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
}
