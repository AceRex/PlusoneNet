import asyncHandler from "express-async-handler";
import User from "../models/model.js";
import generateToken from "../token/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "Login successful",
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "User created successfully",
    });
  } else {
    res.status(400).json({
      message: "Invalid details provided",
    });
  }
});
const getUserProfile = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const user = await User.findOne({ name });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({
      message: "User not found",
    });
  }
});
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

export { authUser, registerUser, getUserProfile, logoutUser };
