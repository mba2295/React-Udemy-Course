import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { getCartItems, postCartItems } from "./store/slices/cartActions";

let isInitialLoad = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cartSlice;
  });
  const showCart = useSelector((state) => {
    return state.uiSlice.showCart;
  });
  const notification = useSelector((state) => {
    return state.uiSlice.notification;
  });
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }
    if (cart.changed) {
      dispatch(postCartItems(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification.showNotification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {cart.items.length > 0 && showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
