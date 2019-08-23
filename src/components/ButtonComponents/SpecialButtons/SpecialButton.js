import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
};

export default SpecialButton