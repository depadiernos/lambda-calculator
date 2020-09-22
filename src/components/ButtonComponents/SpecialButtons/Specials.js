import React, { useState } from "react";
import SpecialButton from "./SpecialButton"
import { specials } from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialArr] = useState(specials)

  return (
    <div className="specials">
       {
        specialArr && specialArr.map((special, key)=>{
          return <SpecialButton key={key}>{special}</SpecialButton>
       })
       }
    </div>
  );
};

export default Specials