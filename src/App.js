import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { selectUiNotif, selectUiToggleCart } from "./features/cart/uiSlice";
import { Notification } from "./components/UI/Notification";
import {
  getData,
  cartInitialLanding,
  postData,
  selectCart,
  selectCartIsChanged,
} from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(selectUiToggleCart);
  const showNotification = useSelector(selectUiNotif);
  const cartData = useSelector(selectCart);
  const isChanged = useSelector(selectCartIsChanged);
  const initialLanding = useSelector(cartInitialLanding);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (initialLanding) {
      return;
    }

    if (isChanged) {
      dispatch(postData(cartData));
    }
  }, [cartData, isChanged, initialLanding, dispatch]);

  return (
    <Fragment>
      {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
