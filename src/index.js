import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const playGame = (gameDescription, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  let isGameEnd = false;

  const playRound = (roundNum) => {
    if (isGameEnd) return undefined;

    const roundInfo = getRoundData();
    console.log(`Question: ${car(roundInfo)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(roundInfo);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      isGameEnd = true;
    }

    console.log('Correct!');

    if (roundNum === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      isGameEnd = true;
    }

    return playRound(roundNum + 1);
  };

  return playRound(1);
};

export default playGame;
