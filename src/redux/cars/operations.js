import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";
import toast from "react-hot-toast";

export const createCar = createAsyncThunk(
  "cars/create",
  async (body, thunkAPI) => {
    try {
      const response = await instanse.post("cars", body);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCars = createAsyncThunk(
  "cars/fetchAllCars",
  async ({ page, perPage }, thunkAPI) => {
    try {
      const response = await instanse.get("cars", {
        params: {
          page,
          perPage,
        },
      });
      // console.log(response.data.data);

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
      // console.log(response.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ========== працює оплата ===============================================
// export const updateCar = createAsyncThunk(
//   "cars/editCar",
//   async ({ carId, body }, thunkAPI) => {
//     console.log(body);
//     try {
//       const response = await instanse.patch(`cars/${carId}`, body);
//       console.log(response.data);

//       return response.data.data;
//     } catch (error) {
//       toast.error(error.status == 409 && "Цей автомобіль оплачений!");
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// =========================================================================

export const updateCar = createAsyncThunk(
  "cars/editCar",
  async ({ carId, body }, thunkAPI) => {
    try {
      const response = await instanse.patch(`cars/${carId}`, body);

      return response.data.data;
    } catch (error) {
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
      console.log(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
