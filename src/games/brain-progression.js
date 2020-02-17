import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'What number is missing in the progression?';
const lengthOfProgr = 10;

const getRoundInfo = () => {
  const stepOfProgr = random(1, 100);
  const firstElem = random(0, 100);
  const positionToHide = random(lengthOfProgr - 1);
  const correctValue = stepOfProgr * positionToHide + firstElem;
  const elemToShowFirst = positionToHide === 0 ? '..' : firstElem;

  const fillProgression = (elements, i) => {
    if (elements.length === lengthOfProgr) return elements;

    const nextElem = stepOfProgr * i + firstElem;

    if (i === positionToHide) {
      elements.push('..');
    } else {
      elements.push(nextElem);
    }

    return fillProgression(elements, i + 1);
  };

  const question = fillProgression([elemToShowFirst], 1).join(' ');

  return cons(question, String(correctValue));
};

const gameInfo = cons(description, getRoundInfo);
export default () => (startGame(gameInfo));
