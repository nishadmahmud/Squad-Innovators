"use client";

import Image from "next/image";
import React, { useState } from "react";

const techStack = {
    "Backend": [
        { name: "Php", icon: "/php.png" },
        { name: "Laravel", icon: "/laravel.png" },
        { name: "NodeJs", icon: "/nodejs.jpg" },


    ],
    Frontend: [
        { name: "React Js", icon: "/react.jpg" },
        { name: "Next js", icon: "/nextjs.jpg" },
        { name: "TypeScript", icon: "/typescript.jpg" },
        { name: "HTML5", icon: "/htnl.jpg" },
        { name: "CSS", icon: "/css.jpg" },
        { name: "Tailwind CSS", icon: "/tailwind.jpg" },
    ],
    "Mobile App": [
        { name: "Flutter", icon: "/flutter.jpg" },
        { name: "Dart", icon: "/dart.jpg" },
        { name: "Swift", icon: "/swift-og.jpg" },
        { name: "Kotlin", icon: "/koltin.png" },
    ],
    "E-Commerce": [
        { name: "Next js", icon: "/nextjs.jpg" },
        { name: "WordPress", icon: "/wordpress.jpg" },
    ],
    "Cloud": [
        { name: "digitalOcean", icon: "/digitalOcean.jpg" },
        { name: "Google Cloud", icon: "/cloud.png" },
        { name: "Firebase", icon: "/firebase.jpg" },
    ],
    "Database": [
        { name: "MySQL", icon: "/mysql.jpg" },
        { name: "PostgreSQL", icon: "/postragsql.png" },
        { name: "MongoDB", icon: "/mongodb.png" },

    ],
    "Design & Prototyping": [
        { name: "Figma", icon: "/figma.png" },
        { name: "Adobe Photoshop", icon: "/photoshop.png" },
        { name: "Canva", icon: "/canva.png" },

    ],
};

const TechStackTabs = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <div className="bg-white text-black py-12 pt-14 px-4 md:px-12">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="md:text-3xl lg:text-4xl text-2xl font-semibold">Our Powerful Tech Stack</h2>
                <p className="text-base md:text-lg mt-4 text-gray-800 max-w-2xl mx-auto">
                    We leverage a diverse range of cutting-edge technologies to build scalable, reliable, and secure applications that meet your unique business needs.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-4 sm:gap-6 md:grid md:grid-cols-4 lg:grid-cols-7 lg:mb-10 mb-2 pb-2">
                {Object.keys(techStack).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-shrink-0 px-4 py-1 w-max md:w-full rounded-md font-semibold transition duration-300 text-sm md:text-base ${activeTab === tab
                                ? "bg-[#020b31] text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tech Icons */}
            <div className="bg-[#020b31] rounded-2xl p-6 md:p-10 flex flex-wrap justify-center gap-6 md:gap-10 min-h-[200px] transition-all duration-300 items-center">
                {techStack[activeTab]?.length > 0 ? (
                    techStack[activeTab].map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center lg:w-28 text-center"
                        >
                            <Image
                                unoptimized
                                width={64}
                                height={64}
                                src={tech.icon}
                                alt={tech.name}
                                className="lg:w-16 lg:h-16 object-cover rounded-full mb-2"
                            />
                            <p className="text-white text-sm md:text-base font-medium">{tech.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center text-lg font-medium w-full">
                        No technologies listed under &ldquo;{activeTab}&rdquo;
                    </p>
                )}
            </div>
        </div>
    );
};

export default TechStackTabs;
