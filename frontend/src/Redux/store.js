import { configureStore } from "@reduxjs/toolkit";
import othersSlice from "./slice/otherSlice";
import productsSlice from "./slice/productSlice";
import UserSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    others: othersSlice.reducer,
    products: productsSlice.reducer,
    user: UserSlice.reducer,
  },
});

export default store;
