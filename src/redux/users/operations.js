import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";

export const getUser = createAsyncThunk(
  "users/getOneUser",
  async (_, thunkAPI) => {
    try {
      const response = await instanse.get("users/user");

      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
