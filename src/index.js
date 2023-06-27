import readlineSync from 'readline-sync';

const MAX_ROUNDS_COUNT = 3;

export default (RULE, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(RULE);

  for (let round = 0; round < MAX_ROUNDS_COUNT; round += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
