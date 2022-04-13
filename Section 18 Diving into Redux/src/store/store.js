import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import counterSliceReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSliceReducer,
    authSlice: authSliceReducer,
  },
});

export default store;
