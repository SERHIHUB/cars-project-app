import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./operations";

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
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const userReducer = userSlice.reducer;
