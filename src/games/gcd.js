import app from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum);

const getGameData = (maxNum) => {
	const num1 = getRandomNum(maxNum);
	const num2 = getRandomNum(maxNum);

	
};

export default () => app(rule, getGameData);