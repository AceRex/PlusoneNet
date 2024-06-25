import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { baseurl } from "./productSlice";



export const login = createAsyncThunk("user/Login", async (loginDetails) => {
  const response = await axios.post(`${baseurl}api/auth/login`, loginDetails, {
    withCredentials: true,
  });

  return response.data;
});
export const logout = createAsyncThunk("user/Logout", async () => {
  const response = await axios.post(`${baseurl}api/auth/logout`, {
    withCredentials: true,
  });

  return response.data;
});

export const register = createAsyncThunk(
  "user/Register",
  async (registerDetails) => {
    const response = await axios.post(
      `${baseurl}api/auth/register`,
      registerDetails,
      { withCredentials: true }
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
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(`Login failed: ${state.error}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(`Registration failed: ${state.error}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Logout successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  },
});

export const UserAction = UserSlice.actions;
export default UserSlice;
