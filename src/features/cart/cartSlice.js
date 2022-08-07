import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setNotification } from "./uiSlice";

const initialState = {
  dataCart: [],
  isChanged: false,
  initialLanding: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.isChanged = true;
      const item = state.dataCart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      } else {
        state.dataCart.push(action.payload);
      }
    },
    decreaseQuantity: (state, action) => {
      state.isChanged = true;
      const index = state.dataCart.findIndex(function (item) {
        return item.id === action.payload;
      });

      state.dataCart[index].quantity--;

      if (state.dataCart[index].quantity === 0) {
        state.dataCart.splice(index, 1);
      }
    },
    getInitialCart: (state, action) => {
      state.dataCart = action.payload || [];
      state.initialLanding = false;
    },
  },
});

//thunk
export const postData = (cartData) => async (dispatch) => {
  dispatch(
    setNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending cart data!",
    })
  );

  try {
    await axios.put(
      "https://learn-react-19fd6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        ...cartData,
      }
    );
    dispatch(
      setNotification({
        status: "success",
        title: "Success",
        message: "Success sending data!",
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      setNotification({
        status: "error",
        title: "Error",
        message: "Error sending data!",
      })
    );
  }
};

export const getData = () => async (dispatch) => {
  dispatch(
    setNotification({
      status: "pending",
      title: "Getting...",
      message: "Getting cart data!",
    })
  );

  try {
    const res = await axios(
      "https://learn-react-19fd6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
    );
    dispatch(getInitialCart(res.data));
    dispatch(
      setNotification({
        status: "success",
        title: "Success",
        message: "Success getting data!",
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      setNotification({
        status: "error",
        title: "Error",
        message: "Error getting data!",
      })
    );
  }
};

export const { addProduct, decreaseQuantity, showCart, getInitialCart } =
  cartSlice.actions;
export const selectCart = (state) => state.cart.dataCart;
export const selectCartIsChanged = (state) => state.cart.isChanged;
export const cartInitialLanding = (state) => state.cart.initialLanding;
export default cartSlice.reducer;
