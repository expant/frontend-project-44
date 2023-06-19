import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const MAX_NUM = 100;

const getDivider = (num1, num2) => num1 % num2;

const getGcd = (nums) => {
  let [num1, num2] = nums;
  let divider = getDivider(num1, num2);

  while (divider) {
    num1 = num2;
    num2 = divider;
    divider = getDivider(num1, num2);
  }
  return num2;
};

const getGameData = () => {
  const num1 = getRandomNum(MAX_NUM);
  const num2 = getRandomNum(MAX_NUM);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd([num1, num2]));

  return [question, correctAnswer];
};

export default () => app(rule, getGameData);
