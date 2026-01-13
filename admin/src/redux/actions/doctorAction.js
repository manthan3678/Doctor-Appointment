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
//
// ADD doctor
export const addDoctor = createAsyncThunk(
  "doctor/addDoctor",

  async (formData, thunkApi) => {
    try {
      const res = await API.post(`/doctor/create-doctor`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Add Doctor Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);

// update doctor
export const updateDoctor = createAsyncThunk(
  "doctor/updateDoctor",

  async ({ id, formData }, thunkApi) => {
    try {
      const res = await API.patch(`/doctor/update-doctor/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Update Doctor Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);

// Delete doctor
export const deleteDoctor = createAsyncThunk(
  "doctor/deleteDoctor",

  async (id, thunkApi) => {
    try {
      const res = await API.delete(`/doctor/delete-doctor/${id}`);
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Delete Doctor Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);

// Update Status doctor
export const updateAvailStatus = createAsyncThunk(
  "doctor/updateAvailStatus",

  async ({ id, availableStatus }, thunkApi) => {
    try {
      const res = await API.patch(
        `/doctor/update-status-doctor/${id}`,
        { availableStatus }, // ✅ OBJECT
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
        "Update Available Doctor Status Error";
      return thunkApi.rejectWithValue(message);
    }
  }
);
