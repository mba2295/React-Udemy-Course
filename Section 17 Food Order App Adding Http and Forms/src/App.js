import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const showCheckoutHandler = (isCheckoutMode) => {
    setIsCheckoutMode(isCheckoutMode);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart
          showCheckoutForm={isCheckoutMode}
          onShowCheckout={showCheckoutHandler}
          onClose={hideCartHandler}
        />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
