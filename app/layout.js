import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <SocialSidebar />
        <div className="max-w-6xl mx-auto w-full relative bg-white min-h-screen flex flex-col">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
