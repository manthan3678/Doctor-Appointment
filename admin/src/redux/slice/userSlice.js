import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../actions/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    success: false,
    user: null,
    users: null,
    token: null,
    appointments: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // get all user
    builder
      // LOGIN PENDING
      .addCase(getAllUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // getAllUser SUCCESS ✅
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.users = action.payload.users;
      })

      // getAllUser ERROR ❌
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
