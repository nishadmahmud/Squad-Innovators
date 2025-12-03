"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dummyBlogs } from '@/lib/blogData';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

// Sample userId (replace this dynamically if needed)
const userId = 202;

export default function BlogDetails({ id }) {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // First check if it's a dummy blog
                const dummyBlog = dummyBlogs.find(b => b.id.toString() === id);
                if (dummyBlog) {
                    setBlog(dummyBlog);
                    setLoading(false);
                    return;
                }

                // If not, try to fetch from API
                const res = await fetch(`https://www.outletexpense.xyz/api/latest-ecommerce-blog-list/${userId}`);
                const data = await res.json();

                if (data?.data) {
                    const apiBlog = data.data.find(b => b.id.toString() === id);
                    if (apiBlog) {
                        setBlog(apiBlog);
                    } else {
                        // If not found in API either
                        setBlog(null);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch blog details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!blog) {
        return notFound();
    }

    return (
        <div className="bg-white min-h-screen pt-30 pb-12">
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                    src={blog.image || "/assets/images/blog.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold tracking-wider uppercase mb-4 border border-white/30">
                            {blog.category || "Technology"}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-sm md:text-base text-gray-200">
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>{blog.author || "Admin"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>{blog.date || "Oct 20, 2024"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        {/* If content exists, render it. Otherwise render excerpt as fallback content */}
                        {blog.content ? (
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        ) : (
                            <p>{blog.excerpt || blog.short_description}</p>
                        )}

                        {/* Fallback text if content is very short (likely from API list view) */}
                        {(!blog.content || blog.content.length < 200) && (
                            <div className="mt-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p className="mt-4">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Tag className="text-primary" size={20} />
                            <span className="font-bold text-gray-900">Tags:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Technology", "Innovation", "Development", "Future"].map((tag) => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
