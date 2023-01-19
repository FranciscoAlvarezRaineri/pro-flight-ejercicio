import React from "react";

const Square = ({ selected, index }) => {
  return (
    <div
      id="square"
      className={selected == index ? "square" : "square unselected"}
    >
      <img src="assets/logo-pro-flight.png" alt="logo" className="logo"></img>
    </div>
  );
};

export default Square;
