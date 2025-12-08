"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const testimonials = [
    {
        quote:
            "Reliable, innovative, and incredibly fast. Their team built our web app under a tight deadline without compromising on quality. Truly a five-star experience!",
        name: "Atsushi Shimoikura",
        title: "Managing Director & CEO",
        company: "Satsuna Corporation",
        image: "/testimonial-1.png",
    },
    {
        quote:
            "From strategy to execution, the Squad Innovators team has been phenomenal. They helped us launch our real-estate platform on time with clean code, great UI, and solid backend performance.",
        name: "M A Matin",
        title: "Founder",
        company: "DLM Properties",
        image: "/fizan.png",
    },
    {
        quote:
            "Squad Innovators transformed our business idea into a fully functional Saloon management software. Their team was proactive, transparent, and deeply committed to quality throughout the project.",
        name: "Tariqul Islam",
        title: "In-Charge",
        company: "Bonzer",
        image: "/bonzerI.png",
    },
    {
        quote:
            "From start to finish, they felt like part of our team. The custom PoS system they built helped us scale operations and improved team productivity by over 50%.",
        name: "Faisal",
        title: "Owner",
        company: "Brothers & Mobile Accessories",
        image: "/user-avatar-male-5.png",
    },
];

const TestimonialSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#030f45] to-[#1e3a8a] relative overflow-hidden">
            {/* Background Components */}
            <AnimatedGradient variant="purple" intensity="medium" />
            <FloatingShapes variant="cool" count={7} />
            <GridPattern variant="mesh" opacity={0.05} color="#60a5fa" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-lg"
                    >
                        TESTIMONIALS
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-4"
                    >
                        What Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
                            Clients Say
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-100 text-lg md:text-xl leading-relaxed font-light"
                    >
                        Don't just take our word for it. Here's what our partners have to say about their experience working with us.
                    </motion.p>
                </div>

                {/* Testimonials Carousel */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16 !px-4"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-full pt-4 pb-8">
                            <div className="relative group h-full">
                                {/* Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>

                                {/* Card */}
                                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white p-3 rounded-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                        <Quote size={24} fill="currentColor" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-white text-lg leading-relaxed mb-8 flex-1 font-light">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                        <div className="relative w-14 h-14 flex-shrink-0">
                                            <Image
                                                unoptimized
                                                fill
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-full object-cover border-2 border-white/20 shadow-lg"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg leading-tight">{testimonial.name}</h4>
                                            <p className="text-sm text-blue-200">{testimonial.title}</p>
                                            <p className="text-xs text-[#60a5fa] font-semibold uppercase tracking-wide mt-1">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                :global(.swiper-pagination-bullet) {
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                }
                :global(.swiper-pagination-bullet-active) {
                    background: #60a5fa;
                }
            `}</style>
        </section>
    );
};

export default TestimonialSection;
