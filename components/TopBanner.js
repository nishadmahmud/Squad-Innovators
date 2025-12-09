"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const bannerRef = React.useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (bannerRef.current) {
                const height = bannerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--top-banner-height', `${height}px`);
            } else {
                document.documentElement.style.setProperty('--top-banner-height', '0px');
            }
        };

        // Initial update
        updateHeight();

        // Update on resize
        window.addEventListener('resize', updateHeight);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateHeight);
            document.documentElement.style.setProperty('--top-banner-height', '0px');
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={bannerRef}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    onAnimationComplete={() => {
                        // Update height after animation
                        if (bannerRef.current) {
                            const height = bannerRef.current.offsetHeight;
                            document.documentElement.style.setProperty('--top-banner-height', `${height}px`);
                        }
                    }}
                    className="relative z-[60] bg-gradient-to-r from-primary via-[#0b1d6b] to-primary text-white overflow-hidden border-b border-white/10"
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[60px]"></div>
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[60px]"></div>
                    </div>

                    <div className="container mx-auto px-4 py-2.5 md:py-3 relative z-10">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-center">

                            {/* Mobile Layout: Stacked */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                                {/* LIMITED TIME Badge */}
                                <span className="bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded animate-pulse whitespace-nowrap">
                                    LIMITED TIME
                                </span>

                                {/* Offer Text */}
                                <p className="text-xs sm:text-sm md:text-base font-medium leading-tight">
                                    Get <span className="text-secondary font-bold text-sm sm:text-base md:text-lg">30% OFF</span> on All Products & Services!
                                </p>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-secondary hover:text-white transition-colors whitespace-nowrap mt-1 sm:mt-0"
                            >
                                Snatch The Deal
                                <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors"
                            aria-label="Close banner"
                        >
                            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
