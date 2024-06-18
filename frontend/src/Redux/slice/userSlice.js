import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "./productSlice";

export const login = createAsyncThunk("user/Login", async (loginDetails) => {
  const response = await axios.post(
    `${baseurl}api/auth/login`,
    loginDetails
  );

  return response.data;
});

export const register = createAsyncThunk(
  "user/Register",
  async (registerDetails) => {
    const response = await axios.post(
      `${baseurl}api/auth/register`,
      registerDetails
    );

    return response.data;
  }
);

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
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const UserAction = UserSlice.actions;
export default UserSlice;
