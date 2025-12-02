import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const SocialSidebar = () => {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
            {/* Facebook */}
            <Link
                href="#"
                className="relative flex items-center justify-center w-12 h-12 bg-[#030f45] text-white rounded-r-lg shadow-md hover:bg-blue-600 transition-all duration-300 group"
            >
                <Facebook className="w-5 h-5 z-10" />
                <span className="absolute left-0 top-0 h-full bg-blue-600 text-white flex items-center pl-14 pr-4 rounded-r-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10 whitespace-nowrap shadow-md">
                    Facebook
                </span>
            </Link>

            {/* WhatsApp */}
            <Link
                href="#"
                className="relative flex items-center justify-center w-12 h-12 bg-[#030f45] text-white rounded-r-lg shadow-md hover:bg-green-500 transition-all duration-300 group"
            >
                <MessageCircle className="w-5 h-5 z-10" />
                <span className="absolute left-0 top-0 h-full bg-green-500 text-white flex items-center pl-14 pr-4 rounded-r-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10 whitespace-nowrap shadow-md">
                    WhatsApp
                </span>
            </Link>

            {/* Instagram */}
            <Link
                href="#"
                className="relative flex items-center justify-center w-12 h-12 bg-[#030f45] text-white rounded-r-lg shadow-md hover:bg-pink-600 transition-all duration-300 group"
            >
                <Instagram className="w-5 h-5 z-10" />
                <span className="absolute left-0 top-0 h-full bg-pink-600 text-white flex items-center pl-14 pr-4 rounded-r-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10 whitespace-nowrap shadow-md">
                    Instagram
                </span>
            </Link>

            {/* LinkedIn */}
            <Link
                href="#"
                className="relative flex items-center justify-center w-12 h-12 bg-[#030f45] text-white rounded-r-lg shadow-md hover:bg-blue-700 transition-all duration-300 group"
            >
                <Linkedin className="w-5 h-5 z-10" />
                <span className="absolute left-0 top-0 h-full bg-blue-700 text-white flex items-center pl-14 pr-4 rounded-r-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10 whitespace-nowrap shadow-md">
                    LinkedIn
                </span>
            </Link>
        </div>
    );
};

export default SocialSidebar;
