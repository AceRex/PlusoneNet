import mongoose from "mongoose";

const subCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: [String],
      required: true,
    },
  },
  { _id: false }
);

const categorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subCategory: {
      type: Map,
      of: subCategorySchema,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
