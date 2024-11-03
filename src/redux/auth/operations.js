import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instanse = axios.create({
  baseURL: "https://car-project-db.onrender.com/",
});

const setAuthHeader = (token) => {
  instanse.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instanse.defaults.headers.common["Authorization"] = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post("auth/register", credentials);

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
      
      setAuthHeader(response.data.data.token);
      
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instanse.post("auth/logout");
    
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const passwordResetRequest = createAsyncThunk(
  "auth/resetPasswordRequest",
  async (body, thunkAPI) => {
   
    try {
      const response = await instanse.post("auth/request-reset-password", body);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const passwordReset = createAsyncThunk(
  "auth/resetPassword",
  async (body, thunkAPI) => {
    
    try {
      const response = await instanse.post("auth/reset-password", body);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (token, thunkAPI) => {
    try {
      const response = await instanse.get(`auth/verify/${token}`, {
        params: {
          token: token,
        },
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);
    const response = await instanse.get(`users/current`);
   
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);

