import app from '../index.js';

const rule = 'What is the result of the expression?';

const getRandomValue = (maxNum) => Math.floor(Math.random() * maxNum);

const getOperator = () => { 
  const operators = ['+', '-', '*'];
  return operators[getRandomValue(operators.length)];
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
  const operand1 = getRandomValue(maxNum);
  const operand2 = getRandomValue(maxNum);
  const operator = getOperator();
  const expression = [operand1, operator, operand2];

  const resultCalc = String(calculate(expression));
  const expressionStr = expression.join(' ');

  return [expressionStr, resultCalc];
};

export default () => app(rule, getGameData);
