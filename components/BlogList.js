'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample userId (replace this dynamically if needed)
const userId = 202; // <- Replace this with your actual userId

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`https://www.outletexpense.xyz/api/latest-ecommerce-blog-list/${userId}`);
                const data = await res.json();
                if (data?.data) {
                    setBlogs(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="md:py-20 pb-10 md:pb-20 px-4 md:px-20">
            <h1 className="lg:text-4xl text-white md:text-3xl mb-10 text-2xl font-semibold text-center">Our Latest Blogs</h1>

            {loading ? (
                <p className="text-white text-center">Loading...</p>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:w-full w-11/12 mx-auto">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-[#020928] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all relative pb-5 h-[27rem]">
                            <Image
                                width={200}
                                height={200}
                                src={blog?.image || "/blog.jpg"}
                                alt={blog?.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="lg:text-2xl text-lg font-semibold mb-3 text-white">{blog?.title}</h2>
                                <p className="text-gray-100 mb-5">{blog?.excerpt}</p>
                                <Link
                                    href={`/blog/${blog?.id}`}
                                    className="inline-block text-indigo-500 hover:text-indigo-100 font-medium absolute bottom-5"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
