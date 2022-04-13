import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = { items: [], totalAmount: 0, changed: false };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: defaultCartState,
  reducers: {
    addItem: (state, action) => {
      const i = state.items.findIndex(
        (item) => item.id === action?.payload?.id
      );
      if (i > -1) {
        state.items[i].quantity++;
      } else state?.items.push(action?.payload);
      state.totalAmount += action.payload.price;
      state.changed = true;
    },
    removeItem: (state, action) => {
      const i = state.items.findIndex((item) => item.id === action?.payload);
      if (i > -1) {
        state.totalAmount -= state.items[i]?.price;
        state.items[i].quantity - 1 <= 0
          ? state?.items.splice(i, 1)
          : (state.items[i].quantity -= 1);
      }
      state.changed = true;
    },
    replaceCart: (state, action) => {
      if (action.payload?.items && action.payload?.totalAmount) {
        state.totalAmount = action.payload?.totalAmount;
        state.items = action.payload?.items;
      } else {
        state = defaultCartState;
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
