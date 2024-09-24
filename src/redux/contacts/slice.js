import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
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

export const contactReducer = contactSlice.reducer;
