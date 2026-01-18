import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/API";

// get all Appointments
export const getAllAppointment = createAsyncThunk(
  "appointment/getAllAppointment",

  async (_, thunkApi) => {
    try {
      const res = await API.get("/appointment/get-all");
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Get All Appointment Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);
// get Appointments Details
export const getAppointmentDetails = createAsyncThunk(
  "appointment/getAppointmentDetails",

  async (id, thunkApi) => {
    try {
      const res = await API.get(`/appointment/get-details/${id}`);
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Appointment Details Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);
// Update Status Appointment
export const updateAppointmentStatus = createAsyncThunk(
  "appointment/updateAppointmentStatus",

  async ({ id, appointmentStatus }, thunkApi) => {
    try {
      const res = await API.patch(
        `/appointment/update-status/${id}`,
        { appointmentStatus }, // ✅ OBJECT
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Update Appointment Status Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);
