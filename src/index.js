import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';
import brainGcd from './games/brain-gcd';
import brainPrime from './games/brain-prime';
import brainProgression from './games/brain-progression';

const commonGameProcess = (gameInfo) => {
  console.log('Welcome to the Brain Games!');
  const maxRounds = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameRules = car(gameInfo);
  console.log(gameRules);

  const question = (numOfQuest, correct = 'yes', ans = 'yes') => {
    if (correct !== ans) {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (numOfQuest > 1) {
      console.log('Correct!');
    }
    if (numOfQuest > maxRounds) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const game = cdr(gameInfo);
    const resInfo = game();
    const userAnswer = readlineSync.question(`Question: ${car(resInfo)}\nYour answer: `);

    question(numOfQuest + 1, cdr(resInfo), userAnswer);
  };
  return question(1);
};

const gameConstructor = (game) => () => commonGameProcess(game());

export const startBrainCalc = gameConstructor(brainCalc);
export const startBrainEven = gameConstructor(brainEven);
export const startBrainGcd = gameConstructor(brainGcd);
export const startBrainPrime = gameConstructor(brainPrime);
export const startBrainProgression = gameConstructor(brainProgression);
