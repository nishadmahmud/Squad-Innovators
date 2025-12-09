"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import WavyLines from './backgrounds/WavyLines';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const ContactPageContent = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12 overflow-hidden relative">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <WavyLines
                    lineCount={4}
                    color="#2563eb"
                    opacity={0.06}
                    amplitude={30}
                    frequency={0.018}
                    speed={2}
                />
                <FloatingShapes variant="default" count={6} />
                <GridPattern variant="grid" opacity={0.04} color="#2563eb" />
            </div>

            {/* Hero Section */}
            <section className="relative container mx-auto px-4 mb-16 text-center z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto"
                >
                    <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Get In Touch
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Conversation</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out directly.
                    </motion.p>
                </motion.div>
            </section>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-white to-blue-50 rounded-[2rem] p-8 border border-blue-100 shadow-lg">
                            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                <MessageSquare className="text-secondary" />
                                Contact Information
                            </h2>
                            <div className="space-y-8">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1 text-lg">Email Us</h3>
                                        <p className="text-gray-600 mb-1">For general inquiries and support</p>
                                        <a href="mailto:squadinnovators@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors">squadinnovators@gmail.com</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1 text-lg">Call Us</h3>
                                        {/* <p className="text-gray-600 mb-1">Mon-Fri from 9am to 6pm</p> */}
                                        <a href="tel:+8801886182084" className="text-primary font-medium hover:text-secondary transition-colors">+880 1886-182084</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1 text-lg">Visit Us</h3>
                                        <p className="text-gray-600 mb-1">Come say hello at our office</p>
                                        <p className="text-primary font-medium">
                                            20/22, Block-c, Aftabnagor<br />
                                            Badda, Bangladesh
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                <Globe className="text-secondary" />
                                Connect with Us
                            </h2>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/p/Squad-Innovators-61551666554830/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-[#1877f2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <FaFacebookF size={24} />
                                </a>
                                <a href="https://www.instagram.com/squadinnovators/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/squad-innovators" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <FaLinkedinIn size={24} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

                        <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
                        <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;
