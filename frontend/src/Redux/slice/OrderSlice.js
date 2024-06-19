import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "./productSlice";

export const fetchOrder = createAsyncThunk("order/fetchOrder", async () => {
  const response = await axios.get(`${baseurl}api/order`, {
    withCredentials: true,
  });
  return response.data;
});

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData) => {
    const response = await axios.post(`${baseurl}api/Order`, orderData, {
      withCredentials: true,
    });
    return response.data;
  }
);
export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId) => {
    const response = await axios.get(`${baseurl}api/products/${orderId}`, {
      withCredentials: true,
    });
    return response.data;
  }
);
export const updateOrderById = createAsyncThunk(
  "order/updateOrderById",
  async ({ orderId, updatedOrder }) => {
    const response = await axios.put(
      `${baseurl}api/order/${orderId}`,
      updatedOrder,
      { withCredentials: true }
    );
    return response.data;
  }
);
export const deletedOrderById = createAsyncThunk(
  "order/deletedOrderById",
  async (productId) => {
    const response = await axios.delete(`${baseurl}api/order/${productId}`, {
      withCredentials: true,
    });
    return response.data;
  }
);

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateOrderById.fulfilled, (state, action) => {
        state.previewItem = action.payload;
      });
  },
});

export const OrderAction = OrderSlice.actions;
export default OrderSlice;
