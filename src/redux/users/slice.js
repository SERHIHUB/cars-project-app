import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  fetchUsers,
  getCurrentUser,
  updateUser,
} from "./operations";
import toast from "react-hot-toast";

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
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;

        // console.log(action.payload);
        // console.log(state.items);
        const userIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (userIndex === -1) {
          toast.error("Користувача не знайдено!(slice-55)");
          return;
        }

        state.items[userIndex] = action.payload;
        state.user = action.payload;
        // console.log(state.user);
        // console.log(state.items);
      })
      .addCase(updateUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const userReducer = userSlice.reducer;
