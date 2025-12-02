"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    MessageSquare,
    Calendar,
    Code,
    FileCheck,
    Rocket,
    Settings,
} from "lucide-react";

const steps = [
    {
        title: "Consultation & Discovery",
        icon: <MessageSquare className="w-5 h-5" />,
        description:
            "Understanding the project goals, user needs, and technology requirements.",
        deliverables: [
            "Initial Consultation",
            "Project Scoping",
            "Needs Analysis",
            "Goal Definition",
            "Requirement Gathering",
            "Feasibility Study",
            "Strategic Planning",
        ],
    },
    {
        title: "Planning & Design",
        icon: <Calendar className="w-5 h-5" />,
        description:
            "Plan structure, design UI/UX, and create wireframes for feedback.",
        deliverables: [
            "Wireframes & Mockups",
            "User Journey Mapping",
            "UI/UX Design",
        ],
    },
    {
        title: "Development",
        icon: <Code className="w-5 h-5" />,
        description:
            "Actual development of the application following best coding practices.",
        deliverables: [
            "Frontend & Backend Implementation",
            "API Integration",
            "Database Design",
        ],
    },
    {
        title: "Testing & Feedback",
        icon: <FileCheck className="w-5 h-5" />,
        description:
            "We test the application thoroughly, fix bugs, and gather feedback to make improvements. The result is a polished, ready-to-launch product.",
        deliverables: [
            "Test Plan (Functional, Usability, Performance Testing)",
            "Bug/Issue Tracking Report",
            "User Feedback Report (if applicable)",
            "Finalized Application After Bug Fixes",
            "User Acceptance Testing (UAT) Approval",
            "App Store Readiness/Compliance Checks",
        ],
    },
    {
        title: "Launch & Deployment",
        icon: <Rocket className="w-5 h-5" />,
        description:
            "Deploy the application to production and ensure everything is running smoothly.",
        deliverables: [
            "Server Setup",
            "Deployment Scripts",
            "Post-Launch Support",
        ],
    },
    {
        title: "Support & Maintenance",
        icon: <Settings className="w-5 h-5" />,
        description: "Ensure long-term success with ongoing support and maintenance.",
        deliverables: ["Bug Fixes", "Security Updates", "Performance Monitoring"],
    },
];

export default function StepCards() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-[80vh] py-10 pt-0 px-4">
            <h1 className="md:text-3xl text-2xl lg:text-4xl text-center font-semibold my-10 mb-7">
                Roadmap to Build Your <span className="text-[#10328e]">Dream Product</span>
            </h1>

            {/* Desktop View (Step Selector + Active Card) */}
            <div className="hidden md:flex items-start justify-around gap-10 w-10/12 mx-auto">
                {/* Left Panel - Step Selector */}
                <div className="w-1/2 space-y-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer border transition-all duration-300 
            ${activeStep === index
                                    ? "bg-[#020b31] border-[#020b31] text-[#ffffff]"
                                    : "bg-white hover:bg-gray-50 border-gray-300"
                                }`}
                        >
                            <div>{step.icon}</div>
                            <span className="text-sm font-medium">{step.title}</span>
                        </div>
                    ))}
                </div>

                {/* Right Panel - Active Card */}
                <div className="w-1/2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#020b31] h-96 border border-gray-200 rounded-2xl p-6 "
                        >
                            <div className="flex items-center gap-2  text-[#020b31] bg-white px-4 py-2 rounded-full w-fit mb-5">
                                <div>{steps[activeStep].icon}</div>
                                <h2 className="text-sm font-semibold">{steps[activeStep].title}</h2>
                            </div>

                            <p className="text-lg font-semibold text-white mb-3">Deliverable</p>

                            <ul className="space-y-3 mb-6">
                                {steps[activeStep].deliverables.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-white text-sm">
                                        <svg
                                            className="w-5 h-5 text-white mt-1 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile View - All Cards Shown */}
            <div className="flex flex-col gap-6 md:hidden mt-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 border border-gray-200 rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 bg-[#020b31] text-white px-4 py-2 rounded-full w-fit mb-5">
                            <div>{step.icon}</div>
                            <h2 className="text-sm font-semibold">{step.title}</h2>
                        </div>

                        <p className="text-base font-semibold text-gray-900 mb-3">Deliverable</p>

                        <ul className="space-y-2 mb-6">
                            {step.deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-800 text-sm">
                                    <svg
                                        className="w-4 h-4 text-[#020b31]mt-1 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
}
