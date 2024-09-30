import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instanse = axios.create({
  baseURL: "https://car-project-db.onrender.com/",
});

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await instanse.post("auth/register", credentials);

      // деструктурувати credentials, взяти email та password
      // const response = await instanse.post("auth/login", credentials);
      // setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post("auth/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (id, thunkAPI) => {
  try {
    await instanse.post("auth/logout", id);
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const passwordResetRequest = createAsyncThunk(
  "auth/resetPasswordRequest",
  async (userEmail, thunkAPI) => {
    try {
      const response = await instanse.post(
        "auth/request-reset-password",
        userEmail
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const passwordReset = createAsyncThunk(
  "auth/resetPassword",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post(
        "auth/request-reset-password",
        credentials
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (confirmToken, thunkAPI) => {
    try {
      const response = await instanse.post(`auth/verify/${confirmToken}`, {
        params: {
          token: confirmToken,
        },
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
