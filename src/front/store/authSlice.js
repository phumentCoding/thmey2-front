import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";

// Async actions for authentication
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await authApi.login(credentials);
  localStorage.setItem("token", response.data.token);
  return response.data.user;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authApi.logout();
  localStorage.removeItem("token");
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "logged_in";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = "logged_out";
      });
  },
});

export default authSlice.reducer;
