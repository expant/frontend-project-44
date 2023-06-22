import app from '../index.js';
import { getData } from '../utils.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const NUM_INTERVAL = [1, 100];

const isEven = (num) => num % 2 === 0;

const getGameData = () => getData(NUM_INTERVAL, isEven);

export default () => app(RULE, getGameData);
