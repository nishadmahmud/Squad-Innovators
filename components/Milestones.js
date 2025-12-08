"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Briefcase, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const Milestones = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const milestones = [
        {
            id: 1,
            icon: <Calendar strokeWidth={1.5} />,
            count: 4,
            label: "Years of Excellence",
            suffix: "+",
            color: "from-blue-500 to-cyan-600"
        },
        {
            id: 2,
            icon: <Users strokeWidth={1.5} />,
            count: 20,
            label: "Creative Minds",
            suffix: "+",
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 3,
            icon: <Briefcase strokeWidth={1.5} />,
            count: 35,
            label: "Projects Delivered",
            suffix: "+",
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 4,
            icon: <Smile strokeWidth={1.5} />,
            count: 30,
            label: "Happy Clients",
            suffix: "+",
            color: "from-amber-500 to-orange-600"
        }
    ];

    return (
        <section ref={ref} className="relative py-16 bg-gradient-to-br from-[#030f45] to-[#1e3a8a] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>

                            {/* Card */}
                            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300">
                                {/* Icon */}
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>

                                {/* Count */}
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                                    {inView ? <CountUp end={item.count} duration={2} suffix={item.suffix} /> : "0"}
                                </h3>

                                {/* Label */}
                                <p className="text-gray-300 font-medium text-sm">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </section>
    );
};

export default Milestones;
