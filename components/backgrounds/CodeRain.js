"use client";

import React, { useEffect, useRef } from 'react';

export default function CodeRain({
    color = '#2563eb',
    density = 0.5,
    speed = 1,
    fontSize = 14
}) {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        // Characters to use
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');

        // Calculate columns
        const columnWidth = fontSize;
        let columns = Math.floor(width / columnWidth);
        let drops = [];

        // Initialize drops
        const initDrops = () => {
            columns = Math.floor(width / columnWidth);
            drops = [];
            for (let i = 0; i < columns; i++) {
                // Random starting position, some start off-screen
                drops[i] = Math.random() > density ? -Math.random() * 20 : Math.random() * height / fontSize;
            }
        };

        initDrops();

        // Animation loop
        function animate() {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = charArray[Math.floor(Math.random() * charArray.length)];
                const x = i * columnWidth;
                const y = drops[i] * fontSize;

                // Draw character
                ctx.fillText(char, x, y);

                // Reset drop to top randomly
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i] += speed * 0.5;
            }

            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            initDrops();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [color, density, speed, fontSize]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.15 }}
        />
    );
}
