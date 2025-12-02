"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        quote:
            "Reliable, innovative, and incredibly fast. Their team built our web app under a tight deadline without compromising on quality. Truly a five-star experience!",
        name: "Atsushi Shimoikura",
        title: "Managing director & CEO of Satsuna Corporation",
        image: "/testimonial-1.png",
    },
    {
        quote:
            "From strategy to execution, the Squad Innovators team has been phenomenal. They helped us launch our real-estate platform on time with clean code, great UI, and solid backend performance.",
        name: "M A Matin",
        title: "Founder of DLM Properties",
        image: "/fizan.png",
    },
    {
        quote:
            "Squad Innovators transformed our business idea into a fully functional Saloon management software . Their team was proactive, transparent, and deeply committed to quality throughout the project.",
        name: "Tariqul Islam",
        title: "In-Charge of Bonzer",
        image: "/bonzerI.png",
    },
    {
        quote:
            "From start to finish, they felt like part of our team. The custom PoS system they built helped us scale operations and improved team productivity by over 50%.”",
        name: "Faisal",
        title: "Owner of Brothers & Mobile Accessories",
        image: "/user-avatar-male-5.png",
    },
];

const TestimonialSection = () => {
    return (
        <div className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Don&apos;t just take our word for it. Here&apos;s what our partners have to say about their experience working with us.
                    </p>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group">
                                <div className="absolute top-6 right-8 text-6xl text-blue-100 font-serif group-hover:text-blue-200 transition-colors">&rdquo;</div>

                                <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>

                                <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-secondary rounded-full blur opacity-20"></div>
                                        <Image
                                            unoptimized
                                            width={60}
                                            height={60}
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-secondary font-medium">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSection;
