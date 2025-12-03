"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
    { name: "Satsuma Corporation", category: "Japanese Website", logo: "/satsuna.png", width: 120 },
    { name: "BONZER", category: "Saloon", logo: "/bonzer.png", width: 100 },
    { name: "BROTHERS", category: "E-Commerce", logo: "/brothers.png", width: 100 },
    { name: "Gadget Bodda", category: "E-Commerce", logo: "/bodda.png", width: 120 },
    { name: "Apple Mart", category: "E-Commerce", logo: "/apple_mart.png", width: 130 },
    { name: "DLM Properties", category: "Real-Estate", logo: "/dlm.png", width: 90 },
    { name: "Afrin Pharma", category: "Pharmacy", logo: "/apPharma.png", width: 80 },
    { name: "Bhai Bhai", category: "Garments & Apparels", logo: "/bhai-bhai.png", width: 90 },
    { name: "Corporate Care", category: "HRM & Payroll", logo: "/corporate-care.png", width: 120 },
    { name: "Donation", category: "Donation Management", logo: "/dontaion.png", width: 80 },
];

const TrustedBy = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-primary text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        Our Clients
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Chosen by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">50+ Companies</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        We are proud to have partnered with diverse businesses across the country, delivering impactful digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center h-40"
                        >
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-[10px] font-bold px-2 py-1 bg-gray-50 text-gray-500 rounded-full uppercase tracking-wide border border-gray-100">
                                    {company.category}
                                </span>
                            </div>

                            <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={company.width}
                                    height={80}
                                    className="object-contain max-h-16 w-auto transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
