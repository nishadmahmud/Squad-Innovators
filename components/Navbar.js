"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Palette, Smartphone, Laptop, ShoppingCart, Cloud, Settings, CreditCard } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const pathname = usePathname();
    const logo = "/Final-logo.png"; // Using the final logo from public assets

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Clients", href: "/clients" },
        { label: "Blog", href: "/blog" },
        {
            label: "Company", href: "#", children: [
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" }
            ]
        },
    ];

    const isActive = (href) => {
        if (href === '#' || href === '/') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <div className='fixed top-6 left-0 right-0 z-50 flex justify-center px-4'>
            <nav className="w-full max-w-[1400px] bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300">

                {/* Logo */}
                <Link href='/' className="flex items-center gap-2">
                    <Image unoptimized src={logo} width={120} height={120} alt="Logo" className="w-28 md:w-32" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <li key={item.label} className="relative group">
                            <Link
                                href={item.href}
                                className={`relative hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wide font-semibold flex items-center gap-1 ${isActive(item.href) ? 'text-primary' : ''}`}
                            >
                                {item.label}
                                {(item.label === "Services" || item.children) && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
                                )}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            {/* Dropdown for Services */}
                            {item.label === "Services" && (
                                <div className="absolute top-full -left-4 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden w-72">
                                        {[
                                            { name: "UI/UX Design", icon: <Palette size={18} />, slug: "ui-ux-design" },
                                            { name: "Mobile App Development", icon: <Smartphone size={18} />, slug: "mobile-app-development" },
                                            { name: "Software Development", icon: <Laptop size={18} />, slug: "software-development" },
                                            { name: "eCommerce Solutions", icon: <ShoppingCart size={18} />, slug: "ecommerce-solutions" },
                                            { name: "SaaS Development", icon: <Cloud size={18} />, slug: "saas-development" },
                                            { name: "DevOps Services", icon: <Settings size={18} />, slug: "devops-services" },
                                            { name: "POS Solutions", icon: <CreditCard size={18} />, slug: "pos-solutions" }
                                        ].map((service, index) => (
                                            <Link
                                                key={index}
                                                href={`/services/${service.slug}`}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors capitalize group/item"
                                            >
                                                <span className="text-gray-400 group-hover/item:text-primary transition-colors">
                                                    {service.icon}
                                                </span>
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Dropdown for Company */}
                            {item.children && (
                                <div className="absolute top-full -left-4 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden w-48 flex flex-col">
                                        {item.children.map((child, index) => (
                                            <Link
                                                key={index}
                                                href={child.href}
                                                className="px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors capitalize"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
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
                    <Link className='flex items-center gap-1 bg-primary px-4 py-2 rounded-full text-white shadow-md' target='_blank' href='https://wa.me/+8801886182084'>
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
                    <div className="p-6 flex flex-col h-full overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <Image unoptimized src={logo} width={100} height={100} alt="Logo" />
                            <button onClick={() => setOpenSidebar(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 font-medium">
                            {navItems.map((item) => (
                                <div key={item.label} className="flex flex-col">
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 text-lg hover:text-primary transition-colors border-b border-gray-100 pb-2 flex justify-between items-center"
                                        onClick={() => !item.children && setOpenSidebar(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 flex flex-col gap-2 mt-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="text-gray-600 text-base hover:text-primary transition-colors py-1"
                                                    onClick={() => setOpenSidebar(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-8">
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
