import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";
import toast from "react-hot-toast";

// export const getCurrentUser = createAsyncThunk(
//   "users/getOneUser",
//   async (id, thunkAPI) => {
//     try {
//       const response = await instanse.get(`users/current/${id}`);

//       return response.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
export const getCurrentUser = createAsyncThunk(
  "users/getOneUser",
  async (_, thunkAPI) => {
    try {
      const response = await instanse.get(`users/current`);

      return response.data.data;
    } catch (error) {
      toast.error(error.status == 404 && "Цей користувач не знайдений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "users/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await instanse.get("users/");

      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async ({ userId, body }, thunkAPI) => {
    try {
      const response = await instanse.patch(`users/${userId}`, body);

      // console.log(response.data);
      return response.data.data;
    } catch (error) {
      toast.error(error.status == 404 && "Цей користувач не знайдений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (userId, thunkAPI) => {
    try {
      const response = await instanse.delete(`users/${userId}`);
    } catch (error) {
      toast.error(error.status == 404 && "Цей користувач не знайдений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
