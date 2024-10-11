import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";

export const createContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    console.log(body);
    try {
      const response = await instanse.post("contacts", body);

      console.log(response.data);

      return response.data;
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
      console.log(response.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
