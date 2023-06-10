import readlineSync from 'readline-sync';

const printWelcome = () => console.log('Welcome to the Brain Games!');
const printHello = (name) => console.log(`Hello, ${name}`);

const getName = () => readlineSync.question('May I have your name? ');

const welcome = () => {
  printWelcome();

  const name = getName();

  printHello(name);

  return name;
};

export default welcome;
