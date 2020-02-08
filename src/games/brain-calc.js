import { cons, car, cdr } from '@hexlet/pairs';
import random from '../tools/random';

const rules = 'What is the result of the expression?';
const possibleOperators = ['*', '+', '-'];

const getArrayRandElem = (array) => {
  const randIndex = random(0, array.length - 1);

  return array[randIndex];
};

const getExpr = (val1, val2) => {
  const operator = getArrayRandElem(possibleOperators);
  switch (operator) {
    case '*':
      return cons(operator, val1 * val2);
    case '+':
      return cons(operator, val1 + val2);
    case '-':
      return cons(operator, val1 - val2);
    default:
      return null;
  }
};

const game = () => {
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);
  const resultExpr = getExpr(firstNum, secondNum);
  const question = `${firstNum} ${car(resultExpr)} ${secondNum}`;
  const correctValue = cdr(resultExpr);

  return cons(question, String(correctValue));
};

export default () => cons(rules, game);
