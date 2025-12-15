"use client";

import Image from "next/image";
import React from "react";
import { Phone, Users, Rocket, TrendingUp } from "lucide-react";

const StrategySection = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-20 lg:py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L50 0 M50 50 L100 50 M50 50 L50 100 M50 50 L0 50' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Our Process */}
                    <div className="space-y-10">
                        {/* Header */}
                        <div>
                            <span className="text-[#0d9488] font-bold tracking-wider uppercase text-sm">
                                Our Process
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#030f45] mt-3 leading-tight">
                                From Concept to <br />
                                <span className="text-[#0d9488]">Digital Reality</span>
                            </h2>
                        </div>

                        {/* Steps */}
                        <div className="space-y-8 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200 -z-10"></div>

                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:bg-[#0d9488] group-hover:border-[#0d9488] transition-all duration-300 z-10 relative">
                                        <Phone size={24} className="text-[#0d9488] group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#030f45] mb-2 group-hover:text-[#0d9488] transition-colors">
                                        Initiate a Strategy Session
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We start with a deep dive into your business goals. Through consultative meetings, we define key objectives, timelines, and the perfect roadmap for success.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:bg-[#0d9488] group-hover:border-[#0d9488] transition-all duration-300 z-10 relative">
                                        <Users size={24} className="text-[#0d9488] group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#030f45] mb-2 group-hover:text-[#0d9488] transition-colors">
                                        Shape Your Dream Team
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We assemble a dedicated team of experts tailored to your project's needs. Seamlessly integrate our developers, designers, and strategists with your vision.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:bg-[#0d9488] group-hover:border-[#0d9488] transition-all duration-300 z-10 relative">
                                        <Rocket size={24} className="text-[#0d9488] group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#030f45] mb-2 group-hover:text-[#0d9488] transition-colors">
                                        Begin Your Journey
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        With the plan and team in place, we launch into execution. Expect transparent communication, agile development, and a focus on hitting every milestone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Circular Image Composition */}
                    <div className="relative flex items-center justify-center min-h-[500px]">
                        {/* Growth Badge - Positioned top right, outside the circle */}
                        <div className="absolute -top-4 right-0 md:right-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-[#0d9488] font-bold text-sm">89% <span className="font-normal text-gray-500">growth</span></p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm mt-2 font-medium">
                                Empowering your business to thrive
                            </p>
                        </div>

                        {/* Main Circular Frame */}
                        <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
                            {/* Outer Ring 1 (largest) */}
                            <div className="absolute -inset-16 rounded-full border border-dashed border-gray-200" />

                            {/* Outer Ring 2 */}
                            <div className="absolute -inset-8 rounded-full border border-dashed border-gray-300" />

                            {/* Main Dashed Circle Border */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300" />

                            {/* Main Image */}
                            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/evan-sir.webp"
                                    alt="CEO"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Floating Avatar Circles - Positioned ON the outer ring */}
                            {/* Top */}
                            <div className="absolute top-1/2 -left-20 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white z-10">
                                <Image src="/ishan.jpeg" alt="Ishan" fill className="object-cover" unoptimized />
                            </div>

                            {/* Right */}
                            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white z-10">
                                <Image src="/sayem.webp" alt="Sayem" fill className="object-cover" unoptimized />
                            </div>

                            {/* Bottom */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white z-10">
                                <Image src="/mushfiq.webp" alt="Mushfiq" fill className="object-cover" unoptimized />
                            </div>

                            {/* Left */}
                            <div className="absolute -top-20 left-1/2 -translate-y-1/2 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white z-10">
                                <Image src="/fizan.png" alt="Fizan" fill className="object-cover" unoptimized />
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#0d9488]">
                                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="absolute bottom-1/3 -right-4 w-12 h-12 opacity-10">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                                <circle cx="50" cy="50" r="40" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategySection;

