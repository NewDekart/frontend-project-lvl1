import { cons } from '@hexlet/pairs';
import random from '../tools/random';

const rules = 'What number is missing in the progression?';

const game = () => {
  const lengthOfProgr = 10;
  const stepOfProgr = random(1, 100);
  const firstElem = random(0, 100);
  const positionToHide = random(lengthOfProgr - 1);
  const correctValue = stepOfProgr * positionToHide + firstElem;
  const elemToShowFirst = positionToHide === 0 ? '..' : firstElem;

  const arrayFill = (array, i) => {
    if (array.length === lengthOfProgr) return array;

    const nextElem = stepOfProgr * i + firstElem;

    if (i === positionToHide) {
      array.push('..');
    } else {
      array.push(nextElem);
    }

    return arrayFill(array, i + 1);
  };

  const question = arrayFill([elemToShowFirst], 1).join(' ');

  return cons(question, String(correctValue));
};

export default () => cons(rules, game);
