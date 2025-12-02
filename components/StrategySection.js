import Image from "next/image";
import React from "react";

const StrategySection = () => {
    return (
        <div className="bg-[#ffffff] text-black md:py-16 lg:pb-16 pb-10 px-4 md:px-20">
            <div className="grid md:grid-cols-2 lg:gap-10 gap-20 items-start">

                <div className="relative flex items-center justify-center">
                    {/* Big Circle (border only) */}
                    <div className="relative rounded-full border-2 border-gray-300 w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center z-10">
                        {/* Center Image */}
                        <Image
                            width={200}
                            height={200}
                            src="/evan-sir.jpg"
                            alt="Laptop"
                            className="md:h-64 h-40 md:w-64 w-40 object-contain rounded-full z-10"
                        />
                    </div>

                    {/* Rotating Icons Outside the Circle */}
                    <div className="absolute w-96 h-96 md:w-[580px] md:h-[580px] lg:animate-spin-slow z-20">
                        {/* Top */}
                        <div className="absolute left-1/2 top-10 transform  -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-white rounded-full p-2 shadow-md">
                                <Image width={70} height={70} src="/ishan.jpeg" alt="Next.js" className="md:h-14 w-12 md:w-14 h-12 object-contain rounded-full" />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="absolute top-1/2 right-10 transform translate-x-1/2 -translate-y-1/2">
                            <div className="bg-white rounded-full p-2 shadow-md">
                                <Image width={70} height={70} src="/mazhar.jpg" alt="React" className="md:h-14 w-12 md:w-14 h-12 object-contain rounded-full" />
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 translate-y-1/2">
                            <div className="bg-white rounded-full p-2 shadow-md">
                                <Image width={70} height={70} src="/mushfiq.jpg" alt="Tailwind" className="md:h-14 w-12 md:w-14 h-12 object-contain rounded-full" />
                            </div>
                        </div>

                        {/* Left */}
                        <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-white rounded-full p-2 shadow-md">
                                <Image width={70} height={70} src="/sayem.jpg" alt="Figma" className="md:h-14 w-12 md:w-14 h-12 object-contain rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute lg:bottom-12 bottom-8 translate-y-full mt-10 bg-[#030f45] text-white rounded-full px-8 py-5 shadow-md z-30">
                        <p className="md:text-lg font-semibold">20+ Team Members</p>
                    </div>
                </div>





                {/* Left Side: Steps */}
                <div className="space-y-10">
                    {/* Step 1 */}
                    <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-green-200 p-3 rounded-full">
                                {/* Phone Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5h2a2 2 0 012 2v3a2 2 0 01-2 2H3m0 0v3a2 2 0 002 2h2m-4-7h4m6 7h6m-6-7h6m-6-7h6"
                                    />
                                </svg>
                            </div>
                            <div className="h-20 border-l-2 border-dashed border-gray-900 mt-2"></div>
                            <div className="h-full border-l-2 border-dashed border-gray-500 mt-2"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                Initiate a Strategy Session.
                            </h2>
                            <p className="mt-4 text-gray-900">
                                Engage with us in a consultative meeting to explore your business
                                goals. We&apos;ll craft a tailored approach, define key objectives,
                                establish timelines, and determine necessary resources.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-pink-200 p-3 rounded-full">
                                {/* Team Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-pink-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m8 0a4 4 0 00-8 0M12 4a4 4 0 110 8 4 4 0 010-8z"
                                    />
                                </svg>
                            </div>
                            <div className="h-16 border-l-2 border-dashed border-gray-900 mt-2"></div>
                            <div className="h-full border-l-2 border-dashed border-gray-500 mt-2"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Shape Your Dream Team.</h2>
                            <p className="mt-4 text-gray-900">
                                Quickly solidify your project&lsquo;s blueprints, decide on a collaborative
                                model, and seamlessly integrate our hand-picked experts with your
                                vision.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-purple-200 p-3 rounded-full">
                                {/* Arrow Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                            <div className="h-16 border-l-2 border-dashed border-gray-900 mt-2"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                Begin Your Journey with Optimism.
                            </h2>
                            <p className="mt-4 text-gray-900">
                                Agree on pivotal goals, and we’ll get the ball rolling. Expect
                                proactive communication and a focus on achieving milestones.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default StrategySection;
