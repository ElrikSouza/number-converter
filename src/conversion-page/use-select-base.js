import { useState } from "react";
import { convertBases } from "../utils/conversion";

export const useSelectBase = (
  currentNumber,
  setCurrentNumber,
  defaultBase = 2
) => {
  const [currentBase, setCurrentBase] = useState(defaultBase);

  const onChangeBase = ({ target }) => {
    const { value: newBase } = target;

    if (currentNumber !== "") {
      const convertedNumber = convertBases(currentNumber, currentBase, newBase);
      setCurrentNumber(convertedNumber);
    }

    setCurrentBase(newBase);
  };

  return { currentBase, setCurrentBase, onChangeBase };
};
