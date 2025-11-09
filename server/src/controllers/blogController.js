import BlogPost from '../models/BlogPost.js';
import User from '../models/User.js';
import slugify from 'slugify';

// Get all published blog posts
export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find({ published: true }).populate('authorId', 'name').sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get blog by slug
export const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const blog = await BlogPost.findOne({ slug, published: true }).populate('authorId', 'name');
    if (!blog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create blog post (admin only)
export const createBlog = async (req, res) => {
  const { title, excerpt, content, tags, metaTitle, metaDescription, published } = req.body;
  const authorId = req.user.id;

  try {
    const slug = slugify(title, { lower: true, strict: true });

    const blogData = {
      title,
      slug,
      excerpt,
      content,
      authorId,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim())) : [],
      metaTitle,
      metaDescription,
      published: published === 'true' || published === true
    };

    // Handle image upload
    if (req.file) {
      blogData.image = `/uploads/${req.file.filename}`;
    }

    const blog = new BlogPost(blogData);

    await blog.save();

    const blogWithAuthor = await BlogPost.findById(blog._id).populate('authorId', 'name');

    res.json({ msg: 'Blog post created successfully', blog: blogWithAuthor });
  } catch (err) {
    console.error(err.message);
    if (err.code === 11000) {
      return res.status(400).json({ msg: 'Blog title must be unique' });
    }
    res.status(500).send('Server error');
  }
};

// Update blog post (admin only)
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, excerpt, content, tags, metaTitle, metaDescription, published } = req.body;

  try {
    const updates = {
      title,
      excerpt,
      content,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim())) : [],
      metaTitle,
      metaDescription,
      published: published === 'true' || published === true
    };

    if (title) {
      updates.slug = slugify(title, { lower: true, strict: true });
    }

    // Handle image upload
    if (req.file) {
      updates.image = `/uploads/${req.file.filename}`;
    }

    const blog = await BlogPost.findByIdAndUpdate(id, updates, { new: true }).populate('authorId', 'name');
    if (!blog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }

    res.json({ msg: 'Blog post updated successfully', blog });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete blog post (admin only)
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await BlogPost.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }

    res.json({ msg: 'Blog post deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all blog posts (admin only - including unpublished)
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find().populate('authorId', 'name').sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Publish/unpublish blog post (admin only)
export const togglePublishBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await BlogPost.findById(id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }

    blog.published = !blog.published;
    await blog.save();

    const updatedBlog = await BlogPost.findById(id).populate('authorId', 'name');

    res.json({
      msg: `Blog post ${blog.published ? 'published' : 'unpublished'} successfully`,
      blog: updatedBlog
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
