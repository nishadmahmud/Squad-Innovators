import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBehance, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPinterestP, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MessageCircle, PhoneCall } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-white p-2 rounded-lg">
                                <Image src="/logo (2).png" width={32} height={32} alt="logo" className="w-8 h-8"></Image>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight">Squad Innovators</h3>
                        </div>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Providing innovative software solutions for businesses of all sizes since 2020. We build the future of digital.
                        </p>
                        <div className="flex gap-4">
                            <a target="_blank" href="https://www.linkedin.com/company/squad-innovators/posts/?feedView=all" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300">
                                <FaLinkedinIn className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a target="_blank" href="https://web.facebook.com/profile.php?id=61551666554830" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300">
                                <FaFacebookF className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300">
                                <FaInstagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Home</a></li>
                            <li><a href="/about-us" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                            <li><a href="#service" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Services</a></li>
                            <li><a href="#projects" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Projects</a></li>
                            <li><Link href="mailto: squadinnovators@gmail.com" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#service" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Custom Software</a></li>
                            <li><a href="#service" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Mobile App Dev</a></li>
                            <li><a href="#service" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Cloud Solutions</a></li>
                            <li><a href="#service" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">IT Consulting</a></li>
                            <li><a href="#service" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Support & Maintenance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full">Newsletter</h4>
                        <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Squad Innovators. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
