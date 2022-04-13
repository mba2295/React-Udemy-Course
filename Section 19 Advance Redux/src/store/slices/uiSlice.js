import { createSlice } from "@reduxjs/toolkit";

const defaultUIState = {
  showCart: false,
  notification: { showNotification: false },
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: defaultUIState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    showNotification: (state, action) => {
      state.notification.showNotification = true;
      state.notification.status = action.payload.status;
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
    },
    hideNotification(state) {
      state.notification = defaultUIState.notification;
    },
  },
});
export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
