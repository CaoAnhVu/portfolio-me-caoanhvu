"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BlogPost = ({ post }) => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 xl:px-0">
      <div className="container mx-auto max-w-4xl">
        <div className="relative h-[400px] w-full mb-8">
          <Image src={post.image} alt={post.title} fill className="object-cover rounded-2xl" />
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-accent">{post.author}</span>
          <span className="text-white/60">{post.date}</span>
        </div>

        <div className="prose prose-invert max-w-none">{post.content}</div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
