import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice.js";
import userReducer from "./slice/userSlice.js";
import doctorReducer from "./slice/doctorSlice.js";
import appointmentReducer from "./slice/appointmentSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: userReducer,
    doctor: doctorReducer,
    appointments: appointmentReducer,
  },
});

export default store;
