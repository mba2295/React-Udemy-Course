import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";
import uiSliceReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    productSlice: productSliceReducer,
    cartSlice: cartSliceReducer,
    uiSlice: uiSliceReducer,
  },
});

export default store;
