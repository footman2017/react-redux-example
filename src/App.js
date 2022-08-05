import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectToggleCart } from "./features/cart/cartSlice";

function App() {
  const showCart = useSelector(selectToggleCart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
