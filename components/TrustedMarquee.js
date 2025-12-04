"use client";

import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const TrustedMarquee = () => {
    const logos = [
        "/bodda.png",
        "/apple_mart.png",
        "/satsuna.png",
        "/brothers.png",
        "/bhai-bhai.png",
        "/dontaion.png",
        "/bonzer.png",
        "/apPharma.png",
        "/corporate-care.png",
        "/dlm.png",
        "/mobile_club.png",
        "/PerfectGadgetBD-logo (1) 1.png"
    ];

    return (
        <div className='py-16 bg-slate-50 border-b border-gray-200 relative overflow-hidden'>
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">Trusted by Industry Leaders</p>
            </div>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <Marquee gradient={false} speed={40} pauseOnHover={true}>
                    <div className="flex items-center gap-20 px-10">
                        {logos.map((logo, index) => (
                            <div key={index} className="relative w-36 h-24 flex items-center justify-center group cursor-pointer">
                                <Image
                                    className='object-contain w-full h-full opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110'
                                    width={150}
                                    height={80}
                                    alt='sponsor_logo'
                                    src={logo}
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TrustedMarquee;
