import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
            {/* Background Elements - Subtle Light Theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/grid-pattern.png')] opacity-[0.03]"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
                    Ready to Build Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Dream Product?</span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Let's turn your vision into reality. Schedule a free consultation with our experts and get a roadmap for your project.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Start a Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    <Link
                        href="/appointment"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                        <Calendar className="w-5 h-5" />
                        Book a Call
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
