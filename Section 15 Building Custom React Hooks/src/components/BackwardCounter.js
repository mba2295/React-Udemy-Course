import React, { useCallback } from "react";
import useCounter from "../hooks/useCounter";

import Card from "./Card";

const BackwardCounter = () => {
  const counterCallback = useCallback((counter) => {
    return counter - 1;
  }, []);
  const counter = useCounter(counterCallback);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
