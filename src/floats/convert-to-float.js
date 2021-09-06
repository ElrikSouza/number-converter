import { getDigits } from "../utils/conversion";

const intDecimalSplit = (number) => {
  const numberString = number + "";
  const [intPart, decimalPart] = numberString.split(".");

  const intPartInt = Number.parseInt(intPart);
  const decimalPartFloat = Number.parseFloat(`0.${decimalPart}`);

  return [intPartInt, decimalPartFloat];
};

const getDecimalPartBin = (number, availableBits) => {
  let decimalPart = number;
  let bitCounter = 0;
  let intPart = 0;
  const digits = [];

  while (decimalPart !== 0 && bitCounter < availableBits) {
    [intPart, decimalPart] = intDecimalSplit(decimalPart * 2);
    digits.push(intPart);
    bitCounter++;
  }

  return digits.join("");
};

const splitFloatString = (floatString) => {
  const isNegative = floatString.charAt(0) === "-";
  const firstBit = isNegative ? 1 : 0;

  if (isNegative) {
    return [...intDecimalSplit(floatString.slice(1)), firstBit];
  } else {
    return [...intDecimalSplit(floatString), firstBit];
  }
};

const formatExpoent = (expoent) => {
  return getDigits(expoent + 127, 2)
    .join("")
    .padStart(8, "0");
};

export const toFloat = (numberString) => {
  const formattedNumberString = numberString.replace(",", ".");
  const [intPartNum, decimalPartNum, firstBit] = splitFloatString(
    formattedNumberString
  );

  let decimalPartBin, intPartBin, expoent;

  if (intPartNum === 0) {
    intPartBin = "";
    const rawDecimalPartBin = getDecimalPartBin(decimalPartNum, 23);
    const firstOneBitIndex = rawDecimalPartBin.indexOf(1);
    expoent = formatExpoent(-firstOneBitIndex - 1);
    decimalPartBin = rawDecimalPartBin.slice(firstOneBitIndex + 1);
  } else {
    intPartBin = getDigits(intPartNum, 2).join("").slice(1);
    expoent = formatExpoent(intPartBin.length);
    decimalPartBin = getDecimalPartBin(decimalPartNum, 23 - intPartBin.length);
  }

  return {
    firstBit,
    expoent,
    significand: `${intPartBin}${decimalPartBin}`.padEnd(23, "0"),
  };
};
