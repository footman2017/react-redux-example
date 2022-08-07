import classes from "./CartButton.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux/es/exports";
import { showCart } from "../../features/cart/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);

  const cartToggle = () => {
    dispatch(showCart());
  };

  return (
    <button className={classes.button} onClick={cartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
