import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    amountOfOrder: {
      type: Number,
      required: true,
    },
    quantityOfOrder: {
      type: Number,
      require: true,
    },
    cart: {
      type: [],
      require: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
