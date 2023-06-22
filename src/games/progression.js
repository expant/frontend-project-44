import app from '../index.js';
import getRandomNum from '../utils.js';

const RULE = 'What number is missing in the progression?';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_DIFFERENCE = 10;
const NUM_INTERVAL = [1, 100];

const hideItem = (numbers) => {
  const copiedNumbers = [...numbers];
  //const index = getRandomNum(copiedNumbers.length - 1);

  copiedNumbers[index] = '..';

  return [copiedNumbers, numbers[index]];
};

const getProgression = () => {
  const progression = [];
  const progressionLength = getRandomNum(MIN_PROGRESSION_LENGTH) + MIN_PROGRESSION_LENGTH;
  const difference = getRandomNum(MAX_PROGRESSION_DIFFERENCE);

  progression[0] = getRandomNum(...NUM_INTERVAL);

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = progression[i] + difference;
    progression.push(progressionItem);
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
