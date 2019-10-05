import launchGame from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGcd(num1, num2));
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(gameDescription, getQuestionAndAnswer);
};
