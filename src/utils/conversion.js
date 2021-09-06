const valueToDigit = (value) => {
  if (value <= 9) {
    return value.toString();
  }

  return String.fromCharCode(value - 10 + "A".charCodeAt(0));
};

export const getDigits = (number, targetBase) => {
  const digits = [];

  while (number !== 0) {
    digits.push(valueToDigit(number % targetBase));
    number = Number.parseInt(number / targetBase);
  }

  return digits.reverse();
};

export const convertBases = (numberString, originBase, targetBase) => {
  let number = Number.parseInt(numberString, originBase);

  if (Number.isNaN(number)) {
    alert("This is not a valid number");
    return;
  }

  if (targetBase === 10) {
    return number.toString();
  }

  if (number === 0) {
    return "0";
  }

  const digits = getDigits(number, targetBase);

  return digits.join("");
};
