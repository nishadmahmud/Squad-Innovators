'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

// Sample userId (replace this dynamically if needed)
const userId = 202;

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const dummyBlogs = [
        {
            id: 1,
            title: "The Future of Web Development: Trends to Watch in 2025",
            excerpt: "Explore the latest technologies and frameworks shaping the future of web development, from AI-driven coding to WebAssembly.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
            date: "Oct 24, 2024",
            author: "Admin"
        },
        {
            id: 2,
            title: "Maximizing ROI with Custom Software Solutions",
            excerpt: "Learn how tailored software can streamline your business operations, improve efficiency, and drive significant revenue growth.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            date: "Oct 20, 2024",
            author: "Admin"
        },
        {
            id: 3,
            title: "Mobile App Development: Native vs. Cross-Platform",
            excerpt: "A comprehensive guide to choosing the right development approach for your mobile app, weighing performance against cost and speed.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
            date: "Oct 15, 2024",
            author: "Admin"
        }
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`https://www.outletexpense.xyz/api/latest-ecommerce-blog-list/${userId}`);
                const data = await res.json();
                if (data?.data && data.data.length > 0) {
                    setBlogs(data.data);
                } else {
                    setBlogs(dummyBlogs);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
                setBlogs(dummyBlogs);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-0 w-72 h-72 bg-blue-50 rounded-full blur-[80px] opacity-60"></div>
                <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-50 rounded-full blur-[80px] opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-wider uppercase text-sm"
                    >
                        Our Insights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6"
                    >
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">News & Articles</span>
                    </motion.h2>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        width={600}
                                        height={400}
                                        src={blog?.image || "/assets/images/blog.jpg"}
                                        alt={blog?.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                                    {/* Date Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                                        <Calendar size={12} />
                                        {blog.date || "Oct 24, 2024"}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                                        <User size={14} className="text-secondary" />
                                        {blog.author || "Admin"}
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                        <Link href={`/blog/${blog?.id}`}>
                                            {blog?.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed text-sm">
                                        {blog?.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${blog?.id}`}
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors mt-auto group/link"
                                    >
                                        Read Article
                                        <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
