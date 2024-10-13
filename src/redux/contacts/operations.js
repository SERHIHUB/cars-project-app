import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";

export const createContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await instanse.post("contacts", body);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await instanse.get("contacts");

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/edit",
  async (payload, thunkAPI) => {
    try {
      const response = await instanse.patch("contacts", payload);
      console.log(response.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
