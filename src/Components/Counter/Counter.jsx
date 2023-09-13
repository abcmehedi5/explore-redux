import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../Redux/Features/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Select the value from the counter slice
  const dispatch = useDispatch();
  const handleReset = () => {
    count = " ";
  };
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1 id="count">Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment 5
      </button>
      <button onClick={() => dispatch(decrementByAmount(5))}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Counter;
