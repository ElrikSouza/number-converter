import { useState } from "react";
import { toFloat } from "./convert-to-float";
import "./tofloat.css";

export function ToFloatPage() {
  const [floatNumber, setFloatNumber] = useState("");
  const [binNumber, setBinNumber] = useState({
    firstBit: "",
    expoent: "",
    significand: "",
  });

  const onChange = ({ target }) => {
    setFloatNumber(target.value);
  };

  return (
    <div>
      <input value={floatNumber} onChange={onChange} />
      <button onClick={() => setBinNumber(toFloat(floatNumber))}>
        Convert
      </button>
      <div className="result-iee754">
        <span className="firstBit">{binNumber.firstBit}</span>
        <span className="expoent">{binNumber.expoent}</span>
        <span className="significand">{binNumber.significand}</span>
      </div>
    </div>
  );
}
