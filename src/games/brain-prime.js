import { cons } from '@hexlet/pairs';
import random from '../tools/random';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (rem) => {
    if (rem === num) return true;
    if (num % rem === 0) return false;

    return iter(rem + 1);
  };

  return iter(2);
};

const game = () => {
  const number = random(0, 100);
  const correctValue = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};

export default () => cons(rules, game);
