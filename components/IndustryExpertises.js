import React from 'react';
import Image from 'next/image';

const IndustryExpertises = () => {
    return (
        <div className='mb-16 mt-4 bg-[#020b31] p-10'>
            <div>
                <h1 className='lg:text-4xl text-white md:text-3xl text-2xl font-semibold text-center'>Our Industry Expertises</h1>

                <p className='md:w-6/12 w-11/12 text-white text-center mx-auto mt-3'>Our deep understanding of diverse industries empowers us to design customized software solutions. Let our expertise be the catalyst for your next triumph</p>

            </div>

            <div className='w-10/12 mx-auto grid lg:grid-cols-6 md:grid-cols-5 grid-cols-2 mt-5 justify-center items-center justify-items-center gap-y-10 gap-x-20 lg:gap-x-0'>

                <div className='flex items-center flex-col bg-teal-300 w-40 h-24 justify-center text-white font-medium rounded-br-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/online-store.png" alt='logo' unoptimized></Image>
                    <h4>E-Commerce</h4>
                </div>

                <div className='flex items-center flex-col gap-1 bg-[#f4a361e0] w-40 h-24 justify-center text-white font-medium rounded-bl-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/pos.png" alt='logo' unoptimized></Image>
                    <h4>POS</h4>
                </div>

                <div className='flex items-center flex-col bg-[#4b849aa9] w-40 h-24 justify-center text-white font-medium rounded-bl-3xl'>
                    <Image className='lg:w-12 w-8' width={200} height={200} src="/needs.png" alt='logo' unoptimized></Image>
                    <h4>Lifestyle</h4>
                </div>

                <div className='flex items-center flex-col bg-[#b0c4b1] w-40 h-24 justify-center text-white font-medium rounded-bl-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/world-wide-web.png" alt='logo' unoptimized></Image>
                    <h4>Official Website</h4>
                </div>

                <div className='flex items-center flex-col bg-[#a98467d7] w-40 h-24 justify-center text-white font-medium rounded-br-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/logistics.png" alt='logo' unoptimized></Image>
                    <h4>Logistics</h4>
                </div>

                <div className='flex items-center flex-col bg-[#76b0b3] w-40 h-24 justify-center text-white font-medium rounded-bl-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/car-services.png" alt='logo' unoptimized></Image>
                    <h4>Automotive</h4>
                </div>



                {/* ========column 02======= */}

                <div className='flex items-center flex-col bg-[#f28482] w-40 h-24 justify-center text-white font-medium rounded-tr-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/fashion.png" alt='logo' unoptimized></Image>
                    <h4>Fashion & Apparel</h4>
                </div>

                <div className='flex items-center flex-col bg-[#84a59d] w-40 h-24 justify-center text-white font-medium rounded-tl-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/give-love.png" alt='logo' unoptimized></Image>
                    <h4>Non-Profit</h4>
                </div>


                <div className='flex items-center flex-col bg-[#9d8189] w-40 h-24 justify-center text-white font-medium rounded-br-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/artificial-intelligence.png" alt='logo' unoptimized></Image>
                    <h4>AI</h4>
                </div>

                <div className='flex items-center flex-col bg-[#c77dff] w-40 h-24 justify-center text-white font-medium rounded-br-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/pharmacy.png" alt='logo' unoptimized></Image>
                    <h4>Pharmacy</h4>
                </div>


                <div className='flex items-center flex-col bg-[#126650c8] w-40 h-24 justify-center text-white font-medium rounded-tr-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/fitness.png" alt='logo' unoptimized></Image>
                    <h4>Health & Fitness</h4>
                </div>

                <div className='flex items-center flex-col bg-[#0096dbce] w-40 h-24 justify-center text-white font-medium rounded-tl-3xl'>
                    <Image className='lg:w-10 w-8' width={200} height={200} src="/haircut.png" alt='logo' unoptimized></Image>
                    <h4>Saloon</h4>
                </div>

            </div>
        </div>
    );
};

export default IndustryExpertises;
