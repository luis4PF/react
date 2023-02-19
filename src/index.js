import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState("");
  const calcBtns = [];
  
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="calculadora">
      <br></br>
      <p className="calc">
        CALCULADORA
      </p>
      {" "}
      <div className="result"><a className="value">{input}</a></div>
      <br></br>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button className="clear" onClick={() => setInput(input.substr(0, input.length - 1))}>
          C
        </button>

        {/* clear all */}
        <button className="ac" onClick={() => setInput("")} value="">
          AC
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="/" >
          {" "}
          ÷
        </button>
        <button className="equal"
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes("·")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          {" "}
          ×
        </button>

      
        {/* "=" btn */}
        
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
