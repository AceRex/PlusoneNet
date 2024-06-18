import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const products = [];

const allProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
const createProduct = asyncHandler(async (req, res) => {
  const { title, amount, description, category, image } = req.body;

  const newProduct = new Product({
    title,
    amount,
    description,
    category,
    image,
  });

  const savedProduct = await newProduct.save();
  if (savedProduct) {
    res.status(201).json(savedProduct);
  } else {
    res.status(400).json({ message: err.message });
  }
});
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send("Product not found");
  }
});
const updateProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { title, amount, description, category } = req.body;
  const image = req.file ? req.file.path : product.image;

  product.title = title || product.title;
  product.amount = amount || product.amount;
  product.description = description || product.description;
  product.category = category || product.category;
  product.image = image;

  const updatedProduct = await product.save();
  res.json(updatedProduct);
});
const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  res.status(204).send();
});
export {
  allProduct,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
