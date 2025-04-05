import React from "react";
import "./keyboard.css";
import { PiBackspace, PiBackspaceThin } from "react-icons/pi";

function Keyboard({ input, setInput, onType }) {
  const handleButtonClick = (char) => {
    setInput(input + char);
    onType(char);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
    onType("");
  };

  return (
    <div
      id="keyboard"
      className="bg-[#e6e6e6] rounded-b-md w-[400px] h-[207px]"
    >
      <div className="my-[10px] justify-items-center">
        <button className="key" onClick={() => handleButtonClick("Q")}>
          Q
        </button>
        <button className="key" onClick={() => handleButtonClick("W")}>
          W
        </button>
        <button className="key" onClick={() => handleButtonClick("E")}>
          E
        </button>
        <button className="key" onClick={() => handleButtonClick("R")}>
          R
        </button>
        <button className="key" onClick={() => handleButtonClick("T")}>
          T
        </button>
        <button className="key" onClick={() => handleButtonClick("Y")}>
          Y
        </button>
        <button className="key" onClick={() => handleButtonClick("U")}>
          U
        </button>
        <button className="key" onClick={() => handleButtonClick("I")}>
          I
        </button>
        <button className="key" onClick={() => handleButtonClick("O")}>
          O
        </button>
        <button className="key" onClick={() => handleButtonClick("P")}>
          P
        </button>
      </div>
      <div className="my-[10px] justify-items-center ">
        <button className="key" onClick={() => handleButtonClick("A")}>
          A
        </button>
        <button className="key" onClick={() => handleButtonClick("S")}>
          S
        </button>
        <button className="key" onClick={() => handleButtonClick("D")}>
          D
        </button>
        <button className="key" onClick={() => handleButtonClick("F")}>
          F
        </button>
        <button className="key" onClick={() => handleButtonClick("G")}>
          G
        </button>
        <button className="key" onClick={() => handleButtonClick("H")}>
          H
        </button>
        <button className="key" onClick={() => handleButtonClick("J")}>
          J
        </button>
        <button className="key" onClick={() => handleButtonClick("K")}>
          K
        </button>
        <button className="key" onClick={() => handleButtonClick("L")}>
          L
        </button>
      </div>
      <div className="my-[10px] justify-items-center ">
        <button className="key" onClick={() => handleButtonClick("Z")}>
          Z
        </button>
        <button className="key" onClick={() => handleButtonClick("X")}>
          X
        </button>
        <button className="key" onClick={() => handleButtonClick("C")}>
          C
        </button>
        <button className="key" onClick={() => handleButtonClick("V")}>
          V
        </button>
        <button className="key" onClick={() => handleButtonClick("B")}>
          B
        </button>
        <button className="key" onClick={() => handleButtonClick("N")}>
          N
        </button>
        <button className="key" onClick={() => handleButtonClick("M")}>
          M
        </button>
        <button
          className="key-x flex items-center justify-center"
          onClick={handleBackspace}
        >
          <PiBackspace size={30} />
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
