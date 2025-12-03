"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Briefcase, Smile, Award, Globe } from 'lucide-react';
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
            color: "text-blue-400"
        },
        {
            id: 2,
            icon: <Users strokeWidth={1.5} />,
            count: 20,
            label: "Creative Minds",
            suffix: "+",
            color: "text-purple-400"
        },
        {
            id: 3,
            icon: <Briefcase strokeWidth={1.5} />,
            count: 35,
            label: "Projects Delivered",
            suffix: "+",
            color: "text-emerald-400"
        },
        {
            id: 4,
            icon: <Smile strokeWidth={1.5} />,
            count: 30,
            label: "Happy Clients",
            suffix: "+",
            color: "text-amber-400"
        }
    ];

    return (
        <section ref={ref} className="w-full rounded-3xl relative py-20 bg-primary overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-colors duration-500"></div>
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {inView ? <CountUp end={item.count} duration={2.5} suffix={item.suffix} /> : "0"}
                                </h3>

                                <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
