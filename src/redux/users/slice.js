import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    // user: {
    //   _id: null,
    //   name: null,
    //   email: null,
    //   token: null,
    //   role: null,
    //   thema: null,
    //   owner: null,
    //   verify: false,
    //   verifyToken: null,
    //   avatarURL: null,
    // }
    loading: false,
    error: false,
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addCase((state) => {})
  //     .addCase((state, action) => {
  //       console.log(action.payload);
  //     })
  //     .addCase((state) => {}),
});

export const userReducer = userSlice.reducer;
