import launchGame from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(gameDescription, getQuestionAndAnswer);
};
