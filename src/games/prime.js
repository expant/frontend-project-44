import app from '../index.js';
import { getRandomNum } from '../utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const NUM_INTERVAL = [0, 10];

const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);

  for (let divider = 2; divider <= sqrtNum; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }

  return num > 1;
};

const getGameData = () => {
  const number = getRandomNum(...NUM_INTERVAL);

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => app(RULE, getGameData);
