import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import playGame from '..';

const description = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const calculateExpression = (firstValue, secondValue, operator) => {
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

const getRoundData = () => {
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);
  const operator = operators[random(0, operators.length - 1)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = calculateExpression(firstNum, secondNum, operator);

  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getRoundData);
