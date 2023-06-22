import app from '../index.js';
import { getRandomNum } from '../utils.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const NUM_INTERVAL = [1, 100];

const getGcd = (x, y) => {
  if (x % y === 0) {
    return y;
  }

  return getGcd(y, x % y);
};

const getGameData = () => {
  const num1 = getRandomNum(...NUM_INTERVAL);
  const num2 = getRandomNum(...NUM_INTERVAL);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => app(RULE, getGameData);
