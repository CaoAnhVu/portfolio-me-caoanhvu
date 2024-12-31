"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blogs");
      console.log("Response status:", res.status); // Debug

      const data = await res.json();
      console.log("Fetched data:", data); // Debug

      if (!res.ok) throw new Error(data.message || "Failed to fetch blogs");

      setPosts(Array.isArray(data.blogs) ? data.blogs : []);
      setError(null);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError(err.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const res = await fetch(`/api/blogs/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          fetchPosts();
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Link href="/admin/create" className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus /> Create Blog
        </Link>
      </div>

      <div className="bg-[#27272c] rounded-xl p-6">
        {error ? (
          <div className="text-red-500 text-center py-4">{error}</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-4 text-gray-400">No posts found</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4">Title</th>
                <th className="text-left py-4">Category</th>
                <th className="text-left py-4">Date</th>
                <th className="text-right py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="border-b border-gray-700/50">
                  <td className="py-4">{post.title}</td>
                  <td className="py-4">{post.category}</td>
                  <td className="py-4">{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td className="py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/edit/${post._id}`} className="p-2 hover:bg-accent/20 rounded-lg">
                        <FaEdit />
                      </Link>
                      <button onClick={() => handleDelete(post._id)} className="p-2 hover:bg-red-500/20 rounded-lg text-red-500">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Page;
