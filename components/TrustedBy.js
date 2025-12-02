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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Clients
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        Chosen by <span className="text-gradient">50+ Companies</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We are proud to have partnered with diverse businesses across the country, delivering impactful digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-40"
                        >
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-primary rounded-full uppercase tracking-wide">
                                    {company.category}
                                </span>
                            </div>

                            <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={company.width}
                                    height={80}
                                    className="object-contain max-h-16 w-auto transition-transform duration-300 group-hover:scale-110"
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
