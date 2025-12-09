"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConsultationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        overview: '',
        agreedToPrivacy: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Use Innovative Services To Revolutionize Business Growth
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At Squad Innovators, we specialize in delivering innovative digital solutions that drive business
                            growth and efficiency. Our expert team ensures seamless project execution, adhering to deadlines
                            and industry best practices. With an agile approach, we adapt to your needs, ensuring tailored
                            and scalable solutions that exceed expectations.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Strategic Planning & Consulting',
                                'Cloud-based programs',
                                'Process Automation',
                                'Data-Driven Insights'
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span className="font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6">Book A Free Consultation</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter full name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Service & Budget */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="ui-ux-design">UI/UX Design</option>
                                        <option value="mobile-app">Mobile App Development</option>
                                        <option value="software">Software Development</option>
                                        <option value="ecommerce">eCommerce Solutions</option>
                                        <option value="saas">SaaS Development</option>
                                        <option value="devops">DevOps Services</option>
                                        <option value="pos">POS Solutions</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Budget <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Project Overview */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Project Overview <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="overview"
                                    value={formData.overview}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                                />
                            </div>

                            {/* Privacy Policy */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    name="agreedToPrivacy"
                                    checked={formData.agreedToPrivacy}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                                />
                                <label className="text-sm text-gray-600">
                                    By Submitting this form, you agree to our{' '}
                                    <Link href="/privacy-policy" className="text-secondary hover:underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get In Touch →
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
