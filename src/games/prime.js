import app from '../index.js';
import { getRandomNum } from '../utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const NUM_INTERVAL = [0, 10];

const isPrime = (num) => {
  if (num < 2) return false;

  const checkLimit = Math.sqrt(num);
  for (let divider = 2; divider <= checkLimit; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const number = getRandomNum(...NUM_INTERVAL);

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => app(RULE, getGameData);
