import React from "react";
import "./styles.css";
import { evaluate, exp } from "mathjs";

export default function App() {
  const handleClick = function (el) {
    const newExpression = expression.toString() + el;
    setExpression(newExpression);
  };

  const calculate = function () {
    try {
      const result = evaluate(expression);
      setExpression(result);
    } catch {
      setExpression("");
    }
  };

  const clear = function () {
    setExpression("");
  };

  const [expression, setExpression] = React.useState("");

  return (
    <>
      <div className="screen">{expression}</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+", "-", "*", "/"].map((el) => (
        <button key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}
      <button key="=" onClick={() => calculate()}>
        =
      </button>

      <button key="clear" onClick={() => clear()}>
        c
      </button>
    </>
  );
}
