import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import typeReducer from "./typeSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    user: userReducer,
    category:categoryReducer,
    type:typeReducer,
  },
});

export default store;
