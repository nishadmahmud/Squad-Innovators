import React from 'react';
import { Smartphone, Laptop, Palette, ShoppingCart, Cloud, Settings, ArrowUpRight, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link component

const services = [
    {
        title: 'UI/UX Design',
        icon: <Palette strokeWidth={1.5} />,
        description: 'Intuitive, engaging designs that turn first-time visitors into loyal customers.',
        className: 'md:col-span-2 bg-gradient-to-br from-blue-50 to-white',
        slug: 'ui-ux-design'
    },
    {
        title: 'Mobile App Development',
        icon: <Smartphone strokeWidth={1.5} />,
        description: 'High-performance iOS and Android apps.',
        className: 'md:col-span-1 bg-white',
        slug: 'mobile-app-development'
    },
    {
        title: 'Software Development',
        icon: <Laptop strokeWidth={1.5} />,
        description: 'Custom-built software solutions tailored to your needs.',
        className: 'md:col-span-1 bg-white',
        slug: 'software-development'
    },
    {
        title: 'eCommerce Solutions',
        icon: <ShoppingCart strokeWidth={1.5} />,
        description: 'Scalable online stores that drive sales.',
        className: 'md:col-span-2 bg-gradient-to-br from-cyan-50 to-white',
        slug: 'ecommerce-solutions'
    },
    {
        title: 'SaaS Development',
        icon: <Cloud strokeWidth={1.5} />,
        description: 'Cloud-native solutions for modern businesses.',
        className: 'md:col-span-1 bg-white',
        slug: 'saas-development'
    },
    {
        title: 'DevOps Services',
        icon: <Settings strokeWidth={1.5} />,
        description: 'Reliable, automated infrastructure.',
        className: 'md:col-span-1 bg-white',
        slug: 'devops-services'
    },
    {
        title: 'POS Solutions',
        icon: <CreditCard strokeWidth={1.5} />,
        description: 'Streamline sales and inventory with our robust POS systems.',
        className: 'md:col-span-1 bg-white',
        slug: 'pos-solutions'
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function OurServices() {
    return (
        <div id='service' className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        What We Do
                    </span>
                    <h1 className='text-4xl md:text-5xl font-bold text-primary mb-6'>
                        Comprehensive <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We deliver end-to-end digital solutions tailored to your business needs, ensuring growth and scalability.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className={`group relative rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden block ${service.className}`}
                        >
                            <motion.div variants={item} className="h-full">
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="w-6 h-6 text-primary" />
                                </div>

                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                                        {React.cloneElement(service.icon, { size: 28 })}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed relative z-10">
                                    {service.description}
                                </p>

                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
