import readlineSync from 'readline-sync';
import welcome from './cli.js';

const getUserAnswer = (randomNumber, correctAnswer) => {
  console.log(`Question: ${randomNumber}`);
  return [
    readlineSync.question('Your answer: '),
    correctAnswer,
  ];
};

const defineNumber = (maxNumber) => {
  const randomNumber = Math.floor(Math.random() * maxNumber);
  return [
    randomNumber,
    randomNumber % 2 === 0 ? 'yes' : 'no',
  ];
};

export default () => {
  const name = welcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxNumber = 100;

  for (let index = 0; index < 3; index += 1) {
    const [randomNumber, correctAnswer] = defineNumber(maxNumber);
    const userAnswer = getUserAnswer(randomNumber, correctAnswer);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
