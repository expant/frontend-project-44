import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const name = getName();
  console.log(`Hello, ${name}`);
};

export default welcome;
