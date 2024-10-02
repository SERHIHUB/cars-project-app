import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  passwordReset,
  passwordResetRequest,
  registerUser,
  verifyToken,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      // _id: null,
      // name: null,
      // email: null,
      //   token: null,
      // role: null,
      // thema: null,
      // owner: null,
      // verify: false,
      // verifyToken: null,
      // avatarURL: null,
    },
    status: null,
    token: null,
    thema: "light",
    isLoggedIn: false,
    isRefreshing: false,
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
        state.status = action.payload.status;
        console.log(state.status);
        console.log(action.payload);
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
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // console.log(action.payload.token);
        // console.log(state.token);
        // console.log(state.user);
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
      .addCase(passwordResetRequest.fulfilled, (state) => {
        console.log(state);
        console.log(action.payload);
      })
      .addCase(passwordReset.fulfilled, (state) => {
        console.log(state);
        // console.log(action.payload);
      })
      .addCase(verifyToken.fulfilled, (state) => {
        console.log(state);
        // console.log(action.payload);
      }),
});

export const authReducer = authSlice.reducer;
