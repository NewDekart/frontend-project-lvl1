import { cons } from '@hexlet/pairs';
import { random, gcd } from '../tools/dekartTools';

const game = () => {
  const firstNum = random(100);
  const secondNum = random(100);
  const origDiv = Math.max(firstNum, secondNum);
  const origDel = Math.min(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;

  const correctValue = gcd(origDiv, origDel);

  return cons(question, String(correctValue));
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  return cons(rules, game);
};
