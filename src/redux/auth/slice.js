import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  passwordReset,
  passwordResetRequest,
  refreshUser,
  registerUser,
  verifyToken,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    status: null,
    token: null,
    thema: "light",
    isLoggedIn: false,
    isRefreshing: false,
    // requestResetStatus: null,
    resetStatus: null,
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
        state.isLoggedIn = false;
        state.status = null;
        state.resetStatus = null;
      })
      .addCase(passwordResetRequest.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(passwordResetRequest.fulfilled, (state, action) => {
        state.requestResetStatus = action.payload.status;
      })
      .addCase(passwordResetRequest.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(passwordReset.fulfilled, (state) => {
        // console.log(state);
        // console.log(action.payload);
      })
      .addCase(verifyToken.fulfilled, (state) => {
        // console.log(state);
        // console.log(action.payload);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data;
      }),
});

export const authReducer = authSlice.reducer;
