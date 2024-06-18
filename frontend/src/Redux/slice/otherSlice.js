import { createSlice } from "@reduxjs/toolkit";

const othersSlice = createSlice({
  name: "others",
  initialState: {
    openAdminPreview: false,
    createProductModal: false,
    editProductModal: false,
  },
  reducers: {
    setOpenAdminPreview: (state, action) => {
      state.openAdminPreview = action.payload;
    },
    setCreateProductModal: (state, action) => {
      state.createProductModal = action.payload;
    },
    setEditProductModal: (state, action) => {
      state.editProductModal = action.payload;
    },
  },
});

export const OthersAction = othersSlice.actions;

export default othersSlice;
