import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "./operations";

const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    user: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const userReducer = userSlice.reducer;
