'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DotGrid = () => {
    const mesh = useRef();
    const countX = 50; // Number of dots along X
    const countY = 30; // Number of dots along Y
    const total = countX * countY;

    // Global mouse tracking to work even when canvas is covered
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { positions, originalPositions, colors } = useMemo(() => {
        const positions = new Float32Array(total * 3);
        const originalPositions = new Float32Array(total * 3);
        const colors = new Float32Array(total * 3);

        const color1 = new THREE.Color("#e2e8f0"); // Slate-200 (Light Gray) for base
        const color2 = new THREE.Color("#2563eb"); // Brand Blue for active/close dots

        for (let i = 0; i < countX; i++) {
            for (let j = 0; j < countY; j++) {
                const index = (i * countY + j) * 3;
                // Center the grid
                const x = (i - countX / 2) * 0.6;
                const y = (j - countY / 2) * 0.6;
                const z = 0;

                positions[index] = x;
                positions[index + 1] = y;
                positions[index + 2] = z;

                originalPositions[index] = x;
                originalPositions[index + 1] = y;
                originalPositions[index + 2] = z;

                colors[index] = color1.r;
                colors[index + 1] = color1.g;
                colors[index + 2] = color1.b;
            }
        }

        return { positions, originalPositions, colors };
    }, []);

    useFrame(() => {
        // Use global mouse ref instead of state.pointer
        const targetX = mouse.current.x * 15;
        const targetY = mouse.current.y * 8;

        const currentColors = mesh.current.geometry.attributes.color.array;
        const currentPositions = mesh.current.geometry.attributes.position.array;

        const baseColor = new THREE.Color("#cbd5e1"); // Slate-300
        const activeColor = new THREE.Color("#2563eb"); // Brand Blue

        for (let i = 0; i < total; i++) {
            const i3 = i * 3;
            const ox = originalPositions[i3];
            const oy = originalPositions[i3 + 1];

            // Distance from mouse
            const dx = ox - targetX;
            const dy = oy - targetY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Interaction radius
            const radius = 4;

            if (dist < radius) {
                // Calculate influence (0 to 1)
                const influence = (radius - dist) / radius;

                // Lift up (z-axis) based on influence
                const targetZ = Math.sin(influence * Math.PI) * 2;
                currentPositions[i3 + 2] = THREE.MathUtils.lerp(currentPositions[i3 + 2], targetZ, 0.1);

                // Change color
                const mixedColor = baseColor.clone().lerp(activeColor, influence);
                currentColors[i3] = mixedColor.r;
                currentColors[i3 + 1] = mixedColor.g;
                currentColors[i3 + 2] = mixedColor.b;
            } else {
                // Return to base
                currentPositions[i3 + 2] = THREE.MathUtils.lerp(currentPositions[i3 + 2], 0, 0.1);

                currentColors[i3] = baseColor.r;
                currentColors[i3 + 1] = baseColor.g;
                currentColors[i3 + 2] = baseColor.b;
            }
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;
        mesh.current.geometry.attributes.color.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={total}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={total}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
};

const WaveBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <DotGrid />
            </Canvas>
        </div>
    );
};

export default WaveBackground;
