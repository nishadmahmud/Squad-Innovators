'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample userId (replace this dynamically if needed)
const userId = 202; // <- Replace this with your actual userId

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const dummyBlogs = [
        {
            id: 1,
            title: "The Future of Web Development: Trends to Watch in 2025",
            excerpt: "Explore the latest technologies and frameworks shaping the future of web development, from AI-driven coding to WebAssembly.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Maximizing ROI with Custom Software Solutions",
            excerpt: "Learn how tailored software can streamline your business operations, improve efficiency, and drive significant revenue growth.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Mobile App Development: Native vs. Cross-Platform",
            excerpt: "A comprehensive guide to choosing the right development approach for your mobile app, weighing performance against cost and speed.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
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
        <div className="py-20 px-4 md:px-20 bg-gray-50">
            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Insights</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
                    Latest <span className="text-gradient">News & Articles</span>
                </h2>
            </div>

            {loading ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    width={400}
                                    height={300}
                                    src={blog?.image || "/assets/images/blog.jpg"}
                                    alt={blog?.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors line-clamp-2">
                                    {blog?.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                    {blog?.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${blog?.id}`}
                                    className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mt-auto"
                                >
                                    Read More
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
