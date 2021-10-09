import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import followSlice from "./followSlice";
import postSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    follow: followSlice,
  },
});
