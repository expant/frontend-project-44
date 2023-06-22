import app from '../index.js';
import { getQuestionAndAnswer } from '../utils.js';

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

const getGameData = () => getQuestionAndAnswer(NUM_INTERVAL, isPrime);

export default () => app(RULE, getGameData);
