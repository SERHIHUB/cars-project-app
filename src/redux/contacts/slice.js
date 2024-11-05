import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  fetchContacts,
  createContact,
  updateContact,
  deleteContact,
} from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      // .addCase(fetchContacts.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      // .addCase(fetchContacts.rejected, (state) => {
      //   state.loading = false;
      //   state.error = true;
      // })
      // .addCase(createContact.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      // .addCase(createContact.rejected, (state) => {
      //   state.loading = false;
      //   state.error = true;
      // })
      // .addCase(updateContact.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;

        const contactIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        if (contactIndex === -1) {
          return toast.error("Contact not found.", { duration: 2000 });
        }
        state.items[contactIndex] = action.payload;
      })
      // .addCase(updateContact.rejected, (state) => {
      //   state.loading = false;
      //   state.error = true;
      // })
      // .addCase(deleteContact.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      })
      // .addCase(deleteContact.rejected, (state) => {
      //   state.loading = false;
      //   state.error = true;
      // })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          createContact.pending,
          updateContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          createContact.rejected,
          updateContact.rejected,
          deleteContact.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      ),
});

export const contactReducer = contactSlice.reducer;
