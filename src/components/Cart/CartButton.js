import classes from "./CartButton.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCart } from "../../features/cart/cartSlice";

const CartButton = (props) => {
  const cartItems = useSelector(selectCart);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
