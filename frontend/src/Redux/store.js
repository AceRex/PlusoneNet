import { configureStore } from "@reduxjs/toolkit";
import othersSlice from "./slice/otherSlice";
import productsSlice from "./slice/productSlice";
import UserSlice from "./slice/userSlice";
import OrderSlice from "./slice/OrderSlice";

const store = configureStore({
  reducer: {
    others: othersSlice.reducer,
    products: productsSlice.reducer,
    user: UserSlice.reducer,
    order: OrderSlice.reducer,
  },
});

export default store;
