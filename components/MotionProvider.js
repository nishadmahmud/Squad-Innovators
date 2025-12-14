"use client";

import { MotionConfig } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/usePerformance';
import { useEffect } from 'react';

/**
 * Global Motion Provider that reduces all Framer Motion animations
 * - Mobile: Completely disabled (duration: 0)
 * - Desktop: Very fast (duration: 0.15s) to reduce lag
 */
export default function MotionProvider({ children }) {
    const isMobile = useIsMobile();

    useEffect(() => {
        console.log('🎭 MotionProvider - Mobile detected:', isMobile);
        console.log('🎭 Animations:', isMobile ? 'DISABLED (0s)' : 'REDUCED (0.15s)');
    }, [isMobile]);

    // Mobile: instant (no animation)
    // Desktop: very fast (reduced animation)
    const transition = isMobile
        ? { duration: 0, delay: 0 }
        : { duration: 0.15, delay: 0 };

    return (
        <MotionConfig transition={transition}>
            {children}
        </MotionConfig>
    );
}
