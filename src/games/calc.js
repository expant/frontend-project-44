import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'What is the result of the expression?';

const NUM_INTERVAL = [1, 10];

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNum(operators.length) - 1];
};

const calculate = (expression) => {
  const [operand1, operator, operand2] = expression;

  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: return null;
  }
};

const getGameData = () => {
  const operand1 = getRandomNum(...NUM_INTERVAL);
  const operand2 = getRandomNum(...NUM_INTERVAL);
  const operator = getOperator();
  const expression = [operand1, operator, operand2];

  const question = expression.join(' ');
  const correctAnswer = String(calculate(expression));

  return [question, correctAnswer];
};

export default () => app(rule, getGameData);
