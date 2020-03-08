import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const delimeter = 2;

const isEven = (value) => (value % delimeter === 0);

const getRoundInfo = () => {
  const question = random(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question.toString(), correctAnswer);
};

export default () => (startGame(description, getRoundInfo));
