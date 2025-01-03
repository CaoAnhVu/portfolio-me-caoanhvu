"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FaSave } from "react-icons/fa";

// Import React Quill editor
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const PostForm = ({ params }) => {
  const router = useRouter();
  const isEdit = params.action !== "new";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    image: "",
    tags: [],
  });

  useEffect(() => {
    if (isEdit && params.id) {
      fetchPost();
    }
  }, [isEdit, params.id]);

  const fetchPost = async () => {
    try {
      console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${params.id}`);
      const data = await res.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs${isEdit ? `/${params.id}` : ""}`, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{isEdit ? "Edit Post" : "New Post"}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Title</label>
          <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 bg-[#27272c] rounded-lg" required />
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 bg-[#27272c] rounded-lg" rows={3} required />
        </div>

        <div>
          <label className="block mb-2">Content</label>
          <ReactQuill value={formData.content} onChange={(content) => setFormData({ ...formData, content })} className="bg-[#27272c] rounded-lg" />
        </div>

        <div>
          <label className="block mb-2">Category</label>
          <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full p-3 bg-[#27272c] rounded-lg" required>
            <option value="">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            {/* Add more categories */}
          </select>
        </div>

        <div>
          <label className="block mb-2">Image URL</label>
          <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full p-3 bg-[#27272c] rounded-lg" required />
        </div>

        <div>
          <label className="block mb-2">Tags (comma separated)</label>
          <input
            type="text"
            value={formData.tags.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                tags: e.target.value.split(",").map((tag) => tag.trim()),
              })
            }
            className="w-full p-3 bg-[#27272c] rounded-lg"
          />
        </div>

        <button type="submit" className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <FaSave /> Save Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
