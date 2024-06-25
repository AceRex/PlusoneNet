import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const baseurl = "https://plusoneprojectbackend.vercel.app/";
// export const baseurl = "http://localhost:5077/";

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
        toast.success("Item added to cart!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.quantity >= 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        toast.info("Item removed from cart.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
      toast.warn("Cart cleared.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
        toast.error("Failed to fetch products.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("Product created successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(getProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error("Failed to fetch product details.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        state.previewItem = action.payload;
        toast.success("Product updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  },
});

export const ProductAction = productsSlice.actions;
export default productsSlice;
