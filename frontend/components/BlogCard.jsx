import Link from "next/link";
import Image from "next/image";
import { FaCalendar, FaFolder } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-[#27272c] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 w-full">
        {blog.image ? <Image src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image}`} alt={blog.title} fill className="object-cover" /> : <div className="w-full h-full bg-gray-700" />}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-accent" />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaFolder className="text-accent" />
            <span>{blog.category}</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3 line-clamp-2">{blog.title}</h2>
        <p className="text-gray-400 mb-4 line-clamp-2">{blog.description}</p>

        <Link href={`/blogs/${blog._id}`} className="inline-block bg-accent hover:bg-accent/80 text-black px-4 py-2 rounded-lg transition-colors">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
