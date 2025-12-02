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
            label: "Years of operation",
            suffix: "+"
        },
        {
            id: 2,
            icon: <Users strokeWidth={1.5} />,
            count: 20,
            label: "Creative Members",
            suffix: "+"
        },
        {
            id: 3,
            icon: <Briefcase strokeWidth={1.5} />,
            count: 35,
            label: "Projects Delivered",
            suffix: "+"
        },
        {
            id: 4,
            icon: <Smile strokeWidth={1.5} />,
            count: 30,
            label: "Satisfied Clients",
            suffix: "+"
        }
    ];

    return (
        <div ref={ref} className="w-full relative py-12 bg-primary overflow-hidden border-y border-white/10">
            {/* Technical Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left min-w-[200px] pt-6 md:pt-0 first:pt-0"
                        >
                            {/* Icon Container */}
                            <div className="p-3 rounded-full bg-white/5 text-secondary ring-1 ring-white/10">
                                {React.cloneElement(item.icon, { size: 24 })}
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-white leading-none mb-1">
                                    {inView && <CountUp end={item.count} duration={2.5} suffix={item.suffix} />}
                                </h2>
                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Milestones;
