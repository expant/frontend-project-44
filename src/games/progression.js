import app from '../index.js';
import { getRandomNum, getRandomIndex } from '../utils.js';

const RULE = 'What number is missing in the progression?';
const DIFFERENCE_INTERVAL = [1, 10];
const LENGTH_INTERVAL = [5, 10];
const NUM_INTERVAL = [1, 100];

const hideItem = (numbers) => {
  const copiedNumbers = [...numbers];
  const index = getRandomIndex(copiedNumbers);

  copiedNumbers[index] = '..';

  return [copiedNumbers, numbers[index]];
};

const getProgression = () => {
  const progression = [];
  const length = getRandomNum(...LENGTH_INTERVAL);
  const difference = getRandomNum(...DIFFERENCE_INTERVAL);

  progression[0] = getRandomNum(...NUM_INTERVAL);

  for (let i = 0; i < length; i += 1) {
    const item = progression[i] + difference;
    progression.push(item);
  }

  return progression;
};

const getGameData = () => {
  const progression = getProgression();
  const [question, correctAnswer] = hideItem(progression);

  return [
    question.join(' '),
    String(correctAnswer),
  ];
};

export default () => app(RULE, getGameData);
