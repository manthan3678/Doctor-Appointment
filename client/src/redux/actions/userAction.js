import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/API";

// get all user
export const getAllUser = createAsyncThunk(
  "user/getAllUser",

  async (_, thunkApi) => {
    try {
      const res = await API.get("/user/get-allusers");
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Get Users Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
// get all userDetails
export const getUserDeatils = createAsyncThunk(
  "user/getUserDeatils",

  async (id, thunkApi) => {
    try {
      const res = await API.get(`/user/get-userdetails/${id}`);
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "User Details Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
// ********************************************************
// ********************************************************
// ********************************************************
// HOME PAGE DATA Function
export const getAllStats = createAsyncThunk(
  "user/getAllStats",

  async (_, thunkApi) => {
    try {
      const res = await API.get("/user/get-allstatistic");
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Get Statistic Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
