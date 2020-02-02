import { cons } from '@hexlet/pairs';
import random from '../tools/dekartTools';

const game = () => {
  const delimeter = 2;
  const number = random(1000);
  const correctValue = number % delimeter === 0 ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return cons(rules, game);
};
