import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = (maxNum) => {
  const randomNum = getRandomNum(maxNum);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [randomNum, correctAnswer];
};

export default () => app(rule, getGameData);
