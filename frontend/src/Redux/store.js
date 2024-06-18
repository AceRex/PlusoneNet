import { configureStore } from "@reduxjs/toolkit";
import othersSlice from "./slice/otherSlice";

const store = configureStore({
  reducer: {
    others: othersSlice.reducer,
  },
});

export default store;
