const mongoose = require('mongoose');

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String, // HTML
  specifications: String, // HTML table
  tags: [String]
}, { _id: false });

// Subcategory Schema
const SubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  products: [ProductSchema]
}, { _id: false });

// Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subcategories: [SubcategorySchema]
}, { _id: false });

// Principal Schema
const PrincipalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  categories: [CategorySchema]
}, { _id: false });

// Vertical Schema
const VerticalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
  principals: [PrincipalSchema]
}, { timestamps: true });

module.exports = mongoose.model('Vertical', VerticalSchema);
