export const range = (start, end) => {
  let currentValue = start;

  return Array(end - start)
    .fill(0)
    .map((_) => currentValue++);
};
