import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button className={props.value === "0"? "number-zero": null}>{props.children}</button>
    </>
  );
};

export default NumberButton