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
    const { email, password } = credentials;
    try {
      console.log("response");
      const response = await instanse.post("auth/register", credentials);

      // деструктурувати credentials, взяти email та password
      // const response = await instanse.post("auth/login", { email, password });
      // setAuthHeader(response.data.data.token);
      console.log(response);

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
      // setAuthHeader(response.data.data.token);
      setAuthHeader(response.data.data.token);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instanse.post("auth/logout");
    // setAuthHeader(response.data.data.token);
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

      return response.data;
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

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);
    const response = await instanse.get(`/users/current`);
    // console.log(response.data);
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
