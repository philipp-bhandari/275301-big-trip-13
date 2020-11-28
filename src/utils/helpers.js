export const getRandomInteger = (start = 0, end = 1) => {
  const lower = Math.ceil(Math.min(start, end));
  const upper = Math.floor(Math.max(start, end));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
