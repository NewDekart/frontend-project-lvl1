import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import startGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const fillProgression = (step, length) => {
  const addElem = (progression, i) => {
    if (i === length) return progression;
    const elem = i === 0 ? random(1, 100) : step * i + progression[0];
    progression.push(elem);

    return addElem(progression, i + 1);
  };

  return addElem([], 0);
};

const getRoundInfo = () => {
  const progressionStep = random(1, 100);
  const positionToHide = random(0, progressionLength - 1);

  const progression = fillProgression(progressionStep, progressionLength);
  const correctAnswer = progression[positionToHide];
  const question = progression.map((elem, iter) => (iter === positionToHide ? '..' : elem)).join(' ');

  return cons(question, String(correctAnswer));
};

export default () => (startGame(description, getRoundInfo));
