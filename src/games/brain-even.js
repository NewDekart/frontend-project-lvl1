import { cons } from '@hexlet/pairs';
import random from '../tools/random';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const delimeter = 2;
  const number = random(0, 100);
  const correctValue = number % delimeter === 0 ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};

export default () => cons(rules, game);
