'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock, ChevronRight } from "lucide-react";

// Sample userId (replace this dynamically if needed)
const userId = 202;

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const dummyBlogs = [
        {
            id: 1,
            title: "The Future of Web Development: Trends to Watch in 2025",
            excerpt: "Explore the latest technologies and frameworks shaping the future of web development, from AI-driven coding to WebAssembly. The landscape is changing rapidly, and staying ahead is crucial.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
            date: "Oct 24, 2024",
            author: "Admin",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Maximizing ROI with Custom Software Solutions",
            excerpt: "Learn how tailored software can streamline your business operations, improve efficiency, and drive significant revenue growth.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            date: "Oct 20, 2024",
            author: "Admin",
            readTime: "4 min read"
        },
        {
            id: 3,
            title: "Mobile App Development: Native vs. Cross-Platform",
            excerpt: "A comprehensive guide to choosing the right development approach for your mobile app, weighing performance against cost and speed.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
            date: "Oct 15, 2024",
            author: "Admin",
            readTime: "6 min read"
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

    const featuredBlog = blogs[0];
    const regularBlogs = blogs.slice(1);

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
                        className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4"
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
                    <div className="space-y-16">
                        {/* Featured Post */}
                        {featuredBlog && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white grid md:grid-cols-2 gap-0 border border-gray-100"
                            >
                                <div className="relative h-[400px] md:h-auto overflow-hidden">
                                    <Image
                                        src={featuredBlog?.image || "/assets/images/blog.jpg"}
                                        alt={featuredBlog?.title}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center relative bg-white">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
                                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C8.46471 16 8.017 15.5523 8.017 15V9C8.017 8.44772 8.46471 8 9.017 8H15.017C15.5693 8 16.017 8.44772 16.017 9V11C16.017 11.5523 16.4647 12 17.017 12H20.017V5H4.017V22H14.017V21ZM17.017 14H19.017C19.5693 14 20.017 14.4477 20.017 15V18C20.017 18.5523 19.5693 19 19.017 19H17.017C16.4647 19 16.017 18.5523 16.017 18V15C16.017 14.4477 16.4647 14 17.017 14Z" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <span className="flex items-center gap-1 bg-blue-50 text-primary px-3 py-1 rounded-full font-bold">
                                            <Calendar size={14} />
                                            {featuredBlog.date || "Oct 24, 2024"}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {featuredBlog.readTime || "5 min read"}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight group-hover:text-secondary transition-colors">
                                        <Link href={`/blog/${featuredBlog?.id}`}>
                                            {featuredBlog?.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        {featuredBlog?.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${featuredBlog?.id}`}
                                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all duration-300 self-start shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        Read Featured Article
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        )}

                        {/* Regular Blogs Grid */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {regularBlogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            width={600}
                                            height={400}
                                            src={blog?.image || "/assets/images/blog.jpg"}
                                            alt={blog?.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                            {blog.category || "Technology"}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} className="text-secondary" />
                                                {blog.date || "Oct 24, 2024"}
                                            </span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} className="text-secondary" />
                                                {blog.readTime || "4 min read"}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                            <Link href={`/blog/${blog?.id}`}>
                                                {blog?.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed text-sm">
                                            {blog?.excerpt}
                                        </p>

                                        <Link
                                            href={`/blog/${blog?.id}`}
                                            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors mt-auto group/link"
                                        >
                                            Read More
                                            <ChevronRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
