import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const SocialSidebar = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5 z-10" />,
            href: "https://www.linkedin.com/company/squad-innovators",
            color: "bg-[#0077b5]"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-5 h-5 z-10" />,
            href: "https://www.facebook.com/p/Squad-Innovators-61551666554830/",
            color: "bg-[#1877f2]"
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-5 h-5 z-10" />,
            href: "https://www.instagram.com/squadinnovators/",
            color: "bg-[#e4405f]"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className="w-5 h-5 z-10" />,
            href: "https://wa.me/+8801886182084",
            color: "bg-[#25D366]"
        }
    ];

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
            {socialLinks.map((link, index) => (
                <div key={index} className="relative">
                    <Link
                        href={link.href}
                        target="_blank"
                        className="relative flex items-center justify-center w-12 h-12 bg-primary text-white rounded-r-lg shadow-md hover:bg-secondary transition-all duration-300 group"
                    >
                        {link.icon}
                        <span className={`absolute left-0 top-0 h-full ${link.color} text-white flex items-center pl-14 pr-4 rounded-r-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10 whitespace-nowrap shadow-md`}>
                            {link.name}
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SocialSidebar;
