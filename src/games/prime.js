import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MAX_NUM = 100;

const isNumWithoutRemainder = (num1, num2) => num1 % num2 === 0;

const isPrime = (initialNum) => {
  for (let num = initialNum; num > 2; num -= 1) {
    if (isNumWithoutRemainder(initialNum, num - 1)) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = getRandomNum(MAX_NUM);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => app(rule, getGameData);
