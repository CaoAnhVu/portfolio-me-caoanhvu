"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaFolder, FaTags, FaArrowLeft } from "react-icons/fa";

export default function BlogDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchBlog = async () => {
      try {
        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data.blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  // Loading state với animation
  if (loading) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </motion.div>
    );
  }
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  if (!blog) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Blog not found</h2>
          <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }} className="min-h-screen bg-[#1A1A1F] ">
        {/* Back Button */}
        <div className="container mx-auto max-w-4xl px-4 ">
          <Link href="/blogs" className="absolute left-4 md:left-[289px] top-40 z-10 bg-accent/60 hover:bg-accent text-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
            <FaArrowLeft />
          </Link>
        </div>

        {/* Hero Section with Image */}

        <div className="relative h-[60vh] w-full  mt-20">
          {blog.image && <Image src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image}`} alt={blog.title} fill className="object-cover" priority />}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1F] to-transparent" />
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto max-w-4xl">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                {blog.title}
              </motion.h1>

              {/* Meta Information */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-accent" />
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {blog.category && (
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-accent" />
                    <span>{blog.category}</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="container mx-auto max-w-4xl px-4 py-12">
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <FaTags className="text-accent" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm hover:bg-accent/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{blog.description}</p>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4
                         [&>p]:text-gray-300 [&>p]:leading-relaxed [&>p]:mb-6
                         [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                         [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
