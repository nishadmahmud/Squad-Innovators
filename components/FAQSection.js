"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Code, DollarSign, Clock, Users } from 'lucide-react';

const faqCategories = [
    {
        name: "General",
        icon: <HelpCircle className="w-4 h-4" />,
        faqs: [
            {
                question: "How do you ensure project quality?",
                answer: "We follow a rigorous QA process including automated testing, code reviews, manual UAT, and continuous integration/deployment pipelines to ensure every deliverable meets our high standards."
            },
            {
                question: "What is your typical project timeline?",
                answer: "Timelines vary by scope: Simple MVP (4-6 weeks), Medium complexity (2-3 months), Enterprise solutions (3-6 months). We provide detailed timelines during discovery phase."
            },
        ]
    },
    {
        name: "Technical",
        icon: <Code className="w-4 h-4" />,
        faqs: [
            {
                question: "What technologies do you specialize in?",
                answer: "We specialize in React, Next.js, Node.js, Laravel, Flutter, TypeScript, and cloud platforms (AWS, Google Cloud, DigitalOcean). We stay updated with latest tech trends."
            },
            {
                question: "Do you provide source code and documentation?",
                answer: "Yes, you get full ownership of source code, comprehensive technical documentation, API docs, and deployment guides upon project completion."
            },
        ]
    },
    {
        name: "Pricing",
        icon: <DollarSign className="w-4 h-4" />,
        faqs: [
            {
                question: "What are your pricing models?",
                answer: "We offer Fixed Price (defined scope), Time & Material (flexible scope), and Dedicated Team (long-term) models. Pricing depends on project complexity and timeline."
            },
            {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer milestone-based payments (typically 30% upfront, 40% mid-project, 30% on delivery) and can customize payment schedules for larger projects."
            },
        ]
    },
    {
        name: "Support",
        icon: <Clock className="w-4 h-4" />,
        faqs: [
            {
                question: "Do you provide post-launch support?",
                answer: "Yes, we offer various support packages: Basic (bug fixes), Standard (updates + optimization), Premium (24/7 support + new features). All include security patches."
            },
            {
                question: "Can you work with our existing team?",
                answer: "Absolutely. We offer team augmentation, dedicated developers, or full project ownership. We integrate seamlessly with your workflows and tools."
            },
        ]
    },
];

const FAQSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#2563eb] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        <HelpCircle size={14} />
                        FAQ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[#030f45] mb-4"
                    >
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#030f45] to-[#2563eb]">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        Everything you need to know about our process, services, pricing, and how we work with clients.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {faqCategories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveCategory(index);
                                setActiveIndex(0);
                            }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === index
                                    ? "bg-gradient-to-r from-[#030f45] to-[#2563eb] text-white shadow-lg"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb]"
                                }`}
                        >
                            {category.icon}
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Accordion */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {faqCategories[activeCategory].faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index
                                        ? "border-[#2563eb]/20 shadow-lg"
                                        : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <span className={`text-lg font-bold transition-colors ${activeIndex === index ? "text-[#030f45]" : "text-gray-800 group-hover:text-[#030f45]"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ml-4 ${activeIndex === index
                                            ? "bg-gradient-to-r from-[#030f45] to-[#2563eb] text-white"
                                            : "bg-gray-50 text-gray-400 group-hover:bg-[#2563eb]/10 group-hover:text-[#2563eb]"
                                        }`}>
                                        {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                                <div className="pt-4 border-t border-gray-50 text-base">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                >
                    <h3 className="text-xl font-bold text-[#030f45] mb-2">Still have questions?</h3>
                    <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Our team is here to help.</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#030f45] to-[#2563eb] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        <Users className="w-5 h-5" />
                        Contact Support
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
