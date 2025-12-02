import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaAward } from "react-icons/fa";
import { SiTrustpilot, SiGoogle } from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import WaveBackground from "./WaveBackground";

const Banner = () => {
    return (
        <div id="home" className="relative w-full overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
            {/* Background Wave */}
            <WaveBackground />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start text-left animate-fade-in-up">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                            Your Technology Partner for <span className="text-secondary">Scalable Digital Solutions</span>
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                            Beyond code, we bring commitment. We take full ownership of your vision and turn it into powerful, reliable digital products.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-secondary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>Hire Us Now</span>
                            </Link>
                            <Link
                                href="/appointment"
                                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-primary border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                            >
                                <span>Get Appointment</span>
                            </Link>
                        </div>

                        <div className=" flex items-center gap-4 animate-fade-in-up delay-500 opacity-80 hover:opacity-100 transition-opacity">
                            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Aisa Smart App  Award <br></br>Winning Agency</p>
                            <Image className="w-32 lg:w-36 grayscale hover:grayscale-0 transition-all duration-500" width={160} height={100} unoptimized src="/award-asia.png" alt="Award Asia"></Image>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative animate-fade-in-up delay-200 -mt-20">
                        <div className="relative z-10">
                            <Image
                                unoptimized
                                src="/banner_dashboard.png"
                                alt="Dashboard Mockup"
                                width={800}
                                height={600}
                                className="w-full h-auto drop-shadow-2xl"
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
