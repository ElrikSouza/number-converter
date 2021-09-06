import { convertBases } from "../utils/conversion";
import { SelectBase } from "./select-base";

const useBaseSelection = (ownNumber, setOwnNumber, ownBase, setOwnBase) => {
  const onChangeBase = ({ target }) => {
    const { value: newBase } = target;

    if (ownNumber !== "") {
      const convertedNumber = convertBases(ownNumber, ownBase, newBase);
      setOwnNumber(convertedNumber);
    }

    setOwnBase(newBase);
  };

  return { onChangeBase };
};

const useNumberInput = (
  setOwnNumber,
  setOppositeNumber,
  ownBase,
  oppositeBase
) => {
  const onChange = ({ target }) => {
    setOwnNumber(target.value);
    if (target.value !== "") {
      const convertedNumber = convertBases(target.value, ownBase, oppositeBase);
      setOppositeNumber(convertedNumber);
    }
  };

  return { onChange };
};

export function BaseAndValueInput({
  oppositeBase,
  setOppositeNumber,
  ownNumber,
  setOwnNumber,
  ownBase,
  setOwnBase,
  name,
}) {
  const { onChangeBase: onChangeOwnBase } = useBaseSelection(
    ownNumber,
    setOwnNumber,
    ownBase,
    setOwnBase
  );

  const { onChange: onChangeOwnNumber } = useNumberInput(
    setOwnNumber,
    setOppositeNumber,
    ownBase,
    oppositeBase
  );

  return (
    <div>
      <div>{name}</div>
      <SelectBase currentBase={ownBase} onChange={onChangeOwnBase} />
      <input
        value={ownNumber}
        onChange={onChangeOwnNumber}
        selected={ownNumber}
      />
    </div>
  );
}
