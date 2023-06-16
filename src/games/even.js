import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = (maxNum) => {
  const question = getRandomNum(maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => app(rule, getGameData);
