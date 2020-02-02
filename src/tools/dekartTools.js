export const random = (a, b) => {
  const min = b ? a : 0;
  const max = b || a;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const gcd = (divinded, delimiter) => {
  if (delimiter === 0) return divinded;

  const newDelimeter = divinded % delimiter;

  return gcd(delimiter, newDelimeter);
};

export const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (rem) => {
    if (rem === num) return true;
    if (num % rem === 0) return false;

    return iter(rem + 1);
  };

  return iter(2);
};
