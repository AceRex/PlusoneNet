import { configureStore } from "@reduxjs/toolkit";
import othersSlice from "./slice/otherSlice";
import productsSlice from "./slice/productSlice";

const store = configureStore({
  reducer: {
    others: othersSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
