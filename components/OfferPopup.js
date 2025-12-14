"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OfferPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in this session
        const hasSeenPopup = sessionStorage.getItem('offerPopupSeen');

        if (!hasSeenPopup) {
            // Show popup on mount (page load/refresh)
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // Increased delay for better UX

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        // Mark as seen for this session
        sessionStorage.setItem('offerPopupSeen', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                onClick={closePopup}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Popup Content */}
            <div className="relative w-full max-w-lg bg-primary rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-1 backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-primary"></div>

                    {/* Brick/Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    {/* Neon Glows */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-8 flex flex-col items-center text-center">
                    {/* Logo */}
                    <div className="mb-6 w-32">
                        <Image
                            src="/Final-logo.png"
                            alt="Squad Innovators"
                            width={120}
                            height={40}
                            className="w-full h-auto brightness-0 invert"
                            unoptimized
                        />
                    </div>

                    {/* Main Text */}
                    <h2 className="text-5xl font-black text-secondary italic mb-2 drop-shadow-[0_0_15px_rgba(0,200,224,0.4)]">
                        WAIT!
                    </h2>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-wider">
                        Before You Click Away...
                    </h3>

                    {/* Discount Tag */}
                    <div className="relative mb-8 transform rotate-[-5deg]">
                        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl shadow-2xl border border-white/20 flex items-center gap-4 relative overflow-hidden">
                            <div className="text-xl font-bold">Get</div>
                            <div className="text-6xl font-black leading-none drop-shadow-md">30<span className="text-3xl align-top">%</span></div>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-2xl font-bold">OFF</span>
                            </div>
                        </div>
                        {/* Tag Hole */}
                        <div className="absolute top-1/2 -left-3 w-6 h-6 bg-primary rounded-full transform -translate-y-1/2 border-r border-white/20"></div>
                    </div>

                    {/* Subtext Banner */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-lg py-2 px-6 w-full transform -skew-x-12 mb-8 shadow-lg">
                        <span className="block transform skew-x-12">on All Products & Services</span>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <Link
                            href="/contact"
                            onClick={closePopup}
                            className="inline-block bg-secondary hover:bg-cyan-400 text-primary text-xl font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(0,200,224,0.4)] hover:shadow-[0_0_30px_rgba(0,200,224,0.6)]"
                        >
                            Snatch The Deal
                        </Link>
                    </div>

                    {/* Decorative Squiggles */}
                    <div className="absolute bottom-8 left-8 w-12 h-12 border-l-4 border-b-4 border-secondary opacity-30"></div>
                    <div className="absolute top-20 right-8 w-8 h-8 border-2 border-accent rotate-45 opacity-30"></div>
                    <div className="absolute bottom-20 right-12 w-4 h-4 bg-white rounded-full opacity-30"></div>
                </div>
            </div>
        </div>
    );
}
