import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstValue, secondValue) => {
  const divinded = Math.max(firstValue, secondValue);
  const delimiter = Math.min(firstValue, secondValue);

  if (delimiter === 0) return divinded;

  const newDelimeter = divinded % delimiter;

  return getGCD(delimiter, newDelimeter);
};

const getRoundInfo = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGCD(firstNum, secondNum);

  return cons(question, String(correctAnswer));
};

export default () => (startGame(description, getRoundInfo));
