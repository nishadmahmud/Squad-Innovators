"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        title: "Outlet Expense",
        description:
            "Our software offers precise tracking, automated workflows, and real-time insights to streamline your business operations.",
        projectImage: "/outlet-2.png",
        bgColor: "bg-blue-200",
        link: 'https://outletexpense.com/'
    },
    {
        title: "Day Planner",
        description:
            "Unleash Your Potential with the Ultimate Day Planner App. Organize Your Life, Maximize Your Productivity.",
        projectImage: "/day-planner-p.png",
        bgColor: "bg-purple-200",
        link: 'https://www.dayplannerapp.com/'
    },
    {
        title: "Squad HRM",
        description:
            "All-in-one Squad HRM operations seamlessly with Squad HRM, an all-in-one Human Resource Management System.",
        projectImage: "/hrm.png",
        bgColor: "bg-teal-200",
        link: ''
    },
    {
        title: "Outlet Expense",
        description:
            "Our software offers precise tracking, automated workflows, and real-time insights to streamline your business operations.",
        projectImage: "/outlet-2.png",
        bgColor: "bg-blue-200",
        link: 'https://outletexpense.com'
    },
    {
        title: "Day Planner",
        description:
            "Unleash Your Potential with the Ultimate Day Planner App. Organize Your Life, Maximize Your Productivity",
        projectImage: "/day-planner-p.png",
        bgColor: "bg-purple-200",
        link: 'https://www.dayplannerapp.com/'
    },
    {
        title: "Squad HRM",
        description:
            "All-in-one Squad HRM operations seamlessly with Squad HRM, an all-in-one Human Resource Management System.",
        projectImage: "/hrm.png",
        bgColor: "bg-teal-200",
        link: ''
    },
];

export default function OurProjects() {
    return (
        <section id="projects">
            <div className="bg-[#020b31] text-white px-6 py-16 md:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-10 mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Custom-Built Our Software Products
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 md:max-w-2xl">
                            Leading the way in global custom software outsourcing with smart, scalable, and future-ready solutions & also provide world-class custom software development services.
                        </p>
                    </div>

                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000 }}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        loop={true}
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    target="_blank"
                                    href={product.link}
                                    className={`${product.bgColor} rounded-2xl p-6 flex flex-col justify-between shadow-lg h-96`}
                                >
                                    <h3 className="text-lg sm:text-xl font-bold text-black">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-800 text-sm sm:text-base mt-2">
                                        {product.description}
                                    </p>
                                    <Image
                                        width={350}
                                        height={200}
                                        className="mt-4 pb-4 rounded-md object-contain"
                                        alt="productImage"
                                        src={product.projectImage}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
