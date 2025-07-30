// routes/vertical.js
const express = require('express');
const router = express.Router();
const Vertical = require('../models/Verticals');

// POST full vertical structure
router.post('/', async (req, res) => {
  try {
    const payload = Array.isArray(req.body) ? req.body : [req.body];
    const saved = await Vertical.insertMany(payload);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all verticals with hierarchy
router.get('/', async (req, res) => {
  try {
    const verticals = await Vertical.find();
    res.json(verticals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET products by vertical → principal → category
router.get('/verticals/:vSlug/principals/:pName/categories/:cName/products', async (req, res) => {
  try {
    const { vSlug, pName, cName } = req.params;
    const vertical = await Vertical.findOne({ slug: vSlug });
    if (!vertical) return res.status(404).json({ error: 'Vertical not found' });

    const principal = vertical.principals.find(p => p.name === pName);
    if (!principal) return res.status(404).json({ error: 'Principal not found' });

    const category = principal.categories.find(c => c.name === cName);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    res.json(category.products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET full product details
router.get('/verticals/:vSlug/principals/:pName/categories/:cName/products/:productName', async (req, res) => {
  try {
    const { vSlug, pName, cName, productName } = req.params;
    const vertical = await Vertical.findOne({ slug: vSlug });
    if (!vertical) return res.status(404).json({ error: 'Vertical not found' });

    const principal = vertical.principals.find(p => p.name === pName);
    if (!principal) return res.status(404).json({ error: 'Principal not found' });

    const category = principal.categories.find(c => c.name === cName);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const product = category.products.find(p => p.name === productName);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
