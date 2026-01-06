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
        error?.response?.data?.message || error.message || "login error";
      return thunkApi.rejectWithValue(message);
    }
  }
);
