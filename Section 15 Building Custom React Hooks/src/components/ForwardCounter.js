import React, { useCallback } from "react";
import Card from "./Card";
import useCounter from "../hooks/useCounter";

const ForwardCounter = () => {
  const counterCallback = useCallback((counter) => {
    return counter + 1;
  }, []);
  const counter = useCounter(counterCallback);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
