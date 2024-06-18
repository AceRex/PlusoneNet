import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
} from "../controller/controller.js";
import {
  allProduct,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controller/productController.js";

router.get("/products", allProduct);
router.post("/products/create", createProduct);
router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);
router.post("/auth/login", authUser);
router.get("/auth/logout", logoutUser);
router.post("/auth/register", registerUser);
router.route("/auth/profile").get(getUserProfile);

export default router;
