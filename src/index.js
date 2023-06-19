import readlineSync from 'readline-sync';

const MAX_ROUNDS_COUNT = 3;

const getUsername = () => readlineSync.question('May I have your name? ');
const getUserAnswer = () => readlineSync.question('Your answer: ');

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

export default (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const username = getUsername();
  console.log(`Hello, ${username}`);

  console.log(rule);

  for (let round = 0; round < MAX_ROUNDS_COUNT; round += 1) {
    const [question, correctAnswer] = getGameData();

    console.log(`Question: ${question}`);

    const userAnswer = getUserAnswer();

    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
