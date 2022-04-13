import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
