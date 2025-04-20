// stores/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice"; // Make sure this is the correct path
import authReducer from "./authSlice"; // Ensure this path is correct and there's no circular dependency

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer, // Add the auth reducer here
  },
});
