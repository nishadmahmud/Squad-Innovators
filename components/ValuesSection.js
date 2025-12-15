"use client";

import Image from "next/image";
import React from "react";
import { Quote } from "lucide-react";

const values = [
    {
        title: "Quality Always Comes First",
        description: "At Squad Innovators, quality is our commitment. We deliver exceptional results with a dedicated team focused on providing the best service.",
    },
    {
        title: "Our Creative Wings Will Fly",
        description: "We push boundaries with innovative solutions, helping you achieve your business goals through creativity and groundbreaking ideas.",
    },
    {
        title: "We Value Relationships",
        description: "Building lasting relationships is key to our success. We listen, understand, and partner with you for long-term growth.",
    },
    {
        title: "Reliability Is Our Start",
        description: "Reliability is at our core. Trust us to deliver on time, every time, keeping your project on track without compromising on quality.",
    },
];

const ValuesSection = () => {
    return (
        <section className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-8 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Image with Profile Card */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/companyImg-4.webp"
                                alt="Team working together"
                                width={600}
                                height={450}
                                className="w-full h-[400px] md:h-[450px] object-cover"
                                unoptimized
                            />

                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4 w-8 h-8 text-[#2563eb]/60">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div className="absolute bottom-20 left-4 w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center">
                                <Quote className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        {/* Profile Card */}
                        <div className="absolute -bottom-20 left-4 right-4 md:left-8 md:right-auto md:w-[480px] bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#030f45]">
                                Md. Evan Khan
                            </h3>
                            <p className="text-[#2563eb] text-sm font-medium mb-3">
                                Founder & CEO at Squad Innovators
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                At Squad Innovators, we believe in transforming your vision into reality with innovative digital solutions. Let's create something remarkable together!
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                            >
                                Book a Free Consultation
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Values */}
                    <div className="mt-16 lg:mt-0">
                        {/* Header */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#030f45] mb-8 leading-tight">
                            Do You Know What <br className="hidden md:block" />
                            <span className="text-[#2563eb]">We Value?</span>
                        </h2>

                        {/* Value Cards */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-100 hover:border-[#2563eb]/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="text-lg font-bold text-[#030f45] mb-2 group-hover:text-[#2563eb] transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
