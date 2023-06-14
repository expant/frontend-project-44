import app from '../index.js';

const rule = 'What number is missing in the progression?';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_DIFFERENCE = 10;

const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum) + 1;

const hideItem = (numbers) => {
  const copiedNumbers = [...numbers];
  const index = getRandomNum(copiedNumbers.length - 1);

  copiedNumbers[index] = '..';

  return [copiedNumbers, numbers[index]];
};

const getProgression = (maxNum) => {
  const progression = [];
  const difference = getRandomNum(MAX_PROGRESSION_DIFFERENCE);
  const progressionLength = difference + MIN_PROGRESSION_LENGTH;

  progression[0] = getRandomNum(maxNum);

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = progression[i] + difference;
    progression.push(progressionItem);
  }

  return progression;
};

const getGameData = (maxNum) => {
  const progression = getProgression(maxNum);
  const [progressionWithHiddenItem, hiddenItem] = hideItem(progression);

  return [
    progressionWithHiddenItem.join(' '),
    String(hiddenItem),
  ];
};

export default () => app(rule, getGameData);
