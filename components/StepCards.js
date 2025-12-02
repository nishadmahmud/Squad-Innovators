"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MessageSquare,
    Calendar,
    Code,
    FileCheck,
    Rocket,
    Settings,
    CheckCircle2
} from "lucide-react";

const steps = [
    {
        title: "Consultation & Discovery",
        icon: <MessageSquare className="w-6 h-6" />,
        description: "Understanding your goals, user needs, and technology requirements.",
        deliverables: ["Project Scoping", "Needs Analysis", "Strategic Planning"],
    },
    {
        title: "Planning & Design",
        icon: <Calendar className="w-6 h-6" />,
        description: "Architecting the solution and designing intuitive user experiences.",
        deliverables: ["Wireframes", "UI/UX Design", "Technical Architecture"],
    },
    {
        title: "Development",
        icon: <Code className="w-6 h-6" />,
        description: "Writing clean, scalable code following industry best practices.",
        deliverables: ["Frontend & Backend", "API Integration", "Database Setup"],
    },
    {
        title: "Testing & QA",
        icon: <FileCheck className="w-6 h-6" />,
        description: "Rigorous testing to ensure a bug-free, high-performance product.",
        deliverables: ["Functional Testing", "Performance Tuning", "Security Checks"],
    },
    {
        title: "Launch & Deployment",
        icon: <Rocket className="w-6 h-6" />,
        description: "Seamless deployment to production environments.",
        deliverables: ["Server Setup", "CI/CD Pipelines", "Go-Live Support"],
    },
    {
        title: "Support & Growth",
        icon: <Settings className="w-6 h-6" />,
        description: "Continuous improvement and maintenance for long-term success.",
        deliverables: ["24/7 Monitoring", "Feature Updates", "Scaling Support"],
    },
];

export default function StepCards() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
                        Roadmap to <span className="text-gradient">Success</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A proven, transparent process that delivers exceptional results on time and within budget.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                        }`}>
                                        <div className={`absolute top-6 ${index % 2 === 0 ? "-left-3 md:-right-3" : "-left-3"} w-6 h-6 bg-white border-t border-l border-gray-100 transform rotate-45`}></div>

                                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3 md:inline-flex">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {step.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                                            {step.deliverables.map((item, i) => (
                                                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                                                    <CheckCircle2 className="w-3 h-3" />
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white border-4 border-white shadow-lg z-10">
                                    {step.icon}
                                </div>

                                {/* Empty Side for Layout Balance */}
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
