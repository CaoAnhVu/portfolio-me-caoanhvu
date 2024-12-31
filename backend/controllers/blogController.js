// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    const blogs = await Blog.find()
      .populate("author", "name")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Blog.countDocuments();

    res.json({
      blogs,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single blog
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).populate("author", "name");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create blog
const createBlog = async (req, res) => {
  try {
    const blogData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : "",
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
    };

    const blog = await Blog.create(blogData);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Rate blog
const rateBlog = async (req, res) => {
  try {
    const { rating } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const ratingIndex = blog.ratings.findIndex((r) => r.user.toString() === req.user._id.toString());

    if (ratingIndex > -1) {
      blog.ratings[ratingIndex].rating = rating;
    } else {
      blog.ratings.push({
        user: req.user._id,
        rating,
      });
    }

    blog.averageRating = blog.ratings.reduce((acc, curr) => acc + curr.rating, 0) / blog.ratings.length;
    blog.ratingCount = blog.ratings.length;

    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
          tags: req.body.tags,
          updatedAt: Date.now(),
        },
      },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export tất cả các functions
module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  rateBlog,
  updateBlog,
  deleteBlog,
};
