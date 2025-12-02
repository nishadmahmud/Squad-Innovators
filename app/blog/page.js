"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dummyBlogs } from "@/lib/blogData";

// Sample userId (replace this dynamically if needed)
const userId = 202;

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Blog
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Latest <span className="text-gradient">Insights & News</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Stay updated with the latest trends in technology, design, and business.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
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
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span>{blog.date || "Oct 20, 2024"}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>{blog.category || "Technology"}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors line-clamp-2">
                                        {blog?.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                        {blog?.excerpt || blog?.short_description}
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
        </div>
    );
}
