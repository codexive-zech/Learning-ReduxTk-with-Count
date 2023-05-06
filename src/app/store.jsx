import { configureStore } from "@reduxjs/toolkit";

// importing the count slice reducer function
import countReducer from "../features/countSlice";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
