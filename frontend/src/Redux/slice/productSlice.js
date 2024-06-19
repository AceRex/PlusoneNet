import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const baseurl =
  // "https://plusoneprojectbackend-3ryhrw5lm-acerexs-projects.vercel.app/";
export const baseurl = "http://localhost:5077/";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${baseurl}api/products`, {
      withCredentials: true,
    });
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData) => {
    const response = await axios.post(
      `${baseurl}api/products/create`,
      productData,
      { withCredentials: true }
    );
    return response.data;
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId) => {
    const response = await axios.get(`${baseurl}api/products/${productId}`, {
      withCredentials: true,
    });
    return response.data;
  }
);
export const updateProductById = createAsyncThunk(
  "products/updateProductById",
  async ({ productId, updatedData }) => {
    const response = await axios.put(
      `${baseurl}api/products/${productId}`,
      updatedData,
      { withCredentials: true }
    );
    return response.data;
  }
);
export const deletedProductById = createAsyncThunk(
  "products/getProductById",
  async (productId) => {
    const response = await axios.delete(`${baseurl}api/products/${productId}`, {
      withCredentials: true,
    });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    previewItem: null,
    cart: [],
  },
  reducers: {
    setPreviewItem(state, action) {
      state.previewItem = action.payload;
    },
    clearPreviewItem(state) {
      state.previewItem = null;
    },
    addToCart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.quantity >= 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
    decCartItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          existingItem.quantity--;
        }
      }
    },
    incCartItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.previewItem = action.payload;
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        state.previewItem = action.payload;
      });
  },
});

export const ProductAction = productsSlice.actions;
export default productsSlice;
