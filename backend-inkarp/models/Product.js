// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  vertical: String,
  category: String,
  subcategory: String,
  principal: String, // NEW: Principal name
  name: String,
  image: String, // URL or base64 string
  description: String,
  tags: [String],
  specifications: String // HTML string
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
