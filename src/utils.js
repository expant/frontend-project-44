export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomIndex = (collection) => Math.floor(Math.random() * collection.length);

export const getQuestionAndAnswer = (NUM_INTERVAL, isNumTo) => {
  const number = getRandomNum(...NUM_INTERVAL);

  const question = String(number);
  const correctAnswer = isNumTo(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};
