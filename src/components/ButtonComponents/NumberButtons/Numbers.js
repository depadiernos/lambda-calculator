import React, { useState } from "react";
import NumberButton from "./NumberButton"
import { numbers } from "../../../data"

const Numbers = (props) => {
  const [numberArr] = useState(numbers)

  return (
    <div className="numbers">
      {
        numberArr && numberArr.map((number) => {
          return <NumberButton key={number} value={number} >{number}</NumberButton>

        })
      }
    </div>
  );
};

export default Numbers