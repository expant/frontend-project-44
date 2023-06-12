import readlineSync from 'readline-sync';
import welcome from './games/cli.js';

const MAX_NUMBER = 100;
const MAX_ROUNDS_COUNT = 3;

const printRule = (rule) => console.log(rule);
const printCongratulations = (username) => console.log(`Congratulations, ${username}!`);
const printCorrect = () => console.log('Correct!');
const printLoss = (username, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${username}!`);
};

const askQuestion = (question) => console.log(`Question: ${question}`);

const getUserAnswer = () => readlineSync.question('Your answer: ');

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const isUserWin = (username, getGameData) => {
  for (let round = 0; round < MAX_ROUNDS_COUNT; round += 1) {
    const [question, correctAnswer] = getGameData(MAX_NUMBER);
    askQuestion(question);

    const userAnswer = getUserAnswer();

    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      printLoss(username, userAnswer, correctAnswer);
      return false;
    }
    printCorrect();
  }

  return true;
};

export default (rule, getGameData) => {
  const username = welcome();
  printRule(rule);

  if (isUserWin(username, getGameData)) {
    printCongratulations(username);
  }
};
