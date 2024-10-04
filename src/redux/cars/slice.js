import { createSlice } from "@reduxjs/toolkit";
import {
  createCar,
  deleteCar,
  fetchCars,
  getOneCar,
  updateCar,
} from "./operations";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    item: null,
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
        state.items.push(action.payload);
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
        state.items = action.payload;
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
          (item) => item.id === action.payload._id
        );
        if (carIndex === -1) {
          // Додати тост
          console.log("Car was not found!!!");
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
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteCar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const carReducer = carSlice.reducer;
