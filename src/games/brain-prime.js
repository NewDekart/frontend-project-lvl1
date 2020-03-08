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
  const question = random(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question.toString(), correctAnswer);
};

export default () => (startGame(description, getRoundInfo));
