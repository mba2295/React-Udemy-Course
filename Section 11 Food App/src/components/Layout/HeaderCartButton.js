import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cartContext.js";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isButtonBounced, setIsButtonBounced] = useState(false);
  const btnClasses = `${classes.button} ${isButtonBounced ? classes.bump : ""}`;
  const cartContext = useContext(CartContext);
  const total = cartContext?.items?.reduce((curentQuantity, item) => {
    return (curentQuantity += item.quantity);
  }, 0);

  useEffect(() => {
    if (cartContext?.items?.length === 0) {
      return;
    }
    setIsButtonBounced(true);
    const timer = setTimeout(() => {
      setIsButtonBounced(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default HeaderCartButton;
