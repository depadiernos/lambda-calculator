import React, { useState } from "react";
import OperatorButton from "./OperatorButton"
import { operators } from "../../../data"

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorArr] = useState(operators)

  return (
    <div className="operators">
       {
        operatorArr && operatorArr.map((operator, key)=>{
          return <OperatorButton key={key} value={operator.value}>{operator.char}</OperatorButton>
       })
       }
    </div>
  );
};

export default Operators