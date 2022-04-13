import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartModalShown, setIsCartModalShown] = useState(false);
  const showCartHandler = () => {
    setIsCartModalShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider>
      {isCartModalShown && <Cart toggleCart={showCartHandler}></Cart>}
      <Header toggleCart={showCartHandler} />
      <main>
        <Foods></Foods>
      </main>
    </CartProvider>
  );
}

export default App;
