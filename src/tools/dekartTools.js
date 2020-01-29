export default (a, b) => {
  const min = b ? a : 0;
  const max = b || a;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
