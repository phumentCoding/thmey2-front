import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import typeApi from "../api/typesApi";

// Async action to fetch users
export const fetchTypes = createAsyncThunk("type/fetchTypes", async () => {
  const response = await typeApi.getAllType();
  return response.data;
});

const typeSlice = createSlice({
  name: "type",
  initialState: {
    types: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default typeSlice.reducer;
