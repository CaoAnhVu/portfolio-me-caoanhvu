"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
// Dynamic import với ssr: false
const Editor = dynamic(() => import("@tinymce/tinymce-react").then((mod) => mod.Editor), { ssr: false });

const CreatePost = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    tags: "",
    image: null,
  });

  // State để preview hình ảnh
  const [imagePreview, setImagePreview] = useState(null);

  // Xử lý khi chọn file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      // Tạo URL để preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("category", formData.category);

      // Xử lý tags: chuyển string thành array
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);
      formDataToSend.append("tags", JSON.stringify(tagsArray));

      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Error creating post");
      }

      const data = await res.json();
      console.log("Success:", data);
      alert("Post created successfully!");
      router.push("/admin");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Error creating post");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl mb-8 text-center text-accent font-semibold hover:text-accent/80">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-2">Title</label>
          <input type="text" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 bg-[#27272c] rounded-lg" required />
        </div>
        {/* Description */}
        <div>
          <label className="block mb-2">Description</label>
          <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 bg-[#27272c] rounded-lg" rows={3} required />
        </div>
        {/* Content */}
        <div>
          <label className="flex flex-col items-start mb-2 xl:mb-0 max-w-[100px] xl:max-w-[200px]">Content</label>
          {/* Thêm loading fallback */}
          {isLoading && <div className="w-full h-[500px] bg-[#27272c] rounded-lg animate-pulse" />}
          <div className={isLoading ? "hidden" : "block"}>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              value={formData.content}
              onEditorChange={(content) => setFormData({ ...formData, content })}
              onInit={() => setIsLoading(false)}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                ],
                toolbar: "undo redo | blocks | bold italic forecolor | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist outdent indent | removeformat | help",
                // Custom CSS cho editor
                content_style: `
                    body { 
                    font-family: Helvetica, Arial, sans-serif, var(--font-jetbrains-mono); 
                    font-size: 14px;
                    background-color: #27272c; /* Màu nền tối */
                    color: #ffffff; /* Màu chữ trắng */
                    }
                    p { color: #ffffff; }
                    h1, h2, h3, h4, h5, h6 { color: #ffffff; }
                
                `,
                // Custom theme và skin
                skin: "oxide-dark",
                content_css: "dark",
                // Custom style cho container
                style_formats_merge: true,
                style_formats: [],
              }}
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Category</label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} className="w-full p-3 bg-[#27272c] rounded-lg" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a category</SelectLabel>
                <SelectItem value="WebDevelopment">Web Development</SelectItem>
                <SelectItem value="Fe/BeDevelopment">Fe/Be Development</SelectItem>
                <SelectItem value="MobileDevelopment">Mobile Development</SelectItem>
                <SelectItem value="UIDesign">UI/UX Design</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
                <SelectItem value="DataScience">Data Science</SelectItem>
                <SelectItem value="MachineLearning">Machine Learning</SelectItem>
                <SelectItem value="Blockchain">Blockchain</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Tags */}
        <div>
          <label className="block mb-2">Tags (separate by comma)</label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => {
              // Xử lý trực tiếp string input
              setFormData({ ...formData, tags: e.target.value });
            }}
            placeholder="Enter tags, separated by commas"
            className="w-full p-2 bg-[#27272c] rounded-lg"
          />
        </div>
        {/*  Image Upload */}
        <div>
          <label className="block mb-2">Image</label>
          <div className="flex flex-col gap-4">
            {/* Input file */}
            <label className="flex items-center gap-2 px-4 py-2 bg-[#27272c] hover:bg-[#32323a] rounded-lg cursor-pointer w-fit">
              <FaUpload className="text-accent" />
              <span className="text-white/60">Choose Image</span>
              <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="hidden" aria-label="Upload image" />
            </label>

            {/* Preview hình ảnh */}
            {imagePreview && (
              <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                <Image src={imagePreview} alt="Preview" fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
        {/* Submit button với loading state */}
        <button
          type="submit"
          disabled={isLoading}
          className={`flex items-center justify-center w-full md:w-auto px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors
            ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating...
            </>
          ) : (
            "Save Post"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
