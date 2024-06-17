import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
} from "../controller/controller.js";

router.post("/auth/login", authUser);
router.get("/auth/logout", logoutUser);
router.post("/auth/register", registerUser);
router
  .route("/auth/profile")
  .get(getUserProfile)

export default router;
