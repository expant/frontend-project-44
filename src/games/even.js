import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const MAX_NUM = 100;

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(MAX_NUM);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => app(rule, getGameData);
