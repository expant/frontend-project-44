import readlineSync from 'readline-sync';
import welcome from './cli.js';

const defineNumber = (maxNumber) => {
  const randomNumber = Math.floor(Math.random() * maxNumber);
  const isEven = randomNumber % 2 === 0
    ? 'yes' : 'no';

  return [randomNumber, isEven];
};

const guessEvenNumber = () => {
  const name = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxNumber = 100;

  for (let index = 0; index < 3; index += 1) {
    const [randomNumber, isEven] = defineNumber(maxNumber);

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEven !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default guessEvenNumber;
