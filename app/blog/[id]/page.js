import { dummyBlogs } from '@/lib/blogData';
import BlogDetails from '@/components/BlogDetails';

const userId = 202;

export async function generateMetadata({ params }) {
    const { id } = await params;

    // Try to find in dummy data first
    const dummyBlog = dummyBlogs.find(b => b.id.toString() === id);
    if (dummyBlog) {
        return {
            title: dummyBlog.title,
            description: dummyBlog.excerpt,
        };
    }

    // Fetch from API
    try {
        const res = await fetch(`https://www.outletexpense.xyz/api/latest-ecommerce-blog-list/${userId}`);
        const data = await res.json();
        const blog = data?.data?.find(b => b.id.toString() === id);

        if (blog) {
            return {
                title: blog.title,
                description: blog.excerpt || blog.short_description,
            };
        }
    } catch (error) {
        console.error("Error fetching metadata:", error);
    }

    return {
        title: "Blog Details",
    };
}

export default async function BlogDetailPage({ params }) {
    const { id } = await params;
    return <BlogDetails id={id} />;
}
