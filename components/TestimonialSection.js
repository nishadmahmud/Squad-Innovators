"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";

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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clients Say</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Here's what our partners have to say about their experience working with us.
                    </p>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
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
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 h-full flex flex-col relative group hover:-translate-y-2">
                                <div className="absolute -top-4 right-8 bg-secondary text-white p-3 rounded-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                    <Quote size={24} fill="currentColor" />
                                </div>

                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed italic text-lg">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
                                    <div className="relative w-14 h-14 flex-shrink-0">
                                        <Image
                                            unoptimized
                                            fill
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="rounded-full object-cover border-2 border-white shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg leading-tight">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                                        <p className="text-xs text-secondary font-semibold uppercase tracking-wide mt-1">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
