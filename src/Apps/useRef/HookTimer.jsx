import React, { useEffect, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  // basic
  //   useEffect(() => {
  //     const myInterval = setInterval(() => {
  //       setTimer((pre) => pre + 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(myInterval);
  //     };
  //   }, []);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <div>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Interval
        </button>
      </div>
    </div>
  );
};

export default HookTimer;
