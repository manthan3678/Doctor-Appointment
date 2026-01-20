import { createSlice } from "@reduxjs/toolkit";
import {
  getAllAppointment,
  getAppointmentDetails,
  updateAppointmentStatus,
} from "../actions/appoitmentAction";
const initialState = {
  loading: false,

  // data
  appointment: null,
  appointments: [],

  // success flags (SEPARATE)
  fetchSuccess: false, // getAllAppointment
  addSuccess: false, // addDoctor
  updateAppointment: false, // update appointment status
  deleteSuccess: false,
  availableSuccess: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.fetchSuccess = false;
      state.addSuccess = false;
      state.updateAppointment = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ================= GET ALL APPOINTMENTS ================= */

      .addCase(getAllAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchSuccess = true;
        state.appointments = action.payload.appointments;
      })
      .addCase(getAllAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* ================= GET APPOINTMENTS DETAILS ================= */

      .addCase(getAppointmentDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppointmentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchSuccess = true;
        state.appointment = action.payload.appointmentDetails;
      })
      .addCase(getAppointmentDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* ================= UPDATE APPOINMENT BOOKING STATUS ================= */
      .addCase(updateAppointmentStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAppointmentStatus.fulfilled, (state) => {
        state.loading = false;
        state.updateAppointment = true;
      })
      .addCase(updateAppointmentStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = appointmentSlice.actions;
export default appointmentSlice.reducer;
