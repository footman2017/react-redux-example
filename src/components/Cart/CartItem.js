import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux/es/exports";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../features/cart/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props.item;

  const decreaseHandler = () => {
    dispatch(decreaseQuantity(id));
  };

  const increaseHandler = () => {
    dispatch(increaseQuantity(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
