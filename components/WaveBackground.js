/**
 * Lightweight CSS Wave Background
 * Replaces heavy Three.js implementation with pure CSS
 * ~1KB vs ~500KB - 99.8% smaller!
 */
export default function WaveBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Wave Layers - More Visible */}
            <div className="absolute inset-0">
                {/* Wave 1 - Large bottom wave */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                        background: 'radial-gradient(ellipse 150% 100% at 50% 100%, rgba(37, 99, 235, 0.4) 0%, transparent 50%)',
                        animation: 'wave1 18s ease-in-out infinite',
                    }}
                />

                {/* Wave 2 - Middle wave */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                        background: 'radial-gradient(ellipse 140% 90% at 50% 100%, rgba(0, 200, 224, 0.3) 0%, transparent 50%)',
                        animation: 'wave2 14s ease-in-out infinite',
                        animationDelay: '-4s'
                    }}
                />

                {/* Wave 3 - Top wave */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                        background: 'radial-gradient(ellipse 130% 80% at 50% 100%, rgba(96, 165, 250, 0.35) 0%, transparent 50%)',
                        animation: 'wave3 11s ease-in-out infinite',
                        animationDelay: '-7s'
                    }}
                />

                {/* Subtle flowing lines */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(37, 99, 235, 0.2) 10px, rgba(37, 99, 235, 0.2) 11px)',
                        animation: 'flow 30s linear infinite'
                    }}
                />
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes wave1 {
                    0%, 100% { 
                        transform: translateY(0) scale(1); 
                        opacity: 0.4;
                    }
                    50% { 
                        transform: translateY(-30px) scale(1.05); 
                        opacity: 0.5;
                    }
                }
                
                @keyframes wave2 {
                    0%, 100% { 
                        transform: translateY(0) scale(1); 
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translateY(-40px) scale(1.08); 
                        opacity: 0.4;
                    }
                }
                
                @keyframes wave3 {
                    0%, 100% { 
                        transform: translateY(0) scale(1); 
                        opacity: 0.35;
                    }
                    50% { 
                        transform: translateY(-50px) scale(1.1); 
                        opacity: 0.45;
                    }
                }

                @keyframes flow {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(100px); }
                }
            `}</style>
        </div>
    );
}
