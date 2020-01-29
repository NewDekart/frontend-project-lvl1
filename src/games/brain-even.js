import { cons } from '@hexlet/pairs';
import random from '../tools/dekartTools';

export default () => {
  const delimeter = 2;
  const number = random(1000);
  const correctValue = number % delimeter === 0 ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};
