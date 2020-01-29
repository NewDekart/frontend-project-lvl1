import { cons } from '@hexlet/pairs';
import random from '../tools/dekartTools';

export default () => {
  const firstNum = random(100);
  const secondNum = random(100);
  const origDiv = Math.max(firstNum, secondNum);
  const origDel = Math.min(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;

  const iter = (divinded, delimiter) => {
    if (delimiter === 0) return divinded;

    const newDelimeter = divinded % delimiter;

    return iter(delimiter, newDelimeter);
  };

  const correctValue = iter(origDiv, origDel);

  return cons(question, correctValue);
};
