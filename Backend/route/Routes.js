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

router.get("/products", allProduct);
router.post("/products/create", createProduct);
router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);
router.route("/order").get(allOrder).post(createOrder);
router.route("/order/:id").get(getOrderById).delete(deleteOrderById);
router.post("/auth/login", authUser);
router.get("/auth/logout", logoutUser);
router.post("/auth/register", registerUser);
router.route("/auth/profile").get(getUserProfile);

export default router;
