import React, { useEffect, useState } from "react";

const IntervalCounter = () => {
  const [count, setcount] = useState(0);

  const Increment = () => {
    // setcount((prev) => prev + 1);
    // or
    setcount(count + 1);
  };

  useEffect(() => {
    const myInterVal = setInterval(() => {
      Increment();
    }, 1000);

    return () => {
      clearInterval(myInterVal);
    };
    //   }, []);
    // or
  }, [count]);

  return (
    <div className="flex justify-center items-center text-7xl font-bold">
      {count}
    </div>
  );
};

export default IntervalCounter;
