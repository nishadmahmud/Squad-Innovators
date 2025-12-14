"use client";

import { MotionConfig } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/usePerformance';
import { useEffect } from 'react';

/**
 * Global Motion Provider that reduces all Framer Motion animations
 * - Mobile: Completely disabled (no MotionConfig wrapper)
 * - Desktop: Very fast (duration: 0.15s) to reduce lag
 */
export default function MotionProvider({ children }) {
    const isMobile = useIsMobile();

    useEffect(() => {
        console.log('🎭 MotionProvider - Mobile detected:', isMobile);
        console.log('🎭 Animations:', isMobile ? 'COMPLETELY DISABLED' : 'REDUCED (0.15s)');
    }, [isMobile]);

    // On mobile: don't wrap with MotionConfig at all (prevents white screen)
    // On desktop: wrap with fast transitions
    if (isMobile) {
        return <>{children}</>;
    }

    return (
        <MotionConfig transition={{ duration: 0.15, delay: 0 }}>
            {children}
        </MotionConfig>
    );
}
