import { cons } from '@hexlet/pairs';
import random from '../tools/random';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (firstValue, secondValue) => {
  const divinded = Math.max(firstValue, secondValue);
  const delimiter = Math.min(firstValue, secondValue);

  if (delimiter === 0) return divinded;

  const newDelimeter = divinded % delimiter;

  return gcd(delimiter, newDelimeter);
};

const game = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;

  const correctValue = gcd(firstNum, secondNum);

  return cons(question, String(correctValue));
};

export default () => cons(rules, game);
