import React, { useState, useMemo } from "react";

const MemoCounter = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const incremetOne = () => {
    setcounterOne(counterOne + 1);
  };
  const incremetTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log(":Called");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div>
        <button className="border p-1 px-4 m-2" onClick={incremetOne}>
          {" "}
          Count One - {counterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button className="border p-1 px-4 m-2" onClick={incremetTwo}>
          {" "}
          Count Two - {counterTwo}{" "}
        </button>
      </div>
    </div>
  );
};

export default MemoCounter;
