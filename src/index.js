import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const getUserName = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);

  return askName;
};

export default (gameInfo) => {
  console.log('Welcome to the Brain Games!');
  const maxRounds = 3;
  const uName = getUserName();
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
