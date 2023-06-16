import readlineSync from 'readline-sync';
import welcome from './games/cli.js';

const MAX_NUMBER = 100;
const MAX_ROUNDS_COUNT = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const isUserWin = (username, getGameData) => {
  for (let round = 0; round < MAX_ROUNDS_COUNT; round += 1) {
    const [question, correctAnswer] = getGameData(MAX_NUMBER);

    console.log(`Question: ${question}`);

    const userAnswer = getUserAnswer();

    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!`);

      return false;
    }
    console.log('Correct!');
  }

  return true;
};

export default (rule, getGameData) => {
  const username = welcome();
  console.log(rule);

  if (isUserWin(username, getGameData)) {
    console.log(`Congratulations, ${username}!`);
  }
};
