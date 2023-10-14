import React, { useState } from "react";

function check(num , callback) {
  if (num > 0) {
    callback(num-1);
  }

}

const IncreamentDecreament = () => {
  let [num, setNum] = useState(0);

  return (
    <div className="stateBasics">
      <p className="display1">Display1 : {num}</p>

      <button type="button" onClick={() => setNum(num + 1)}>
        Increament
      </button>
      <button
        type="button"
        onClick={() => (check(num , setNum))}
      >
        Decreament
      </button>
      <button type="button" onClick={() => setNum(0)}>
        RESET
      </button>
    </div>
  );
};

export default IncreamentDecreament;
