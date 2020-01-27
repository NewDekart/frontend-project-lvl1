import random from 'lodash/random';
import { cons } from '@hexlet/pairs';

export default () => {
  const delimeter = 2;
  const number = random(1000);
  const correctValue = number % delimeter === 0 ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};
