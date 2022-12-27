import React, { useState } from "react";

const Counter = () => {
  const initialState = 0;

  const [count, setCount] = useState(initialState);

  const incrementByFiveWrong = () => {
    for (let index = 0; index < 5; index++) {
      setCount(count + 1);
    }
  };
  const incrementByFiveRight = () => {
    for (let index = 0; index < 5; index++) {
      setCount((preval) => preval + 1);
    }
  };

  return (
    <div>
      Count : {count}
      <button
        className="border p-1 px-4 m-2"
        onClick={() => setCount(initialState)}
      >
        Reset
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="border p-1 px-4 m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button className="border p-1 px-4 m-2" onClick={incrementByFiveWrong}>
        Increment Five Incorrect
      </button>
      <button className="border p-1 px-4 m-2" onClick={incrementByFiveRight}>
        Increment Five Correct
      </button>
    </div>
  );
};

export default Counter;
