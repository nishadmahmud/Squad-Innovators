"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Briefcase, Smile } from 'lucide-react';

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
        <div ref={ref} className="w-full relative py-20 bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {milestones.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative p-6 rounded-2xl bg-slate-50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon Container */}
                            <div className="mb-6 p-4 rounded-full bg-white shadow-sm group-hover:shadow-md group-hover:bg-secondary group-hover:text-white text-gray-400 transition-all duration-300">
                                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                                {inView && <CountUp end={item.count} duration={2.5} suffix={item.suffix} />}
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-widest">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Milestones;
