import app from '../index.js';
import { getRandomNum, getRandomIndex } from '../utils.js';

const RULE = 'What number is missing in the progression?';
const DIFFERENCE_INTERVAL = [1, 10];
const LENGTH_INTERVAL = [5, 10];
const NUM_INTERVAL = [1, 100];

const getProgression = (length, difference, firstNum) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    if (!progression.length) {
      progression.push(firstNum);
    }
    progression.push(progression[i] + difference);
  }

  return progression;
};

const getGameData = () => {
  const length = getRandomNum(...LENGTH_INTERVAL);
  const difference = getRandomNum(...DIFFERENCE_INTERVAL);
  const firstNum = getRandomNum(...NUM_INTERVAL);
  const progression = getProgression(length, difference, firstNum);

  const index = getRandomIndex(progression);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => app(RULE, getGameData);
