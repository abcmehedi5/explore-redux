import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Select the value from the counter slice
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
