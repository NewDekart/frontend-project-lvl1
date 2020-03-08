import { cons } from '@hexlet/pairs';
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
      return firstValue * secondValue;
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    default:
      return null;
  }
};

const getRoundInfo = () => {
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);
  const operator = getRandOperator(possibleOperators);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = getExpr(firstNum, secondNum, operator);

  return cons(question, String(correctAnswer));
};

export default () => (startGame(description, getRoundInfo));
