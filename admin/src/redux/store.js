import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice.js";
import userReducer from "./slice/userSlice.js";
import doctorReducer from "./slice/doctorSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: userReducer,
    doctor: doctorReducer,
  },
});

export default store;
