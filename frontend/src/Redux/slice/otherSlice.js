import { createSlice } from "@reduxjs/toolkit";

const othersSlice = createSlice({
  name: "others",
  initialState: {
    openAdminPreview: false,
  },
  reducers: {
    setOpenAdminPreview: (state, action) => {
      state.openAdminPreview = action.payload;
    },
  },
});

export const OthersAction = othersSlice.actions;

export default othersSlice;
