import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsApi from "../api/newsApi";

// Async action to fetch news
export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await newsApi.getAllNews();
  return response.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
