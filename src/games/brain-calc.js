import { cons, car, cdr } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'What is the result of the expression?';
const possibleOperators = ['*', '+', '-'];

const getRandOperator = (operators) => {
  const randIndex = random(0, operators.length - 1);
  return operators[randIndex];
};

const getExpr = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '*':
      return cons(operator, firstValue * secondValue);
    case '+':
      return cons(operator, firstValue + secondValue);
    case '-':
      return cons(operator, firstValue - secondValue);
    default:
      return null;
  }
};

const getRoundInfo = () => {
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);
  const operator = getRandOperator(possibleOperators);
  const resultExpr = getExpr(firstNum, secondNum, operator);
  const question = `${firstNum} ${car(resultExpr)} ${secondNum}`;
  const correctValue = cdr(resultExpr);

  return cons(question, String(correctValue));
};

const gameInfo = cons(description, getRoundInfo);
export default () => (startGame(gameInfo));
