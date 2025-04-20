import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../api/typesApi";

// Async action to fetch users
export const fetchCategories = createAsyncThunk("catagory/fetchCategories", async () => {
  const response = await categoryApi.getAllType();
  return response.data;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
