import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

const allCategory = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();
  res.json(categories);
});

const createCategory = asyncHandler(async (req, res, next) => {
  const { title, subCategory, image } = req.body;

  const newCategory = new Category({
    title,
    subCategory,
    image,
  });

  const savedCategory = await newCategory.save();
  if (savedCategory) {
    res.status(201).json(savedCategory);
  } else {
    res.status(400).json({ message: "Unable to create category" });
  }
});

const getCategoryById = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).send("Category not found");
  }
});

const updateCategoryById = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });

  const { title, subCategory } = req.body;
  const image = req.file ? req.file.path : category.image;

  category.title = title || category.title;
  category.subCategory = subCategory || category.subCategory;
  category.image = image;

  const updatedCategory = await category.save();
  res.json(updatedCategory);
});

const deleteCategoryById = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });

  res.status(204).send();
});

export {
  allCategory,
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
