"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const logo = "/Final-logo.png"; // Using the final logo from public assets

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
    ];

    return (
        <div className='fixed top-6 left-0 right-0 z-50 flex justify-center px-4'>
            <nav className="w-full max-w-7xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300">

                {/* Logo */}
                <Link href='/' className="flex items-center gap-2">
                    <Image unoptimized src={logo} width={120} height={120} alt="Logo" className="w-28 md:w-32" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className="relative hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wide font-semibold group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/about-us" className="relative hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wide font-semibold group">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>

                {/* CTA Button */}
                <Link
                    href='mailto: squadinnovators@gmail.com'
                    className='hidden lg:flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                >
                    <PhoneCall size={16} />
                    <span>Contact Us</span>
                </Link>

                {/* Hamburger Icon */}
                <div className='flex items-center gap-4 lg:hidden'>
                    <Link className='flex items-center gap-1 bg-primary px-4 py-2 rounded-full text-white shadow-md' target='_blank' href='https://wa.me/+8801677182084'>
                        <FaWhatsapp className="text-lg" />
                        <span className='text-xs font-bold'>Let&apos;s Talk</span>
                    </Link>
                    <button
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setOpenSidebar(!openSidebar)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {openSidebar ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${openSidebar ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
                >
                    <div className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-8">
                            <Image unoptimized src={logo} width={100} height={100} alt="Logo" />
                            <button onClick={() => setOpenSidebar(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-700 text-lg hover:text-primary transition-colors border-b border-gray-100 pb-2"
                                    onClick={() => setOpenSidebar(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="/about-us" className="text-gray-700 text-lg hover:text-primary transition-colors border-b border-gray-100 pb-2" onClick={() => setOpenSidebar(false)}>About Us</Link>
                        </div>

                        <div className="mt-auto">
                            <Link
                                href='mailto: squadinnovators@gmail.com'
                                className='flex items-center justify-center gap-2 bg-primary text-white w-full py-3 rounded-xl font-semibold shadow-lg'
                            >
                                <PhoneCall size={18} />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
