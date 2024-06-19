import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const allOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.find();
  res.json(order);
});
const createOrder = asyncHandler(async (req, res, next) => {
  const {
    name,
    address,
    state,
    country,
    phone,
    amountOfOrder,
    quantityOfOrder,
    cart
  } = req.body;

  const newOrder = new Order({
    name,
    address,
    state,
    country,
    phone,
    amountOfOrder,
    quantityOfOrder,
    cart
  });

  const savedOrder = await newOrder.save();
  if (savedOrder) {
    res.status(201).json(savedOrder);
  } else {
    res.status(400).json({ message: err.message });
  }
});
const getOrderById = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).send("Order not found");
  }
});
const deleteOrderById = asyncHandler(async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) return res.status(404).json({ message: "Product not found" });

  res.status(204).send();
});
export { allOrder, createOrder, getOrderById, deleteOrderById };
