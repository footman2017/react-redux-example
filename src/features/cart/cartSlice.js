import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCart: [],
  toggleCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = state.dataCart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      } else {
        state.dataCart.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.dataCart.find(
        (cartItem) => cartItem.id === action.payload
      );
      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const index = state.dataCart.findIndex(function (item) {
        return item.id === action.payload;
      });

      state.dataCart[index].quantity--;

      if (state.dataCart[index].quantity === 0) {
        state.dataCart.splice(index, 1);
      }
    },
    showCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, showCart } =
  cartSlice.actions;

export const selectCart = (state) => state.cartSad.dataCart;
export const selectToggleCart = (state) => state.cartSad.toggleCart;

const cartReducer = cartSlice.reducer;
export default cartReducer;
