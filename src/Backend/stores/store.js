// stores/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import authReducer from "./authSlice"; 
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer,
    user: userReducer,
  },
});
