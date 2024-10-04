import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";

export const createCar = createAsyncThunk(
  "cars/create",
  async (body, thunkAPI) => {
    try {
      const response = await instanse.post("cars", body);
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (_, thunkAPI) => {
    try {
      const allCars = await instanse.get("cars");
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneCar = createAsyncThunk(
  "cars/oneCar",
  async (id, thunkAPI) => {
    try {
      const response = await instanse.get(`cars/${id}`);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCar = createAsyncThunk(
  "cars/editCar",
  async (body, thunkAPI) => {
    console.log(body);
  }
);

export const deleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (id, thunkAPI) => {
    try {
      const response = await instanse.delete(`cars/${id}`);
      console.log(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
