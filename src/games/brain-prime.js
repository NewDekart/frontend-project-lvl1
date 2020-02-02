import { cons } from '@hexlet/pairs';
import { random, isPrime } from '../tools/dekartTools';

const game = () => {
  const number = random(100);
  const correctValue = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};

export default () => {
  const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';
  return cons(rules, game);
};
