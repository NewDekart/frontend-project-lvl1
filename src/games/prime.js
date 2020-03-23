import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import playGame from '..';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (rem) => {
    if (rem > num / 2) return true;
    if (num % rem === 0) return false;

    return iter(rem + 1);
  };

  return iter(2);
};

const getRoundData = () => {
  const question = random(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question.toString(), correctAnswer);
};

export default () => playGame(description, getRoundData);
