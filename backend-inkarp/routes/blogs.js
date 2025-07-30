const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs (short preview for listing)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 }).select('title date category imageUrl summary');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET blog by ID (full content for "Read More")
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blog
router.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    date: req.body.date,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    summary: req.body.summary,
    content: req.body.content
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
