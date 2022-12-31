import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("rendering button", children);
  return (
    <button className="border p-1 px-4 m-2" onClick={handleClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
