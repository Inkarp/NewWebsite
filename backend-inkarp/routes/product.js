// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST: Add a product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET: Filter by any level
router.get('/', async (req, res) => {
  const { vertical, category, subcategory, principal } = req.query;
  const query = {};
  if (vertical) query.vertical = vertical;
  if (category) query.category = category;
  if (subcategory) query.subcategory = subcategory;
  if (principal) query.principal = principal;

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
