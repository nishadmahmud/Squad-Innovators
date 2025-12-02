import React from 'react';
import { Smartphone, Laptop, Palette, ShoppingCart, Cloud, Settings } from 'lucide-react';

const services = [
    {
        title: 'UI/UX Design',
        icon: <Palette strokeWidth={1.5} />,
        description:
            'We create digital experiences that users love. Intuitive, engaging designs that turn first-time visitors into loyal customers.',
    },
    {
        title: 'Mobile App Development',
        icon: <Smartphone strokeWidth={1.5} />,
        description:
            'High-performance mobile apps for iOS and Android that accelerate your business growth and delight your users.',
    },
    {
        title: 'Software Development',
        icon: <Laptop strokeWidth={1.5} />,
        description:
            'Custom-built software solutions that streamline your operations, solve unique challenges, and fuel your growth.',
    },
    {
        title: 'eCommerce',
        icon: <ShoppingCart strokeWidth={1.5} />,
        description:
            'Turn your online store into a sales powerhouse. We build eCommerce platforms that showcase your products, convert visitors, and grow your brand.',
    },
    {
        title: 'SaaS Development',
        icon: <Cloud strokeWidth={1.5} />,
        description:
            'Scalable SaaS solutions that streamline your business, expand your reach, and boost customer satisfaction.',
    },
    {
        title: 'DevOps Services',
        icon: <Settings strokeWidth={1.5} />,
        description:
            'Your software, always improving. Our DevOps team ensures your software is reliable, high-quality, and evolves with your needs.',
    },
];

export default function OurServices() {
    return (
        <div id='service' className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">What We Do</span>
                    <h1 className='text-4xl md:text-5xl font-bold text-primary mt-3 mb-6'>Our Services</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We deliver end-to-end digital solutions tailored to your business needs, ensuring growth and scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <div className="text-primary text-3xl group-hover:text-white transition-colors duration-300">
                                    {React.cloneElement(service.icon, { size: 32 })}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
