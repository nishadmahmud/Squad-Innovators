import { ListFilter } from 'lucide-react';
import React from 'react';

export default function WhiteLabelService() {
    return (
        <section className="min-h-screen bg-white text-black px-6 py-16 flex items-center relative overflow-hidden">
            {/* Gradient Background Centered */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div
                    className="w-[100vw] h-screen opacity-50"
                    style={{
                        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(255,255,255,0) 100%)',
                    }}
                ></div>

            </div>

            <div className="relative z-10 lg:max-w-7xl mx-auto grid md:grid-cols-2 lg:gap-20 items-center gap-5">
                {/* Left Content */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black">
                        Expand Your Business with Our White-Label Outlet Expense
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Deliver high-quality results faster, without investing in a full-time development team.
                    </p>
                </div>

                {/* Right Boxes */}
                <div className="flex flex-col gap-6">
                    <div className="bg-blue-700 border border-white text-white p-6 rounded-xl shadow-lg lg:w-[30rem]">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <span className="text-white"><ListFilter></ListFilter></span>
                            100% White-Label Fulfillment
                        </h3>
                        <p className="text-sm text-blue-100">
                            Launch fully branded, high-performance apps without building from scratch — we do the heavy lifting.
                        </p>
                    </div>

                    <div className="bg-[#0b0d2c] border border-white text-white p-6 rounded-xl shadow-lg lg:w-[30rem] relative lg:left-16">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <span className="text-white"><ListFilter></ListFilter></span>
                            Deliver High-Quality Results
                        </h3>
                        <p className="text-sm text-blue-100">
                            Quality, timeliness, and affordability—our experienced team brings all three to every project.
                        </p>
                    </div>

                    <div className="bg-black text-white p-6 rounded-xl shadow-lg lg:w-[30rem] border border-white">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <span className="text-white"><ListFilter></ListFilter></span>
                            Scale Your Business Easily
                        </h3>
                        <p className="text-sm text-gray-400">
                            Reach new markets with ease by using our development team as your own—minus the hiring burden.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
