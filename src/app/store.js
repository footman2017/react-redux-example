import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import counterReducer from "../features/counter/counterSlice";
import uiReducer from "../features/cart/uiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer, //namanya bebas
    ui: uiReducer,
  },
});
