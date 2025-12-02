
import { Palette, Smartphone, Laptop, ShoppingCart, Cloud, Settings, CreditCard } from 'lucide-react';

export const servicesData = {
    "ui-ux-design": {
        title: "UI/UX Design",
        icon: <Palette size={48} />,
        description: "Intuitive, engaging designs that turn first-time visitors into loyal customers.",
        details: "We believe that great design is not just about aesthetics; it's about solving problems and creating meaningful experiences. Our UI/UX design process is rooted in user-centric principles, ensuring that every interface we create is intuitive, accessible, and delightful to use. From initial user research and wireframing to high-fidelity prototyping and usability testing, we meticulously craft every detail to align with your brand identity and business goals.",
        techStack: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Adobe XD", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
            { name: "Sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
            { name: "InVision", icon: "https://cdn.worldvectorlogo.com/logos/invision.svg" }
        ],
        features: [
            "User Research & Persona Development",
            "Information Architecture & Wireframing",
            "Interactive Prototyping",
            "Visual Design Systems",
            "Usability Testing & Iteration"
        ]
    },
    "mobile-app-development": {
        title: "Mobile App Development",
        icon: <Smartphone size={48} />,
        description: "High-performance iOS and Android apps tailored to your business needs.",
        details: "In a mobile-first world, having a robust and engaging mobile app is essential. We specialize in developing high-performance native and cross-platform mobile applications that deliver seamless user experiences. Whether you need an iOS app for Apple users, an Android app for the global market, or a cross-platform solution using Flutter or React Native, our team has the expertise to bring your vision to life.",
        techStack: [
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
        ],
        features: [
            "Native iOS & Android Development",
            "Cross-Platform Development (Flutter/React Native)",
            "App Store Optimization (ASO)",
            "Maintenance & Support",
            "API Integration"
        ]
    },
    "software-development": {
        title: "Software Development",
        icon: <Laptop size={48} />,
        description: "Custom-built software solutions tailored to streamline your operations.",
        details: "Off-the-shelf software often falls short of meeting unique business requirements. Our custom software development services are designed to bridge that gap. We build scalable, secure, and high-performance software solutions that automate processes, improve efficiency, and drive business growth. From enterprise resource planning (ERP) systems to customer relationship management (CRM) tools, we engineer solutions that fit your specific needs.",
        techStack: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" }
        ],
        features: [
            "Custom Enterprise Software",
            "API Development & Integration",
            "Legacy System Modernization",
            "Database Design & Management",
            "Cloud-Based Solutions"
        ]
    },
    "ecommerce-solutions": {
        title: "eCommerce Solutions",
        icon: <ShoppingCart size={48} />,
        description: "Scalable online stores that drive sales and enhance customer experience.",
        details: "We help businesses establish a powerful online presence with our comprehensive eCommerce solutions. Whether you're a startup looking to launch your first store or an established brand seeking to scale, we build secure, user-friendly, and conversion-optimized eCommerce platforms. We work with leading platforms like Shopify, WooCommerce, and Magento, as well as build custom headless commerce solutions.",
        techStack: [
            { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
            { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
            { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
        ],
        features: [
            "Custom Store Design & Development",
            "Payment Gateway Integration",
            "Inventory Management Systems",
            "Shopping Cart Optimization",
            "Mobile Commerce"
        ]
    },
    "saas-development": {
        title: "SaaS Development",
        icon: <Cloud size={48} />,
        description: "Cloud-native solutions for modern businesses to scale effortlessly.",
        details: "The SaaS model is transforming how software is delivered and consumed. We specialize in building multi-tenant, cloud-native SaaS applications that are secure, scalable, and easy to maintain. Our team handles everything from architecture design and database management to subscription billing integration and user onboarding, ensuring your SaaS product is ready for the market.",
        techStack: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ],
        features: [
            "Multi-Tenant Architecture",
            "Subscription Billing Integration",
            "Cloud Infrastructure Setup",
            "API-First Design",
            "Scalability & Performance Optimization"
        ]
    },
    "devops-services": {
        title: "DevOps Services",
        icon: <Settings size={48} />,
        description: "Reliable, automated infrastructure for faster deployment and stability.",
        details: "Accelerate your software delivery lifecycle with our DevOps services. We implement CI/CD pipelines, automate infrastructure provisioning, and ensure continuous monitoring to improve collaboration between development and operations teams. Our goal is to help you release software faster, with higher quality and greater reliability.",
        techStack: [
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
            { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
            { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" }
        ],
        features: [
            "CI/CD Pipeline Implementation",
            "Infrastructure as Code (IaC)",
            "Cloud Migration & Management",
            "Security & Compliance",
            "Performance Monitoring"
        ]
    },
    "pos-solutions": {
        title: "POS Solutions",
        icon: <CreditCard size={48} />,
        description: "Streamline sales and inventory with our robust POS systems.",
        details: "Efficient point-of-sale (POS) systems are the backbone of retail and hospitality businesses. We develop custom POS solutions that integrate seamlessly with your inventory, accounting, and CRM systems. Our POS software is designed to be user-friendly, fast, and reliable, helping you manage sales, track stock, and analyze performance in real-time.",
        techStack: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" }
        ],
        features: [
            "Custom POS Software Development",
            "Inventory Tracking & Management",
            "Sales Reporting & Analytics",
            "Hardware Integration (Scanners, Printers)",
            "Multi-Store Support"
        ]
    }
};
