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
import {
  allOrder,
  createOrder,
  deleteOrderById,
  getOrderById,
} from "../controller/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get("/products", allProduct);
router.post("/products/create", protect, createProduct);
router
  .route("/products/:id")
  .get(getProductById)
  .put(protect, updateProductById)
  .delete(protect, deleteProductById);
router.route("/order").get(protect, allOrder).post(protect, createOrder);
router
  .route("/order/:id")
  .get(protect, getOrderById)
  .delete(protect, deleteOrderById);
router.post("/auth/login", authUser);
router.get("/auth/logout", logoutUser);
router.post("/auth/register", registerUser);
router.route("/auth/profile").get(protect, getUserProfile);

export default router;
