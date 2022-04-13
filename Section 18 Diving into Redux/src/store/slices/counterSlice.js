import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterSliceActions = counterSlice.actions;
export default counterSlice;
