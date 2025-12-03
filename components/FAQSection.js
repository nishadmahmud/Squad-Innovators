"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        <HelpCircle size={14} />
                        FAQ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Everything you need to know about our process, services, and how we work.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index
                                    ? "border-primary/20 shadow-lg"
                                    : "border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? "text-primary" : "text-gray-800 group-hover:text-primary"
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "bg-primary text-white rotate-180"
                                        : "bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
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
                                            <div className="pt-4 border-t border-gray-50">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
