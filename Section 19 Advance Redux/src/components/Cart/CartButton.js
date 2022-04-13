import React from "react";
import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const items = useSelector((state) => {
    return state.cartSlice.items;
  });
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
