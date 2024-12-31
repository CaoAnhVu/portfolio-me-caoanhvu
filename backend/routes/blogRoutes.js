const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const multer = require("multer");
const path = require("path");
const { rateBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const auth = require("../middleware/auth");

// Cấu hình multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log("Found blogs:", blogs);
    res.json({ blogs: blogs });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message, blogs: [] });
  }
});

// POST new blog
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Log để debug
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);

    // Tạo blog mới
    const blogData = {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      category: req.body.category,
      author: "Admin", // Giá trị mặc định
      tags: JSON.parse(req.body.tags || "[]"),
    };

    // Thêm image path nếu có file upload
    if (req.file) {
      blogData.image = `/uploads/${req.file.filename}`;
    }

    // Tạo và lưu blog
    const blog = new Blog(blogData);
    const savedBlog = await blog.save();

    // Log kết quả
    console.log("Saved blog:", savedBlog);

    res.status(201).json({
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(400).json({
      message: `Error creating blog: ${error.message}`,
    });
  }
});
// GET blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Routes

module.exports = router;
