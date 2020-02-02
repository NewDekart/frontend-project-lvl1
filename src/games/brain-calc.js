import { cons, car, cdr } from '@hexlet/pairs';
import { random } from '../tools/dekartTools';

const getExpr = (val1, val2) => {
  const operatorNum = random(2);
  switch (operatorNum) {
    case 0:
      return cons('*', val1 * val2);
    case 1:
      return cons('+', val1 + val2);
    default:
      return cons('-', val1 - val2);
  }
};

const game = () => {
  const firstNum = random(100);
  const secondNum = random(100);
  const resultExpr = getExpr(firstNum, secondNum);
  const question = `${firstNum} ${car(resultExpr)} ${secondNum}`;
  const correctValue = cdr(resultExpr);

  return cons(question, String(correctValue));
};

export default () => {
  const rules = 'What is the result of the expression?';
  return cons(rules, game);
};
