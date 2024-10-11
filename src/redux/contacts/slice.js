import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, createContact } from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;

        console.log(action.payload);
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;

        console.log(action.payload);
        state.items = state.items.push(action.payload);
      })
      .addCase(createContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const contactReducer = contactSlice.reducer;
