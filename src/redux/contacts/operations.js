import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanse } from "../auth/operations";
import toast from "react-hot-toast";

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
    const { contactId, body } = payload;
    console.log(contactId);
    console.log(body);
    try {
      const response = await instanse.patch(`contacts/${contactId}`, body);
      console.log(response.data);

      return response.data.data;
    } catch (error) {
      toast.error(error.status == 404 && "Контакт не знайдений!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkAPI) => {
    try {
      await instanse.delete(`contacts/${contactId}`);
    } catch (error) {
      toast.error(error.status == 404 && "Цього контакту вже не існує!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
