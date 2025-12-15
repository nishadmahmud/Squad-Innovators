"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "Md. Mushfiqur Rahman",
        role: "CEO & Founder",
        company: "Gadget Bodda",
        industry: "E-Commerce",
        rating: 5,
        text: "Squad Innovators transformed our vision into reality. Their expertise in e-commerce development helped us achieve a 300% increase in online sales. The team's dedication is unmatched!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        highlight: "300% Sales Increase",
    },
    {
        name: "Md. Fizan Mahmud",
        role: "Founder & CEO",
        company: "Bonzer Inc.",
        industry: "Salon Management",
        rating: 5,
        text: "Working with Squad Innovators was a game-changer! They delivered a robust salon management system that streamlined our operations and improved customer satisfaction by 85%.",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        highlight: "85% Better Satisfaction",
    },
    {
        name: "Md. Sayem Hossain",
        role: "Managing Director",
        company: "Brothers Mobile",
        industry: "Retail Chain",
        rating: 5,
        text: "The custom POS and inventory system revolutionized our retail operations across 15 branches. Real-time inventory tracking reduced our losses by 40%!",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        highlight: "40% Loss Reduction",
    },
    {
        name: "Md. Ishan Mahmud",
        role: "Director",
        company: "Apple Daddy",
        industry: "Electronics",
        rating: 5,
        text: "Squad Innovators delivered beyond expectations. Their e-commerce platform performs flawlessly with 99.9% uptime. Page load times improved by 60%!",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        highlight: "99.9% Uptime",
    },
    {
        name: "Sarah Ahmed",
        role: "Marketing Head",
        company: "DLM Properties",
        industry: "Real Estate",
        rating: 5,
        text: "The property management system is phenomenal. Lead generation increased by 200% and our agents can now manage 3x more properties efficiently!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        highlight: "200% More Leads",
    },
    {
        name: "Karim Hassan",
        role: "Operations Manager",
        company: "Afrin Pharma",
        industry: "Healthcare",
        rating: 5,
        text: "Our pharmacy system needed a complete overhaul. Prescription processing time reduced by 70%, and inventory alerts eliminated stockouts entirely.",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        highlight: "70% Faster Processing",
    },
    {
        name: "Fatima Begum",
        role: "CEO",
        company: "Fashion Forward",
        industry: "Fashion",
        rating: 5,
        text: "They created a beautiful fashion e-commerce platform. The AR try-on feature increased our conversion rate by 45%. Absolutely brilliant work!",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        highlight: "45% Higher Conversions",
    },
    {
        name: "Rashid Khan",
        role: "Technical Director",
        company: "Satsuma Corp",
        industry: "Japanese Business",
        rating: 5,
        text: "We needed a bilingual Japanese-English website with perfect localization. Squad Innovators exceeded expectations with cultural sensitivity and excellence.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        highlight: "Perfect Localization",
    },
    {
        name: "Nadia Sultana",
        role: "Founder",
        company: "Corporate Care",
        industry: "HR & Payroll",
        rating: 5,
        text: "The HR system handles payroll for 5000+ employees seamlessly. Processing that took 3 days now completes in 2 hours. Incredible efficiency!",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        highlight: "5000+ Employees",
    },
    {
        name: "Arif Rahman",
        role: "Program Director",
        company: "Helping Hands",
        industry: "Non-Profit",
        rating: 5,
        text: "Our donation platform needed to be transparent and user-friendly. Donations increased by 150% after launch with real-time impact tracking!",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        highlight: "150% More Donations",
    },
    {
        name: "Tahmina Akter",
        role: "Business Owner",
        company: "Bhai Bhai Garments",
        industry: "Manufacturing",
        rating: 5,
        text: "Managing production across factories was chaotic. Now we have real-time visibility into every order. Production efficiency improved by 55%!",
        image: "https://randomuser.me/api/portraits/women/56.jpg",
        highlight: "55% More Efficient",
    },
    {
        name: "Imran Hossain",
        role: "Co-Founder",
        company: "Apple Mart",
        industry: "Marketplace",
        rating: 5,
        text: "Building a multi-vendor marketplace is complex, but Squad Innovators made it seamless. We now have 500+ vendors with automated commissions!",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        highlight: "500+ Vendors",
    },
];

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-12 md:py-16 bg-[#030f45] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e3a8a_0%,_transparent_50%)] opacity-40" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563eb]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#7c3aed]/20 rounded-full blur-[80px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Compact Header */}
                <div className="text-center mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb] text-white text-xs font-bold tracking-wider uppercase mb-4">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        What Our{' '}
                        <span className="text-[#2563eb]">Clients Say</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-xl mx-auto">
                        Real stories from businesses we've helped transform
                    </p>
                </div>

                {/* Testimonial Cards Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-3 gap-4"
                        >
                            {[0, 1, 2].map((offset) => {
                                const index = (activeIndex + offset) % testimonials.length;
                                const testimonial = testimonials[index];
                                const isCenter = offset === 1;

                                return (
                                    <div
                                        key={index}
                                        className={`relative rounded-2xl p-5 transition-all duration-300 ${isCenter
                                            ? 'bg-gradient-to-br from-[#2563eb] to-[#7c3aed] scale-105 shadow-2xl shadow-blue-500/30'
                                            : 'bg-[#0a1628] border border-[#1e3a8a]/50 hover:border-[#2563eb]/50'
                                            }`}
                                    >
                                        {/* Quote Icon */}
                                        <Quote className={`w-8 h-8 mb-3 ${isCenter ? 'text-white/30' : 'text-[#2563eb]/30'}`} />

                                        {/* Stars */}
                                        <div className="flex gap-0.5 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>

                                        {/* Quote Text */}
                                        <p className={`text-sm leading-relaxed mb-4 line-clamp-4 ${isCenter ? 'text-white' : 'text-gray-300'}`}>
                                            "{testimonial.text}"
                                        </p>

                                        {/* Highlight Badge */}
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${isCenter
                                            ? 'bg-white/20 text-white'
                                            : 'bg-[#2563eb]/10 text-[#2563eb]'
                                            }`}>
                                            <Award className="w-3.5 h-3.5" />
                                            {testimonial.highlight}
                                        </div>

                                        {/* Client Info */}
                                        <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                                <Image
                                                    unoptimized
                                                    fill
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className={`text-sm font-bold ${isCenter ? 'text-white' : 'text-white'}`}>
                                                    {testimonial.name}
                                                </h4>
                                                <p className={`text-xs ${isCenter ? 'text-white/70' : 'text-gray-500'}`}>
                                                    {testimonial.role}, {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2.5 rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:scale-110"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2.5 rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:scale-110"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setActiveIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-[#2563eb] w-6'
                                : 'bg-gray-600 w-2 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap justify-center gap-8 mt-8 pt-6 border-t border-[#1e3a8a]/30">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">100+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#2563eb]">4.9★</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Avg Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Would Recommend</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#2563eb]">12+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Industries Served</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
