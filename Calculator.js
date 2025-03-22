import React from "react";

function Calculator({ numbers, setNumberType, average, loading, error }) {
  return (
    <div className="calculator">
      
      <div className="screen">
        {loading ? "Loading..." : error ? error : numbers.join(", ") || "0"}
      </div>


      <div className="buttons">
        <button onClick={() => setNumberType("p")}>Prime</button>
        <button onClick={() => setNumberType("f")}>Fibonacci</button>
        <button onClick={() => setNumberType("e")}>Even</button>
        <button onClick={() => setNumberType("r")}>Random</button>
      </div>

     
      <div className="average">
        <h3>Average: {average}</h3>
      </div>
    </div>
  );
}

export default Calculator;
