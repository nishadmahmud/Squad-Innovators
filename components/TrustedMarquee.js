import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const TrustedMarquee = () => {
    return (
        <div className='py-10 bg-white border-b border-gray-100'>
            <div className="container mx-auto px-4 mb-6 text-center">
                <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">Trusted by Industry Leaders</p>
            </div>
            <Marquee gradient={false} speed={40}>
                <div className="flex items-center gap-16 px-8">
                    <Image className='w-24 lg:w-32 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={128} height={128} alt='spronser_logo' src="/bodda.png" unoptimized></Image>
                    <Image className='w-28 lg:w-36 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={144} height={144} alt='spronser_logo' src="/apple_mart.png" unoptimized></Image>
                    <Image className='w-28 lg:w-36 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={144} height={144} alt='spronser_logo' src="/satsuna.png" unoptimized></Image>
                    <Image className='w-24 lg:w-32 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={128} height={128} alt='spronser_logo' src="/brothers.png" unoptimized></Image>
                    <Image className='w-20 lg:w-28 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={112} height={112} alt='spronser_logo' src="/bhai-bhai.png" unoptimized></Image>
                    <Image className='w-16 lg:w-20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={80} height={80} alt='spronser_logo' src="/dontaion.png" unoptimized></Image>
                    <Image className='w-20 lg:w-28 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={112} height={112} alt='spronser_logo' src="/bonzer.png" unoptimized></Image>
                    <Image className='w-20 lg:w-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={96} height={96} alt='spronser_logo' src="/apPharma.png" unoptimized></Image>
                    <Image className='w-20 lg:w-28 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={112} height={112} alt='spronser_logo' src="/corporate-care.png" unoptimized></Image>
                    <Image className='w-16 lg:w-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={96} height={96} alt='spronser_logo' src="/dlm.png" unoptimized></Image>
                    <Image className='w-24 lg:w-32 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={128} height={128} alt='spronser_logo' src="/mobile_club.png" unoptimized></Image>
                    <Image className='w-12 lg:w-20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' width={80} height={80} alt='spronser_logo' src="/PerfectGadgetBD-logo (1) 1.png" unoptimized></Image>
                </div>
            </Marquee>
        </div>
    );
};

export default TrustedMarquee;
