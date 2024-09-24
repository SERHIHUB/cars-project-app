import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase((state) => {})
      .addCase((state, action) => {})
      .addCase((state) => {}),
});

export const carReducer = carSlice.reducer;
