import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleCart: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    setNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { showCart, setNotification } = uiSlice.actions;

export const selectUiToggleCart = (state) => state.ui.toggleCart;
export const selectUiNotif = (state) => state.ui.notification;

export default uiSlice.reducer;
