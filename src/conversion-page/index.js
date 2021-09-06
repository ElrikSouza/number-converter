import React, { useState } from "react";
import { BaseAndValueInput } from "./baseandvalue";

export function Conversion() {
  const [originalNumber, setOriginalNumber] = useState("");
  const [targetNumber, setTargetNumber] = useState("");
  const [originBase, setOriginBase] = useState(10);
  const [targetBase, setTargetBase] = useState(2);

  return (
    <div>
      <BaseAndValueInput
        oppositeBase={targetBase}
        setOppositeNumber={setTargetNumber}
        ownNumber={originalNumber}
        setOwnNumber={setOriginalNumber}
        ownBase={originBase}
        setOwnBase={setOriginBase}
        name="Origin"
      />
      <BaseAndValueInput
        oppositeBase={originBase}
        setOppositeNumber={setOriginalNumber}
        ownNumber={targetNumber}
        setOwnNumber={setTargetNumber}
        ownBase={targetBase}
        setOwnBase={setTargetBase}
        name="Target"
      />
    </div>
  );
}
