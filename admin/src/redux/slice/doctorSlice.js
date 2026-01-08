import { createSlice } from "@reduxjs/toolkit";
import {
  addDoctor,
  getAllDoctor,
  getDoctorDetails,
} from "../actions/doctorAction";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    loading: false,
    success: false,
    doctor: null,
    doctors: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // get all doctor
    builder
      // get all doctors PENDING
      .addCase(getAllDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // getAllDoctors SUCCESS ✅
      .addCase(getAllDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.doctors = action.payload.doctors;
      })

      // getAllDoctors ERROR ❌
      .addCase(getAllDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get doctor details PENDING
      .addCase(getDoctorDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // get doctor details SUCCESS ✅
      .addCase(getDoctorDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.doctor = action.payload.doctor;
      })

      // get user details ERROR ❌
      .addCase(getDoctorDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add New Doctor PENDING
      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Add New Doctor SUCCESS ✅
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.doctor = action.payload.doctor;
      })

      // Add New Doctor ERROR ❌
      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = doctorSlice.actions;
export default doctorSlice.reducer;
