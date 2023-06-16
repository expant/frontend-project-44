import app from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'What is the result of the expression?';

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

const getGameData = (maxNum) => {
  const operand1 = getRandomNum(maxNum);
  const operand2 = getRandomNum(maxNum);
  const operator = getOperator();
  const expression = [operand1, operator, operand2];

  const resultCalc = String(calculate(expression));
  const expressionStr = expression.join(' ');

  return [expressionStr, resultCalc];
};

export default () => app(rule, getGameData);
