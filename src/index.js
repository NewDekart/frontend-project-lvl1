import readlineSync from 'readline-sync';

export default () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);
};
