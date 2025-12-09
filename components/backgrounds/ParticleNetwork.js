"use client";

import React, { useEffect, useRef } from 'react';

export default function ParticleNetwork({
    particleCount = 60,
    color = '#2563eb',
    lineColor = '#2563eb',
    maxDistance = 120,
    mouseRadius = 150,
    speed = 0.5
}) {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null });
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                // Mouse interaction
                if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
                    const dx = this.x - mouseRef.current.x;
                    const dy = this.y - mouseRef.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        const angle = Math.atan2(dy, dx);
                        this.vx += Math.cos(angle) * force * 0.2;
                        this.vy += Math.sin(angle) * force * 0.2;
                    }
                }

                // Update position
                this.x += this.vx;
                this.y += this.vy;

                // Damping
                this.vx *= 0.99;
                this.vy *= 0.99;

                // Keep base movement
                if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.1;
                if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.1;

                // Boundary check
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Keep in bounds
                this.x = Math.max(0, Math.min(width, this.x));
                this.y = Math.max(0, Math.min(height, this.y));
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        // Initialize particles
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const dx = particlesRef.current[i].x - particlesRef.current[j].x;
                    const dy = particlesRef.current[i].y - particlesRef.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.beginPath();
                        ctx.strokeStyle = `${lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
                        ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        // Handle mouse move
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, color, lineColor, maxDistance, mouseRadius, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
}
