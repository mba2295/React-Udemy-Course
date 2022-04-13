import React, { useRef, useState } from "react";

import Input from "../../UI/Input.js";
import classes from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const quantityRef = useRef();
  const [isQuantityValid, setIsQuantityValid] = useState(true);
  const onAddClickHandler = (e) => {
    e.preventDefault();
    const quantity = +quantityRef?.current?.value;
    if (quantity <= 0 || quantity > 5) {
      setIsQuantityValid(false);
      return;
    } else {
      setIsQuantityValid(true);
      props.onAddCartItem(+quantityRef?.current?.value);
    }
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          ref: quantityRef,
        }}
      />
      <button onClick={onAddClickHandler}>+ Add</button>
      {!isQuantityValid && <p>Please enter a valid quantity between 1 to 5</p>}
    </form>
  );
};

export default FoodItemForm;
