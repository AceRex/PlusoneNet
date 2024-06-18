import { createSlice } from "@reduxjs/toolkit";

const othersSlice = createSlice({
  name: "others",
  initialState: {
    openAdminPreview: false,
    createProductModal: false,
  },
  reducers: {
    setOpenAdminPreview: (state, action) => {
      state.openAdminPreview = action.payload;
    },
    setCreateProductModal: (state, action) => {
      state.createProductModal = action.payload;
    }
  },
});

export const OthersAction = othersSlice.actions;

export default othersSlice;
