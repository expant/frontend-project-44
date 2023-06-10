import app from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum);

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

const getGameData = (maxNum) => {
  const num1 = getRandomNum(maxNum);
  const num2 = getRandomNum(maxNum);
  const expression = `${num1} ${num2}`;
  const gcd = String(getGcd([num1, num2]));

  return [expression, gcd];
};

export default () => app(rule, getGameData);
