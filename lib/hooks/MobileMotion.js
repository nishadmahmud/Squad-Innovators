import { motion } from 'framer-motion';
import { useIsMobile } from './usePerformance';

/**
 * Mobile-aware motion component that disables animations on mobile devices
 * Usage: Replace `motion.div` with `MobileMotion.div`
 */
export const MobileMotion = new Proxy(motion, {
    get(target, prop) {
        return function MobileMotionComponent(props) {
            const isMobile = useIsMobile();
            const Component = target[prop];

            if (isMobile) {
                // On mobile: render as regular div without animations
                const { initial, animate, whileInView, whileHover, whileTap, variants, transition, ...restProps } = props;
                return <Component {...restProps} />;
            }

            // On desktop: render with full animations
            return <Component {...props} />;
        };
    }
});

/**
 * Helper function to get animation props conditionally
 * Usage: <motion.div {...getAnimationProps(isMobile, { initial, animate })} />
 */
export function getAnimationProps(isMobile, animationProps) {
    if (isMobile) {
        return {}; // No animations on mobile
    }
    return animationProps;
}
