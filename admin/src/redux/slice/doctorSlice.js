import { createSlice } from "@reduxjs/toolkit";
import {
  addDoctor,
  getAllDoctor,
  getDoctorDetails,
  updateDoctor,
} from "../actions/doctorAction";

const initialState = {
  loading: false,

  // data
  doctor: null,
  doctors: [],

  // success flags (SEPARATE)
  fetchSuccess: false, // getAllDoctor / getDoctorDetails
  addSuccess: false, // addDoctor
  updateSuccess: false, // updateDoctor

  error: null,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.fetchSuccess = false;
      state.addSuccess = false;
      state.updateSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ================= GET ALL DOCTORS ================= */

      .addCase(getAllDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchSuccess = true;
        state.doctors = action.payload.doctors;
      })
      .addCase(getAllDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= GET DOCTOR DETAILS ================= */

      .addCase(getDoctorDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDoctorDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchSuccess = true;
        state.doctor = action.payload.doctor;
      })
      .addCase(getDoctorDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= ADD DOCTOR ================= */

      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.addSuccess = true;
        state.doctor = action.payload.doctor;
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= UPDATE DOCTOR ================= */

      .addCase(updateDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDoctor.fulfilled, (state) => {
        state.loading = false;
        state.updateSuccess = true;
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = doctorSlice.actions;
export default doctorSlice.reducer;
