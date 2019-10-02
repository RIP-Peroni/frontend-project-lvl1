import launchGame from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const gameDescription = 'What is the result of the expression?';

const operator = '-+*';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const mathSign = operator[getRandomNumber(0, operator.length - 1)];
  const question = `${num1} ${mathSign} ${num2}`;
  let correctAnswer = '';
  switch (mathSign) {
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      return false;
  }
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(gameDescription, getQuestionAndAnswer);
};
