import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterSliceActions } from "../store/slices/counterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counterSlice.counter);
  const showCounter = useSelector((state) => state.counterSlice.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggleCounter());
  };
  const incrementCounterHandler = () => {
    dispatch(counterSliceActions.increment(5));
  };
  const decrementCounterHandler = () => {
    dispatch(counterSliceActions.decrement(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
      </div>
    </main>
  );
};

export default Counter;
