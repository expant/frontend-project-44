import app from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum) + 1;

const isNumWithoutRemainder = (num1, num2) => num1 % num2 === 0;

const isPrime = (initNum) => {
  for (let num = initNum; num > 2; num -= 1) {
    if (isNumWithoutRemainder(initNum, num - 1)) {
      return false;
    }
  }

  return true;
};

const getGameData = (maxNum) => {
  const num = getRandomNum(maxNum);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => app(rule, getGameData);
