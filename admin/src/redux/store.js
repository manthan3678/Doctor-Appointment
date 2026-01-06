import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice.js";
import userReducer from "./slice/userSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: userReducer,
  },
});

export default store;
