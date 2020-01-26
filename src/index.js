import readlineSync from 'readline-sync';
import random from 'lodash/random';

const getUserName = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!\n`);

  return askName;
};

export default () => {
  const uName = getUserName();
  const delimeter = 2;

  const question = (numOfQuest, correct, ans) => {
    if (!correct) {
      const wAns = ans === 'yes' ? 'no' : 'yes';
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${wAns}'.\nLet's try again, ${uName}!`);
      return;
    }
    if (numOfQuest > delimeter) {
      console.log(`Congratulations, ${uName}!`);
      return;
    }

    const number = random(1000);
    const correctValue = number % delimeter === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const isCorrect = correctValue === userAnswer;

    if (isCorrect) {
      console.log('Correct!');
    }

    question(numOfQuest + 1, isCorrect, userAnswer);
  };
  return question(0, true);
};
