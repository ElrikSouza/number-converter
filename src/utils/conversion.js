const logx = (number, base) => {
  return Math.log(number) / Math.log(base);
};

const valueToDigit = (value) => {
  if (value <= 9) {
    return value.toString();
  }

  return String.fromCharCode(value - 10 + "A".charCodeAt(0));
};

const getDigits = (number, targetBase) => {
  const numOfDigits = Math.ceil(logx(number, targetBase));
  const digits = Array(numOfDigits);
  let digitsIndex = numOfDigits - 1;

  while (number !== 0) {
    digits[digitsIndex] = valueToDigit(number % targetBase);
    number = Number.parseInt(number / targetBase);
    digitsIndex -= 1;
  }

  return digits;
};

export const convertBases = (numberString, originBase, targetBase) => {
  let number = Number.parseInt(numberString, originBase);

  if (targetBase === 10) {
    return number.toString();
  }

  const digits = getDigits(number, targetBase);

  return digits.join("");
};
