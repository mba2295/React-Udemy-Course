import React, { useContext } from "react";
import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../../store/cartContext.js";

const FoodItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAddCartItem = (enteredQuantity) => {
    console.log(enteredQuantity);
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: enteredQuantity,
    });
  };
  return (
    <li className={classes.food}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodItemForm
          id={props.id}
          onAddCartItem={onAddCartItem}
        ></FoodItemForm>
      </div>
    </li>
  );
};

export default FoodItem;
