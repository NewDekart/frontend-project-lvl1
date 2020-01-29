import readlineSync from 'readline-sync';
import { car, cdr, cons } from '@hexlet/pairs';
import evenGame from './games/brain-even';
import calcGame from './games/brain-calc';
import gcdGame from './games/brain-gcd';

const chooseGame = (name) => {
  switch (name) {
    case 'brain-calc':
      return cons('What is the result of the expression?', calcGame);
    case 'brain-gcd':
      return cons('Find the greatest common divisor of given numbers.', gcdGame);
    default:
      return cons('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
  }
};

const getUserName = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);

  return askName;
};

export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  const maxRounds = 3;
  const uName = getUserName();
  const gameInfo = chooseGame(gameName);
  const gameRules = car(gameInfo);
  console.log(gameRules);

  const question = (numOfQuest, correct = 'yes', ans = 'yes') => {
    if (correct !== ans) {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${uName}!`);
      return;
    }
    if (numOfQuest > 1) {
      console.log('Correct!');
    }
    if (numOfQuest > maxRounds) {
      console.log(`Congratulations, ${uName}!`);
      return;
    }
    const game = cdr(gameInfo);
    const resInfo = game();
    const userAnswer = readlineSync.question(`Question: ${car(resInfo)}\nYour answer: `);

    question(numOfQuest + 1, cdr(resInfo), userAnswer);
  };
  return question(1);
};
