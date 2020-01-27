import random from 'lodash/random';
import { cons, car, cdr } from '@hexlet/pairs';

const getExpr = (val1, val2) => {
  const operatorNum = random(2);
  switch (operatorNum) {
    case 0:
      return cons('*', String(val1 * val2));
    case 1:
      return cons('+', String(val1 + val2));
    default:
      return cons('-', String(val1 - val2));
  }
};

export default () => {
  const firstNum = random(100);
  const secondNum = random(100);
  const resultExpr = getExpr(firstNum, secondNum);
  const question = `${firstNum} ${car(resultExpr)} ${secondNum}`;
  const correctValue = cdr(resultExpr);

  return cons(question, correctValue);
};
