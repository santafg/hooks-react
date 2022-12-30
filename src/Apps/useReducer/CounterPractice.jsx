import React, { useReducer } from "react";

const initialState = {
  countVal: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, countVal: action.payload + state.countVal };

    default:
      return initialState;
  }
};

const CounterPractice = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count : {count.countVal}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
    </div>
  );
};

export default CounterPractice;
