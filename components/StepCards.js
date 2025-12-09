"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    MessageSquare,
    Calendar,
    Code,
    FileCheck,
    Rocket,
    Settings,
    CheckCircle2
} from "lucide-react";
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

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
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Components */}
            <AnimatedGradient variant="cool" intensity="light" />
            <FloatingShapes variant="default" count={5} />
            <GridPattern variant="diagonal" opacity={0.04} color="#2563eb" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-wider uppercase text-sm"
                    >
                        Our Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6"
                    >
                        Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Success</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        A proven, transparent process that delivers exceptional results on time and within budget.
                    </motion.p>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Vertical Line Background */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 rounded-full"></div>

                    {/* Animated Vertical Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2 rounded-full origin-top z-0"
                    ></motion.div>

                    <div className="space-y-12 md:space-y-24 pb-24">
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
                                    <div className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative group ${index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                        }`}>
                                        {/* Connector Dot for Mobile */}
                                        <div className="md:hidden absolute top-8 -left-[42px] w-4 h-4 rounded-full bg-white border-4 border-primary z-10"></div>

                                        <h3 className={`text-2xl font-bold text-primary mb-3 flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {step.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                                            {step.deliverables.map((item, i) => (
                                                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                                                    <CheckCircle2 className="w-3 h-3" />
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white text-primary border-4 border-gray-100 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                                        {step.icon}
                                    </div>
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
