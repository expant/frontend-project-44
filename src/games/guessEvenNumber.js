import app from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum);
const isEven = (num) => num % 2 === 0;

const defineNumbers = (maxNum) => {
  const randomNum = getRandomNum(maxNum);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [randomNum, correctAnswer];
};

export default () => app(rule, defineNumbers);
