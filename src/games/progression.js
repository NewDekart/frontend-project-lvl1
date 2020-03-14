import { cons } from '@hexlet/pairs';
import random from '../tools/random';
import playGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (step, length, firstElem) => {
  const addElem = (progression, i) => {
    if (i === length) return progression;
    const elem = i === 0 ? firstElem : step * i + firstElem;
    progression.push(elem);

    return addElem(progression, i + 1);
  };

  return addElem([], 0);
};

const getRoundData = () => {
  const progressionStep = random(1, 100);
  const progressionFirstElem = random(1, 100);
  const hiddenElementPosition = random(0, progressionLength - 1);

  const progression = generateProgression(progressionStep, progressionLength, progressionFirstElem);
  const correctAnswer = progression[hiddenElementPosition];
  const question = progression.map((elem, iter) => (iter === hiddenElementPosition ? '..' : elem)).join(' ');

  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getRoundData);
