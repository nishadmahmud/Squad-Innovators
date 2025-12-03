"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
            <div className="relative w-24 h-24">
                {/* Outer Ring */}
                <motion.div
                    className="absolute inset-0 border-4 border-gray-100 rounded-full"
                ></motion.div>

                {/* Spinning Ring */}
                <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-secondary border-r-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                {/* Inner Pulse */}
                <motion.div
                    className="absolute inset-0 m-8 bg-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 text-primary font-bold tracking-widest uppercase text-sm"
            >
                Loading
            </motion.p>
        </div>
    );
}
