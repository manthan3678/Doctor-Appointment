import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loadToken, login, register } from "../actions/authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    success: false,
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // login
    builder
      // LOGIN PENDING
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // REGISTER SUCCESS ✅
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      // REGISTER ERROR ❌
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // REGISTER PENDING
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // LOGIN SUCCESS ✅
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      // LOGIN ERROR ❌
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //
      .addCase(loadToken.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      //
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
