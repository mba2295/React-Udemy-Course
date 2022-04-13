import { useEffect, useState } from "react";

const useCounter = (counterFunc) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => counterFunc(prevCounter));
    }, 1000);

    return () => clearInterval(interval);
  }, [counterFunc]);
  return counter;
};
export default useCounter;
