import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decremet":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {" "}
      Count : {count}
      <button className="border p-1 px-4 m-2" onClick={() => dispatch("reset")}>
        Reset
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch("decremet")}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterOne;
