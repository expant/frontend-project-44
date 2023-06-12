import app from '../index.js';

const rule = 'What number is missing in the progression?';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_DIFFERENCE = 10;

const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum) + 1;

const hideItem = (arr) => {
  const newArr = [...arr];
  const index = getRandomNum(newArr.length - 1);

  newArr[index] = '..';

  return [newArr, arr[index]];
};

const getProgression = (maxNum) => {
  const progression = [];
  const progressionLength = getRandomNum(MIN_PROGRESSION_LENGTH) + MIN_PROGRESSION_LENGTH;
  const difference = getRandomNum(MAX_PROGRESSION_DIFFERENCE);

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
