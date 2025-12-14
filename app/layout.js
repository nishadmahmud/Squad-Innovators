import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Faster font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Faster font loading
});

export const metadata = {
  title: {
    template: '%s | Squad Innovators',
    default: 'Squad Innovators | Custom Software Development Company',
  },
  description: "Squad Innovators is a leading software development company providing custom software, mobile apps, and web solutions to businesses worldwide.",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";
import TopBanner from "../components/TopBanner";
import OfferPopup from "../components/OfferPopup";
import MotionProvider from "../components/MotionProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white overflow-x-hidden`}
      >
        <MotionProvider>
          <OfferPopup />
          <TopBanner />
          <SocialSidebar />
          <div className="w-full lg:max-w-[1400px] mx-auto relative bg-white min-h-screen flex flex-col">
            <Navbar />
            {children}
          </div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
