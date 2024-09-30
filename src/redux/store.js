import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { carReducer } from "./cars/slice";
import { contactReducer } from "./contacts/slice";
import { userReducer } from "./users/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    contacts: contactReducer,
    users: userReducer,
  },
});
