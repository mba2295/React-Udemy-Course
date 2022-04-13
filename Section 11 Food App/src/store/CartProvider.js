import React, { useReducer } from "react";
import CartContext from "./cartContext.js";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDITEM": {
      const stateCopy = { ...state };
      const i = stateCopy?.items.findIndex(
        (item) => item.id === action?.value?.id
      );
      if (i > -1) {
        stateCopy.items[i].quantity += 1;
      } else stateCopy?.items.push(action?.value);
      stateCopy.totalAmount += action.value.quantity * action.value.price;
      return stateCopy;
    }
    case "REMOVEITEM": {
      const stateCopy = { ...state };
      const i = stateCopy?.items.findIndex((item) => item.id === action?.value);
      stateCopy.totalAmount -= stateCopy?.items[i]?.price;
      if (i > -1) {
        stateCopy?.items[i].quantity - 1 <= 0
          ? stateCopy?.items.splice(i, 1)
          : (stateCopy.items[i].quantity -= 1);
      }
      return stateCopy;
    }
    default: {
      return defaultCartState;
    }
  }
};
const defaultCartState = { items: [], totalAmount: 0 };
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addCartItemHandler = (item) => {
    dispatchCart({ type: "ADDITEM", value: item });
  };
  const removeCartItemHandler = (id) => {
    dispatchCart({ type: "REMOVEITEM", value: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
