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
  let count = useSelector((state) => state.counter.value); // Select the value from the counter slice
  const dispatch = useDispatch();

  return (
    <div className="flex gap-10 flex-col ">
      <button
        className="bg-orange-500 p-3 rounded text-white text-2xl "
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <h1 className="bg-gray-400 text-2xl text-white p-10 ">Count: {count}</h1>
      <button
        className="bg-orange-500 p-3 rounded text-white text-2xl "
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-orange-500 p-3 rounded text-white text-2xl "
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment 5
      </button>
      <button
        className="bg-orange-500 p-3 rounded text-white text-2xl "
        onClick={() => dispatch(decrementByAmount(5))}
      >
        Decrement by 5
      </button>
      <button
        className="bg-red-500 p-3 rounded text-white text-2xl "
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
