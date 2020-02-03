import { cons } from '@hexlet/pairs';
import { random } from '../tools/dekartTools';

const game = () => {
  const lengthOfProgr = 10;
  const stepOfProgr = random(100);
  const firstElem = random(100);
  const positionToHide = random(lengthOfProgr - 1);
  const correctValue = stepOfProgr * positionToHide + firstElem;
  const elemToShowFirst = positionToHide === 0 ? '..' : firstElem;

  const arrayFill = (array, i, previousElem) => {
    if (array.length === lengthOfProgr) return array;

    const nextElem = previousElem + stepOfProgr;

    if (i === positionToHide) {
      array.push('..');
    } else {
      array.push(nextElem);
    }

    return arrayFill(array, i + 1, nextElem);
  };

  const question = arrayFill([elemToShowFirst], 1, firstElem).join(' ');

  return cons(question, String(correctValue));
};

export default () => {
  const rules = 'What number is missing in the progression?';
  return cons(rules, game);
};
