import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem.js";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalPrice = `$${cartContext.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartContext?.items.length === 0;
  const onAddCartItem = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };
  const onRemoveCartItem = (id) => {
    cartContext.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext?.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          onAdd={onAddCartItem.bind(null, item)}
          onRemove={onRemoveCartItem.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.toggleCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.toggleCart}>
          Close
        </button>
        {!isCartEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
