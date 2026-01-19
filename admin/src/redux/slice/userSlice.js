import { createSlice } from "@reduxjs/toolkit";
import { getAllStats, getAllUser, getUserDeatils } from "../actions/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    success: false,
    user: null,
    users: null,
    token: null,
    appointments: null,
    stats: null,
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
      // get all user PENDING
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
      })
      // get user details PENDING
      .addCase(getUserDeatils.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // get User details SUCCESS ✅
      .addCase(getUserDeatils.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.appointments = action.payload.appointments;
      })

      // get user details ERROR ❌
      .addCase(getUserDeatils.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get Stats details PENDING
      .addCase(getAllStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // get Stats details SUCCESS ✅
      .addCase(getAllStats.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.stats = action.payload.stats;
      })

      // get Stats details ERROR ❌
      .addCase(getAllStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
