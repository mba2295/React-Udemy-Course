import { useState } from "react";

export const useInput = (validateFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  const enteredValueIsValid = validateFunc(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };
  const resetInput = (event) => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    hasError: valueInputIsInvalid,
    isValid: enteredValueIsValid,
    onInputChange: valueInputChangeHandler,
    onInputBlur: valueInputBlurHandler,
    resetInput,
  };
};
