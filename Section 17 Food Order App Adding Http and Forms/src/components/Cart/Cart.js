import React, { useContext, useState, useEffect } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import useAxios from "../../hooks/useAxios";

const Cart = (props) => {
  const {
    loading: isCheckingOut,
    error,
    sendRequest: submitCartItems,
  } = useAxios();
  const cartCtx = useContext(CartContext);
  const { clearCart } = cartCtx;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [didCheckedOut, setDidCheckedOut] = useState();

  useEffect(() => {
    if (didCheckedOut && !error) {
      clearCart();
    }
  }, [didCheckedOut, error, clearCart]);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const orderClickHandler = () => {
    props.onShowCheckout(true);
  };
  const orderConfirmHandler = (userInfo) => {
    setDidCheckedOut(true);
    const fetchMenuRequestConfig = {
      method: "post",
      url: "orders.json",
      body: JSON.stringify({ user: userInfo, orderItems: cartCtx.items }),
    };
    submitCartItems(fetchMenuRequestConfig);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => {
            cartItemRemoveHandler(item.id);
          }}
          onAdd={() => {
            cartItemAddHandler(item.id);
          }}
        />
      ))}
    </ul>
  );
  const cartActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {props.showCheckoutForm && (
        <Checkout
          onConfirm={orderConfirmHandler}
          onCancel={props.onClose}
        ></Checkout>
      )}
      {!props.showCheckoutForm && cartActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  const didSubmitWithErrorContent = (
    <React.Fragment>
      <p>{"Something went wrong"}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isCheckingOut && !didCheckedOut && cartModalContent}
      {isCheckingOut && isSubmittingModalContent}
      {!isCheckingOut && didCheckedOut && error && didSubmitWithErrorContent}
      {!isCheckingOut && didCheckedOut && !error && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
