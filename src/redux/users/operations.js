import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";

export const getCurrentUser = createAsyncThunk(
  "users/getOneUser",
  async (_, thunkAPI) => {
    try {
      const response = await instanse.get("users/current");

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
