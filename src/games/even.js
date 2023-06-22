import app from '../index.js';
import { getRandomNum } from '../utils.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const NUM_INTERVAL = [1, 100];

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(...NUM_INTERVAL);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => app(RULE, getGameData);
