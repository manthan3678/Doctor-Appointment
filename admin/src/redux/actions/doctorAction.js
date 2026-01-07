import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/API";

// get all user
export const getAllDoctor = createAsyncThunk(
  "doctor/getAllDoctor",

  async (_, thunkApi) => {
    try {
      const res = await API.get("/doctor/get-alldoctor");
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Get All Doctor Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);

// get doctor Details
export const getDoctorDetails = createAsyncThunk(
  "doctor/getDoctorDetails",

  async (id, thunkApi) => {
    try {
      const res = await API.get(`/doctor/get-doctor/${id}`);
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Doctor Details Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);
