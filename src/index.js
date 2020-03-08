import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const startGame = (gameDescription, getRoundInfo) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const startRound = (roundNum, correct = 'yes', ans = 'yes') => {
    if (correct !== ans) {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (roundNum > 1) {
      console.log('Correct!');
    }
    if (roundNum > roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const roundInfo = getRoundInfo();
    const userAnswer = readlineSync.question(`Question: ${car(roundInfo)}\nYour answer: `);

    startRound(roundNum + 1, cdr(roundInfo), userAnswer);
  };
  return startRound(1);
};

export default startGame;
