import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/Login", async (loginDetails) => {
  const response = await axios.post(
    "http://localhost:5077/api/auth/login",
    loginDetails
  );
  document.cookie = ` user=; ${response.data} `;

  return response.data;
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const UserAction = UserSlice.actions;
export default UserSlice;
