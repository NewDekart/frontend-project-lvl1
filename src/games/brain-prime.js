import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const startIteration = (rem) => {
    if (rem === num) return true;
    if (num % rem === 0) return false;

    return startIteration(rem + 1);
  };

  return startIteration(2);
};

const getRoundInfo = () => {
  const number = random(0, 100);
  const correctValue = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};

const gameInfo = cons(description, getRoundInfo);
export default () => (startGame(gameInfo));
