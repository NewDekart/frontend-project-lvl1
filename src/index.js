import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const startGame = (gameInfo) => {
  console.log('Welcome to the Brain Games!');
  const maxRounds = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameDescription = car(gameInfo);
  console.log(gameDescription);

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

export default startGame;
