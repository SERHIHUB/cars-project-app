import { createSlice } from "@reduxjs/toolkit";
import {
  createCar,
  deleteCar,
  fetchCars,
  getOneCar,
  updateCar,
} from "./operations";
import toast from "react-hot-toast";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    item: {},
    paginationInfo: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createCar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload.data);
      })
      .addCase(createCar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload.cars;
        state.paginationInfo = action.payload.paginationInformation;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getOneCar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOneCar.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getOneCar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateCar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.loading = false;
        const carIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (carIndex === -1) {
          toast.error("Автомобіль не знайдено!");
          return;
        }

        state.items[carIndex] = action.payload;
      })
      .addCase(updateCar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.loading = false;

        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(deleteCar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const carReducer = carSlice.reducer;
