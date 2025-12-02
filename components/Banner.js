import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import WaveBackground from "./WaveBackground";

const Banner = () => {
    return (
        <div id="home" className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
            {/* Background Wave - Subtle */}
            <div className="absolute inset-0 opacity-60 pointer-events-none">
                <WaveBackground />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Award winning Company
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 tracking-tight">
                            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Scalable</span> <br />
                            Digital Products
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                            We transform complex business requirements into elegant, high-performance software solutions. Your vision, our engineering excellence.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 bg-primary hover:bg-blue-900 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/appointment"
                                className="flex items-center gap-2 bg-white text-primary border border-gray-200 hover:border-gray-300 px-7 py-3.5 rounded-full font-semibold text-base transition-all hover:bg-gray-50"
                            >
                                <Phone className="w-4 h-4" />
                                Book Call
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 border-t border-gray-100 pt-6 w-full">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[
                                        "/fizan.png",
                                        "/sayem.jpg",
                                        "/mushfiq.jpg",
                                        "/mazhar.jpg"
                                    ].map((src, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <Image
                                                src={src}
                                                width={40}
                                                height={40}
                                                alt="Client"
                                                className="w-full h-full object-cover"
                                                unoptimized
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-primary text-sm">500+</span>
                                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Happy Clients</span>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-gray-200"></div>

                            <div className="flex items-center gap-3">
                                <Image className="w-20 grayscale opacity-80" width={80} height={50} unoptimized src="/award-asia.png" alt="Award Asia" />
                                <div className="text-xs font-semibold text-gray-500 leading-tight">
                                    Asia Smart App <br /> Awards Winner
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image - Clean, no frame */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[400px]">
                            <Image
                                unoptimized
                                src="/banner_dashboard.png"
                                alt="Dashboard Mockup"
                                width={600}
                                height={450}
                                className="w-full h-auto object-contain drop-shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
