import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      var index = state.findIndex(function (item) {
        return item.id === action.payload;
      });

      state[index].quantity--;

      if (state[index].quantity === 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const selectCart = (state) => state.cartSad;

const cartReducer = cartSlice.reducer;
export default cartReducer;
