import launchGame from '../gameEngine';
import { getRandomNumber, getRandomNumberIncluding0 } from '../getRandomNumber';

const ruleForGame = 'What is the result of the expression?';

const getRandomMathSign = () => {
  const signNumber = getRandomNumberIncluding0(3);
  switch (signNumber) {
    case 0:
      return '-';
    case 1:
      return '+';
    default:
      return '*';
  }
};

const createLogicOfGame = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const mathSign = getRandomMathSign();
  const question = `${firstNumber} ${mathSign} ${secondNumber}`;
  let correctAnswer = '';
  switch (mathSign) {
    case '-':
      correctAnswer = String(firstNumber - secondNumber);
      break;
    case '+':
      correctAnswer = String(firstNumber + secondNumber);
      break;
    case '*':
      correctAnswer = String(firstNumber * secondNumber);
      break;
    default:
      correctAnswer = 'Something bad has happened... Do not panic!';
  }
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(ruleForGame, createLogicOfGame);
};
