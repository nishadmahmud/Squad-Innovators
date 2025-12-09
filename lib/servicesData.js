import { Palette, Smartphone, Laptop, ShoppingCart, Cloud, Settings, CreditCard, Zap, Shield, Users, Target, TrendingUp, Award, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';

export const servicesData = {
    "ui-ux-design": {
        title: "UI/UX Design",
        icon: <Palette size={48} />,
        description: "Intuitive, engaging designs that turn first-time visitors into loyal customers.",
        overview: "We believe that great design is not just about aesthetics; it's about solving problems and creating meaningful experiences. Our UI/UX design process is rooted in user-centric principles, ensuring that every interface we create is intuitive, accessible, and delightful to use. From initial user research and wireframing to high-fidelity prototyping and usability testing, we meticulously craft every detail to align with your brand identity and business goals.",

        keyFeatures: [
            { icon: <Users size={32} />, title: "User Research & Analysis", description: "Deep dive into user behavior, needs, and pain points through interviews, surveys, and analytics to inform design decisions." },
            { icon: <Layers size={32} />, title: "Information Architecture", description: "Strategic organization of content and features to create intuitive navigation and seamless user flows." },
            { icon: <Sparkles size={32} />, title: "Interactive Prototyping", description: "High-fidelity, clickable prototypes that bring your vision to life before development begins." },
            { icon: <Palette size={32} />, title: "Visual Design Systems", description: "Comprehensive design systems with reusable components, ensuring consistency across all touchpoints." },
            { icon: <Target size={32} />, title: "Usability Testing", description: "Rigorous testing with real users to validate designs and identify areas for improvement." },
            { icon: <TrendingUp size={32} />, title: "Conversion Optimization", description: "Data-driven design strategies focused on maximizing user engagement and conversion rates." }
        ],

        process: [
            { step: 1, title: "Discovery & Research", description: "We start by understanding your business goals, target audience, and competitive landscape through stakeholder interviews and user research." },
            { step: 2, title: "Wireframing & IA", description: "Create low-fidelity wireframes and information architecture to establish the foundation of your product's structure." },
            { step: 3, title: "Visual Design", description: "Develop high-fidelity mockups with your brand colors, typography, and visual elements that resonate with your audience." },
            { step: 4, title: "Prototyping & Testing", description: "Build interactive prototypes and conduct usability testing to refine the experience before development." }
        ],

        benefits: [
            { title: "Increased User Engagement", description: "Intuitive designs keep users engaged longer, reducing bounce rates and increasing time on site." },
            { title: "Higher Conversion Rates", description: "Optimized user flows and clear CTAs drive more conversions and revenue for your business." },
            { title: "Reduced Development Costs", description: "Thorough design validation before development minimizes costly revisions and rework." },
            { title: "Brand Consistency", description: "Comprehensive design systems ensure consistent experiences across all platforms and touchpoints." }
        ],

        caseStudies: [
            { id: 10, title: "EmusFashion", image: "/EmusFashion.png", description: "Modern fashion e‑commerce with curated categories and streamlined checkout", technologies: ["Next.js", "Tailwind", "Framer Motion"], liveLink: "https://emusfashion.com/" },
            { id: 11, title: "Brothers Mobile & Accessories", image: "/Brothers Mobile & Accessories.png", description: "Retail experience for smartphones with clear product taxonomy and mobile‑first performance", technologies: ["Next.js", "Tailwind", "SWR"], liveLink: "https://www.brothersmobilebd.com/" },
            { id: 19, title: "EmusCreation", image: "/EmusCreation.png", description: "Creative studio portfolio showcasing video editing, branding, and visual storytelling", technologies: ["Next.js", "Tailwind", "Framer Motion"], liveLink: "https://www.emuscreation.com/" }
        ],

        packages: [
            { name: "Starter", price: "$2,500", duration: "2-3 weeks", features: ["5-10 screens", "Basic wireframes", "Visual mockups", "1 revision round", "Design handoff"], recommended: false },
            { name: "Professional", price: "$5,000", duration: "4-6 weeks", features: ["15-25 screens", "User research", "Interactive prototypes", "Design system", "3 revision rounds", "Usability testing"], recommended: true },
            { name: "Enterprise", price: "Custom", duration: "8-12 weeks", features: ["Unlimited screens", "Comprehensive research", "Advanced prototyping", "Full design system", "Unlimited revisions", "Ongoing support"], recommended: false }
        ],

        faqs: [
            { question: "What's the difference between UI and UX design?", answer: "UI (User Interface) design focuses on the visual elements and aesthetics of a product, while UX (User Experience) design encompasses the entire user journey, including research, information architecture, and usability. We provide both as an integrated service." },
            { question: "How long does a typical UI/UX project take?", answer: "Project timelines vary based on scope and complexity. A simple website redesign might take 2-4 weeks, while a complex web application could require 8-12 weeks or more. We'll provide a detailed timeline during our discovery phase." },
            { question: "Do you provide design files after the project?", answer: "Yes! You'll receive all source files in Figma, Adobe XD, or Sketch format, along with exported assets, style guides, and comprehensive documentation for your development team." },
            { question: "Can you work with our existing brand guidelines?", answer: "Absolutely! We can work within your established brand guidelines or help you create new ones. Our designs will always align with your brand identity and values." },
            { question: "Do you conduct user testing?", answer: "Yes, usability testing is a crucial part of our process. We conduct testing with real users to validate design decisions and identify areas for improvement before development begins." },
            { question: "What if we need changes after the design is complete?", answer: "We include revision rounds in all our packages. For changes after project completion, we offer ongoing support and maintenance packages to keep your designs fresh and effective." }
        ],

        testimonials: [
            { name: "Sarah Johnson", role: "CEO, EmusFashion", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "Squad Innovators transformed our vision into a stunning, user-friendly e-commerce platform. Our conversion rates increased by 45% within the first month!" },
            { name: "Michael Chen", role: "Product Manager, TechCorp", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "The attention to detail and user-centric approach was impressive. They delivered designs that not only looked great but also solved real user problems." },
            { name: "Priya Sharma", role: "Founder, Creative Studio", image: "https://randomuser.me/api/portraits/women/68.jpg", text: "Working with Squad Innovators was a game-changer. Their design system has made it so much easier to maintain consistency across our entire product line." }
        ],

        techStack: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Adobe XD", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
            { name: "Sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
            { name: "InVision", icon: "https://cdn.worldvectorlogo.com/logos/invision.svg" }
        ],

        // Legacy field for backward compatibility
        features: [
            "User Research & Persona Development",
            "Information Architecture & Wireframing",
            "Interactive Prototyping",
            "Visual Design Systems",
            "Usability Testing & Iteration"
        ],
        details: "We believe that great design is not just about aesthetics; it's about solving problems and creating meaningful experiences."
    },
    "mobile-app-development": {
        title: "Mobile App Development",
        icon: <Smartphone size={48} />,
        description: "High-performance iOS and Android apps tailored to your business needs.",
        overview: "In a mobile-first world, having a robust and engaging mobile app is essential. We specialize in developing high-performance native and cross-platform mobile applications that deliver seamless user experiences. Whether you need an iOS app for Apple users, an Android app for the global market, or a cross-platform solution using Flutter or React Native, our team has the expertise to bring your vision to life.",

        keyFeatures: [
            { icon: <Smartphone size={32} />, title: "Native Development", description: "Build powerful iOS and Android apps using Swift, Kotlin, and platform-specific features for optimal performance." },
            { icon: <Code size={32} />, title: "Cross-Platform Solutions", description: "Develop once, deploy everywhere with Flutter and React Native for cost-effective multi-platform apps." },
            { icon: <Zap size={32} />, title: "Performance Optimization", description: "Lightning-fast apps with smooth animations, efficient memory usage, and minimal battery consumption." },
            { icon: <Shield size={32} />, title: "Security First", description: "Implement robust security measures including encryption, secure authentication, and data protection." },
            { icon: <Cloud size={32} />, title: "API Integration", description: "Seamless integration with third-party services, payment gateways, and backend systems." },
            { icon: <TrendingUp size={32} />, title: "App Store Optimization", description: "Expert guidance on app store submission, optimization, and ongoing updates." }
        ],

        process: [
            { step: 1, title: "Strategy & Planning", description: "Define app objectives, target audience, feature set, and technical architecture for your mobile solution." },
            { step: 2, title: "Design & Prototyping", description: "Create intuitive UI/UX designs following platform guidelines (iOS Human Interface, Material Design)." },
            { step: 3, title: "Development & Testing", description: "Build your app with clean code, conduct rigorous testing across devices, and ensure quality." },
            { step: 4, title: "Launch & Support", description: "Deploy to App Store and Google Play, monitor performance, and provide ongoing maintenance." }
        ],

        benefits: [
            { title: "Reach Mobile Users", description: "Tap into the billions of smartphone users worldwide with a dedicated mobile presence." },
            { title: "Enhanced Engagement", description: "Push notifications, offline access, and native features drive higher user engagement." },
            { title: "Revenue Growth", description: "In-app purchases, subscriptions, and mobile commerce unlock new revenue streams." },
            { title: "Brand Loyalty", description: "A well-crafted app keeps your brand in users' pockets, building lasting relationships." }
        ],

        caseStudies: [
            { id: 1, title: "Gadget Bodda", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png", description: "Full-stack e-commerce mobile solution with payment integration and admin dashboard", technologies: ["Next.js", "React", "Laravel", "Php"], liveLink: "https://www.gadgetboddaa.com/" },
            { id: 2, title: "Mobile Club", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409274.png", description: "Mobile commerce platform for used iPhones and gadget accessories", technologies: ["Next.js", "Firebase", "Gsap"], liveLink: "https://www.mobileclub.co/" },
            { id: 13, title: "Outlet Expense", image: "/Outlet Expense.png", description: "SaaS platform for expense tracking with mobile-first dashboards", technologies: ["Next.js", "API Integration", "Tailwind"], liveLink: "https://outletexpense.com/" }
        ],

        packages: [
            { name: "MVP", price: "$15,000", duration: "8-12 weeks", features: ["Single platform (iOS or Android)", "Core features only", "Basic UI/UX", "App store submission", "3 months support"], recommended: false },
            { name: "Professional", price: "$30,000", duration: "12-16 weeks", features: ["iOS + Android", "Full feature set", "Custom UI/UX", "API integration", "Push notifications", "6 months support"], recommended: true },
            { name: "Enterprise", price: "Custom", duration: "16-24 weeks", features: ["Native + Web app", "Advanced features", "Premium design", "Backend development", "Analytics integration", "12 months support"], recommended: false }
        ],

        faqs: [
            { question: "Should I build a native or cross-platform app?", answer: "It depends on your requirements. Native apps (Swift/Kotlin) offer best performance and platform-specific features, while cross-platform (Flutter/React Native) is more cost-effective for simpler apps. We'll recommend the best approach based on your needs." },
            { question: "How much does mobile app development cost?", answer: "Costs vary widely based on complexity, features, and platforms. A simple app might start at $15,000, while complex enterprise apps can exceed $100,000. We provide detailed quotes after understanding your requirements." },
            { question: "How long does it take to develop a mobile app?", answer: "Timeline depends on complexity. An MVP can take 8-12 weeks, while a full-featured app might require 16-24 weeks. We provide realistic timelines during planning." },
            { question: "Do you help with app store submission?", answer: "Yes! We handle the entire submission process for both Apple App Store and Google Play Store, including preparing assets, writing descriptions, and managing approvals." },
            { question: "What happens after the app is launched?", answer: "We provide ongoing support, bug fixes, and updates. We also offer maintenance packages to keep your app compatible with new OS versions and devices." },
            { question: "Can you integrate with our existing backend?", answer: "Absolutely! We have extensive experience integrating mobile apps with various backends, APIs, and third-party services." }
        ],

        testimonials: [
            { name: "Ahmed Rahman", role: "Founder, Gadget Bodda", image: "https://randomuser.me/api/portraits/men/75.jpg", text: "Squad Innovators built us a robust e-commerce app that handles thousands of transactions daily. The performance is outstanding!" },
            { name: "Lisa Wong", role: "CTO, Mobile Club", image: "https://randomuser.me/api/portraits/women/85.jpg", text: "Their expertise in mobile development is unmatched. They delivered a beautiful, fast app that our customers love." },
            { name: "David Kim", role: "CEO, TechStart", image: "https://randomuser.me/api/portraits/men/22.jpg", text: "From concept to launch, Squad Innovators guided us every step of the way. Our app now has over 50,000 active users!" }
        ],

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
        ],
        details: "In a mobile-first world, having a robust and engaging mobile app is essential."
    },
    "software-development": {
        title: "Software Development",
        icon: <Laptop size={48} />,
        description: "Custom-built software solutions tailored to streamline your operations.",
        overview: "Off-the-shelf software often falls short of meeting unique business requirements. Our custom software development services are designed to bridge that gap. We build scalable, secure, and high-performance software solutions that automate processes, improve efficiency, and drive business growth. From enterprise resource planning (ERP) systems to customer relationship management (CRM) tools, we engineer solutions that fit your specific needs.",

        keyFeatures: [
            { icon: <Laptop size={32} />, title: "Custom Enterprise Solutions", description: "Tailored software built specifically for your business processes, workflows, and requirements." },
            { icon: <Code size={32} />, title: "API Development", description: "Robust RESTful and GraphQL APIs for seamless integration with third-party services and systems." },
            { icon: <Shield size={32} />, title: "Legacy Modernization", description: "Transform outdated systems into modern, cloud-ready applications without disrupting operations." },
            { icon: <Layers size={32} />, title: "Database Architecture", description: "Scalable database design and optimization for handling large volumes of data efficiently." },
            { icon: <Cloud size={32} />, title: "Cloud-Native Development", description: "Build applications designed for cloud platforms with microservices architecture." },
            { icon: <Award size={32} />, title: "Quality Assurance", description: "Comprehensive testing strategies ensuring bug-free, reliable software delivery." }
        ],

        process: [
            { step: 1, title: "Requirements Analysis", description: "Deep dive into your business processes to understand pain points and define clear software requirements." },
            { step: 2, title: "Architecture Design", description: "Design scalable system architecture, database schema, and technology stack selection." },
            { step: 3, title: "Agile Development", description: "Iterative development with regular sprints, code reviews, and continuous integration." },
            { step: 4, title: "Deployment & Training", description: "Smooth deployment to production with comprehensive user training and documentation." }
        ],

        benefits: [
            { title: "Process Automation", description: "Automate repetitive tasks and workflows, freeing up your team for strategic work." },
            { title: "Scalability", description: "Software that grows with your business, handling increased load and new features seamlessly." },
            { title: "Competitive Advantage", description: "Custom solutions give you capabilities competitors using off-the-shelf software don't have." },
            { title: "Data-Driven Insights", description: "Built-in analytics and reporting provide actionable insights for better decision-making." }
        ],

        caseStudies: [
            { id: 13, title: "Outlet Expense", image: "/Outlet Expense.png", description: "SaaS platform for expense tracking with dashboards and role-based access", technologies: ["Next.js", "API Integration", "Tailwind"], liveLink: "https://outletexpense.com/" },
            { id: 3, title: "Satsuna Corporation", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409303.jpg", description: "Japanese blog platform with content management and API integration", technologies: ["Next.js", "API Integration", "React"], liveLink: "https://www.satsuna.co.jp" },
            { id: 19, title: "EmusCreation", image: "/EmusCreation.png", description: "Creative studio platform with portfolio management and client workflows", technologies: ["Next.js", "Tailwind", "Framer Motion"], liveLink: "https://www.emuscreation.com/" }
        ],

        packages: [
            { name: "Starter", price: "$10,000", duration: "6-8 weeks", features: ["Basic CRUD application", "Single database", "User authentication", "Admin panel", "3 months support"], recommended: false },
            { name: "Business", price: "$25,000", duration: "10-14 weeks", features: ["Complex business logic", "Multiple integrations", "Advanced features", "Role-based access", "API development", "6 months support"], recommended: true },
            { name: "Enterprise", price: "Custom", duration: "16+ weeks", features: ["Full enterprise system", "Microservices architecture", "Third-party integrations", "Advanced security", "Scalable infrastructure", "12 months support"], recommended: false }
        ],

        faqs: [
            { question: "What's the difference between custom and off-the-shelf software?", answer: "Custom software is built specifically for your business needs and processes, while off-the-shelf software is a one-size-fits-all solution. Custom software offers better fit, scalability, and competitive advantage but requires higher initial investment." },
            { question: "How long does custom software development take?", answer: "Timeline varies based on complexity. Simple applications take 6-8 weeks, while complex enterprise systems can take 6-12 months or more. We use agile methodology to deliver working software incrementally." },
            { question: "Do you provide ongoing maintenance and support?", answer: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, feature enhancements, and technical support to keep your software running smoothly." },
            { question: "Can you integrate with our existing systems?", answer: "Absolutely! We specialize in system integration and can connect your new software with existing databases, CRMs, ERPs, and third-party services through APIs." },
            { question: "What if our requirements change during development?", answer: "We use agile methodology which embraces change. We work in sprints with regular reviews, allowing you to adjust requirements as your understanding evolves." },
            { question: "Who owns the source code?", answer: "You do! Upon project completion and final payment, you receive full ownership of all source code, documentation, and intellectual property." }
        ],

        testimonials: [
            { name: "Robert Martinez", role: "Operations Director, LogisticsCo", image: "https://randomuser.me/api/portraits/men/46.jpg", text: "Squad Innovators built us a custom warehouse management system that reduced our processing time by 60%. Game-changing!" },
            { name: "Emily Zhang", role: "CEO, FinTech Solutions", image: "https://randomuser.me/api/portraits/women/32.jpg", text: "Their technical expertise and attention to our business needs resulted in software that perfectly fits our workflow." },
            { name: "James Wilson", role: "CTO, HealthTech", image: "https://randomuser.me/api/portraits/men/55.jpg", text: "From legacy system modernization to new feature development, Squad Innovators has been our trusted technology partner." }
        ],

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
        ],
        details: "Off-the-shelf software often falls short of meeting unique business requirements."
    },
    "ecommerce-solutions": {
        title: "eCommerce Solutions",
        icon: <ShoppingCart size={48} />,
        description: "Scalable online stores that drive sales and enhance customer experience.",
        overview: "We help businesses establish a powerful online presence with our comprehensive eCommerce solutions. Whether you're a startup looking to launch your first store or an established brand seeking to scale, we build secure, user-friendly, and conversion-optimized eCommerce platforms. We work with leading platforms like Shopify, WooCommerce, and Magento, as well as build custom headless commerce solutions.",

        keyFeatures: [
            { icon: <ShoppingCart size={32} />, title: "Custom Store Development", description: "Tailored eCommerce platforms built to match your brand and business requirements perfectly." },
            { icon: <CreditCard size={32} />, title: "Payment Integration", description: "Secure integration with multiple payment gateways including Stripe, PayPal, and local processors." },
            { icon: <Layers size={32} />, title: "Inventory Management", description: "Real-time inventory tracking, automated stock alerts, and multi-warehouse support." },
            { icon: <TrendingUp size={32} />, title: "Conversion Optimization", description: "Data-driven UX improvements, A/B testing, and checkout optimization to maximize sales." },
            { icon: <Smartphone size={32} />, title: "Mobile Commerce", description: "Responsive designs and progressive web apps for seamless mobile shopping experiences." },
            { icon: <Shield size={32} />, title: "Security & Compliance", description: "PCI-DSS compliance, SSL encryption, and robust security measures to protect customer data." }
        ],

        process: [
            { step: 1, title: "Store Planning", description: "Define product catalog, payment methods, shipping options, and customer journey mapping." },
            { step: 2, title: "Design & Development", description: "Create stunning storefront designs and build robust backend systems for order management." },
            { step: 3, title: "Integration & Testing", description: "Integrate payment gateways, shipping providers, and conduct thorough testing across devices." },
            { step: 4, title: "Launch & Optimize", description: "Deploy your store, monitor performance, and continuously optimize for better conversions." }
        ],

        benefits: [
            { title: "24/7 Sales Channel", description: "Your store never closes, generating revenue around the clock from customers worldwide." },
            { title: "Lower Operating Costs", description: "Reduce overhead compared to physical stores while reaching a global audience." },
            { title: "Customer Insights", description: "Detailed analytics on customer behavior, preferences, and purchasing patterns." },
            { title: "Easy Scalability", description: "Grow from hundreds to millions of products without infrastructure limitations." }
        ],

        caseStudies: [
            { id: 1, title: "Gadget Bodda", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png", description: "Full-stack e-commerce with payment integration and admin dashboard", technologies: ["Next.js", "React", "Laravel", "Php"], liveLink: "https://www.gadgetboddaa.com/" },
            { id: 10, title: "EmusFashion", image: "/EmusFashion.png", description: "Modern fashion e-commerce with curated categories and streamlined checkout", technologies: ["Next.js", "Tailwind", "Framer Motion"], liveLink: "https://emusfashion.com/" },
            { id: 14, title: "Apple Daddy", image: "/Apple Daddy.png", description: "Apple-focused retailer with product comparisons and EMI details", technologies: ["Next.js", "Tailwind", "SWR"], liveLink: "https://www.appledaddybd.com/" }
        ],

        packages: [
            { name: "Starter Store", price: "$5,000", duration: "4-6 weeks", features: ["Up to 100 products", "Basic theme customization", "Payment gateway", "Mobile responsive", "3 months support"], recommended: false },
            { name: "Professional Store", price: "$12,000", duration: "6-10 weeks", features: ["Unlimited products", "Custom design", "Multiple payment gateways", "Inventory management", "SEO optimization", "6 months support"], recommended: true },
            { name: "Enterprise Store", price: "Custom", duration: "12+ weeks", features: ["Headless commerce", "Multi-vendor marketplace", "Advanced integrations", "Custom features", "Dedicated support", "12 months support"], recommended: false }
        ],

        faqs: [
            { question: "Which eCommerce platform should I choose?", answer: "It depends on your needs. Shopify is great for quick launches and ease of use, WooCommerce offers flexibility with WordPress, Magento suits large enterprises, and custom headless solutions provide maximum control. We'll recommend the best fit based on your requirements." },
            { question: "How long does it take to launch an online store?", answer: "A basic store can launch in 4-6 weeks, while complex custom solutions may take 12+ weeks. Timeline depends on product catalog size, custom features, and integrations needed." },
            { question: "Do you handle payment gateway integration?", answer: "Yes! We integrate all major payment gateways including Stripe, PayPal, Square, and regional processors. We ensure PCI-DSS compliance and secure payment processing." },
            { question: "Can you migrate my existing store to a new platform?", answer: "Absolutely! We specialize in eCommerce migrations, transferring products, customers, orders, and SEO rankings with minimal downtime." },
            { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer maintenance packages including security updates, bug fixes, feature additions, and performance optimization to keep your store running smoothly." },
            { question: "How do you optimize for conversions?", answer: "We implement proven strategies including fast loading times, simplified checkout, trust signals, product recommendations, abandoned cart recovery, and A/B testing." }
        ],

        testimonials: [
            { name: "Sophia Rahman", role: "Owner, EmusFashion", image: "https://randomuser.me/api/portraits/women/28.jpg", text: "Our online sales tripled after Squad Innovators redesigned our store. The checkout process is now seamless!" },
            { name: "Marcus Thompson", role: "CEO, Gadget Bodda", image: "https://randomuser.me/api/portraits/men/18.jpg", text: "They built us a robust eCommerce platform that handles thousands of daily orders without any issues. Highly recommended!" },
            { name: "Nina Patel", role: "Founder, Fashion Hub", image: "https://randomuser.me/api/portraits/women/42.jpg", text: "The team's expertise in eCommerce is exceptional. They understood our business and delivered exactly what we needed." }
        ],

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
        ],
        details: "We help businesses establish a powerful online presence with our comprehensive eCommerce solutions."
    },
    "saas-development": {
        title: "SaaS Development",
        icon: <Cloud size={48} />,
        description: "Cloud-native solutions for modern businesses to scale effortlessly.",
        overview: "The SaaS model is transforming how software is delivered and consumed. We specialize in building multi-tenant, cloud-native SaaS applications that are secure, scalable, and easy to maintain. Our team handles everything from architecture design and database management to subscription billing integration and user onboarding, ensuring your SaaS product is ready for the market.",

        keyFeatures: [
            { icon: <Cloud size={32} />, title: "Multi-Tenant Architecture", description: "Scalable SaaS architecture supporting thousands of customers on shared infrastructure." },
            { icon: <CreditCard size={32} />, title: "Subscription Billing", description: "Integrated billing systems with Stripe, PayPal, and automated invoice generation." },
            { icon: <Shield size={32} />, title: "Enterprise Security", description: "Role-based access control, data encryption, and compliance with SOC 2, GDPR." },
            { icon: <Zap size={32} />, title: "API-First Design", description: "RESTful APIs and webhooks for seamless third-party integrations." },
            { icon: <TrendingUp size={32} />, title: "Analytics Dashboard", description: "Real-time metrics, user analytics, and business intelligence reporting." },
            { icon: <Settings size={32} />, title: "Auto-Scaling", description: "Cloud infrastructure that automatically scales based on demand." }
        ],

        process: [
            { step: 1, title: "Product Strategy", description: "Define SaaS model, pricing tiers, target market, and core feature set." },
            { step: 2, title: "Architecture & Design", description: "Design multi-tenant architecture, database schema, and subscription logic." },
            { step: 3, title: "Development & Integration", description: "Build core platform, integrate billing, and implement security measures." },
            { step: 4, title: "Launch & Scale", description: "Deploy to cloud, onboard first customers, and optimize based on feedback." }
        ],

        benefits: [
            { title: "Recurring Revenue", description: "Subscription model provides predictable, recurring revenue streams." },
            { title: "Global Reach", description: "Cloud-based delivery allows you to serve customers worldwide instantly." },
            { title: "Lower Customer Acquisition Cost", description: "Self-service onboarding and automated processes reduce CAC." },
            { title: "Continuous Improvement", description: "Regular updates and new features keep customers engaged and reduce churn." }
        ],

        caseStudies: [
            { id: 13, title: "Outlet Expense", image: "/Outlet Expense.png", description: "SaaS platform for expense tracking with dashboards and role-based access", technologies: ["Next.js", "API Integration", "Tailwind"], liveLink: "https://outletexpense.com/" }
        ],

        packages: [
            { name: "MVP Launch", price: "$35,000", duration: "12-16 weeks", features: ["Core SaaS features", "Basic billing", "Single pricing tier", "Cloud deployment", "6 months support"], recommended: false },
            { name: "Professional SaaS", price: "$60,000", duration: "16-24 weeks", features: ["Full feature set", "Multiple pricing tiers", "Advanced billing", "Analytics dashboard", "API access", "12 months support"], recommended: true },
            { name: "Enterprise SaaS", price: "Custom", duration: "24+ weeks", features: ["White-label option", "Advanced integrations", "Custom features", "Dedicated infrastructure", "Priority support", "Ongoing development"], recommended: false }
        ],

        faqs: [
            { question: "What is multi-tenant architecture?", answer: "Multi-tenant architecture allows multiple customers (tenants) to use the same application instance while keeping their data completely isolated and secure. This approach is more cost-effective and easier to maintain than single-tenant systems." },
            { question: "How do you handle subscription billing?", answer: "We integrate with platforms like Stripe and PayPal to handle recurring billing, invoicing, payment failures, upgrades/downgrades, and cancellations automatically." },
            { question: "Can you build a white-label SaaS solution?", answer: "Yes! We can build SaaS platforms that allow your customers to rebrand and resell the software under their own name." },
            { question: "How do you ensure data security in SaaS?", answer: "We implement encryption at rest and in transit, role-based access control, regular security audits, and compliance with standards like SOC 2 and GDPR." },
            { question: "What's the typical time to market for a SaaS product?", answer: "An MVP can launch in 12-16 weeks, while a full-featured SaaS platform typically takes 6-12 months depending on complexity." },
            { question: "Do you provide ongoing support after launch?", answer: "Yes, we offer comprehensive support packages including bug fixes, feature additions, infrastructure management, and scaling assistance." }
        ],

        testimonials: [
            { name: "Alex Johnson", role: "Founder, CloudMetrics", image: "https://randomuser.me/api/portraits/men/65.jpg", text: "Squad Innovators built our SaaS platform from scratch. We now serve over 1,000 paying customers with zero downtime!" },
            { name: "Rachel Green", role: "CEO, DataFlow", image: "https://randomuser.me/api/portraits/women/55.jpg", text: "Their expertise in multi-tenant architecture and billing integration saved us months of development time." },
            { name: "Tom Anderson", role: "CTO, AutomateHub", image: "https://randomuser.me/api/portraits/men/38.jpg", text: "From MVP to enterprise-grade SaaS, they've been with us every step of the way. Exceptional team!" }
        ],

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
        ],
        details: "The SaaS model is transforming how software is delivered and consumed."
    },
    "devops-services": {
        title: "DevOps Services",
        icon: <Settings size={48} />,
        description: "Reliable, automated infrastructure for faster deployment and stability.",
        overview: "Accelerate your software delivery lifecycle with our DevOps services. We implement CI/CD pipelines, automate infrastructure provisioning, and ensure continuous monitoring to improve collaboration between development and operations teams. Our goal is to help you release software faster, with higher quality and greater reliability.",

        keyFeatures: [
            { icon: <Zap size={32} />, title: "CI/CD Pipelines", description: "Automated build, test, and deployment pipelines for faster, reliable releases." },
            { icon: <Cloud size={32} />, title: "Infrastructure as Code", description: "Terraform and Ansible for version-controlled, reproducible infrastructure." },
            { icon: <Shield size={32} />, title: "Security & Compliance", description: "Automated security scanning, vulnerability management, and compliance monitoring." },
            { icon: <TrendingUp size={32} />, title: "Monitoring & Alerts", description: "24/7 monitoring with Prometheus, Grafana, and intelligent alerting systems." },
            { icon: <Settings size={32} />, title: "Container Orchestration", description: "Docker and Kubernetes for scalable, resilient application deployment." },
            { icon: <Award size={32} />, title: "Performance Optimization", description: "Load balancing, caching strategies, and database optimization for peak performance." }
        ],

        process: [
            { step: 1, title: "Assessment & Planning", description: "Evaluate current infrastructure, identify bottlenecks, and plan DevOps transformation." },
            { step: 2, title: "Pipeline Setup", description: "Implement CI/CD pipelines, automated testing, and deployment workflows." },
            { step: 3, title: "Infrastructure Automation", description: "Set up IaC, container orchestration, and cloud resource management." },
            { step: 4, title: "Monitor & Optimize", description: "Deploy monitoring tools, set up alerts, and continuously optimize performance." }
        ],

        benefits: [
            { title: "Faster Time to Market", description: "Automated pipelines reduce deployment time from days to minutes." },
            { title: "Improved Reliability", description: "Automated testing and monitoring catch issues before they reach production." },
            { title: "Cost Optimization", description: "Right-sized infrastructure and auto-scaling reduce cloud costs significantly." },
            { title: "Better Collaboration", description: "DevOps culture breaks down silos between development and operations teams." }
        ],

        caseStudies: [
            { id: 13, title: "Outlet Expense", image: "/Outlet Expense.png", description: "Automated deployment pipeline with monitoring and auto-scaling", technologies: ["Next.js", "API Integration", "Tailwind"], liveLink: "https://outletexpense.com/" },
            { id: 1, title: "Gadget Bodda", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png", description: "CI/CD implementation for high-traffic eCommerce platform", technologies: ["Next.js", "React", "Laravel", "Php"], liveLink: "https://www.gadgetboddaa.com/" }
        ],

        packages: [
            { name: "Starter DevOps", price: "$8,000", duration: "4-6 weeks", features: ["Basic CI/CD pipeline", "Cloud deployment", "Monitoring setup", "Documentation", "3 months support"], recommended: false },
            { name: "Professional DevOps", price: "$18,000", duration: "6-10 weeks", features: ["Advanced CI/CD", "Infrastructure as Code", "Container orchestration", "Security scanning", "Performance monitoring", "6 months support"], recommended: true },
            { name: "Enterprise DevOps", price: "Custom", duration: "12+ weeks", features: ["Full DevOps transformation", "Multi-cloud setup", "Advanced security", "Disaster recovery", "24/7 monitoring", "Ongoing support"], recommended: false }
        ],

        faqs: [
            { question: "What is DevOps and why do I need it?", answer: "DevOps is a set of practices that combines software development and IT operations to shorten development cycles and deliver features faster. It improves collaboration, reliability, and deployment frequency." },
            { question: "How long does DevOps implementation take?", answer: "Basic CI/CD setup can be done in 4-6 weeks, while comprehensive DevOps transformation may take 3-6 months depending on your current infrastructure." },
            { question: "Which cloud platforms do you support?", answer: "We work with all major cloud providers including AWS, Google Cloud, Azure, and DigitalOcean. We'll recommend the best fit for your needs." },
            { question: "Can you help with cloud migration?", answer: "Yes! We specialize in cloud migrations, helping you move from on-premises to cloud or between cloud providers with minimal downtime." },
            { question: "Do you provide 24/7 monitoring?", answer: "Yes, we set up comprehensive monitoring and alerting systems, and offer managed services with 24/7 support for critical applications." },
            { question: "How do you ensure security in DevOps?", answer: "We implement DevSecOps practices including automated security scanning, vulnerability management, secrets management, and compliance monitoring throughout the pipeline." }
        ],

        testimonials: [
            { name: "Kevin Brown", role: "VP Engineering, TechScale", image: "https://randomuser.me/api/portraits/men/42.jpg", text: "Our deployment frequency increased 10x after Squad Innovators implemented our CI/CD pipeline. Incredible results!" },
            { name: "Laura Martinez", role: "CTO, StartupFast", image: "https://randomuser.me/api/portraits/women/65.jpg", text: "They transformed our infrastructure from manual deployments to fully automated DevOps. Game changer for our team!" },
            { name: "Daniel Lee", role: "DevOps Lead, CloudCorp", image: "https://randomuser.me/api/portraits/men/28.jpg", text: "Professional, knowledgeable, and results-driven. Our infrastructure has never been more reliable." }
        ],

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
        ],
        details: "Accelerate your software delivery lifecycle with our DevOps services."
    },
    "pos-solutions": {
        title: "POS Solutions",
        icon: <CreditCard size={48} />,
        description: "Streamline sales and inventory with our robust POS systems.",
        overview: "Efficient point-of-sale (POS) systems are the backbone of retail and hospitality businesses. We develop custom POS solutions that integrate seamlessly with your inventory, accounting, and CRM systems. Our POS software is designed to be user-friendly, fast, and reliable, helping you manage sales, track stock, and analyze performance in real-time.",

        keyFeatures: [
            { icon: <CreditCard size={32} />, title: "Payment Processing", description: "Support for multiple payment methods including cards, mobile wallets, and cash." },
            { icon: <Layers size={32} />, title: "Inventory Management", description: "Real-time stock tracking, low-stock alerts, and automated reordering." },
            { icon: <TrendingUp size={32} />, title: "Sales Analytics", description: "Detailed reports on sales trends, best-sellers, and employee performance." },
            { icon: <Users size={32} />, title: "Customer Management", description: "Customer profiles, purchase history, and loyalty program integration." },
            { icon: <Smartphone size={32} />, title: "Multi-Device Support", description: "Works on tablets, smartphones, and traditional POS terminals." },
            { icon: <Cloud size={32} />, title: "Cloud Sync", description: "Real-time data synchronization across multiple store locations." }
        ],

        process: [
            { step: 1, title: "Requirements Gathering", description: "Understand your business type, payment needs, and integration requirements." },
            { step: 2, title: "System Design", description: "Design POS interface, payment flows, and inventory management system." },
            { step: 3, title: "Development & Integration", description: "Build POS software and integrate with payment processors and accounting systems." },
            { step: 4, title: "Training & Deployment", description: "Install hardware, train staff, and provide ongoing support." }
        ],

        benefits: [
            { title: "Faster Checkouts", description: "Streamlined interface reduces transaction time and improves customer experience." },
            { title: "Accurate Inventory", description: "Real-time tracking eliminates stock discrepancies and prevents overselling." },
            { title: "Data-Driven Decisions", description: "Sales analytics help you understand what sells and optimize inventory." },
            { title: "Multi-Store Management", description: "Manage multiple locations from a single dashboard with centralized reporting." }
        ],

        caseStudies: [
            { id: 1, title: "Gadget Bodda", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png", description: "Integrated POS system with inventory and payment processing", technologies: ["Next.js", "React", "Laravel", "Php"], liveLink: "https://www.gadgetboddaa.com/" },
            { id: 10, title: "EmusFashion", image: "/EmusFashion.png", description: "Fashion retail POS with customer loyalty and analytics", technologies: ["Next.js", "Tailwind", "Framer Motion"], liveLink: "https://emusfashion.com/" }
        ],

        packages: [
            { name: "Basic POS", price: "$3,500", duration: "3-4 weeks", features: ["Single location", "Basic inventory", "Payment processing", "Sales reports", "3 months support"], recommended: false },
            { name: "Professional POS", price: "$8,000", duration: "5-8 weeks", features: ["Multi-location support", "Advanced inventory", "Customer management", "Loyalty programs", "Accounting integration", "6 months support"], recommended: true },
            { name: "Enterprise POS", price: "Custom", duration: "10+ weeks", features: ["Unlimited locations", "Custom features", "Advanced analytics", "Third-party integrations", "Hardware included", "12 months support"], recommended: false }
        ],

        faqs: [
            { question: "What hardware do I need for a POS system?", answer: "Basic setup requires a tablet or computer, receipt printer, and card reader. We can recommend and supply compatible hardware or work with your existing equipment." },
            { question: "Can your POS work offline?", answer: "Yes! Our POS systems have offline mode that syncs data when internet connection is restored, ensuring uninterrupted sales." },
            { question: "Do you integrate with accounting software?", answer: "Yes, we integrate with popular accounting platforms like QuickBooks, Xero, and others to streamline your financial management." },
            { question: "Can I manage multiple store locations?", answer: "Absolutely! Our Professional and Enterprise packages support multi-location management with centralized inventory and reporting." },
            { question: "What payment methods are supported?", answer: "We support credit/debit cards, mobile wallets (Apple Pay, Google Pay), cash, and can integrate with local payment processors." },
            { question: "Do you provide training for staff?", answer: "Yes, we provide comprehensive training for your staff and create user guides to ensure smooth adoption of the system." }
        ],

        testimonials: [
            { name: "Maria Santos", role: "Owner, Fashion Boutique", image: "https://randomuser.me/api/portraits/women/72.jpg", text: "The POS system has transformed how we manage our store. Inventory tracking is now effortless!" },
            { name: "Ahmed Khan", role: "Manager, Gadget Store", image: "https://randomuser.me/api/portraits/men/52.jpg", text: "Squad Innovators delivered a POS solution that perfectly fits our needs. Checkout is now 3x faster!" },
            { name: "Jennifer Liu", role: "Owner, Cafe Chain", image: "https://randomuser.me/api/portraits/women/38.jpg", text: "Managing 5 locations is now easy with their cloud-based POS. Real-time data has been a game-changer." }
        ],

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
        ],
        details: "Efficient point-of-sale (POS) systems are the backbone of retail and hospitality businesses."
    }
};
