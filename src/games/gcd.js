import launchGame from '../gameEngine';
import { getRandomNumber } from '../getRandomNumber';

const ruleForGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const createLogicOfGameGcd = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(calculateGcd(firstNumber, secondNumber));
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(ruleForGame, createLogicOfGameGcd);
};
