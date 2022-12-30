import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const initialState2 = 0;

const reducer2 = (state, action) => {
  switch (action) {
    case "increment2":
      return state + 1;
    case "decrement2":
      return state - 1;
    case "reset2":
      return initialState2;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer2, initialState2);
  return (
    <div>
      {" "}
      <div>Count : {count}</div>
      <div>Count2 : {count2}</div>
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
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button className="border p-1 px-4 m-2" onClick={() => dispatch2("reset2")}>
        Reset2
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch2("increment2")}
      >
        Increment2
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch2("decrement2")}
      >
        Decrement2
      </button>
    </div>
  );
};

export default CounterThree;
