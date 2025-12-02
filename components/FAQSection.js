"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do you ensure project quality?",
        answer: "We follow a rigorous QA process including automated testing, code reviews, and manual user acceptance testing to ensure every deliverable meets our high standards."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary by project scope. A simple MVP might take 4-6 weeks, while complex enterprise solutions can take 3-6 months. We provide a detailed timeline during the discovery phase."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer various support and maintenance packages to ensure your software remains secure, up-to-date, and performs optimally after launch."
    },
    {
        question: "Can you work with our existing team?",
        answer: "Absolutely. We can augment your existing team with specific skills or take ownership of entire modules. We're flexible in our engagement models."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern stacks like React, Next.js, Node.js, Laravel, Flutter, and cloud platforms like AWS and Google Cloud."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
