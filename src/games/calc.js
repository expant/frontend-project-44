import app from '../index.js';
import { getRandomNum, getRandomIndex } from '../utils.js';

const RULE = 'What is the result of the expression?';

const NUM_INTERVAL = [1, 10];
const OPERATORS = ['+', '-', '*'];

const calculate = (operand1, operator, operand2) => {
  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getGameData = () => {
  const operand1 = getRandomNum(...NUM_INTERVAL);
  const operand2 = getRandomNum(...NUM_INTERVAL);
  const operator = OPERATORS[getRandomIndex(OPERATORS)];

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculate(operand1, operator, operand2));

  return [question, correctAnswer];
};

export default () => app(RULE, getGameData);
