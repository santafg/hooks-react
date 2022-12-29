import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-bold">
      <div>Count First : {count.firstCounter}</div>{" "}
      <div>Count Second : {count.secondCounter}</div>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "increment2", value: 1 })}
      >
        Increment 2
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "decrement2", value: 1 })}
      >
        Decrement 2
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment Five
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decrement Five
      </button>
    </div>
  );
};

export default CounterTwo;
