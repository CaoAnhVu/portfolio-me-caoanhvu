"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"; // Thêm motion

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data.blog);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!blog) return <div className="text-center py-8">Blog not found</div>;

  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container mx-auto py-8 px-4">
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
        {blog.image && <Image src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image}`} alt={blog.title} fill className="object-cover" priority />}
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex items-center gap-4 text-gray-400 mb-8">
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          <span>•</span>
          <span>{blog.category}</span>
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <p className="text-xl mb-8">{blog.description}</p>
          <div>{blog.content}</div>
        </div>
      </div>
    </motion.article>
  );
}
