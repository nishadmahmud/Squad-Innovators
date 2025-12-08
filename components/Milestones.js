"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Briefcase, Smile, Award, TrendingUp, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedGradient from './backgrounds/AnimatedGradient';
import FloatingShapes from './backgrounds/FloatingShapes';
import GridPattern from './backgrounds/GridPattern';

const Milestones = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const mainMilestones = [
        {
            id: 1,
            icon: <Calendar strokeWidth={1.5} />,
            count: 4,
            label: "Years of Excellence",
            suffix: "+",
            color: "from-blue-500 to-cyan-600",
            description: "Delivering quality since 2021"
        },
        {
            id: 2,
            icon: <Users strokeWidth={1.5} />,
            count: 20,
            label: "Expert Team Members",
            suffix: "+",
            color: "from-purple-500 to-pink-600",
            description: "Skilled professionals"
        },
        {
            id: 3,
            icon: <Briefcase strokeWidth={1.5} />,
            count: 50,
            label: "Projects Delivered",
            suffix: "+",
            color: "from-emerald-500 to-teal-600",
            description: "Across multiple industries"
        },
        {
            id: 4,
            icon: <Smile strokeWidth={1.5} />,
            count: 98,
            label: "Client Satisfaction",
            suffix: "%",
            color: "from-amber-500 to-orange-600",
            description: "Average rating 4.9/5"
        }
    ];

    const achievements = [
        { icon: <Award className="w-5 h-5" />, label: "ISO 9001 Certified", value: "2023" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Revenue Growth", value: "150%" },
        { icon: <Code className="w-5 h-5" />, label: "Code Quality", value: "A+" },
        { icon: <Globe className="w-5 h-5" />, label: "Countries Served", value: "5+" },
    ];

    return (
        <section ref={ref} className="relative py-20 bg-gradient-to-br from-[#030f45] to-[#1e3a8a] overflow-hidden">
            {/* New Background Components */}
            <AnimatedGradient variant="purple" intensity="medium" />
            <FloatingShapes variant="cool" count={8} />
            <GridPattern variant="mesh" opacity={0.05} color="#60a5fa" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-12"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4 shadow-lg">
                        OUR ACHIEVEMENTS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Proven Track Record of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
                            Excellence
                        </span>
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Numbers that speak louder than words - our journey of growth and client success
                    </p>
                </motion.div>

                {/* Main Milestones */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                    {mainMilestones.map((item, index) => (
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
                                <p className="text-gray-300 font-medium text-sm mb-1">
                                    {item.label}
                                </p>

                                {/* Description */}
                                <p className="text-gray-400 text-xs">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-all duration-300">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#60a5fa] text-white flex-shrink-0">
                                {achievement.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-white font-bold text-lg tabular-nums">{achievement.value}</div>
                                <div className="text-gray-300 text-xs truncate">{achievement.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
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
