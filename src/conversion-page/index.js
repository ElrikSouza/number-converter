import React, { useState } from "react";
import { convertBases } from "../utils/conversion";
import { SelectBase } from "./select-base";

export function Conversion() {
  const [originalNumber, setOriginalNumber] = useState("");
  const onChangeOriginalNumber = ({ target }) => {
    setOriginalNumber(target.value);
    const convertedNumber = convertBases(target.value, originBase, targetBase);
    setTargetNumber(convertedNumber);
  };

  const [targetNumber, setTargetNumber] = useState("");
  const onChangeTargetNumber = ({ target }) => {
    setTargetNumber(target.value);
    const convertedNumber = convertBases(target.value, targetBase, originBase);
    setOriginalNumber(convertedNumber);
  };

  const [originBase, setOriginBase] = useState(10);

  const onChangeOrigin = ({ target }) => {
    setOriginalNumber(convertBases(originalNumber, originBase, target.value));
    setOriginBase(target.value);
  };

  const [targetBase, setTargetBase] = useState(2);
  const onChangeTarget = ({ target }) => {
    setTargetNumber(convertBases(targetNumber, targetBase, target.value));
    setTargetBase(target.value);
  };

  return (
    <div>
      <div>
        <div>{originBase}</div>
        <SelectBase currentBase={originBase} onChange={onChangeOrigin} />
        <div>{targetBase}</div>
        <SelectBase currentBase={targetBase} onChange={onChangeTarget} />
      </div>
      <div>
        <div>Original</div>
        <input value={originalNumber} onChange={onChangeOriginalNumber} />

        <div>Target</div>
        <input value={targetNumber} onChange={onChangeTargetNumber} />
      </div>
    </div>
  );
}
