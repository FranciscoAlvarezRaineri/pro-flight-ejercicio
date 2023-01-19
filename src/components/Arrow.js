import React from "react";

const Arrow = ({ direction, handleClick }) => {
  return (
    <div>
      <button className="circle" onClick={() => handleClick(direction)}>
        <img
          src="assets/arrow.png"
          alt="arrow"
          className={direction == "right" ? "arrow direction_right" : "arrow"}
        ></img>
      </button>
    </div>
  );
};

export default Arrow;
