import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const delimeter = 2;

const isEven = (value) => (value % delimeter === 0);

const getRoundInfo = () => {
  const number = random(0, 100);
  const correctValue = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, correctValue);
};

const gameInfo = cons(description, getRoundInfo);
export default () => (startGame(gameInfo));
