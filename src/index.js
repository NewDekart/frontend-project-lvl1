import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const startGame = (gameDescription, getRoundInfo) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const startRound = (roundNum) => {
    const roundInfo = getRoundInfo();
    const userAnswer = readlineSync.question(`Question: ${car(roundInfo)}\nYour answer: `);
    const correctAnswer = cdr(roundInfo);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    if (roundNum === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    startRound(roundNum + 1);
  };

  return startRound(1);
};

export default startGame;
