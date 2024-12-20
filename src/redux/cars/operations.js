import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";
import toast from "react-hot-toast";

export const createCar = createAsyncThunk(
  "cars/create",
  async (body, thunkAPI) => {
    try {
      const response = await instanse.post("cars", body);

      return response.data;
    } catch (error) {
      toast.error(
        error.status == 409 && "Автомобіль з таким номером вже існує!"
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCars = createAsyncThunk(
  "cars/fetchAllCars",
  async ({ page, perPage, paid }, thunkAPI) => {
    try {
      const response = await instanse.get("cars", {
        params: {
          page,
          perPage,
          paid,
        },
      });

      return response.data.data;
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

      return response.data.data;
    } catch (error) {
      toast.error(error.status == 404 && "Автомобіль не знайдений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCar = createAsyncThunk(
  "cars/editCar",
  async ({ carId, body }, thunkAPI) => {
    try {
      const response = await instanse.patch(`cars/${carId}`, body);

      return response.data.data;
    } catch (error) {
      toast.error(error.status == 404 && "Автомобіль не знайдений!");
      toast.error(error.status == 409 && "Цей автомобіль оплачений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (carId, thunkAPI) => {
    try {
      const response = await instanse.delete(`cars/${carId}`);

      return response.data.data;
    } catch (error) {
      toast.error(error.status == 404 && "Автомобіль не знайдений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
